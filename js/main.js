!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=7)}([function(e,n,t){"use strict";var r={ruler:document.getElementById("ruler"),block_a:document.getElementById("a"),block_b:document.getElementById("b"),app:document.getElementById("app"),main_res:document.getElementById("res"),res_input_div:'? <input id="res_input" class="hidden" maxlength="2"/>',app_finish_div:'<div id="end">Ура!!!<br/>Вы сделали все задачки.<br/>Так держать!<div/>',colors:{error:"red",warning:"#FBA846",transparent:"transparent",black:"black",curve_color:"#E33E91"}};n.a=r},function(e,n,t){"use strict";function r(e,n,t){var r=a.a.ruler,o=a.a.colors,i=document.createElement("input"),u=document.createElement("div"),c=u.style;e*=.949;var l=40*e;u.id="curve_"+n,u.className="curve",c.width=l+"px",c.height=.5*l+"px",c.borderRadius=l+"px "+l+"px 0 0",c.borderWidth="2px",c.borderBottom=0,c.top=-l/2+"px",c.left=-1+t+"px",c.borderColor=o.curve_color,i.id="input_"+n,i.maxLength="2",i.className="input",r.appendChild(u),u.appendChild(i)}n.a=r;var a=t(0)},function(e,n,t){"use strict";function r(e){function n(e,n){return Math.round(Math.random()*(n-e)+e)}for(var t=e.a,r=e.b,a=e.ab,o=[],i=void 0,u=void 0,c=0;c<=10;)c++,i=n(t[0],t[1]),u=n(r[0],r[1]),i+u<=a[1]&&i+u>=a[0]&&(o[c]={a:i,b:u,res:i+u});return o.filter(function(e){return e})}n.a=r},function(e,n,t){"use strict";var r={a:[6,9],ab:[11,14]};r.b=[r.ab[0]-r.a[1],r.ab[1]-r.a[0]],n.a=r},function(e,n,t){"use strict";function r(e){return new Promise(function(n){var t=!1,r=a.a.main_res,o=a.a.res_input_div,i=a.a.colors,u=document.getElementById("res_input");u.classList.remove("hidden"),u.addEventListener("change",function(a){+a.target.value!==e.res&&(u.style.color=i.error),+a.target.value===e.res&&(u.style.color=i.black,u.classList.add("hidden"),r.innerText=""+e.res,t=!0,setTimeout(function(){r.innerHTML=o,n(t)},1e3))})})}n.a=r;var a=t(0)},function(e,n,t){"use strict";function r(e,n,r){return new Promise(function(i){var u=!1,c=a.a.colors;t.i(o.a)(e.a,n,0);var l=document.getElementById("input_"+n);l.addEventListener("change",function(n){+n.target.value!==e.a&&(l.style.color=c.error,r.style.backgroundColor=c.warning),+n.target.value===e.a&&(l.style.color=c.black,r.style.backgroundColor=c.transparent,u=!0,i(u))})})}n.a=r;var a=t(0),o=t(1)},function(e,n,t){"use strict";function r(e,n,r,i){return new Promise(function(u){var c=!1,l=a.a.colors;t.i(o.a)(e.b,n+1,r);var s=document.getElementById("input_"+(n+1));s.addEventListener("change",function(n){+n.target.value!==e.b&&(s.style.color=l.error,i.style.backgroundColor=l.warning),+n.target.value===e.b&&(s.style.color=l.black,i.style.backgroundColor=l.transparent,c=!0,u(c))})})}n.a=r;var a=t(0),o=t(1)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t(3),o=t(2),i=t(5),u=t(6),c=t(4);document.addEventListener("DOMContentLoaded",function(){var e=r.a.block_a,n=r.a.block_b,l=r.a.app,s=r.a.app_finish_div,d=t.i(o.a)(a.a),f=0;!function r(){var a=d[f],o=38*a.a;f<d.length&&(e.innerHTML=a.a,n.innerHTML=a.b,t.i(i.a)(a,f,e).then(function(){t.i(u.a)(a,f,o,n).then(function(){t.i(c.a)(a).then(function(){f++,document.querySelectorAll(".curve").forEach(function(e){e.remove()}),f<d.length&&r(),f>=d.length&&(l.innerHTML=s)})})}))}()})}]);