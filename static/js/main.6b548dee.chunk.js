(this["webpackJsonptest-rover"]=this["webpackJsonptest-rover"]||[]).push([[0],{121:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),i=a.n(n),r=a(10),o=a.n(r),s=(a(121),a(12)),l=a(161),j=a(193),d=a(197),b=a(36),p=a(13),x=a(27),h=a(5),u=a(164),m=a(165),O=a(166),g=a(167),f=a(58),v=a(168),y=a(169),C=a(95),k=a.n(C),w=a(94),S=a.n(w),N=Object(l.a)((function(e){var t;return{offset:e.mixins.toolbar,menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),titleLight:{color:S.a[200]},title:{flexGrow:1,textDecoration:"none"},appBar:(t={},Object(x.a)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(x.a)(t,"backgroundColor",e.palette.common.white),t)}})),z=Object(h.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(u.a),L=function(e){var t=N();return Object(c.jsx)(m.a,{className:t.appBar,children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(g.a,{color:"primary","aria-label":"Menu",className:t.menuButton,onClick:function(){e.accionAbrir()},children:Object(c.jsx)(k.a,{})}),Object(c.jsx)(b.b,{to:"/",className:t.title,children:Object(c.jsxs)(f.a,{variant:"h6",color:"primary",children:[Object(c.jsx)("span",{className:t.titleLight,children:"TEST"}),"ROVER"]})}),Object(c.jsx)(g.a,{"aria-label":"button",children:Object(c.jsx)(z,{badgeContent:4,color:"error",children:Object(c.jsx)(v.a,{color:"primary",children:"notifications"})})}),Object(c.jsx)(g.a,{"aria-label":"button",children:Object(c.jsx)(v.a,{color:"primary",children:"person"})}),Object(c.jsx)(y.a,{variant:"text",color:"primary",children:"Login"})]})})},M=a(28),B=a(202),E=a(175),A=a(195),P=a(199),R=a(174),D=a(170),F=a(171),H=a(172),U=a(173),I=Object(l.a)((function(e){return{icono:{color:"white"}}})),K=function(){var e=I();return Object(c.jsx)("div",{children:Object(c.jsxs)(D.a,{component:"nav",children:[[{icon:"home",text:"Home",route:"/"},{icon:"info",text:"About",route:"/about"},{icon:"maps",text:"Maps",route:"/maps"}].map((function(t,a){return Object(c.jsxs)(F.a,{button:!0,component:b.b,to:t.route,children:[Object(c.jsx)(H.a,{children:Object(c.jsx)(v.a,{className:e.icono,children:t.icon})}),Object(c.jsx)(U.a,{primary:t.text})]},a)})),Object(c.jsx)(R.a,{})]})})},T=Object(l.a)((function(e){return{drawer:{width:240,flexShink:0},drawerPaper:{width:240,background:e.palette.primary.main,color:"white"},toolbar:Object(M.a)(Object(M.a)({},e.mixins.toolbar),{},{display:"flex",justifyContent:"center",alignItems:"center"}),large:{width:e.spacing(22),height:e.spacing(22)},textWhite:{color:"white"}}})),W=function(e){var t=T();return Object(c.jsxs)(B.a,{className:t.drawer,classes:{paper:t.drawerPaper},anchor:"left",variant:e.variant,open:e.open,onClose:e.onClose?e.onClose:null,children:[Object(c.jsx)("div",{className:t.toolbar,children:Object(c.jsx)(f.a,{variant:"h5",children:Object(c.jsx)(E.a,{href:"https://github.com/kleyla",target:"_blank",rel:"noreferrer",className:t.textWhite,children:"KAREN"})})}),Object(c.jsx)(A.a,{display:"flex",justifyContent:"center",py:2,children:Object(c.jsx)(P.a,{alt:"Karen pic",src:"".concat("/test-rover-react","/me1.jpg"),className:t.large})}),Object(c.jsx)(R.a,{}),Object(c.jsx)(K,{})]})},_=a(101),G=Object(_.a)({palette:{primary:{main:"#9c27b0"},secondary:{main:"#3cd1c2"},info:{main:"#ffaa2c"},error:{main:"#f83e70"}},typography:{subtitle1:{color:"#9e9e9e"}}}),q=a(182),J=a(176),V=a(177),Y=a(81),Z=a(178),Q=Object(l.a)({litleBox:{backgroundColor:function(e){return e.color},display:"inline-block",padding:"8px"},icono:{fontSize:"45px",color:"white"}}),X=function(e){var t=Q(e);return Object(c.jsxs)(J.a,{children:[Object(c.jsx)(V.a,{children:Object(c.jsxs)(A.a,{display:"flex",flexDirection:"row",children:[Object(c.jsx)(Y.a,{className:t.litleBox,elevation:0,children:Object(c.jsx)(v.a,{className:t.icono,children:e.icon})}),Object(c.jsxs)(A.a,{flex:1,display:"flex",flexDirection:"column",children:[Object(c.jsx)(f.a,{display:"block",variant:"overline",align:"right",children:e.text}),Object(c.jsx)(f.a,{variant:"h5",align:"right",children:e.cantidad})]})]})}),Object(c.jsx)(Z.a,{children:Object(c.jsx)(y.a,{size:"small",color:"primary",children:"More"})})]})},$=a(179),ee=a(200),te=a(180),ae=a(181),ce=(a(63),a(16)),ne=a.n(ce),ie=(a(64),a(42)),re=a(43),oe=ne.a.icon({iconUrl:ie.a,shadowUrl:re.a});ne.a.Marker.prototype.options.icon=oe;var se=Object(l.a)((function(e){return{mapCont:{width:"100%",height:"400px"}}})),le=[-17.7865297,-63.1795071],je=[[-17.7804443,-63.1879617],[-17.7838959,-63.1823237],[-17.7757732,-63.1928955],[-17.7754388,-63.2003477],[-17.789106,-63.1642202]],de=function(){var e=se();return Object(c.jsxs)($.a,{center:le,zoom:13,className:e.mapCont,children:[Object(c.jsx)(ee.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),je.map((function(e,t){return Object(c.jsx)(te.a,{position:e,children:Object(c.jsxs)(ae.a,{children:["A pretty CSS3 popup. ",Object(c.jsx)("br",{})," Easily customizable.",t]})},t)}))]})},be=Object(l.a)({title:{marginBottom:"16px",marginTop:"8px"}}),pe=function(){var e=be(),t=[{icon:"folder",text:"Files",cantidad:34,color:G.palette.secondary.main},{icon:"account_balance",text:"Places",cantidad:20,color:G.palette.info.main},{icon:"assignment_ind",text:"Assigments",cantidad:10,color:G.palette.success.main},{icon:"calendar_today",text:"Calendar",cantidad:12,color:G.palette.error.main}];return Object(c.jsx)("div",{children:Object(c.jsxs)(q.a,{container:!0,spacing:2,children:[Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsx)(A.a,{children:Object(c.jsx)(f.a,{variant:"subtitle1",children:"Home"})})}),t.map((function(e,t){return Object(c.jsx)(q.a,{item:!0,xs:12,sm:6,md:3,children:Object(c.jsx)(X,{icon:e.icon,text:e.text,cantidad:e.cantidad,color:e.color})},t)})),Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(f.a,{variant:"h6",className:e.title,children:"Map with react-leaflet"}),Object(c.jsx)(de,{})]})})]})})},xe=a(183),he=a(184),ue=a(185),me=a(186),Oe=a(75),ge=a.n(Oe),fe=Object(l.a)((function(e){return{imagen:{width:"100%",height:"auto"},number:{backgroundColor:e.palette.secondary.main},icon:{color:"rgba(255, 255, 255, 0.54)"},gridList:{width:"100%",height:"auto"}}})),ve=function(){var e=fe();return Object(c.jsxs)(q.a,{container:!0,spacing:2,children:[Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{variant:"h5",color:"primary",align:"center",children:"About me..."})}),Object(c.jsx)(q.a,{item:!0,xs:12,sm:12,md:5,lg:6,children:Object(c.jsx)(xe.a,{cellHeight:"auto",className:e.gridList,children:Object(c.jsxs)(he.a,{cols:2,children:[Object(c.jsx)("img",{src:"".concat("/test-rover-react","/me/hackmeetonglp.jpg"),alt:"girls",className:e.imagen}),Object(c.jsx)(ue.a,{title:"Hackmeeting 2019, La paz",subtitle:Object(c.jsx)("span",{children:"by: me"}),actionIcon:Object(c.jsx)(g.a,{"aria-label":"info",className:e.icon,children:Object(c.jsx)(ge.a,{})})})]})})}),Object(c.jsx)(q.a,{item:!0,xs:12,sm:12,md:7,lg:6,children:[{title:"En principio...",text:"Mi nombre es Karen Rodriguez, soy de Bolivia."},{title:"Estudios...",text:"Estudio Ingeniera en Sistemas en la Universidad Aut\xf3noma Gabriel Ren\xe9 Moreno. Me gusta estar en constante aprendizaje, por ello he aprendido varios idiomas como ingles, frances y portugues, tengo planeado seguir con aleman."},{title:"Hobbies",text:"Me encanta pintar con acuarelas y hacer lettering. En deportes solo me gusta trotar y nadar."},{title:"Comunidades",text:"Soy fanatica de apoyar a comunidades de programacion y Software Libre como la GDG, y Nucleo Linux."}].map((function(t,a){return Object(c.jsxs)(F.a,{children:[Object(c.jsx)(me.a,{children:Object(c.jsxs)(P.a,{className:e.number,children:[a+1,"."]})}),Object(c.jsx)(U.a,{primary:t.title,secondary:Object(c.jsx)(f.a,{children:t.text})})]},a)}))})]})},ye=Object(l.a)((function(e){return{imagen:{width:"100%",height:"auto"},icon:{color:"rgba(255, 255, 255, 0.54)"},gridList:{width:"100%",height:"auto"}}})),Ce=function(){var e=ye();return Object(c.jsxs)(q.a,{container:!0,spacing:1,children:[Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsx)(A.a,{my:2,children:Object(c.jsx)(f.a,{variant:"h5",color:"primary",align:"center",children:"Pictures"})})}),[{src:"/innovaw.jpg",title:"Innova Women 2019",by:"Someone"},{src:"/feriaLibro.jpg",title:"Feria del libro 2019, Santa Cruz, Bolivia",by:"Someone"},{src:"/flisol2019.jpg",title:"FLISOL 2019, Santa Cruz, Bolivia",by:"Someone"},{src:"/hackmeetinglp2019.jpg",title:"Hackmeeting 2019, La Paz, Bolivia",by:"Someone"}].map((function(t,a){return Object(c.jsx)(q.a,{item:!0,xs:12,sm:6,md:3,children:Object(c.jsx)(xe.a,{cellHeight:"auto",cols:1,className:e.gridList,children:Object(c.jsxs)(he.a,{cols:1,children:[Object(c.jsx)("img",{src:"".concat("/test-rover-react","/me/").concat(t.src),alt:"girls",className:e.imagen}),Object(c.jsx)(ue.a,{title:t.title,subtitle:Object(c.jsxs)("span",{children:["by: ",t.by]}),actionIcon:Object(c.jsx)(g.a,{"aria-label":"info",className:e.icon,children:Object(c.jsx)(ge.a,{})})})]},a)})})}))]})},ke=a(96),we=a.n(ke),Se=a(97),Ne=a.n(Se),ze=a(98),Le=a.n(ze),Me=a(99),Be=a.n(Me),Ee=Object(l.a)((function(e){return{foo:{backgroundColor:"red",margin:0},list:{display:"flex",justifyContent:"center"},listHorizontal:{display:"inline-block",backgroundColor:"red"}}})),Ae=function(){Ee();var e=[{icon:Object(c.jsx)(we.a,{}),link:"https://github.com/kleyla",text:"Kleyla"},{icon:Object(c.jsx)(Ne.a,{}),link:"https://www.facebook.com/karenleyla.rodriguez",text:"Karen Rodriguez"},{icon:Object(c.jsx)(Le.a,{}),link:"https://www.instagram.com/karen.codes?r=nametag",text:"Karen Rodriguez"},{icon:Object(c.jsx)(Be.a,{}),link:"https://twitter.com/KLEYLA1",text:"Karen Rodriguez"}];return Object(c.jsxs)(q.a,{container:!0,spacing:2,children:[e.map((function(e,t){return Object(c.jsx)(q.a,{item:!0,xs:12,sm:6,md:3,children:Object(c.jsx)(q.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(c.jsx)(E.a,{href:e.link,target:"_blank",rel:"noreferrer",children:Object(c.jsxs)(F.a,{children:[Object(c.jsx)(H.a,{children:e.icon}),Object(c.jsx)(U.a,{children:e.text})]})})})},t)})),Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{variant:"h6",align:"center",children:"\xa9 Karen Rodriguez"})})]})},Pe=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(q.a,{container:!0,spacing:2,children:Object(c.jsx)(q.a,{item:!0,sx:12,children:Object(c.jsx)(f.a,{variant:"subtitle1",children:"About"})})}),Object(c.jsx)(ve,{}),Object(c.jsx)("br",{}),Object(c.jsx)(Ce,{}),Object(c.jsxs)(A.a,{my:4,children:[Object(c.jsx)(R.a,{}),Object(c.jsx)(Ae,{})]})]})},Re=a(20),De=a(198),Fe=a(187),He=ne.a.icon({iconUrl:ie.a,shadowUrl:re.a});ne.a.Marker.prototype.options.icon=He;var Ue=Object(l.a)((function(e){return{mapCont:{width:"100%",height:"500px"}}})),Ie=function(e){var t=Ue();return Object(c.jsxs)($.a,{center:e.coords,zoom:13,className:t.mapCont,children:[Object(c.jsx)(ee.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(c.jsx)(te.a,{position:e.coords,children:Object(c.jsxs)(ae.a,{children:["A pretty CSS3 popup. ",Object(c.jsx)("br",{})," Easily customizable."]})})]})},Ke=function(){var e=Object(p.f)(),t=e.title,a=e.lat,n=e.lng,i=[parseFloat(a),parseFloat(n)];return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{variant:"subtitle1",children:t}),Object(c.jsx)(A.a,{mt:2,children:Object(c.jsx)(Ie,{coords:i})})]})},Te=ne.a.icon({iconUrl:ie.a,shadowUrl:re.a});ne.a.Marker.prototype.options.icon=Te;var We=Object(l.a)((function(e){return{mapCont:{width:"300px",height:"300px"},mapBox:{display:"flex",flex:1,justifyContent:"center"},expand:{marginLeft:"auto",textDecoration:"none"}}})),_e=function(e){var t=We(),a=i.a.useState(!1),n=Object(s.a)(a,2),r=n[0],o=n[1];return Object(c.jsxs)(J.a,{children:[Object(c.jsx)(Fe.a,{in:r,collapsedHeight:250,children:Object(c.jsx)(V.a,{children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(A.a,{mb:1,children:Object(c.jsx)(f.a,{variant:"h6",align:"center",children:e.place.title})}),Object(c.jsx)("div",{className:t.mapBox,children:Object(c.jsxs)($.a,{center:e.place.coords,zoom:16,className:t.mapCont,children:[Object(c.jsx)(ee.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(c.jsx)(te.a,{position:e.place.coords,children:Object(c.jsxs)(ae.a,{children:["A pretty CSS3 popup. ",Object(c.jsx)("br",{})," Easily customizable."]})})]})}),Object(c.jsxs)(A.a,{mt:2,children:[Object(c.jsx)(f.a,{variant:"h6",children:"Coordenadas:"}),Object(c.jsxs)(f.a,{variant:"subtitle1",children:[e.place.coords[0]," ",e.place.coords[1]]}),Object(c.jsx)(f.a,{variant:"h6",children:"Description:"}),Object(c.jsx)(f.a,{variant:"body1",children:e.place.description})]})]})})}),Object(c.jsxs)(Z.a,{disableSpacing:!0,children:[Object(c.jsx)(g.a,{color:"primary",onClick:function(){o(!r)},children:r?Object(c.jsx)(v.a,{children:"keyboard_arrow_up"}):Object(c.jsx)(v.a,{children:"keyboard_arrow_down"})}),Object(c.jsx)(b.b,{to:"/map/".concat(e.place.title,"/").concat(e.place.coords[0].toString(),"/").concat(e.place.coords[1].toString()),className:t.expand,children:Object(c.jsx)(y.a,{size:"small",color:"primary",children:"Watch more..."})})]})]})},Ge=a(188),qe=a(189),Je=a(190),Ve=a(194),Ye=a(192),Ze=a(100),Qe=a.n(Ze),Xe=a(102),$e=ne.a.icon({iconUrl:ie.a,shadowUrl:re.a});ne.a.Marker.prototype.options.icon=$e;var et={lat:-17.7834936,lng:-63.1820853},tt=Object(l.a)((function(e){return{mapCont:{width:"100%",height:"300px"}}}));function at(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),i=a[0],r=a[1],o=Object(n.useState)(et),l=Object(s.a)(o,2),j=l[0],d=l[1],b=Object(n.useRef)(null),p=Object(n.useMemo)((function(){return{dragend:function(){var t=b.current;null!=t&&(d(t.getLatLng()),e.getCoords([t.getLatLng().lat,t.getLatLng().lng]))}}}),[]),x=Object(n.useCallback)((function(){r((function(e){return!e}))}),[]);return Object(c.jsx)(te.a,{draggable:i,eventHandlers:p,position:j,ref:b,children:Object(c.jsx)(ae.a,{minWidth:90,children:Object(c.jsx)("span",{onClick:x,children:i?"Marker is draggable":"Click here to make marker draggable"})})})}var ct=function(e){var t=tt();return Object(c.jsxs)($.a,{center:et,zoom:13,scrollWheelZoom:!1,className:t.mapCont,children:[Object(c.jsx)(ee.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(c.jsx)(at,{getCoords:e.getCoords})]})},nt=(a(129),Object(l.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},form:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}))),it=function(e){var t=nt(),a=Object(Xe.a)(),i=a.register,r=a.handleSubmit,o=a.errors,l=Object(n.useState)([-16.4957409,-68.1334839]),j=Object(s.a)(l,2),d=j[0],b=j[1];return Object(c.jsxs)(Ge.a,{onClose:e.handleClose,"aria-labelledby":"customized-dialog-title",open:e.open,fullWidth:!0,children:[Object(c.jsxs)(qe.a,{id:"customized-dialog-title",className:t.root,children:[Object(c.jsx)(f.a,{children:"Add new place"}),Object(c.jsx)(g.a,{onClick:e.handleClose,className:t.closeButton,children:Object(c.jsx)(Qe.a,{})})]}),Object(c.jsxs)("form",{noValidate:!0,onSubmit:r((function(t,a){var c=Object(M.a)(Object(M.a)({},t),{},{coords:d});e.addPlace(c),a.target.reset(),e.handleClose(),e.handleClickSnackbar()})),className:t.form,children:[Object(c.jsx)(Je.a,{dividers:!0,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)(Ve.a,{id:"title",name:"title",label:"Title",variant:"outlined",error:!!o.title,helperText:o.title?o.title.message:"",inputRef:i({required:{value:!0,message:"Campo requerido"}}),className:"fullWidth"})}),Object(c.jsx)("div",{children:Object(c.jsx)(Ve.a,{id:"description",name:"description",label:"Description",variant:"outlined",error:!!o.description,helperText:o.description?o.description.message:"",inputRef:i({required:{value:!0,message:"Campo requerido"}}),className:"fullWidth",multiline:!0,rows:3})}),Object(c.jsx)("div",{children:Object(c.jsx)(ct,{getCoords:function(e){b(e)}})})]})}),Object(c.jsx)(Ye.a,{children:Object(c.jsx)(y.a,{type:"submit",autoFocus:!0,color:"primary",children:"Save changes"})})]})]})},rt=a(196);function ot(e){return Object(c.jsx)(rt.a,Object(M.a)({elevation:6,variant:"filled"},e))}var st=Object(l.a)({title:{flexGrow:1}}),lt=function(){var e=st(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([{title:"Plaza 24 de Septiembre, Santa Cruz Bolivia",coords:[-17.7834936,-63.1820853],description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?"},{title:"Plaza Murillo, La Paz Bolivia",coords:[-16.4957409,-68.1334839],description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?"},{title:"Copacabana, La Paz Bolivia",coords:[-16.1629986,-69.0899133],description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?"}]),j=Object(s.a)(l,2),d=j[0],b=j[1],p=i.a.useState(!1),x=Object(s.a)(p,2),h=x[0],u=x[1],m=function(e,t){"clickaway"!==t&&u(!1)};return Object(c.jsxs)(q.a,{container:!0,spacing:2,children:[Object(c.jsx)(q.a,{item:!0,xs:12,children:Object(c.jsxs)(A.a,{display:"flex",flexDirection:"row",children:[Object(c.jsx)(f.a,{variant:"subtitle1",className:e.title,children:"Maps"}),Object(c.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){o(!0)},children:"Add new place"}),Object(c.jsx)(it,{open:r,handleClose:function(){o(!1)},addPlace:function(e){console.log(e),b([].concat(Object(Re.a)(d),[e]))},handleClickSnackbar:function(){u(!0)}})]})}),d.map((function(e,t){return Object(c.jsx)(q.a,{item:!0,xs:12,sm:6,md:4,children:Object(c.jsx)(_e,{place:e})},t)})),Object(c.jsx)(De.a,{open:h,autoHideDuration:6e3,onClose:m,children:Object(c.jsx)(ot,{onClose:m,severity:"success",children:"Place added successfully!"})})]})},jt=Object(l.a)({root:{display:"flex"},toolbar:G.mixins.toolbar,content:{flexGrow:1,backgroundColor:G.palette.background.default,padding:G.spacing(3),background:"red"}}),dt=function(){var e=jt(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],r=a[1],o=function(){r(!i)};return Object(c.jsx)(j.a,{theme:G,children:Object(c.jsx)(b.a,{basename:"/",children:Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(L,{accionAbrir:o}),Object(c.jsx)(d.a,{smDown:!0,children:Object(c.jsx)(W,{variant:"permanent",open:!0})}),Object(c.jsx)(d.a,{mdUp:!0,children:Object(c.jsx)(W,{variant:"temporary",open:i,onClose:o})}),Object(c.jsxs)("div",{className:e.content,children:[Object(c.jsx)("div",{className:e.toolbar}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/",exact:!0,component:pe}),Object(c.jsx)(p.a,{path:"/about",component:Pe}),Object(c.jsx)(p.a,{path:"/maps",component:lt}),Object(c.jsx)(p.a,{path:"/map/:title/:lat/:lng",component:Ke})]})]})]})})})},bt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,203)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(dt,{})}),document.getElementById("root")),bt()},64:function(e,t,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.6b548dee.chunk.js.map