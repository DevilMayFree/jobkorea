!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(e){return t[e]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,o){e&&n(t.prototype,e),o&&n(t,o)}(t,[{key:"initialize",value:function(){this.container=document.querySelector(".actPrevTop")||null,this.buttonToTop=this.container&&this.container.querySelector(".btn.btnTop")||null,this.setupDectectedScrollingToTop()}},{key:"setupDectectedScrollingToTop",value:function(){this.isScrolling=null,this._onDetectedScrolling=this.onDetectedScrolling.bind(this),window.addEventListener("scroll",this._onDetectedScrolling),this.compareScrollTop()}},{key:"onDetectedScrolling",value:function(){var t=this;clearTimeout(this.isScrolling),this.isScrolling=setTimeout((function(){t.compareScrollTop()}),300)}},{key:"compareScrollTop",value:function(){this.getScrollTop()>=300?this.enableButtonTop():this.disableButtonTop()}},{key:"enableButtonTop",value:function(){this.buttonToTop&&(this.buttonToTop.classList.remove("disabled"),this.buttonToTop.setAttribute("arai-hidden","false"))}},{key:"disableButtonTop",value:function(){this.buttonToTop&&(this.buttonToTop.classList.add("disabled"),this.buttonToTop.setAttribute("arai-hidden","true"))}},{key:"getScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"destroyScrolling",value:function(){this.enableButtonTop(),window.removeEventListener("scroll",this._onDetectedScrolling)}}]),t}();window.ui=window.ui||{},ui.common=ui.common||{},ui.common.FloatingBottomHelper=new i,ui.common.FloatingBottomHelper.initialize()}]);