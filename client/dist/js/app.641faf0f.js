(function(t){function e(e){for(var n,i,s=e[0],u=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("2a76"),o=r.n(n);o.a},"2a76":function(t,e,r){},4771:function(t,e,r){"use strict";var n=r("f965"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("e832"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.loggedIn?r("div",{staticClass:"user"},[r("Badge",{attrs:{picture:t.profile.photos[0].value,name:t.profile.displayName}}),r("Repos",{attrs:{repos:t.repos}})],1):r("div",[r("a",{staticClass:"login",attrs:{href:"/login"}},[t._v("Login with Github")])]),r("Footer")],1)},a=[],i=r("1c05"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"badge"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:t.picture,alt:"profile-pic",height:"100",width:"100"}})]),r("h2",{staticClass:"name"},[t._v(t._s(t.name))])])},u=[],l={name:"Badge",props:{picture:String,name:String}},c=l,p=(r("a03f"),r("a6c2")),f=Object(p["a"])(c,s,u,!1,null,"52eb2346",null);f.options.__file="Badge.vue";var d=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list"},t._l(t.repos,function(e){return r("li",[r("a",{staticClass:"link",attrs:{href:e.html_url}},[r("h3",[t._v(t._s(e.full_name))]),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])])}))},h=[],_={name:"Repos",props:{repos:Array}},g=_,b=(r("9d2f"),Object(p["a"])(g,v,h,!1,null,"2446d1ec",null));b.options.__file="Repos.vue";var m=b.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[t._v("\n  Created with ❤️ by "),r("a",{attrs:{href:"https://github.com/gjuchault"}},[t._v("Gabriel Juchault")]),t._v(", source code on "),r("a",{attrs:{href:"https://github.com/gjuchault/github-list-repos"}},[t._v("github")])])}],w=(r("4771"),{}),O=Object(p["a"])(w,y,j,!1,null,"61a4fc49",null);O.options.__file="Footer.vue";var x=O.exports,C={name:"app",components:{Badge:d,Repos:m,Footer:x},data:()=>({loggedIn:!1,repos:[],profile:{}}),async mounted(){const t=await i["a"].get("/repos").json();t&&(this.loggedIn=!0,this.repos=t.repos,this.profile=t.profile)}},S=C,P=(r("034f"),Object(p["a"])(S,o,a,!1,null,null,null));P.options.__file="App.vue";var $=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t($)}).$mount("#app")},"889f":function(t,e,r){},"9d2f":function(t,e,r){"use strict";var n=r("af71"),o=r.n(n);o.a},a03f:function(t,e,r){"use strict";var n=r("889f"),o=r.n(n);o.a},af71:function(t,e,r){},f965:function(t,e,r){}});
//# sourceMappingURL=app.641faf0f.js.map