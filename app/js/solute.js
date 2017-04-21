/**
 * Created by an on 16-12-20.
 */
$(".solut-c1 ul>li a").click(function () {
    changecontentbackcolor($(this));
    $(".solut-c1 div.fr>div").eq(index).show().siblings("div").hide();
});
$(".solut-c2 ul>li a").click(function () {
    changecontentbackcolor($(this));
});
var index;
function changecontentbackcolor(ele) {
    var $this = ele;
    index = $this.parent("li").index();
    $this.addClass("blue-fff");
    $this.parent("li").siblings().children("a").removeClass("blue-fff");
    $this.parents("ul").next("div").children("div").eq(index).css("display", "block").siblings().css("display", "none");

}