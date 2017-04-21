/**
 * Created by an on 16-12-6.
 */

$(".ulFixed>ul>li>a").click(function () {
    if ($(this).next("ul").css("display") == "block") {
        $(this).next("ul").slideUp();
    } else {
        $(this).next("ul").slideDown();
    }
    $(this).parent("li").siblings().children("ul").slideUp();
});

function ulFixed() {
    var bodyH;
    if (document.body.scrollTop) { //非标准写法,chrome能识别
        bodyH = document.body.scrollTop - 95;//正好顶部要被隐藏的临界点
    }
    else { //标准写法
        bodyH = document.documentElement.scrollTop - 95;
    }


    var divH = $(".left-big").height();
    var FixedH = parseInt($("footer").offset().top);
    if (bodyH >= 0) {
        if (divH + bodyH <= FixedH - 95) {
            $(".left-big").css("top", bodyH + 30);

        } else {//滑动到最低端时他的TOP固定
            $(".left-big").css("top", FixedH - divH - 95);
        }
    } else {
        $(".left-big").css("top", 30);
    }
}
$().ready(function () {
    ulFixed();
});
$(document).scroll(function () {
    ulFixed();
});
$("body").onresize = function () {
    ulFixed();
};
$(".left-big li ul li").hover(
    function () {
        $(this).css("background", "#e5e8ee");
    }, function () {
        $(this).css("background", "#fff");
    }
);
$(".left-big>ul>li>a").click(function () {
    $(this).siblings("ul").stop(true, false).slideToggle("100");
    if ($(this).children("i.icon-u").css("display") == "block") {
        $(this).children("i.icon-u").hide();
        $(this).children("i.icon-d").show();
    } else {
        $(this).children("i.icon-u").show();
        $(this).children("i.icon-d").hide();
    }
    $(this).parent("li").siblings().children("ul").slideUp("1000");
    $(this).parent("li").siblings().children("a").children("i.icon-d").hide();
    $(this).parent("li").siblings().children("a").children("i.icon-u").show();

});
(function () {
    var leftIndex = $(".leftLight").val();
    var leftLightClass = "." + $(".leftLight")[0].name;
    //console.log(leftLightClass);
    $(leftLightClass).css("color", "#2277e6").parent("li")
        .parent("ul").slideDown()
        .siblings("a").children("i.icon-u").hide()
        .siblings("i.icon-d").show();
    ulFixed();
})();
