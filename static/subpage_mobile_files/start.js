
/**
 * Website start here
 */


jQuery(document).ready(function($){ 
	var url = document.URL;
	if(url.indexOf('/tin/') == -1){
		$('.menu-home').addClass('active');
	}else{
		url = url.split('/tin/');
		if(url.length>=2){
			url = url[1].split('/');
			$('.menu-'+url[0]).addClass('active');
		}else{
			$('.menu-home').addClass('active');
		}

	}
	$(".sb-toggle-left").click(function () {
		if($(".sb-slidebar").hasClass("active")){
			$(".sb-slidebar").removeClass("active");
			$("#sb-site").removeClass("active");
			$("#sb-site").css({"width": "auto", "height": "auto"});
		}
		else{
			$(".sb-slidebar").addClass("active");
			$("#sb-site").addClass("active");
			/* $("#sb-site").css("width", $(window).width()) */;
			
			if($(window).height() >  $(".sb-slidebar").height()){
				$("#sb-site").css("height","auto");
			}
			else
			{
				$("#sb-site").css("height",$(".sb-slidebar").height());
			}
		}
		/* setTimeout(function(){
			$(".txt-search").focus();
		}, 1000); */
	});
	$(".btn-find").click(function () {
		if($(".frm-s").hasClass("active")){
			$(".frm-s").removeClass("active");
		}
		else{
			$(".frm-s").addClass("active");
		}
	});
	tabBlock("tabs");
	
	if($(".slider-1").length > 0){
		 $('.slider-1').flexslider();
	}
	if($(".slider-debate").length > 0){
		 $('.slider-debate').flexslider();
		 $('.slider-debate .slides li').css("height", $('.slider-debate .slides').height() )
	}
	if($(".slider-3").length > 0){
		 $('.slider-3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 225,
            itemMargin: 1
         });
	}
	if($(".slider-ts").length > 0){
		 $('.slider-ts').flexslider({      
            slideshow: false
         });
	}
	if($(".carousel-media").length > 0){
		 $('.carousel-media').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 220,
            itemMargin: 20
         });
	}
	if($(".carousel-2").length > 0){
		 $('.carousel-2').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 225,
            itemMargin: 15
         });
	}
	if($(".carousel-3").length > 0){
		 $('.carousel-3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 225,
            itemMargin: 15
         });
		 $('.carousel-3 .flex-viewport').css("width",  $(window).width() -30 )
	}
	$( window ).resize(function() {
	  $('.carousel-3 .flex-viewport').css("width",  $(window).width() -30 );
	  if($(".slider-debate").length > 0){
		$('.slider-debate .slides li').css("height", $('.slider-debate .slides').height() );
	  }
	});
	
	if($(".slider-2").length > 0){
		 $('.slider-2').flexslider();
	}
	if($(".flexslider-media").length > 0){
		 $('.flexslider-media').flexslider();
	}
	if($(".scroll-pane").length > 0){
		$('.scroll-pane').jScrollPane();	
	}
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}
 	/* var lastScroll = 0;
	$(window).scroll(function(event){
          var st = $(this).scrollTop();
          if (st > lastScroll){
			 $(".navbar ").addClass("animate"); 
          }
          else {
             $(".navbar ").removeClass("animate");
          }
          lastScroll = st;
    });   */

	if($('.sl-ts').length > 0){
		$('.sl-ts').on('change', function() {
		  var abc = this.value;
		  if( abc == 0){
			$('.inner-ts.none').hide();
			$('.modal-body').css({"overflow-y": "hidden" , "height": "auto"});
		  }
		  else{
			$('.inner-ts.none').show();
			$('.current-ts').hide();
			$('#'+ abc +'').show();
		  }
		  $('.inner-ts.none-1').hide();
		  $('.chk-ts').attr('checked', false);	
		  return false;
		});
	}
	if($('.chk-ts').length > 0){	
		$('.inner-ts.none-1').hide();
		$('.chk-ts').change(function() {
			if($(this).is(":checked")) {
				$('.inner-ts.none-1').show();
				$('#txt-tvv').val($(this).attr('id').substr(4));
			} 
			else{
				$('.inner-ts.none-1').hide();
			}	
		});
		$('.slider-ts .flex-direction-nav a').on('touchstart', function(){
			$('.inner-ts.none-1').hide();
			$('.chk-ts').attr('checked', false);	
		});
	}
	if($('.inner-ts.success').length > 0){
		$('.modal .close').click(function () {
			location.reload();
		});
	}
	$(".close-app").click(function () {
		$(".layer-app").hide();
	});

});
$(window).load(function(){ 
	$(".slider-debate .slides li").each( function() {
		if($(this).height() < $(this).find(".ck_image").height()){
			$(this).find(".ck_image").css({ "height": "100%", "width": "auto"})
		}
		else{
			$(this).find(".ck_image").css({ "height": "auto", "width": "100%"})
			$(this).find(".ck_image").css({ "margin-top": ($(this).height() - $(this).find(".ck_image").height())/2 })
		}
	});

	

			
});
/* $("#sb-site").bind('touchmove', function(e) {
	e.preventDefault();
}); */
 $(document).click(function() {
	$(".sb-slidebar").removeClass("active");
	$("#sb-site").removeClass("active");
	$("#sb-site").css("width", "auto" );
	if($('.inner-ts.success').length > 0){
		location.reload();
	}
});
$('.sb-slidebar').click(function(event){
	event.stopPropagation();
});
function tabBlock(id){
	$('#'+ id +' .tab:first').show();
	$('#'+ id +' ul.tab-ul li:first').addClass('active');
	$('#'+ id +' ul.tab-ul li a').click(function(){ 
		$('#'+ id +' ul.tab-ul li').removeClass('active');
		$(this).parent().addClass('active'); 
		var currentTab = $(this).attr('href'); 
		$('#'+ id +' .tab').hide();
		$(currentTab).show();
		if($('.scroll-pane').length > 0){
			$('.scroll-pane').jScrollPane();	
		}
		$(currentTab).find('.cnt-sub-tab:first').show();
		$(currentTab).find('.sub-tab a:first').addClass('selected');
		return false;
	});
}

