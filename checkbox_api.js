// toggle drowpodwn master

$(document).ready(function(){
  $("#dropdown_master").click(function(){
    $(".mrk_checkbox_group_is_dropdown").addClass("hidden_display_none");
    $("#dropdown_master").addClass("dropdown_menu_resetter_hidden");
 
  });
});





// dropdown manager

$(document).ready(function(){
  $(".dropdown_menu_descr").click(function(){
		
		
		
	$(this).siblings(".mrk_checkbox_group_is_dropdown").toggleClass("hidden_display_none");
    $("#dropdown_master").toggleClass("dropdown_menu_resetter_hidden");
 
  });
});






// api




// square checkboxes
$(document).ready(function(){
  $(".mrk_checkbox").click(function(){
    
    if(this.classList.contains('cbox_blocked'))
    {
      
    }
    else
     {
        $(this).find(".mrk_checkbox_tickmark").toggleClass("checkbox_inner_unset");
        $(this).find(".mrk_checkbox_tickmark").toggleClass("checkbox_set_true");
     }
  });
});



// mrk_checkbox_group


// round checkboxes
$(document).ready(function(){
  $(".mrk_checkbox_override").click(function(){
    
    if(this.classList.contains('cbox_blocked'))
    {
      
    }
    else
     {
        $(this).find(".mrk_checkbox_tickmark").toggleClass("checkbox_inner_unset");
        $(this).find(".mrk_checkbox_tickmark").toggleClass("checkbox_set_true");
        
          
        var current_container = this.closest(".mrk_checkbox_group");

        var current_row_row = $(this).attr('mrk_crow');
       
       
       // block all square checkboxes 
       $(current_container).find(".mrk_checkbox").toggleClass("cbox_blocked");
       
       // block all round override checkboxes
       $(current_container).find(".mrk_checkbox_override").toggleClass("cbox_blocked");
       
       // block override all
       $(current_container).find(".checkbox_inner_sqare").toggleClass("cbox_set_false_override");

       
       // unblock current row round checkbox
     
       $(current_container).find("[mrk_crow=\"" + current_row_row + "\"]").removeClass("cbox_set_false_override");
       
       $(current_container).find("[mrk_crow=\"" + current_row_row + "\"]").removeClass("cbox_blocked");
       
       
       
       // remove death tag
       $(current_container).find("[mrk_crow=\"" + current_row_row + "\"]").removeClass("checkbox_inner_unset");
       // now make set state to true
       $(current_container).find("[mrk_crow=\"" + current_row_row + "\"]").addClass("checkbox_set_true");
       
       

 
     }
  });
});
