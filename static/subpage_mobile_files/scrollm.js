var display = false;
var continue_next = false;
var current_distance = -1;
var arry_obj = new Array();
var count = 0;
var displayad = 0;
var template = "4e8a379d-8828-4983-97f3-50f706299187-dx0";
var template1 = "fef740d5-5805-448e-8be0-4976392b9b52-dx0";
var temp_obj = null;

while (true) {
    temp_obj = document.getElementById(template + count);

    if (temp_obj != null) {
        arry_obj[count] = "#" + template + count;
    }
    else {
        temp_obj = document.getElementById(template1 + count);
        if (temp_obj != null) {
            arry_obj[count] = "#" + template1 + count;
        }
    }
    count++;
    break;
}
function addx() {
    var dx = $(arry_obj[displayad]);
    dx.css('display', 'block');
    display = true;
    //$.getScript('http://s.tuoitre.vn/DominoX/incimp.ashx?ImpID=' + imp[displayad], function() { display() });
    //setTimeout(function() { cutoff(); }, 5000);
    continue_next = false;
}
function cutoff() {
    var dx = $(arry_obj[displayad]);
    dx.css('display', 'none');
    displayad++;
    if (displayad >= arry_obj.length) {
        displayad = 0;
    }
    setTimeout(function() { waitaddx(); }, 5000);
    current_distance = $(window).scrollTop();
}
function waitaddx(obj) {
    if (current_distance < $(window).scrollTop()) {
        continue_next = false;
        addx();
    }
    else {
        continue_next = true;
    }
}

$(window).scroll(function() {
    var distance = $(window).scrollTop();

    if (distance > 70) {
        if (display == false) {
            addx();
        }
    }

    if (continue_next) {
        if (distance > current_distance) {
            addx();
        } else {
            current_distance = $(window).scrollTop();
        }
    }
});