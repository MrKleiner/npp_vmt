

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

 

  });
});