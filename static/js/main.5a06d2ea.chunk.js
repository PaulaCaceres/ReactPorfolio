(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=a(12),l=a(13),s=a(15),m=a(14),u=a(34),d=a(16),p=a(91),h=a(154),g=a(155),b=(a(101),a(10)),f=a(158);var v=a(144),j=a(145),O=a(146),E=a(80),y=a.n(E);var k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(v.a,{fluid:!0,className:e.landing},r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("img",{src:y.a,className:e.titleStyle,alt:"Logo"})))))}}]),a}(n.Component),x=Object(b.a)((function(e){return Object(f.a)({landing:{backgroundColor:"#f79f02",height:"100vh"},titleStyle:{height:"300px",width:"300px"}})}))(k),I=a(149),w=a(85),S=a.n(w);var N=a(148);var C=Object(b.a)((function(e){return Object(f.a)({root:{backgroundColor:"#c97b63","&:hover":{backgroundColor:"#ffddc1"},padding:"0.3rem 0.8rem 0.3rem 0.8rem",borderRadius:"2rem"}})}))(N.a),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,{fluid:!0,className:e.about},r.a.createElement(j.a,{className:"justify-content"},r.a.createElement(O.a,{sm:8},r.a.createElement("h1",{className:e.aboutTitle},"About me"),r.a.createElement("p",{className:e.aboutDescription},"I'm a Developer and an Image and Sound Designer. As an Image and Sound Designer of the University of Buenos Aires I learned about cinema, photography, art, sound. I worked freelance for different companies, individuals, and for art biennials as a videographer, photographer and production assistant. You can visit some of my projects at github."),r.a.createElement(C,{variant:"contained",color:"primary",className:e.projectsBtn,href:"https://paulacaceres.github.io/paulacaceresweb/"},"Projects")),r.a.createElement(O.a,{sm:4},r.a.createElement(I.a,{src:S.a,thumbnail:!0,alt:"mypicture",className:e.picture}))))}}]),a}(r.a.Component),B=Object(b.a)((function(e){return Object(f.a)({about:{height:"100vh",padding:"6rem"},aboutTitle:{textAlign:"left",color:"black",padding:"2rem"},aboutDescription:{textAlign:"left",padding:"1rem 2rem 2rem 2rem"},projectsBtn:{backgroundColor:"#c97b63","&:hover":{backgroundColor:"#ffddc1"},padding:"0.5rem 2rem 0.5rem 2rem",borderRadius:"2rem"},picture:{border:"none"}})}))(A),L=a(150);var D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(L.a,{fluid:!0,className:e.footer},r.a.createElement("p",null,"Get in touch"," ",r.a.createElement("a",{href:"mailto:paulacaceres.dis@gmail.com",target:"_blank",rel:"noopener noreferrer"},"paulacaceres.dis@gmail.com"),"."))}}]),a}(n.Component),T=Object(b.a)((function(e){return Object(f.a)({footer:{height:"20vh",marginBottom:"0",backgroundColor:"black"},p:{color:"white"},a:{color:"white",textDecoration:"none","&:hover":{color:"#f79f02"},"&:active":{color:"#f79f02"}}})}))(D);var z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.backdrop,onClick:this.props.click})}}]),a}(n.Component),M=Object(b.a)((function(e){return Object(f.a)({backdrop:{position:"fixed",width:"100%",height:"100%",top:"0",left:"0",background:"rgba($color: #000000, $alpha: 0.3)",zIndex:"200"}})}))(z),H=a(86),F=a.n(H);var P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={open:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props!==e&&(this.props.show?this.setState({open:!0}):this.setState({open:!1}))}},{key:"render",value:function(){var e=this.props.classes,t=e.sideBar;return this.state.open&&(t=e.sideBarOpen),r.a.createElement("nav",{className:t},r.a.createElement("div",{className:e.headerSidebar},r.a.createElement("img",{src:F.a,alt:"Logo",style:{width:"70%",height:"70%"},className:e.headerSidebarLogo})),r.a.createElement("ul",{className:e.ul},r.a.createElement("li",{className:e.li},r.a.createElement(u.b,{className:e.link,to:"/"},"Home")),r.a.createElement("li",{className:e.li},r.a.createElement(u.b,{className:e.link,to:"/gallery"},"Gallery")),r.a.createElement("li",{className:e.li},r.a.createElement("a",{className:e.link,href:"/"},"About me")),r.a.createElement("li",{className:e.li},r.a.createElement("a",{className:e.link,href:"https://paulacaceres.github.io/paulacaceresweb/",target:"_blank",rel:"noopener noreferrer"},"Projects")),r.a.createElement("li",{className:e.li},r.a.createElement("a",{className:e.link,href:"mailto:paulacaceres.dis@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Get in touch"))))}}]),a}(n.Component),R=Object(b.a)((function(e){return Object(f.a)({sideBar:{height:"100%",background:"white",boxShadow:"1px 0px 7px rgba($color: #000000, $alpha: 0.5)",position:"fixed",top:"0",left:"0",width:"70%",maxWidth:"400px",zIndex:"300",transform:"translateX(-100%)",transition:"transform 0.3s ease-out"},sideBarOpen:{height:"100%",background:"white",boxShadow:"1px 0px 7px rgba($color: #000000, $alpha: 0.5)",position:"fixed",top:"0",left:"0",width:"70%",maxWidth:"400px",zIndex:"300",transition:"transform 0.3s ease-out",transform:"translateX(0)"},headerSidebar:{height:"10vh",backgroundColor:"black"},headerSidebarLogo:{height:"10%",width:"10%"},ul:{height:"100%",listStyle:"none",display:"flex",flexDirection:"column",justifyContent:"center"},li:{margin:"0.5rem 0"},link:{color:"black",textDecoration:"none",fontSize:"1.5rem","&:hover":{color:" #f79f02"},"&:active":{color:" #f79f02"}},contact:{color:"black"}})}))(P);var $=r.a.forwardRef((function(e,t){var a=e.classes;return r.a.createElement("button",{className:a.toggleBtn,onClick:e.click},r.a.createElement("div",{className:a.toggleBtnLine}),r.a.createElement("div",{className:a.toggleBtnLine}),r.a.createElement("div",{className:a.toggleBtnLine}))})),G=Object(b.a)((function(e){return Object(f.a)({toggleBtn:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"24px",width:"36px",background:"transparent",border:"none",cursor:"pointer",padding:"0",boxSizing:"border-box",focus:{outline:"none"}},toggleBtnLine:{width:"30px",height:"2px",background:"white"}})}))($);var U=r.a.forwardRef((function(e,t){var a=e.classes;return r.a.createElement("header",{className:a.toolbar},r.a.createElement("nav",{className:a.toolbarNavigation},r.a.createElement("div",null,r.a.createElement(G,{click:e.sidebarClickHandler})),r.a.createElement("div",{className:a.toolbarLogo},r.a.createElement("a",{className:a.link,href:"/"}," ")),r.a.createElement("div",{className:a.spacer})))})),W=Object(b.a)((function(e){return Object(f.a)({toolbar:{position:"fixed",top:"0",left:"0",width:"100%",height:"56px",zIndex:"100"},toolbarNavigation:{display:"flex",height:"100%",alignItems:"center",padding:"0 1rem"},toolbarLogo:{marginLeft:"1rem"},link:{color:"white",textDecoration:"none",fontSize:"1.5rem"},spacer:{flex:"1"},toolbarNavigationItems:{ul:{listStyle:"none",margin:"0",padding:"0",display:"flex"},li:{padding:"0 0.5rem"},a:{color:"white",textDecoration:"none",fontSize:"1.5rem"},"&:hover":{color:"orange"},"&:active":{color:"orange"}}})}))(U),_=a(33),J=a(66),K=a.n(J).a.initializeApp({apiKey:"AIzaSyD7FQPkdxH7hKowCogwdhgHGt9-YBtT9TU",authDomain:"react-portfolio-57f4f.firebaseapp.com",databaseURL:"https://react-portfolio-57f4f.firebaseio.com",projectId:"react-portfolio-57f4f",storageBucket:"react-portfolio-57f4f.appspot.com",messagingSenderId:"345988180062",appId:"1:345988180062:web:50750bab96eb9292526ccf"}),X=K.database().ref(),Y=K.database();K.storage().ref("/pictures");var q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getImages=function(){X.on("child_added",(function(e){var t=e.val();t.map((function(e){"portrait"===e.type?n.setState({portraitImages:[].concat(Object(_.a)(n.state.portraitImages),[e])}):"landscape"===e.type?n.setState({landscapeImages:[].concat(Object(_.a)(n.state.landscapeImages),[e])}):n.setState({productsImages:[].concat(Object(_.a)(n.state.productsImages),[e])})})),n.setState({images:t,isLoaded:!0})}))},n.state={images:[],isLoaded:!1,portraitImages:[],landscapeImages:[],productsImages:[],addToFav:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this.props.classes;return this.state.isLoaded?r.a.createElement(v.a,{fluid:!0,className:e.images,style:{height:"100vh"}},r.a.createElement("h1",{className:e.imagesTitle},"Portfolio"),r.a.createElement(u.b,{to:"/gallery"},"Gallery"),r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(O.a,{sm:4},r.a.createElement(ee,{imagesArray:this.state.portraitImages})),r.a.createElement(O.a,{sm:4},r.a.createElement(ee,{imagesArray:this.state.landscapeImages})),r.a.createElement(O.a,{sm:4},r.a.createElement(ee,{imagesArray:this.state.productsImages})))):r.a.createElement("div",null,"Is loading..")}}]),a}(r.a.Component),Q=Object(b.a)((function(e){return Object(f.a)({imagesTitle:{textAlign:"left",color:"black",marginTop:"2rem",padding:"2rem"},about:{height:"100vh",padding:"6rem"}})}))(q),Z=a(49);var V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).openModal=function(){n.setState({modalShow:!0})},n.closeModal=function(){n.setState({modalShow:!1})},n.state={imagesArray:[],isLoaded:!1,modalShow:!1},n.closeModal=n.closeModal.bind(Object(Z.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({imagesArray:this.props.imagesArray,isLoaded:!0})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.isLoaded,o=a.imagesArray;return n?r.a.createElement("div",{className:t.imageContainer},r.a.createElement("img",{className:t.imageDisplay,src:o[0].url,alt:"img",onClick:function(){return e.openModal()}}),r.a.createElement(oe,{show:this.state.modalShow,onHide:function(){return e.closeModal()},imagesArray:this.state.imagesArray})):r.a.createElement("div",null,"Is loading..")}}]),a}(n.Component),ee=Object(b.a)((function(e){return Object(f.a)({imageContainer:{height:"100vh",justifyContent:"center"},imageDisplay:{width:"100%",height:"80%",marginTop:"5rem",verticalAlign:"middle",objectFit:"cover",objectPosition:"center"}})}))(V),te=a(46),ae=a(62);var ne=Object(b.a)((function(e){return Object(f.a)({})}))((function(e){var t=Object(n.useState)(0),a=Object(te.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(e.images),l=Object(te.a)(i,2),s=l[0];l[1],e.classes;return r.a.createElement(ae.a,{activeIndex:o,onSelect:function(e,t){c(e)},indicators:!1},s.map((function(e){return r.a.createElement(ae.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.url,alt:"First slide"}),r.a.createElement(ae.a.Caption,null,r.a.createElement("p",null,e.title)))})))})),re=a(71);var oe=Object(b.a)((function(e){return Object(f.a)({})}))((function(e){var t=Object(n.useState)(e.imagesArray),a=Object(te.a)(t,2),o=a[0];a[1];return r.a.createElement(re.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(re.a.Body,null,r.a.createElement(ne,{images:o})))})),ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100vh"},className:"App"},r.a.createElement(x,null),r.a.createElement("main",null,r.a.createElement(Q,null),r.a.createElement(B,null)),r.a.createElement(T,null))}}]),a}(n.Component),ie=Object(b.a)((function(e){return Object(f.a)({})}))(ce),le=a(151);var se=a(152),me=a(157),ue=a(153),de=a(159),pe=a(156),he=a(90),ge=a.n(he),be=a(89),fe=a.n(be),ve=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getImages=function(){X.on("child_added",(function(e){var t=e.val();t.map((function(e){"portrait"===e.type?n.setState({portraitImages:[].concat(Object(_.a)(n.state.portraitImages),[e])}):"landscape"===e.type?n.setState({landscapeImages:[].concat(Object(_.a)(n.state.landscapeImages),[e])}):n.setState({productsImages:[].concat(Object(_.a)(n.state.productsImages),[e])})})),n.setState({images:t,isLoaded:!0})}))},n.addToFav=function(e){var t;if(Y.ref("/pictures/".concat(e,"/likes")).on("value",(function(e){t=e.val()})),n.state.likesAdded.includes(e)){console.log("lo tiene");var a,r=n.state.likesAdded;console.log("currentArray I",r),a=r.filter((function(t){return t!==e})),console.log("newArray II",a),n.setState({likesAdded:a});var o={};o["/pictures/".concat(e,"/likes")]=t-1,X.update(o)}else{console.log("NO lo tiene"),n.setState({likesAdded:[].concat(Object(_.a)(n.state.likesAdded),[e])});var c={};c["/pictures/".concat(e,"/likes")]=t+1,X.update(c)}n.getImages()},n.state={images:[],isLoaded:!1,portraitImages:[],landscapeImages:[],productsImages:[],likesAdded:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this,t=Object(le.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:500,height:450,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}),a=this.state,n=a.isLoaded,o=a.images;return n?r.a.createElement("div",{className:t.root},r.a.createElement(se.a,{cellHeight:200,spacing:1,className:t.gridList},o.map((function(a,n){return r.a.createElement(me.a,{key:a.title,cols:a.featured?2:1,rows:a.featured?2:1},r.a.createElement("img",{src:a.url,alt:a.title}),r.a.createElement(ue.a,{title:a.title,titlePosition:"top",actionIcon:r.a.createElement(de.a,{label:a.likes,control:r.a.createElement(pe.a,{onClick:function(){e.addToFav(n)},icon:r.a.createElement(fe.a,null),checkedIcon:r.a.createElement(ge.a,null),name:"cBox"})}),actionPosition:"left",className:t.titleBar}))})))):r.a.createElement("div",null,"Is loading..")}}]),a}(n.Component);a(118);var je=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Gallery"),r.a.createElement(ve,null))}}]),a}(n.Component),Oe=Object(b.a)((function(e){return Object(f.a)({})}))(je);var Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).sidebarToggleClickHandler=function(){e.setState((function(e){return{sidebarOpen:!e.sidebarOpen}}))},e.backdropClickHandler=function(){e.setState({sidebarOpen:!1})},e.state={sidebarOpen:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.setState({sidebarOpen:!1})}},{key:"render",value:function(){var e;return this.state.sidebarOpen&&(e=r.a.createElement(M,{click:this.backdropClickHandler})),r.a.createElement("div",null,r.a.createElement(W,{sidebarClickHandler:this.sidebarToggleClickHandler}),r.a.createElement(R,{show:this.state.sidebarOpen}),e)}}]),a}(n.Component),ye=Object(d.f)((function(e){return r.a.createElement(Ee,e)}));a(119),a(79);var ke=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:Object(p.a)({sizes:{column:{maxWidth:"90%",width:"20rem",marginLeft:"5vw",marginRight:"5vw"}},props:{MuiTypography:{variantMapping:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"span",body2:"span"}}},typography:{fontFamily:["DMSans","BasierCircle","BasierSquare","NotoSansJP","Roboto","Oxygen","Ubuntu"].join(","),primary:{main:"black"},secondary:{light:"#8F9BAE",main:"#3C4858"},highlighted:{main:"#2F84DB"},button:{textTransform:"none"},toolbarItem:{fontSize:"1rem"}},palette:{primary:{main:"#4C35D8"},secondary:{main:"#467EDD"}}})},r.a.createElement(g.a,null),r.a.createElement(u.a,null,r.a.createElement(ye,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:ie}),r.a.createElement(d.a,{path:"/home",component:ie}),r.a.createElement(d.a,{path:"/gallery",component:Oe}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/Logo-nombre-blanco.d38d66ac.svg"},85:function(e,t,a){e.exports=a.p+"static/media/mypic.c5f94649.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/Logo-iniciales-blanco.d5274d4c.svg"},96:function(e,t,a){e.exports=a(120)}},[[96,1,2]]]);
//# sourceMappingURL=main.5a06d2ea.chunk.js.map