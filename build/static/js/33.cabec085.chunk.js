(this["webpackJsonponb-app-demo.agenciaonside.com.br"]=this["webpackJsonponb-app-demo.agenciaonside.com.br"]||[]).push([[33],{234:function(e,t,a){"use strict";var l=a(241),n=a.n(l),r=a(18),s=a.n(r),i=n.a.create({baseURL:"https://onb-api-demo.agenciaonside.com.br"});i.interceptors.request.use((function(e){return e.headers.Authorization="bearer "+s.a.get("rui-auth-token"),e}),(function(e){Promise.reject(e)})),t.a=i},284:function(e,t,a){"use strict";a(285);var l=a(278),n=a.n(l),r=a(322),s=a.n(r);Object(l.registerLocale)("pt",s.a),t.a=n.a},285:function(e,t,a){},573:function(e,t,a){},647:function(e,t,a){"use strict";a.r(t);var l=a(331),n=a(21),r=a(332),s=a(239),i=a.n(s),c=a(240),o=a(32),d=a(2),u=a(3),m=a(14),_=a(5),b=a(4),f=(a(573),a(0)),p=a.n(f),g=a(26),h=a(10),v=a(633),E=a(518),y=a(519),j=a(276),O=a(227),N=a(228),k=a(368),F=a(369),w=a(370),M=a(645),S=a(371),C=a(646),x=a(18),U=a.n(x),D=a(242),H=a(11),L=a(23),R=a(22),T=a(284),z=a(234),P=a(679),V=a(639),q=a(323),A=a.n(q),J=function(e){Object(_.a)(a,e);var t=Object(b.a)(a);function a(e){var l,n;return Object(d.a)(this,a),(n=t.call(this,e)).state=(l={page:0,page_limit:20,page_length:1,users:[{value:U.a.get("rui-auth-user_id"),label:U.a.get("rui-auth-user_name")}],filiais:[],sales:[]},Object(o.a)(l,"users",[]),Object(o.a)(l,"term",""),Object(o.a)(l,"loading",!1),Object(o.a)(l,"show_user_id",0),Object(o.a)(l,"filter_start_date",new Date),Object(o.a)(l,"filter_end_date",null),Object(o.a)(l,"filter_filial_id",{value:"undefined"!=U.a.get("rui-auth-filial_id")?U.a.get("rui-auth-filial_id"):"",label:"undefined"!=U.a.get("rui-auth-filial_name")?U.a.get("rui-auth-filial_name"):"Selecione"}),l),n.loadFiliais=n.loadFiliais.bind(Object(m.a)(n)),n.loadUsers=n.loadUsers.bind(Object(m.a)(n)),n.loadSales=n.loadSales.bind(Object(m.a)(n)),n.filterHistory=n.filterHistory.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"loadFiliais",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("/filiais");case 3:t=e.sent,(a=t.data).length>0&&this.setState({filiais:a.map((function(e){return{value:e.id,label:e.name}}))}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert("Erro ao carregar filiais");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadUsers",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,l,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(P.a)(this.state.filter_start_date,"yyyy-MM-dd"),a=this.state.filter_end_date?Object(P.a)(this.state.filter_end_date,"yyyy-MM-dd"):Object(P.a)(this.state.filter_start_date,"yyyy-MM-dd"),e.next=5,z.a.get("/ranking/?start_date=".concat(t,"&end_date=").concat(a,"&filial_id=").concat(this.state.filter_filial_id.value));case 5:l=e.sent,n=l.data,this.setState({users:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),alert("Erro ao carregar dados dos usu\xe1rios");case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadSales",value:function(){var e=Object(c.a)(i.a.mark((function e(t){var a,l,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.state.show_user_id){e.next=3;break}return this.setState({show_user_id:0}),e.abrupt("return");case 3:return this.setState({loading:!0}),e.prev=4,a=Object(P.a)(this.state.filter_start_date,"yyyy-MM-dd"),l=this.state.filter_end_date?Object(P.a)(this.state.filter_end_date,"yyyy-MM-dd"):Object(P.a)(this.state.filter_start_date,"yyyy-MM-dd"),e.next=9,z.a.get("/sales/?user_id=".concat(t,"&start_date=").concat(a,"&end_date=").concat(l,"&filial_id=").concat(this.state.filter_filial_id.value));case 9:n=e.sent,r=n.data,this.setState({sales:r,show_user_id:t}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),alert("Erro ao carregar Lan\xe7amentos");case 18:this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"filterHistory",value:function(e){var t,a,l;return!!((null===e||void 0===e||null===(t=e.client_name)||void 0===t?void 0:t.toUpperCase().includes(this.state.term.toUpperCase()))||(null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.toUpperCase().includes(this.state.term.toUpperCase()))||(null===e||void 0===e||null===(l=e.user_name)||void 0===l?void 0:l.toUpperCase().includes(this.state.term.toUpperCase())))}},{key:"changeFilterDate",value:function(e){var t=Object(r.a)(e,2),a=t[0],l=t[1];this.setState({filter_start_date:a,filter_end_date:l})}},{key:"componentDidMount",value:function(){this.loadUsers(),this.loadFiliais(),this.loadFiliais()}},{key:"componentDidUpdate",value:function(e,t){U.a.get("rui-auth-token")&&(t.filter_start_date===this.state.filter_start_date&&t.filter_end_date===this.state.filter_end_date&&t.filter_filial_id===this.state.filter_filial_id||(this.setState({show_user_id:0,sales:[]}),this.loadUsers()))}},{key:"render",value:function(){var e,t=this,a=this.state,r=a.users,s=a.sales,i=a.page_length,c=a.page,o=a.page_limit,d=[],u=r.filter((function(e){return""===t.state.term||t.filterHistory(e)}));i=Math.ceil(u.length/o);for(var m=0;m<i;m++)d.push(m);u=u.slice(c*o,c*o+o);var _={control:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{borderColor:t.isFocused?"rgba(114, 94, 195, 0.6)":"#eaecf0","&:hover":{borderColor:t.isFocused?"rgba(114, 94, 195, 0.6)":"#eaecf0"},boxShadow:t.isFocused?"0 0 0 0.2rem rgba(114, 94, 195, 0.2)":""})},option:function(e,t){var a="";return t.isSelected?a="#725ec3":t.isFocused&&(a="rgba(114, 94, 195, 0.2)"),Object(n.a)(Object(n.a)({},e),{},{backgroundColor:a})},multiValueLabel:function(e){return Object(n.a)(Object(n.a)({},e),{},{color:"#545b61",backgroundColor:"#eeeeef"})}};return p.a.createElement(f.Fragment,null,p.a.createElement("div",{className:"bill-filters"},p.a.createElement(O.a,null,p.a.createElement(N.a,{xs:12,sm:12,md:4},p.a.createElement(j.a,{for:"filter_filial_id",className:"mt-10"},"Filial"),p.a.createElement(D.a,{id:"filter_filial_id",name:"filter_filial_id",defaultValue:this.state.filter_filial_id,value:this.state.filter_filial_id,options:[{value:"",label:"Selecione"}].concat(Object(l.a)(this.state.filiais)),styles:_,onChange:function(e){return t.setState({filter_filial_id:e})}})),p.a.createElement(N.a,{xs:12,sm:12,md:8},p.a.createElement(j.a,{className:"mt-10"},"Per\xedodo"),p.a.createElement(L.a,{tag:"div",className:"",showTriangle:!0},p.a.createElement(L.a.Toggle,{tag:"button",className:"btn btn-brand btn-block mb-5"},p.a.createElement("span",{className:"text"},Object(P.a)(this.state.filter_start_date,"dd/MM/yyyy")," \xe0 ",Object(P.a)(null!==(e=this.state.filter_end_date)&&void 0!==e?e:this.state.filter_start_date,"dd/MM/yyyy")),p.a.createElement("span",{className:"icon icon ml-auto"},p.a.createElement(H.a,{name:"chevron-down"}))),p.a.createElement(L.a.Menu,{tag:"ul",className:"nav"},p.a.createElement("li",{onClick:function(){}},p.a.createElement(T.a,{selected:this.state.filter_start_date,onChange:function(e){return t.changeFilterDate(e)},startDate:this.state.filter_start_date,endDate:this.state.filter_end_date,selectsRange:!0,inline:!0,className:"rui-datetimepicker form-control w-auto",locale:"pt"}))))))),p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-body py-30 pt-0"},p.a.createElement("div",{className:"rui-project-task-search"},p.a.createElement("div",{className:"input-group input-group-clean"},p.a.createElement("input",{type:"search",className:"form-control pl-3 order-1",placeholder:"Digite para procurar...",value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})}}))),p.a.createElement("ul",{className:"list-group list-group-flush rui-project-task-list bills"},u.map((function(e,a){var l,n;return p.a.createElement("div",{className:"row-bill ranking",key:e.user_id},p.a.createElement("div",{className:"user"},p.a.createElement("div",{className:"card-day"},p.a.createElement("strong",null,(a+1).toString().padStart(2,"0"),"\xb0")),p.a.createElement(k.a,{className:"card"},p.a.createElement(F.a,null,p.a.createElement(w.a,{className:"h2",onClick:function(){return t.loadSales(e.user_id)}},"[",e.filial_name,"] - ",e.user_name),p.a.createElement(M.a,{className:"h5 text-muted mb-2 card-subtitle mt-2"},"Qtde Atendimentos: ",p.a.createElement("strong",null,null!==(l=null===e||void 0===e?void 0:e.qde_services)&&void 0!==l?l:"-")),p.a.createElement(M.a,{className:"h5 text-muted mb-2 card-subtitle mt-2"},"Tempo m\xe9dio: ",p.a.createElement("strong",null,null!==(n=null===e||void 0===e?void 0:e.average)&&void 0!==n?n:"-")),t.state.show_user_id===e.user_id?p.a.createElement(p.a.Fragment,null,p.a.createElement(C.a,{className:"open mt-10",onClick:function(){return t.setState({show_user_id:0,sales:[]})}},"Fechar")):p.a.createElement(p.a.Fragment,null," ",p.a.createElement(C.a,{className:"open mt-10",onClick:function(){return t.loadSales(e.user_id)}},t.state.loading?"Carregando...":"Ver atendimentos"))),p.a.createElement("a",{className:"rui-task-subtitle price ".concat(e.state)},p.a.createElement("strong",null,p.a.createElement("small",null,"R$ "),e.amount_sales.toLocaleString())))),p.a.createElement("div",{className:"p-50 pt-0 details ".concat(t.state.show_user_id===e.user_id?"show":"")},p.a.createElement("ul",{className:"list-group list-group-flush rui-project-task-list bills"},s.map((function(e,t){var a,l;return p.a.createElement("div",{className:"row-bill",key:e.id},p.a.createElement("div",{className:"card-day"},0===t?p.a.createElement(p.a.Fragment,null,p.a.createElement("strong",null,Object(P.a)(Object(V.a)(e.date),"dd"))," ",p.a.createElement("small",null,Object(P.a)(Object(V.a)(e.date),"MMM",{locale:A.a}))):p.a.createElement(p.a.Fragment,null,s[t-1].date!==e.date?p.a.createElement(p.a.Fragment,null,p.a.createElement("strong",null,Object(P.a)(Object(V.a)(e.date),"dd"))," ",p.a.createElement("small",null,Object(P.a)(Object(V.a)(e.date),"MMM",{locale:A.a}))):p.a.createElement(p.a.Fragment,null))),p.a.createElement(k.a,{className:"card"},p.a.createElement(F.a,null,p.a.createElement(h.b,{to:"/pdv/show/".concat(e.id),target:"_blank"},p.a.createElement(w.a,{className:"h2"},e.title)),e.closed_by?p.a.createElement(p.a.Fragment,null,p.a.createElement(M.a,{className:"h5 text-muted mb-2 card-subtitle mt-2"},"Fechado por: ",p.a.createElement("strong",null,null!==(a=null===e||void 0===e?void 0:e.closed_by)&&void 0!==a?a:"-"))):p.a.createElement(p.a.Fragment,null),p.a.createElement(M.a,{className:"h5 text-muted mb-2 card-subtitle mt-2"},"Realizado \xe0s: ",p.a.createElement("strong",null,Object(P.a)(Object(V.a)(e.date),"HH':'mm"))),e.canceled_by?p.a.createElement(p.a.Fragment,null,p.a.createElement(M.a,{className:"h5 text-muted mb-2 card-subtitle mt-2"},"Cancelado por: ",p.a.createElement("strong",null,null!==(l=null===e||void 0===e?void 0:e.canceled_by)&&void 0!==l?l:"-"))):p.a.createElement(p.a.Fragment,null),p.a.createElement(M.a,{className:"h4 text-muted mb-5"},null===e||void 0===e?void 0:e.filial_name),e.client_id?p.a.createElement(p.a.Fragment,null,p.a.createElement(S.a,{className:"mb-5"},p.a.createElement(h.b,{to:"/crm/clientes/show/".concat(e.client_id),className:"card-link",target:"_blank"},"Cliente: ",p.a.createElement("strong",null,null===e||void 0===e?void 0:e.client_name)))):p.a.createElement(p.a.Fragment,null),p.a.createElement(C.a,{className:"".concat(e.state," mt-10"),id:"popover_paid_".concat(e.id)},"closed"===e.state?"Fechada/Finalizada":"canceled"===e.state?"Cancelada":"Em aberto"),e.obs?p.a.createElement(p.a.Fragment,null,p.a.createElement(C.a,{id:"popover_obs_".concat(e.id)},"Observa\xe7\xf5es"),p.a.createElement(v.a,{placement:"top",target:"popover_obs_".concat(e.id),trigger:"hover"},p.a.createElement(E.a,null,"Observa\xe7\xf5es"),p.a.createElement(y.a,null,p.a.createElement("strong",null,e.obs)))):p.a.createElement(p.a.Fragment,null)),p.a.createElement("a",{className:"rui-task-subtitle price ".concat(e.state)},p.a.createElement("strong",null,p.a.createElement("small",null,"R$ "),e.amount.toLocaleString()))))})))))}))))),p.a.createElement("nav",{className:"mt-15","aria-label":"Page navigation example"},p.a.createElement("ul",{className:"pagination pagination-sm"},p.a.createElement("ul",{className:"pagination pagination-sm"},d.map((function(e){return p.a.createElement("li",{key:e,onClick:function(){return t.setState({page:e})},className:"page-item ".concat(e===t.state.page?"active":"")},p.a.createElement("a",{className:"page-link"},e+1))}))))))}}]),a}(f.Component);t.default=Object(g.b)((function(e){return{settings:e.settings,toasts:e.toasts}}),{addToast:R.e,removeToast:R.f})(J)}}]);
//# sourceMappingURL=33.cabec085.chunk.js.map