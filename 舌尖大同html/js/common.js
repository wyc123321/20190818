$(function() {
	!
	function() {
		var a = "@charset \"utf-8\";",
			b = document.createElement("style");
		if(document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a);
		else try {
			b.innerHTML = a
		} catch(c) {
			b.innerText = a
		}
	}();
	!
	function(a, b) {
		function c() {
			var b = f.getBoundingClientRect().width;
			b / i > 500 && (b = 500 * i);
			var c = b / 10;
			f.style.fontSize = c + "px",
				k.rem = a.rem = c
		}
		var d, e = a.document,
			f = e.documentElement,
			g = e.querySelector('meta[name="viewport"]'),
			h = e.querySelector('meta[name="flexible"]'),
			i = 0,
			j = 0,
			k = b.flexible || (b.flexible = {});
		if(g) {
			console.warn("已缩放");
			var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
			l && (j = parseFloat(l[1]), i = parseInt(1 / j))
		} else if(h) {
			var m = h.getAttribute("content");
			if(m) {
				var n = m.match(/initial\-dpr=([\d\.]+)/),
					o = m.match(/maximum\-dpr=([\d\.]+)/);
				n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))),
					o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
			}
		}
		if(!i && !j) {
			var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
				q = a.devicePixelRatio;
			i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1,
				j = 1 / i
		}
		if(f.setAttribute("data-dpr", i), !g)
			if(g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
			else {
				var r = e.createElement("div");
				r.appendChild(g),
					e.write(r.innerHTML)
			}
		a.addEventListener("resize",
				function() {
					clearTimeout(d),
						d = setTimeout(c, 300)
				}, !1),
			a.addEventListener("pageshow",
				function(a) {
					a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
				}, !1),
			"complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded",
				function() {
					e.body.style.fontSize = 12 * i + "px"
				}, !1),
			c(),
			k.dpr = a.dpr = i,
			k.refreshRem = c,
			k.rem2px = function(a) {
				var b = parseFloat(a) * this.rem;
				return "string" == typeof a && a.match(/rem$/) && (b += "px"),
					b
			},
			k.px2rem = function(a) {
				var b = parseFloat(a) / this.rem;
				return "string" == typeof a && a.match(/px$/) && (b += "rem"),
					b
			}
	}(window, window.lib || (window.lib = {}));
});
//	tab选项卡切换
(function ($) {
    $.fn.setTab = function (callback) {
        var getTab = $(this), //this指向调用函数的ID
            panels = getTab.find("div.tab_div").children("div"),
            tabs = getTab.find(".tab-ulList li");
        return this.each(function () {
            $(tabs).click(function (e) {

                var index = $.inArray(this, $(this).parent().find("li")); //this指向li
                if (panels.eq(index)[0]) {
                    $(tabs).removeClass("cur");
                    $(this).addClass("cur");
                    panels.css("display", "none").eq(index).css("display", "block");
                    callback(index);
                }
            });

        });
    }
})(jQuery);
window.onload = function() {
	var arr = document.querySelectorAll('a');
	var href = Array.from(arr);
	//		过滤
	href = href.filter(function(item) {
		return item.href != "javascript:;";
	});
	for(var i = 0; i < href.length; i++) {
		href[i].addEventListener("touchmove", function() {
			if(!this.move) {
				this.move = true;
			}
		});
		href[i].addEventListener("touchend", function() {
			window.location.href = this.href;
			this.move = false
		});
	};
}
window.onload = function() {
	var Aa = document.querySelectorAll('a');
	for(var i = 0; i < Aa.length; i++) {
		Aa[i].addEventListener('touchmove', function() {
			this.isMove = true; //给当前元素添加自定义属性isMove 让他等于true； 如果在元素上移动以后就等于true
		});
		Aa[i].addEventListener('touchend', function() {
			if(!this.isMove) { //这里判断 的是如果没有移动的话就是点击。根据当前元素的链接通过window.location.href跳转
				window.location.href = this.href;
			}
			this.isMove = false; //跳转完成以后恢复到false
		});
	}
}
$(function(){
	var browser = {  
		versions: function() {  
			var u = navigator.userAgent,
				app = navigator.appVersion;  
			return { //移动终端浏览器版本信息
				    trident: u.indexOf('Trident') > -1, //IE内核
				   presto: u.indexOf('Presto') > -1, //opera内核
				   webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				   gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				   mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
				   ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				   android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
				   iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
				   iPad: u.indexOf('iPad') > -1, //是否iPad
				   webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
				   };  
		}(),
		  language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	if(browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {

	}
	if(browser.versions.android) {

	}
})
//设备检测
function detectmob() {
	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	} else {
		return false;
	}
}
