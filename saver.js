// function download(filename, text) {
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    // element.setAttribute('download', filename);

    // element.style.display = 'none';
    // document.body.appendChild(element);

    // element.click();

    // document.body.removeChild(element);
// }


document.getElementById("sets_dl").addEventListener("click", function(){
    // Generate download
    var text = "Theme bg: " + document.getElementById("cd_theme_bg_picker").value 
	+ "\n"
	+ "Basetexture color: "
	+ document.getElementById("cd_btexture_picker").value
	+ "\n"
	+ "Proxy names: "
	+ document.getElementById("cd_pr_names_picker").value
	+ "\n"
	+ "Proxy parameters: "
	+ document.getElementById("cd_pr_params_picker").value
	+ "\n"
	+ "$ parameters: "
	+ document.getElementById("set_def_dol_params").value	
	+ "\n"
	+ "% parameters: "
	+ document.getElementById("cd_perc_params_picker").value
	+ "\n"
	+ "Numbers: "
	+ document.getElementById("cd_nums_picker").value
	+ "\n"
	+ "Custom variables / default color: "
	+ document.getElementById("cd_cvars_w_def_picker").value
	+ "\n"
	+ "Shader fg: "
	+ document.getElementById("cd_shader_picker").value
	+ "\n"
	+ "Shader bg: "
	+ document.getElementById("cd_shader_bg_picker").value
	+ "\n"
	+ "Word proxy: "
	+ document.getElementById("cd_wproxy_bg_picker").value
	+ "\n"
	+ "Material types: "
	+ document.getElementById("cd_mtypes_bg_picker").value
	+ "\n"
	+ "Dollar sign / percent sign: "
	+ document.getElementById("cd_dpsign_bg_picker").value	
	+ "\n"
	+ " [ ] : "
	+ document.getElementById("cd_sqb_bg_picker").value
	+ "\n"
	+ " { } : "
	+ document.getElementById("cd_defb_bg_picker").value
	+ "\n"
	+ "Comments: "
	+ document.getElementById("cd_comms_bg_picker").value
    var filename = "npp_vmt_language_colors.txt";
    
    download(filename, text);
}, false);











