(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[76],{2535:function(e,t,a){"use strict";a.r(t);var s=a(14),o=a(25),r=a(20),n=a(21),i=a(0),l=a.n(i),c=a(70),p=a(876),m=a(849),d=a(899),h=a.n(d),u={chart:{width:"100%",type:"pie"},labels:["Team A","Team B","Team C","Team D","Team E"],series:[44,55,13,43,22],legend:{position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:300},legend:{position:"bottom",offsetY:40}}}]},b={chart:{type:"donut",width:"100%"},series:[44,55,41,17,15],legend:{position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:310},legend:{position:"bottom"}}}]},y={chart:{width:"100%",type:"pie"},series:[25,15,44,55,41,17],labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],theme:{monochrome:{enabled:!0}},legend:{position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:310},legend:{position:"bottom"}}}]},g={chart:{width:"100%",type:"donut"},dataLabels:{enabled:!1},series:[44,55,41,17,15],fill:{type:"gradient"},legend:{formatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex]},position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:310},legend:{position:"bottom"}}}]},f={chart:{width:"100%",type:"donut",dropShadow:{enabled:!0,color:"#111",top:-1,left:3,blur:3,opacity:.2}},stroke:{width:0},series:[44,55,41,17,15],labels:["Comedy","Action","SciFi","Drama","Horror"],dataLabels:{dropShadow:{blur:3,opacity:.8}},fill:{type:"pattern",opacity:1,pattern:{enabled:!0,style:["verticalLines","squares","horizontalLines","circles","slantedLines"]}},states:{hover:{enabled:!1}},theme:{palette:"palette2"},legend:{position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:310},legend:{position:"bottom"}}}]},v={chart:{width:"100%",type:"pie"},colors:["#93C3EE","#E5C6A0","#669DB5","#94A74A"],series:[44,33,54,45],fill:{type:"image",opacity:.85,image:{src:["../../assets/images/products/headphone-1.jpg","../../assets/images/products/iphone-1.jpg","../../assets/images/products/speaker-2.jpg","../../assets/images/products/watch-1.jpg"],width:25,imagedHeight:25}},stroke:{width:4},dataLabels:{enabled:!1},legend:{position:"bottom"},responsive:[{breakpoint:480,options:{chart:{width:310},legend:{position:"bottom"}}}]},E=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.a,{routeSegments:[{name:"Charts",path:"/charts"},{name:"Apex",path:"/apex"},{name:"Doughnut Chart"}]}),l.a.createElement(p.a,null,l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Simple Pie"},l.a.createElement(h.a,{options:u,series:u.series,type:u.chart.type}))),l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Simple Donut"},l.a.createElement(h.a,{options:b,series:b.series,type:b.chart.type}))),l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Monochrome Pie(Number of leads)"},l.a.createElement(h.a,{options:y,series:y.series,type:y.chart.type}))),l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Gradient Donut"},l.a.createElement(h.a,{options:g,series:g.series,type:g.chart.type}))),l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Donut with Pattern(Favourite Movie Type)"},l.a.createElement(h.a,{options:f,series:f.series,type:f.chart.type}))),l.a.createElement(m.a,{lg:4,md:4,sm:6,xs:12,className:"mb-4"},l.a.createElement(c.h,{className:"h-100",title:"Pie with Image"},l.a.createElement(h.a,{options:v,series:v.series,type:v.chart.type})))))}}]),a}(i.Component);t.default=E},849:function(e,t,a){"use strict";var s=a(4),o=a(10),r=a(6),n=a.n(r),i=a(0),l=a.n(i),c=a(52),p=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,m=void 0===i?"div":i,d=Object(o.a)(e,["bsPrefix","className","as"]),h=Object(c.b)(a,"col"),u=[],b=[];return p.forEach((function(e){var t,a,s,o=d[e];if(delete d[e],null!=o&&"object"===typeof o){var r=o.span;t=void 0===r||r,a=o.offset,s=o.order}else t=o;var n="xs"!==e?"-"+e:"";null!=t&&u.push(!0===t?""+h+n:""+h+n+"-"+t),null!=s&&b.push("order"+n+"-"+s),null!=a&&b.push("offset"+n+"-"+a)})),u.length||u.push(h),l.a.createElement(m,Object(s.a)({},d,{ref:t,className:n.a.apply(void 0,[r].concat(u,b))}))}));m.displayName="Col",t.a=m},876:function(e,t,a){"use strict";var s=a(4),o=a(10),r=a(6),n=a.n(r),i=a(0),l=a.n(i),c=a(52),p=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,m=e.as,d=void 0===m?"div":m,h=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(c.b)(a,"row"),b=u+"-cols",y=[];return p.forEach((function(e){var t,a=h[e];delete h[e];var s="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+b+s+"-"+t)})),l.a.createElement(d,Object(s.a)({ref:t},h,{className:n.a.apply(void 0,[r,u,i&&"no-gutters"].concat(y))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m}}]);
//# sourceMappingURL=76.39752f6e.chunk.js.map