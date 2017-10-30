// /**
//  * Created by an on 16-12-27.
//  */
//
// $("nav").mouseover(function(){
//     $(".index-nav-black").stop(true,false).slideDown(100) ;
//
// }).mouseout(function(){
//     $(".index-nav-black").stop().slideUp() ;
//     $(".index-nav-black").css({display:"block"})}
// );
// var timer;
// var index=0;
// var len;
// var linshi=null;
// lunbo();
//
// function lunbo(){
//     clearInterval(timer);
//     timer=null;
//     //console.log(timer)
//     len=$('.lunbo-team').length;
//     timer=setInterval(function(){
//         index+=1;
//         if(index==len){
//             index=0;
//         }
//         lunboIndexCircle();
//         //console.log(timer);
//     },24000);
// }
// function lunboIndexCircle(){
//     $(".lunbo-team").eq(index).fadeIn(10).siblings().fadeOut(100);
//     $(".lunbo-circle li").eq(index).css("opacity","1").siblings().css("opacity","0.3");
// }
//
// $(".shang").click(function(){
//     clearInterval(timer);
//     timer=null;
//     index=index-1;
//     if(index==-1){index=len-1}
//     lunboIndexCircle();
//     lunbo();
// });
//
// $(".xia").click(function(){
//     clearInterval(timer);
//     timer=null;
//     index=index+1;
//     if(index==len){index=0}
//     lunboIndexCircle();
//     lunbo();
// });
// $(".lunbo-circle li").mouseover(function(){
//     clearInterval(timer);
//     timer=null;
//     var liInex=$(this).children("span").html()-1;
//     linshi=setInterval(function(){
//         index=liInex;
//         lunboIndexCircle();
//         lunbo();
//     },200)
//
// });
// $(".lunbo-circle li").mouseout(function(){
//     clearInterval(linshi);
//     linshi=null;
//     lunbo();
// });
// var indextimer=null;
// $(".index-show").mouseover(
//
//     function(){
//         var me=$(this);indextimer=setTimeout(indexhover,160);
//         function indexhover(){
//             var actives=[];
//             $("div.index-show2").each(function(){if($(this).hasClass("active")){actives.push($(this));}});
//             actives[0].hide().css({width:"200px", height:"400px"}).removeClass("active").prev(".index-show").show()
//                 .css({width:"400px", height:"500px", top:"-50px"}).animate({width:"200px", height:"400px", top:0},180);
//             me.hide().css({width:"400px", height:"500px", top:"-50px"}).next("div.index-show2").show().addClass("active")
//                 .css({width:"200px", height:"400px", top:"0"}).animate({width:"400px", height:"500px", top:"-50px"},180);
//         }
//     }
// ).mouseout(function(){clearTimeout(indextimer);});
//
// $(".index-c-1-title ul li").hover(
//     function(){
//         $(this).children("div").children(".index-c1-img").children("b").stop(true,false).slideUp(200);
//         $(this).children("div").stop(true,false).animate({margin:"40px 0 0 0"},300);
//         $(this).children("div").children("div.hoverblock").stop(true,false).animate({"opacity":"1"},300);
//         $(this).children("ol").css("display","block");
//     },function(){
//         $(this).children("div").children(".index-c1-img").children("b").stop(true,false).slideDown(200);
//         $(this).children("div").stop(true,false).animate({margin:"70px 0 0 0"},300);
//         $(this).children("div").children("div.hoverblock").stop(true,false).animate({"opacity":"0"},300);
//         $(this).children("ol").css("display","none");
//
//     }
// );
// $(".newsLi li").mouseover(function(){
//     $(this).css({
//         "border-bottom":"2px solid #2277da",
//         margin:"-2px 0 0 0"
//     }).siblings().css({
//         "border-bottom":"0px solid #fff",
//         margin:"0 0 0 0"
//     });
//     var index=$(this).index();
//     var classshow=".new-"+index;
//     $(classshow).show().siblings().hide();
// });