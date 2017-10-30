/**
 * Created by an on 16-12-1.
 */
'use strict'
var app = angular.module("an", ["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
    $routeProvider

        .when("/secaas/gateway", {
            templateUrl: "view/gateway.html",
            controller: "gatewayControl"
        })
        .when("/documents/iso27001", {
            templateUrl: "view/iso27001.html",
            controller: "iso27001Control"
        })
        .when("/documents/iso20000", {
            templateUrl: "view/iso20000.html",
            controller: "iso20000Control"
        })
        .when("/documents/iso9001", {
            templateUrl: "view/iso9001.html",
            controller: "iso9001Control"
        })
        .when("/documents/iso14001", {
            templateUrl: "view/iso14001.html",
            controller: "iso14001Control"
        })
        .when("/iaas/telcloudhost", {
            templateUrl: "view/telcloudhost.html",
            controller: "telcloudhostControl"
        })
        .when("/iaas/image", {
            templateUrl: "view/image.html",
            controller: "imageControl"
        })
        .when("/solutions/hybirdcloud", {
            templateUrl: "view/hybirdcloud.html",
            controller: "hybirdcloudControl"
        })
        .when("/iaas/vpc", {
            templateUrl: "view/vpc.html",
            controller: "vpcControl"
        })
        .when("/iaas/telcloudstorage", {
            templateUrl: "view/telcloudstorage.html",
            controller: "telcloudstorageControl"
        })
        .when("/iaas/snapshot", {
            templateUrl: "view/snapshot.html",
            controller: "snapshotControl"
        })
        .when("/iaas/monitormanagement", {
            templateUrl: "view/monitormanagement.html",
            controller: "monitormanagementControl"
        })





        .when("/directconnect", {
            templateUrl: "view/telclouddirectconnect.html",
            controller: "telclouddirectconnectControl"
        })
        .when("/managedprivatecloud", {
            templateUrl: "view/managedprivatecloud.html",
            controller: "managedprivatecloudControl"
        })
        .when("/openstackcloud", {
            templateUrl: "view/openstackcloud.html",
            controller: "openstackcloudControl"
        })
        .when("/caas/internetaccess", {
            templateUrl: "view/internetaccess.html",
            controller: "internetaccessControl"
        })
        .when("/caas/transmissioncircuit", {
            templateUrl: "view/transmissioncircuit.html",
            controller: "transmissioncircuitControl"
        })
        .when("/caas/expressconnect", {
            templateUrl: "view/expressconnect.html",
            controller: "expressconnectControl"
        })
        .when("/caas/30b&d", {
            templateUrl: "view/30bd.html",
            controller: "30b&dControl"
        })
        .when("/secaas/networksystemsmanagement", {
            templateUrl: "view/networksystemsmanagement.html",
            controller: "networksystemsmanagementControl"
        })
        .when("/mzhywg", {
            templateUrl: "view/mzhywg.html",
            controller: "mzhywgControl"
        })
        .when("/secaas/anti-ddos", {
            templateUrl: "view/anti-ddos.html",
            controller: "anti-ddosControl"
        })
        .when("/saas/telcloudmonitor", {
            templateUrl: "view/telcloudmonitor.html",
            controller: "telcloudmonitorControl"
        })
        .when("/saas/telcloudaccelerate", {
            templateUrl: "view/telcloudaccelerate.html",
            controller: "telcloudaccelerateControl"
        })
        .when("/", {
            templateUrl: "view/mindex-2.html",
            controller: "mindex2Control"
        })
        .when("/mfree", {
            templateUrl: "view/mfree.html",
            controller: "mfreeControl"
        })
        .when("/giftpackage", {
            templateUrl: "view/mnewlibao.html",
            controller: "giftpackageControl"
        })
        .when("/sales", {
            templateUrl: "view/sale.html",
            controller: "salesControl"
        })
        .when("/icp", {
            templateUrl: "view/icp.html",
            controller: "icpControl"
        })







// view2
        .when("/documents/iaas/createservice", {
            templateUrl: "view2/createservice.html",
            controller: "createservicesControl"
        })
        .when("/mwd_left", {
            templateUrl: "view2/mwd_left.html",
            controller: "mwd_leftControl"
        })
        .when("/solutions/e-commerce", {
            templateUrl: "view2/e-commerce.html",
            controller: "e-commerceControl"
        })
        .when("/solutions/idc", {
            templateUrl: "view2/idc.html",
            controller: "idcControl"
        })
        .when("/solutions/retail", {
            templateUrl: "view2/retail.html",
            controller: "retailControl"
        })
        .when("/solutions/callcenter", {
            templateUrl: "view2/callcenter.html",
            controller: "callcenterControl"
        })
        .when("/partners", {
            templateUrl: "view2/partners.html",
            controller: "partnersControl"
        })
        .when("/documents/iaas/deploy", {
            templateUrl: "view2/deploy.html",
            controller: "deployControl"
        })
        .when("/documents/iaas/password", {
            templateUrl: "view2/password.html",
            controller: "passwordControl"
        })
        .when("/documents/iaas/createdisk", {
            templateUrl: "view2/createdisk.html",
            controller: "creatediskControl"
        })
        .when("/documents/iaas/introduction", {
            templateUrl: "view2/introduction.html",
            controller: "introductionControl"
        })
        .when("/documents/cloudstack/introduction", {
            templateUrl: "view2/introducction.html",
            controller: "introductionControl"
        })
        .when("/documents/iaas/connecthost", {
            templateUrl: "view2/connecthost.html",
            controller: "connecthostControl"
        })
        .when("/documents/iaas/network", {
            templateUrl: "view2/network.html",
            controller: "networkControl"
        })
        .when("/documents/iaas/snapshots", {
            templateUrl: "view2/backups.html",
            controller: "backupsControl"
        })
        .when("/documents/iaas/createsnapshots", {
            templateUrl: "view2/createsnapshots.html",
            controller: "createsnapshotsControl"
        })
        .when("/documents/iaas/deletesnapshots", {
            templateUrl: "view2/deletesnapshots.html",
            controller: "deletesnapshotsControl"
        })
        .when("/documents/iaas/restoresnapshots", {
            templateUrl: "view2/restoresnapshots.html",
            controller: "restoresnapshotsControl"
        })
        .when("/documents/iaas/snapshots-billing", {
            templateUrl: "view2/snapshots-billing.html",
            controller: "snapshots-billingControl"
        })
        .when("/documents/caas/createservice", {
            templateUrl: "view2/createsservice.html",
            controller: "createserviceControl"
        })
        .when("/documents/caas/fillingin", {
            templateUrl: "view2/fillingin.html",
            controller: "fillinginControl"
        })
        .when("/documents/caas/application", {
            templateUrl: "view2/application.html",
            controller: "applicationControl"
        })
        .when("/documents/caas/progress", {
            templateUrl: "view2/progress.html",
            controller: "progressControl"
        })
        .when("/documents/caas/consult", {
            templateUrl: "view2/consult.html",
            controller: "consultControl"
        })
        .when("/documents/caas/function", {
            templateUrl: "view2/function.html",
            controller: "functionControl"
        })
        .when("/documents/caas/newticket", {
            templateUrl: "view2/newticket.html",
            controller: "newticketControl"
        })
        .when("/documents/caas/checkticket", {
            templateUrl: "view2/checkticket.html",
            controller: "checkticketControl"
        })
        .when("/documents/caas/checkbusiness", {
            templateUrl: "view2/checkbusiness.html",
            controller: "checkbusinessControl"
        })
        .when("/documents/user_sercurity", {
            templateUrl: "view2/user_sercurity.html",
            controller: "user_sercurityControl"
        })
        .when("/documents/faq", {
            templateUrl: "view2/faq.html",
            controller: "faqControl"
        })
        .when("/cloudbroadband/apply", {
            templateUrl: "view2/gjkdjs1.html",
            controller: "gjkdjs1Control"
        })
        .when("/cloudbroadband/register", {
            templateUrl: "view2/gjkdjs2.html",
            controller: "gjkdjs2Control"
        })

        .when("/about/news", {
            templateUrl: "view2/news.html",
            controller: "newsControl"
        })


        .when("/mnews_cont1", {
            templateUrl: "view2/mnews_cont1.html",
            controller: "mnews_cont1Control"
        })
        .when("/mnews_cont2", {
            templateUrl: "view2/mnews_cont2.html",
            controller: "mnews_cont2Control"
        })
        .when("/mnews_cont3", {
            templateUrl: "view2/mnews_cont3.html",
            controller: "mnews_cont3Control"
        })
        .when("/mnews_cont4", {
            templateUrl: "view2/mnews_cont4.html",
            controller: "mnews_cont4Control"
        })
        .when("/mnews_cont5", {
            templateUrl: "view2/mnews_cont5.html",
            controller: "mnews_cont5Control"
        })
        .when("/mnews_cont6", {
            templateUrl: "view2/mnews_cont6.html",
            controller: "mnews_cont6Control"
        })
        .when("/mnews_cont7", {
            templateUrl: "view2/mnews_cont7.html",
            controller: "mnews_cont7Control"
        })
        .when("/mnews_cont8", {
            templateUrl: "view2/mnews_cont8.html",
            controller: "mnews_cont8Control"
        })
        .when("/mnews_cont9", {
            templateUrl: "view2/mnews_cont9.html",
            controller: "mnews_cont9Control"
        })
        .when("/mnews_cont10", {
            templateUrl: "view2/mnews_cont10.html",
            controller: "mnews_cont10Control"
        })
        .when("/mnews_cont11", {
            templateUrl: "view2/mnews_cont11.html",
            controller: "mnews_cont11Control"
        })
        .when("/mnews_cont12", {
            templateUrl: "view2/mnews_cont12.html",
            controller: "mnews_cont12Control"
        })
        .when("/mnews_cont13", {
            templateUrl: "view2/mnews_cont13.html",
            controller: "mnews_cont13Control"
        })
        .when("/mnews_cont14", {
            templateUrl: "view2/mnews_cont14.html",
            controller: "mnews_cont14Control"
        })
        .when("/mnews_cont15", {
            templateUrl: "view2/mnews_cont15.html",
            controller: "mnews_cont15Control"
        })
        .when("/mnews_cont16", {
            templateUrl: "view2/mnews_cont16.html",
            controller: "mnews_cont16Control"
        })
        .when("/mnews_cont17", {
            templateUrl: "view2/mnews_cont17.html",
            controller: "mnews_cont17Control"
        })
        .when("/mnews_cont18", {
            templateUrl: "view2/mnews_cont18.html",
            controller: "mnews_cont18Control"
        })
        .when("/mnews_cont19", {
            templateUrl: "view2/mnews_cont19.html",
            controller: "mnews_cont19Control"
        })
        .when("/mnews_cont20", {
            templateUrl: "view2/mnews_cont20.html",
            controller: "mnews_cont20Control"
        })
        .when("/mnews_cont21", {
            templateUrl: "view2/mnews_cont21.html",
            controller: "mnews_cont21Control"
        })
        .when("/mnews_cont22", {
            templateUrl: "view2/mnews_cont22.html",
            controller: "mnews_cont22Control"
        })
        .when("/mnews_cont23", {
            templateUrl: "view2/mnews_cont23.html",
            controller: "mnews_cont23Control"
        })
        .when("/mnews_cont24", {
            templateUrl: "view2/mnews_cont24.html",
            controller: "mnews_cont24Control"
        })
        .when("/mnews_cont25", {
            templateUrl: "view2/mnews_cont25.html",
            controller: "mnews_cont25Control"
        })
        .when("/mnews_cont26", {
            templateUrl: "view2/mnews_cont26.html",
            controller: "mnews_cont26Control"
        })
        .when("/mnews_cont27", {
            templateUrl: "view2/mnews_cont27.html",
            controller: "mnews_cont27Control"
        })
        .when("/mnews_cont28", {
            templateUrl: "view2/mnews_cont28.html",
            controller: "mnews_cont28Control"
        })
        .when("/mnews_cont29", {
            templateUrl: "view2/mnews_cont29.html",
            controller: "mnews_cont29Control"
        })
        .when("/mnews_cont30", {
            templateUrl: "view2/mnews_cont30.html",
            controller: "mnews_cont30Control"
        })
        .when("/mnews_cont31", {
            templateUrl: "view2/mnews_cont31.html",
            controller: "mnews_cont31Control"
        })
        .when("/documents/userguide", {
            templateUrl: "view2/userguide.html",
            controller: "userguideControl"
        })

        .when("/about/contact_us", {
            templateUrl: "view2/contact_us.html",
            controller: "contact_usControl"
        })
        .when("/about", {
            templateUrl: "view2/about.html",
            controller: "aboutControl"
        })
        .when("/documents/tos", {
            templateUrl: "view2/tos.html",
            controller: "tosControl"
        })
        .when("/documents/cloudstack/application", {
            templateUrl: "view2/appliication.html",
            controller: "appliicationControl"
        })
        .when("/documents/cloudstack/payment", {
                    templateUrl: "view2/payment.html",
                    controller: "paymentControl"
                })
        .when("/documents/cloudstack/newstackbridge", {
                    templateUrl: "view2/newstackbridge.html",
                    controller: "newstackbridgeControl"
                })
        .when("/documents/cloudstack/operation", {
                    templateUrl: "view2/operation.html",
                    controller: "operationControl"
                })
        .when("/documents/cloudstack/stackbridgeoperation", {
                    templateUrl: "view2/stackbridgeoperation.html",
                    controller: "stackbridgeoperationControl"
                })
        .when("/documents/cloudstack/scheduler", {
                    templateUrl: "view2/scheduler.html",
                    controller: "schedulerControl"
                })

        .when("/documents/cloudstack/login", {
                            templateUrl: "view2/intrroduction.html",
                            controller: "loginControl"
                        })

        .when("/minterservice", {
            templateUrl: "view2/minterservice.html",
            controller: "minterserviceControl"
        })

        .when("/documents/cloudstack/introduction", {
            templateUrl: "view2/introducction.html",
            controller: "introductionControl"
        })
        .when("/myzsteptwo", {
            templateUrl: "view2/myzsteptwo.html",
            controller: "myzsteptwoControl"
        })
        .when("/myzstepthree", {
            templateUrl: "view2/myzstepthree.html",
            controller: "myzstepthreeControl"
        })
        .when("/myzstepfour", {
            templateUrl: "view2/myzstepfour.html",
            controller: "myzstepfourControl"
        })
        .when("/documents/telcloudmoniter/concept", {
            templateUrl: "view2/yjkmc.html",
            controller: "conceptControl"
        })
        .when("/documents/telcloudmoniter/login", {
            templateUrl: "view2/jryjk.html",
            controller: "loginControl"
        })
        .when("/documents/telcloudmoniter/devices", {
            templateUrl: "view2/tjwlsb.html",
            controller: "devicesControl"
        })
        .when("/documents/telcloudmoniter/windowserver", {
            templateUrl: "view2/tjwfwq.html",
            controller: "windowserverControl"
        })
        .when("/documents/telcloudmoniter/Iinuxserver", {
            templateUrl: "view2/tjlnfwq.html",
            controller: "IinuxserverControl"
        })
        .when("/documents/telcloudmoniter/oracle", {
            templateUrl: "view2/tjoracle.html",
            controller: "oracleControl"
        })
        .when("/documents/telcloudmoniter/ping", {
            templateUrl: "view2/tjjcd.html",
            controller: "pingControl"
        })
        .when("/documents/telcloudmoniter/url", {
            templateUrl: "view2/tjujcd.html",
            controller: "urlControl"
        })
        .when("/documents/telcloudmoniter/points", {
            templateUrl: "view2/pointss.html",
            controller: "pointsControl"
        })
        .when("/documents/telcloudmoniter/alerts", {
            templateUrl: "view2/alertss.html",
            controller: "alertsControl"
        })
        .when("/warning", {
            templateUrl: "view2/doc404.html",
            controller: "doc404Control"
        })










        .otherwise({redirectTo: '/'});


    $locationProvider.html5Mode(true);


});
app.controller("allcontrol", function ($rootScope, $scope, $location) {
    $rootScope.findemail;
    $rootScope.gotoPage = function (url) {
        $location.path(url);
        $('body').scrollTop(0);
    };
    $scope.fankuileibie = 1;


});

app.controller("doc404Control", function () {

});
app.controller("alertsControl", function () {

});
app.controller("pointsControl", function () {

});
app.controller("urlControl", function () {

});
app.controller("pingControl", function () {

});
app.controller("oracleControl", function () {

});
app.controller("IinuxserverControl", function () {

});
app.controller("windowserverControl", function () {

});
app.controller("devicesControl", function () {

});
app.controller("loginControl", function () {

});
app.controller("conceptControl", function () {

});
app.controller("telcloudhostControl", function () {

});
app.controller("openstackcloudControl", function () {

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
app.controller("hybirdcloudControl", function () {

});
app.controller("dsjControl", function () {

});
app.controller("retailControl", function () {

});
app.controller("hybirdcloudControl", function () {

});
app.controller("zhyControl", function () {

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
app.controller("giftpackageControl", function ($scope, $http) {
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
app.controller("gatewayControl", function () {
});
app.controller("aboutControl", function () {
});
app.controller("helpdocumControl", function () {
});

app.controller("helpcloudControl", function () {
});
app.controller("creatediskControl", function () {
});
app.controller("introductionControl", function () {
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

app.controller("introductionControl", function () {
});
app.controller("user_sercurityControl", function () {
});
app.controller("faqControl", function () {
});

app.controller("createservicesControl", function () {
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
app.controller("news-cont20Control", function () {
});
app.controller("news-cont21Control", function () {
});



app.controller("tosControl", function () {
});
//
//

app.controller("mwd_leftControl", function () {
});
app.controller("e-commerceControl", function () {
});
app.controller("idcControl", function () {
});
app.controller("retailxControl", function () {
});
app.controller("callcenterControl", function () {
});
app.controller("mtgyhzControl", function () {
});
app.controller("createserviceControl", function () {
});
app.controller("deployControl", function () {
});
app.controller("passwordControl", function () {
});
app.controller("creatediskControl", function () {
});
app.controller("connecthostControl", function () {
});
app.controller("networkControl", function () {
});
app.controller("backupsControl", function () {
});
app.controller("createsnapshotsControl", function () {
});
app.controller("deletesnapshotsControl", function () {
});
app.controller("restoresnapshotsControl", function () {
});
app.controller("snapshots-billingControl", function () {
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
app.controller("user_sercurityControl", function () {
});
app.controller("faqControl", function () {
});
app.controller("mnewsControl", function () {
});
app.controller("mnews_cont1Control", function () {
});
app.controller("mnews_cont2Control", function () {
});
app.controller("mnews_cont3Control", function () {
});
app.controller("mnews_cont4Control", function () {
});
app.controller("mnews_cont5Control", function () {
});
app.controller("mnews_cont6Control", function () {
});
app.controller("mnews_cont7Control", function () {
});
app.controller("mnews_cont8Control", function () {
});
app.controller("mnews_cont9Control", function () {
});
app.controller("mnews_cont10Control", function () {
});
app.controller("mnews_cont11Control", function () {
});
app.controller("mnews_cont12Control", function () {
});
app.controller("mnews_cont13Control", function () {
});
app.controller("mnews_cont14Control", function () {
});
app.controller("mnews_cont15Control", function () {
});
app.controller("mnews_cont16Control", function () {
});
app.controller("mnews_cont17Control", function () {
});

app.controller("mnews_cont18Control", function () {
});
app.controller("mnews_cont19Control", function () {
});
app.controller("mnews_cont20Control", function () {
});
app.controller("mnews_cont21Control", function () {
});
app.controller("mnews_cont22Control", function () {
});
app.controller("mnews_cont23Control", function () {
});
app.controller("mnews_cont24Control", function () {
});
app.controller("mnews_cont25Control", function () {
});
app.controller("mnews_cont26Control", function () {
});
app.controller("mnews_cont27Control", function () {
});
app.controller("mnews_cont28Control", function () {
});
app.controller("mnews_cont29Control", function () {
});
app.controller("mnews_cont30Control", function () {
});
app.controller("mnews_cont31Control", function () {
});

app.controller("contact_usControl", function () {
});
app.controller("aboutControl", function () {
});
app.controller("tosControl", function () {
});




app.controller("telcloudhostControl", function () {
});
app.controller("imageControl", function () {
});
app.controller("hybirdcloudControl", function () {
});
app.controller("vpcControl", function () {
});
app.controller("telcloudstorageControl", function () {
});
app.controller("snapshotControl", function () {
});
app.controller("monitormanagementControl", function () {
});
app.controller("telclouddirectconnectControl", function () {
});
app.controller("managedprivatecloudControl", function () {
});
app.controller("msyyControl", function () {
});
app.controller("internetaccessControl", function () {
});
app.controller("transmissioncircuitControl", function () {
});
app.controller("expressconnectControl", function () {
});
app.controller("30b&dControl", function () {
});
app.controller("networksystemsmanagementControl", function () {
});
app.controller("mzhywgControl", function () {
});
app.controller("anti-ddosControl", function () {
});
app.controller("myjkControl", function () {
});
app.controller("mindex2Control", function () {
});
app.controller("giftpackageControl", function () {
});
app.controller("mfreeControl", function () {
});
app.controller("salesControl", function () {
});
app.controller("mbeianControl", function () {
});
app.controller("appliicationControl", function () {
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
app.controller("loginControl", function () {
});


app.controller("iso27001Control", function () {
});
app.controller("iso20000Control", function () {
});
app.controller("iso9001Control", function () {
});
app.controller("iso14001Control", function () {
});
app.controller("minterserviceControl", function () {
});

app.controller("myzsteptwoControl", function () {
});
app.controller("myzstepthreeControl", function () {
});
app.controller("myzstepfourControl", function () {
});
app.controller("gjkdjs1Control", function () {
});
app.controller("gjkdjs2Control", function () {
});
app.controller("userguideControl", function () {
});