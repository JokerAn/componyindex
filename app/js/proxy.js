// JavaScript Document
/*
 var iframeId="iframe_"+window.location.hash.split("@")[1].replace(/\./g,"_").replace(":","_");
 var qsObj=parent.parent.document.getElementById(iframeId);
 qsObjH =window.location.hash.split("@")[0];
 qsObj.style.height = qsObjH.split("#")[1] + "px";
 */
// JavaScript Document
var thisDocument = parent.parent.document;
// var thisDocument=window.document;
var pl = {
    atob: function (thisCode) {
        var hex = "a";
        return window.atob(thisCode.substr(hex.length));
    },
    btoa: function (thisString) {
        var hex = "a";
        return hex + window.btoa(thisString);
    }
};
var orderObj = {
    "setCookie": function (_name, _value, _expire) {
        var expireDays = typeof(_expire) != "undefined" ? _expire : 1;//默认过期时间为1天
        var thisExpires = new Date(new Date().getTime() + expireDays * 24 * 3600 * 1000 + 5).toUTCString();
        document.cookie = _name + '=' + encodeURIComponent(_value) + '; expires=' + thisExpires;
        //console.log("合作伙伴页面定义cookie:"+_name+"的值为"+_value);
    },
    "resize": function (_id, _height) {
        //_id=pl.btoa(_id);
        var qsObj = thisDocument.getElementById(_id) || thisDocument.getElementsByName("IFRAME")[0];
        // var qsObj=thisDocument||thisDocument.getElementsByName("IFRAME")[0];
        qsObj.style.height = _height + "px";
        // qsObj.height=_height+"px";
        //console.log("iframe窗口自适应高度");
    },
    "iframeSrc": function (_id, _src) {
        //_id=pl.btoa(_id);
        var qsObj = thisDocument.getElementById(_id) || thisDocument.getElementsByName("IFRAME")[0];
        // var qsObj=thisDocument||thisDocument.getElementsByName("IFRAME")[0];
        var qsObjSrc = qsObj.getAttribute("src");
        var qsObjSrcParameter = qsObjSrc.substring(qsObjSrc.indexOf("?"), qsObjSrc.length);
        var newSrc = _src.replace(/_/g, "/");
        qsObj.src = newSrc + qsObjSrcParameter;
        orderObj.setCookie("recordHref", newSrc, 1 / 24);
        //console.log("iframe改变地址");
    },
    "topHref": function (_href) {
        parent.parent.location.href = _href;
        //console.log("合作伙伴页面转到"+_href);
    },
    toScrollTo: function (_st) {
        if (_st.toLowerCase() === "top") {
            parent.parent.scrollTo(0, 0);
        }
        if (_st.toLowerCase() === "end") {
            parent.parent.scrollTo(0, 2000);
        }
        else {
            parent.parent.scrollTo(0, parseInt(_st));
        }
    }
};
var thisHref = window.location.href;
//var
// thisParameter=decodeURIComponent(pl.atob(thisHref.substring(thisHref.indexOf("?")+1,thisHref.length))).split("&");
var thisParameter = decodeURIComponent(pl.atob(window.location.search.substr(1))).split("&");
var thisUrlObj = {};
for (var i = 0; i < thisParameter.length; i++) {
    thisUrlObj[thisParameter[i].split("=")[0]] = thisParameter[i].split("=")[1];
}
var run = new function () {
};
orderObj[thisUrlObj["order"]].apply(run, thisUrlObj["parameter"].split(","));