function browerRedirect(){
	// 得到设备信息字符串
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i)=="ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i)=="iphone os";
	var bIsMidp = sUSerAgent.match(/midp/i)=="midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
    document.writeln("您的浏览设备为：");  
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
        alert("移动"); 
    } else {  
        alert("pc");  
    }    
}

var browser={  
    versions:function(){   
        var u = navigator.userAgent;
        var app = navigator.appVersion;  //移动终端浏览器版本信息    
        return {
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };  
    }(),  
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   


if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){        
    if(/pc\.html/i.test(window.location.href)){
        window.location = "phone.html";
    }
}else if(/phone\.html/i.test(window.location.href)){
    window.location = "pc.html";
}