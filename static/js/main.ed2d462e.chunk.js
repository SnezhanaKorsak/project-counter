(this["webpackJsonpproject-counter"]=this["webpackJsonpproject-counter"]||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),u=a.n(r),l=(a(18),a(11)),s=a(9),o=a.n(s),i=a(1),b=function(e){return Object(i.jsxs)("div",{children:[e.labelText,Object(i.jsx)("input",{className:e.className,type:"number",name:e.inputName,value:e.value,onChange:e.callback}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})},j=function(e){var t=e.error?o.a.error:o.a.input;return Object(i.jsxs)("div",{className:"settings",children:[Object(i.jsx)(b,{labelText:"start value:",className:t,inputName:"startValue",value:e.startValue,callback:e.changeValue}),Object(i.jsx)(b,{labelText:"max value:",className:t,inputName:"maxValue",value:e.maxValue,callback:e.changeValue})]})},d=a(6),O=a(4),V=a.n(O),m=function(e){var t=e.counterValue,a=e.maxValue,c=Object(d.a)(e,["counterValue","maxValue"]),n=c.error?"".concat(V.a.message," ").concat(V.a.error):V.a.message,r=t>=a?"".concat(V.a.counterValue," ").concat(V.a.error):V.a.counterValue;return Object(i.jsxs)("div",{className:"counter",children:[c.settingsMode&&Object(i.jsx)("div",{className:n,children:c.error?"Enter correct values":"Enter values and press 'set'"}),Object(i.jsx)("div",{className:r,children:!c.error&&t})]})},x=a(7),v=a.n(x),g=function(e){var t=e.title,a=e.callback,c=Object(d.a)(e,["title","callback"]),n=c.disabled?"".concat(v.a.button," ").concat(v.a.disabled):v.a.button;return Object(i.jsx)("button",{className:n,onClick:a,disabled:c.disabled,children:t})},f=(a(20),a(3)),_=a(2),p={startValue:0,maxValue:5,counterValue:0};var h,E=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.counter.startValue})),a=Object(f.c)((function(e){return e.counter.maxValue})),n=Object(f.c)((function(e){return e.counter.counterValue})),r=Object(c.useState)(!1),u=Object(l.a)(r,2),s=u[0],o=u[1],b=Object(c.useState)(!0),d=Object(l.a)(b,2),O=d[0],V=d[1],x=!O||s,v=n===a||s||O,_=a===t||s||O;Object(c.useEffect)((function(){o(t>=a||t<0)}),[t,a]);var p=function(){s||(e({type:"SET-COUNTER-VALUE",value:t}),V(!1))};return Object(i.jsxs)("div",{className:"cover",children:[Object(i.jsxs)("div",{className:"settingsBlock",children:[Object(i.jsx)(j,{startValue:t,maxValue:a,changeValue:function(t){var a=Number(t.currentTarget.value);switch(V(!0),t.currentTarget.name){case"startValue":e({type:"SET-START-VALUE",value:a});break;case"maxValue":e(function(e){return{type:"SET-MAX-VALUE",value:e}}(a))}},error:s}),Object(i.jsx)(g,{title:"set",callback:p,disabled:x})]}),Object(i.jsxs)("div",{className:"counterBlock",children:[Object(i.jsx)(m,{counterValue:n,maxValue:a,error:s,settingsMode:O}),Object(i.jsx)(g,{title:"inc",callback:function(){e({type:"INCREASE-VALUE"})},disabled:v}),Object(i.jsx)(g,{title:"reset",callback:p,disabled:_})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,u=t.getTTFB;a(e),c(e),n(e),r(e),u(e)}))},N=a(12),S=Object(N.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE-VALUE":return Object(_.a)(Object(_.a)({},e),{},{counterValue:e.counterValue+1});case"SET-COUNTER-VALUE":return Object(_.a)(Object(_.a)({},e),{},{counterValue:t.value});case"SET-START-VALUE":return Object(_.a)(Object(_.a)({},e),{},{startValue:t.value});case"SET-MAX-VALUE":return Object(_.a)(Object(_.a)({},e),{},{maxValue:t.value});default:return e}}}),T=localStorage.getItem("state");T&&(h=JSON.parse(T));var A=Object(N.b)(S,h);A.subscribe((function(){localStorage.setItem("state",JSON.stringify(A.getState()))})),u.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f.a,{store:A,children:Object(i.jsx)(E,{})})}),document.getElementById("root")),k()},4:function(e,t,a){e.exports={counterValue:"CounterBlock_counterValue__1WXFd",error:"CounterBlock_error__1diwO",message:"CounterBlock_message__1mCop",blink1:"CounterBlock_blink1__3nzab"}},7:function(e,t,a){e.exports={button:"Button_button__3sFsz",disabled:"Button_disabled__F4o3a"}},9:function(e,t,a){e.exports={button:"SettingsBlock_button__21Ggi",error:"SettingsBlock_error__3ieVv",input:"SettingsBlock_input__lWAHZ"}}},[[27,1,2]]]);
//# sourceMappingURL=main.ed2d462e.chunk.js.map