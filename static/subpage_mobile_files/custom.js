function viewMore(site_path, slug, block_id, id, csrf)
{
    var page_number = parseInt($('#page_number').val()) + 1;
    var url = site_path + "page?slug=" + slug + "&ajax=" + block_id + "---" + id;
    $("#loading_items").show();
    $.ajax({
        type: 'POST',
        url: url,
        data: {page_number: page_number, YII_CSRF_TOKEN: "'" + csrf + "'"},
        // beforeSend: function() {
        //     $("#loading_items").show();
        // },
        success: function(result) { 
            $('#loading_items').hide();
            // remove css
            if(result){
                var container = $('.newhot_most_content');
                container.append(result);
                $('#page_number').val(page_number);
            }else{
                $('.btn-more-1').removeAttr('onClick').find('span').html('Đã hiển thị hết tất cả kết quả tìm kiếm.').css('width','auto');
            }
            
        },
        error: function(error){
            $('.btn-more-1').removeAttr('onClick').find('span').html('Đã hiển thị hết tất cả kết quả tìm kiếm.').css('width','auto');
        }
    });
}

function viewMoreSearch(obj, block_id, id)
{
    var page_number = parseInt($('#page_number').val()) + 1;    
    var ajax = block_id + '---' + id; 
    $.ajax({
        type: 'GET',
        url: document.URL,
        data: {page_number: page_number, ajax: ajax},
        beforeSend: function() {
            $("#loading_items").show();
        },
        success: function(result) { 
            $('#loading_items').hide();
            var parse_result = $(result).find('.s_result').html();
            if($.trim(parse_result) != ''){
                var container = $('.s_result');
                    container.find(".small_chuyenmuc.last").attr("class", "small_chuyenmuc");
                    container.append(parse_result);
                $('#page_number').val(page_number); 
            }else{
                $(obj).html('Đã hiển thị hết tất cả kết quả tìm kiếm.');
                $(obj).removeAttr('onClick');
            }
        }
    });
}

function viewMoreTag(site_path, slug, block_id, id, csrf, tag_id)
{
    var page_number = parseInt($('#page_number').val()) + 1;
    var url = site_path + "page?slug=" + slug + "&ajax=" + block_id + "---" + id;
    if(tag_id == -1)
        tag_id = parseInt($('#tag_id').val());
    $.ajax({
        type: 'POST',
        url: url,
        data: {page_number: page_number, tag_id: tag_id, YII_CSRF_TOKEN: "'" + csrf + "'"},
        beforeSend: function() {
            $("#loading_items").show();
        },
        success: function(result) { 
            $('#loading_items').hide();
            // remove css
            if($.trim(result) !=''){
                var container = $('.newhot_most_content');
                container.append(result);
                $('#page_number').val(page_number);
                if(tag_id != -1)
                    $('#tag_id').val(tag_id);
            }else{
                $('.xemthem a').html('Đã hiển thị hết tất cả kết quả tìm kiếm.');
                $('.xemthem a').removeAttr('onClick');
            }
            
        },
        error: function(error){
            alert(error);
        }
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