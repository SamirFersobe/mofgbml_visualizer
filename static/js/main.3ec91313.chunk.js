(this.webpackJsonpmofgbml_visualizer=this.webpackJsonpmofgbml_visualizer||[]).push([[0],{206:function(t,e,a){},208:function(t,e,a){},212:function(t,e,a){},213:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(38),o=a.n(r),s=(a(96),a(9)),i=(a(97),a(98),a(90)),u=a(1),l=function(t){var e=t.chartData;return Object(u.jsx)("div",{className:"plot-height",children:Object(u.jsx)(i.a,{data:e,options:{maintainAspectRatio:!1,aspectRatio:1,scales:{x:{display:!0,min:0,title:{display:!0,text:"Number of Rules",color:"#000",font:{family:"Arial",size:20,weight:"bold",lineHeight:1.2}}},y:{display:!0,title:{display:!0,text:"Error Rate(%)",color:"#000",font:{family:"Arial",size:20,weight:"bold",lineHeight:1.2}}}}}})})},d=(a(206),a(89)),b=a(14),j=a.n(b),h=a(27),O=a(220),f=a(217),p=a(218),x=(a(208),a(219)),m=a(91);var g=function(t){var e=t.buttonName,a=t.content,n=t.currentVal,c=t.updateFunction;return Object(u.jsxs)(f.a,{md:2,children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)("p",{className:"dropdown-button",children:[" ",e," "]})}),Object(u.jsx)(p.a,{children:Object(u.jsx)(x.a,{className:"dropdown-button",id:"dropdown-basic-button",title:n,children:a.map((function(t){return Object(u.jsx)(m.a.Item,{onClick:function(){return c(t)},value:t,children:t},t)}))})})]})},v=["0.9","0.8","0.7","0.5","0.3","0.2","0.1"],D=["MOP1","MOP7"],y=["Dtra","Dtst","Dvalid","Dsubtra"],C=["Dtra","Dtst"],_=["green","yellow","blue","red","purple","orange","aqua","black"],M="https://data.samirfersobe.com/";function k(t){var e=[];for(var a in t)if(t.hasOwnProperty(a)&&parseInt(a)>=2){var n={x:parseInt(a),y:parseFloat(t[a])};e.push(n)}return e}function w(t,e,a){var n=["",""],c=["",""];"Dtra"===a?(n=["".concat(M).concat(t,"_gen5000_MOP1at5_Dtra.json"),"".concat(M).concat(t,"_gen5000_MOP7at5_Dtra.json")],c=["".concat(t," MOP1 Training Data"),"".concat(t," MOP7 Training Data")]):(n=["".concat(M).concat(t,"_gen5000_MOP1at5_Dtst.json"),"".concat(M).concat(t,"_gen5000_MOP7at5_Dtst.json")],c=["".concat(t," MOP1 Test Data"),"".concat(t," MOP7 Test Data")]),function(){var t=Object(h.a)(j.a.mark((function t(){var a,r,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n[0]);case 2:return a=t.sent,t.next=5,fetch(n[1]);case 5:return r=t.sent,t.next=8,a.json();case 8:return o=t.sent,t.next=11,r.json();case 11:s=t.sent;try{i={datasets:[{label:c[0],data:k(o),backgroundColor:"blue",radius:10,hoverRadius:10,borderColor:"black",borderWidth:2},{label:c[1],data:k(s),backgroundColor:"green",radius:10,hoverRadius:10,borderColor:"black",borderWidth:2}]},e(i)}catch(u){console.log(u)}case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}function P(t){t({datasets:[]})}function N(t){var e=t.currentDataset,a=t.updateFunction,c=t.chartData,r=Object(n.useState)(v[0]),o=Object(s.a)(r,2),i=o[0],l=o[1],b=Object(n.useState)(D[0]),x=Object(s.a)(b,2),m=x[0],N=x[1],F=Object(n.useState)(y[0]),T=Object(s.a)(F,2),R=T[0],S=T[1],I=Object(n.useState)("white"),E=Object(s.a)(I,2),B=E[0],V=E[1];return Object(u.jsx)("div",{className:"dropdowns",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)("h2",{id:"currentDataset",children:"CurrentDataset"}),Object(u.jsx)(g,{buttonName:"MOP",content:D,currentVal:m,updateFunction:N}),"MOP1"!==m&&Object(u.jsx)(g,{buttonName:"Validation Rate",content:v,currentVal:i,updateFunction:l}),Object(u.jsx)(g,{buttonName:"Objective",content:"MOP1"===m?C:y,currentVal:R,updateFunction:S}),Object(u.jsx)(g,{buttonName:"Color",content:_,currentVal:B,updateFunction:V}),Object(u.jsx)(f.a,{children:Object(u.jsx)(d.a,{onClick:function(){return function(t,e,a,n,c,r,o){var s=10-Math.round(10*parseFloat(a)),i="".concat(e,"_gen5000_").concat(n,"at").concat(s.toString(10),"_").concat(c),u="".concat(M).concat(i);!function(){var s=Object(h.a)(j.a.mark((function s(){var i,l,d,b;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(u);case 2:return i=s.sent,s.next=5,i.json();case 5:l=s.sent;try{d={datasets:[{label:"".concat(e," ").concat(c," at ").concat(a," for ").concat(n),data:k(l),backgroundColor:r,radius:10,hoverRadius:10,borderColor:"black",borderWidth:2}]},(b={datasets:[]}).datasets=t.datasets.concat(d.datasets),o(b)}catch(j){console.log(j),o(t)}case 7:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}()()}(c,e,"MOP1"===m?"0.5":i,m,R,B,a)},className:"dropdown-button",variant:"primary",children:" Add New"})}),Object(u.jsxs)(f.a,{children:[Object(u.jsx)(p.a,{md:6,children:Object(u.jsx)(d.a,{onClick:function(){return w(e,a,"Dtra")},className:"dropdown-button",variant:"secondary",children:"Display Training Data"})}),Object(u.jsx)(p.a,{md:6,children:Object(u.jsx)(d.a,{onClick:function(){return w(e,a,"Dtst")},className:"dropdown-button",variant:"secondary",children:"Display Test Data"})})]}),Object(u.jsx)(f.a,{children:Object(u.jsx)(d.a,{onClick:function(){return function(t,e,a){var n=["".concat(M).concat(e,"_gen5000_MOP1at5_Dtra.json"),"".concat(M).concat(e,"_gen5000_MOP1at5_Dtst.json")],c=["".concat(e," MOP1 Training Data"),"".concat(e," MOP1 Test Data")];!function(){var e=Object(h.a)(j.a.mark((function e(){var r,o,s,i,u,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n[0]);case 2:return r=e.sent,e.next=5,fetch(n[1]);case 5:return o=e.sent,e.next=8,r.json();case 8:return s=e.sent,e.next=11,o.json();case 11:i=e.sent;try{u={datasets:[{type:"line",label:c[0],data:k(s),borderColor:"blue"},{type:"line",label:c[1],data:k(i),borderColor:"red"}]},(l={datasets:[]}).datasets=t.datasets.concat(u.datasets),a(l)}catch(d){console.log(d)}case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}(c,e,a)},className:"dropdown-button",variant:"secondary",children:" Compare to MOP1"})}),Object(u.jsx)(f.a,{children:Object(u.jsx)(d.a,{onClick:function(){return P(a)},className:"dropdown-button",variant:"danger",children:"Clear All "})})]})})}var F=function(t){var e=t.datasets,a=t.currentDataset,c=t.updateCurrentDataset,r=t.updateChart;function o(t){t.preventDefault(),0===t.button&&(c(t.currentTarget.value),console.log("Submit Function"))}Object(n.useEffect)((function(){return document.title=a,null===document.getElementById("currentDataset")&&void 0===document.getElementById("currentDataset")||(document.getElementById("currentDataset").innerHTML=a,console.log("UseEffect change title to:")),console.log(a),function(t,e){var a=["".concat(M).concat(t,"_gen5000_MOP1at5_Dtra.json"),"".concat(M).concat(t,"_gen5000_MOP1at5_Dtst.json")];!function(){var n=Object(h.a)(j.a.mark((function n(){var c,r,o,s,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a[0]);case 2:return c=n.sent,n.next=5,fetch(a[1]);case 5:return r=n.sent,n.next=8,c.json();case 8:return o=n.sent,n.next=11,r.json();case 11:s=n.sent;try{i={datasets:[{label:"".concat(t,"Training Data MOP1"),data:k(o),backgroundColor:"blue",radius:10,hoverRadius:10,borderColor:"black",borderWidth:2},{label:"".concat(t," Test Data MOP1"),data:k(s),backgroundColor:"red",radius:10,hoverRadius:10,borderColor:"black",borderWidth:2}]},e(i)}catch(u){console.log(u)}case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}(a,r),function(){console.log("cleanup"),P(r)}}),[a]);var s=e.map((function(t){return Object(u.jsxs)(d.a,{onClick:o,variant:"info",className:"myButton",value:t,children:[" ",t]},t)}));return Object(u.jsx)("div",{className:"datasetsDisplay",children:s})},T=(a(212),["australian","iris","magic","newthyroid","page-blocks","penbased","phoneme","pima","sonar","vehicle","wine"]);var R=function(){var t=Object(n.useState)(T[0]),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)({datasets:[]}),o=Object(s.a)(r,2),i=o[0],d=o[1];return Object(n.useEffect)((function(){console.log("rendering again")}),[i]),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(f.a,{className:"justify-content-center",children:Object(u.jsxs)(p.a,{xl:"5",children:[Object(u.jsx)("h1",{className:"app",children:" Charts for MoFGBML"}),Object(u.jsx)("h3",{children:" Heroku changed their free offering so currently the nodejs backend is unreachable, I'll update soon."})]})}),Object(u.jsx)(F,{datasets:T,currentDataset:a,updateCurrentDataset:c,updateChart:d}),Object(u.jsx)(O.a,{children:Object(u.jsxs)(f.a,{className:"justify-content-center",children:[Object(u.jsx)(p.a,{md:8,children:Object(u.jsx)(l,{chartData:i})}),Object(u.jsx)(p.a,{md:4,children:Object(u.jsx)(N,{updateFunction:d,chartData:i,currentDataset:a})})]})})]})},S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,221)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),c(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),S()},96:function(t,e,a){},98:function(t,e,a){}},[[213,1,2]]]);
//# sourceMappingURL=main.3ec91313.chunk.js.map