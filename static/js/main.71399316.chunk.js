(this["webpackJsonpece-learn"]=this["webpackJsonpece-learn"]||[]).push([[0],{10:function(e,t,n){e.exports={"note-layout":"note_note-layout__38wm_",block:"note_block__1EtLe",danger:"note_danger__104Yc",success:"note_success__3jaKi",info:"note_info__1ON0w",warning:"note_warning__36Vku"}},19:function(e,t,n){e.exports={hl:"App_hl__bGIFF"}},20:function(e,t,n){e.exports={btn:"buttonLink_btn__3yZST"}},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(18),i=n.n(a),s=(n(25),n(5)),o=n(3),l=n(13),j=n(14),u=n(6),b=n.n(u),d=n(0),h=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],i=function(){var t=document.getElementById("myTopNav");t.className===b.a["top-nav"]?t.className+=" ".concat(b.a.responsive):t.className=b.a["top-nav"],e.stickHandler(t.offsetHeight)},s=function(t){i(),document.querySelectorAll("#myTopNav > button").forEach((function(e,n){0!==n&&7!==n&&(e.value.toString()===t.target.value.toString()?e.className=b.a.select:e.className="")})),e.gradeClick(t.target.value)};return Object(d.jsxs)("div",{className:b.a["top-nav"],id:"myTopNav",children:[Object(d.jsx)("button",{className:b.a.active,children:"NYCU ECE"}),Object(d.jsx)("button",{value:"readme",className:b.a.select,onClick:s,children:"README"}),Object(d.jsx)("button",{value:"first",onClick:s,children:"\u5927\u4e00"}),Object(d.jsx)("button",{value:"second",onClick:s,children:"\u5927\u4e8c"}),Object(d.jsx)("button",{value:"advance",onClick:s,children:"\u5927\u4e09\u4ee5\u4e0a"}),Object(d.jsx)("button",{value:"other",onClick:s,children:"\u901a\u8b58\u8207\u5176\u4ed6"}),Object(d.jsx)("button",{value:"hope",onClick:s,children:"\u9858\u671b\u6e05\u55ae"}),Object(d.jsx)("input",{type:"text",placeholder:"Search",value:r,onChange:function(t){a(t.target.value),e.textChange(t.target.value)}}),Object(d.jsx)("button",{className:b.a.icon,onClick:i,children:Object(d.jsx)(l.a,{icon:j.a})})]})},O=n(19),f=n.n(O),p=n(15),x=n(8),m=n(4),_=n.n(m),g=function(e){return Object(d.jsxs)("tr",{className:_.a["big-tr"],children:[Object(d.jsx)("td",{className:_.a["center-col"],children:e.index+1},"0"),Object(d.jsx)("td",{className:_.a["center-col"],children:e.item[0]},"1"),Object(d.jsx)("td",{className:_.a["center-col"],children:e.item[1]},"2"),Object(d.jsx)("td",{className:_.a["center-col"],children:e.item[2]},"3"),Object(d.jsx)("td",{className:_.a["center-col"],children:e.item[3]},"4"),Object(d.jsx)("td",{className:_.a["center-col"],children:e.item[4]},"5"),Object(d.jsx)("td",{className:_.a["center-col"],children:Object(d.jsx)("a",{href:"".concat("https://storage.googleapis.com/ece-files","/").concat(e.item[6]),target:"_blank",rel:"noreferrer",children:e.item[5]})},"6")]})},v=["\u79d1\u76ee","\u79d1\u76ee\u6559\u5e2b","\u5e74\u4efd","\u985e\u5225"],y=[20,15,15,10];function N(e){return[Object(s.a)(new Set(e.map((function(e){return e[1]})).sort())),Object(s.a)(new Set(e.map((function(e){return e[2]})).sort())),Object(s.a)(new Set(e.map((function(e){return e[3]})).sort())),Object(s.a)(new Set(e.map((function(e){return e[4]})).sort()))]}var k=function(e){var t=Object(c.useState)(e.items),n=Object(o.a)(t,2),a=n[0],i=n[1],u=Object(c.useState)(N(e.items)),b=Object(o.a)(u,2),h=b[0],O=b[1],f=Object(c.useState)({"\u79d1\u76ee":"","\u79d1\u76ee\u6559\u5e2b":"","\u5e74\u4efd":"","\u985e\u5225":""}),m=Object(o.a)(f,2),k=m[0],w=m[1];function S(t){var n,c=t.target.innerText,r=t.target.parentNode.id;if("\u5e74\u4efd"===r)n=e.items.filter((function(e){for(var t=0,n=Object(x.a)({},k),r=0,a=Object.entries(k);r<a.length;r++){var i=Object(o.a)(a[r],2),s=i[0],l=i[1];if(3===(t+=1)&&e[t]!==c)return!1;if(3!==t&&(0===l.length&&(n[s]=e[t]),e[t]!==n[s]))return!1}return!0}));else if("\u79d1\u76ee"===r){var a=N(n=e.items.filter((function(e){return e[1]===c})));a[0]=Object(s.a)(new Set(e.items.map((function(e){return e[1]})).sort())),O(a),w({"\u79d1\u76ee":c,"\u79d1\u76ee\u6559\u5e2b":"","\u5e74\u4efd":"","\u985e\u5225":""})}else"\u79d1\u76ee\u6559\u5e2b"===r?(n=e.items.filter((function(e){for(var t=0,n=Object(x.a)({},k),r=0,a=Object.entries(k);r<a.length;r++){var i=Object(o.a)(a[r],2),s=i[0],l=i[1];if(2===(t+=1)&&e[t]!==c)return!1;if(2!==t&&(0===l.length&&(n[s]=e[t]),e[t]!==n[s]))return!1}return!0})),O((function(e){return e[2]=Object(s.a)(new Set(n.map((function(e){return e[3]})).sort())),e[3]=Object(s.a)(new Set(n.map((function(e){return e[4]})).sort())),e})),w((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},r,c))}))):n=e.items.filter((function(e){for(var t=0,n=Object(x.a)({},k),r=0,a=Object.entries(k);r<a.length;r++){var i=Object(o.a)(a[r],2),s=i[0],l=i[1];if(4===(t+=1)&&e[t]!==c)return!1;if(4!==t&&(0===l.length&&(n[s]=e[t]),e[t]!==n[s]))return!1}return!0}));i(n)}return r.a.useEffect((function(){i(e.items),O(N(e.items)),w({"\u79d1\u76ee":"","\u79d1\u76ee\u6559\u5e2b":"","\u5e74\u4efd":"","\u985e\u5225":""})}),[e.items]),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{style:{top:"".concat(e.stickyTop,"px")},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{style:{width:"10%"},children:"#"},"1"),Object(d.jsx)("th",{style:{width:"10%"},children:"\u5e74\u7d1a"},"2"),v.map((function(e,t){return Object(d.jsx)("th",{style:{width:"".concat(y[t],"%")},className:_.a.decorate,children:Object(d.jsxs)("div",{className:_.a.dropdown,children:[e,Object(d.jsx)("button",{className:_.a.icon,children:Object(d.jsx)(l.a,{icon:j.b})}),Object(d.jsx)("div",{style:{width:"".concat(y[t],"%")},className:_.a["dropdown-content"],id:e,children:h[t].map((function(e,t){return Object(d.jsx)("button",{onClick:S,children:e},t)}))})]})},"".concat(t+2))})),Object(d.jsx)("th",{style:{width:"20%"},children:"\u6a94\u6848"},"7")]})}),Object(d.jsx)("tbody",{children:a.map((function(e,t){return Object(d.jsx)(g,{item:e,index:t},t)}))})]})},w=(n(32),function(){return Object(d.jsxs)("footer",{children:[Object(d.jsxs)("p",{children:["\xa9 2021 Copyright: NYCU ECE | Developed by\xa0",Object(d.jsx)("a",{href:"https://github.com/Justin900429",target:"_blank",rel:"noreferrer",children:"Justin"})," and\xa0",Object(d.jsx)("a",{href:"https://github.com/JoyceFang1213",target:"_blank",rel:"noreferrer",children:"Joyce"})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("a",{href:"https://github.com/nycu-ece-learn/ece-learn",target:"_blank",rel:"noreferrer",children:"Source code"})," is released with MIT license."]})]})}),S=n(10),C=n.n(S),E=function(e){return Object(d.jsx)("div",{className:"".concat(C.a[e.blockType]," ").concat(C.a.block),children:Object(d.jsx)("p",{children:e.text})})},L=n(20),T=n.n(L),W=function(e){return Object(d.jsx)("a",{className:T.a.btn,target:"_blank",rel:"noreferrer",href:e.link,children:e.text})},A=n.p+"static/media/meme.09401814.png",F=function(){return Object(d.jsxs)("div",{className:C.a["note-layout"],children:[Object(d.jsx)(E,{blockType:"danger",text:" \u26a0\ufe0f \u6ce8\u610f\uff01Windows \u7528\u6236\u5728\u89e3\u58d3\u7e2e\u6a94\u6642\u8acb\u4f7f\u7528\u5167\u5efa\u7684 7z \u89e3\u58d3\u7e2e\u3002\u82e5\u662f\u4f7f\u7528 window \u5167\u5efa\u7684\u89e3\u58d3\u7e2e\u65b9\u5f0f\u662f\u6703\u770b\u4e0d\u5230\u6771\u897f\u7684"}),Object(d.jsx)("h2",{children:"A. \u4f7f\u7528\u8aaa\u660e"}),Object(d.jsx)("p",{children:"1. \u8003\u53e4\u8cc7\u6e90\u662f\u773e\u591a\u5b78\u9577\u59d0\u6162\u6162\u7d2f\u7a4d\u51fa\u4f86\u7684\uff0c\u8acb\u4e0d\u8981\u60e1\u610f\u4f7f\u7528\u3002"}),Object(d.jsx)("p",{children:"2. \u5de6\u4e0a\u908a\u652f\u63f4\u4e0d\u540c\u5e74\u7d1a\uff0c\u53f3\u4e0a\u65b9\u652f\u63f4\u641c\u5c0b\u529f\u80fd\u3002\u641c\u5c0b\u5230\u7684\u6587\u5b57\u6703\u88ab Highlight\u3002"}),Object(d.jsx)("p",{children:"3. \u5982\u679c\u8981\u7528 Filter\uff0c\u8acb\u5148\u9078\u79d1\u76ee\u518d\u9078\u5176\u4ed6\u3002"}),Object(d.jsx)("p",{children:"4. \u6709 Bug \u7684\u8a71\u5f88\u6b63\u5e38\u5566\uff0c\u91cd\u65b0\u6574\u7406\u5c31\u597d\ud83d\udcaa\u3002"}),Object(d.jsx)("br",{}),Object(d.jsxs)("h2",{children:["B. \u7db2\u7ad9\u5efa\u8b70",Object(d.jsx)(W,{link:"https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url",text:"\u8868\u55ae"})]}),Object(d.jsx)("p",{children:"\u2022 \u4f60\u5011\u53ef\u4ee5\u586b\u4f60\u5011\u60f3\u8981\u7684\u529f\u80fd\u6216\u8003\u53e4\uff0c\u4f46\u662f\u80fd\u4e0d\u80fd\u5be6\u73fe\u5c31\u4e0d\u4e00\u5b9a\u4e86\ud83e\udd72"}),Object(d.jsx)("br",{}),Object(d.jsxs)("h2",{children:["C. \u8003\u53e4\u63d0\u4f9b",Object(d.jsx)(W,{link:"https://docs.google.com/forms/d/e/1FAIpQLScFRb2OO94VijW5mF4EigLjT39Dbg0HUD7kue3uosTNTS8W5g/viewform?pli=1",text:"\u8868\u55ae"})]}),Object(d.jsx)("p",{children:"\u2022 \u4e5f\u9ebb\u7169\u5927\u5bb6\u63d0\u4f9b\u8003\u53e4\u5594\uff01"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"D. \u672a\u4f86\u898f\u5283"}),Object(d.jsx)("p",{children:"\u672a\u4f86\u6703\u66f4\u65b0\u7684\u5927\u6982\u53ea\u6709\u8ff7\u56e0\u5427"}),Object(d.jsx)("img",{style:{marginLeft:"auto",marginRight:"auto",display:"block"},src:A,alt:"meme"})]})},J=n(7),D=n.n(J),I=n.p+"static/media/user.61637315.png",H=function(e){return Object(d.jsxs)("div",{className:D.a.card,children:[Object(d.jsx)("div",{className:D.a.card_img,children:Object(d.jsx)("img",{style:{opacity:.3},alt:"head",src:I})}),Object(d.jsx)("div",{className:D.a.card_info,children:Object(d.jsx)("h3",{children:e.text})})]})},R=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://docs.google.com/spreadsheets/d/1cW-HJEbYDWIsagjmoWyrzjjRlMnBQ3feQfbsKcPi9ZU/gviz/tq?tqx=out:json&tq&gid=0").then((function(e){return e.text()})).then((function(e){return JSON.parse(e.substring(47).slice(0,-2))})).then((function(e){return r(e.table.rows.map((function(e){return e.c[1].v})))}))}),[]),Object(d.jsx)("div",{className:D.a.container,children:n.map((function(e,t){return Object(d.jsx)(H,{text:e},t)}))})},z=n.p+"static/media/one.ccd2c522.txt",M=n.p+"static/media/two.b0e8274f.txt",U=n.p+"static/media/advance.b7e3d423.txt",q=n.p+"static/media/other.87da2a62.txt",B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=e.slice(e.indexOf("\n")+1).split("\n");return n.map((function(e){return e.split(t)}))};var K=function(){var e=Object(c.useState)("48"),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(o.a)(a,2),l=i[0],j=i[1],u=Object(c.useState)([]),b=Object(o.a)(u,2),O=b[0],p=b[1],x=Object(c.useState)("readme"),m=Object(o.a)(x,2),_=m[0],g=m[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{stickHandler:function(e){r(e)},gradeClick:function(e){if("readme"===e||"hope"===e)g(e);else{if(g("list"),"first"===e){var t=[];fetch(z).then((function(e){return e.text()})).then((function(e){return t.push.apply(t,Object(s.a)(B(e)))})),p(t),j(t)}if("second"===e){var n=[];fetch(M).then((function(e){return e.text()})).then((function(e){return n.push.apply(n,Object(s.a)(B(e)))})),p(n),j(n)}if("advance"===e){var c=[];fetch(U).then((function(e){return e.text()})).then((function(e){return c.push.apply(c,Object(s.a)(B(e)))})),p(c),j(c)}if("other"===e){var r=[];fetch(q).then((function(e){return e.text()})).then((function(e){return r.push.apply(r,Object(s.a)(B(e)))})),p(r),j(r)}}},textChange:function(e){if(g("list"),""!==e){var t=new RegExp(e,"gi"),n=l.reduce((function(e,n){for(var c=!1,r=0;r<n.length-1&&!c;++r)n[r].match(t)&&(c=!0);return c&&e.push(n.map((function(e,n){if(6===n)return e;var c=t.exec(e);return c?Object(d.jsxs)("span",{children:[e.substr(0,c.index),Object(d.jsx)("span",{className:f.a.hl,children:e.substr(c.index,c[0].length)}),e.substr(c.index+c[0].length)]}):e}))),e}),[]);p(n)}else p(l)}}),"readme"===_?Object(d.jsx)(F,{}):"hope"===_?Object(d.jsx)(R,{}):Object(d.jsx)(k,{stickyTop:n,items:O}),Object(d.jsx)("div",{style:{height:"90px"}}),Object(d.jsx)(w,{})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={"center-col":"List_center-col__2WKVE",decorate:"List_decorate__3cUdg",icon:"List_icon__26k2j",dropdown:"List_dropdown__EQ1kq","dropdown-content":"List_dropdown-content___XGna"}},6:function(e,t,n){e.exports={"top-nav":"navbar_top-nav__3rzWR",select:"navbar_select__3grZO",active:"navbar_active__erm8h",icon:"navbar_icon__3bLCg",responsive:"navbar_responsive__3R3pD"}},7:function(e,t,n){e.exports={container:"card_container__3G4Fa",card:"card_card__1py-W",card_img:"card_card_img__mmzcs",card_info:"card_card_info__3MXdl"}}},[[33,1,2]]]);
//# sourceMappingURL=main.71399316.chunk.js.map