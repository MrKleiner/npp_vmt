from pathlib import Path
import io

THISDIR = Path(__file__).parent

VMT_DIR = THISDIR / 'vmt_files'



def main():
	for game in VMT_DIR.glob('*'):
		if not game.is_dir():
			continue

		index_buf = io.BytesIO()
		data_buf = io.BytesIO()

		file_count = 0

		for file in game.glob('*.vmt'):
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

