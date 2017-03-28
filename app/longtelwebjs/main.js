/**
 * Created by an on 16-12-1.
 */
var a = 1;
var timer = null, timer2 = null;



$("nav>ul>li").mouseenter(
    function () {
        var me = $(this);
        timer = setTimeout(function () {
            me.children("div").slideDown(200);
            me.children("a").addClass("colornav");
            me.siblings().children("a").removeClass("colornav");
        }, 190)

    });
$("nav>ul>li").mouseleave(function () {
    clearTimeout(timer);
    $(this).children("div").slideUp(100);
    $(this).children("a").removeClass("colornav");

});
//点击NAVER》ul》li 变蓝
$("nav>ul>li li:not('.yunchanpin')").click(function () {
    $(this).parent().parent().parent().parent().children("a").addClass("colornav2");
    console.log($(this).parent().parent().parent().parent().children("a").css("color"));
    $(this).parent().parent().parent().parent().siblings().children("a").removeClass("colornav2");

});
$(".nav-one li").click(function () {
    console.log($(this).parents(".yunchanpin"));
    $(this).parents(".yunchanpin").children("a").addClass("colornav2");
    $(this).parents(".yunchanpin").siblings().children("a").removeClass("colornav2");
});

// $(".logo").click(function(){
//     window.location.href="index.html";
// })


$(".a0 .nav-one ul li").click(function () {
    $(this).parents("div.nav-down-aa ").hide();
});
$("li[data-name='nav-down-aa'] ul li").click(function () {
    $(this).parent("ul").parent("div").parent("div").hide();
    $("body").css({scrollTop: 0});
});

function md(element) {
    console.log(22);

    $('body').animate({"scrollTop": $(element).offset().top - 110}, 300);
    console.log(document.body.scrollTop);
    if (document.body.scrollTop) {
        $('body').animate({"scrollTop": $(element).offset().top - 110}, 300);
    }
    else {
        $(document.documentElement).animate({"scrollTop": $(element).offset().top - 110}, 300);
    }

}
$("body").on("click", "a", function (e) {
    if ($(this).hasClass("md")) {
        e.preventDefault();
        var ele = $(this)[0].name;
        md(ele);
    }

});
function lastli(ele) {
    var $this = ele;
    // $this.children("ul").css("display","block");
    $this.children("div").stop(true, false).fadeIn(400);
    $this.siblings("li").children("div").css("display", "none");
    $this.css("background", "#333");
}
$(".navLi>li").mouseover(function () {
    lastli($(this));
});
$(".navLi>li").mouseover(function () {
    $(this).css("background", "rgba(51,51,51,0.5)");
});
$(".navLi>li").mouseout(function () {
    $(this).css("background", "transparent");
});

$(".iphoness").hover(
    function () {

        $('.iphone2').show();
    },
    function () {
        $('.iphone2').hide();
    }
);
$(".weixin1").hover(
    function () {

        $('.weixin2').show();
    },
    function () {
        $('.weixin2').hide();
    }
);
$(".tousu").hover(
    function () {

        $('.tousu2').show();
    },
    function () {
        $('.tousu2').hide();
    }
);
$(".gtop").click(function () {
    if (document.body.scrollTop) {
        $('body').animate({"scrollTop": "1px"}, 300);
    }
    else {
        $(document.documentElement).animate({"scrollTop": "1px"}, 300);
    }
});
function gtop() {
    if ($(document).scrollTop() >= 500) {
        $(".gtop").css("visibility", "visible");
    } else {
        $(".gtop").css("visibility", "hidden");
    }
};

$(".tousu").click(function () {
    var bodyH;
    if (document.body.scrollTop) { //非标准写法,chrome能识别
        bodyH = document.body.scrollTop + 5;//正好顶部要被隐藏的临界点
    }
    else { //标准写法
        bodyH = document.documentElement.scrollTop + 5;
    }
    $(".zhezhaoceng").show();
    $(".tousu3").show().css({top: bodyH});
});
$(".tousuclose").click(function () {
    $(".zhezhaoceng").hide();
    $(".tousu3").hide();
});


var smallt = {};
function smaltitle() {
    var p = parseInt($(this).scrollLeft());
    if (smallt.left <= 300) {
        smallt.left = 300
    }

    var bodyH;
    if (document.body.scrollTop) { //非标准写法,chrome能识别
        bodyH = document.body.scrollTop - 90;//正好顶部要被隐藏的临界点
    }
    else { //标准写法
        bodyH = document.documentElement.scrollTop - 90;
    }
    if (bodyH <= smallt.stitleH) {
        $(".stitle").removeClass("stitlechange");

    } else {
        $(".stitle").addClass("stitlechange");
        if (p > 0) {//确定是左右滑动
            if (!$(".stitlechange").hasClass("solutions")) {
                $(".stitlechange").css({
                    left: smallt.left - p
                })
            } else {
                $(".solutions.stitlechange").css({
                    left: "0!important"
                })
            }
        }

    }
}


function downContent(ele) {
    var $this = ele;
    $this.css({"background": "#fff"}).siblings("li").css("background", "#ebeced");
    var num = $this.index();
    var element = ".nr" + num;
    $this.parent().parent().children(element).css("display", "block").siblings('div').css("display", "none");
}

$("body").on("mouseover", ".neirong-title li", function () {
    downContent($(this));
    $(this).children("a").css({color: "#2277e6"}).parent("li").siblings().children("a").css({color: "#333"});
});

$(document).scroll(function () {
    gtop();
    smaltitle();
});
$().ready(function () {

})