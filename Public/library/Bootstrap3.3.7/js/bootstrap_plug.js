
// $('li.dropdown[hover="1"],.dropdown-menu[hover="1"]').mouseover(function() {   
//      	$(this).addClass('open');    
//  	}).mouseout(function() {        
//  		$(this).removeClass('open');    
//  	}); 





$('.dropdown[hover="1"]').mouseover(function() {   
     	$(this).addClass('open');    
 	}).mouseout(function() {        
 		$(this).removeClass('open');    
 	}); 



$(function  () {
	$('[data-toggle="tooltip"]').tooltip();

	 $('[data-toggle="collapse"]').click(function  () {
	 	 
	 	if ($(this).attr('aria-expanded')=='true') {
	 		$(this).find('.icon_box').html("+");
	 	}else{
	 		$(this).find('.icon_box').html("-");
	 	}

	 	 
	 })



	 $('[data-spy="scroll"]').each(function () {
		  var $spy = $(this).scrollspy('refresh')
	})

	 // 为了实现楼层在指定的区域才显示
	 $(window).scroll(function() {
	 	// 判断在指定的区域才显示
	 	// 指定的区域到底是哪里
	 	if (this.scrollY>500) {
	 		$('#scroolspy_menu').show(500);
	 	}else{
	 		$('#scroolspy_menu').hide(500);
	 	}
 
	 		  // console.log(this.scrollY)
	 }); 

})