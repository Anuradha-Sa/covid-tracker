(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{117:function(e,c,t){},118:function(e,c,t){},225:function(e,c,t){},226:function(e,c,t){},231:function(e,c,t){},232:function(e,c,t){},233:function(e,c,t){},234:function(e,c,t){},235:function(e,c,t){},236:function(e,c,t){},237:function(e,c,t){},238:function(e,c,t){},239:function(e,c,t){},240:function(e,c,t){},246:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),s=t(89),r=t.n(s),i=(t(97),t.p,t(98),t(11)),l=t.n(i),o=t(17),j=t(7),d=t(18),b=t.n(d),h=(t(117),t(118),t(0)),u=function(e){var c=Object(a.useState)(null),t=Object(j.a)(c,2),n=t[0],s=t[1],r="https://corona.lmao.ninja/v2/countries?yesterday&sort",i=null,d=[],u=null;function O(){return(O=Object(o.a)(l.a.mark((function e(c){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(r);case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){O.apply(this,arguments)}()}),[r]),n&&(n.forEach((function(e){d.push({label:e.country,img:e.countryInfo.flag,value:e.countryInfo._id})})),i=d.map((function(e){return Object(h.jsx)("option",{value:e.label,children:e.label},e.value)}))),Object(h.jsx)("div",{children:Object(h.jsx)("select",{onChange:function(c){u=c.target.value,e.getSelectedValue(u)},children:i})})},O=t(40),x=function(){var e=[],c=[],t=Object(a.useState)("Australia"),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(""),d=Object(j.a)(i,2),x=d[0],p=d[1],f="https://corona.lmao.ninja/v2/countries/".concat(s,"?yesterday=true&strict=true&query");function v(){return(v=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get(f);case 3:a=t.sent,p(a.data),console.log(a.data),e.push(a.data.country),c.push(a.data.deaths),console.log(e,c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[f]),x?(console.log(e),Object(h.jsxs)("div",{className:"country-content",children:[Object(h.jsxs)("div",{className:"country-half-circle",children:[Object(h.jsx)("h2",{children:"Get The Update"}),Object(h.jsx)("p",{children:"Deserunt ullamco laboris labore ex cupidatat irure reprehenderit"})]}),Object(h.jsxs)("div",{className:"single-country-content",children:[Object(h.jsxs)("div",{className:"country-filter",children:[Object(h.jsx)("span",{children:Object(h.jsx)("h3",{children:"COUNTRY STATUS"})}),Object(h.jsx)(u,{className:"styles.country-drop-down",getSelectedValue:function(e){return r(e)}}),Object(h.jsx)("h2",{children:x.country}),Object(h.jsx)("img",{src:x.countryInfo.flag,className:"country-flag"}),Object(h.jsxs)("h3",{children:["Population: ",x.population]}),Object(h.jsxs)("h3",{children:["Cases: ",x.cases]}),Object(h.jsxs)("h3",{children:["Recovered: ",x.recovered]}),Object(h.jsxs)("h3",{children:["Deaths: ",x.deaths]})]}),Object(h.jsxs)("div",{className:"bar-chart",children:[Object(h.jsx)("h3",{children:"Status Chart"}),Object(h.jsx)(O.b,{data:{labels:["deaths","recovered","cases"],datasets:[{label:"Regional Table of Death Count",data:[x.deaths,x.recovered,x.cases],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{maintainAspectRatio:!1}})]})]})]})):Object(h.jsx)("div",{})},p=(t(225),function(e){var c=Object(a.useState)(null),t=Object(j.a)(c,2),n=t[0],s=t[1],r="https://corona.lmao.ninja/v2/countries?yesterday&sort",i=null;function d(){return(d=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(r);case 3:c=e.sent,console.log(c.data),s(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[r]),n&&(i=n.map((function(e,c){return Object(h.jsx)("div",{className:"container-1",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"index-number",children:c+1<10?Object(h.jsxs)("h2",{children:["0",c+1]}):Object(h.jsx)("h2",{children:c+1})}),Object(h.jsx)("div",{className:"country-name",children:Object(h.jsxs)("h2",{children:[" ",e.country]})}),Object(h.jsx)("div",{className:"country-flag",children:Object(h.jsx)("img",{src:e.countryInfo.flag})}),Object(h.jsx)("div",{className:"un-ordered-list",children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Population: ",e.population]}),Object(h.jsxs)("li",{children:["Cases: ",e.cases]}),Object(h.jsxs)("li",{children:["Recovered: ",e.recovered]}),Object(h.jsxs)("li",{children:["Deaths: ",e.deaths]})]})})]})},c)}))),Object(h.jsx)("div",{children:i})}),f=(t(226),t(21)),v=t(16),m=(t(231),function(e){var c=e.showSideBar,t=Object(a.useState)(!1),n=Object(j.a)(t,2);n[0],n[1];return console.log(c),Object(h.jsx)("div",{className:c?"side-bar":"side-bar-hide",children:Object(h.jsxs)("div",{className:"side-bar-content",children:[Object(h.jsxs)("a",{href:"/",children:[Object(h.jsx)(f.a,{icon:v.e})," Home"]}),Object(h.jsx)("a",{href:"/single",children:"Single Country"}),Object(h.jsx)("a",{href:"/all",children:"All Country"}),Object(h.jsx)("a",{href:"/charts",children:"Charts"}),Object(h.jsx)("a",{href:"/contact-us",children:"Contact US"})]})})}),g=function(){var e=Object(a.useState)(!1),c=Object(j.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(j.a)(s,2);r[0],r[1];return document.body.style.overflow=t?"hidden":"visible",Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{showSideBar:t}),Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("a",{href:"#",children:"Covid Tracker"}),Object(h.jsx)("div",{className:"header-right",children:Object(h.jsx)("div",{onClick:function(){n(!t),console.log("clicked",t)},className:"toggle-icon",children:Object(h.jsx)(f.a,{icon:v.b})})})]})]})},N=t(56),y=t(4),C=(t(232),t(233),t(234),t(39)),w=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"footer-col-1",children:[Object(h.jsx)("h4",{children:"Call US"}),Object(h.jsx)("p",{children:"011-25478658945"})]}),Object(h.jsxs)("div",{className:"footer-col-2",children:[Object(h.jsx)("h4",{children:"Location"}),Object(h.jsx)("p",{children:"Colombo"})]}),Object(h.jsxs)("div",{className:"footer-col-3",children:[Object(h.jsx)("h4",{children:"Business Hours"}),Object(h.jsx)("p",{children:"7.00 a.m to 11.00 p.m"})]}),Object(h.jsxs)("div",{className:"footer-col-4",children:[Object(h.jsx)("h4",{children:"follow us"}),Object(h.jsxs)("div",{className:"social",children:[Object(h.jsx)("div",{className:"element-1",children:Object(h.jsx)(f.a,{icon:C.a})}),Object(h.jsx)("div",{className:"element-2",children:Object(h.jsx)(f.a,{icon:v.a})})]})]})]})})})})},S=t(22),k=(t(235),function(e){return console.log(e),Object(h.jsxs)("div",{className:"all-country",children:[Object(h.jsx)("div",{className:"harlf-circle",children:Object(h.jsxs)("div",{className:"half-circle-content",children:[Object(h.jsx)("h1",{children:"Covid Update"}),Object(h.jsx)("p",{children:"Consectetur in proident velit adipisicing."})]})}),Object(h.jsx)("div",{className:"all-country-list",children:Object(h.jsx)(p,{})})]})}),T=t(3),E=t(5),R=(t(236),[]),U=[],A=function(){var e,c=Object(a.useState)(""),t=Object(j.a)(c,2),n=t[0],s=t[1],r="https://corona.lmao.ninja/v2/continents?yesterday=true&sort";function i(){return(i=Object(o.a)(l.a.mark((function e(){var c,t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(r);case 3:c=e.sent,t=Object(T.a)(c.data);try{for(t.s();!(a=t.n()).done;)n=a.value,console.log(n),R.push(n.continent),U.push(n.deaths)}catch(i){t.e(i)}finally{t.f()}s(c.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}(),console.log(U)}),[r]),n?Object(h.jsxs)("div",{className:"bar-chart-1",children:[Object(h.jsx)("h3",{children:"Status Chart"}),Object(h.jsx)(O.a,{data:(e={labels:{fontColor:"orange"}},Object(E.a)(e,"labels",[R[0],R[1],R[2],R[3],R[4],R[5]]),Object(E.a)(e,"datasets",[{label:"Regional Table of Death Count",data:[U[0],U[1],U[2],U[3],U[4],U[5]],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["red","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]),e),height:100,width:100,options:{}})]}):Object(h.jsx)("div",{})},D=(t(237),t(238),t(239),function(){return Object(h.jsxs)("div",{className:"contact-us",children:[Object(h.jsx)("div",{className:"contact-us-img",children:Object(h.jsx)("img",{src:"https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ae30a308cbe35550a1ff83d9/wqe-min.jpg"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"contact-us-form",children:[Object(h.jsx)("h3",{children:"CONTACT US"}),Object(h.jsx)("input",{placeholder:"Enter your Name"}),Object(h.jsx)("input",{placeholder:"Enter a valid email address"}),Object(h.jsx)("textarea",{placeholder:"Enter your Message"}),Object(h.jsx)("button",{children:"SUBMIT"})]})})]})}),I=(t(240),function(){return Object(h.jsxs)("div",{className:"content-layout",children:[Object(h.jsxs)("div",{className:"image-content",children:[Object(h.jsx)("div",{className:"shape-circle"}),Object(h.jsx)("div",{className:"image-covid-vaccine",children:Object(h.jsx)("img",{src:"https://image.freepik.com/free-photo/doctor-holding-preparing-vaccine-while-wearing-protective-equipment_23-2148847188.jpg"})}),Object(h.jsx)("div",{className:"wave-image",children:Object(h.jsx)("img",{src:"https://www.transparentpng.com/thumb/wave/png-best-wave-15.png",alt:"image"})})]}),Object(h.jsxs)("div",{className:"text-content",children:[Object(h.jsx)("h3",{children:"Cillum adipisicing adipisicing ad labore labore nulla aliqua."}),Object(h.jsxs)("h2",{children:["View Covid ",Object(h.jsx)("span",{children:"Status"})]}),Object(h.jsx)("p",{children:"Sunt eiusmod et eiusmod cupidatat. Reprehenderit laboris duis est ex occaecat pariatur deserunt. Ut elit laboris incididunt occaecat occaecat consequat eiusmod ipsum ad nulla excepteur."}),Object(h.jsx)("a",{href:"#",children:"READ MORE"})]})]})});S.b.add(v.c,v.d);var B=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsxs)(N.a,{children:[Object(h.jsx)(y.a,{path:"/",exact:!0,children:Object(h.jsx)(I,{})}),Object(h.jsx)(y.a,{path:"/single",exact:!0,children:Object(h.jsx)(x,{})}),Object(h.jsx)(y.a,{path:"/all",exact:!0,children:Object(h.jsx)(k,{})}),Object(h.jsx)(y.a,{path:"/charts",exact:!0,children:Object(h.jsx)("div",{className:"chart-container",children:Object(h.jsx)(A,{})})}),Object(h.jsx)(y.a,{path:"/contact-us",exact:!0,children:Object(h.jsx)(D,{})})]}),Object(h.jsx)(w,{})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,247)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),q()},97:function(e,c,t){},98:function(e,c,t){}},[[246,1,2]]]);
//# sourceMappingURL=main.6dfd620d.chunk.js.map