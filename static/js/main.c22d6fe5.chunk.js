(this.webpackJsonptransletor=this.webpackJsonptransletor||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(22),s=n.n(a),i=(n(73),n(40)),o=n(13),j=n(26),l=n(27),d=n(34),b=n(33),u=(n(74),n(2)),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"Translator"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{className:"link",to:"/",children:"TRANSLATOR"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{className:"link",to:"/download",children:"UPLOAD BASE"})})]})})]})}}]),n}(c.Component),h=O,f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{}),this.props.children]})}}]),n}(c.Component),x=f,v=n(9),p=n(32),m=(n(81),n(121)),w=n(122);var N=Object(p.b)((function(e){return{words:e.todo}}))((function(e){var t=Object(c.useState)(),n=Object(v.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),i=Object(v.a)(s,2),o=i[0],j=i[1],l=Object(c.useState)(),d=Object(v.a)(l,2),b=d[0],O=d[1],h=Object(c.useState)(),f=Object(v.a)(h,2),x=f[0],p=f[1],N=Object(c.useState)(),y=Object(v.a)(N,2),S=(y[0],y[1]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"find",children:Object(u.jsx)(m.a,{id:"filled-basic",label:"Write words for translate",variant:"filled",className:"search",color:"success",onChange:function(e){a(e.target.value)},value:r})}),Object(u.jsx)(w.a,{variant:"contained",onClick:function(){var t=r.toLowerCase(),n=e.words,c=n.find((function(e){return String(e.en).toLowerCase()===t})),s=n.find((function(e){return String(e.ua).toLowerCase()===t}));void 0===s&&void 0===c?(S(!1),O("Not found"),p(""),j(t),a("")):void 0!==c?(S(!0),O(c.ua),p(c.ua_num),j(t),a("")):void 0!==s&&(S(!0),O(s.en),p(s.en_num),j(t),a(""))},className:"search_but",color:"success",children:"Search"}),Object(u.jsx)("div",{className:"translate",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f"}),Object(u.jsx)("th",{children:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434"}),Object(u.jsx)("th",{children:"\u0427\u0430\u0441\u0442\u043e\u0442\u043d\u0456\u0441\u0442\u044c"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:o}),Object(u.jsx)("td",{children:b}),Object(u.jsx)("td",{children:x})]})]})})]})}));var y=function(){return Object(u.jsx)("div",{className:"postBlock",children:Object(u.jsx)(N,{})})},S=(n(83),n(57)),_="ADD_ITEM_WORDS",g=n(5),k=(n(86),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).fileHandler=function(t){var n=t.target.files[0];Object(S.ExcelRenderer)(n,(function(t,n){t?console.log(t):n.rows.forEach((function(t){e.props.dispatch({type:_,en:t[0],en_num:t[1],ua:t[2],ua_num:t[3]})}))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=Object(g.a)("input")({display:"none"});return console.log(this.props.words),Object(u.jsxs)("div",{className:"base_block",children:[Object(u.jsx)("h1",{children:"You can download your base with words for translate"}),Object(u.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(u.jsx)(e,{id:"contained-button-file",multiple:!0,type:"file",onChange:this.fileHandler.bind(this)}),Object(u.jsx)(w.a,{variant:"contained",component:"span",className:"but_load",color:"success",children:"Upload"})]})]})}}]),n}(c.Component));var C=Object(p.b)((function(e){return{words:e.todo}}))(k);var A=function(){return Object(u.jsx)("div",{className:"postBlock",children:Object(u.jsx)(C,{})})};var D=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.a,{children:Object(u.jsx)(x,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/download",element:Object(u.jsx)(A,{})}),Object(u.jsx)(o.a,{path:"/translator/",element:Object(u.jsx)(y,{})})]})})})})},E=n(43),L=n(16),B=[],R=Object(E.a)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type===_?[].concat(Object(L.a)(e),[{en:t.en,en_num:t.en_num,ua:t.ua,ua_num:t.ua_num}]):e}}),T=Object(E.b)(R);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p.a,{store:T,children:Object(u.jsx)(D,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.c22d6fe5.chunk.js.map