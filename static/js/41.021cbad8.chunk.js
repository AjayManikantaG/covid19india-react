(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[41],{299:function(t,e,r){"use strict";r.r(e);var n=r(82),i=r(105),a=r(110),c=r.n(a),s=r(151),o=r(7),l=r(22),u=r(213),d=r(300),f=r(140),p=r(278),b=r(261),j=r(284),m=r(254),v=r(138),O=r(212),h=r(137),g=r(256),x=r(2),k=r(294),y=r(106),w=r(18);var A=function(t){t.data;var e=t.statistic,r=t.mapViz,i=t.mapScale,a=Object(k.a)().t,c=Object(x.useRef)(null),s=Object(y.a)(),A=Object(n.a)(s,2),B=A[0],N=A[1],T=N.width,R=N.height;return Object(x.useEffect)((function(){if(T&&R){var t=Object(g.a)(c.current),a=o.w[e];if(r===o.p.BUBBLES){var s=t.transition().duration(o.c);t.select(".ramp").transition(s).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(s).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var x=i.domain(),k=Object(n.a)(x,2)[1],y=t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),w=[.1,.4,1].map((function(t){return t*k}));y.selectAll("circle").data(w).join("circle").attr("fill","none").attr("stroke","#ccc").transition(s).attr("cy",(function(t){return-i(t)})).attr("r",i);var A=i.copy().range([0,-2*i(k)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(s).call(Object(f.b)(A).tickSize(0).tickPadding(0).tickValues(w).tickFormat((function(t){return Object(l.e)(t,"long"===a.format?"short":a.format)}))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,i=t.tickSize,a=void 0===i?6:i,c=t.width,s=void 0===c?320:c,l=t.height,g=void 0===l?44+a:l,x=t.marginTop,k=void 0===x?18:x,y=t.marginRight,w=void 0===y?0:y,A=t.marginBottom,B=void 0===A?16+a:A,N=t.marginLeft,T=void 0===N?0:N,R=t.ticks,C=void 0===R?s/64:R,M=t.tickFormat,S=t.tickValues,L=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var _,U=e.transition().duration(o.c),F=function(t){t.selectAll(".tick line").attr("y1",k+B-g)};if(r.interpolate){var V=Math.min(r.domain().length,r.range().length);_=r.copy().rangeRound(Object(b.a)(Object(j.a)(T,s-w),V)),e.select(".ramp").attr("class","ramp").attr("x",T).attr("y",k).attr("width",s-T-w).attr("height",g-k-B).attr("preserveAspectRatio","none").attr("xlink:href",E(r.copy().domain(Object(b.a)(Object(j.a)(0,1),V))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(U).attr("opacity",0).remove(),_=Object.assign(r.copy().interpolator(Object(m.a)(T,s-w)),{range:function(){return[T,s-w]}}),e.select(".ramp").attr("class","ramp").attr("x",T).attr("y",k).attr("width",s-T-w).attr("height",g-k-B).attr("preserveAspectRatio","none").attr("xlink:href",E(r.interpolator()).toDataURL()).transition(U).attr("opacity",1),!_.ticks){if(void 0===S){var z=Math.round(C+1);S=Object(u.a)(z).map((function(t){return Object(d.a)(r.domain(),t/(z-1))}))}"function"!==typeof M&&(M=Object(p.a)(void 0===M?",f":M))}}else if(r.invertExtent){var H=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),D=void 0===M?function(t){return t}:"string"===typeof M?Object(p.a)(M):M;_=Object(v.a)().domain([-1,r.range().length-1]).rangeRound([T,s-w]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return _(e-1)})).attr("y",k).attr("width",(function(t,e){return _(e)-_(e-1)})).attr("height",g-k-B).attr("fill",(function(t){return t})),S=Object(u.a)(-1,H.length),M=function(t){return-1===t?D(1):t!==H.length-1?t===H.length-2?D(H[t]+"+",t):D(H[t],t):void 0}}else{if(e.select(".ramp").transition(U).attr("opacity",0).attr("xlink:href",null),L){var P=Object(v.a)().domain([0,L.reduce((function(t,e){return t+e}))]).rangeRound([0,s-T-w]),Y=L.map((function(t,e){return L.slice(0,e).reduce((function(t,e){return t+P(e)}),T)}));_=Object(h.a)().domain(r.domain()).range(Y),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",_).attr("width",(function(t,e){return P(L[e])}))})).attr("y",k).attr("height",g-k-B).attr("fill",r).transition(U).attr("x",_).attr("width",(function(t,e){return P(L[e])})).attr("opacity",1)}else _=Object(O.a)().domain(r.domain()).rangeRound([T,s-w]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",_).attr("y",k).attr("width",Math.max(0,_.bandwidth()-1)).attr("height",g-k-B).attr("fill",r);F=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(g-B,")")).transition(U).attr("class","axis").call(Object(f.a)(_).ticks(C,"string"===typeof M?M:void 0).tickFormat("function"===typeof M?M:void 0).tickSize(a).tickValues(S)).on("start",(function(){e.call(F).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",T).attr("y",k+B-g-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:i,width:T,height:R,ticks:5,tickFormat:function(t,e,n){if(r!==o.p.CHOROPLETH||Number.isInteger(t))return e===n.length-1?Object(l.e)(t,a.format)+"+":Object(l.e)(t,a.format)},marginLeft:2,marginRight:0})}))}}),[a,T,R,e,i,r]),Object(w.jsxs)("div",{className:"svg-parent maplegend",style:{height:o.k},ref:B,children:[Object(w.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:c,children:[Object(w.jsx)("image",{className:"ramp"}),Object(w.jsx)("g",{className:"bars"}),Object(w.jsx)("g",{className:"circles"}),Object(w.jsx)("g",{className:"circleAxis"}),Object(w.jsx)("g",{className:"axis",children:Object(w.jsx)("text",{className:"axistext"})})]}),Object(w.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function E(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var B=r(90),N=r(85),T=r.n(N),R=r(214),C=r(268),M=r(281),S=r(279),L=r(217),_=r(301),U=r(262),F=r(263),V=r(264),z=r(265),H=r(266),D=r(267),P=r(98),Y=r(5),q=r(104),I=r(225);e.default=function(t){var e,r,a=this,u=t.mapCode,d=t.isDistrictView,f=t.mapViz,p=t.data,b=(t.changeMap,t.regionHighlighted),j=t.setRegionHighlighted,m=t.statistic,v=t.getStatistic,O=(t.isCountryLoaded,Object(k.a)().t),h=Object(x.useRef)(null),y=o.l[u],E=Object(Y.g)(),N=Object(q.a)(y.geoDataFile,function(){var t=Object(s.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,W=Object(x.useMemo)((function(){return v(p[u])}),[p,u,v]),J=Object(x.useCallback)((function(t){return o.w[m].color+t}),[m]),G=Object(x.useMemo)((function(){return N?(d?y.mapType===o.n.COUNTRY&&f===o.p.BUBBLES?[].concat(Object(i.a)(Object(I.a)(N,N.objects.states).features),Object(i.a)(Object(I.a)(N,N.objects.districts).features)):Object(I.a)(N,N.objects.districts).features:Object(I.a)(N,N.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(u,"-").concat(r).concat(e?"-"+e:""),n})):null}),[N,u,d,f,y]),K=Object(x.useMemo)((function(){return N&&d?Object(I.a)(N,N.objects.districts).features.reduce((function(t,e){var r=o.t[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[N,d]),Q=Object(x.useMemo)((function(){var t=Object.keys(p).filter((function(t){return"TT"!==t&&Object.keys(o.l).includes(t)}));if(d){var e=t.reduce((function(t,e){var r,n=Object.keys((null===(r=p[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===K||void 0===K?void 0:K[e])||new Set).has(t)||f===o.p.BUBBLES&&t===o.E}));return t.push.apply(t,Object(i.a)(n.map((function(t){return v(p[e].districts[t])})))),t}),[]);return Object(R.a)(e)}return Object(R.a)(t,(function(t){return v(p[t])}))}),[p,d,v,f,K]),X=Object(n.a)(Q,2),Z=X[0],$=X[1],tt=Object(x.useMemo)((function(){return f===o.p.BUBBLES?Object(L.b)([Math.min(0,Z||0),Math.max(1,$||0)],[0,40]).clamp(!0).nice(3):Object(_.a)([Math.min(0,Z||0),Math.max(1,$||0)],function(t){switch(t){case"confirmed":return function(t){return Object(U.a)(.85*t)};case"active":return function(t){return Object(F.a)(.85*t)};case"recovered":return function(t){return Object(V.a)(.85*t)};case"deceased":return function(t){return Object(z.a)(.85*t)};case"tested":return function(t){return Object(H.a)(.85*t)};default:return function(t){return Object(D.a)(.85*t)}}}(m)).clamp(!0)}),[f,m,Z,$]),et=Object(x.useCallback)((function(t){var e,r,n=o.t[t.properties.st_nm],i=t.properties.district,a=p[n],c=null===a||void 0===a||null===(e=a.districts)||void 0===e?void 0:e[i];return 0===(r=v(i?c:a))?"#ffffff00":tt(r)}),[p,tt,v]),rt=Object(x.useCallback)((function(t){t.select("title").text((function(t){var e;if(f===o.p.BUBBLES&&!(null===(e=o.w[m])||void 0===e?void 0:e.nonLinear)){var r,n,i=t.properties.st_nm,a=o.t[i],c=t.properties.district,s=p[a],u=null===s||void 0===s||null===(r=s.districts)||void 0===r?void 0:r[c];return n=v(c?u:s),"".concat(Object(l.e)(n/(W||.001)*100,"%")," from ").concat(Object(l.m)(c||i))}}))}),[f,p,v,W,m]),nt=Object(x.useRef)(null);Object(x.useEffect)((function(){Object(g.a)(h.current).attr("pointer-events","auto").on("click",(function(){nt.current=null,j({stateCode:u,districtName:null})}))}),[u,j]);var it=Object(x.useMemo)((function(){return N?Object(M.a)(Object(S.a)()):null}),[N]);return Object(x.useEffect)((function(){if(N){var t=Object(g.a)(h.current),e=Object(P.b)().duration(o.c);t.select(".regions").selectAll("path").data(f!==o.p.BUBBLES?G:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){nt.current||j({stateCode:o.t[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,j({stateCode:o.t[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=o.t[r.properties.st_nm];!nt.current&&y.mapType!==o.n.STATE&&(null===(n=p[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),E.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",et).attr("stroke",J.bind(a,""))}))}}),[f,p,G,et,N,E,y.mapType,it,j,J]),Object(x.useEffect)((function(){if(G){var t=Object(g.a)(h.current),e=Object(P.b)().duration(o.c),r=[];f===o.p.BUBBLES&&(r=G.map((function(t){var e=o.t[t.properties.st_nm],r=t.properties.district,n=p[e];if(d){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=v(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[o.E])}else t.value=v(n);return t})).sort((function(t,e){return e.value-e.value})));var n=t.select(".circles").selectAll("circle").data(r,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){nt.current||j({stateCode:o.t[e.properties.st_nm],districtName:d?e.properties.district||o.E:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,j({stateCode:o.t[e.properties.st_nm],districtName:d?e.properties.district||o.E:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||y.mapType===o.n.STATE||E.push("/state/".concat(o.t[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",o.w[m].color+"70").attr("stroke",o.w[m].color+"70").attr("r",(function(t){return tt(t.value)}))}));window.requestIdleCallback((function(){rt(n)}))}}),[y.mapType,f,d,p,G,E,tt,it,j,rt,m,v]),Object(x.useEffect)((function(){if(N){var t=Object(g.a)(h.current),e=Object(P.b)().duration(o.c),r=[],n=[];y.mapType===o.n.COUNTRY&&((r=[Object(I.b)(N,N.objects.states)])[0].id="".concat(u,"-states")),(y.mapType===o.n.STATE||d&&f===o.p.CHOROPLETH)&&((n=[Object(I.b)(N,N.objects.districts)])[0].id="".concat(u,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(r,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",J.bind(a,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",J.bind(a,"40"))}}),[N,y,u,f,d,m,it,J]),Object(x.useEffect)((function(){var t=b.stateCode,e=o.v[t],r=b.districtName,n=Object(g.a)(h.current);f===o.p.BUBBLES?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var i;return e===n.properties.st_nm&&(!r&&t!==u||r===(null===(i=n.properties)||void 0===i?void 0:i.district)||!d||r===o.E&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var i,a=e===n.properties.st_nm&&(!r&&t!==u||r===(null===(i=n.properties)||void 0===i?void 0:i.district)||!d);a&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",a?1:0)}))}),[N,p,u,d,f,b.stateCode,b.districtName,m]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"svg-parent",children:[Object(w.jsxs)("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:h,children:[Object(w.jsx)("g",{className:"regions"}),Object(w.jsx)("g",{className:"state-borders"}),Object(w.jsx)("g",{className:"district-borders"}),Object(w.jsx)("g",{className:"circles"})]}),y.mapType===o.n.STATE&&!!v(null===(e=p[u])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[o.E])&&Object(w.jsxs)("div",{className:T()("disclaimer","is-".concat(m)),children:[Object(w.jsx)(B.a,{}),Object(w.jsx)("span",{children:O("District-wise data not available in state bulletin")})]})]}),tt&&Object(w.jsx)(A,{data:p,statistic:m,mapViz:f,mapScale:tt}),Object(w.jsx)("svg",{style:{position:"absolute",height:0},children:Object(w.jsx)("defs",{children:Object(w.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(w.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=41.021cbad8.chunk.js.map