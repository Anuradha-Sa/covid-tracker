(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},226:function(e,t,c){},231:function(e,t,c){},237:function(e,t,c){},238:function(e,t,c){},239:function(e,t,c){},240:function(e,t,c){},241:function(e,t,c){},242:function(e,t,c){},243:function(e,t,c){},244:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(89),r=c.n(s),i=(c(98),c.p,c(99),c(11)),l=c.n(i),o=c(18),j=c(7),d=c(19),b=c.n(d),u=(c(118),c(119),c(0)),h=function(e){var t=Object(a.useState)(null),c=Object(j.a)(t,2),n=c[0],s=c[1],r="https://corona.lmao.ninja/v2/countries?yesterday&sort",i=null,d=[],h=null;function O(){return(O=Object(o.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(r);case 3:c=e.sent,s(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){O.apply(this,arguments)}()}),[r]),n&&(n.forEach((function(e){d.push({label:e.country,img:e.countryInfo.flag,value:e.countryInfo._id})})),i=d.map((function(e){return Object(u.jsx)("option",{value:e.label,children:e.label},e.value)}))),Object(u.jsx)("div",{children:Object(u.jsx)("select",{onChange:function(t){h=t.target.value,e.getSelectedValue(h)},children:i})})},O=c(41),x=function(){var e=[],t=[],c=Object(a.useState)("Australia"),n=Object(j.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),d=Object(j.a)(i,2),x=d[0],p=d[1],m="https://corona.lmao.ninja/v2/countries/".concat(s,"?yesterday=true&strict=true&query");function v(){return(v=Object(o.a)(l.a.mark((function c(){var a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,b.a.get(m);case 3:a=c.sent,p(a.data),console.log(a.data),e.push(a.data.country),t.push(a.data.deaths),console.log(e,t),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.error(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[m]),x?(console.log(e),Object(u.jsxs)("div",{className:"country-content",children:[Object(u.jsxs)("div",{className:"country-half-circle",children:[Object(u.jsx)("h2",{children:"Get The Update"}),Object(u.jsx)("p",{children:"Deserunt ullamco laboris labore ex cupidatat irure reprehenderit"})]}),Object(u.jsxs)("div",{className:"single-country-content",children:[Object(u.jsxs)("div",{className:"country-filter",children:[Object(u.jsx)("span",{children:Object(u.jsx)("h3",{children:"COUNTRY STATUS"})}),Object(u.jsx)(h,{className:"styles.country-drop-down",getSelectedValue:function(e){return r(e)}}),Object(u.jsx)("h2",{children:x.country}),Object(u.jsx)("img",{src:x.countryInfo.flag,className:"country-flag"}),Object(u.jsxs)("h3",{children:["Population: ",x.population]}),Object(u.jsxs)("h3",{children:["Cases: ",x.cases]}),Object(u.jsxs)("h3",{children:["Recovered: ",x.recovered]}),Object(u.jsxs)("h3",{children:["Deaths: ",x.deaths]})]}),Object(u.jsxs)("div",{className:"bar-chart",children:[Object(u.jsx)("h3",{children:"Status Chart"}),Object(u.jsx)(O.b,{data:{labels:["deaths","recovered","cases"],datasets:[{label:"Regional Table of Death Count",data:[x.deaths,x.recovered,x.cases],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{maintainAspectRatio:!1}})]})]})]})):Object(u.jsx)("div",{})},p=(c(226),c(22)),m=c(17),v=(c(231),c(14)),f=function(e){var t=e.showSideBar,c=e.changeNav,n=Object(a.useState)(t),s=Object(j.a)(n,2),r=s[0],i=s[1];Object(a.useEffect)((function(){i(t)}),[t]);return Object(u.jsx)("div",{className:r?"side-bar":"side-bar-hide",children:Object(u.jsxs)("div",{className:"side-bar-content",onClick:function(){return c(!r)},children:[Object(u.jsxs)(v.b,{to:"/",id:"top-menu-icon",children:[Object(u.jsx)(p.a,{icon:m.e}),"Home"]}),Object(u.jsx)(v.b,{to:"/single",children:"Single Country"}),Object(u.jsx)(v.b,{to:"/all",children:"All Country"}),Object(u.jsx)(v.b,{to:"/charts",children:"Charts"}),Object(u.jsx)(v.b,{to:"/contact-us",children:"Contact US"}),Object(u.jsx)(v.b,{to:"/learn",children:"Learn"})]})})},g=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),i=Object(j.a)(r,2);i[0],i[1];return document.body.style.overflow=n?"hidden":"visible",Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{showSideBar:n,changeNav:function(){return s(!n)}}),Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("a",{href:"#",children:"Covid Tracker"}),Object(u.jsx)("div",{className:"header-right",children:Object(u.jsx)("div",{onClick:function(){s(!n),console.log("isActive",n)},className:"toggle-icon",children:Object(u.jsx)(p.a,{icon:m.b})})})]})]})},N=c(4),y=(c(237),c(56)),C=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"footer-col-1",children:[Object(u.jsx)("h4",{children:"Call US"}),Object(u.jsx)("p",{children:"011-25478658945"})]}),Object(u.jsxs)("div",{className:"footer-col-2",children:[Object(u.jsx)("h4",{children:"Location"}),Object(u.jsx)("p",{children:"Colombo"})]}),Object(u.jsxs)("div",{className:"footer-col-3",children:[Object(u.jsx)("h4",{children:"Business Hours"}),Object(u.jsx)("p",{children:"7.00 a.m to 11.00 p.m"})]}),Object(u.jsxs)("div",{className:"footer-col-4",children:[Object(u.jsx)("h4",{children:"follow us"}),Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("div",{className:"element-1",children:Object(u.jsx)(p.a,{icon:y.a})}),Object(u.jsx)("div",{className:"element-2",children:Object(u.jsx)(p.a,{icon:m.a})})]})]})]})})})})},w=c(23),S=(c(238),c(239),c(93)),k=c.n(S),E=function(e){console.log(e);var t=Object(a.useState)(null),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(),i=Object(j.a)(r,2),d=i[0],h=i[1],O="https://corona.lmao.ninja/v2/countries?yesterday&sort",x=null;function p(){return(p=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(O);case 3:t=e.sent,s(t.data),h(1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[O]);var m=n?Math.ceil(764/n.length):0,v=n?Math.ceil(9.25):0;if(1===m)return null;var f=k.a.range(1,v+1);if(n){var g=24*d,N=g-24;x=n.slice(N,g).map((function(e,t){return Object(u.jsx)("div",{className:"container-1",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"index-number",children:t+1<10?Object(u.jsxs)("h2",{children:["0",t+1]}):Object(u.jsx)("h2",{children:t+1})}),Object(u.jsx)("div",{className:"country-name",children:Object(u.jsxs)("h2",{children:[" ",e.country]})}),Object(u.jsx)("div",{className:"country-flag",children:Object(u.jsx)("img",{src:e.countryInfo.flag})}),Object(u.jsx)("div",{className:"un-ordered-list",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Population: ",e.population]}),Object(u.jsxs)("li",{children:["Cases: ",e.cases]}),Object(u.jsxs)("li",{children:["Recovered: ",e.recovered]}),Object(u.jsxs)("li",{children:["Deaths: ",e.deaths]})]})})]})},t)}))}return Object(u.jsxs)("div",{className:"country",children:[x,Object(u.jsx)("div",{className:"pagination",children:Object(u.jsx)("ul",{children:f.map((function(e){return Object(u.jsx)("li",{onClick:function(){return h(e)},className:d===e?"active":"disabled",children:e},e)}))})})]})},T=function(e){return console.log(e),Object(u.jsxs)("div",{className:"all-country",children:[Object(u.jsx)("div",{className:"harlf-circle",children:Object(u.jsxs)("div",{className:"half-circle-content",children:[Object(u.jsx)("h1",{children:"Covid Update"}),Object(u.jsx)("p",{children:"Consectetur in proident velit adipisicing."})]})}),Object(u.jsx)("div",{className:"all-country-list",children:Object(u.jsx)(E,{})})]})},R=c(3),U=c(5),A=(c(240),[]),D=[],I=function(){var e,t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],s=c[1],r="https://corona.lmao.ninja/v2/continents?yesterday=true&sort";function i(){return(i=Object(o.a)(l.a.mark((function e(){var t,c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(r);case 3:t=e.sent,c=Object(R.a)(t.data);try{for(c.s();!(a=c.n()).done;)n=a.value,console.log(n),A.push(n.continent),D.push(n.deaths)}catch(i){c.e(i)}finally{c.f()}s(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}(),console.log(D)}),[r]),n?Object(u.jsxs)("div",{className:"bar-chart-1",children:[Object(u.jsx)("h3",{children:"Status Chart"}),Object(u.jsx)(O.a,{data:(e={labels:{fontColor:"orange"}},Object(U.a)(e,"labels",[A[0],A[1],A[2],A[3],A[4],A[5]]),Object(U.a)(e,"datasets",[{label:"Regional Table of Death Count",data:[D[0],D[1],D[2],D[3],D[4],D[5]],backgroundColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:["red","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]),e),height:100,width:100,options:{}})]}):Object(u.jsx)("div",{})},L=(c(241),function(){return Object(u.jsxs)("div",{className:"contact-us",children:[Object(u.jsx)("div",{className:"contact-us-img",children:Object(u.jsx)("img",{src:"https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ae30a308cbe35550a1ff83d9/wqe-min.jpg"})}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"contact-us-form",children:[Object(u.jsx)("h3",{children:"CONTACT US"}),Object(u.jsx)("input",{placeholder:"Enter your Name"}),Object(u.jsx)("input",{placeholder:"Enter a valid email address"}),Object(u.jsx)("textarea",{placeholder:"Enter your Message"}),Object(u.jsx)("button",{children:"SUBMIT"})]})})]})}),M=(c(242),function(){return Object(u.jsxs)("div",{className:"content-layout",children:[Object(u.jsxs)("div",{className:"image-content",children:[Object(u.jsx)("div",{className:"shape-circle"}),Object(u.jsx)("div",{className:"image-covid-vaccine",children:Object(u.jsx)("img",{src:"https://image.freepik.com/free-photo/doctor-holding-preparing-vaccine-while-wearing-protective-equipment_23-2148847188.jpg"})}),Object(u.jsx)("div",{className:"wave-image",children:Object(u.jsx)("img",{src:"https://www.transparentpng.com/thumb/wave/png-best-wave-15.png",alt:"image"})})]}),Object(u.jsxs)("div",{className:"text-content",children:[Object(u.jsx)("h3",{children:"Cillum adipisicing adipisicing ad labore labore nulla aliqua."}),Object(u.jsxs)("h2",{children:["View Covid ",Object(u.jsx)("span",{children:"Status"})]}),Object(u.jsx)("p",{children:"Sunt eiusmod et eiusmod cupidatat. Reprehenderit laboris duis est ex occaecat pariatur deserunt. Ut elit laboris incididunt occaecat occaecat consequat eiusmod ipsum ad nulla excepteur."}),Object(u.jsx)("a",{href:"#",children:"READ MORE"})]})]})}),q=(c(243),function(){return Object(u.jsxs)("div",{className:"learn",children:[Object(u.jsxs)("div",{className:"learn-text-content",children:[Object(u.jsx)("h5",{children:"Online Learning"}),Object(u.jsxs)("h1",{children:["Learn ",Object(u.jsx)("span",{children:"EveryDay"})]}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(u.jsx)("div",{className:"read-more",children:Object(u.jsx)("a",{children:"Read More"})})]}),Object(u.jsx)("div",{className:"learn-image",children:Object(u.jsx)("img",{src:"https://images03.nicepage.com/c461c07a441a5d220e8feb1a/eafd63efab0b5365b9024075/-min.jpg",alt:"reading book"})})]})});w.b.add(m.c,m.d);var B=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(N.a,{path:"/",exact:!0,component:M}),Object(u.jsx)(N.a,{path:"/single",exact:!0,component:x}),Object(u.jsx)(N.a,{path:"/all",exact:!0,component:T}),Object(u.jsx)(N.a,{path:"/charts",exact:!0,component:I}),Object(u.jsx)(N.a,{path:"/contact-us",exact:!0,component:L}),Object(u.jsx)(N.a,{path:"/learn",exact:!0,component:q}),Object(u.jsx)(C,{})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),F()},98:function(e,t,c){},99:function(e,t,c){}},[[244,1,2]]]);
//# sourceMappingURL=main.68a13d89.chunk.js.map