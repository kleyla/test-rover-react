(this["webpackJsonptest-rover"]=this["webpackJsonptest-rover"]||[]).push([[0],{84:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(9),o=n.n(i),s=(n(84),n(34)),l=n(116),j=n(134),b=n(137),d=n(48),x=n(10),p=n(36),h=n(117),O=n(119),u=n(120),m=n(50),f=n(121),g=n(67),v=n.n(g),y=n(66),w=n.n(y),C=Object(l.a)((function(e){var t;return{offset:e.mixins.toolbar,menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),titleLight:{color:w.a[200]},title:{flexGrow:1},appBar:(t={},Object(p.a)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(p.a)(t,"backgroundColor",e.palette.common.white),t)}})),k=function(e){var t=C();return Object(a.jsx)(h.a,{className:t.appBar,children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(u.a,{color:"primary","aria-label":"Menu",className:t.menuButton,onClick:function(){e.accionAbrir()},children:Object(a.jsx)(v.a,{})}),Object(a.jsxs)(m.a,{variant:"h6",className:t.title,color:"primary",children:[Object(a.jsx)("span",{className:t.titleLight,children:"TEST"}),"ROVER"]}),Object(a.jsx)(f.a,{variant:"text",color:"inherit",children:"Login"})]})})},N=n(27),B=n(135),S=n(136),M=n(138),A=n(126),L=n(122),z=n(141),E=n(123),F=n(124),P=n(125),T=n(70),D=Object(T.a)({palette:{primary:{light:"#9652ff",main:"#9c27b0",dark:"#303f9f"},secondary:{main:"#3cd1c2"},info:{main:"#ffaa2c"},error:{main:"#f83e70"}},typography:{subtitle1:{color:"#9e9e9e"}}}),R=Object(l.a)((function(e){return{icono:{color:"white"}}})),I=function(){var e=R();return Object(a.jsx)("div",{children:Object(a.jsxs)(L.a,{component:"nav",children:[[{icon:"home",text:"Home",route:"/"},{icon:"info",text:"About",route:"/about"},{icon:"maps",text:"Maps",route:"/maps"}].map((function(t,n){return Object(a.jsxs)(z.a,{button:!0,component:d.b,to:t.route,children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(F.a,{className:e.icono,children:t.icon})}),Object(a.jsx)(P.a,{primary:t.text})]},n)})),Object(a.jsx)(A.a,{})]})})},U=Object(l.a)((function(e){return{drawer:{width:240,flexShink:0},drawerPaper:{width:240,background:e.palette.primary.main,color:"white"},toolbar:Object(N.a)(Object(N.a)({},e.mixins.toolbar),{},{display:"flex",justifyContent:"center",alignItems:"center"}),large:{width:e.spacing(22),height:e.spacing(22)}}})),_=function(e){var t=U();return Object(a.jsxs)(B.a,{className:t.drawer,classes:{paper:t.drawerPaper},anchor:"left",variant:e.variant,open:e.open,onClose:e.onClose?e.onClose:null,children:[Object(a.jsx)("div",{className:t.toolbar,children:Object(a.jsx)(m.a,{variant:"h5",children:"KAREN"})}),Object(a.jsx)(S.a,{display:"flex",justifyContent:"center",py:2,children:Object(a.jsx)(M.a,{alt:"Karen pic",src:"".concat("/test-rover-react","/me1.jpg"),className:t.large})}),Object(a.jsx)(A.a,{}),Object(a.jsx)(I,{})]})},G=n(133),H=n(127),J=n(128),K=n(73),V=n(129),q=Object(l.a)({litleBox:{backgroundColor:function(e){return e.color},display:"inline-block",padding:"8px"},icono:{fontSize:"45px",color:"white"}}),Q=function(e){var t=q(e);return Object(a.jsxs)(H.a,{children:[Object(a.jsx)(J.a,{children:Object(a.jsxs)(S.a,{display:"flex",flexDirection:"row",children:[Object(a.jsx)(K.a,{className:t.litleBox,elevation:0,children:Object(a.jsx)(F.a,{className:t.icono,children:e.icon})}),Object(a.jsxs)(S.a,{flex:1,display:"flex",flexDirection:"column",children:[Object(a.jsx)(m.a,{display:"block",variant:"overline",align:"right",children:e.text}),Object(a.jsx)(m.a,{variant:"h5",align:"right",children:e.cantidad})]})]})}),Object(a.jsx)(V.a,{children:Object(a.jsx)(f.a,{size:"small",children:"More"})})]})},W=n(130),X=n(139),Y=n(131),Z=n(132),$=(n(92),n(20)),ee=n.n($),te=(n(93),n(68)),ne=n(69),ae=ee.a.icon({iconUrl:te.a,shadowUrl:ne.a});ee.a.Marker.prototype.options.icon=ae;var ce=Object(l.a)((function(e){return{mapCont:{width:"100%",height:"400px"}}})),re=[-17.7865297,-63.1795071],ie=[[-17.7804443,-63.1879617],[-17.7838959,-63.1823237],[-17.7757732,-63.1928955],[-17.7754388,-63.2003477],[-17.789106,-63.1642202]],oe=function(){var e=ce();return Object(a.jsxs)(W.a,{center:re,zoom:13,className:e.mapCont,children:[Object(a.jsx)(X.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),ie.map((function(e,t){return Object(a.jsx)(Y.a,{position:e,children:Object(a.jsxs)(Z.a,{children:["A pretty CSS3 popup. ",Object(a.jsx)("br",{})," Easily customizable.",t]})},t)}))]})},se=Object(l.a)({title:{marginBottom:"16px",marginTop:"8px"}}),le=function(){var e=se(),t=[{icon:"folder",text:"Files",cantidad:34,color:D.palette.secondary.main},{icon:"account_balance",text:"Places",cantidad:20,color:D.palette.info.main},{icon:"assignment_ind",text:"Assigments",cantidad:10,color:D.palette.success.main},{icon:"calendar_today",text:"Calendar",cantidad:12,color:D.palette.error.main}];return Object(a.jsx)("div",{children:Object(a.jsxs)(G.a,{container:!0,spacing:2,children:[Object(a.jsx)(G.a,{item:!0,xs:12,children:Object(a.jsx)(S.a,{children:Object(a.jsx)(m.a,{variant:"subtitle1",children:"Home"})})}),t.map((function(e,t){return Object(a.jsx)(G.a,{item:!0,xs:12,sm:6,md:3,children:Object(a.jsx)(Q,{icon:e.icon,text:e.text,cantidad:e.cantidad,color:e.color})},t)})),Object(a.jsx)(G.a,{item:!0,xs:12,children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(m.a,{variant:"h6",className:e.title,children:"Map with react-leaflet"}),Object(a.jsx)(oe,{})]})})]})})},je=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About"})})},be=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Maps"})})},de=Object(l.a)({root:{display:"flex"},toolbar:D.mixins.toolbar,content:{flexGrow:1,backgroundColor:D.palette.background.default,padding:D.spacing(3),background:"red"}}),xe=function(){var e=de(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=function(){i(!r)};return Object(a.jsx)(j.a,{theme:D,children:Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(k,{accionAbrir:o}),Object(a.jsx)(b.a,{smDown:!0,children:Object(a.jsx)(_,{variant:"permanent",open:!0})}),Object(a.jsx)(b.a,{mdUp:!0,children:Object(a.jsx)(_,{variant:"temporary",open:r,onClose:o})}),Object(a.jsxs)("div",{className:e.content,children:[Object(a.jsx)("div",{className:e.toolbar}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/",exact:!0,component:le}),Object(a.jsx)(x.a,{path:"/about",component:je}),Object(a.jsx)(x.a,{path:"/maps",component:be})]})]})]})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(xe,{})}),document.getElementById("root")),pe()}},[[94,1,2]]]);
//# sourceMappingURL=main.e2d2e42d.chunk.js.map