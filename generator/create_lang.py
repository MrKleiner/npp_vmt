from pathlib import Path
import io, shutil

THISDIR = Path(__file__).parent

VMT_DIR = THISDIR / 'vmt_files'

OUT_DOLLAR = THISDIR / 'output' / 'dollar'



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
				(buf.read(fname_s).decode(), buf.read(data_s))
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
		self.groups = None

	def index_groups(self):
		self.groups = {}

		for comp_file in self.groups_dir.glob('*.comp'):
			self.groups[comp_file.stem] = VMTComposition(comp_file)

	def __getitem__(self, key):
		if not self.groups:
			self.index_groups()

		return self.groups.get(key)

	def composite(self, blacklist=None):
		if not self.groups:
			self.index_groups()

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



def main():
	dlr_comp_path = OUT_DOLLAR / 'dollar_composite.dparams'
	dlr_comp_path.parent.mkdir(parents=True, exist_ok=True)
	dlr_comp_path.write_bytes(b'')

	perc_comp_path = OUT_DOLLAR / 'percent_composite.dparams'
	perc_comp_path.parent.mkdir(parents=True, exist_ok=True)
	perc_comp_path.write_bytes(b'')

	blacklist = list(map(
		lambda i: i.strip(),
		(THISDIR / 'blacklist.bl').read_bytes().split(b'\n')
	))
	blacklist = list(filter(
		lambda i: not b'#' in i,
		blacklist
	))

	groups = VMTGroups(VMT_DIR)

	dollar_params, percent_params = groups.composite(blacklist)

	dlr_comp_path.write_bytes(b'\n'.join(dollar_params))
	perc_comp_path.write_bytes(b'\n'.join(percent_params))




if __name__ == '__main__':
	main()




