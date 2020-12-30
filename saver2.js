// Why am I doing this ????



// function download(filename, text) {
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    // element.setAttribute('download', filename);

    // element.style.display = 'none';
    // document.body.appendChild(element);

    // element.click();

    // document.body.removeChild(element);
// }


document.getElementById("dl_to_file_btn").addEventListener("click", function(){
    // Generate download
    var text = "<prefz>"
	+ "<udt>"
	+ "\n"
	+ "=========================================================="
	+ "\n"
	+ "\n"
	+ "Yes, this is pretty readable. Don't sroll down."
	+ "\n"
	+ "\n"
	+ "\n"
	+ "Theme bg: " + document.getElementById("cd_theme_bg_picker").value 
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
	+ "\n"
	+ "\n"	
	+ "\n"
	+ "=========================================================="
	+ "\n"
	+ "</udt>"
	+ "\n"
	+ "\n"	
	+ "\n"	
	+ "\n"
	+ "\n"	
	+ "\n"	
	+ "\n"
	+ "\n"	
	+ "\n"	
	+ "\n"
	+ "\n"	
	+ "\n"	
	+ "\n"
	+ "\n"	
	+ "\n"	
	+ "\n"
	+ "<techdata>"
	+ "\n"
	+	"<theme_bg>" + document.getElementById("cd_theme_bg_picker").value + "</theme_bg>"
	+ "\n"
	+	"<btex_col>" + document.getElementById("cd_btexture_picker").value + "</btex_col>"
	+ "\n"
	+	"<proxy_names>" + document.getElementById("cd_pr_names_picker").value + "</proxy_names>"
	+ "\n"
	+	"<proxy_parameters>" + document.getElementById("cd_pr_params_picker").value + "</proxy_parameters>"
	+ "\n"
	+	"<dol_parameters>" + document.getElementById("set_def_dol_params").value + "</dol_parameters>"
	+ "\n"
	+	"<perc_parameters>" + document.getElementById("cd_perc_params_picker").value + "</perc_parameters>"
	+ "\n"
	+	"<numbers>" + document.getElementById("cd_nums_picker").value + "</numbers>"
	+ "\n"
	+	"<cvars_def>" + document.getElementById("cd_cvars_w_def_picker").value + "</cvars_def>"
	+ "\n"
	+	"<shader_fg>" + document.getElementById("cd_shader_picker").value + "</shader_fg>"
	+ "\n"
	+	"<shader_bg>" + document.getElementById("cd_shader_bg_picker").value + "</shader_bg>"
	+ "\n"
	+	"<wproxy>" + document.getElementById("cd_wproxy_bg_picker").value + "</wproxy>"
	+ "\n"
	+	"<mat_types>" + document.getElementById("cd_mtypes_bg_picker").value + "</mat_types>"
	+ "\n"
	+	"<dsign_psign>" + document.getElementById("cd_dpsign_bg_picker").value	 + "</dsign_psign>"
	+ "\n"
	+	"<sq_bracks>" + document.getElementById("cd_sqb_bg_picker").value + "</sq_bracks>"
	+ "\n"
	+	"<def_bracks>" + document.getElementById("cd_defb_bg_picker").value + "</def_bracks>"
	+ "\n"
	+	"<comments>" + "f5c48b" + "</comments>"
	+ "\n"
	+	"<wat>I told ya no to scroll down ya frick</wat>"
	+ "\n"
	+ "</techdata>"	
	+ "</prefz>"	


	
    var filename = "npp_vmt_language_colors.vmat";
    
    download(filename, text);
}, false);











