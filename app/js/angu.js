/**
 * Created by an on 16-12-1.
 */
'use strict'
var app = angular.module("an", ["ngRoute"]);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "template/index-2.html",
            controller: "indexControl"
        })
        .when("/iaas/telcloudhost", {
            templateUrl: "template/telcloudhost.html",
            controller: "telcloudhostControl"
        })
        .when("/iaas/image", {
            templateUrl: "template/image.html",
            controller: "imageControl"
        })
        .when("/secaas/gateway", {
            templateUrl: "template/gateway.html",
            controller: "gatewayControl"
        })

        .when("/solutions/retail", {
            templateUrl: "template/retail.html",
            controller: "retailControl"
        })
        .when("/solutions/hybirdcloud", {
            templateUrl: "template/hybirdcloud.html",
            controller: "hybirdcloudControl"
        })
        .when("/solutions/hybirdcloud", {
            templateUrl: "template/hybirdcloud.html",
            controller: "hybirdcloudControl"
        })
        .when("/dsj", {
            templateUrl: "template/dsj.html",
            controller: "dsjControl"
        })
        .when("/secaas/anti-ddos", {
            templateUrl: "template/anti-ddos.html",
            controller: "anti-ddosControl"
        })
        .when("/saas/telcloudmonitor", {
            templateUrl: "template/telcloudmonitor.html",
            controller: "telcloudmonitorControl"
        })
        .when("/saas/telcloudaccelerate", {
            templateUrl: "template/telcloudaccelerate.html",
            controller: "telcloudaccelerateControl"
        })
        .when("/caas/expressconnect", {
            templateUrl: "template/expressconnect.html",
            controller: "expressconnectControl"
        })
        .when("/solute1", {
            templateUrl: "template/solute1.html",
            controller: "solute1Control"
        })
        .when("/openstackcloud", {
            templateUrl: "template/openstackcloud.html",
            controller: "openstackcloudControl"
        })
        .when("/iaas/vpc", {
            templateUrl: "template/vpc.html",
            controller: "vpcControl"
        })
        .when("/iaas/snapshot", {
            templateUrl: "template/snapshot.html",
            controller: "snapshotControl"
        })
        .when("/iaas/telcloudstorage", {
            templateUrl: "template/telcloudstorage.html",
            controller: "telcloudstorageControl"
        })
        .when("/managedprivatecloud", {
            templateUrl: "template/managedprivatecloud.html",
            controller: "managedprivatecloudControl"
        })
        .when("/iaas/monitormanagement", {
            templateUrl: "template/monitormanagement.html",
            controller: "monitormanagementControl"
        })
        .when("/caas/30b&d", {
            templateUrl: "template/30bd.html",
            controller: "30b&dControl"
        })
        .when("/secaas/networksystemsmanagement", {
            templateUrl: "template/networksystemsmanagement.html",
            controller: "networksystemsmanagementControl"
        })
        .when("/solutions/e-commerce", {
            templateUrl: "template/e-commerce.html",
            controller: "e-commerceControl"
        })
        .when("/solutions/idc", {
            templateUrl: "template/idc.html",
            controller: "idcControl"
        })
        .when("/directconnect", {
            templateUrl: "template/telclouddirectconnect.html",
            controller: "telclouddirectconnectControl"
        })
        .when("/caas/internetaccess", {
            templateUrl: "template/internetaccess.html",
            controller: "internetaccessControl"
        })
        .when("/caas/transmissioncircuit", {
            templateUrl: "template/transmissioncircuit.html",
            controller: "transmissioncircuitControl"
        })
        .when("/zhuce", {
            templateUrl: "template/zhuce.html",
            controller: "zhuceControl"
        })
        .when("/about", {
            templateUrl: "template/about.html",
            controller: "aboutControl"
        })
        .when("/about/contact_us", {
            templateUrl: "template/contact_us.html",
            controller: "contact_usControl"
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
        .when("/giftpackage", {
            templateUrl: "template/newlibao.html",
            controller: "giftpackageControl"
        })
        .when("/icp", {
            templateUrl: "template/icp.html",
            controller: "icpControl"
        })
        .when("/partners", {
            templateUrl: "template/partners.html",
            controller: "partnersControl"
        })
        .when("/solutions/callcenter", {
            templateUrl: "template/callcenter.html",
            controller: "callcenterControl"
        })
        .when("/price", {
            templateUrl: "template/price.html",
            controller: "priceControl"
        })
        .when("/documents/iso27001", {
            templateUrl: "template/iso27001.html",
            controller: "iso27001Control"
        })
        .when("/documents/iso20000", {
            templateUrl: "template/iso20000.html",
            controller: "iso27001Control"
        })
        .when("/documents/iso9001", {
            templateUrl: "template/iso9001.html",
            controller: "iso9001Control"
        })
        .when("/documents/iso14001", {
            templateUrl: "template/iso14001.html",
            controller: "iso14001Control"
        })



















        .when("/helpdocum", {
            templateUrl: "template/helpdocum.html",
            controller: "helpdocumControl"
        })
        .when("/helpcloud", {
            templateUrl: "template/helpcloud.html",
            controller: "helpcloudControl"
        })
        .when("/documents/iaas/deploy", {
            templateUrl: "template/deploy.html",
            controller: "deployControl"
        })
        .when("/documents/iaas/password", {
            templateUrl: "template/password.html",
            controller: "passwordControl"
        })
        .when("/documents/iaas/createdisk", {
            templateUrl: "template/createdisk.html",
            controller: "creatediskControl"
        })
        .when("/documents/iaas/connecthost", {
            templateUrl: "template/connecthost.html",
            controller: "connecthostControl"
        })
        .when("/documents/iaas/snapshots", {
            templateUrl: "template/backups.html",
            controller: "backupsControl"
        })
        .when("/documents/iaas/createsnapshots", {
            templateUrl: "template/createsnapshots.html",
            controller: "createsnapshotsControl"
        })
        .when("/documents/iaas/deletesnapshots", {
            templateUrl: "template/deletesnapshots.html",
            controller: "deletesnapshotsControl"
        })
        .when("/documents/iaas/restoresnapshots", {
            templateUrl: "template/restoresnapshots.html",
            controller: "restoresnapshotsControl"
        })
        .when("/documents/iaas/snapshots-billing", {
            templateUrl: "template/snapshots-billing.html",
            controller: "snapshots-billingControl"
        })
        .when("/documents/iaas/createservice", {
            templateUrl: "template/createservice.html",
            controller: "createserviceControl"
        })
        .when("/documents/iaas/introduction", {
            templateUrl: "template/introduction.html",
            controller: "introductionControl"
        })
        .when("/documents/userguide", {
            templateUrl: "template/userguide.html",
            controller: "userguideControl"
        })
        .when("/iaas/introducction", {
            templateUrl: "template/introducction.html",
            controller: "introducctionControl"
        })
        .when("/documents/user_sercurity", {
            templateUrl: "template/user_sercurity.html",
            controller: "user_sercurityControl"
        })
        .when("/documents/caas/createservice", {
            templateUrl: "template/createsservice.html",
            controller: "createservicesControl"
        })
        .when("/documents/caas/fillingin", {
            templateUrl: "template/fillingin.html",
            controller: "fillinginControl"
        })
        .when("/documents/caas/progress", {
            templateUrl: "template/progress.html",
            controller: "progressControl"
        })
        .when("/documents/caas/application", {
            templateUrl: "template/application.html",
            controller: "applicationControl"
        })
        .when("/documents/caas/consult", {
            templateUrl: "template/consult.html",
            controller: "consultControl"
        })
        .when("/documents/caas/function", {
            templateUrl: "template/function.html",
            controller: "functionControl"
        })
        .when("/documents/caas/newticket", {
            templateUrl: "template/newticket.html",
            controller: "newticketControl"
        })
        .when("/documents/caas/checkticket", {
            templateUrl: "template/checkticket.html",
            controller: "checkticketControl"
        })
        .when("/documents/caas/checkbusiness", {
            templateUrl: "template/checkbusiness.html",
            controller: "checkbusinessControl"
        })
        .when("/documents/iaas/network", {
            templateUrl: "template/network.html",
            controller: "networkControl"
        })
        .when("/documents/faq", {
            templateUrl: "template/faq.html",
            controller: "faqControl"
        })
        .when("/help_details", {
            templateUrl: "template/help_details.html",
            controller: "help_detailsControl"
        })
        .when("/help_details", {
            templateUrl: "template/help_.html",
            controller: "help_detailsControl"
        })
        .when("/sales", {
            templateUrl: "template/sale.html",
            controller: "salesControl"
        })
        .when("/cloudbroadband/apply", {
            templateUrl: "template/gjkdjs1.html",
            controller: "gjkdjs1Control"
        })
        .when("/cloudbroadband/register", {
            templateUrl: "template/gjkdjs2.html",
            controller: "gjkdjs2Control"
        })



        .when("/about/news", {
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
        .when("/news-cont11", {
            templateUrl: "template/news-cont11.html",
            controller: "news-cont11Control"
        })
        .when("/news-cont12", {
            templateUrl: "template/news-cont12.html",
            controller: "news-cont12Control"
        })
        .when("/news-cont13", {
            templateUrl: "template/news-cont13.html",
            controller: "news-cont13Control"
        })
        .when("/news-cont14", {
            templateUrl: "template/news-cont14.html",
            controller: "news-cont14Control"
        })
        .when("/news-cont15", {
            templateUrl: "template/news-cont15.html",
            controller: "news-cont15Control"
        })
        .when("/news-cont16", {
            templateUrl: "template/news-cont16.html",
            controller: "news-cont16Control"
        })
        .when("/news-cont17", {
            templateUrl: "template/news-cont17.html",
            controller: "news-cont17Control"
        })
        .when("/news-cont18", {
            templateUrl: "template/news-cont18.html",
            controller: "news-cont18Control"
        })
        .when("/news-cont19", {
            templateUrl: "template/news-cont19.html",
            controller: "news-cont19Control"
        })
        .when("/news-cont20", {
            templateUrl: "template/news-cont20.html",
            controller: "news-cont20Control"
        })
        .when("/news-cont21", {
            templateUrl: "template/news-cont21.html",
            controller: "news-cont21Control"
        })
        .when("/news-cont22", {
            templateUrl: "template/news-cont22.html",
            controller: "news-cont22Control"
        })
        .when("/news-cont23", {
            templateUrl: "template/news-cont23.html",
            controller: "news-cont23Control"
        })
        .when("/news-cont24", {
            templateUrl: "template/news-cont24.html",
            controller: "news-cont24Control"
        })
        .when("/news-cont25", {
            templateUrl: "template/news-cont25.html",
            controller: "news-cont25Control"
        })
        .when("/news-cont26", {
            templateUrl: "template/news-cont26.html",
            controller: "news-cont26Control"
        })
        .when("/news-cont27", {
            templateUrl: "template/news-cont27.html",
            controller: "news-cont27Control"
        })
        .when("/news-cont28", {
            templateUrl: "template/news-cont28.html",
            controller: "news-cont28Control"
        })
        .when("/news-cont29", {
            templateUrl: "template/news-cont29.html",
            controller: "news-cont29Control"
        })
        .when("/news-cont30", {
            templateUrl: "template/news-cont30.html",
            controller: "news-cont30Control"
        })
        .when("/news-cont31", {
            templateUrl: "template/news-cont31.html",
            controller: "news-cont31Control"
        })







        .when("/documents/tos", {
            templateUrl: "template/tos.html",
            controller: "tosControl"
        })
        .when("/documents/cloudstack/login", {
            templateUrl: "template/intrroduction.html",
            controller: "loginControl"
        })
        .when("/documents/cloudstack/application", {
            templateUrl: "template/appliication.html",
            controller: "applicationsControl"
        })
        .when("/documents/telcloudmoniter/alerts", {
            templateUrl: "template/alertss.html",
            controller: "alertsControl"
        })
        .when("/documents/telcloudmoniter/points", {
            templateUrl: "template/pointss.html",
            controller: "pointsControl"
        })
        .when("/documents/cloudstack/payment", {
            templateUrl: "template/payment.html",
            controller: "paymentControl"
        })
        .when("/documents/cloudstack/newstackbridge", {
            templateUrl: "template/newstackbridge.html",
            controller: "newstackbridgeControl"
        })
        .when("/documents/cloudstack/operation", {
            templateUrl: "template/operation.html",
            controller: "operationControl"
        })
        .when("/documents/cloudstack/stackbridgeoperation", {
            templateUrl: "template/stackbridgeoperation.html",
            controller: "stackbridgeoperationControl"
        })
        .when("/documents/cloudstack/scheduler", {
            templateUrl: "template/scheduler.html",
            controller: "schedulerControl"
        })
        .when("/interservice", {
            templateUrl: "template/interservice.html",
            controller: "interserviceControl"
        })

        .when("/documents/cloudstack/introduction", {
            templateUrl: "template/introducction.html",
            controller: "introductionControl"
        })
        .when("/yzsteptwo", {
            templateUrl: "template/yzsteptwo.html",
            controller: "yzsteptwoControl"
        })
        .when("/yzstepthree", {
            templateUrl: "template/yzstepthree.html",
            controller: "yzstepthreeControl"
        })
        .when("/yzstepfour", {
            templateUrl: "template/yzstepfour.html",
            controller: "yzstepfourControl"
        })
        .when("/documents/telcloudmoniter/concept", {
            templateUrl: "template/yjkmc.html",
            controller: "conceptControl"
        })
        .when("/documents/telcloudmoniter/login", {
            templateUrl: "template/jryjk.html",
            controller: "login2Control"
        })
        .when("/documents/telcloudmoniter/devices", {
            templateUrl: "template/tjwlsb.html",
            controller: "devicesControl"
        })
        .when("/documents/telcloudmoniter/windowserver", {
            templateUrl: "template/tjwfwq.html",
            controller: "windowserverControl"
        })
        .when("/documents/telcloudmoniter/Iinuxserver", {
            templateUrl: "template/tjlnfwq.html",
            controller: "IinuxserverControl"
        })
        .when("/documents/telcloudmoniter/oracle", {
            templateUrl: "template/tjoracle.html",
            controller: "IinuxserversControl"
        })
        .when("/documents/telcloudmoniter/ping", {
            templateUrl: "template/tjjcd.html",
            controller: "pingControl"
        })
        .when("/documents/telcloudmoniter/url", {
            templateUrl: "template/tjujcd.html",
            controller: "urlControl"
        })

































        .when("/404", {
            templateUrl: "template/404.html",
            controller: "404Control"
        })
        .when("/500", {
            templateUrl: "template/500.html",
            controller: '500Control'
        })




        .otherwise({redirectTo: '/'});


    $locationProvider.html5Mode(true);
});






app.controller("allcontrol", function ($rootScope, $scope, $location,$http) {
    // $http.get("http://192.168.60.143:8080/api/iaas/position")
    //     .success(function(res){
    //     console.log(1);
    // }).error(function(res){
    //     console.log(2);
    // })
    $rootScope.findemail;
    $rootScope.gotoPage = function (url) {

        $location.path(url);
        $('body').scrollTop(0);
    };
    $scope.fankuileibie = 1;




});
app.controller("giftpackageControl", function () {

});
app.controller("telcloudhostControl", function () {

});
app.controller("openstackcloudControl", function () {

});
app.controller("indexControl", function ($interval, $scope, $rootScope,$timeout) {
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
        linshi = $timeout(function () {
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
        linshi = $timeout(function () {
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
            indextimer = $timeout(indexhover, 160);
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

    $(".certificate-left").click(function(){
        if( $(".certificate").css("left")=="0px"){
            $(".certificate").animate({left:'-1177px'},700);
            // console.log( $(".certificate").css("left"));
        }

    });
    $(".certificate-right").click(function(){
        if( $(".certificate").css("left")=="-1177px"){
            $(".certificate").animate({left:'0'},700);
            // console.log( $(".certificate").css("left"));
        }


    });
});
app.controller("imageControl", function () {

});
app.controller("hybirdcloudControl", function () {

});
app.controller("dsjControl", function () {

});
app.controller("IinuxserverControl", function () {

});
app.controller("pingControl", function () {

});
app.controller("urlControl", function () {

});
app.controller("IinuxserversControl", function () {

});
app.controller("retailControl", function () {

});
app.controller("hybirdcloudControl", function () {

});
app.controller("gatewayControl", function () {

});
app.controller("anti-ddosControl", function () {

});
app.controller("telcloudmonitorControl", function () {
    //ct4();
});
app.controller("telcloudaccelerateControl", function () {

});
app.controller("expressconnectControl", function () {

});
app.controller("solute1Control", function () {

});
app.controller("vpcControl", function () {

});
app.controller("snapshotControl", function () {

});
app.controller("telcloudstorageControl", function () {

});
app.controller("managedprivatecloudControl", function () {

});
app.controller("monitormanagementControl", function () {

});
app.controller("30b&dControl", function () {

});
app.controller("networksystemsmanagementControl", function () {

});
app.controller("e-commerceControl", function () {

});
app.controller("idcControl", function () {

});

app.controller("telclouddirectconnectControl", function () {
});
app.controller("internetaccessControl", function () {
});
app.controller("transmissioncircuitControl", function () {
});
app.controller("zhuceControl", function ($scope, $http) {
});
app.controller("freeControl", function ($scope, $http) {
});
app.controller("newlibaoControl", function ($scope, $http) {
});
app.controller("partnersControl", function ($scope, $http) {
});
app.controller("callcenterControl", function ($scope, $http) {
});
app.controller("icpControl", function ($scope, $http) {
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
// app.controller("dengluControl", function () {
// });
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
app.controller("404Control", function () {
});
app.controller("500Control", function () {
});


app.controller("aboutControl", function () {
});
app.controller("helpdocumControl", function () {
});
app.controller("helpcloudControl", function () {
});
app.controller("deployControl", function () {
});
app.controller("passwordControl", function () {
});
app.controller("creatediskControl", function () {
});
app.controller("connecthostControl", function () {
});
app.controller("backupsControl", function () {
});
app.controller("createsnapshotsControl", function () {
})
app.controller("deletesnapshotsControl", function () {
});
app.controller("restoresnapshotsControl", function () {
});
app.controller("snapshots-billingControl", function () {
});
app.controller("createserviceControl", function () {
});
app.controller("introductionControl", function () {
});
app.controller("user_sercurityControl", function () {
});
app.controller("faqControl", function () {
});
app.controller("userguideControl", function () {
});


app.controller("createservicesControl", function () {
});
app.controller("createserviceControl", function () {
});
app.controller("fillinginControl", function () {
});
app.controller("applicationControl", function () {
});
app.controller("progressControl", function () {
});
app.controller("consultControl", function () {
});
app.controller("functionControl", function () {
});
app.controller("newticketControl", function () {
});
app.controller("checkticketControl", function () {
});
app.controller("checkbusinessControl", function () {
});
app.controller("networkControl", function () {
});
app.controller("contact_usControl", function () {
});

app.controller("help_detailsControl", function () {
});
app.controller("salesControl", function () {
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
app.controller("news-cont11Control", function () {
});
app.controller("news-cont12Control", function () {
});
app.controller("news-cont13Control", function () {
});
app.controller("news-cont14Control", function () {
});
app.controller("news-cont15Control", function () {
});
app.controller("news-cont16Control", function () {
});
app.controller("news-cont17Control", function () {
});
app.controller("news-cont18Control", function () {
});
app.controller("news-cont19Control", function () {
});
app.controller("news-cont20Control", function () {
});
app.controller("news-cont21Control", function () {
});
app.controller("news-cont22Control", function () {
});
app.controller("news-cont23Control", function () {
});
app.controller("news-cont24Control", function () {
});
app.controller("news-cont25Control", function () {
});
app.controller("news-cont26Control", function () {
});
app.controller("news-cont27Control", function () {
});
app.controller("news-cont28Control", function () {
});
app.controller("news-cont29Control", function () {
});
app.controller("news-cont30Control", function () {
});
app.controller("news-cont31Control", function () {
});

app.controller("tosControl", function () {
});
app.controller("conceptControl", function () {
});

app.controller("priceControl", function ($scope,$rootScope,$timeout) {


    $scope.root="cloudAdmin:123123:z@z.com";//提交请求的必须验证
    $scope.jftime=1;//按时计费
    // $scope.kinds=9;//区域











    $scope.anurl=window.location.protocol+'//'+document.domain+'/console/api/';//接口前面统一的格式//正式环境
    // console.log("这是api前半截"+$scope.anurl);




    // $scope.anurl="http://192.168.78.117:20000/console/api/";//接口前面统一的格式／／测试环境
    // $scope.anurl="http://www.longtel.com/console/api/";//接口前面统一的格式／／测试环境


    $scope.kind;//所有选区（北京1，北京2）

    $scope.zidiaocishuxuanqu=0;
//选区
    function xuanqu(){
        // console.log("区域"+$scope.anurl+'iaas/position');
        $.ajax({//选区
            type:'GET',
            url:$scope.anurl+'iaas/position',
            dataType:'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
            },
            success:function (data) {
                // console.log(data);
                if(typeof data!="object"&&$scope.zidiaocishuxuanqu<=50){
                    $scope.zidiaocishuxuanqu++;
                    xuanqu();
                }else{
                    $scope.zidiaocishuxuanqu==0;
                    $scope.kind=data;
                    $scope.$apply()
                }

            },
            error:function (e) {
                console.log("选区错误")
            }
        });
    }
    xuanqu();

//系统类型
    function ajaximage(){
        $.ajax({//系统类型
            type:'GET',
            url:$scope.anurl+'range/os ',
            // data:{positionId:$scope.positionid},
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
            },
            success:function (data) {
                $scope.xitong=data;
                ajaxzhuji();
                // console.log($scope.xitong);
                // $scope.$apply();


            },
            error:function (e) {
                console.log(e)
            }
        });
    }
    ajaximage();

//主机 1核1Ｇ这两行
    $scope.hgOne=0;
    function ajaxzhuji(){
        // console.log("主机"+$scope.anurl+'range/host/'+$scope.positionid);
        $.ajax({//主机
            type:'GET',
            url:$scope.anurl+'range/host/'+$scope.positionid,
            dataType:'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
            },
            success:function (data) {
                // console.log(typeof data!='object');
                // console.log($scope.hgOne);
                // console.log($scope.hgOne<=20);
                if(typeof data!='object'&&$scope.hgOne<=20){
                    $scope.hgOne++;
                    ajaxzhuji();
                }else {
                    $rootScope.heshuitem=data;
                    // console.log("主机"+$rootScope.heshuitem);
                    $scope.$apply();
                }
            },
            error:function (e) {
                console.log(e)
            }
        });
    }
    // $timeout(function(){ajaxzhuji()},8);
    // ajaxzhuji();


    $timeout(function(){



//默认///////////默认
//////默认positionid
        $scope.positionid=$(".bejing1 .btn:first-child span").html();

//全是重绘页面对象数组\
        $scope.aa1=false;$scope.aa2=false;$scope.aa3=false; $scope.aa4=false;
        $scope.zidiaocishuzhuji=0;
        $scope.zidiaocishukuandai=0;//宽带价格
        $scope.zidiaocishukuandai2=0;//宽带
        $scope.zidiaocishuroute=0;

        $scope.zidiaocishuyingpan=0;//硬盘
        $scope.zidiaocishuyingpan2=0;//硬盘价格

//全是接受data的对象数组

        $rootScope.heshuitem;//所有主机 对象
        $scope.volume;//所有硬盘 对象
        $scope.xitong;//所有系统类型/win/linux 对象
        $scope.kuandai;//所有宽带 对象

        $scope.routerprice;//所有路由器价格
        $scope.zhujiprice;//所有主机价格
        $scope.kuabndaiprice;//所有宽带价格
        $scope.volumeprice;//所有硬盘价格

        //被选中的核数
//被选中的主机类型  价格
        $scope.cpu;                // 查询主机参数cpu 1核/////////////////////////////////////
        $scope.second=1024;          // 查询主机参数 memory 1G/////////////////////////////////////
        $scope.winLinux=1;             // 查询主机参数 osType/////////////////////////////////////
        $scope.heshuselect='1核';    //用于右侧显示被选中的字符串 '1核_1GB'/////////////////////////////////////
        $scope.winLinuxname='Linux'; //用于右侧显示被选中的字符串 “linux”or"window"/////////////////////////////////////
        $scope.zhujiNum=1;           //所有主机个数/////////////////////////////////////

//被选中的硬盘类型  价格
        $scope.qosid;            //查询硬盘参数qosId 被选中的硬盘类型/////////////////////////////////////
        $scope.size=10;             //查询硬盘参数size 被选中的硬盘daxiao/////////////////////////////////////
        $scope.ypxorypr=true;       //默认计算器硬盘下面显示“性能硬盘”的GB 字符串/////////////////////////////////////
        $scope.volumeselcet='硬盘(性能型)';//用于右侧显示被选中的字符串 硬盘类型/////////////////////////////////////
        $scope.ypx=10; //性能硬盘   滑块的起始值/////////////////////////////////////
        $scope.ypr=100;//容量性硬盘 滑块的起始值/////////////////////////////////////
        $scope.volumeNum=1;  //所有硬盘个数/////////////////////////////////////

//被选中的路由类型  价格
        //就一个positionid
        $scope.routerNum=1;  //所有路由个数

//被选中的宽带  价格
        $scope.kuandais=1;      //查询宽带参数bandwidth/////////////////////////////////////
        $scope.kuandaisfirst=1;      //查询宽带参数bandwidth/////////////////////////////////////
        $scope.kuaidaiqosid; //查询宽带参数qosId/////////////////////////////////////
        $scope.kuandaiNum=1;    //所有宽带个数/////////////////////////////////////



//被选中的系统类型


//加减法start
        $scope.jiafa=function(){

            $scope.jftime++;
        };
        $scope.jianfa=function(){
            if($scope.jftime<=1){
                $scope.jftime=1
            }else{$scope.jftime--;}
        };
        $scope.jiafa1=function(){
            var a=Number($scope.ypx);
            if(a>=1000){
                $scope.ypx=1000;
            }else{
                a+=10;
                $scope.ypx=a;
            }

        };
        $scope.jianfa1=function(){
            if($scope.ypx<=10){
                $scope.ypx=10
            }else{$scope.ypx-=10;}
        };
        $scope.jiafa2=function(){
            var a=Number($scope.ypr);

            if(a>=5000){
                $scope.ypr=5000;
            }else{
                a+=100;
                $scope.ypr=a;
            }
        };
        $scope.jianfa2=function(){
            if($scope.ypr==100){
                $scope.ypr=100
            }else{$scope.ypr-=100;}
        };
        $scope.jiafa3=function(){
            var a=Number($scope.kuandais);

            if(a>=300){
                $scope.kuandais=300;
            }else{
                a+=1;
                $scope.kuandais=a;
            }
        };
        $scope.jianfa3=function(){
            if($scope.kuandais<=1){
                $scope.kuandais=1;
            }else{$scope.kuandais-=1;}
        };

//加减法end





//硬盘
        function ajaxvolume(){
            $.ajax({//硬盘
                type:'GET',
                url:$scope.anurl+'range/disk/'+$scope.positionid,
                dataType:'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    // console.log(typeof data=='undefined');
                    if(typeof data=='undefined'&&$scope.zidiaocishuyingpan2<=50){
                        $scope.zidiaocishuyingpan2++;
                        ajaxvolume();
                    }else{
                        $scope.zidiaocishuyingpan2=0;
                        $scope.volume=data;
                    }
                    $
                    // console.log('硬盘' );
                    // console.log( $scope.volume);
                    $scope.$apply();
                },
                error:function (e) {
                    console.log(e)
                }
            });
        }
        ajaxvolume();
//带宽
        function ajaxkuandai(){
            // console.log('宽带API '+$scope.anurl+'range/bandwidth/'+$scope.positionid);
            $.ajax({//带宽
                type:'GET',
                url:$scope.anurl+'range/bandwidth/'+$scope.positionid,
                // data:{positionId:$scope.positionid},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    // console.log( data);
                    // console.log(typeof data!='string');
                    if(typeof data=="string"&&$scope.zidiaocishukuandai2<=50){
                        $scope.zidiaocishukuandai2++;
                        ajaxkuandai();

                    }else{
                        $scope.zidiaocishukuandai2=0;
                        $scope.kuandai=data;
                    }

                    // console.log('带宽'+$scope.kuandai);
                    $scope.$apply();
                },
                error:function (e) {
                    console.log(e)
                }
            });
        }
        $timeout(function(){ajaxkuandai()},15);
//页面用angular渲染出来以后获取价格需要的各个参数
        function defaultOneCanShu () {
            $timeout(function(){
                $scope.qosid=$(".yingpan .btn:first-child").data("id");
                $scope.qosidfirst= $scope.qosid;//默认硬盘10G
                $scope.kuaidaiqosid=$("#kuaidaiqosid").data('kuaidaiqosid');
                // $scope.kuandaisfirst=$(".price-kuaidai>div>div input").val();//默认宽带1Mps
                $scope.kuandaisfirst=1;//默认宽带1Mps

                $scope.cpu=$(".heshu .btn:first-child").data("cpu");//1核
                $scope.second=$(".gshu .btn:first-child").data("second");//1G
                $scope.firstyingpan=$("#firstyingpan").val();
                $scope.winLinux=$(".btn-group.xitongleixing .btn:first-child").data("id");//默认系统类型
                $scope.winLinuxfirst=$scope.winLinux;
                if($scope.qosid=="undefined"||$scope.kuaidaiqosid=="undefined"){
                    defaultOneCanShu();
                }
                // console.log(
                //     "posid======="+$scope.positionid,
                //     "硬盘价格参数qosid======="+$scope.qosid,
                //     "宽带价格参数kuaidaiqosid======="+$scope.qosid
                // );


            },100);
        }
        defaultOneCanShu();




//被选中的系统类型
        $(".xitongleixing").on("click","button",function(){
            $scope.winLinuxname=$(this).html();
            $scope.winLinux=$(this).data("id");
            $scope.$apply();
        });
//被选中的linux
        $(".xitongleixing").on("click",".btn",function(){//云主机
            ajaxzhujiprice();    //主机价格
        });
//被选中的核数 cpu
        $(".heshu").on("click","button",function(){
            $scope.heshuselect=$(this).html();//字符串"1核"
            $scope.cpu=$(this).data("cpu");//数字1

            var index=$(this).index()+1;
            $(this).parent().siblings("div").children("div:nth-child("+index+")").children("button:first-child")
                .addClass("selected").siblings().removeClass("selected");//GB第一个显示 下一步参数跟着变化为第一个GB
            // $scope.second=$(this).parent().siblings("div").children("div:nth-child("+index+")").children("button:first-child").data("second");
            $scope.second=$(this).parent().siblings("div").children("div:nth-child("+index+")").children("button.selected").data("second");
            $(".text-gshu").html($scope.second/1024+"G");
            $scope.$apply();
            ajaxzhujiprice();

        });
//被选中的G数  memory
        $(".gshu").on("click","button",function(){
            $scope.second=$(this).data("second");
            $(".text-gshu").html($scope.second/1024+"G");
            ajaxzhujiprice();
            $scope.$apply();
        });

//被选中的硬盘类型

//主机价格
        function ajaxzhujiprice(){
            // console.log("主机价格参数"+
            //     $scope.positionid,$scope.second,$scope.cpu,$scope.winLinux
            // );
            $.ajax({//主机价格
                type:'POST',
                url:$scope.anurl+'price/host',
                data:{
                    positionId:$scope.positionid,
                    memory:$scope.second,
                    osType:$scope.winLinux,
                    cpu:$scope.cpu
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    // console.log(data);
                    // console.log(typeof data=="undefined"&&$scope.zidiaocishuzhuji<=10);
                    if(typeof data=="undefined"&&$scope.zidiaocishuzhuji<=20){
                        $scope.zidiaocishuzhuji++;
                        ajaxzhujiprice();
                    }else {
                        $scope.zhujiprice=data;
                        $scope.zidiaocishuzhuji =0;
                        // console.log($scope.zhujiprice);
                        allprice();
                        $scope.aa1=true;
                        if($scope.aa1&&$scope.aa2&&$scope.aa3&&$scope.aa4){
                            $scope.$apply();
                        }
                        // console.log("主机价格"+$scope.zhujiprice)
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            });
        }

//宽带价格
        function ajaxkuabndaiprice(){

            // console.log("宽带价格参数"+$scope.positionid,$scope.kuandais,$scope.kuaidaiqosid);
            $.ajax({
                type:'POST',
                url:$scope.anurl+'price/bandwidth',
                data:{
                    positionId:$scope.positionid,
                    bandwidth:$scope.kuandais,
                    qosId:$scope.kuaidaiqosid
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    // console.log("宽带价格----");
                    // console.log(data);
                    // console.log( typeof data!='string');
                    if(typeof data!='string'&&$scope.zidiaocishukuandai<=20){
                        $scope.zidiaocishukuandai++;
                        ajaxkuabndaiprice();
                    }else {
                        $scope.kuabndaiprice=data;
                        $scope.zidiaocishukuandai=0;
                        allprice();
                        $scope.aa2=true;
                        if($scope.aa1&&$scope.aa2&&$scope.aa3&&$scope.aa4){
                            $scope.$apply();
                        }
                    }
                },
                error:function (e) {
                    console.log("宽带价格error")
                }
            });
        }

//路由器价格
        function ajaxrouterprice(){

            // console.log('路由器价格'+$scope.positionid);
            $.ajax({//路由器价格
                type:'POST',
                url:$scope.anurl+'price/router',
                data:{positionId:$scope.positionid},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    if(typeof data!='string'&&$scope.zidiaocishuroute<=20){
                        $scope.zidiaocishuroute++;
                        ajaxrouterprice();
                    }else {
                        $scope.routerprice=data;
                        $scope.zidiaocishuroute=0;
                        $scope.aa3=true;
                        allprice();
                        if($scope.aa1&&$scope.aa2&&$scope.aa3&&$scope.aa4){
                            $scope.$apply();
                        }
                    }

                },
                error:function (e) {
                    console.log(e)
                }
            });
        }

//硬盘价格
        function ajaxvolumeprice(){

            if($scope.qosid==$scope.qosidfirst){
                $scope.size=Number($scope.ypx)
            }else{
                $scope.size=Number($scope.ypr)
            }
            // console.log('硬盘价格url'+$scope.anurl+'price/disk');
            // console.log('硬盘价格参数'+$scope.positionid,$scope.size,$scope.qosid);
            $.ajax({//路由器价格
                type:'POST',
                url:$scope.anurl+'price/disk',
                data:{
                    positionId:$scope.positionid,
                    size:$scope.size,
                    qosId:$scope.qosid

                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa($scope.root));
                },
                success:function (data) {
                    if( typeof data!='string'&&$scope.zidiaocishuyingpan<=20){
                        $scope.zidiaocishuyingpan++;
                        ajaxvolumeprice();
                    }else{
                        $scope.volumeprice=data;
                        $scope.zidiaocishuyingpan=0;
                        // console.log('1231231asdfasdfasdfadfadfadfadfasdfasdfadfadfadsfadfadfadfadf2312313硬盘价格-------'+$scope.volumeprice);
                        $scope.aa1=true;
                        allprice();
                        if($scope.aa1&&$scope.aa2&&$scope.aa3&&$scope.aa4){
                            $scope.$apply();
                        }
                        return
                    }


                },
                error:function (e) {
                    console.log("硬盘价格ERROR");
                    // console.log(e)
                }
            });
        }

//右侧所有按钮被点击
        $(".price-left .btn-group").on("click",".btn",function(){
            // $timeout(function(){
                $scope.zidiaocishuzhuji=0;//自调次数归零
                $scope.zidiaocishukuandai=0;//自调次数归零
                $scope.zidiaocishuroute=0;//自调次数归零
                $scope.hgOne=0;//自调次数归零
                $scope.zidiaocishuyingpan=0;//自调次数归零
                $(this).addClass("selected").siblings(".btn").removeClass("selected");
                var index=$(this).index()+1;
                if($(this).parent(".btn-group").hasClass("next1")){
                    $(this).parent(".btn-group").siblings("div").children("div:nth-child("+index+")").css("display","block").siblings().css("display","none");

                }
            // },10);
        });

        function firtSelect(classname){

            $(classname).find(".btn").removeClass("selected");
            $(classname).find(".btn:first-child").addClass("selected");
        };
        function firstopen(){
            $scope.ypxorypr=true;//显示性能性的硬盘大小
            $scope.ypx=10;//显示性能性的硬盘大小
            $scope.size=$scope.firstyingpan;
            $scope.kuandais=$scope.kuandaisfirst;
            $scope.winLinux=$scope.winLinuxfirst;

            $scope.zhujiNum=1;
            $scope.kuandaiNum=1;
            $scope.routerNum=1;
            $scope.volumeNum=1;

            // console.log("北京"+$scope.kuandais);


            var firstselected=[".xitongleixing",".heshu",".gshu",".yingpan"];
            angular.forEach(firstselected,function (data) {
                firtSelect(data);
            });




            // console.log($scope.kuandaisfirst);


            $(".yingpan .btn:first-child").click();//模拟点击硬盘(性能型)
            $(".defvolue ").css({"background-size":0+" 100%"});
            $(".defkuandai ").css({"background-size":0+" 100%"});
            $scope.$apply();
        };
        firstopen();
//北京1北京2
        $(".bejing1.btn-group").on("click",".btn",function(){

            firstopen();

            $scope.positionid=$(this).children("span").html();
            $timeout(function(){
                $(".heshu .btn:first-child").click();//模拟点击1核
            },20);

//硬盘价格
            ajaxvolumeprice();

//路由价格
            ajaxrouterprice();

//主机价格
            ajaxzhujiprice();

//宽带价格
            ajaxkuabndaiprice();

            allprice();
        });
        $timeout(function () {
            $("body .bejing1.btn-group .btn:first-child").click();
        },200);

//路由器 click
        $(".router ").on("click",".btn",function(){
            ajaxrouterprice()
        });
//宽带—— +/- click
        $(".price-kuaidai .btn-group button ").click(function(){
            $scope.zongNumkuan=300;
            var values=$('.price-kuaidai input[type="range"]').val();
            var a=values/$scope.zongNumkuan*100+"%";
            $('.price-kuaidai input[type="range"]').css({"background-size":a+" 100%"});

            ajaxvolumeprice()
        });
//云硬盘—— +/- click
        $(".price-volume div div.next2 ").on("click",".btn",function(){
            if($('.yingpan button:first-child').hasClass('selected')){
                $scope.zongNum=1000
            }
            if($('.yingpan button:last-child').hasClass('selected')){
                $scope.zongNum=5000
            }
            var values=$(this).siblings("input").val();
            var a=values/$scope.zongNum*100+"%";
            // console.log($(this).parent('div').siblings('div').children('input'));
            $(this).parent('div').siblings('div').children('input').css({"background-size":a+" 100%"});

            ajaxvolumeprice()
        });
//云硬盘-性能/容量click
        $(".yingpan").on("click","button",function(){//硬盘
            $scope.volumeselcet=$(this).html();
            $scope.qosid=$(this).data("id");
            ajaxvolumeprice();
            if($scope.qosid==$scope.qosidfirst){
                $scope.ypxorypr=true;
            }else{
                $scope.ypxorypr=false;
            }
        });
        $(".price-kuaidai .btn-group").on("click",".btn",function(){///宽带
            $scope.kuaidaiqosid=$("#kuaidaiqosid").data('kuaidaiqosid');
            ajaxkuabndaiprice(); //宽带价格
        });

        $scope.ajaxvolumeprice1=function(){

            ajaxvolumeprice();//滑动input 获取硬盘价格
        };
        $scope.ajaxkuabndaiprice1=function(){
            $scope.kuaidaiqosid=$("#kuaidaiqosid").data('kuaidaiqosid');
            ajaxkuabndaiprice();//滑动input 获取宽带价格
        };
        $(".price-right").on("click",".btn",function(){
            allprice()
        });

        /////////////////////隐藏按钮后期再删除一下代码/////////////////
        $(".jfms>div.btn-group button:last-child").attr('disabled',"true");
        function allprice(){
            // console.log("-------------------- 硬盘"+$scope.volumeprice,"宽带"+$scope.kuabndaiprice,"主机"+$scope.zhujiprice,"路由"+$scope.routerprice);
            $scope.allprice=$scope.volumeprice*$scope.volumeNum+$scope.kuabndaiprice*$scope.kuandaiNum+$scope.zhujiprice*$scope.zhujiNum+$scope.routerprice*$scope.routerNum;
            $scope.$apply();
        }


    },300);
});

//加法

app.directive("add",function(){
    return{
        link:function(scope,ele,attrs){
            ele.click(function(){
                scope[attrs.item]++;
                scope.$apply();
            })
        }
    }
});
app.directive("remove",function(){
    return{
        link:function(scope,ele,attrs){
            ele.click(function(){
                if(scope[attrs.item]==0){
                    return
                }else{
                    scope[attrs.item]--;
                    scope.$apply();
                }
            })
        }
    }
});
var heshuitem;
app.filter('unique', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [],
            keys = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(heshuitem);
            }
        });
        return output;
    }
});
app.filter('allfirst1', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            // console.log(key);
            if (key==1) {
                output.push(heshuitem);
            }
        });
        return output;
    }
});
app.filter('allfirst2', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            // console.log(key);
            if (key==2) {
                output.push(heshuitem);
            }
        });
        return output;
    }
});
app.filter('allfirst4', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            // console.log(key);
            if (key==4) {
                output.push(heshuitem);
            }
        });
        return output;
    }
});
app.filter('allfirst8', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            // console.log(key);
            if (key==8) {
                output.push(heshuitem);
            }
        });
        return output;
    }
});
app.filter('allfirst12', function ($rootScope) {
    heshuitem=$rootScope.heshuitem;
    return function (a, filtername) {
        var output = [];
        angular.forEach(a, function (heshuitem) {

            var key = heshuitem[filtername];
            // console.log(key);
            if (key==12) {
                output.push(heshuitem);
            }
        });
        return output;
    }
});

app.controller("iso27001Control", function () {
});
app.controller("iso2000Control", function () {
});
app.controller("iso9001Control", function () {
});
app.controller("iso14001Control", function () {
});
app.controller("loginControl", function () {
});
app.controller("login2Control", function () {
});
app.controller("windowserverControl", function () {
});
app.controller("devicesControl", function () {
});
app.controller("applicationsControl", function () {
});
app.controller("pointsControl", function () {
});
app.controller("alertsControl", function () {
});
app.controller("paymentControl", function () {
});
app.controller("newstackbridgeControl", function () {
});
app.controller("operationControl", function () {
});
app.controller("stackbridgeoperationControl", function () {
});
app.controller("schedulerControl", function () {
});
app.controller("interserviceControl", function () {
});

app.controller("introducctionControl", function () {
});
app.controller("yzsteptwoControl", function () {
});
app.controller("yzstepthreeControl", function () {
});
app.controller("yzstepfourControl", function () {
});
app.controller("gjkdjs1Control", function () {
});
app.controller("gjkdjs2Control", function () {
});