from pathlib import Path
import io, shutil

THISDIR = Path(__file__).parent

VMT_DIR = THISDIR / 'vmt_files'

OUT_DOLLAR = THISDIR / 'output' / 'dollar'

WEB_DL_DATA = THISDIR.parent / 'docs' / 'dl_data'

def _extract_prefixed_params(tgt_bytes, prefix=b'$'):
	tgt_bytes = tgt_bytes.lower()
	base_params, *proxy_vars = tgt_bytes.split(b'proxies')
	proxy_vars = proxy_vars[0] if proxy_vars else []

	# Proxy variable exclusion list
	proxy_excl_list = []


def extract_prefixed_params(tgt_bytes, prefix=b'$'):
	tgt_bytes = tgt_bytes.lower()
	if b'proxies' in tgt_bytes:
		return
	lines = tgt_bytes.split(b'\n')

	for l in lines:
		if not prefix in l:
			continue

		if l.strip().startswith(b'//') or l.strip().startswith(b'\\\\'):
			continue

		l = l.replace(b'"', b' ').replace(b"""'""", b' ').replace(b'\t', b' ')
		l = l.lstrip().split(b' ')
		result = None
		for e in l:
			if prefix in e:
				result = e.strip(prefix).strip().lower()
				break

		if not result:
			continue

		if result.startswith(b'//') or prefix in result or b'x360' in result:
			continue

		if not b'?' in result:
			yield result





class VMTComposition:
	def __init__(self, comp_path):
		self.comp_path = Path(comp_path)
		self._files = None

		self._params = None

		self.name = self.comp_path.name

	def read_comp(self):
		buf = io.BytesIO(
			self.comp_path.read_bytes()
		)

		self._files = []

		count = int.from_bytes(buf.read(4), 'little')

		size_array = []

		for s in range(count):
			size_array.append(
				(
					int.from_bytes(buf.read(1), 'little'),
					int.from_bytes(buf.read(2), 'little'),
				)
			)

		for fname_s, data_s in size_array:
			self._files.append(
				(
					buf.read(fname_s).decode(),
					buf.read(data_s)
				)
			)

		return self._files

	def process_comp(self):
		self._params['dollar'] = set()
		self._params['percent'] = set()

		for fname, fbytes in self.files:
			self._params['dollar'].update(
				extract_prefixed_params(fbytes, b'$')
			)
			self._params['percent'].update(
				extract_prefixed_params(fbytes, b'%')
			)

		return self._params

	@property
	def files(self):
		if self._files:
			return self._files

		self.read_comp()

		return self._files

	@property
	def params(self):
		if not self._params:
			self._params = {}
			self.process_comp()

		return self._params

	@property
	def percent_params(self):
		return self.params['percent']

	@property
	def dollar_params(self):
		return self.params['dollar']



class VMTGroups:
	def __init__(self, groups_dir):
		self.groups_dir = Path(groups_dir)
		self._groups = None

	@property
	def groups(self):
		if self._groups:
			return self._groups
		
		self.index_groups()

		return self._groups

	def index_groups(self):
		self._groups = {}

		for comp_file in self.groups_dir.glob('*.comp'):
			self._groups[comp_file.stem] = VMTComposition(comp_file)

	def __getitem__(self, key):
		return self.groups.get(key)

	def composite(self, blacklist=None):
		blacklist = blacklist or ()

		dollar_list = set()
		percent_list = set()

		for comp_name, comp_data in self.groups.items():
			print(comp_name)

			for param in comp_data.dollar_params:
				if not param in blacklist:
					dollar_list.add(param)

			for param in comp_data.percent_params:
				if not param in blacklist:
					percent_list.add(param)

		return dollar_list, percent_list

	def __iter__(self):
		for grpname, grpdata in self.groups.items():
			yield grpname, grpdata


class WordList:
	def __init__(self, tgt_file):
		self.tgt_file = Path(tgt_file)
		self._word_list = None

	@property
	def word_list(self):
		if self._word_list != None:
			return self._word_list

		wlist = list(map(
			lambda i: i.strip(),
			self.tgt_file.read_bytes().split(b'\n')
		))
		self._word_list = list(filter(
			lambda i: (not b'#' in i) and i,
			wlist
		))

		return self._word_list

	def __contains__(self, item):
		return item in self.word_list

	def __iter__(self):
		for i in self.word_list:
			yield i

	def __radd__(self, item):
		return item + self.word_list




def create_write_target(tgt_path):
	tgt_path = Path(tgt_path)
	tgt_path.parent.mkdir(parents=True, exist_ok=True)
	tgt_path.write_bytes(b'')
	return tgt_path


def main():
	dlr_comp_path = create_write_target(OUT_DOLLAR / 'dollar_composite.dparams')
	perc_comp_path = create_write_target(OUT_DOLLAR / 'percent_composite.dparams')

	blacklist = WordList(THISDIR / 'blacklist.bl')

	groups = VMTGroups(VMT_DIR)

	dollar_params, percent_params = groups.composite(blacklist)

	dlr_comp_path.write_bytes(b'\n'.join(dollar_params))
	perc_comp_path.write_bytes(b'\n'.join(percent_params))

	extra_dollar =       WordList(WEB_DL_DATA / 'extra' / 'extra_dollar.wr')
	extra_perc =         WordList(WEB_DL_DATA / 'extra' / 'extra_perc.wr')
	extra_autocomp =     WordList(WEB_DL_DATA / 'extra' / 'extra_autocomplete.wr')
	extra_shaders =      WordList(WEB_DL_DATA / 'extra' / 'shaders.wr')
	extra_surfaceprops = WordList(WEB_DL_DATA / 'extra' / 'surfaceprops.wr')
	proxy_kw =           WordList(WEB_DL_DATA / 'extra' / 'proxy_kw.wr')
	proxy_names =        WordList(WEB_DL_DATA / 'extra' / 'proxy_names.wr')

	autocomp_data = set()
	autocomp_data.update(
		dollar_params,
		percent_params,
		extra_dollar,
		extra_perc,
		extra_autocomp,
		extra_shaders,
		extra_surfaceprops
	)

	autocomp_data = list(autocomp_data)
	autocomp_data.sort()

	autocomp_file_path = create_write_target(WEB_DL_DATA / 'npp' / 'vmt_mrk.xml')

	# for test in (extra_dollar, extra_perc, extra_autocomp, extra_shaders, extra_surfaceprops):
	# 	for sex in test:
	# 		print(f'>{sex}<')

	with open(autocomp_file_path, 'ab') as autocomp_file:
		autocomp_file.write(b'<?xml version="1.0" encoding="Windows-1252" ?>\n')
		autocomp_file.write(b'<NotepadPlus>\n')
		autocomp_file.write(b'\t<AutoComplete>\n')

		for entry in autocomp_data:
			autocomp_file.write(b'\t\t<KeyWord name="')
			autocomp_file.write(entry)
			autocomp_file.write(b'" />\n')

		autocomp_file.write(b'\t</AutoComplete>\n')
		autocomp_file.write(b'</NotepadPlus>')


	lang_data_file = create_write_target(WEB_DL_DATA / 'npp' / 'vmt_syntax.xml')
	syntax_template = (THISDIR / 'chunks' / 'highlight.xml').read_bytes()

	# Percent
	syntax_template = syntax_template.replace(
		b'$$percent_params',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				list(percent_params) +
				extra_perc
			))
		))
	)
	# Shaders
	syntax_template = syntax_template.replace(
		b'$$shaders',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				extra_shaders
			))
		))
	)
	# Dollar params
	syntax_template = syntax_template.replace(
		b'$$dollar_params',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				list(dollar_params) +
				extra_dollar
			))
		))
	)
	# Proxy names
	syntax_template = syntax_template.replace(
		b'$$proxy_names',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				proxy_names
			))
		))
	)
	# Surface props
	syntax_template = syntax_template.replace(
		b'$$surface_props',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				extra_surfaceprops
			))
		))
	)
	# Proxy keywords
	syntax_template = syntax_template.replace(
		b'$$proxy_keywords',
		b'&#x000D;&#x000A;'.join(sorted(
			list(set(
				proxy_kw
			))
		))
	)

	lang_data_file.write_bytes(syntax_template)



def _main():
	search_results = THISDIR / 'output' / 'search'
	search_results.mkdir(parents=True, exist_ok=True)

	groups = VMTGroups(VMT_DIR)

	for grpname, grpdata in groups:
		print(grpname)
		for f_idx, fdata in enumerate(grpdata.files):
			fname, fbytes = fdata
			if b'proxies' in fbytes.lower():
				(search_results / f'{grpname}.{fname}.{f_idx}.vmt').write_bytes(fbytes)


if __name__ == '__main__':
	main()




