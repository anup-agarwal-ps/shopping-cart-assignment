/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n,o,i={779:(t,e,r)=>{r.d(e,{H:()=>o,l:()=>n});var n="#d10256",o="#ddd"},582:(t,e,r)=>{r.d(e,{DV:()=>i,ix:()=>o,mm:()=>a,s6:()=>n});var n="/",o="/products",i="/login",a="/register"},649:(t,e,r)=>{r.d(e,{H:()=>o,V:()=>n});var n=(0,r(294).createContext)({isUserLoggedIn:null,setIsUserLoggedIn:function(t){return t}}),o=n.Provider},804:(t,e,r)=>{r.d(e,{A:()=>n,Z:()=>o});var n=(0,r(294).createContext)({cartItems:[],addCartItem:function(t,e){},loading:!1,setLoading:function(t){},isCartDisplayed:!1,setIsCartDisplayed:function(t){}}),o=n.Provider},979:(t,e,r)=>{var n=r(294),o=r(745),i=r(257),a=r(655),c=r(250),u=r(582),l=r(804),s=r(893),f=function(t){return(0,s.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",backgroundColor:"rgba(0,0,0,.2)",zIndex:400},children:(0,s.jsx)("h2",{children:"Loading......"})})},h=r(649),p=function(){return(0,s.jsx)("footer",{className:"footer-container",children:(0,s.jsx)("span",{className:"footer-text",children:"Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd."})})},y=r(84),d=r(982),v=r(779);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function b(){}function w(){}function x(){}var j={};l(j,a,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==r&&n.call(E,a)&&(j=E);var O=x.prototype=b.prototype=Object.create(j);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==g(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(g(e)+" is not iterable")}return w.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},S(k.prototype),l(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(O),l(O,u,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function b(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=function(t){var e,r,o=(e=(0,n.useState)(""),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=o[0],p=o[1],g=(0,c.s0)(),x=(0,n.useContext)(l.A).setIsCartDisplayed,j=(0,n.useContext)(h.V),L=j.isUserLoggedIn,E=j.setIsUserLoggedIn,O=(0,c.TH)();return(0,n.useEffect)((function(){window.innerWidth<701?p("/static/images/logo.png"):p("/static/images/logo_2x.png")}),[]),(0,s.jsx)("header",{className:"header",children:(0,s.jsxs)("div",{className:"header-content",children:[(0,s.jsx)("h1",{id:"sabka-bazaar-logo",style:{display:"none"},children:"Sabka Bazaar"}),(0,s.jsx)(a.rU,{to:u.s6,children:(0,s.jsx)("img",{role:"button",tabIndex:0,className:"logo",src:f,"aria-labelledby":"sabka-bazaar-logo",alt:""})}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("button",{className:"cart",onClick:function(t){x(!0)},children:(0,s.jsx)(d.G,{color:v.l,icon:y.sq,size:"2xl"})}),L?(0,s.jsx)("button",{style:{color:v.l,margin:"0 20px",backgroundColor:"transparent",border:"0",cursor:"pointer"},tabIndex:0,onClick:function(t){new Promise(function(){var t,e=(t=m().mark((function t(e,r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/auth/logout");case 3:n=t.sent,e(n.data.msg),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),r("logout api error");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,c,"next",t)}function c(t){b(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}()).then((function(){E(!1),localStorage.removeItem("token")})).catch(console.log)},children:"Logout"}):(0,s.jsx)("button",{style:{color:v.l,backgroundColor:"transparent",border:"0",margin:"0 20px",cursor:"pointer"},tabIndex:0,onClick:function(t){return g(O.pathname===u.DV?u.mm:u.DV)},children:O.pathname===u.DV?"Register":"Login"})]})]})})};const j=function(t){var e=t.Component,r=(0,n.useContext)(h.V).isUserLoggedIn;return!0===r?(0,s.jsxs)("div",{className:"private-route-container",children:[(0,s.jsx)(x,{}),(0,s.jsx)("div",{className:"main-container",children:(0,s.jsx)("main",{children:(0,s.jsx)(e,{})})}),(0,s.jsx)("div",{children:(0,s.jsx)(p,{})})]}):!1===r?(0,s.jsx)(c.Fg,{to:u.DV}):null},L=function(t){var e=t.Component,r=(0,n.useContext)(h.V).isUserLoggedIn;return!1===r?(0,s.jsxs)("div",{style:{position:"relative",height:"100vh"},children:[(0,s.jsx)(x,{}),(0,s.jsx)("div",{style:{width:"90%",margin:"0px auto",paddingTop:"100px"},children:(0,s.jsx)("main",{children:(0,s.jsx)(e,{})})}),(0,s.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:(0,s.jsx)(p,{})})]}):!0===r?(0,s.jsx)(c.Fg,{to:u.s6}):null};function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(){O=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function g(){}function m(){}function b(){}var w={};l(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(A([])));j&&j!==r&&n.call(j,a)&&(w=j);var L=b.prototype=g.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==E(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(E(e)+" is not iterable")}return m.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},S(k.prototype),l(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function S(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function _(){_=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function g(){}function m(){}function b(){}var w={};l(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(A([])));j&&j!==r&&n.call(j,a)&&(w=j);var L=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==k(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(k(e)+" is not iterable")}return m.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function P(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}const I=function(){var t=(0,n.useContext)(h.V).setIsUserLoggedIn;return(0,n.useEffect)((function(){var e=function(){var e,r=(e=_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var t,e=(t=O().mark((function t(e,r){var n;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/auth/me");case 3:n=t.sent,e(n.data),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),r("Invalid token");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){S(i,n,o,a,c,"next",t)}function c(t){S(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}());case 3:t(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),localStorage.removeItem("token"),t(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){P(i,n,o,a,c,"next",t)}function c(t){P(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();e()}),[]),null};function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=C(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==C(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||G(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var D=n.lazy((function(){return r.e(214).then(r.bind(r,214))})),U=n.lazy((function(){return r.e(877).then(r.bind(r,877))})),V=n.lazy((function(){return r.e(484).then(r.bind(r,484))})),z=n.lazy((function(){return r.e(18).then(r.bind(r,18))})),q=n.lazy((function(){return r.e(105).then(r.bind(r,105))}));i.Z.defaults.baseURL="MISSING_ENV_VAR".API_URL||"",i.Z.interceptors.request.use((function(t){return t.headers.Authorization=localStorage.getItem("token"),t})),i.Z.interceptors.response.use((function(t){return t}));const M=function(){var t=T((0,n.useState)([]),2),e=t[0],r=t[1],o=T((0,n.useState)(!1),2),i=o[0],p=o[1],y=T((0,n.useState)(!1),2),d=y[0],v=y[1],g=T((0,n.useState)(null),2),m=g[0],b=g[1];return(0,s.jsx)(h.H,{value:{setIsUserLoggedIn:b,isUserLoggedIn:m},children:(0,s.jsxs)(l.Z,{value:{cartItems:e,addCartItem:function(t,n){var o=-1;e.every((function(e,r){return e.id!==t.id||(o=r,!1)}));var i,a=function(t){if(Array.isArray(t))return F(t)}(i=e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||G(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();o>=0?a[o].quantity+n===0?a.splice(o,1):a[o]=A(A({},e[o]),{},{quantity:e[o].quantity+n}):a.push(A(A({},t),{},{quantity:1})),r(a)},loading:i,setLoading:p,isCartDisplayed:d,setIsCartDisplayed:v},children:[(0,s.jsx)(I,{}),(0,s.jsx)(a.UT,{children:(0,s.jsxs)(n.Suspense,{fallback:null,children:[i&&(0,s.jsx)(f,{}),d?(0,s.jsx)(q,{}):null,(0,s.jsxs)(c.Z5,{children:[(0,s.jsx)(c.AW,{path:u.s6,element:(0,s.jsx)(j,{Component:D})}),(0,s.jsx)(c.AW,{path:u.ix,element:(0,s.jsx)(j,{Component:U})}),(0,s.jsx)(c.AW,{path:u.DV,element:(0,s.jsx)(L,{Component:V})}),(0,s.jsx)(c.AW,{path:u.mm,element:(0,s.jsx)(L,{Component:z})}),(0,s.jsx)(c.AW,{path:"*",element:(0,s.jsx)(c.Fg,{to:u.ix})})]})]})})]})})};o.createRoot(document.getElementById("root")).render((0,s.jsx)(n.StrictMode,{children:(0,s.jsx)(M,{})}))}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}};return i[t](r,r.exports,c),r.exports}c.m=i,t=[],c.O=(e,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,n,o]=t[s],a=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(c.O).every((t=>c.O[t](r[u])))?r.splice(u--,1):(a=!1,o<i&&(i=o));if(a){t.splice(s--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,n,o]},c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},r=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,c.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);c.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,c.d(o,i),o},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.f={},c.e=t=>Promise.all(Object.keys(c.f).reduce(((e,r)=>(c.f[r](t,e),e)),[])),c.u=t=>t+".js",c.miniCssF=t=>t+".css",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},o="frontend:",c.l=(t,e,r,i)=>{if(n[t])n[t].push(e);else{var a,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==o+r){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",o+r),a.src=t),n[t]=[e];var h=(e,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(r))),e)return e(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),u&&document.head.appendChild(a)}},c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;c.g.importScripts&&(t=c.g.location+"");var e=c.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=t})(),(()=>{if("undefined"!=typeof document){var t={179:0};c.f.miniCss=(e,r)=>{t[e]?r.push(t[e]):0!==t[e]&&{105:1,214:1,361:1,877:1}[e]&&r.push(t[e]=(t=>new Promise(((e,r)=>{var n=c.miniCssF(t),o=c.p+n;if(((t,e)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===t||o===e)return a}})(n,o))return e();((t,e,r,n,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var a=r&&r.type,c=r&&r.target&&r.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),o(u)}},i.href=e,document.head.appendChild(i)})(t,o,0,e,r)})))(e).then((()=>{t[e]=0}),(r=>{throw delete t[e],r})))}}})(),(()=>{var t={179:0};c.f.j=(e,r)=>{var n=c.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=c.p+c.u(e),a=new Error;c.l(i,(r=>{if(c.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+e,e)}},c.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[i,a,u]=r,l=0;if(i.some((e=>0!==t[e]))){for(n in a)c.o(a,n)&&(c.m[n]=a[n]);if(u)var s=u(c)}for(e&&e(r);l<i.length;l++)o=i[l],c.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return c.O(s)},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var u=c.O(void 0,[257,913,489,144,599],(()=>c(979)));u=c.O(u)})();