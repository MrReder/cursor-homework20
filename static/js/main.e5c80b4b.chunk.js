(this.webpackJsonphomework20=this.webpackJsonphomework20||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(15),n(7)),o=n(8),u=n(3),l=n(10),j=n(9),b=n(2),h=n(0),d=function(t){var e=Object(c.useState)(1),n=Object(b.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(30),i=Object(b.a)(r,2),o=i[0],u=i[1];return Object(c.useEffect)((function(){var e=setInterval((function(){t.restart?(u(30),s(1)):t.start&&(o>0?u(o-1):0===o&&clearInterval(e)),0===o&&(0===a?clearInterval(e):(s(a-1),u(59)))}),1e3);return function(){clearInterval(e)}})),Object(h.jsx)("div",{children:0===a&&0===o?Object(h.jsx)("h1",{children:"00:00"}):Object(h.jsxs)("h1",{children:["0",a,":",o<10?"0".concat(o):o]})})},O=function(){var t=Object(c.useState)(12),e=Object(b.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),r=Object(b.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var t=setInterval((function(){i&&(n>0?a((function(t){return t-1})):0===n&&a(12))}),1e3);return function(){clearInterval(t)}}),[i,n]),Object(h.jsxs)("div",{className:"timer2-wrapper",children:[Object(h.jsx)("h1",{children:n}),Object(h.jsxs)("div",{className:"buttons-wrapper",children:[i?Object(h.jsx)("button",{className:"btn",onClick:function(){return o(!1)},children:"Pause timer"}):Object(h.jsx)("button",{className:"btn",onClick:function(){return o(!0)},children:"Start timer"}),Object(h.jsx)("button",{className:"btn",onClick:function(){o(!1),a(12)},children:"Restart timer"})]})]})},f=(n(5),function(t){var e=t.time,n=t.autostart,a=t.onTick,s=t.step,r=t.onTimeEnd,i=t.onTimeStart,o=t.onTimePause,u=Object(c.useState)(e),l=Object(b.a)(u,2),j=l[0],d=l[1],O=Object(c.useState)(n),f=Object(b.a)(O,2),m=f[0],v=f[1];Object(c.useEffect)((function(){if(m){var t=window.setInterval((function(){return d((function(t){return t-1}))}),s);return a(j),-1===j&&(r(),d(e)),function(){return window.clearInterval(t)}}}),[m,j,e]);var x=function(t){if(t>60){var e=Math.floor(t/60),n=t-60*e;return n?n<10?"".concat(e,":0").concat(n):"".concat(e,":").concat(n):"".concat(e,":00")}return t};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"buttons-wrapper",children:Object(h.jsx)("h1",{children:x(j)})}),Object(h.jsx)("button",{style:{display:m||!j?"none":"block"},onClick:function(){v(!0),i(j,x)},className:"btn",children:"Play"}),Object(h.jsx)("button",{style:{display:m&&j?"block":"none"},onClick:function(){v(!1),o(j,x)},className:"btn",children:"Pause"}),Object(h.jsx)("button",{onClick:function(){d(e),v(!0)},className:"btn",children:"Restart"})]})})}),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).getStart=function(){c.setState({start:!0}),setTimeout((function(){c.setState({start:!1})}),1e3)},c.getPause=function(){c.setState({pause:!0}),setTimeout((function(){c.setState({pause:!1})}),1e3)},c.getRestart=function(){c.setState((function(t){return{restart:!t.restart}}))},c.handleTimeEnd=function(){console.log("\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043e\u0432!"),c.setState({time:c.state.time})},c.handleChangeTick=function(t){console.log(t)},c.handleTimeStart=function(t,e){console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e, \u0437\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f: ".concat(e(t),"c"))},c.handleTimePause=function(t,e){console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0443\u0437\u0456, \u0437\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f: ".concat(e(t),"\u0441"))},c.state={time:200,start:!0,pause:!0,restart:void 0},c.getStart=c.getStart.bind(Object(u.a)(c)),c.getPause=c.getPause.bind(Object(u.a)(c)),c.getRestart=c.getRestart.bind(Object(u.a)(c)),c}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.start,e=this.state.pause;return Object(h.jsxs)("div",{className:"timer-wrapper",children:[Object(h.jsx)(d,{start:this.state.start,restart:this.state.restart,pause:this.state.pause}),t?Object(h.jsxs)("button",{onClick:this.getStart,className:"btn",children:[t?"Pause":"Start"," timer"]}):Object(h.jsxs)("button",{onClick:this.getPause,className:"btn",children:[e?"Start":"Pause"," timer"]}),Object(h.jsx)("button",{onClick:this.getRestart,className:"btn",children:"Restart timer"}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{time:this.state.time,autostart:!1,step:300,onTick:this.handleChangeTick,onTimeEnd:this.handleTimeEnd,onTimeStart:this.handleTimeStart,onTimePause:this.handleTimePause})})]})}}]),n}(c.Component);var v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(m,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()},5:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.e5c80b4b.chunk.js.map