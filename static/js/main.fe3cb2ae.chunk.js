(this["webpackJsonphomework-20"]=this["webpackJsonphomework-20"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(5),s=n.n(a),i=(n(14),n(6)),u=n(7),j=n(3),o=n(9),b=n(8),l=n(2),O=n(0),h=function(t){var e=Object(r.useState)(1),n=Object(l.a)(e,2),c=n[0],a=n[1],s=Object(r.useState)(30),i=Object(l.a)(s,2),u=i[0],j=i[1];return Object(r.useEffect)((function(){var e=setInterval((function(){t.restart?(j(30),a(1)):t.start&&(u>0?j(u-1):0===u&&clearInterval(e)),0===u&&(0===c?clearInterval(e):(a(c-1),j(59)))}),1e3);return function(){clearInterval(e)}})),Object(O.jsx)("div",{children:0===c&&0===u?Object(O.jsx)("h1",{children:"00:00"}):Object(O.jsxs)("h1",{children:["0",c,":",u<10?"0".concat(u):u]})})},d=function(){var t=Object(r.useState)(12),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){var t=setInterval((function(){i&&(n>0?c((function(t){return t-1})):0===n&&c(12))}),1e3);return function(){clearInterval(t)}}),[i,n]),Object(O.jsxs)("div",{className:"timer2-wrapper",children:[Object(O.jsx)("h1",{children:n}),Object(O.jsxs)("div",{className:"buttons-wrapper",children:[i?Object(O.jsx)("button",{className:"btn",onClick:function(){return u(!1)},children:"Pause timer"}):Object(O.jsx)("button",{className:"btn",onClick:function(){return u(!0)},children:"Start timer"}),Object(O.jsx)("button",{className:"btn",onClick:function(){u(!1),c(12)},children:"Restart timer"})]})]})},f=(n(16),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).getStart=function(){r.setState({restart:!0}),setTimeout((function(){r.setState({restart:!1})}),1e3)},r.getRestart=function(){r.setState((function(t){return{restart:!t.restart}}))},r.state={start:!0,restart:void 0},r.getStart=r.getStart.bind(Object(j.a)(r)),r.getRestart=r.getRestart.bind(Object(j.a)(r)),r}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.start;return Object(O.jsxs)("div",{className:"timer-wrapper",children:[Object(O.jsx)(h,{start:this.state.start,restart:this.state.restart}),Object(O.jsxs)("button",{onClick:this.getStart,className:"btn",children:[t?"Pause":"Start"," timer"]}),Object(O.jsx)("button",{onClick:this.getRestart,className:"btn",children:"Restart timer"}),Object(O.jsx)("div",{children:Object(O.jsx)(d,{})})]})}}]),n}(r.Component));var v=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(f,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.fe3cb2ae.chunk.js.map