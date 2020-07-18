(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{114:function(e,t,a){"use strict";var r=a(0),n=a(85),i=function(){};t.a=function(e,t,a){if(!n.a)return[t,i,i];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=a?a.raw?function(e){return e}:a.deserializer:JSON.parse,l=Object(r.useState)((function(){try{var r=a?a.raw?String:a.serializer:JSON.stringify,n=localStorage.getItem(e);return null!==n?c(n):(t&&localStorage.setItem(e,r(t)),t)}catch(l){return t}})),o=l[0],s=l[1],m=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(o):t;if("undefined"===typeof r)return;var n=void 0;n=a?a.raw?"string"===typeof r?r:JSON.stringify(r):a.serializer?a.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,n),s(c(n))}catch(l){}}),[e,s]),d=Object(r.useCallback)((function(){try{localStorage.removeItem(e),s(void 0)}catch(l){}}),[e,s]);return[o,m,d]}},201:function(e,t,a){"use strict";a.r(t);var r=a(78),n=a(0),i=a.n(n),c=a(90),l=function(){var e=window.innerWidth,t=e>769?480:e;return i.a.createElement(c.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},i.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),i.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),i.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},o=a(23),s=a(97),m=a(30),d=a(88),u=a(79),f=a.n(u),b=a(58),h=a(200),O=a(82),p=a.n(O),g=a(256),y=a(114),j=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(17),a.e(29)]).then(a.bind(null,225))}));t.default=i.a.memo((function(e){var t=this,a=e.timeseries,c=e.date,u=e.regionHighlighted,O=(e.setRegionHighlighted,e.anchor),p=e.setAnchor,E=(e.stateCodes,Object(g.a)().t),v=Object(n.useState)(o.q.MONTH),k=Object(r.a)(v,2),C=k[0],N=k[1],w=Object(y.a)("chartType","total"),x=Object(r.a)(w,2),S=x[0],T=x[1],P=Object(y.a)("isUniform",!0),J=Object(r.a)(P,2),U=J[0],q=J[1],z=Object(y.a)("isLog",!1),H=Object(r.a)(z,2),I=H[0],L=H[1],M=Object(n.useRef)(),R=Object(s.a)(M,{once:!0}),K=Object(n.useMemo)((function(){var e=c||Object(m.i)(),t=Object.keys(a||{}).filter((function(t){return t<=e}));if(C===o.q.TWO_WEEKS){var r=Object(b.a)(Object(h.a)(Object(m.l)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=r}))}if(C===o.q.MONTH){var n=Object(b.a)(Object(h.a)(Object(m.l)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=n}))}return t}),[a,c,C]);return i.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===O}),style:{display:"mapexplorer"===O?"none":""},ref:M},i.a.createElement("div",{className:"timeseries-header"},i.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===O}),onClick:p&&p.bind(this,"timeseries"===O?null:"timeseries")},i.a.createElement(d.j,null)),i.a.createElement("h1",null,E("Spread Trends")),i.a.createElement("div",{className:"tabs"},Object.entries(o.p).map((function(e,a){var n=Object(r.a)(e,2),c=n[0],l=n[1];return i.a.createElement("div",{className:"tab ".concat(S===c?"focused":""),key:c,onClick:T.bind(t,c)},i.a.createElement("h4",null,E(l)))}))),i.a.createElement("div",{className:"scale-modes"},i.a.createElement("label",{className:"main"},E("Scale Modes")),i.a.createElement("div",{className:"timeseries-mode"},i.a.createElement("label",{htmlFor:"timeseries-mode"},E("Uniform")),i.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:U,"aria-label":E("Checked by default to scale uniformly."),onChange:q.bind(this,!U)})),i.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==S?"disabled":"")},i.a.createElement("label",{htmlFor:"timeseries-logmode"},E("Logarithmic")),i.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===S&&I,className:"switch",disabled:"total"!==S,onChange:L.bind(this,!I)})))),i.a.createElement("div",{className:"region-highlighted"},o.n[u.stateCode]),R&&i.a.createElement(n.Suspense,{fallback:i.a.createElement(l,null)},i.a.createElement(j,Object.assign({stateCode:u.stateCode},{timeseries:a,dates:K,chartType:S,isUniform:U,isLog:I}))),!R&&i.a.createElement("div",{style:{height:"50rem"}}),i.a.createElement("div",{className:"pills"},Object.values(o.q).map((function(e){return i.a.createElement("button",{key:e,type:"button",className:f()({selected:C===e}),onClick:function(){return N(e)}},E(e))}))),i.a.createElement("div",{className:"alert"},i.a.createElement(d.h,{size:24}),i.a.createElement("div",{className:"alert-right"},E("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!!p()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!p()(t.date,e.date)&&!!p()(t.anchor,e.anchor))}))},90:function(e,t,a){"use strict";var r=a(0),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,m=e.gradientRatio,d=e.uniqueKey,u=e.interval,f=e.rtl,b=e.speed,h=e.style,O=e.title,p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=d||Math.random().toString(36).substring(6),y=g+"-diff",j=g+"-animated-diff",E=g+"-aria",v=f?{transform:"scaleX(-1)"}:null,k="0; "+u+"; 1",C=b+"s";return Object(r.createElement)("svg",n({"aria-labelledby":E,role:"img",style:n(n({},h),v)},p),O?Object(r.createElement)("title",{id:E},O):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+y+")",style:{fill:"url("+c+"#"+j+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:y},l),Object(r.createElement)("linearGradient",{id:j},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-m+"; "+-m+"; 1",keyTimes:k,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-m/2+"; "+-m/2+"; "+(1+m/2),keyTimes:k,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+m),keyTimes:k,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(i,n({},e)):Object(r.createElement)(l,n({},e))},l=function(e){return Object(r.createElement)(c,n({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=23.840ce23d.chunk.js.map