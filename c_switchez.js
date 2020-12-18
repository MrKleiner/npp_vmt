function set_def_all()
{
	set_def_def_bracks();
	set_def_sq_bracks();
	set_def_dsign_psign();
	set_def_mtype();
	set_def_wproxy();
	set_def_shader_bg();
	set_def_shader_fg();
	set_defs_w_cvars();
	set_def_nums();
	set_def_perc_params();
	set_def_dol_params(); 
	set_def_pr_params(); 
	set_def_pr_names();
	set_def_btexture();
	set_def_theme_bg();
}

// bg cfg 

$("#theme_bg_picker").change(function(){
  $(".line").css('background', $(this).val());
  document.getElementById("cd_theme_bg_picker").value = document.getElementById("theme_bg_picker").value.substring(1);
});






// vmt cfg vis col pick


// proxy names
$("#pr_names_picker").change(function(){
  $(".proxy_names").css('color', $(this).val());
  // 1 - text input 2 - color input
  document.getElementById("cd_pr_names_picker").value = document.getElementById("pr_names_picker").value.substring(1);
});


// proxy params
$("#pr_params_picker").change(function(){
  $(".proxy_params").css('color', $(this).val());
    // 1 - text input 2 - color input
  document.getElementById("cd_pr_params_picker").value = document.getElementById("pr_params_picker").value.substring(1);
});


//dol params
$("#dol_params_picker").change(function(){
  $(".dol_params").css('color', $(this).val());
  // 1 - text input 2 - color input
  document.getElementById("set_def_dol_params").value = document.getElementById("dol_params_picker").value.substring(1);  

});


// num color
$("#num_col_picker").change(function(){
  $(".p_nums").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_nums_picker").value = document.getElementById("num_col_picker").value.substring(1);  
});


// cvars and default
$("#cvars_c_picker").change(function(){
  $(".noname_cvars").css('color', $(this).val());
  $(".t_path").css('color', $(this).val());
  
  // qmark
  $(".qmark").css('color', $(this).val());
    // 1 - text input 2 - color input
  document.getElementById("cd_cvars_w_def_picker").value = document.getElementById("cvars_c_picker").value.substring(1); 
});


// btexture
$("#btexture_c_picker").change(function(){
  $(".base_texture").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_btexture_picker").value = document.getElementById("btexture_c_picker").value.substring(1);
});


// shaders fg
$("#shader_fg_picker").change(function(){
  $(".shaders").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_shader_picker").value = document.getElementById("shader_fg_picker").value.substring(1);
});


// shaders bg
$("#shader_bg_picker").change(function(){
  $(".shaders").css('background', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_shader_bg_picker").value = document.getElementById("shader_bg_picker").value.substring(1);
});


// word proxy
$("#word_proxy_c_picker").change(function(){
  $(".word_proxy").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_wproxy_bg_picker").value = document.getElementById("word_proxy_c_picker").value.substring(1);
});


// mat types
$("#mat_types_c_picker").change(function(){
  $(".mat_types").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_mtypes_bg_picker").value = document.getElementById("mat_types_c_picker").value.substring(1);  
});


// dsign psign
$("#dsign_c_picker").change(function(){
  $(".dolsign").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_dpsign_bg_picker").value = document.getElementById("dsign_c_picker").value.substring(1); 
});


// sq bracks
$("#sq_bracks_c_picker").change(function(){
  $(".sq_brackets_open").css('color', $(this).val())
  $(".sq_brackets_close").css('color', $(this).val());
  
      // 1 - text input 2 - color input
  document.getElementById("cd_sqb_bg_picker").value = document.getElementById("sq_bracks_c_picker").value.substring(1); 
});


// def bracks
$("#def_bracks_c_picker").change(function(){
  $(".def_brackets_open").css('color', $(this).val())
  $(".def_brackets_close").css('color', $(this).val());
     // 1 - text input 2 - color input
  document.getElementById("cd_defb_bg_picker").value = document.getElementById("def_bracks_c_picker").value.substring(1); 
});


// perc params
$("#perc_params_picker").change(function(){
  $(".perc_params_aw").css('color', $(this).val());
   // 1 - text input 2 - color input
  document.getElementById("cd_perc_params_picker").value = document.getElementById("perc_params_picker").value.substring(1);  
  
});






















// copypasta start text input
// copypasta start text input
// copypasta start text input
// copypasta start text input





// theme bg

// function cp_set_theme_bg()
// {
  // document.getElementById("theme_bg_picker").value = "#" + document.getElementById("cd_theme_bg_picker").value;
  // $(".line").css('background', $(this).val());
// }




// theme bg

$("#cd_theme_bg_picker").change(function(){
  $(".line").css('background', "#" + $(this).val());
  // $(".def_brackets_close").css('color', $(this).val());
  document.getElementById("theme_bg_picker").value = "#" + document.getElementById("cd_theme_bg_picker").value;
});





// btexture color

// from text inp to col inp. 1 - text input
$("#cd_btexture_picker").change(function(){
	// 2 - set vis feedback col
  $(".base_texture").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("btexture_c_picker").value = "#" + document.getElementById("cd_btexture_picker").value;
});





// proxy names

// from text inp to col inp. 1 - text input
$("#cd_pr_names_picker").change(function(){
	// 2 - set vis feedback col
  $(".proxy_names").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("pr_names_picker").value = "#" + document.getElementById("cd_pr_names_picker").value;
});




// Proxy parameters

// from text inp to col inp. 1 - text input
$("#cd_pr_params_picker").change(function(){
	// 2 - set vis feedback col
  $(".proxy_params").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("pr_params_picker").value = "#" + document.getElementById("cd_pr_params_picker").value;
});


// dol params

// from text inp to col inp. 1 - text input
$("#set_def_dol_params").change(function(){
	// 2 - set vis feedback col
  $(".dol_params").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("dol_params_picker").value = "#" + document.getElementById("set_def_dol_params").value;
});




// perc params

// from text inp to col inp. 1 - text input
$("#cd_perc_params_picker").change(function(){
	// 2 - set vis feedback col
  $(".perc_params_aw").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("perc_params_picker").value = "#" + document.getElementById("cd_perc_params_picker").value;
});



// perc params

// from text inp to col inp. 1 - text input
$("#cd_perc_params_picker").change(function(){
	// 2 - set vis feedback col
  $(".perc_params_aw").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("perc_params_picker").value = "#" + document.getElementById("cd_perc_params_picker").value;
});



// numbers params

// from text inp to col inp. 1 - text input
$("#cd_nums_picker").change(function(){
	// 2 - set vis feedback col
  $(".p_nums").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("num_col_picker").value = "#" + document.getElementById("cd_nums_picker").value;
});



// cvars w def

// from text inp to col inp. 1 - text input
$("#cd_cvars_w_def_picker").change(function(){
	// 2 - set vis feedback col
  $(".noname_cvars").css('color', "#" + $(this).val());
	// 2 - set vis feedback col
  $(".t_path").css('color', "#" + $(this).val());  
 	// 2 - set vis feedback col
  $(".qmark").css('color', "#" + $(this).val());  
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("cvars_c_picker").value = "#" + document.getElementById("cd_cvars_w_def_picker").value;
});




// shader fg

// from text inp to col inp. 1 - text input
$("#cd_shader_picker").change(function(){
	// 2 - set vis feedback col
  $(".shaders").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("shader_fg_picker").value = "#" + document.getElementById("cd_shader_picker").value;
});



// shader bg

// from text inp to col inp. 1 - text input
$("#cd_shader_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".shaders").css('background', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("shader_bg_picker").value = "#" + document.getElementById("cd_shader_bg_picker").value;
});



// w proxy

// from text inp to col inp. 1 - text input
$("#cd_wproxy_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".word_proxy").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("word_proxy_c_picker").value = "#" + document.getElementById("cd_wproxy_bg_picker").value;
});




// mat types

// from text inp to col inp. 1 - text input
$("#cd_mtypes_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".mat_types").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("mat_types_c_picker").value = "#" + document.getElementById("cd_mtypes_bg_picker").value;
});



// dsign w psign

// from text inp to col inp. 1 - text input
$("#cd_dpsign_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".dolsign").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("dsign_c_picker").value = "#" + document.getElementById("cd_dpsign_bg_picker").value;
});





// sq bracks

// from text inp to col inp. 1 - text input
$("#cd_sqb_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".sq_brackets_open").css('color', "#" + $(this).val());
  	// 2 - set vis feedback col
  $(".sq_brackets_close").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("sq_bracks_c_picker").value = "#" + document.getElementById("sq_bracks_c_picker").value;
});



// def bracks

// from text inp to col inp. 1 - text input
$("#cd_defb_bg_picker").change(function(){
	// 2 - set vis feedback col
  $(".def_brackets_open").css('color', "#" + $(this).val());
  	// 2 - set vis feedback col
  $(".def_brackets_close").css('color', "#" + $(this).val());
	// 3 - from text input to col input. 1 - col inp 2 - text inp
  document.getElementById("def_bracks_c_picker").value = "#" + document.getElementById("cd_defb_bg_picker").value;
});



















// Defaults



// def bg

function set_def_theme_bg() 
{ 
	set_def_theme_bg.value = "0C1021"; 
	document.getElementById("theme_bg_picker").value = "#" + set_def_theme_bg.value;
	document.getElementById("cd_theme_bg_picker").value = set_def_theme_bg.value;
	$(".line").css('background', "#" +  set_def_theme_bg.value);
} 


// btexture

function set_def_btexture() 
{
	set_def_btexture.value = "80a9ff";
	// c input
	document.getElementById("btexture_c_picker").value = "#" + set_def_btexture.value;
	// t input
	document.getElementById("cd_btexture_picker").value = set_def_btexture.value;
	// v feedb
	$(".base_texture").css('color', "#" +  set_def_btexture.value);
}




// proxy names

function set_def_pr_names() 
{
	// def val to set
	set_def_pr_names.value = "67d8da";
	// col input
	document.getElementById("pr_names_picker").value = "#" + set_def_pr_names.value;
	// text input
	document.getElementById("cd_pr_names_picker").value = set_def_pr_names.value;
	// vis feedb
	$(".proxy_names").css('color', "#" +  set_def_pr_names.value);
}





// proxy params

function set_def_pr_params() 
{
	// def val to set
	set_def_pr_params.value = "67d8da";
	// col input
	document.getElementById("pr_params_picker").value = "#" + set_def_pr_params.value;
	// text input
	document.getElementById("cd_pr_params_picker").value = set_def_pr_params.value;
	// vis feedb
	$(".proxy_params").css('color', "#" +  set_def_pr_params.value);
}





// dol params

function set_def_dol_params() 
{
	// def val to set
	set_def_dol_params.value = "67d8da";
	// col input
	document.getElementById("dol_params_picker").value = "#" + set_def_dol_params.value;
	// text input
	document.getElementById("set_def_dol_params").value = set_def_dol_params.value;
	// vis feedb
	$(".dol_params").css('color', "#" +  set_def_dol_params.value);
}



// perc params

function set_def_perc_params()
{
	// def val to set
	set_def_perc_params.value = "d966ff";
	// col input
	document.getElementById("perc_params_picker").value = "#" + set_def_perc_params.value;
	// text input
	document.getElementById("cd_perc_params_picker").value = set_def_perc_params.value;
	// vis feedb
	$(".perc_params_aw").css('color', "#" +  set_def_perc_params.value);
}





// numbers

function set_def_nums()
{
	// def val to set
	set_def_nums.value = "c8a6ff";
	// col input
	document.getElementById("num_col_picker").value = "#" + set_def_nums.value;
	// text input
	document.getElementById("cd_nums_picker").value = set_def_nums.value;
	// vis feedb
	$(".p_nums").css('color', "#" +  set_def_nums.value);
}




// cvars w def
function set_defs_w_cvars()
{
	// def val to set
	set_defs_w_cvars.value = "fbffd2";
	// col input
	document.getElementById("cvars_c_picker").value = "#" + set_defs_w_cvars.value;
	// text input
	document.getElementById("cd_cvars_w_def_picker").value = set_defs_w_cvars.value;
	// vis feedb
	$(".noname_cvars").css('color', "#" +  set_defs_w_cvars.value);
	$(".t_path").css('color', "#" +  set_defs_w_cvars.value);
	$(".qmark").css('color', "#" +  set_defs_w_cvars.value);
	
}




// shader fg
function set_def_shader_fg()
{
	// def val to set
	set_def_shader_fg.value = "63fa6f";
	// col input
	document.getElementById("shader_fg_picker").value = "#" + set_def_shader_fg.value;
	// text input
	document.getElementById("cd_shader_picker").value = set_def_shader_fg.value;
	// vis feedb
	$(".shaders").css('color', "#" +  set_def_shader_fg.value);
}





// shader bg
function set_def_shader_bg()
{
	// def val to set
	set_def_shader_bg.value = "000000";
	// col input
	document.getElementById("shader_bg_picker").value = "#" + set_def_shader_bg.value;
	// text input
	document.getElementById("cd_shader_bg_picker").value = set_def_shader_bg.value;
	// vis feedb
	$(".shaders").css('background', "#" +  set_def_shader_bg.value);
}



// w proxy
function set_def_wproxy()
{
	// def val to set
	set_def_shader_fg.value = "c835f9";
	// col input
	document.getElementById("word_proxy_c_picker").value = "#" + set_def_shader_fg.value;
	// text input
	document.getElementById("cd_wproxy_bg_picker").value = set_def_shader_fg.value;
	// vis feedb
	$(".word_proxy").css('color', "#" +  set_def_shader_fg.value);
}



// mat types
function set_def_mtype()
{
	// def val to set
	set_def_mtype.value = "7d81ff";
	// col input
	document.getElementById("mat_types_c_picker").value = "#" + set_def_mtype.value;
	// text input
	document.getElementById("cd_mtypes_bg_picker").value = set_def_mtype.value;
	// vis feedb
	$(".mat_types").css('color', "#" +  set_def_mtype.value);
}



// dolsign w psign
function set_def_dsign_psign()
{
	// def val to set
	set_def_mtype.value = "a4ffad";
	// col input
	document.getElementById("dsign_c_picker").value = "#" + set_def_mtype.value;
	// text input
	document.getElementById("cd_dpsign_bg_picker").value = set_def_mtype.value;
	// vis feedb
	$(".dolsign").css('color', "#" + set_def_mtype.value);
}




// sq bracks
function set_def_sq_bracks()
{
	// def val to set
	set_def_mtype.value = "ffffff";
	// col input
	document.getElementById("sq_bracks_c_picker").value = "#" + set_def_mtype.value;
	// text input
	document.getElementById("cd_sqb_bg_picker").value = set_def_mtype.value;
	// vis feedb
	$(".sq_brackets_open").css('color', "#" +  set_def_mtype.value);
	
	$(".sq_brackets_close").css('color', "#" +  set_def_mtype.value);
}


// def bracks
function set_def_def_bracks()
{
	// def val to set
	set_def_mtype.value = "00ff40";
	// col input
	document.getElementById("def_bracks_c_picker").value = "#" + set_def_mtype.value;
	// text input
	document.getElementById("cd_defb_bg_picker").value = set_def_mtype.value;
	// vis feedb
	$(".def_brackets_open").css('color', "#" +  set_def_mtype.value);
	
	$(".def_brackets_close").css('color', "#" +  set_def_mtype.value);
}










// def all








































