/**
 * Created by an on 16-12-1.
 */
'use strict'
var app = angular.module("an", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider

        .when("/index", {
            templateUrl: "template/index-2.html",
            controller: "indexControl"
        })
        .when("/jsy", {
            templateUrl: "template/jsy.html",
            controller: "jsyControl"
        })
        .when("/image", {
            templateUrl: "template/image.html",
            controller: "imageControl"
        })
        .when("/zhy", {
            templateUrl: "template/zhy.html",
            controller: "zhyControl"
        })

        .when("/lsjj", {
            templateUrl: "template/lsjj.html",
            controller: "lsjjControl"
        })
        .when("/hhyjj", {
            templateUrl: "template/hhyjj.html",
            controller: "hhyjjControl"
        })
        .when("/hhy", {
            templateUrl: "template/hhy.html",
            controller: "hhyControl"
        })
        .when("/dsj", {
            templateUrl: "template/dsj.html",
            controller: "dsjControl"
        })
        .when("/kangD", {
            templateUrl: "template/kangD.html",
            controller: "kangDControl"
        })
        .when("/yjkproduct", {
            templateUrl: "template/yjkproduct.html",
            controller: "yjkproductControl"
        })
        .when("/gstd", {
            templateUrl: "template/gstd.html",
            controller: "gstdControl"
        })
        .when("/solute1", {
            templateUrl: "template/solute1.html",
            controller: "solute1Control"
        })
        .when("/syy", {
            templateUrl: "template/syy.html",
            controller: "syyControl"
        })
        .when("/sywl", {
            templateUrl: "template/sywl.html",
            controller: "sywlControl"
        })
        .when("/beifen", {
            templateUrl: "template/beifen.html",
            controller: "beifenControl"
        })
        .when("/yyp", {
            templateUrl: "template/yyp.html",
            controller: "yypControl"
        })
        .when("/tgy", {
            templateUrl: "template/tgy.html",
            controller: "tgyControl"
        })
        .when("/jkgl", {
            templateUrl: "template/jkgl.html",
            controller: "jkglControl"
        })
        .when("/yyzj", {
            templateUrl: "template/yyzj.html",
            controller: "yyzjControl"
        })
        .when("/swxwgl", {
            templateUrl: "template/swxwgl.html",
            controller: "swxwglControl"
        })
        .when("/jjfa", {
            templateUrl: "template/jjfa.html",
            controller: "jjfaControl"
        })
        .when("/idcjjfa", {
            templateUrl: "template/idcjjfa.html",
            controller: "idcjjfaControl"
        })
        .when("/yjr", {
            templateUrl: "template/yjr.html",
            controller: "yjrControl"
        })
        .when("/hlwjr", {
            templateUrl: "template/hlwjr.html",
            controller: "hlwjrControl"
        })
        .when("/csdl", {
            templateUrl: "template/csdl.html",
            controller: "csdlControl"
        })
        .when("/zhuce", {
            templateUrl: "template/zhuce.html",
            controller: "zhuceControl"
        })
        .when("/helpiaas-backups-gywm", {
            templateUrl: "template/helpiaas-backups-gywm.html",
            controller: "helpiaas-backups-gywmControl"
        })
        .when("/helpiaas-backups-lxwm", {
            templateUrl: "template/helpiaas-backups-lxwm.html",
            controller: "helpiaas-backups-lxwmControl"
        })
        .when("/yjkSaas", {
            templateUrl: "template/yjkSaas.html",
            controller: "yjkSaasControl"
        })
        .when("/denglu", {
            templateUrl: "template/denglu.html",
            controller: "dengluControl"
        })
        .when("/zhmm", {
            templateUrl: "template/zhaohuimima.html",
            controller: "zhmmControl"
        })
        .when("/looke", {
            templateUrl: "template/lookemail.html",
            controller: "lookeControl"
        })
        .when("/fof", {
            templateUrl: "template/fourofour.html",
            controller: "fofControl"
        })
        .when("/free", {
            templateUrl: "template/freetiyan.html",
            controller: "freeControl"
        })
        .when("/newlibao", {
            templateUrl: "template/newlibao.html",
            controller: "newlibaoControl"
        })
        .when("/beian", {
            templateUrl: "template/beian.html",
            controller: "beianControl"
        })
        .when("/qudaohz", {
            templateUrl: "template/qudaohezuo.html",
            controller: "qudaohzControl"
        })
        .when("/callc", {
            templateUrl: "template/callcenter.html",
            controller: "callcControl"
        })









        .when("/helpdocum", {
            templateUrl: "template/helpdocum.html",
            controller: "helpdocumControl"
        })
        .when("/helpiaas-serve", {
            templateUrl: "template/helpiaas-serve.html",
            controller: "helpiaas-serveControl"
        })
        .when("/helpcloud", {
            templateUrl: "template/helpcloud.html",
            controller: "helpcloudControl"
        })
        .when("/helpiaas-deploy", {
            templateUrl: "template/helpiaas-deploy.html",
            controller: "helpiaas-deployControl"
        })
        .when("/helpiaas-pswrd", {
            templateUrl: "template/helpiaas-pswrd.html",
            controller: "helpiaas-pswrdControl"
        })
        .when("/helpiaas-disk", {
            templateUrl: "template/helpiaas-disk.html",
            controller: "helpiaas-diskControl"
        })
        .when("/helpiaas-main", {
            templateUrl: "template/helpiaas-main.html",
            controller: "helpiaas-mainControl"
        })
        .when("/helpiaas-backups", {
            templateUrl: "template/helpiaas-backups.html",
            controller: "helpiaas-backupsControl"
        })
        .when("/helpiaas-backups-cereate", {
            templateUrl: "template/helpiaas-backups-cereate.html",
            controller: "helpiaas-backups-cereateControl"
        })
        .when("/helpiaas-backups-delete", {
            templateUrl: "template/helpiaas-backups-delete.html",
            controller: "helpiaas-backups-deleteControl"
        })
        .when("/helpiaas-backups-restore", {
            templateUrl: "template/helpiaas-backups-restore.html",
            controller: "helpiaas-backups-restoreControl"
        })
        .when("/helpiaas-backups-billing", {
            templateUrl: "template/helpiaas-backups-billing.html",
            controller: "helpiaas-backups-billingControl"
        })
        .when("/helpiaas-backups-introduce", {
            templateUrl: "template/helpiaas-backups-introduce.html",
            controller: "helpiaas-backups-introduceControl"
        })
        .when("/helpiaas-backups-security", {
            templateUrl: "template/helpiaas-backups-security.html",
            controller: "helpiaas-backups-securityControl"
        })
        .when("/helpcaas-serve", {
            templateUrl: "template/helpcaas-serve.html",
            controller: "helpcaas-serveControl"
        })
        .when("/helpcaas-particulars", {
            templateUrl: "template/helpcaas-particulars.html",
            controller: "helpcaas-particularsControl"
        })
        .when("/helpcaas-look", {
            templateUrl: "template/helpcaas-look.html",
            controller: "helpcaas-lookControl"
        })
        .when("/helpcaas-apply", {
            templateUrl: "template/helpcaas-apply.html",
            controller: "helpcaas-applyControl"
        })
        .when("/helpcaas-consult", {
            templateUrl: "template/helpcaas-consult.html",
            controller: "helpcaas-consultControl"
        })
        .when("/helpcaas-seek", {
            templateUrl: "template/helpcaas-seek.html",
            controller: "helpcaas-seekControl"
        })
        .when("/helpcaas-work", {
            templateUrl: "template/helpcaas-work.html",
            controller: "helpcaas-workControl"
        })
        .when("/helpcaas-workplan", {
            templateUrl: "template/helpcaas-workplan.html",
            controller: "helpcaas-workplanControl"
        })
        .when("/helpcaas-workpross", {
            templateUrl: "template/helpcaas-workpross.html",
            controller: "helpcaas-workprossControl"
        })
        .when("/helpcaas-network", {
            templateUrl: "template/helpcaas-network.html",
            controller: "helpcaas-networkControl"
        })
        .when("/helpissue", {
            templateUrl: "template/helpissue.html",
            controller: "helpissueControl"
        })
        .when("/help_details", {
            templateUrl: "template/help_details.html",
            controller: "help_detailsControl"
        })
        .when("/help_details", {
            templateUrl: "template/help_.html",
            controller: "help_detailsControl"
        })
        .when("/huodong1", {
            templateUrl: "template/huodong.html",
            controller: "huodong1Control"
        })


        .when("/news", {
            templateUrl: "template/news.html",
            controller: "newsControl"
        })
        .when("/news-cont1", {
            templateUrl: "template/news-cont1.html",
            controller: "news-cont1Control"
        })
        .when("/news-cont2", {
            templateUrl: "template/news-cont2.html",
            controller: "news-cont2Control"
        })
        .when("/news-cont3", {
            templateUrl: "template/news-cont3.html",
            controller: "news-cont1Control"
        })
        .when("/news-cont4", {
            templateUrl: "template/news-cont4.html",
            controller: "news-cont2Control"
        })
        .when("/news-cont5", {
            templateUrl: "template/news-cont5.html",
            controller: "news-cont1Control"
        })
        .when("/news-cont6", {
            templateUrl: "template/news-cont6.html",
            controller: "news-cont2Control"
        })
        .when("/news-cont7", {
            templateUrl: "template/news-cont7.html",
            controller: "news-cont1Control"
        })
        .when("/news-cont8", {
            templateUrl: "template/news-cont8.html",
            controller: "news-cont2Control"
        })
        .when("/news-cont9", {
            templateUrl: "template/news-cont9.html",
            controller: "news-cont1Control"
        })
        .when("/news-cont10", {
            templateUrl: "template/news-cont10.html",
            controller: "news-cont10Control"
        })
        .when("/helpiaas-backups-fwtk", {
            templateUrl: "template/helpiaas-backups-fwtk.html",
            controller: "helpiaas-backups-fwtkControl"
        })


        .otherwise({redirectTo: '/index'});

});
app.controller("allcontrol", function ($rootScope, $scope, $location) {
    $rootScope.findemail;
    $rootScope.gotoPage = function (url) {

        $location.path(url);
        $('body').scrollTop(0);
    };
    $scope.fankuileibie = 1;


});
app.controller("jsyControl", function () {

});
app.controller("syyControl", function () {

});
app.controller("indexControl", function ($interval, $scope, $rootScope) {
    $scope.meidenglu = true;
    $rootScope.huiyuan = "11";

    $("nav").mouseover(function () {
        $(".index-nav-black").stop(true, false).slideDown(100);

    }).mouseout(function () {
            $(".index-nav-black").stop().slideUp();
            $(".index-nav-black").css({display: "block"})
        }
    );
    var timer;
    var index = 0;
    var len;
    var linshi;
    lunbo();

    function lunbo() {
        $scope.$on("$destroy", function () {
            if (timer) {
                $interval.cancel(timer);
            }
        });
        len = $('.lunbo-team').length;
        timer = $interval(function () {
            index += 1;
            if (index == len) {
                index = 0;
            }
            lunboIndexCircle();
        }, 25000);
    }

    function lunboIndexCircle(me) {
        $(".lunbo-team").eq(index).siblings().fadeOut(200);
        $(".lunbo-team").eq(index).fadeIn(300);
        $(".lunbo-circle li").eq(index).css({"border-width": "4px"})
            .siblings().css({"border-width": "0"});
        $(".lunbo-circle li").eq(index).children(".names").css("display", "block");
        $(".lunbo-circle li").eq(index).siblings().children(".names").css("display", "none");
    }

    $(".shang").click(function () {
        clearTimeout(linshi);
        linshi = null;
        linshi = setTimeout(function () {
            $interval.cancel(timer);
            index = index - 1;
            if (index == -1) {
                index = len - 1
            }
            lunboIndexCircle();
            lunbo();
        }, 500)

    });

    $(".xia").click(function () {
        clearTimeout(linshi);
        linshi = null;
        linshi = setTimeout(function () {
            $interval.cancel(timer);
            index = index + 1;
            if (index == len) {
                index = 0
            }
            lunboIndexCircle();
            lunbo();
        }, 400)

    });
    $(".lunbo-circle li").mouseover(function () {
        var me = $(this);
        $interval.cancel(timer);
        var liInex = $(this).children(".lunindex").html() - 1;
        index = liInex;
        lunboIndexCircle(me);
        // $(this).children(".names").css("display","block");
        // $(this).siblings().children(".names").css("display","none");
    });
    $(".lunbo-circle li").mouseout(function () {
        lunbo();
    });
    var indextimer = null;
    $(".index-show").mouseover(
        function () {
            var me = $(this);
            indextimer = setTimeout(indexhover, 160);
            function indexhover() {
                var actives = [];
                $("div.index-show2").each(function () {
                    if ($(this).hasClass("active")) {
                        actives.push($(this));
                    }
                });
                actives[0].hide().css({
                    width: "200px",
                    height: "400px"
                }).removeClass("active").prev(".index-show").show()
                    .css({width: "400px", height: "460px", top: "-30px"}).animate({
                    width: "200px",
                    height: "400px",
                    top: 0
                }, 180);
                me.hide().css({
                    width: "400px",
                    height: "460px",
                    top: "-30px"
                }).next("div.index-show2").show().addClass("active")
                    .css({width: "200px", height: "400px", top: "0"}).animate({
                    width: "400px",
                    height: "460px",
                    top: "-30px"
                }, 180);
            }
        }
    ).mouseout(function () {
        clearTimeout(indextimer);
    });

    $(".index-c-1-title ul li").hover(
        function () {
            $(this).children("div").children(".index-c1-img").children("b").stop(true, false).slideUp(200);
            $(this).children("div").stop(true, false).animate({margin: "40px 0 0 0"}, 300);
            $(this).children("div").children("div.hoverblock").stop(true, false).animate({"opacity": "1"}, 300);
            $(this).children("ol").css("display", "block");
        }, function () {
            $(this).children("div").children(".index-c1-img").children("b").stop(true, false).slideDown(200);
            $(this).children("div").stop(true, false).animate({margin: "70px 0 0 0"}, 300);
            $(this).children("div").children("div.hoverblock").stop(true, false).animate({"opacity": "0"}, 300);
            $(this).children("ol").css("display", "none");

        }
    );
    $(".newsLi li").mouseover(function () {
        $(this).css({
            "border-bottom": "2px solid #2277da",
            margin: "-2px 0 0 0"
        }).siblings().css({
            "border-bottom": "0px solid #fff",
            margin: "0 0 0 0"
        });
        var index = $(this).index();
        var classshow = ".new-" + index;
        $(classshow).show().siblings().hide();
    });
});
app.controller("imageControl", function () {

});
app.controller("hhyControl", function () {

});
app.controller("dsjControl", function () {

});
app.controller("lsjjControl", function () {

});
app.controller("hhyjjControl", function () {

});
app.controller("zhyControl", function () {

});
app.controller("kangDControl", function () {

});
app.controller("yjkproductControl", function () {
    //ct4();
});
app.controller("gstdControl", function () {

});
app.controller("solute1Control", function () {

});
app.controller("sywlControl", function () {

});
app.controller("beifenControl", function () {

});
app.controller("yypControl", function () {

});
app.controller("tgyControl", function () {

});
app.controller("jkglControl", function () {

});
app.controller("yyzjControl", function () {

});
app.controller("swxwglControl", function () {

});
app.controller("jjfaControl", function () {

});
app.controller("idcjjfaControl", function () {

});
app.controller("yjrControl", function () {
});
app.controller("hlwjrControl", function () {
});
app.controller("csdlControl", function () {
});
app.controller("zhuceControl", function ($scope, $http) {
});
app.controller("freeControl", function ($scope, $http) {
});
app.controller("newlibaoControl", function ($scope, $http) {
});
app.controller("qudaohzControl", function ($scope, $http) {
});
app.controller("callcControl", function ($scope, $http) {
});
app.controller("beianControl", function ($scope, $http) {
    $("ul li").hover(
        function () {
            $(this).children("i:nth-child(1)").css("display", "none");
            $(this).children("i:nth-child(2)").css("display", "block");
            $(this).children("span").addClass("beianhover");
        },
        function () {
            $(this).children("i:nth-child(1)").css("display", "block");
            $(this).children("i:nth-child(2)").css("display", "none");
            $(this).children("span").removeClass("beianhover");
        }
    )
});


app.controller("yjkSaasControl", function () {
});
app.controller("dengluControl", function () {
});
app.controller("zhmmControl", function ($rootScope, $scope) {


    $scope.getuserEmail = function () {
        $rootScope.findemail = $("#userEmail").val();
    }

});
app.controller("lookeControl", function ($rootScope, $scope, $location) {
    var x = $location.absUrl();
    $rootScope.email = unescape(x.split("email=")[1].split("#")[0]);
});
app.controller("fofControl", function () {
});

app.controller("helpiaas-backups-gywmControl", function () {
});
app.controller("helpdocumControl", function () {
});
app.controller("helpiaas-serveControl", function () {
});
app.controller("helpcloudControl", function () {
});
app.controller("helpiaas-deployControl", function () {
});
app.controller("helpiaas-pswrdControl", function () {
});
app.controller("helpiaas-diskControl", function () {
});
app.controller("helpiaas-mainControl", function () {
});
app.controller("helpiaas-backupsControl", function () {
});
app.controller("helpiaas-backups-cereateControl", function () {
})
app.controller("helpiaas-backups-deleteControl", function () {
});
app.controller("helpiaas-backups-restoreControl", function () {
});
app.controller("helpiaas-backups-billingControl", function () {
});
app.controller("helpiaas-backups-introduceControl", function () {
});
app.controller("helpiaas-backups-securityControl", function () {
});
app.controller("helpissueControl", function () {
});

app.controller("helpcaas-serveControl", function () {
});
app.controller("helpcaas-particularsControl", function () {
});
app.controller("helpcaas-applyControl", function () {
});
app.controller("helpcaas-lookControl", function () {
});
app.controller("helpcaas-consultControl", function () {
});
app.controller("helpcaas-seekControl", function () {
});
app.controller("helpcaas-workControl", function () {
});
app.controller("helpcaas-workplanControl", function () {
});
app.controller("helpcaas-workprossControl", function () {
});
app.controller("helpcaas-networkControl", function () {
});
app.controller("helpiaas-backups-lxwmControl", function () {
});

app.controller("help_detailsControl", function () {
});
app.controller("huodong1Control", function () {
});


app.controller("newsControl", function () {
});
app.controller("news-cont1Control", function () {
});
app.controller("news-cont2Control", function () {
});
app.controller("news-cont3Control", function () {
});
app.controller("news-cont4Control", function () {
});
app.controller("news-cont5Control", function () {
});
app.controller("news-cont6Control", function () {
});
app.controller("news-cont7Control", function () {
});
app.controller("news-cont8Control", function () {
});
app.controller("news-cont9Control", function () {
});
app.controller("news-cont10Control", function () {
});
app.controller("helpiaas-backups-fwtkControl", function () {
});



