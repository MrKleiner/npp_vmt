// bg cfg 

$("#theme_bg_picker").change(function(){
  $(".line").css('background', $(this).val());
});







// vmt cfg

$("#pr_names_picker").change(function(){
  $(".proxy_names").css('color', $(this).val());
});


$("#pr_params_picker").change(function(){
  $(".proxy_params").css('color', $(this).val());
});


$("#dol_params_picker").change(function(){
  $(".dol_params").css('color', $(this).val());
});


$("#num_col_picker").change(function(){
  $(".p_nums").css('color', $(this).val());
});


// cvars and default
$("#cvars_c_picker").change(function(){
  $(".noname_cvars").css('color', $(this).val());
  $(".t_path").css('color', $(this).val());
  
  // qmark
  $(".qmark").css('color', $(this).val());
});


// btexture
$("#btexture_c_picker").change(function(){
  $(".base_texture").css('color', $(this).val());
});


// shaders fg
$("#shader_fg_picker").change(function(){
  $(".shaders").css('color', $(this).val());
});


// shaders bg
$("#shader_bg_picker").change(function(){
  $(".shaders").css('background', $(this).val());
});


// word proxy
$("#word_proxy_c_picker").change(function(){
  $(".word_proxy").css('color', $(this).val());
});


// mat types
$("#mat_types_c_picker").change(function(){
  $(".word_proxy").css('color', $(this).val());
});


// dsign psign
$("#dsign_c_picker").change(function(){
  $(".dolsign").css('color', $(this).val());
});


// sq bracks
$("#sq_bracks_c_picker").change(function(){
  $(".sq_brackets_open").css('color', $(this).val())
  $(".sq_brackets_close").css('color', $(this).val());
});


// def bracks
$("#def_bracks_c_picker").change(function(){
  $(".def_brackets_open").css('color', $(this).val())
  $(".def_brackets_close").css('color', $(this).val());
});























