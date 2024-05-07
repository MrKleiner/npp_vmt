"""
Per every child folder of a sibling folder (called "vmt_files" by default)
of the folder this file is located at - a "composite" file is created,
containing all of its VMT files inside,
so that potentially thousands of separate VMT files
don't have to be read from the disk each time
the language is generated.

The resulting "composite" files (containing all the VMTs)
are are a couple megabytes in size, so doing this
is 100% beneficial and it would be stupid not to do this.

This file has to be run before executing "create_lang.py"
"""

from pathlib import Path
import io

# The directory this file is located at
THISDIR = Path(__file__).parent

# The directory to get the VMT file groups from.
VMT_DIR = THISDIR / 'vmt_files'



def main():
	for game in VMT_DIR.glob('*'):
		if not game.is_dir():
			continue

		# This function is like 40 lines of code.
		# Just look at what it does to understand
		# how the composite files are created.
		index_buf = io.BytesIO()
		data_buf = io.BytesIO()

		file_count = 0

		# Recursively scan for vmt files
		for file in game.rglob('*.vmt'):
			# Avoid very funny jokes
			if not file.is_file():
				continue

			print(
				game.name.ljust(10, ' '),
				file.name
			)

			file_count += 1
			file_bytes = file.read_bytes()

			fname = file.name.strip('.vmt')

			data_buf.write(fname.encode())
			data_buf.write(file_bytes)

			index_buf.write(
				len(fname).to_bytes(1, 'little')
			)
			index_buf.write(
				len(file_bytes).to_bytes(2, 'little')
			)


		tgt_comp = VMT_DIR / f'{game.name}.comp'

		tgt_comp.write_bytes(b'')

		with open(tgt_comp, 'ab') as comp:
			comp.write(
				file_count.to_bytes(4, 'little')
			)
			comp.write(index_buf.getvalue())
			comp.write(data_buf.getvalue())



if __name__ == '__main__':
	main()

