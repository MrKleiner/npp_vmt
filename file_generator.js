	var parser = new DOMParser();
	var xmlDoc;
	var textarea;

	function bodyready()
	{
		textarea = document.querySelector('#tarea');
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				myxmlstr = xhr.responseText;				
				myxmlstresc = myxmlstr.replaceAll('&', 'fuckoff');
				xmlDoc = parser.parseFromString(myxmlstresc, "text/xml");
			}
		}
		xhr.open('GET', 'xml/new/light/vmt-test.xml', true);
		xhr.send(null);
	}


	function updcolor()
	{
		
		// theme bg
		let theme_bg_picker = document.getElementById("theme_bg_picker").value.substring(1);
		
		
		
		
		// proxy names
		let pr_names_picker = document.getElementById("pr_names_picker").value.substring(1);
		
		//proxy params
		let pr_params_picker = document.getElementById("pr_params_picker").value.substring(1);
		
		// dol params
		let dol_params_picker = document.getElementById("dol_params_picker").value.substring(1);
		
		// numbers
		let num_col_picker = document.getElementById("num_col_picker").value.substring(1);
		
		// cvars
		let cvars_c_picker = document.getElementById("cvars_c_picker").value.substring(1);
		
		// btexture
		let btexture_c_picker = document.getElementById("btexture_c_picker").value.substring(1);
		
		// perc parameters
		let perc_params_picker = document.getElementById("perc_params_picker").value.substring(1);		
		
		// shaders bg
		let shader_bg_picker = document.getElementById("shader_bg_picker").value.substring(1);				
		
		// shaders fg
		let shader_fg_picker = document.getElementById("shader_fg_picker").value.substring(1);			

		// word proxy
		let word_proxy_c_picker = document.getElementById("word_proxy_c_picker").value.substring(1);			

		// mat types
		let mat_types_c_picker = document.getElementById("mat_types_c_picker").value.substring(1);	

		// dollar and percent sign 
		let dsign_c_picker = document.getElementById("dsign_c_picker").value.substring(1);

		// square brackets 
		let sq_bracks_c_picker = document.getElementById("sq_bracks_c_picker").value.substring(1);		

		// default brackets
		let def_bracks_c_picker = document.getElementById("def_bracks_c_picker").value.substring(1);	

		// qmarks
		// let qmarks_c_picker = document.getElementById("qmarks_c_picker").value.substring(1);	










		
		
		// let oneMoreColorPicked = document.getElementById("oneMoreColorPicker").value.substring(1);
		
		
		let x = xmlDoc.getElementsByTagName("WordsStyle");
		
		for (i = 0; i < x.length ;i++) 
		{
			const nameAttr = x[i].getAttribute('name');
			switch (nameAttr) {
				
			  case 'DEFAULT':
				x[i].setAttribute('fgColor', cvars_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;



			  case 'COMMENTS':
				// x[i].setAttribute('fgColor', cvars_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;
				
			  case 'LINE COMMENTS':
				// x[i].setAttribute('fgColor', cvars_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;				
				
			  case 'NUMBERS':
				x[i].setAttribute('fgColor', num_col_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
				
				
				
				
				
				
				
				
			  case 'KEYWORDS1':
				x[i].setAttribute('fgColor', btexture_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  case 'KEYWORDS2':
				x[i].setAttribute('fgColor', perc_params_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;	
				
			  case 'KEYWORDS3':
				x[i].setAttribute('fgColor', shader_fg_picker);
				x[i].setAttribute('bgColor', shader_bg_picker);
				break;					
				
			  case 'KEYWORDS4':
				x[i].setAttribute('fgColor', word_proxy_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  case 'KEYWORDS5':
				x[i].setAttribute('fgColor', dol_params_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  case 'KEYWORDS6':
				x[i].setAttribute('fgColor', pr_names_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  case 'KEYWORDS7':
				x[i].setAttribute('fgColor', mat_types_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;		
				
			  case 'KEYWORDS8':
				x[i].setAttribute('fgColor', pr_params_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;	
				
			  case 'OPERATORS':
				x[i].setAttribute('fgColor', dsign_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;				
				
			  case 'FOLDER IN CODE1':
				x[i].setAttribute('fgColor', def_bracks_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;				
				
			  case 'FOLDER IN CODE2':
				// x[i].setAttribute('fgColor', pr_params_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  case 'FOLDER IN COMMENT':
				// x[i].setAttribute('fgColor', pr_params_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;						
				
			  case 'DELIMITERS1':
				x[i].setAttribute('fgColor', sq_bracks_c_picker);
				x[i].setAttribute('bgColor', theme_bg_picker);
				break;					
				
			  // case 'DELIMITERS3':
				// x[i].setAttribute('fgColor', qmarks_c_picker);
				// x[i].setAttribute('bgColor', theme_bg_picker);
				// break;					
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			  // default:
				// x[i].setAttribute('fgColor', fgColorPicked);
				// x[i].setAttribute('bgColor', bgColorPicked);
			}


			// textarea.value += x[i].getAttribute('name') 
							   // + "  fgColor: "
							   // + x[i].getAttribute('fgColor')
							   // + "  bgColor:"
							   // + x[i].getAttribute('bgColor')
							   // +"\n";
			
		}
		
		var filename = "vmt-test++.xml";
		var s = new XMLSerializer();
		var str = s.serializeToString(xmlDoc).replaceAll('fuckoff', '&');
		download(filename, str);
	}
	
	
	function download(filename, text) 
	{
	
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
  
  