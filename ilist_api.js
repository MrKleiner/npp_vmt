

// dropdown manager

$(document).ready(function(){
  $(".mrk_ilist_container").click(function(){
    $(this).find(".mrk_ilist_dropdown").toggleClass("ilist_hidden");
    $(this).find(".mrk_ilist_dropdown").removeClass("dropdown_menu_resetter_hidden");
    
    
 
  });
});




// base api






$(document).ready(function(){
  $(".mrk_ilist_entry").click(function(){
    
    
    var current_set_path = $(this).attr("mrk_preset_path");
    var current_name = this.textContent;
    var find_display = this.closest(".mrk_ilist_container");
    
    // set name for visual feedback
    $(find_display).find(".mrk_ilist_active_item_display_p").text(current_name);
    
    // set tech data. Path
    $(find_display).find(".mrk_ilist_active_item_display").attr( "mrk_active_preset_path",current_set_path);
	
	console.log("mrk_ilist_entry clicked");
	
	// get_preset_other_themes();
	
	// call appropriate function
	$(find_display).find(".mrk_ilist_function_storage").trigger("click");
	
	// hide list and hide the ghost
	
    $(find_display).find(".mrk_ilist_dropdown").toggleClass("ilist_hidden");
    $(find_display).find(".mrk_ilist_dropdown").removeClass("dropdown_menu_resetter_hidden");
	
	// $('#billing_state_id').trigger('change');
	
	
	// YOU CAN TRIGGER ONCLICK MANUALLY. NAME A FUNCTION IN ONCLICK.
	
	// DIV ELEMENT ALL EVENTS.
	
	// select event will work just fine.

 

  });
});





function select_alert()
{
	alert("fuckyou");
}




































/*
function ilist_click(triggeree)
{
    
    var current_set_path = $(triggeree).attr("mrk_preset_path");
    var current_name = triggeree.textContent;
    var find_display = triggeree.closest(".mrk_ilist_container");
    
    // set name for visual feedback
    $(find_display).find(".mrk_ilist_active_item_display_p").text(current_name);
    
    // set tech data. Path
    $(find_display).find(".mrk_ilist_active_item_display").attr( "mrk_active_preset_path",current_set_path);
	
	console.log("mrk_ilist_entry clicked");

}


*/















































