function viewMore(e, t, n, r, i, scroll) {
    var s = parseInt($("#page_number").val()) + 1;
    var o = e + "page?slug=" + t + "&ajax=" + n + "---" + r;
    $.ajax({
        type: "POST",
        url: o,
        data: {
            page_number: s,
            YII_CSRF_TOKEN: "'" + i + "'"
        },
        beforeSend: function () {
            $("#loading_items").show()
        },
        success: function (e) {
            $("#loading_items").hide();
            if ($.trim(e) != "") {
                var t = $(".newhot_most_content");
                t.find(".small_chuyenmuc.last").attr("class", "small_chuyenmuc");
                t.append(e);
                changeUrlByPage(s);
                $("#page_number").val(s);
            } else {
                $(scroll).addClass('end-readmore');
                $(scroll).removeAttr("onClick");
            }
        },
        error: function (e) {
           $(this).removeAttr('onClick').html('Đã hiển thị hết tất cả kết quả tìm kiếm.');
        }
    })
}

function viewMoreTag(e, t, n, r, i, s, scroll) {
    var o = parseInt($("#page_number").val()) + 1;
    var u = e + "page?slug=" + t + "&ajax=" + n + "---" + r;
    if (s == -1) s = parseInt($("#tag_id").val());
    $.ajax({
        type: "POST",
        url: u,
        data: {
            page_number: o,
            tag_id: s,
            YII_CSRF_TOKEN: "'" + i + "'"
        },
        beforeSend: function () {
            $("#loading_items").show()
        },
        success: function (e) {
            $("#loading_items").hide();
            if ($.trim(e) != "") {
                var t = $(".newhot_most_content");
                t.find(".small_chuyenmuc.last").attr("class", "small_chuyenmuc");
                t.append(e);
                changeUrlByPage(o);
                $("#page_number").val(o);
                if (s != -1) $("#tag_id").val(s)
            } else {
                $(scroll).addClass('end-readmore');
                $(scroll).removeAttr("onClick");
            }
        },
        error: function (e) {
            // alert(e)
        }
    })
}

function viewMoreSearch(e, t, n) {
    var r = parseInt($("#page_number").val()) + 1;
    var i = t + "---" + n;
    $.ajax({
        type: "GET",
        url: document.URL,
        data: {
            page_number: r,
            ajax: i
        },
        beforeSend: function () {
            $("#loading_items").show()
        },
        success: function (t) {
            $("#loading_items").hide();
            var n = $(t).find("#newhot_most_content").html();
            if ($.trim(n) != "") {
                var i = $("#newhot_most_content");
                i.find(".small_chuyenmuc.last").attr("class", "small_chuyenmuc");
                i.append(n);
                changeUrlByPage(r);
                $("#page_number").val(r)
            } else {
                $(e).addClass('end-readmore');
                $(e).removeAttr("onClick");
            }
        }
    })
}

// set home page
$('.btn-sethome a').click(function(){
    var user_agent = navigator.userAgent;
    user_agent = user_agent.toLowerCase();
    if(user_agent.indexOf('firefox')!= -1){
        var src = $('#setHome .content img').attr('src');
        src = src.replace('chrome','firefox');
        $('#setHome .content img').attr('src',src);
        openPopup('setHome');

    }else if(user_agent.indexOf('MSIE')!= -1){
        setHomePage(document.URL);
    }else{
        openPopup('setHome');
    }
});

// active menu
var url = document.URL;
if(url == 'http://dulich.tuoitre.vn'){
    $('.menu-dulich').addClass('active');
}


