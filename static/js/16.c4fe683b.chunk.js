(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[16],{113:function(e,t,n){"use strict";var i=n(174),r=n(2),o=(n(166),n(167),n(18));t.a=function(e){var t=e.children,n=e.message,c=Object(r.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(o.jsx)(i.a,{className:"Tooltip",content:"string"===typeof n?Object(o.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:n.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):n,arrow:!1,animation:"shift-away",touch:"hold",children:Object(o.jsx)("div",{onClick:c.bind(this),children:t})})}},176:function(e,t,n){"use strict";var i=n(2),r=n(83),o=r.a?window:null,c=function(e){return!!e.addEventListener},a=function(e){return!!e.on},s=function(e,t,n,s){void 0===n&&(n=o),Object(i.useEffect)((function(){if(t&&n)return c(n)?Object(r.d)(n,e,t,s):a(n)&&n.on(e,t,s),function(){c(n)?Object(r.c)(n,e,t,s):a(n)&&n.off(e,t,s)}}),[e,t,n,JSON.stringify(s)])},l=function(e,t,n,o){void 0===t&&(t=r.b),void 0===n&&(n={}),void 0===o&&(o=[e]);var c=n.event,a=void 0===c?"keydown":c,l=n.target,u=n.options,d=Object(i.useMemo)((function(){var n,i="function"===typeof(n=e)?n:"string"===typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(i(e))return t(e)}}),o);s(a,d,l,u)},u=function(e){var t=Object(i.useState)([!1,null]),n=t[0],r=t[1];return l(e,(function(e){return r([!0,e])}),{event:"keydown"},[n]),l(e,(function(e){return r([!1,e])}),{event:"keyup"},[n]),n},d=n(141);t.a=function(e,t,n,i){void 0===i&&(i=u);var r=i(e),o=r[0],c=r[1];Object(d.a)((function(){!o&&n?n(c):o&&t&&t(c)}),[o])}},177:function(e,t,n){"use strict";var i=n(97),r=n(39),o=n(113),c=n(7),a=n(22),s=n(90),l=n(85),u=n.n(l),d=n(84),j=n.n(d),b=n(94),f=n(2),h=n(294),O=n(83),v=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},p=function(e,t){var n=void 0===t?{}:t,i=n.isPreventDefault,r=void 0===i||i,o=n.delay,c=void 0===o?300:o,a=Object(f.useRef)(),s=Object(f.useRef)(),l=Object(f.useCallback)((function(t){r&&t.target&&(Object(O.d)(t.target,"touchend",v,{passive:!1}),s.current=t.target),a.current=setTimeout((function(){return e(t)}),c)}),[e,c,r]),u=Object(f.useCallback)((function(){a.current&&clearTimeout(a.current),r&&s.current&&Object(O.c)(s.current,"touchend",v)}),[r]);return{onMouseDown:function(e){return l(e)},onTouchStart:function(e){return l(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}},g=n(18);function m(e){var t,n,l=e.handleSort,d=e.sortData,j=e.setSortData,O=e.statistic,v=Object(h.a)().t,m=Object(f.useRef)(!1),x=p((function(){d.sortColumn===O&&(m.current=!0,j(Object(b.a)(d,(function(e){e.delta=!d.delta}))))}),{isPreventDefault:!1}),y=c.w[O];return Object(g.jsxs)("div",Object(i.a)(Object(i.a)({className:"cell heading",onClick:function(e){m.current?m.current=!1:l(e)}.bind(this,O)},x),{},{children:[d.sortColumn===O&&Object(g.jsx)("div",{className:u()("sort-icon",Object(r.a)({invert:d.isAscending},"is-".concat(O),d.delta)),children:Object(g.jsx)(s.h,{size:10})}),Object(g.jsx)("div",{children:v(Object(a.m)((null===y||void 0===y||null===(t=y.tableConfig)||void 0===t?void 0:t.displayName)||y.displayName))}),(null===y||void 0===y||null===(n=y.tableConfig)||void 0===n?void 0:n.notes)&&Object(g.jsx)(o.a,{message:v(y.tableConfig.notes),children:Object(g.jsx)(s.n,{size:14})})]}))}var x=function(e,t){return!!j()(e.sortData,t.sortData)};t.a=Object(f.memo)(m,x)},206:function(e,t,n){var i=n(207),r=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"c3dbf9379de3f7b9fe4a.worker.js",{name:"[hash].worker.js"});return i(e,r),e}},207:function(e,t){e.exports=function(e,t){var n=0,i={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=i[n.id];r&&(delete i[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var o=document.createEvent("Event");o.initEvent(n.method,!1,!1),o.data=n.params,e.dispatchEvent(o)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(o,c){var a=++n;i[a]=[o,c],e.postMessage({type:"RPC",id:a,method:t,params:[].slice.call(r)})}))}}))}},208:function(e,t,n){"use strict";var i=n(2),r=n.n(i),o=n(21),c=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"11 17 6 12 11 7"}),r.a.createElement("polyline",{points:"18 17 13 12 18 7"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronsLeft",t.a=l},209:function(e,t,n){"use strict";var i=n(2),r=n.n(i),o=n(21),c=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronLeft",t.a=l},210:function(e,t,n){"use strict";var i=n(2),r=n.n(i),o=n(21),c=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronRight",t.a=l},211:function(e,t,n){"use strict";var i=n(2),r=n.n(i),o=n(21),c=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"13 17 18 12 13 7"}),r.a.createElement("polyline",{points:"6 17 11 12 6 7"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronsRight",t.a=l},297:function(e,t,n){"use strict";n.r(t);var i=n(82),r=n(177),o=n(156),c=n(7),a=n(90),s=n(85),l=n.n(s),u=n(2),d=n(18),j=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===c.x.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:l()("is-".concat(c.x[n])),children:Object(d.jsx)(a.h,{size:14})}),Object(d.jsx)("p",{children:"Sort by Delta [long press]"})]})},b=n(126),f=n(22),h=n(84),O=n.n(h),v=n(94),p=n(208),g=n(209),m=n(210),x=n(211),y=n(294),w=n(38),k=n(91),C=n(197),N=n(176),T=n(206),S=n.n(T),D=Object(u.lazy)((function(){return Object(f.l)((function(){return n.e(43).then(n.bind(null,290))}))}));function E(e){var t=this,n=e.data,s=(e.date,e.regionHighlighted),h=e.setRegionHighlighted,O=e.expandTable,T=e.setExpandTable,E=e.hideDistrictData,z=e.hideVaccinated,P=e.lastUpdatedDate,L=Object(y.a)().t,R=Object(C.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),H=Object(i.a)(R,2),M=H[0],A=H[1],U=Object(u.useState)(0),B=Object(i.a)(U,2),I=B[0],W=B[1],J=Object(u.useCallback)((function(e){M.sortColumn!==e?A(Object(v.a)(M,(function(t){t.sortColumn=e}))):A(Object(v.a)(M,(function(e){e.isAscending=!M.isAscending})))}),[M,A]),V=Object(k.useTrail)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:k.config.wobbly}),_=Object(u.useState)(),q=Object(i.a)(_,2),F=q[0],G=q[1],K=Object(u.useState)("States"),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],Z=Object(u.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(u.useState)(!1),ie=Object(i.a)(ne,2),re=ie[0],oe=ie[1],ce=Object(u.useMemo)((function(){return ee?Object.keys(F).filter((function(e){return Object(f.h)(F[e],"total","population")>0})).reduce((function(e,t){return e[t]=F[t],e}),{}):F}),[ee,F]),ae=Math.ceil(Object.keys(ce||{}).length/c.e),se=Object(u.useCallback)((function(e,t){if("regionName"!==M.sortColumn){var i,r=c.w[M.sortColumn],o=M.delta&&(null===r||void 0===r||null===(i=r.tableConfig)||void 0===i?void 0:i.showDelta)?"delta":"total",a=Object(f.i)((null===ce||void 0===ce?void 0:ce[e])||n[e],M.sortColumn,{expiredDate:P,normalizedByPopulationPer:ee?"lakh":null})[o],s=Object(f.i)((null===ce||void 0===ce?void 0:ce[t])||n[t],M.sortColumn,{expiredDate:P,normalizedByPopulationPer:ee?"lakh":null})[o];return M.isAscending?a-s:s-a}var l,u,d=(null===ce||void 0===ce||null===(l=ce[e])||void 0===l?void 0:l.districtName)||c.v[e],j=(null===ce||void 0===ce||null===(u=ce[t])||void 0===u?void 0:u.districtName)||c.v[t];return M.isAscending?d.localeCompare(j):j.localeCompare(d)}),[ce,ee,P,M.delta,M.isAscending,M.sortColumn,n]),le=Object(u.useCallback)((function(){Y((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(u.useEffect)((function(){var e=S()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(G(t.data),e.terminate())}))}),[X,n]),Object(u.useEffect)((function(){W((function(e){return Math.max(0,Math.min(e,ae-1))}))}),[ae]);var ue=function(e){1===Math.abs(e)?W(Math.min(Math.max(0,I+e),ae-1)):e<0?W(0):e>0&&W(ae-1)},de=Object(k.useTransition)(re,{from:b.h,enter:b.g,leave:b.h}),je=(O?c.y:c.x).filter((function(e){var t;return!("vaccinated"===(null===(t=c.w[e])||void 0===t?void 0:t.category))||!z})),be="Districts"===X&&!E;return Object(u.useEffect)((function(){be||W(0)}),[be]),Object(N.a)("?",(function(){oe(!re)})),Object(d.jsxs)("div",{className:"Table",children:[Object(d.jsxs)("div",{className:"table-top",children:[Object(d.jsx)(k.animated.div,{className:l()("option-toggle",{"is-highlighted":be}),onClick:le,style:V[0],children:Object(d.jsx)(a.o,{size:14})}),Object(d.jsx)(k.animated.div,{className:l()("lakh-toggle",{"is-highlighted":ee}),onClick:te.bind(this,!ee),style:V[0],children:Object(d.jsx)("span",{children:"1L "})}),Object(d.jsx)(k.animated.div,{className:l()("info-toggle",{"is-highlighted":re}),onClick:oe.bind(this,!re),style:V[0],children:Object(d.jsx)(a.q,{size:14})}),Object(d.jsx)(k.animated.div,{className:l()("expand-table-toggle",{"is-highlighted":O}),style:V[1],onClick:T.bind(this,!O),children:Object(d.jsx)(a.i,{size:16})})]}),de((function(e,t){return t&&Object(d.jsxs)(k.animated.div,{className:"table-helper",style:e,children:[Object(d.jsxs)("div",{className:"helper-top",children:[Object(d.jsxs)("div",{className:"helper-left",children:[Object(d.jsxs)("div",{className:"info-item",children:[Object(d.jsx)("span",{children:Object(d.jsx)(a.o,{size:14})}),Object(d.jsx)("p",{children:L("Toggle between States/Districts")})]}),Object(d.jsxs)("div",{className:"info-item",children:[Object(d.jsx)("h5",{children:"1L"}),Object(d.jsx)("p",{children:L("Per Lakh People")})]}),Object(d.jsxs)("div",{className:"info-item sort",children:[Object(d.jsx)("span",{children:Object(d.jsx)(a.h,{size:14})}),Object(d.jsx)("p",{children:L("Sort by Descending")})]}),Object(d.jsxs)("div",{className:"info-item sort invert",children:[Object(d.jsx)("span",{children:Object(d.jsx)(a.h,{size:14})}),Object(d.jsx)("p",{children:L("Sort by Ascending")})]}),Object(d.jsx)("div",{className:"info-item sort",children:Object(d.jsx)(j,{})}),Object(d.jsxs)("div",{className:"info-item notes",children:[Object(d.jsx)("span",{children:Object(d.jsx)(a.n,{size:15})}),Object(d.jsx)("p",{children:L("Notes")})]})]}),Object(d.jsxs)("div",{className:"helper-right",children:[Object(d.jsx)("div",{className:"info-item",children:Object(d.jsx)("p",{children:L("Units")})}),Object.entries({"1K":3,"1L":5,"1Cr":7}).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:"info-item",children:[Object(d.jsx)("h5",{children:n}),Object(d.jsxs)("p",{children:["10",Object(d.jsx)("sup",{style:{verticalAlign:"baseline",position:"relative",top:"-.4em"},children:r})]})]},n)}))]})]}),Object(d.jsxs)("h5",{className:"text",children:[L("Compiled from State Govt. numbers"),","," ",Object(d.jsxs)(w.b,{to:"/about",children:[L("know more"),"!"]})]})]})})),Object(d.jsx)("div",{className:"table-container",children:Object(d.jsxs)("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(je.length+1,", auto)")},children:[Object(d.jsxs)("div",{className:"row heading",children:[Object(d.jsxs)("div",{className:"cell heading",onClick:J.bind(this,"regionName"),children:[Object(d.jsx)("div",{children:L(be?"District":"State/UT")}),"regionName"===M.sortColumn&&Object(d.jsx)("div",{className:l()("sort-icon",{invert:M.isAscending}),children:Object(d.jsx)(a.h,{size:10})})]}),je.map((function(e){return Object(d.jsx)(r.a,{statistic:e,sortData:M,setSortData:A,handleSort:J.bind(t,e)},e)}))]}),!be&&Object.keys(n).filter((function(e){return"TT"!==e&&!(e===c.D&&ee)})).sort((function(e,t){return se(e,t)})).map((function(e){return Object(d.jsx)(D,{data:n[e],stateCode:e,isPerLakh:ee,regionHighlighted:s,setRegionHighlighted:h,expandTable:O,lastUpdatedDate:P,tableStatistics:je},e)})),be&&!ce&&Object(d.jsx)(o.a,{}),be&&ce&&Object.keys(ce).sort((function(e,t){return se(e,t)})).slice(I*c.e,(I+1)*c.e).map((function(e){return Object(d.jsx)(D,{data:ce[e],districtName:ce[e].districtName,isPerLakh:ee,regionHighlighted:s,setRegionHighlighted:h,expandTable:O,lastUpdatedDate:P,tableStatistics:je},e)})),Object(d.jsx)(D,{data:n.TT,stateCode:"TT",isPerLakh:ee,regionHighlighted:s,setRegionHighlighted:h,expandTable:O,lastUpdatedDate:P,tableStatistics:je},"TT")]})}),be&&Object(d.jsxs)("div",{className:"paginate",children:[Object(d.jsx)("div",{className:l()("left",{disabled:0===I}),onClick:ue.bind(this,-2),children:Object(d.jsx)(p.a,{size:16})}),Object(d.jsx)("div",{className:l()("left",{disabled:0===I}),onClick:ue.bind(this,-1),children:Object(d.jsx)(g.a,{size:16})}),Object(d.jsx)("h5",{children:"".concat(I+1," / ").concat(ae)}),Object(d.jsx)("div",{className:l()("right",{disabled:I===ae-1}),onClick:ue.bind(this,1),children:Object(d.jsx)(m.a,{size:16})}),Object(d.jsx)("div",{className:l()("right",{disabled:I===ae-1}),onClick:ue.bind(this,2),children:Object(d.jsx)(x.a,{size:16})})]})]})}var z=function(e,t){var n,i,r,o;return!!O()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(i=t.regionHighlighted)||void 0===i?void 0:i.districtName)&&(!!O()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(o=t.regionHighlighted)||void 0===o?void 0:o.stateCode)&&(!!O()(e.date,t.date)&&(O()(e.hideDistrictData,t.hideDistrictData)?!!O()(e.hideVaccinated,t.hideVaccinated)&&(!!O()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!O()(e.expandTable,t.expandTable)):void 0)))};t.default=Object(u.memo)(E,z)},84:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,r,o;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(r=i;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=i;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=i;0!==r--;){var c=o[r];if(!e(t[c],n[c]))return!1}return!0}return t!==t&&n!==n}}}]);
//# sourceMappingURL=16.c4fe683b.chunk.js.map