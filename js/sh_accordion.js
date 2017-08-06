<!-- sh_accordion script -->
	var show_id = null;
	$(document).ready(function(e) {
        $('.sh_accordion_head').click(function(){

			var sh_parent = $(this).parent(".sh_accordion_item");
			
			if(show_id!=null){
				show_id.slideUp('slow');
				show_id.parent(".sh_accordion_item").children(".sh_accordion_head").children('.sh_accordion_control').html('+');
			}
			
			if (sh_parent.children(".sh_accordion_body").is(':visible')){
				sh_parent.children(".sh_accordion_body").slideUp('slow');
				sh_parent.children(".sh_accordion_head").children('.sh_accordion_control').html('+');
				show_id=null;
				
			}
			else
			{
				sh_parent.children(".sh_accordion_body").slideDown('slow');
				sh_parent.children(".sh_accordion_head").children('.sh_accordion_control').html('-');
				show_id = sh_parent.children(".sh_accordion_body");
				
			}
			
			
		});
    });