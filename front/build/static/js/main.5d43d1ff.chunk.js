(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),s=a.n(i),o=a(39),l=a(8),c=a(1),m=a(2),u=a(4),d=a(3),p=a(5),h=(a(25),a(26),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).clicked=function(){a.props.history.push("/cupitip/"+a.props.tip._id)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tipInList container-flex disable-select",onClick:this.clicked.bind(this)},r.a.createElement("div",{className:"row tipTitle"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("div",{className:"numeroNivel mx-auto"},r.a.createElement("div",{className:"txtNumeroNivel"},"N"+this.props.tip.nivel))),r.a.createElement("div",{className:"col-sm-10 text-left my-auto txtNombre"},r.a.createElement("div",{className:"row"},this.props.tip.nombre))),r.a.createElement("div",{className:"row tags"},r.a.createElement("div",{className:"col-sm-9 text-left"},r.a.createElement("label",{className:"tema"},this.props.tip.tema)),r.a.createElement("div",{className:" col-sm-3 text-right parLikes"},r.a.createElement("div",{className:"likes"},this.props.tip.likes," ",r.a.createElement("span",{className:"fas fa-star"})))))}}]),t}(n.Component)),v=Object(o.d)(h),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.showFilter()}},{key:"renderCols",value:function(e,t){for(var a="col-sm-"+12/e.length+" text-center",n=[],i=0;i<e.length;i++)n.push(r.a.createElement("div",{className:a,key:"col"+i},t(e[i])));return n}},{key:"renderElems",value:function(e){return e.map((function(e){return r.a.createElement(v,{key:"TipInList"+e._id,tip:e})}))}},{key:"render",value:function(){var e=window.innerWidth,t=1;e>=768&&t++,e>=1200&&t++;for(var a=[],n=0;n<t;n++)a.push([]);for(var i=0;i<this.props.tips.length;i++)a[i%t].push(this.props.tips[i]);return r.a.createElement("div",{className:"container-fluid",id:"tipList"},r.a.createElement("div",{className:"row"},this.renderCols(a,this.renderElems)))}}]),t}(n.Component),b=Object(o.d)(f),E=(a(32),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).clickAuth=function(){a.props.history.push("/Auth")},a.clickOut=function(){a.props.handleAuthentication(!1,void 0)},a.clickCreate=function(){a.props.history.push("/CreateTip")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderFiltrar",value:function(e){if(e)return r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"collapse","data-target":"#collapseFilters","aria-expanded":"false","aria-controls":"collapseFilters"},"Filtrar")}},{key:"renderNivel",value:function(e){var t=this;if(!0===e.estado){return r.a.createElement("div",{key:"NivButt"+e.nombre,className:"btn btnnivel btn-primary",onClick:function(){for(var a=t.props.filtros,n=0;n<a.nivel.length;n++)a.nivel[n].nombre===e.nombre&&(a.nivel[n].estado=!1);t.props.actualizarFiltros(a)}},"Nivel ",e.nombre)}return r.a.createElement("div",{key:"NivButtF"+e.nombre,className:"btn btnnivel btn-outline-primary",onClick:function(){for(var a=t.props.filtros,n=0;n<a.nivel.length;n++)a.nivel[n].nombre===e.nombre&&(a.nivel[n].estado=!0);t.props.actualizarFiltros(a)}},"Nivel ",e.nombre)}},{key:"renderNiveles",value:function(e){var t=this;if(void 0!==e)return e.map((function(e){return t.renderNivel(e)}))}},{key:"actualizarNombre",value:function(e){var t=this.props.filtros;t.nombre=e.target.value,this.props.actualizarFiltros(t)}},{key:"actualizarTema",value:function(e){var t=this.props.filtros;t.tema=e.target.value,this.props.actualizarFiltros(t)}},{key:"renderNombre",value:function(){var e="";return void 0!==this.props.filtros.nombre&&(e=this.props.filtros.nombre),r.a.createElement("div",{className:"nombreRw row"},r.a.createElement("div",{className:"col-sm-2 text-center my-auto nombreStr"},"Name:"),r.a.createElement("div",{className:"col-sm-10 text-left"},r.a.createElement("input",{type:"text",value:e,className:"form-control",onChange:this.actualizarNombre.bind(this)})))}},{key:"renderTema",value:function(){var e="";return void 0!==this.props.filtros.tema&&(e=this.props.filtros.tema),r.a.createElement("div",{className:"nombreRw row"},r.a.createElement("div",{className:"col-sm-2 text-center my-auto nombreStr"},"Tema:"),r.a.createElement("div",{className:"col-sm-10 text-left"},r.a.createElement("input",{type:"text",className:"form-control",value:e,onChange:this.actualizarTema.bind(this)})))}},{key:"actualizarLikes",value:function(e){var t=this.props.filtros;t.likes=e.target.value,this.props.actualizarFiltros(t)}},{key:"renderLikes",value:function(){for(var e=0,t=0;t<this.props.tips.length;t++)this.props.tips[t].likes>e&&(e=this.props.tips[t].likes);var a="";return void 0!==this.props.filtros.likes&&(a=this.props.filtros.likes),r.a.createElement("div",null,r.a.createElement("div",{className:"row text-center my-auto"},r.a.createElement("div",{className:"col-sm-12 likeslbl"},"Likes: ",this.props.filtros.likes)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"range-slider"},r.a.createElement("input",{className:"range-slider__range",type:"range",value:a,min:"0",max:e,onChange:this.actualizarLikes.bind(this)}))))}},{key:"renderFilters",value:function(e){if(e){var t=[],a=[];if(void 0!==this.props.filtros.nivel)for(var n=0;n<this.props.filtros.nivel.length;n++)n%2===0?t.push(this.props.filtros.nivel[n]):a.push(this.props.filtros.nivel[n]);return r.a.createElement("div",{className:"collapse",id:"collapseFilters"},r.a.createElement("div",{className:"row text-center colRow"},r.a.createElement("div",{className:"col-sm-3 text-center"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 mx-auto"},this.renderNiveles(t)),r.a.createElement("div",{className:"col-sm-6 mx-auto"},this.renderNiveles(a)))),r.a.createElement("div",{className:"col-sm-6 text-center"},this.renderNombre()," ",this.renderTema()),r.a.createElement("div",{className:"col-sm-3 text-center"},this.renderLikes())))}}},{key:"renderLoginButton",value:function(e){return e?r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.props.username),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("div",{className:"dropdown-item itemMen",onClick:this.clickCreate},"Sugerir Tip"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("div",{className:"dropdown-item itemMen",onClick:this.clickOut},"Salir"))):r.a.createElement("button",{type:"button",onClick:this.clickAuth,className:"btn btn-primary"},"Ingresar")}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"topnav",id:"navBar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 text-right"},r.a.createElement("a",{href:"/",className:"text-right"},r.a.createElement("img",{className:"logo",src:"/images/logo_disc.png",alt:"disc"}))),r.a.createElement("div",{className:"col-sm-4 text-center my-auto",id:"colCenter"},this.renderFiltrar(this.props.show)),r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-3 text-center my-auto"},this.renderLoginButton(this.props.autenticado))),this.renderFilters(this.props.show))))}}]),t}(n.Component)),N=Object(o.d)(E),g=a(10),y=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).sendComment=function(){if(a.props.autenticado){var e={};e._id=a.props.match.params.id,e.comentario=a.comentario.current.value,fetch("comment",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.result.n>0?alert("Tu comentario ha sido enviado correctamente."):alert("Ha ocurrido un error y tu comentario no pudo ser enviado.")}))}else alert("Debes ingresar primero para poder enviar un like.")},a.sendLike=function(){if(a.props.autenticado){var e={};e._id=a.props.match.params.id,fetch("like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.result.n>0?a.props.actualizarTips():alert("Ha ocurrido un error y tu like no pudo ser enviado.")}))}else alert("Debes ingresar primero para poder enviar un like.")},a.props.hideFilter(),a.comentario=r.a.createRef(),a.sendComment=a.sendComment.bind(Object(g.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"buscarTip",value:function(e){for(var t=this.props.tips,a=0;a<t.length;a++)if(t[a]._id===e)return t[a];return null}},{key:"render",value:function(){var e=this.buscarTip(this.props.match.params.id);return this.props.tips.length>0&&null===e&&this.props.history.push("/NotFound"),null===e?r.a.createElement("div",null):r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row filaNombreTip"},r.a.createElement("div",{className:"col-sm-2 text-left"},r.a.createElement("button",{className:"btn btn-primary btnbackTip",onClick:this.clickBack},"Back")),r.a.createElement("div",{className:"col-sm-7 my-auto"},r.a.createElement("div",{className:"lblNombreTip"},e.nombre)),r.a.createElement("div",{className:"col-sm-3"})),r.a.createElement("button",{className:"btn btn-primary",onClick:this.sendLike},"Like"),r.a.createElement("h3",null," Nivel: ",e.nivel),r.a.createElement("h3",null," #likes: ",e.likes),r.a.createElement("h5",null,"Tema: ",e.tema),r.a.createElement("h6",null,"Descripcion: ",e.descripcion),r.a.createElement("h1",null,"Codigo de Ejemplo"),r.a.createElement("h2",null,"Codigo correcto"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.codigo_bien}}),r.a.createElement("h2",null,"Codigo correcto"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.codigo_mal}}),r.a.createElement("h1",null,"Correcci\xf3n, comentario o sugerencia:"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Comentario",ref:this.comentario})),r.a.createElement("button",{className:"btn btn-primary",onClick:this.sendComment},"Enviar"))}}]),t}(n.Component)),k=Object(o.d)(y),C=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).clickBack=function(){void 0!==a.props.location.oldcreatestate?(console.log(a.props.location),a.props.history.push({pathname:"/createtip",oldcreatestate:a.props.location.oldcreatestate})):a.props.history.goBack()},a.clickLogin=function(){var e={};e.username=a.usuario.current.value,fetch("auth",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.length>0?(a.props.handleAuthentication(!0,e[0].username),a.clickBack()):alert("Usuario no registrado")}))},a.keyPress=function(e){13===e.keyCode&&a.clickLogin()},a.props.hideFilter(),a.usuario=r.a.createRef(),a.clickLogin=a.clickLogin.bind(Object(g.a)(a)),a.state={usr:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({usr:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container contauth"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-12 usrlbl"},"Usuario")),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 inusr mx-auto"},r.a.createElement("input",{type:"text",value:this.state.usr,placeholder:"Usuario",onKeyDown:this.keyPress,onChange:this.handleChange.bind(this),ref:this.usuario}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 text-right"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.clickLogin},"Login")),r.a.createElement("div",{className:"col-sm-6 text-left"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.clickBack},"Cancelar"))))}}]),t}(n.Component)),j=Object(o.d)(C),x=(a(35),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).enviar=function(){if(!1===a.props.autenticado)a.props.history.push({pathname:"/auth",oldcreatestate:a.state});else{var e={};e.nombre=a.state.formdata.nombre,e.codigo_mal=a.state.formdata.codigoErroneo,e.codigo_bien=a.state.formdata.codigoCorrecto,e.nivel=Number(a.state.formdata.nivel),e.tema=a.state.formdata.tema,e.descripcion=a.state.formdata.descripcion,console.log(JSON.stringify(e)),fetch("addtip",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.result.n>0?(alert("Tu tip ha sido enviado correctamente, lo revisaremos y en algunos dias podras verlo publicado"),a.props.actualizarTips()):alert("Ha ocurrido un error y tu tip no pudo ser enviado.")}))}},a.handleInputChange=function(e){var t=Object.assign({},a.state.formdata);t[e.target.name]=e.target.value,a.setState({formdata:t})},a.keyPress=function(e){13===e.keyCode&&a.enviar()},a.props.hideFilter(),a.state={formdata:{nombre:"",descripcion:"",tema:"",nivel:"",codigoCorrecto:"",codigoErroneo:""}},a.enviar=a.enviar.bind(Object(g.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){void 0!==this.props.location.oldcreatestate&&this.setState(this.props.location.oldcreatestate)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 mx-auto"},r.a.createElement("div",{className:"sugerirlbl"},"Sugerir Tip"))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Nombre:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.nombre,name:"nombre",type:"text",placeholder:"Nombre"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Descripcion:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.descripcion,name:"descripcion",type:"text",placeholder:"Descripcion"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Tema:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.tema,name:"tema",type:"text",placeholder:"Tema"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Nivel:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.nivel,name:"nivel",type:"text",placeholder:"Nivel"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Codigo Correcto:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.codigoCorrecto,name:"codigoCorrecto",type:"text",placeholder:"Codigo Correcto"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3 my-auto text-right"},r.a.createElement("div",{className:"crtlbl"},"Codigo Erroneo:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{onChange:this.handleInputChange.bind(this),value:this.state.formdata.codigoErroneo,name:"codigoErroneo",type:"text",placeholder:"Codigo Erroneo"}))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 mx-auto"},r.a.createElement("button",{className:"btn btn-primary",onKeyDown:this.keyPress,onClick:this.enviar},"Enviar"))))}}]),t}(n.Component)),O=Object(o.d)(x),w=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).props.hideFilter(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6 mx-auto notfoundlbl"},"404 Not Found"))}}]),t}(n.Component)),F=Object(o.d)(w),T=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).actualizarFiltros=function(e){for(var t=[],n=!0,r=0;r<e.nivel.length;r++)!0===e.nivel[r].estado&&(n=!1);for(var i=0;i<a.state.tips.length;i++){for(var s=!0,o=0;o<e.nivel.length;o++)n||e.nivel[o].nombre!==a.state.tips[i].nivel||(s=e.nivel[o].estado);""!==e.nombre&&-1===a.state.tips[i].nombre.indexOf(e.nombre)&&(s=!1),""!==e.tema&&-1===a.state.tips[i].tema.indexOf(e.tema)&&(s=!1),a.state.tips[i].likes<e.likes&&(s=!1),s&&t.push(a.state.tips[i])}a.setState({filtros:e,tipsFiltrados:t})},a.hideFilter=function(){a.setState({showFilters:!1})},a.showFilter=function(){a.setState({showFilters:!0})},a.handleAuthentication=function(e,t){a.setState({autenticado:e,username:t})},a.actualizarTips=function(){fetch("/tips").then((function(e){return e.json()})).then((function(e){a.setState({tips:e}),a.actualizarFiltros(a.state.filtros)}))},a.state={tips:[],filtros:[],tipsFiltrados:[],showFilters:!1,autenticado:!1,username:void 0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/tips").then((function(e){return e.json()})).then((function(t){for(var a={nivel:[],nombre:"",likes:0,tema:""},n=0;n<t.length;n++){for(var r=!1,i=0;i<a.nivel.length;i++)a.nivel[i].nombre===t[n].nivel&&(r=!0);r||a.nivel.push({nombre:t[n].nivel,estado:!1})}e.setState({tips:t,filtros:a,tipsFiltrados:t})}))}},{key:"renderNavBar",value:function(){return r.a.createElement(N,{show:this.state.showFilters,filtros:this.state.filtros,tips:this.state.tips,actualizarFiltros:this.actualizarFiltros,hideFilter:this.hideFilter,autenticado:this.state.autenticado,username:this.state.username,handleAuthentication:this.handleAuthentication})}},{key:"renderCreate",value:function(){var e=this;return r.a.createElement(o.a,{path:"/CreateTip",render:function(t){return r.a.createElement(O,{hideFilter:e.hideFilter,autenticado:e.state.autenticado,actualizarTips:e.actualizarTips})}})}},{key:"renderNotFound",value:function(){var e=this;return r.a.createElement(o.a,{path:"*",render:function(t){return r.a.createElement(F,{hideFilter:e.hideFilter})}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderNavBar(),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(b,{tips:e.state.tipsFiltrados,showFilter:e.showFilter})}}),r.a.createElement(o.a,{path:"/Auth",render:function(t){return r.a.createElement(j,{hideFilter:e.hideFilter,handleAuthentication:e.handleAuthentication})}}),r.a.createElement(o.a,{path:"/cupitip/:id",render:function(t){return r.a.createElement(k,{tips:e.state.tips,hideFilter:e.hideFilter,actualizarTips:e.actualizarTips,autenticado:e.state.autenticado})}}),this.renderCreate(),this.renderNotFound()))}}]),t}(r.a.Component)),S=Object(l.a)();s.a.render(r.a.createElement(o.b,{history:S},r.a.createElement(T,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5d43d1ff.chunk.js.map