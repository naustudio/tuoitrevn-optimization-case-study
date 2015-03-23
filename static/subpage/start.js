
/**
 * Website start here
 */
$(window).load(function() {
	$("table").each( function() {
		if($(this).find('.caption').length > 0){
		var wi_ = $(this).find('.caption').width();
		$(this).find('.ck_image').css("width", wi_ + 16);
		}
		else{
			if($(this).find('.ck_image').width() > $(this).find('.fck').width() ){
				$(this).find('.ck_image').css("width","100%");
			}
			else{
				$(this).find('.ck_image').css("width", "auto");
			}
		}
	});
	if($('#banner-top').length > 0){
		var top = $('#banner-top').offset().top - parseFloat($('#banner-top').css('marginTop').replace(/auto/, 0));
		if($('.wrapper > .block-adv-1').length > 0 ){
			var footTop = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 354;
		}
		else{
			var footTop = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 226;
		}
		var maxY = footTop - $('#banner-top').outerHeight() - 100;
		$(window).scroll(function(evt) {
			var y = $(this).scrollTop();	
			if (y > top) {
			   if (y < maxY) {
					$('#banner-top').addClass('fixed').removeAttr('style');  
				} else {
					var hl = $('.right-side').outerHeight();
					var hr = $('.left-side').outerHeight();
					if(hl < hr){
						$('#banner-top').removeClass('fixed').css({
							position: 'absolute',
							top: ($('.gettop').outerHeight() - $('#banner-top').outerHeight() - 46) + "px"
						});
					}					
				}
			} else {
				$('#banner-top').removeClass('fixed');
			}
		});	
	}	
	if($('#banner-top-1').length > 0){
		var top_ = $('#banner-top-1').offset().top - parseFloat($('#banner-top-1').css('marginTop').replace(/auto/, 0));
		
		if($('.wrapper > .block-adv-1').length > 0 ){
			var footTop_ = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 374;
		}
		else{
			var footTop_ = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 246;
		}
		var maxY_ = footTop_ - $('#banner-top-1').outerHeight() - 50;
		$(window).scroll(function(ev) {
			var y_ = $(this).scrollTop();	
			if (y_ > top_) {
			   if (y_ < maxY_) {
					$('#banner-top-1').addClass('fixed').removeAttr('style');  
				} else {
					var hl_ = $('.right-side').outerHeight();
					var hr_ = $('.sidebar').outerHeight();
					if(hl_ < hr_){
						$('#banner-top-1').removeClass('fixed').css({
							position: 'absolute',
							top: ($('.gettop').outerHeight() - $('#banner-top-1').outerHeight() - 4) + "px"
						});
					}					
				}
			} else {
				$('#banner-top-1').removeClass('fixed');
			}
		});	
	}
	if($('#cm-tt').length > 0){
		var top_1 = $('#cm-tt').offset().top - parseFloat($('#cm-tt').css('marginTop').replace(/auto/, 0)) - 100;
		
		if($('.wrapper > .block-adv-1').length > 0 ){
			var footTop_1 = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 246;
		}
		else{
			var footTop1_ = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) - 246;
		}
		var maxY_1 = footTop_1 - $('#cm-tt').outerHeight() -50;
		$(window).scroll(function(ev) {
			var y_1 = $(this).scrollTop();	
			if (y_1 > top_1) {
			   if (y_1 < maxY_1) {
					$('#cm-tt').addClass('fixed').removeAttr('style');  
				} else {
					var hl_1 = $('.right-side').outerHeight();
					var hr_1 = $('.sidebar').outerHeight();
					if(hl_1 < hr_1){
						$('#cm-tt').removeClass('fixed').css({
							position: 'absolute',
							top: ($('.gettop').outerHeight() - $('#cm-tt').outerHeight() - 50) + "px"
						});
					}					
				}
			} else {
				$('#cm-tt').removeClass('fixed');
			}
		});	
	}
	if($('.side-160').width() > 1){
		var top1 = $('#block-catago').offset().top - parseFloat($('#block-catago').css('marginTop').replace(/auto/, 0));
		var footTop1 = $('footer').offset().top - parseFloat($('footer').css('marginTop').replace(/auto/, 0)) -39 ;
		var maxY1 = footTop1 - $('#block-catago').outerHeight();
		$(window).scroll(function(ev) {
			var y1 = $(this).scrollTop();	
			if (y1 > top1) {
			   if (y1 < maxY1) {
					$('#block-catago').addClass('fixed').removeAttr('style');  
				} else {
					var hl1 = $('.side-160').outerHeight();
					var hr1 = $('.sidebar').outerHeight();
					if(hl1 < hr1){
						$('#block-catago').removeClass('fixed').css({
							position: 'absolute',
							top: ($('.gettop').outerHeight() - $('#block-catago').outerHeight()) + "px"
						});
					}					
				}
			} else {
				$('#block-catago').removeClass('fixed');
			}
		});	
	}
	
});
jQuery(document).ready(function($){  
	tabBlock("tabs");	
	tabBlock("tabs-1");
	tabBlock("tabs-2");	
	tabBlock("tabs-3");	
	tabBlock("tabs-4");	
	if (window.location.href.indexOf("tuoitre.vn/tim-kiem/gool") >= 0) {
		$('#tabs .tab:first').hide();
		$('#tabs ul.tab-ul li:first').removeClass('active');
		$('#tabs #tab-2').show();
		$('#tabs ul.tab-ul li:nth-child(2)').addClass('active');
	}
		 
/* 	$('.tabs-style > ul > li:first-child a').click(function(){
		$('.side-160').show();
		$('.side-490').css("width",490);
	});
	$('.tabs-style > ul > li:nth-child(2) a').click(function(){
		$('.side-160').hide();
		$('.side-490').css("width", "100%");
	}); */
	
	$(".wrapper-nss .nss-1:nth-child(3)").css("margin-left", 0);
	if($(".slide_content").length > 0){		
		$('.slide_content').each( function() {
			var srcs = $(this).find("img").attr('src');
			if(srcs != undefined){
				$(this).attr('href',  srcs.replace("i/s626", "r")); 
				var caption_ = $(this).find('.ck_legend.caption').text();
				$(this).attr('title', caption_);
				$(this).attr('data-fancybox-group', 'gallery');
			}				
		});
	
	var detail_url;
		$('.slide_content').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',
			closeBtn  : false,
			helpers : {
				buttons	: {},
				thumbs : {
					width  : 100,
					height : 100
				}
			},
			beforeLoad : function(){
				detail_url = document.URL;
			},
			afterLoad : function() {
				var toolbar = '<div class="tool-box"><a href="#" title=""></a><ul class="socialbar"><li><iframe src="//www.facebook.com/plugins/like.php?href='+detail_url+'&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:35px;" allowTransparency="true"></iframe></li></ul></div>';
				$(".fancybox-wrap").append(toolbar);
                var alt = $(this.element).parents().find("#object_title").text();
				$(".tool-box > a").text(alt);
				
				var tooltitle = '<div class="tool-title"></div>';
				$(".fancybox-wrap").append(tooltitle);
				var title = $(this.element).attr('title');
				$(".tool-title").text(title);
			},
			afterShow : function() {
				var wh = $(window).height();
				var imgh = $(".fancybox-image").height();
				if( imgh > wh ){
					$(".fancybox-image").css({"height": "100%" , "width": "auto"});
				}
				else{
				
					$(".fancybox-image").css({"height": "auto" , "width": "100%" , "margin-top": (wh-imgh)/2});
					
				}
			}
		});
	}
	
	
	var w = $("#fancybox-thumbs ul").width();
	$("#fancybox-thumbs ul").width(104);
	
	if($(".ctn-search").length > 0){
		$(".wrapper-search .ctn-search:first-child").show();
		$(".search-result .highlight-2 > .tab:first-child").show();
		$(".search-mode").click(function(){ 
			$(".wrapper-search .ctn-search:first-child").hide();
			$(".search-result .highlight-2 > .tab:first-child").hide();
			$(".wrapper-search .ctn-search:nth-child(2)").show();
			$(".search-result .highlight-2 > .tab:nth-child(2").show();
		 });
		 $(".frm-search-2 .btn-close").click(function(){ 
			$(".wrapper-search .ctn-search:first-child").show();
			$(".search-result .highlight-2 > .tab:first-child").show();
			$(".wrapper-search .ctn-search:nth-child(2)").hide();
			$(".search-result .highlight-2 > .tab:nth-child(2").hide();
		 });
		
	}
	if($(".scroll-pane-3").height() > 0){
		$('.scroll-pane').jScrollPane();	
	}
	if($(".scroll-pane").length > 0){
		$('.scroll-pane').jScrollPane();	
	}
	if($(".list-news").length > 0){
		$(".list-news li:nth-child(3n + 1)").css("padding-left", "0");
	}
	if($(".outer-feature .list-news").length > 0){
		$(".outer-feature .list-news li:nth-child(4)").css("padding-left", "7");
	}
	if($(".highlight-media").length > 0){
		$(".highlight-media > article:nth-child(5)").css("margin-left", "0");
	}
	$(".highlight-photo .outer > article:nth-child(4), .highlight-photo .outer > article:first-child").css("margin-left", "0");
	if($(".flexslider-1").length > 0){
		 $('.flexslider-1').flexslider({
			slideshowSpeed: 3000
		 });
		  $( ".flexslider-1" ).animate({opacity: 1}, 1000);
	}
	if($(".slider-1").length > 0){
		 $('.slider-1').flexslider();
	}
	if($(".slider-5").length > 0){
		 $('.slider-5').flexslider();
	}
	if($(".slider-4").length > 0){
		 $('.slider-4').flexslider();
	}
	if($(".slider-2").length > 0){
		 $('.slider-2').flexslider();
	}
	if($(".slider-3").length > 0){
		 $('.slider-3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 191,
            itemMargin: 1
         });
	}
	if($(".slider-car").length > 0){
		 $('.slider-car').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 214,
            itemMargin: 10.5
         });
	}
	if($(".slider-ts").length > 0){
		 $('.slider-ts').flexslider({         
            slideshow: false,
         });
	}
	if($(".carousel-1").length > 0){
		 $('.carousel-1').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 218,
            itemMargin: 5
         });
         $(".carousel-1" ).animate({opacity: 1}, 1000);
	}
	if($(".flexslider-new").length > 0){
		 (function() {

		  // store the slider in a local variable
		  var $window = $(window),
			  flexslider;

		  // tiny helper function to add breakpoints
		  function getGridSize() {
			return (window.innerWidth < 600) ? 2 :
				   (window.innerWidth < 768) ? 3 :
				   (window.innerWidth < 1080) ? 2 : 
				   (window.innerWidth > 1366) ? 2 : 3;
		  }

		

		  $window.load(function() {
			$('.flexslider-new').flexslider({
			  animation: "slide",
			  animationSpeed: 400,
			  animationLoop: false,
			  slideshow: true,
			  itemWidth: 210,
			  itemMargin: 5,
			  minItems: getGridSize(), // use function to pull in initial value
			  maxItems: getGridSize(), // use function to pull in initial value
			  start: function(slider){
				$('body').removeClass('loading');
				flexslider = slider;
			  }
			});
		  });

		  // check grid size on resize event
		  $window.resize(function() {
			var gridSize = getGridSize();

			flexslider.vars.minItems = gridSize;
			flexslider.vars.maxItems = gridSize;
		  });
		}());
	}
	if($(".carousel-4").length > 0){
		 $('.carousel-4').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 153,
            itemMargin: 11
         });
         $(".carousel-4" ).animate({opacity: 1}, 1000);                              
	}
	if($(".carousel-3").length > 0){
		 $('.carousel-3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            itemWidth: 182,
            itemMargin: 15
         });
         $(".carousel-3" ).animate({opacity: 1}, 1000);
	}
	if($(".carousel-5").length > 0){
		 $('.carousel-5').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 214,
            itemMargin: 5
         });
         $(".carousel-5" ).animate({opacity: 1}, 1000);
	}
	if($('.block-share').length > 0){
	  $(window).scroll(function(evt) {
	   var y = $(this).scrollTop();

	   if (y > 140) {
		  $('.block-share').addClass('fixed');  
	   } else {
		  $('.block-share').removeClass('fixed');
	   }
	  }); 
	 }
	 if($('.wrapper-nav').length > 0){
		  var _top = $('.wrapper-nav').offset().top - parseFloat($('.wrapper-nav').css('marginTop').replace(/auto/, 0));
		  $(window).scroll(function(evt) {
		   var _y = $(this).scrollTop();
		   if (_y > _top) {
			  $('.wrapper-nav').addClass('fixed'); 
				$('.main-1').css("margin-top", "30px")
		   } else {
			  $('.wrapper-nav').removeClass('fixed');
			  $('.main-1').css("margin-top", "0")
		   }
		  }); 
		 }

	 if($(".warpper-btn").length > 0){
		$('.btn-layer').each(function() {
			$(this).click(function() {
				if($(this).next(".layer").hasClass("active")){
					$(this).next(".layer").removeClass("active");
				}
				else {
					
					$(this).next(".layer").addClass("active");
					return false;
				}
			});
		});
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
	 if($('.list-tool').length > 0){
		  $('.anchor').click(function(){
		  $('html, body').animate({
		   scrollTop: $( $.attr(this,'href')).offset().top - 50
		  }, 500);
		  return false;
		 });
	}
	if($('.menu-bar').length > 0){
		$('.menu-bar li:first-child .ancho').addClass("selected");
		  $('.ancho').click(function(){
		  $('.menu-bar li .ancho').removeClass("selected");
		  $(this).addClass('selected'); 
		  $('html, body').animate({
		   scrollTop: $( $.attr(this,'href')).offset().top - 70
		  }, 500);
		  return false;
		 });
		 
	}	
	if($('.menu-bar').length > 0){
		
		  $(window).scroll(function(evt) {
		   var _y = $(this).scrollTop();
		   if (_y >245) {
			  $('.menu-bar').addClass('fixed'); 
			  $('.inner-ver').css("padding-top", "48px")
		   } else {
			  $('.menu-bar').removeClass('fixed');
			  $('.inner-ver').css("padding-top", "0")
		   }
		  }); 
	}
	
	if($('.sl-ts').length > 0){
		$('.sl-ts').on('change', function() {
		  var abc = this.value;
		  if( abc == 0){
			$('.inner-ts.hidden').hide();
			$('#infoTS .content-ts').css({"overflow-y": "hidden" , "height": "auto"});
		  }
		  else{
			$('.inner-ts.hidden').show();
			$('.current-ts').hide();
			$('#'+ abc +'').show();	
		  }
		  $('.inner-ts.hide').hide();
		  $('.chk-ts').attr('checked', false);	
		  return false;
		});
	}
	if($('.chk-ts').length > 0){
		
		$('.inner-ts.hide').hide();
		$('.chk-ts').change(function() {
			if($(this).is(":checked")) {
				$('.inner-ts.hide').show();
			} 
			else{
				$('.inner-ts.hide').hide();
			}	
		});
		$('.slider-ts .flex-direction-nav li a').click(function(){
			$('.inner-ts.hide').hide();
			$('.chk-ts').attr('checked', false);
			
		});
	}
	$('#infoTS .closepp').click(function(){
		location.reload();
	});
	if($('.scroll').height() > 600){
		$('.scroll').addClass("scroll-1");
	}	
	
	
});
 $(document).click(function() {
	$(".layer").removeClass("active");
});
$('.layer').click(function(event){
	event.stopPropagation();
}); 
$('.popup').click(function(event){
	event.stopPropagation();
}); 
$('.slide_content .ck_legend.caption').click(function(event){
	event.stopPropagation();
}); 

function tabBlock(id){
	$('#'+ id +' .tab:first').show();
	$('#'+ id +' ul.tab-ul li:first').addClass('active');
	$('#'+ id +' ul.tab-ul li > a').click(function(){
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
function openCommentPopup(id, object_id)
{
	if (object_id != 0) {
		var comment_timeout = getCookie('comment-timeout-' + object_id);

    	var now = getDateTime();

		if (comment_timeout == '') {
			if ($('.txt-content').val() == '') {
				$('.block-comment .form-comment p.warning').show();
			} else {
				$('.block-comment .form-comment p.warning').hide();
				openPopup(id);
			}
		} else {
			var remain_time = parseInt(getDiffDate(comment_timeout, now, 'seconds'));
			remain_time = 30 - remain_time;
			$('#errorForm .timeout').html(remain_time);
			openPopup('errorForm');
		}
	}
}

function openPopup(id) {
	$("#"+id).fadeIn(100);	 
	var h = $("#"+id+" > .popup").height();
	$("#"+id+" > .popup").css("margin-top", -h/2);
	if ($(".scroll-pane").length > 0) {
		$('.scroll-pane').jScrollPane();
	}

}

function closePopup(id) {

    $("#"+id).fadeOut(100);
    //$("#header > .closepp").remove();
}

function openInformPopup(id, timeout) {
	$("#"+id).fadeIn(100);
	var h = $("#"+id+" > .popup").height();
	$("#"+id+" > .popup").css("margin-top", -h/2);
	if ($(".scroll-pane").length > 0) {
		$('.scroll-pane').jScrollPane();
	}

	$("#"+id).fadeOut(timeout);
}

function openSearch(mode) {
    if($(".ctn-search").length > 0){
        if(mode == 2){
            $(".wrapper-search .ctn-search:first-child").hide();
            $(".search-result .highlight-2 > .tab:first-child").hide();
            $(".wrapper-search .ctn-search:nth-child(2)").show();
            $(".search-result .highlight-2 > .tab:nth-child(2)").show();
        }else if(mode == 1){
            $(".wrapper-search .ctn-search:first-child").show();
            $(".search-result .highlight-2 > .tab:first-child").show();
            $(".wrapper-search .ctn-search:nth-child(2)").hide();
            $(".search-result .highlight-2 > .tab:nth-child(2)").hide();
        }
    }
}


// remove class active mega-menu level1
$('.mega-menu .list-bc .level1.active').removeClass('active');
$('.nav-main li').mouseover(function(){
	$('.mega-menu .list-bc .level1.active').removeClass('active');
});
// active menu home
var active = $('nav.nav-main li.active')
if(active=='undefined' || active.length==0){
    $('nav.nav-main li:first-child').addClass('active');
}

function setHomepage(e) {
    if (document.all) {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(e);
    }
}

function changeUrlByPage(page){
    var url = document.URL;
    
    var reg = new RegExp('[\?]*page=[0-9]*','g');
    url = url.replace(reg,'');
    url = url.indexOf('?')!=-1 ? url+'&page='+page : url+'?page='+page;
    history.pushState({},'',url);
}

function setCookie(cname, cvalue, second) {
    var d = new Date();
    d.setTime(d.getTime() + (second * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function getDateTime() {
	var date = new Date();
    var year    = date.getFullYear();
    var month   = date.getMonth() + 1; 
    var day     = date.getDate();
    var hour    = date.getHours();
    var minute  = date.getMinutes();
    var second  = date.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0' + month;
    }
    if(day.toString().length == 1) {
        var day = '0' + day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if(second.toString().length == 1) {
        var second = '0' + second;
    }

    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;   
	return dateTime;
}

function getDiffDate(date1, date2, interval) {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
}

/*
 * Check valid email
 */
function IsEmail(email)
{
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}