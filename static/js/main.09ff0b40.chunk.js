(this.webpackJsonpmyapplogin=this.webpackJsonpmyapplogin||[]).push([[0],{101:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(101),t(17)),i=(t(58),t(62)),m=t(75),u=t(156),s=t(157),d=t(162),p=t(158),f=t(153),g=t(161),b=t(63);function E(e){var a=e.columns,t=e.data,n=Object(b.useTable)({columns:a,data:t}),l=n.getTableProps,o=n.getTableBodyProps,c=n.headerGroups,i=n.rows,m=n.prepareRow;return r.a.createElement("table",l(),r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps([{className:e.className,style:e.style}]),e.render("Header"))})))}))),r.a.createElement("tbody",o(),i.map((function(e,a){return m(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps([{className:e.column.className,style:e.column.style}]),e.render("Cell"))})))}))))}var h=t(68),v=t(28);function y(){var e=Object(i.a)(["\n  padding: 1rem;\n\n  .Header {\n    background-color: lightgrey;\n    color: #31a3c7;\n  }\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return y=function(){return e},e}function O(e){var a=e.children,t=e.value,n=e.index,l=Object(m.a)(e,["children","value","index"]);return r.a.createElement(f.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(g.a,{p:3},a))}function S(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var j=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})),w=h.a.div(y());function x(e){var a=j(),t=Object(v.c)((function(e){return e})),n=r.a.useState(0),l=Object(c.a)(n,2),o=l[0],i=l[1],m=r.a.useState(e.futurearr),u=Object(c.a)(m,2),f=(u[0],u[1],function(e,a){i(a)});return""!=t?r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(d.a,{value:o,onChange:f,"aria-label":"simple tabs example"},r.a.createElement(p.a,Object.assign({label:"Upcoming Campaigns"},S(0))),r.a.createElement(p.a,Object.assign({label:"Live Campaigns"},S(1))),r.a.createElement(p.a,Object.assign({label:"Past Campaigns"},S(2))))),r.a.createElement(O,{value:o,index:0},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:t.futurearr}))),r.a.createElement(O,{value:o,index:1},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:t.Currentarr}))),r.a.createElement(O,{value:o,index:2},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:t.pastarr})))):r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(d.a,{value:o,onChange:f,"aria-label":"simple tabs example"},r.a.createElement(p.a,Object.assign({label:"Upcoming Campaigns"},S(0))),r.a.createElement(p.a,Object.assign({label:"Live Campaigns"},S(1))),r.a.createElement(p.a,Object.assign({label:"Past Campaigns"},S(2))))),r.a.createElement(O,{value:o,index:0},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:e.futurearr}))),r.a.createElement(O,{value:o,index:1},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:e.Currentarr}))),r.a.createElement(O,{value:o,index:2},r.a.createElement(w,null," ",r.a.createElement(E,{columns:e.columns,data:e.pastarr}))))}var C=t(159),M=t(74),k=t(14),H=t(50),$=t.n(H),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"52vh"}};$.a.setAppElement("#root");var N=Object(n.forwardRef)((function(e,a){var t,l=r.a.useState(!1),o=Object(c.a)(l,2),i=o[0],m=o[1],u=r.a.useState(""),s=Object(c.a)(u,2),d=s[0],p=s[1];function f(){m(!1)}return Object(n.useImperativeHandle)(a,(function(){return{openModal:function(e){p(e),m(!0)}}})),r.a.createElement("div",null,r.a.createElement($.a,{isOpen:i,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:f,style:P,contentLabel:"Example Modal"},r.a.createElement("h2",{ref:function(e){return t=e}},"PUBG"),function(){if(d)return r.a.createElement(C.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a,null,d.row.original.name),r.a.createElement(C.a,{className:"fontweigh"},d.row.original.region)),r.a.createElement("h2",null," ",d.row.original.price.name),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{lg:6},"1-Week  -  1 Month"),r.a.createElement(C.a,{lg:6},d.row.original.price.onemonth)),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{lg:6}," 6 Months"),r.a.createElement(C.a,{lg:6},d.row.original.price.sixmonth)),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{lg:6},"1 Year"),r.a.createElement(C.a,{lg:6},d.row.original.price.oneyear)))}(),r.a.createElement("button",{onClick:f,className:"modalbutton"},"close")))})),W=t(72),D=t.n(W),R=t(73),T=t.n(R),I=t(160),V=function(e){var a=Object(n.useState)(new Date),t=Object(c.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)(!1),m=Object(c.a)(i,2);m[0],m[1];return r.a.createElement(n.Fragment,null,r.a.createElement(I.a,{clearable:!0,value:l,onChange:function(a){return function(a){o(a),a.setHours(0,0,0,0);var t=e.datafull,n=e.row.row.original.name,r=a.getTime(),l=t.findIndex((function(e){return e.name===n}));l&&(t[l].createdOn=r,e.datehandle(t))}(a)},format:"dd/MM/yyyy"}))},U=Object(u.a)({container:{display:"flex",flexDirection:"column"}});var _=function(e){var a=e.fetchProduct,t=Object(v.c)((function(e){return e})),l=Object(v.b)();console.log(t);var o=[{name:"Test Whatsapp",region:"US",createdOn:159654276e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Whatsapp",report:"Some report link for Whatsapp",image_url:"Some image url of the campaign"},{name:"Super Jewels Quest",region:"CA, FR",createdOn:155654376e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Super Jewels Quest",report:"Some report link for Super Jewels Ques",image_url:"Some image url of the campaign"},{name:"Mole Slayer",region:"FR",createdOn:159954296e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Mole Slayer",report:"Some report link for Mole Slayer",image_url:"Some image url of the campaign"},{name:"Mancala Mix",region:"US",createdOn:159664276e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix",image_url:"Some image url of the campaign"},{name:" Slayer",region:"FR",createdOn:169654276e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Mole Slayer",report:"Some report link for Mole Slayer",image_url:"Some image url of the campaign"},{name:"Maaan Mix",region:"US",createdOn:179654276e4,price:{name:"Price",onemonth:"$100",sixmonth:"$100",oneyear:"$100"},csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix",image_url:"Some image url of the campaign"}],i=r.a.useState(o),m=Object(c.a)(i,2),u=m[0],s=m[1],d=[],p=[],f=[];u.filter((function(e){if(e){var a=new Date(e.createdOn).getTime(),t=(new Date).getTime();t>a?-1===d.findIndex((function(a){return a.name===e.name}))&&d.push(e):t<a?-1===p.findIndex((function(a){return a.name===e.name}))&&p.push(e):-1===f.findIndex((function(a){return a.name===e.name}))&&f.push(e)}}));var g=function(e){s(e),function(e){d=[],p=[],f=[],e.filter((function(e){if(e){var a=new Date(e.createdOn).getTime(),t=new Date;t.setHours(0,0,0,0);var n=t.getTime();if(n>a)-1===d.findIndex((function(a){return a.name===e.name}))&&d.push(e);else if(n<a){-1===p.findIndex((function(a){return a.name===e.name}))&&p.push(e)}else if(n===a){-1===f.findIndex((function(a){return a.name===e.name}))&&f.push(e)}}}))}(e),l({type:"Currentarr",payload:f}),l({type:"pastarr",payload:d}),l({type:"futurearr",payload:p})},b=Object(n.useState)(o),E=Object(c.a)(b,2),h=(E[0],E[1],Object(n.useState)({})),y=Object(c.a)(h,2),O=(y[0],y[1],Object(n.useRef)());Object(n.useEffect)((function(){l({type:"Currentarr",payload:f}),l({type:"pastarr",payload:d}),l({type:"futurearr",payload:p})}),[u]);var S=function(e){var a=new Date(e).toDateString(),t={},n=e-(new Date).getTime(),r=Math.floor(n/1e3/60/60/24);n-=1e3*r*60*60*24,t.string=r<0?Math.abs(r)+"days ago":r+"days left to start";var l=a.split(" ").slice(1).join(" ");return t.onlydate=l,t},j=(U(),Object(n.useState)(!1)),w=Object(c.a)(j,2),H=(w[0],w[1],Object(n.useMemo)((function(){return[{Header:"Date",accessor:"createdOn",className:"Header",style:{fontWeight:"bolder"},Cell:function(e){var a=e.value;return r.a.createElement("div",null,r.a.createElement("div",null,S(a).onlydate),r.a.createElement("div",{className:"fontweigh"},S(a).string))}},{Header:"Campaign",accessor:"name",className:"Header",style:{fontWeight:"bolder"},Cell:function(e){return r.a.createElement(C.a,null,r.a.createElement(C.a,null,e.row.original.name),r.a.createElement(C.a,{className:"fontweigh"},e.row.original.region))}},{Header:"View",accessor:"pricing",className:"Header",Cell:function(e){return r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,null,r.a.createElement("img",{src:D.a,height:40,alt:"money"})),r.a.createElement("label",{onClick:function(){!function(e){O.current.openModal(e)}(e)}},"View Pricing"))}},{Header:"Action",accessor:"csv",className:"Header",style:{fontWeight:"bolder"}},{Header:"",accessor:"report",Cell:function(e){return r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,null,r.a.createElement("img",{src:T.a,height:40,alt:"money"})),r.a.createElement("label",null,"Report"))},className:"Header",style:{fontWeight:"bolder"}},{Header:"Schedule Again",accessor:"price",className:"Header",style:{fontWeight:"bolder"},Cell:function(e){return r.a.createElement(k.a,{utils:M.a},r.a.createElement(V,{row:e,datehandle:g,datafull:u}))}}]}),[]));return r.a.createElement("div",null,r.a.createElement(x,{fetchProduct:a,columns:H,pastarr:d,futurearr:p,currentarr:f}),r.a.createElement(N,{ref:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(41),J=t(34);var B=function(e,a){switch(a.type){case"Currentarr":return Object(J.a)(Object(J.a)({},e),{},{Currentarr:a.payload});case"pastarr":return Object(J.a)(Object(J.a)({},e),{},{pastarr:a.payload});case"futurearr":return Object(J.a)(Object(J.a)({},e),{},{futurearr:a.payload});default:return""}},F=Object(A.b)(B);o.a.render(r.a.createElement(v.a,{store:F},r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){},72:function(e,a,t){e.exports=t.p+"static/media/money.b60187c1.png"},73:function(e,a,t){e.exports=t.p+"static/media/increase.3f7b5ed0.png"},96:function(e,a,t){e.exports=t(120)}},[[96,1,2]]]);
//# sourceMappingURL=main.09ff0b40.chunk.js.map