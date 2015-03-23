$(function() {
	/**************************** COMMENT ****************************/
	// View more comment
	$('#view_more_comment').live('click', function() {
		var url = $('#host').val() + '/comment/ttocreateiframe';
		var offset = parseInt($('#offset').val()) + 1;
		var object_id = $('#object_id').val();
		var app_id = $('#app_id').val();
		var layout = $('#comment_layout').val();
	 	var number_all_comments = $('#number_all_comments').val();

		$.ajax({
			type: 'POST',
			url: url,
			data: {offset: offset, app_id: app_id, object_id: object_id, layout: layout}
		}).done(function(result) {
			document.domain = 'tuoitre.vn';

			$('.lst-comment').append(result);
			$('#offset').val(offset);

			// Increase height of iframe
			var iframe = $('#comment_frame', window.parent.document);
            var height = $(".container").height() + 70;
            iframe.height(height);
		});
	});

	/**************************** LIKE ****************************/
	// Like comment
	$('.like_btn').live('click', function() {
		var id = $(this).attr('id');
		id = id.split('-');
		var c = id[1];
		var app_id = $('#app_id').val();
		var o = $('#object_id').val();
		var object_id = $('#object').val();
		var comment_id = $('#comment').val();
		var object_title = $('#object_title').val();

		var like_number_element = $(this).parent().siblings('.like_number');
		var like_button_element = $(this);

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/like/likecomment',
			data: {app_id: app_id, o: o, c: c, object_id: object_id, comment_id: comment_id, object_title: object_title}
		}).done(function(result) {
			resultArr = result.split('-');
			if (parseInt(resultArr[0]) > 0) {
				var like_number = parseInt(like_number_element.html()) + 1;
				like_number_element.html(like_number);
				$('<a href="javascript:void(0);" class="unlike_btn btn-like-cm" id="like_comment_id-' + c + '">Bỏ thích</a>').insertAfter(like_button_element);
				like_button_element.remove();
			} else if (resultArr[0] == 'time_not_expire') {
				alert('Bạn vui lòng đợi ' + resultArr[1] + ' để tiếp tục thực hiện thao tác này.');
			} else {
				alert('Bạn không được phép thực hiện thao tác này!');
			}
		});
	});

	//  Like comment
	$('.unlike_btn').live('click', function() {
		var id = $(this).attr('id');
		id = id.split('-');
		var c = id[1];
		var app_id = $('#app_id').val();
		var o = $('#object_id').val();
		var object_id = $('#object').val();
		var comment_id = $('#comment').val();

		var like_number_element = $(this).parent().siblings('.like_number');
		var unlike_button_element = $(this);

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/like/unlikecomment',
			data: {app_id: app_id, c: c, o: o, object_id: object_id, comment_id: comment_id}
		}).done(function(result) {
			resultArr = result.split('-');
			if (parseInt(resultArr[0]) >= 0) {
				var like_number = parseInt(like_number_element.html()) - 1;
				like_number_element.html(like_number);
				$('<a href="javascript:void(0);" class="like_btn btn-like-cm" id="like_comment_id-' + c + '">Thích</a>').insertAfter(unlike_button_element);
				unlike_button_element.remove();
			} else if (resultArr[0] == 'time_not_expire') {
				alert('Bạn vui lòng đợi ' + resultArr[1] + ' để tiếp tục thực hiện thao tác này.');
			} else {
				alert('Bạn không được phép thực hiện thao tác này!');
			}
		});
	});

	// Like article
	$('.object_like_btn').one('click', function(event) {
		var app_id = $('#app_id').val();
		var o = $('#object_id').val();
		var object_id = $('#object').val();
		var object_title = $('#object_title').val();

 		var like_number = $(this).parent().siblings('.sl');
		var like_button = $(this);

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/like/likeobject',
			data: {app_id: app_id, o: o, object_id: object_id, object_title: object_title}
		}).done(function(result) {
			resultArr = result.split('-');
			if (parseInt(resultArr[0]) >= 0) {
				like_number.html(result);
				// $('<a href="javascript:void(0);" class="object_unlike_btn"><img src="../images/btn-unlike.png" /></a>').insertAfter(like_button);
				like_button.removeClass('tto_object_like_btn');
				like_button.css('background-color', '#a2a2a2');
			} else if (resultArr[0] == 'time_not_expire') {
				alert('Bạn vui lòng đợi ' + resultArr[1] + ' để tiếp tục thực hiện thao tác này.');
			} else if (resultArr[0] == 'save_error') {
				alert('Save error!');
			} else {
				alert('Bạn không được phép thực hiện thao tác này!');
			}
		});
	})

	// Unlike article
	$('.object_unlike_btn').live('click', function() {
		var app_id = $('#app_id').val();
		var o = $('#object_id').val();
		var object_id = $('#object').val();

		var like_number = $(this).parent().siblings('.sl');
		var unlike_button = $(this);

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/like/unlikeobject',
			data: {app_id: app_id, o: o, object_id: object_id}
		}).done(function(result) {
			resultArr = result.split('-');
			if (parseInt(resultArr[0]) >= 0) {
				like_number.html(result);
				$('<a href="javascript:void(0);" class="object_like_btn"><img src="../images/btn-like.png" /></a>').insertAfter(unlike_button);
				unlike_button.remove();
			} else if (resultArr[0] == 'time_not_expire') {
				alert('Bạn vui lòng đợi ' + resultArr[1] + ' để tiếp tục thực hiện thao tác này.');
			} else if (resultArr[0] == 'save_error') {
				alert('Save error!');
			} else {
				alert('Bạn không được phép thực hiện thao tác này!');
			}
		});
	})

	// Get cookie to show whether like or dislike button - Like Object
	var key_timeout = 'likeobjecttimeout' + $('#object_id').val() + $('#app_id').val();
	var key_flag = 'likeobjectflag' + $('#object_id').val() + $('#app_id').val();

	var like_object_flag = 1;
	var flag = getCookie(key_flag);
	if (flag != null && flag != '') {
		var timeout = getCookie(key_timeout);
		if (timeout != null && timeout != '' && flag == 0) {
			var current_time = Math.round(new Date().getTime() / 1000);
			if (timeout < current_time) {
				like_object_flag = 1;

				var like_number = parseInt($('.sl').text());
				$('.sl').text(like_number + 1);
			} else {
				like_object_flag = 0;
			}
		}
	}

	if (like_object_flag == 1) {
		var like_object_btn = '<a href="javascript:void(0);" class="object_like_btn"><img src="../images/btn-like.png" /></a>';
	} else {
		var like_object_btn = '<a href="javascript:void(0);" class="object_unlike_btn"><img src="../images/btn-unlike.png" /></a>'
	}

	$('.like_div').append(like_object_btn);

	// Get cookie to show whether like or dislike button - Like Comment
	// $('.view_comment_small').each(function() {
	// 	var id = $(this).attr('id');
	// 	id = id.split('comment_div-');
	// 	var key_comment_timeout = 'likecommenttimeout' + id[1];
	// 	var key_comment_flag = 'likecommentflag' + id[1];

	// 	var like_comment_flag = 1;

	// 	var flag = getCookie(key_comment_flag);
	// 	if (flag != null && flag != '') {
	// 		var timeout = getCookie(key_comment_timeout);
	// 		if (timeout != null && timeout != '' && flag == 0) {
	// 			var current_time = Math.round(new Date().getTime() / 1000);
	// 			if (timeout < current_time) {
	// 				like_comment_flag = 1;

	// 				var like_number = parseInt($(this).find('.like_number').text());
	// 				$(this).find('.like_number').text(like_number + 1);
	// 			} else {
	// 				like_comment_flag = 0;
	// 			}
	// 		}
	// 	}

	// 	if (like_comment_flag == 1) {
	// 		var like_comment_btn = '<a href="javascript:void(0);" class="like_btn" id="like_comment_id-' + id[1] + '">Thích</a>';
	// 	} else {
	// 		var like_comment_btn = '<a href="javascript:void(0);" class="unlike_btn" id="like_comment_id-' + id[1] + '">Bỏ thích</a>';
	// 	}

	// 	$(this).find('.like_comment_div').append(like_comment_btn);
	// });

	/**************************** REPLY ****************************/
	// Reply comment
	$('.reply').click(function(e) {
		$('.reply_div').each(function() {
			$(this).remove();
		});

		var parent_id = getId($(this).attr('id'));
		var new_element = 
			'<p class="reply_div">' +
				'<textarea></textarea><br />' +
				'<input type="button" class="reply_btn" id ="reply_btn-' + parent_id + '" value="Gửi" />' +
			'</p>';

		$(this).parent().parent().append(new_element);
	});

	$('.reply_btn').live('click', function() {
		var parent_id = getId($(this).attr('id'));
		var content = ($(this).siblings('textarea')).val();
		var app_id = $('#app_id').val();
		var object_id = $('#object_id').val();
		var layout = $('#comment_layout').val();
		var email = 'triettest@gmail.com';
		var name = 'trietest';

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/comment/sendcomment',
			data: {email: email, name: name, content: content, app_id: app_id, object_id: object_id, parent_id: parent_id},
		}).done(function(result) {
			alert(result);
		});
	});

	// Like article
	$('.tto_object_like_btn').one('click', function() {
		var app_id = $('#app_id').val();
		var o = $('#object_id').val();
		var object_id = $('#object').val();
		var object_title = $('#object_title').val();
		var app_id_tracker = $('#app_id_tracker').val();
		var cat_id = $('#cat_id').val();
		var host_url = $('#host_url').val();
		var user_agent = $('#user_agent').val();
var say_hello = 'hi kid!';

 		var like_number_element = $(this).siblings('.sl');
		var like_button = $(this);

		$.ajax({
			type: 'POST',
			url: $('#host').val() + '/like/likeobject',
			data: {app_id: app_id, app_id_tracker: app_id_tracker, o: o, cat_id:cat_id, object_id: object_id, object_title: object_title, user_agent: user_agent, host_url:host_url, say:say_hello}
		}).done(function(result) {
			resultArr = result.split('-');
			if (parseInt(resultArr[0]) >= 0) {
				temp = (like_number_element.html()).split('<span></span>');console.log(temp);
				var like_number = parseInt(temp[1]) + 1;console.log(like_number);
				like_number_element.html(like_number);
				like_button.removeClass('tto_object_like_btn');
				like_button.css('background-color', '#a2a2a2');
			} else if (resultArr[0] == 'time_not_expire') {
				alert('Bạn vui lòng đợi ' + resultArr[1] + ' để tiếp tục thực hiện thao tác này.');
			} else if (resultArr[0] == 'save_error') {
				alert('Save error!');
			} else {
				alert('Bạn không được phép thực hiện thao tác này!');
			}
		});
	})
})

/*
 * Check valid email
 */
function IsEmail(email)
{
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function getId(value)
{
	var id = value.split('-');
	return id[1];
}

/*
 * Get cookie
 */
function getCookie(c_name)
{
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
	  {
	  c_start = c_value.indexOf(c_name + "=");
	  }
	if (c_start == -1)
	  {
	  c_value = null;
	  }
	else
	  {
	  c_start = c_value.indexOf("=", c_start) + 1;
	  var c_end = c_value.indexOf(";", c_start);
	  if (c_end == -1)
	  {
	c_end = c_value.length;
	}
	c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}
