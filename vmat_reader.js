// I literally have 0 fucking idea wtf is this. I was just copypasting the shit.
//
// If u see this, then you don't even know how happy I am knowing that someby needs that shit.
// Please, message me on Discord: Mr.Kleiner#4600 I'm gonna be sp happy :D
var wannadie;

        $(function () {
            $("#upload_vmat").bind("click", function () {
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xml)$/;
                // if (regex.test($("#fileUpload").val().toLowerCase())) 
				// {
                    if (typeof (FileReader) != "undefined") 
                        {
                          var reader = new FileReader();
                          reader.onload = function (e) 
                        {
                              $("#txtXml").val(e.target.result);
                             // alert(e.target.result);
                            
                            wannadie = (e.target.result)
                            
                           // alert(wannadie);
                            
                            
                            
                            
                            
                            
                            
                              var parser = new DOMParser();  
                              doc = parser.parseFromString(wannadie, 'text/xml');
                              var x = doc.getElementsByTagName("techdata");  
                            
                              for (i = 0;i < x.length; i++)  
                              {  
							  
                                 theme_bg_load = x[i].getElementsByTagName("theme_bg")[0].childNodes[0].nodeValue; 
								 
								 btex_col_load = x[i].getElementsByTagName("btex_col")[0].childNodes[0].nodeValue; 
								 
								 proxy_names_load = x[i].getElementsByTagName("proxy_names")[0].childNodes[0].nodeValue;
								 
								 proxy_parameters_load = x[i].getElementsByTagName("proxy_parameters")[0].childNodes[0].nodeValue;
								 
								 dol_parameters_load = x[i].getElementsByTagName("dol_parameters")[0].childNodes[0].nodeValue;
								 
								 perc_parameters_load = x[i].getElementsByTagName("perc_parameters")[0].childNodes[0].nodeValue;
								 
								 numbers_load = x[i].getElementsByTagName("numbers")[0].childNodes[0].nodeValue;
								 
								 cvars_def_load = x[i].getElementsByTagName("cvars_def")[0].childNodes[0].nodeValue;
								 
								 shader_fg_load = x[i].getElementsByTagName("shader_fg")[0].childNodes[0].nodeValue;
								 
								 shader_bg_load = x[i].getElementsByTagName("shader_bg")[0].childNodes[0].nodeValue;
								 
								 wproxy_load = x[i].getElementsByTagName("wproxy")[0].childNodes[0].nodeValue;
								 
								 mat_types_load = x[i].getElementsByTagName("mat_types")[0].childNodes[0].nodeValue;
								 
								 dsign_psign_load = x[i].getElementsByTagName("dsign_psign")[0].childNodes[0].nodeValue;
								 
								 sq_bracks_load = x[i].getElementsByTagName("sq_bracks")[0].childNodes[0].nodeValue;
								 
								 def_bracks_load = x[i].getElementsByTagName("def_bracks")[0].childNodes[0].nodeValue;
								 
								 comments_load = x[i].getElementsByTagName("comments")[0].childNodes[0].nodeValue;
								 
								 
								 
                               //  alert(x[i].getElementsByTagName("Phone")[0].getAttribute('Link') );
                                
                                
                              }  

                              // alert (theme_bg);
							  
							  
								// theme bg
								document.getElementById("theme_bg_picker").value = "#" + theme_bg_load;
								document.getElementById("cd_theme_bg_picker").value = theme_bg_load;
								$(".line").css('background', "#" +  theme_bg_load);
 

								// btex_col
                            
								// c input
								document.getElementById("btexture_c_picker").value = "#" + btex_col_load;
								// t input
								document.getElementById("cd_btexture_picker").value = btex_col_load;
								// v feedb
								$(".base_texture").css('color', "#" +  btex_col_load);							
								
                            
							
	// proxy names						
	document.getElementById("pr_names_picker").value = "#" + proxy_names_load;
	// text input
	document.getElementById("cd_pr_names_picker").value = proxy_names_load;
	// vis feedb
	$(".proxy_names").css('color', "#" +  proxy_names_load); 



	// proxy params	
	document.getElementById("pr_params_picker").value = "#" + proxy_parameters_load;
	// text input
	document.getElementById("cd_pr_params_picker").value = proxy_parameters_load;
	// vis feedb
	$(".proxy_params").css('color', "#" +  proxy_parameters_load);	
	
	
	
	// dollar params	
	document.getElementById("dol_params_picker").value = "#" + dol_parameters_load;
	// text input
	document.getElementById("set_def_dol_params").value = dol_parameters_load;
	// vis feedb
	$(".dol_params").css('color', "#" +  dol_parameters_load);
	
	
	
	
	// perc params
	document.getElementById("perc_params_picker").value = "#" + perc_parameters_load;
	// text input
	document.getElementById("cd_perc_params_picker").value = perc_parameters_load;
	// vis feedb
	$(".perc_params_aw").css('color', "#" +  perc_parameters_load);
	
	
	
	
	// numbers
	document.getElementById("num_col_picker").value = "#" + numbers_load;
	// text input
	document.getElementById("cd_nums_picker").value = numbers_load;
	// vis feedb
	$(".p_nums").css('color', "#" +  numbers_load);
	
	
	
	
	
	// cvars w def
	document.getElementById("cvars_c_picker").value = "#" + cvars_def_load;
	// text input
	document.getElementById("cd_cvars_w_def_picker").value = cvars_def_load;
	// vis feedb
	$(".noname_cvars").css('color', "#" +  cvars_def_load);
	$(".t_path").css('color', "#" +  cvars_def_load);
	$(".qmark").css('color', "#" +  cvars_def_load);
	
	
	
	// shader fg
	document.getElementById("shader_fg_picker").value = "#" + shader_fg_load;
	// text input
	document.getElementById("cd_shader_picker").value = shader_fg_load;
	// vis feedb
	$(".shaders").css('color', "#" +  shader_fg_load);
	
	
	
	
	
	// shader bg
	document.getElementById("shader_bg_picker").value = "#" + shader_bg_load;
	// text input
	document.getElementById("cd_shader_bg_picker").value = shader_bg_load;
	// vis feedb
	$(".shaders").css('background', "#" +  shader_bg_load);
	
	
	
	// w proxy
	document.getElementById("word_proxy_c_picker").value = "#" + wproxy_load;
	// text input
	document.getElementById("cd_wproxy_bg_picker").value = wproxy_load;
	// vis feedb
	$(".word_proxy").css('color', "#" +  wproxy_load);
	
	
	
	// mat types
	document.getElementById("mat_types_c_picker").value = "#" + mat_types_load;
	// text input
	document.getElementById("cd_mtypes_bg_picker").value = mat_types_load;
	// vis feedb
	$(".mat_types").css('color', "#" +  mat_types_load);	
	
	
	
	// dolsign w psign
	document.getElementById("dsign_c_picker").value = "#" + dsign_psign_load;
	// text input
	document.getElementById("cd_dpsign_bg_picker").value = dsign_psign_load;
	// vis feedb
	$(".dolsign").css('color', "#" + dsign_psign_load);	
	
	
	
	
	// sq bracks
	document.getElementById("sq_bracks_c_picker").value = "#" + sq_bracks_load;
	// text input
	document.getElementById("cd_sqb_bg_picker").value = sq_bracks_load;
	// vis feedb
	$(".sq_brackets_open").css('color', "#" +  sq_bracks_load);
	
	$(".sq_brackets_close").css('color', "#" +  sq_bracks_load);
	
	
	
	
	
	
	
	// Def bracks
	document.getElementById("def_bracks_c_picker").value = "#" + def_bracks_load;
	// text input
	document.getElementById("cd_defb_bg_picker").value = def_bracks_load;
	// vis feedb
	$(".def_brackets_open").css('color', "#" +  def_bracks_load);
	
	$(".def_brackets_close").css('color', "#" +  def_bracks_load);
	
	
	
	// DO THE COMMENTS FINALLY FUCK
                            
                           
                            
                            
                            
             
                        }
                        reader.readAsText($("#fileUpload")[0].files[0]);
                    } else {
                        alert("This browser does not support HTML5. Wtf r u using? Netscape?");
                    }
                // } 
				// else 
				// {
                    // alert("Please upload a valid .vmat file. You can open the file as the text file and copy the values by hand. Sorry");
                // }
            });
        });






