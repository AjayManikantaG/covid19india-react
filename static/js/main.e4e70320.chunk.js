(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{22:function(e,a,n){"use strict";n.d(a,"j",(function(){return v})),n.d(a,"f",(function(){return h})),n.d(a,"g",(function(){return m})),n.d(a,"d",(function(){return g})),n.d(a,"k",(function(){return T})),n.d(a,"c",(function(){return y})),n.d(a,"e",(function(){return b})),n.d(a,"a",(function(){return A})),n.d(a,"m",(function(){return D})),n.d(a,"h",(function(){return w})),n.d(a,"i",(function(){return S})),n.d(a,"b",(function(){return E})),n.d(a,"l",(function(){return k}));var t=n(7),o=n(62),i=n(73),r=n(74),l=n(75),c=n(76),d=n(36),u=n(24),s=null,f=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),v=function(){return!1},p=function(){return Object(d.a)(new Date,"Asia/Kolkata")},h=function(){return Object(o.a)(p(),{representation:"date"})},m=function(){return Object(o.a)(Object(i.a)(p(),1),{representation:"date"})},g=function(e){return n.e(46).then(n.bind(null,81)).then((function(e){s=e[t.j[u.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(e),new Date,{locale:s})},T=function(e){return e?(e.match(t.h)&&(e+=t.g),Object(d.a)(new Date(e),"Asia/Kolkata")):p()},y=function(e,a){if(!e)return"";"string"===typeof e&&e.match(t.h)&&(e+=t.g);var n=Object(d.a)(new Date(e),"Asia/Kolkata");return Object(l.a)(n,a,{locale:s})},j=function(e){var a=Math.round(Math.abs(e));return a<1e3?f.format(Math.floor(e)):a>=1e3&&a<1e5?f.format(e/1e3)+"K":a>=1e5&&a<1e7?f.format(e/1e5)+"L":a>=1e7&&a<1e10?f.format(e/1e7)+"Cr":a>=1e10&&a<1e14?f.format(e/1e10)+"K Cr":a>=1e14?f.format(e/1e14)+"L Cr":void 0},b=function(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;return isNaN(e)||o&&(null===(a=t.w[o])||void 0===a?void 0:a.hideZero)&&0===e?"-":"long"===n?f.format(Math.abs(e)<1?e:Math.round(e)):"short"===n?j(e):"%"===n?"".concat(f.format(e),"%"):""===n?f.format(e):void 0},A=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},D=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},w=function(e,a,n){var o,i,r,l,d,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=u.expiredDate,f=void 0===s?null:s,v=u.normalizedByPopulationPer,p=void 0===v?null:v,h=u.movingAverage,m=void 0!==h&&h;if(null!==f&&("tested"===(null===(o=t.w[n])||void 0===o?void 0:o.category)&&(!(null===e||void 0===e||null===(i=e.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.last_updated)||Object(c.a)(f,T(null===e||void 0===e||null===(l=e.meta)||void 0===l||null===(d=l.tested)||void 0===d?void 0:d.last_updated))>t.z)))return 0;var g,y,j=1;if("delta"===a&&m&&(a="delta7",j*=1/7),"million"===p)j*=1e6/(null===e||void 0===e||null===(g=e.meta)||void 0===g?void 0:g.population);else if("lakh"===p){var b;j*=1e5/(null===e||void 0===e||null===(b=e.meta)||void 0===b?void 0:b.population)}else if("hundred"===p){var A;j*=100/(null===e||void 0===e||null===(A=e.meta)||void 0===A?void 0:A.population)}if("active"===n||"activeRatio"===n){var D,w,S,E,k=(null===e||void 0===e||null===(D=e[a])||void 0===D?void 0:D.confirmed)||0,C=(null===e||void 0===e||null===(w=e[a])||void 0===w?void 0:w.deceased)||0,F=(null===e||void 0===e||null===(S=e[a])||void 0===S?void 0:S.recovered)||0,N=(null===e||void 0===e||null===(E=e[a])||void 0===E?void 0:E.other)||0,O=k-C-F-N;"active"===n?y=O:"activeRatio"===n&&(y=O/k*100)}else if("vaccinated"===n){var L,P,R=(null===e||void 0===e||null===(L=e[a])||void 0===L?void 0:L.vaccinated1)||0,M=(null===e||void 0===e||null===(P=e[a])||void 0===P?void 0:P.vaccinated2)||0;y=R+M}else if("tpr"===n){var U,B,K=(null===e||void 0===e||null===(U=e[a])||void 0===U?void 0:U.confirmed)||0,H=(null===e||void 0===e||null===(B=e[a])||void 0===B?void 0:B.tested)||0;y=K/H*100}else if("cfr"===n){var I,J,G=(null===e||void 0===e||null===(I=e[a])||void 0===I?void 0:I.deceased)||0,W=(null===e||void 0===e||null===(J=e[a])||void 0===J?void 0:J.confirmed)||0;y=G/W*100}else if("recoveryRatio"===n){var x,Z,z=(null===e||void 0===e||null===(x=e[a])||void 0===x?void 0:x.recovered)||0,_=(null===e||void 0===e||null===(Z=e[a])||void 0===Z?void 0:Z.confirmed)||0;y=z/_*100}else if("caseGrowth"===n){var Y,q,V=(null===e||void 0===e||null===(Y=e.delta7)||void 0===Y?void 0:Y.confirmed)||0,$=(null===e||void 0===e||null===(q=e.delta21_14)||void 0===q?void 0:q.confirmed)||0;y="total"===a?(V-$)/$*100:0}else if("population"===n){var Q;y="total"===a?null===e||void 0===e||null===(Q=e.meta)||void 0===Q?void 0:Q.population:0}else{var X;y=null===e||void 0===e||null===(X=e[a])||void 0===X?void 0:X[n]}var ee=t.w[n];return(j=(null===ee||void 0===ee?void 0:ee.nonLinear)?1:j)*(y=(null===ee||void 0===ee?void 0:ee.canBeInfinite)?!isNaN(y)&&y||0:isFinite(y)&&y||0)||0},S=function(e,a,n){var o,i,r=(null===(o=t.w[a])||void 0===o||null===(i=o.tableConfig)||void 0===i?void 0:i.type)||"total";return{total:w(e,r,a,n),delta:"total"===r?w(e,"delta",a,n):0}},E=function(e){return fetch(e).then((function(e){return e.json()}))};function k(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){e().then(t).catch((function(i){setTimeout((function(){1!==a?k(e,a-1,n).then(t,o):o(i)}),n)}))}))}},7:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"d",(function(){return i})),n.d(a,"j",(function(){return r})),n.d(a,"w",(function(){return l})),n.d(a,"r",(function(){return c})),n.d(a,"i",(function(){return d})),n.d(a,"x",(function(){return u})),n.d(a,"y",(function(){return s})),n.d(a,"m",(function(){return f})),n.d(a,"C",(function(){return v})),n.d(a,"b",(function(){return p})),n.d(a,"F",(function(){return h})),n.d(a,"e",(function(){return m})),n.d(a,"c",(function(){return g})),n.d(a,"q",(function(){return T})),n.d(a,"z",(function(){return y})),n.d(a,"D",(function(){return j})),n.d(a,"E",(function(){return b})),n.d(a,"f",(function(){return A})),n.d(a,"h",(function(){return D})),n.d(a,"g",(function(){return w})),n.d(a,"s",(function(){return S})),n.d(a,"A",(function(){return E})),n.d(a,"B",(function(){return k})),n.d(a,"p",(function(){return C})),n.d(a,"o",(function(){return F})),n.d(a,"n",(function(){return N})),n.d(a,"l",(function(){return L})),n.d(a,"k",(function(){return P})),n.d(a,"v",(function(){return R})),n.d(a,"t",(function(){return B})),n.d(a,"u",(function(){return K}));var t=n(39),o="https://api.covid19india.org",i="".concat(o,"/v4/min"),r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},l={confirmed:{displayName:"confirmed",color:"#ff073a",format:"long",tableConfig:{showDelta:!0}},active:{displayName:"active",color:"#007bff",format:"long"},recovered:{displayName:"recovered",color:"#28a745",format:"long",tableConfig:{showDelta:!0}},deceased:{displayName:"deceased",color:"#6c757d",format:"long",tableConfig:{showDelta:!0}},other:{displayName:"other",format:"long",tableConfig:{showDelta:!0,notes:"Migrated cases or non-COVID deaths"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",hideZero:!0,category:"tested",tableConfig:{showDelta:!0}},vaccinated1:{displayName:"vaccinated (at least one dose)",color:"#fb5581",format:"short",hideZero:!0,category:"vaccinated",tableConfig:{showDelta:!0}},vaccinated2:{displayName:"fully vaccinated",color:"#fb5581",format:"short",hideZero:!0,category:"vaccinated",tableConfig:{showDelta:!0}},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",hideZero:!0,category:"vaccinated",tableConfig:{showDelta:!0}},tpr:{displayName:"test positivity ratio",format:"%",color:"#fd7e14",nonLinear:!0,hideZero:!0,category:"tested",tableConfig:{type:"delta7",notes:"Calculated over last 7 days"}},cfr:{displayName:"case fatality ratio",format:"%",color:"#6c757d",nonLinear:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0}},activeRatio:{displayName:"active ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0}},caseGrowth:{displayName:"Case Growth",format:"%",nonLinear:!0,canBeInfinite:!0,tableConfig:{notes:"Percentage growth of cases last week compared to the week a fortnight ago"}},population:{displayName:"population",format:"short",hideZero:!0}},c=["confirmed","active","recovered","deceased"],d=[].concat(c),u=[].concat(c,["tested","vaccinated"]),s=Object.keys(l).filter((function(e){var a,n;return!(null===(a=l[e])||void 0===a||null===(n=a.tableConfig)||void 0===n?void 0:n.hide)})),f=[].concat(c),v=[].concat(c,["tested","vaccinated","tpr"]),p=["confirmed"],h=5,m=40,g=300,T=20,y=7,j="UN",b="Unknown",A="2020-04-26",D=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,w="T00:00:00+05:30",S={clamp:!0,precision:1},E={total:"Cumulative",delta:"Daily"},k=[null,90,30],C={CHOROPLETH:0,BUBBLES:1},F={STATES:0,DISTRICTS:1},N={COUNTRY:0,STATE:1},O="/mini_maps",L={AP:{geoDataFile:"".concat(O,"/andhrapradesh.json"),mapType:N.STATE},AR:{geoDataFile:"".concat(O,"/arunachalpradesh.json"),mapType:N.STATE},AS:{geoDataFile:"".concat(O,"/assam.json"),mapType:N.STATE},BR:{geoDataFile:"".concat(O,"/bihar.json"),mapType:N.STATE},CT:{geoDataFile:"".concat(O,"/chhattisgarh.json"),mapType:N.STATE},GA:{geoDataFile:"".concat(O,"/goa.json"),mapType:N.STATE},GJ:{geoDataFile:"".concat(O,"/gujarat.json"),mapType:N.STATE},HR:{geoDataFile:"".concat(O,"/haryana.json"),mapType:N.STATE},HP:{geoDataFile:"".concat(O,"/himachalpradesh.json"),mapType:N.STATE},JK:{geoDataFile:"".concat(O,"/jammukashmir.json"),mapType:N.STATE},JH:{geoDataFile:"".concat(O,"/jharkhand.json"),mapType:N.STATE},KA:{geoDataFile:"".concat(O,"/karnataka.json"),mapType:N.STATE},KL:{geoDataFile:"".concat(O,"/kerala.json"),mapType:N.STATE},MP:{geoDataFile:"".concat(O,"/madhyapradesh.json"),mapType:N.STATE},MH:{geoDataFile:"".concat(O,"/maharashtra.json"),mapType:N.STATE},MN:{geoDataFile:"".concat(O,"/manipur.json"),mapType:N.STATE},ML:{geoDataFile:"".concat(O,"/meghalaya.json"),mapType:N.STATE},MZ:{geoDataFile:"".concat(O,"/mizoram.json"),mapType:N.STATE},NL:{geoDataFile:"".concat(O,"/nagaland.json"),mapType:N.STATE},OR:{geoDataFile:"".concat(O,"/odisha.json"),mapType:N.STATE},PB:{geoDataFile:"".concat(O,"/punjab.json"),mapType:N.STATE},RJ:{geoDataFile:"".concat(O,"/rajasthan.json"),mapType:N.STATE},SK:{geoDataFile:"".concat(O,"/sikkim.json"),mapType:N.STATE},TN:{geoDataFile:"".concat(O,"/tamilnadu.json"),mapType:N.STATE},TG:{geoDataFile:"".concat(O,"/telangana.json"),mapType:N.STATE},TR:{geoDataFile:"".concat(O,"/tripura.json"),mapType:N.STATE},UT:{geoDataFile:"".concat(O,"/uttarakhand.json"),mapType:N.STATE},UP:{geoDataFile:"".concat(O,"/uttarpradesh.json"),mapType:N.STATE},WB:{geoDataFile:"".concat(O,"/westbengal.json"),mapType:N.STATE},AN:{geoDataFile:"".concat(O,"/andamannicobarislands.json"),mapType:N.STATE},CH:{geoDataFile:"".concat(O,"/chandigarh.json"),mapType:N.STATE},DN:{geoDataFile:"".concat(O,"/dnh-and-dd.json"),mapType:N.STATE},DL:{geoDataFile:"".concat(O,"/delhi.json"),mapType:N.STATE},LA:{geoDataFile:"".concat(O,"/ladakh.json"),mapType:N.STATE},LD:{geoDataFile:"".concat(O,"/lakshadweep.json"),mapType:N.STATE},PY:{geoDataFile:"".concat(O,"/puducherry.json"),mapType:N.STATE},TT:{geoDataFile:"".concat(O,"/india.json"),mapType:N.COUNTRY}},P=50,R=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},j,"Unassigned"),M=[],U={};Object.keys(R).map((function(e,a){return U[R[e]]=e,M.push({code:e,name:R[e]}),null}));var B=U,K=M},72:function(e,a,n){"use strict";n.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(7),r=n(22),l=n(24),c=n(56),d=n(57),u=n(80);l.a.use(d.a).use(c.a).use(u.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});l.a;var s=n(2),f=n(44),v=n(38),p=n(18),h=Object(s.lazy)((function(){return Object(r.l)((function(){return Promise.all([n.e(14),n.e(23)]).then(n.bind(null,288))}))})),m=document.getElementById("root"),g=function(){return Object(f.render)(Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(v.a,{children:Object(p.jsx)(s.StrictMode,{children:Object(p.jsx)(h,{})})})}),m)};window.requestIdleCallback&&window.IntersectionObserver?g():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",g),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}),3e3)}))}}()}},[[72,12,13]]]);
//# sourceMappingURL=main.e4e70320.chunk.js.map