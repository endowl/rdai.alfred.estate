(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[129],{2524:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a(25),o=a(20),i=a(21),r=a(0),s=a.n(r),c=a(70),u=a(938);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,a){return t&&h(e.prototype,t),a&&h(e,a),e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){f(e,t,a[t])}))}return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?S(e):t}var C={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},M={empty:d({},C,{backgroundColor:"#ccc"}),full:d({},C,{backgroundColor:"black"}),placeholder:d({},C,{backgroundColor:"red"})},O=function(e){return s.a.isValidElement(e)?e:"object"===p(e)&&null!==e?s.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?s.a.createElement("span",{className:e}):void 0},R=function(e){function t(){return m(this,t),k(this,g(t).apply(this,arguments))}return b(t,e),y(t,[{key:"render",value:function(){var e,t=this.props,a=t.index,n=t.inactiveIcon,l=t.activeIcon,o=t.percent,i=t.direction,r=t.readonly,c=t.onClick,u=t.onMouseMove,p=O(n),m=o<100?{}:{visibility:"hidden"},h=O(l),y=(f(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===i?"right":"left",0),f(e,"width","".concat(o,"%")),e),v={cursor:r?"inherit":"pointer",display:"inline-block",position:"relative"};function d(e){u&&u(a,e)}function b(e){c&&(e.preventDefault(),c(a,e))}return s.a.createElement("span",{style:v,onClick:b,onMouseMove:d,onTouchMove:d,onTouchEnd:b},s.a.createElement("span",{style:m},p),s.a.createElement("span",{style:y},h))}}]),t}(s.a.PureComponent),w=function(e){function t(e){var a;return m(this,t),(a=k(this,g(t).call(this,e))).state={displayValue:a.props.value,interacting:!1},a.onMouseLeave=a.onMouseLeave.bind(S(S(a))),a.symbolMouseMove=a.symbolMouseMove.bind(S(S(a))),a.symbolClick=a.symbolClick.bind(S(S(a))),a}return b(t,e),y(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(a){return{displayValue:t?e.value:a.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.props.onClick(a,t)}},{key:"symbolMouseMove",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:a})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var a=this.calculateHoverPercentage(t),n=Math.ceil(a%1*this.props.fractions)/this.props.fractions,l=Math.pow(10,3),o=e+(Math.floor(a)+Math.floor(n*l)/l);return o>0?o>this.props.totalSymbols?this.props.totalSymbols:o:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,a=e.target.getBoundingClientRect(),n="rtl"===this.props.direction?a.right-t:t-a.left;return n<0?0:n/a.width}},{key:"render",value:function(){var e,t=this.props,a=t.readonly,n=t.quiet,l=t.totalSymbols,o=t.value,i=t.placeholderValue,r=t.direction,c=t.emptySymbol,u=t.fullSymbol,p=t.placeholderSymbol,m=t.className,h=t.id,y=t.style,f=t.tabIndex,b=this.state,g=b.displayValue,E=b.interacting,S=[],k=[].concat(c),C=[].concat(u),M=[].concat(p),O=0!==i&&0===o&&!E;e=O?i:n?o:g;for(var w=Math.floor(e),V=0;V<l;V++){var j=void 0;j=V-w<0?100:V-w===0?100*(e-V):0,S.push(s.a.createElement(R,v({key:V,index:V,readonly:a,inactiveIcon:k[V%k.length],activeIcon:O?M[V%C.length]:C[V%C.length],percent:j,direction:r},!a&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return s.a.createElement("span",v({id:h,style:d({},y,{display:"inline-block",direction:r}),className:m,tabIndex:f,"aria-label":this.props["aria-label"]},!a&&{onMouseLeave:this.onMouseLeave}),S)}}]),t}(s.a.PureComponent);function V(){}V._name="react_rating_noop";var j=function(e){function t(e){var a;return m(this,t),(a=k(this,g(t).call(this,e))).state={value:e.initialRating},a.handleClick=a.handleClick.bind(S(S(a))),a.handleHover=a.handleHover.bind(S(S(a))),a}return b(t,e),y(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var a=this,n=this.translateDisplayValueToValue(e);this.props.onClick(n),this.state.value!==n&&this.setState({value:n},(function(){return a.props.onChange(a.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.emptySymbol,n=e.fullSymbol,l=e.placeholderSymbol,o=e.readonly,i=e.quiet,r=e.fractions,c=e.direction,u=e.start,p=e.stop,m=e.id,h=e.className,y=e.style,f=e.tabIndex;return s.a.createElement(w,{id:m,style:y,className:h,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,a){return Math.floor((t-e)/a)}(u,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:i,fractions:r,direction:c,emptySymbol:a,fullSymbol:n,placeholderSymbol:l,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(s.a.PureComponent);j.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:V,onClick:V,onChange:V,emptySymbol:M.empty,fullSymbol:M.full,placeholderSymbol:M.placeholder};var N=j,P=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={rate:3},e.handleRatingChange=function(t){e.setState({rate:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.rate;return s.a.createElement("div",null,s.a.createElement(c.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Rating"}]}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(c.h,{title:"Star Rating"},s.a.createElement(N,{initialRating:e,emptySymbol:s.a.createElement(u.r,{size:22}),fullSymbol:s.a.createElement(u.q,{className:"text-warning",size:22}),onChange:this.handleRatingChange}),s.a.createElement("div",{className:"mt-3"},"Rate: ",e))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(c.h,{title:"Heart Rating"},s.a.createElement(N,{initialRating:e,start:0,stop:7,emptySymbol:s.a.createElement(u.j,{size:22}),fullSymbol:s.a.createElement(u.i,{className:"text-primary",size:22}),onChange:this.handleRatingChange}),s.a.createElement("div",{className:"mt-3"},"Rate: ",e))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(c.h,{title:"Rating"},s.a.createElement(N,{initialRating:e,emptySymbol:s.a.createElement(u.r,{size:16}),fullSymbol:s.a.createElement(u.q,{className:"text-primary",size:16})}),s.a.createElement("br",null),s.a.createElement(N,{initialRating:e,emptySymbol:s.a.createElement(u.r,{size:22}),fullSymbol:s.a.createElement(u.q,{className:"text-warning",size:22})}),s.a.createElement("br",null),s.a.createElement(N,{initialRating:e,emptySymbol:s.a.createElement(u.r,{size:28}),fullSymbol:s.a.createElement(u.q,{className:"text-success",size:28})}))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(c.h,{title:"Decimal Rating"},s.a.createElement(N,{initialRating:e,fractions:2,emptySymbol:s.a.createElement(u.j,{size:22}),fullSymbol:s.a.createElement(u.i,{className:"text-primary",size:22}),onChange:this.handleRatingChange}),s.a.createElement("div",{className:"mt-3"},"Rate: ",e)))))}}]),a}(r.Component);t.default=P}}]);
//# sourceMappingURL=129.ffa15891.chunk.js.map