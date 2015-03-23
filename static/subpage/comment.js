var comment_server_url = 'http://cm.tuoitre.vn/';
// var comment_server_url = 'http://front.utils.ttdev.com/';
// var comment_server_url = 'http://front.utils.tuoitre.vn:8083/';

/*
 * Resize iframe base on showing data
 */
function resizeCrossDomainIframe(event) {
	var iframe = document.getElementById('comment_frame');
	var domain = comment_server_url.substr(0, comment_server_url.length - 1);
    if (event.origin == domain) {
		if (isNaN(event.data)) return; // only accept something which can be parsed as a number
		if (typeof window.addEventListener != 'undefined') {
			var height = parseInt(event.data) + 10;
		} else if (typeof window.attachEvent != 'undefined') {
			var height = parseInt(event.data) + 20;
		}

		var heightCommentElement ='<input type="hidden" id="height_comment_iframe" />';
		$(heightCommentElement).insertAfter($('#comment_thread'));
		$('#height_comment_iframe').val(height);

		iframe.height = height + 'px';
	}
}

// Resize iframe
if (typeof window.addEventListener != 'undefined') {
	window.addEventListener('message', resizeCrossDomainIframe);
} else if (typeof window.attachEvent != 'undefined') {
	window.attachEvent('onmessage', resizeCrossDomainIframe);
}

$(function() {
	var comment_type = $('#comment_thread').attr('type');
	if (comment_type == 'undefined') {
		comment_type = 'bottom';
	}

	/************************** COMMENT IFRAME ***************************/
	// var content_url = window.location;
	var app_url = window.location.hostname;
	var app_id = $('#cm-aid').val();
	var app_id_tracker = 1;;//TTO : id = 6 <= comment system of Triet. : 1 <= data tracker system
	var object_id = $('#cm-oid').val();
	var cat_id = $('#cm-cid').val();
	var user_agent = navigator.userAgent;
	var title = document.title;
	title = title.replace(/"/g, '');

	if (comment_type == 'bottom') {
		var comment_url = comment_server_url + 'comment/ttocreateiframe?app_id=' + app_id + '&app_url=' + app_url + '&object_id=' + object_id + '&object_title=' + title + '&layout=3';
	} else if (comment_type == 'right') {
		var comment_url = comment_server_url + 'comment/ttocreateiframe?app_id=' + app_id + '&app_url=' + app_url + '&object_id=' + object_id + '&object_title=' + title + '&layout=right';
	} else if (comment_type == 'birthday') {
		var comment_url = comment_server_url + 'comment/ttocreateiframe?app_id=' + app_id + '&app_url=' + app_url + '&object_id=' + object_id + '&object_title=' + title + '&layout=birthday';
	}

	var loading = '<img src="' + comment_server_url + 'resources/images/loading.gif" id="loading_comment" style="width:150px;height:100px;display:block;margin:0 auto;" />';
	$('#comment_thread').append(loading);

	$('<iframe />');
	$('<iframe />', 
		{name:'comment_frame',id:'comment_frame',width:'100%',frameborder:'0',scrolling:'no',horizontalscrolling:'no',verticalscrolling:'no',overflow:'hidden',src:comment_url}
	).load(function(){
		$('#loading_comment').hide();
	}).appendTo('#comment_thread');

	/************************** LIKE IFRAME ***************************/
	var like_url = comment_server_url + 'like/ttocreateiframe?app_id=' + app_id + '&app_id_tracker=' + app_id_tracker + '&cat_id=' + cat_id + '&object_id=' + object_id + '&object_title=' + title + '&host=' + app_url + '&user_agent=' + user_agent + '&layout=2';

	$('<iframe />');
	$('<iframe />', 
		{name:'like_frame',id:'like_frame',width:'160px',height:'30px',frameborder:'0',scrolling:'no',horizontalscrolling:'no',verticalscrolling:'no',overflow:'hidden',src:like_url}
	).appendTo('#like_thread');

	$('#like_thread').css('float', 'left');

	// Cross domain
	if (comment_server_url == 'http://cm.tuoitre.vn/') {
		document.domain = 'tuoitre.vn';
	}
})