

const body_onload = async function(){
	const response = await fetch(
		'./info.json',
		{
			'headers': {
				'accept': '*/*',
				'cache-control': 'no-cache',
				'pragma': 'no-cache'
			},
			'method': 'GET',
			'mode': 'cors',
			'credentials': 'omit',
			'cache': 'no-store',
		}
	)

	const info_json = await response.json();

	for (const dom of document.querySelectorAll('#download_box a.dl_link')){
		dom.title = `Last update: ${info_json.last_update}`;
	}
}

