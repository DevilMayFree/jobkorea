(function(){function t(e,n){function c(t){if(c[t]!==b)return c[t];var e;if("bug-string-char-index"==t)e="a"!="a"[0];else if("json"==t)e=c("json-stringify")&&c("json-parse");else{var r;if("json-stringify"==t){e=n.stringify;var o="function"==typeof e&&d;if(o){(r=function(){return 1}).toJSON=r;try{o="0"===e(0)&&"0"===e(new i)&&'""'==e(new l)&&e(j)===b&&e(b)===b&&e()===b&&"1"===e(r)&&"[1]"==e([r])&&"[null]"==e([b])&&"null"==e(null)&&"[null,null,null]"==e([b,j,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==e({a:[r,!0,!1,null,"\0\b\n\f\r\t"]})&&"1"===e(null,r)&&"[\n 1,\n 2\n]"==e([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==e(new f((-864e13)))&&'"+275760-09-13T00:00:00.000Z"'==e(new f(864e13))&&'"-000001-01-01T00:00:00.000Z"'==e(new f((-621987552e5)))&&'"1969-12-31T23:59:59.999Z"'==e(new f((-1)))}catch(a){o=!1}}e=o}if("json-parse"==t){if(e=n.parse,"function"==typeof e)try{if(0===e("0")&&!e(!1)){r=e('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var u=5==r.a.length&&1===r.a[0];if(u){try{u=!e('"\t"')}catch(s){}if(u)try{u=1!==e("01")}catch(h){}if(u)try{u=1!==e("1.")}catch(p){}}}}catch(g){u=!1}e=u}}return c[t]=!!e}e||(e=o.Object()),n||(n=o.Object());var i=e.Number||o.Number,l=e.String||o.String,a=e.Object||o.Object,f=e.Date||o.Date,u=e.SyntaxError||o.SyntaxError,s=e.TypeError||o.TypeError,h=e.Math||o.Math,p=e.JSON||o.JSON;"object"==typeof p&&p&&(n.stringify=p.stringify,n.parse=p.parse);var g,y,b,a=a.prototype,j=a.toString,d=new f((-0xc782b5b800cec));try{d=-109252==d.getUTCFullYear()&&0===d.getUTCMonth()&&1===d.getUTCDate()&&10==d.getUTCHours()&&37==d.getUTCMinutes()&&6==d.getUTCSeconds()&&708==d.getUTCMilliseconds()}catch(C){}if(!c("json")){var v=c("bug-string-char-index");if(!d)var S=h.floor,O=[0,31,59,90,120,151,181,212,243,273,304,334],A=function(t,e){return O[e]+365*(t-1970)+S((t-1969+(e=+(1<e)))/4)-S((t-1901+e)/100)+S((t-1601+e)/400)};if((g=a.hasOwnProperty)||(g=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=j?g=function(t){var e=this.__proto__;return t=t in(this.__proto__=null,this),this.__proto__=e,t}:(e=r.constructor,g=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,g.call(this,t)}),y=function(t,e){var n,o,c,i=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,o=new n;for(c in o)g.call(o,c)&&i++;return n=o=null,i?y=2==i?function(t,e){var r,n={},o="[object Function]"==j.call(t);for(r in t)o&&"prototype"==r||g.call(n,r)||!(n[r]=1)||!g.call(t,r)||e(r)}:function(t,e){var r,n,o="[object Function]"==j.call(t);for(r in t)o&&"prototype"==r||!g.call(t,r)||(n="constructor"===r)||e(r);(n||g.call(t,r="constructor"))&&e(r)}:(o="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),y=function(t,e){var n,c="[object Function]"==j.call(t),i=!c&&"function"!=typeof t.constructor&&r[typeof t.hasOwnProperty]&&t.hasOwnProperty||g;for(n in t)c&&"prototype"==n||!i.call(t,n)||e(n);for(c=o.length;n=o[--c];i.call(t,n)&&e(n));}),y(t,e)},!c("json-stringify")){var w={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},T=function(t,e){return("000000"+(e||0)).slice(-t)},_=function(t){for(var e='"',r=0,n=t.length,o=!v||10<n,c=o&&(v?t.split(""):t);r<n;r++){var i=t.charCodeAt(r);switch(i){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=w[i];break;default:if(32>i){e+="\\u00"+T(2,i.toString(16));break}e+=o?c[r]:t.charAt(r)}}return e+'"'},N=function(t,e,r,n,o,c,i){var l,a,f,u,h,p,d,C,v;try{l=e[t]}catch(O){}if("object"==typeof l&&l)if(a=j.call(l),"[object Date]"!=a||g.call(l,"toJSON"))"function"==typeof l.toJSON&&("[object Number]"!=a&&"[object String]"!=a&&"[object Array]"!=a||g.call(l,"toJSON"))&&(l=l.toJSON(t));else if(l>-1/0&&l<1/0){if(A){for(u=S(l/864e5),a=S(u/365.2425)+1970-1;A(a+1,0)<=u;a++);for(f=S((u-A(a,0))/30.42);A(a,f+1)<=u;f++);u=1+u-A(a,f),h=(l%864e5+864e5)%864e5,p=S(h/36e5)%24,d=S(h/6e4)%60,C=S(h/1e3)%60,h%=1e3}else a=l.getUTCFullYear(),f=l.getUTCMonth(),u=l.getUTCDate(),p=l.getUTCHours(),d=l.getUTCMinutes(),C=l.getUTCSeconds(),h=l.getUTCMilliseconds();l=(0>=a||1e4<=a?(0>a?"-":"+")+T(6,0>a?-a:a):T(4,a))+"-"+T(2,f+1)+"-"+T(2,u)+"T"+T(2,p)+":"+T(2,d)+":"+T(2,C)+"."+T(3,h)+"Z"}else l=null;if(r&&(l=r.call(e,t,l)),null===l)return"null";if(a=j.call(l),"[object Boolean]"==a)return""+l;if("[object Number]"==a)return l>-1/0&&l<1/0?""+l:"null";if("[object String]"==a)return _(""+l);if("object"==typeof l){for(t=i.length;t--;)if(i[t]===l)throw s();if(i.push(l),v=[],e=c,c+=o,"[object Array]"==a){for(f=0,t=l.length;f<t;f++)a=N(f,l,r,n,o,c,i),v.push(a===b?"null":a);t=v.length?o?"[\n"+c+v.join(",\n"+c)+"\n"+e+"]":"["+v.join(",")+"]":"[]"}else y(n||l,function(t){var e=N(t,l,r,n,o,c,i);e!==b&&v.push(_(t)+":"+(o?" ":"")+e)}),t=v.length?o?"{\n"+c+v.join(",\n"+c)+"\n"+e+"}":"{"+v.join(",")+"}":"{}";return i.pop(),t}};n.stringify=function(t,e,n){var o,c,i,l;if(r[typeof e]&&e)if("[object Function]"==(l=j.call(e)))c=e;else if("[object Array]"==l){i={};for(var a,f=0,u=e.length;f<u;a=e[f++],l=j.call(a),("[object String]"==l||"[object Number]"==l)&&(i[a]=1));}if(n)if("[object Number]"==(l=j.call(n))){if(0<(n-=n%1))for(o="",10<n&&(n=10);o.length<n;o+=" ");}else"[object String]"==l&&(o=10>=n.length?n:n.slice(0,10));return N("",(a={},a[""]=t,a),c,i,o,"",[])}}if(!c("json-parse")){var U,J,m=l.fromCharCode,x={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},M=function(){throw U=J=null,u()},F=function(){for(var t,e,r,n,o,c=J,i=c.length;U<i;)switch(o=c.charCodeAt(U)){case 9:case 10:case 13:case 32:U++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=v?c.charAt(U):c[U],U++,t;case 34:for(t="@",U++;U<i;)if(o=c.charCodeAt(U),32>o)M();else if(92==o)switch(o=c.charCodeAt(++U)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=x[o],U++;break;case 117:for(e=++U,r=U+4;U<r;U++)o=c.charCodeAt(U),48<=o&&57>=o||97<=o&&102>=o||65<=o&&70>=o||M();t+=m("0x"+c.slice(e,U));break;default:M()}else{if(34==o)break;for(o=c.charCodeAt(U),e=U;32<=o&&92!=o&&34!=o;)o=c.charCodeAt(++U);t+=c.slice(e,U)}if(34==c.charCodeAt(U))return U++,t;M();default:if(e=U,45==o&&(n=!0,o=c.charCodeAt(++U)),48<=o&&57>=o){for(48==o&&(o=c.charCodeAt(U+1),48<=o&&57>=o)&&M();U<i&&(o=c.charCodeAt(U),48<=o&&57>=o);U++);if(46==c.charCodeAt(U)){for(r=++U;r<i&&(o=c.charCodeAt(r),48<=o&&57>=o);r++);r==U&&M(),U=r}if(o=c.charCodeAt(U),101==o||69==o){for(o=c.charCodeAt(++U),43!=o&&45!=o||U++,r=U;r<i&&(o=c.charCodeAt(r),48<=o&&57>=o);r++);r==U&&M(),U=r}return+c.slice(e,U)}if(n&&M(),"true"==c.slice(U,U+4))return U+=4,!0;if("false"==c.slice(U,U+5))return U+=5,!1;if("null"==c.slice(U,U+4))return U+=4,null;M()}return"$"},k=function(t){var e,r;if("$"==t&&M(),"string"==typeof t){if("@"==(v?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=F(),"]"!=t;r||(r=!0))r&&(","==t?(t=F(),"]"==t&&M()):M()),","==t&&M(),e.push(k(t));return e}if("{"==t){for(e={};t=F(),"}"!=t;r||(r=!0))r&&(","==t?(t=F(),"}"==t&&M()):M()),","!=t&&"string"==typeof t&&"@"==(v?t.charAt(0):t[0])&&":"==F()||M(),e[t.slice(1)]=k(F());return e}M()}return t},D=function(t,e,r){r=E(t,e,r),r===b?delete t[e]:t[e]=r},E=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if("[object Array]"==j.call(o))for(n=o.length;n--;)D(o,n,r);else y(o,function(t){D(o,t,r)});return r.call(t,e,o)};n.parse=function(t,e){var r,n;return U=0,J=""+t,r=k(F()),"$"!=F()&&M(),U=J=null,e&&"[object Function]"==j.call(e)?E((n={},n[""]=r,n),"",e):r}}}return n.runInContext=t,n}var e="function"==typeof define&&define.amd,r={"function":!0,object:!0},n=r[typeof exports]&&exports&&!exports.nodeType&&exports,o=r[typeof window]&&window||this,c=n&&r[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!c||c.global!==c&&c.window!==c&&c.self!==c||(o=c),n&&!e)t(o,n);else{var i=o.JSON,l=o.JSON3,a=!1,f=t(o,o.JSON3={noConflict:function(){return a||(a=!0,o.JSON=i,o.JSON3=l,i=l=null),f}});o.JSON={parse:f.parse,stringify:f.stringify}}e&&define(function(){return f})}).call(this);