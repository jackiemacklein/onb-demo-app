(this.webpackJsonpOnb=this.webpackJsonpOnb||[]).push([[15],{236:function(e,a,t){"use strict";var n=t(241),i=t.n(n),l=t(18),r=t.n(l),c=i.a.create({baseURL:"http://onb-api-demo.agenciaonside.com.br"});c.interceptors.request.use((function(e){return e.headers.Authorization="bearer "+r.a.get("rui-auth-token"),e}),(function(e){Promise.reject(e)})),a.a=c},269:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),i=t.n(n).a.createContext({})},326:function(e,a,t){"use strict";var n=t(2),i=t(3),l=t(5),r=t(4),c=t(0),s=t.n(c),o=t(15),u=t.n(o),m=t(386),d=t(387),v=t(388),b=t(389),p=t(390),f=t(7);window.RootUI.initTabsSliding=function(){function e(e,a){e.css({width:a.innerWidth(),height:a.outerHeight(),transform:"translate(".concat(a.position().left,"px, ").concat(a.position().top,"px)")})}function a(){Object(f.a)(".rui-tabs-sliding:not(.rui-tabs-sliding-ready)").addClass("rui-tabs-sliding-ready").each((function(){var a=Object(f.a)(this),t=Object(f.a)('<li class="rui-tabs-slide"></li>'),n=a.find(".rui-tabs-link.active");a.prepend(t),n.length&&e(t,n)}))}a(),f.d.on("rui-ajax-loaded",a),f.c.on("click",".rui-tabs-link",(function(a){a.preventDefault();var t=Object(f.a)(this),n=t.closest(".rui-tabs-sliding").find(".rui-tabs-slide");t.length&&e(n,t)}))},window.RootUI.initTabsSliding();var h=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.jQuery(window).trigger("rui-ajax-loaded")}},{key:"render",value:function(){var e=this.props,a=e.sliding,t=void 0!==a&&a,n=e.pills,i=void 0!==n&&n,l=e.children,r=e.className;return s.a.createElement(m.a,{className:u()(i?"nav-pills":"nav-tabs",t?"rui-tabs-sliding":"",r)},l)}}]),t}(c.Component),g=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.isActive,n=e.className,i=e.onClick;return s.a.createElement(d.a,null,s.a.createElement(v.a,{className:u()({active:t},"rui-tabs-link",n),onClick:i,href:"#"},a))}}]),t}(c.Component);h.NavItem=g,h.Content=b.a,h.Pane=p.a;a.a=h},386:function(e,a,t){"use strict";var n=t(8),i=t(9),l=t(0),r=t.n(l),c=t(1),s=t.n(c),o=t(12),u=t.n(o),m=t(6),d={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:m.q,className:s.a.string,cssModule:s.a.object},v=function(e){var a=e.className,t=e.cssModule,l=e.tabs,c=e.pills,s=e.vertical,o=e.horizontal,d=e.justified,v=e.fill,b=e.navbar,p=e.card,f=e.tag,h=Object(i.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(m.m)(u()(a,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":l,"card-header-tabs":p&&l,"nav-pills":c,"card-header-pills":p&&c,"nav-justified":d,"nav-fill":v}),t);return r.a.createElement(f,Object(n.a)({},h,{className:g}))};v.propTypes=d,v.defaultProps={tag:"ul",vertical:!1},a.a=v},387:function(e,a,t){"use strict";var n=t(8),i=t(9),l=t(0),r=t.n(l),c=t(1),s=t.n(c),o=t(12),u=t.n(o),m=t(6),d={tag:m.q,active:s.a.bool,className:s.a.string,cssModule:s.a.object},v=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,s=Object(i.a)(e,["className","cssModule","active","tag"]),o=Object(m.m)(u()(a,"nav-item",!!l&&"active"),t);return r.a.createElement(c,Object(n.a)({},s,{className:o}))};v.propTypes=d,v.defaultProps={tag:"li"},a.a=v},388:function(e,a,t){"use strict";var n=t(8),i=t(9),l=t(20),r=t(13),c=t(0),s=t.n(c),o=t(1),u=t.n(o),m=t(12),d=t.n(m),v=t(6),b={tag:v.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.active,r=e.tag,c=e.innerRef,o=Object(i.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(v.m)(d()(a,"nav-link",{disabled:o.disabled,active:l}),t);return s.a.createElement(r,Object(n.a)({},o,{ref:c,onClick:this.onClick,className:u}))},a}(s.a.Component);p.propTypes=b,p.defaultProps={tag:"a"},a.a=p},389:function(e,a,t){"use strict";var n=t(8),i=t(13),l=t(0),r=t.n(l),c=t(1),s=t.n(c),o=t(12),u=t.n(o),m=t(269),d=t(6),v={tag:d.q,activeTab:s.a.any,className:s.a.string,cssModule:s.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(i.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.tag,l=Object(d.n)(this.props,Object.keys(v)),c=Object(d.m)(u()("tab-content",a),t);return r.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(i,Object(n.a)({},l,{className:c})))},a}(l.Component);a.a=b,b.propTypes=v,b.defaultProps={tag:"div"}},390:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),i=t(9),l=t(0),r=t.n(l),c=t(1),s=t.n(c),o=t(12),u=t.n(o),m=t(269),d=t(6),v={tag:d.q,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function b(e){var a=e.className,t=e.cssModule,l=e.tabId,c=e.tag,s=Object(i.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(d.m)(u()("tab-pane",a,{active:l===e}),t)};return r.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return r.a.createElement(c,Object(n.a)({},s,{className:o(a)}))}))}b.propTypes=v,b.defaultProps={tag:"div"}},572:function(e,a,t){},573:function(e,a,t){},678:function(e,a,t){"use strict";t.r(a);var n=t(239),i=t.n(n),l=t(240),r=t(2),c=t(3),s=t(14),o=t(5),u=t(4),m=(t(572),t(0)),d=t.n(m),v=t(26),b=t(10),p=t(673),f=t(636),h=t(19),g=t(236),E=t(11),N=(t(105),t(326)),j=(t(573),t(15)),O=t.n(j),y=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.left,n=e.right,i=e.md,l=e.lg,r=e.xl,c=O()("rui-timeline",{"rui-timeline-left":t&&!n,"rui-timeline-right":n,"rui-timeline-right-md":"right"===i,"rui-timeline-left-md":"left"===i,"rui-timeline-right-lg":"right"===l,"rui-timeline-left-lg":"left"===l,"rui-timeline-right-xl":"right"===r,"rui-timeline-left-xl":"left"===r},this.props.className);return d.a.createElement("div",{className:c},d.a.createElement("div",{className:"rui-timeline-line"}),a)}}]),t}(m.Component);y.Item=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.icon,n=e.date,i=e.swap,l=O()("rui-timeline-item",{"rui-timeline-item-swap":i},this.props.className);return d.a.createElement("div",{className:l},t?d.a.createElement("div",{className:"rui-timeline-icon"},t):"",d.a.createElement("div",{className:"rui-timeline-content"},a),n?d.a.createElement("div",{className:"rui-timeline-date"},n):"")}}]),t}(m.Component);var k=y,T=t(22),x=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={activeTab:"timeline",data:{name:"",phone:"",email:"",cpf:"",profile:{name:""},sales:[],qtde_cancel:0,qtde_sales:0,fat_sales:0},timeline:[],loading:!1},n.toggleTab=n.toggleTab.bind(Object(s.a)(n)),n.loadData=n.loadData.bind(Object(s.a)(n)),n}return Object(c.a)(t,[{key:"toggleTab",value:function(e){this.setState({activeTab:e})}},{key:"loadData",value:function(){var e=Object(l.a)(i.a.mark((function e(){var a,t,n,l,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("crm/clients/".concat(a,"/details"));case 3:return t=e.sent,n=t.data,e.next=7,g.a.get("crm/clients/".concat(a,"/timeline"));case 7:l=e.sent,r=l.data,this.setState({data:n,timeline:r,id:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,a=this.state.activeTab;return d.a.createElement(m.Fragment,null,d.a.createElement("div",{className:"rui-profile row vertical-gap"},d.a.createElement("div",{className:"col-lg-6 col-xl-5"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"row vertical-gap"},d.a.createElement("div",{className:"col"},d.a.createElement("div",{className:"rui-profile-info"},d.a.createElement("h3",{className:"rui-profile-info-title h4"},this.state.data.name),d.a.createElement("small",{className:"text-grey-6 mt-2 mb-15"},this.state.data.cpf),d.a.createElement(b.b,{className:"rui-profile-info-mail",to:"mailto:".concat(this.state.data.email)},this.state.data.email),d.a.createElement(b.b,{className:"rui-profile-info-phone",to:"tel:".concat(this.state.data.phone)},this.state.data.phone)))),d.a.createElement("div",{className:"rui-profile-numbers"},d.a.createElement("div",{className:"row justify-content-center"},d.a.createElement("div",{className:"col"}),d.a.createElement("div",{className:"col-auto"},d.a.createElement("div",{className:"rui-profile-number text-center"},d.a.createElement("h4",{className:"rui-profile-number-title h2"},this.state.data.qtde_sales),d.a.createElement("small",{className:"text-grey-6"},"Atendimentos"))),d.a.createElement("div",{className:"col p-0"}),d.a.createElement("div",{className:"col-auto"},d.a.createElement("div",{className:"rui-profile-number text-center"},d.a.createElement("h4",{className:"rui-profile-number-title h2"},"R$ ",this.state.data.fat_sales.toLocaleString()),d.a.createElement("small",{className:"text-grey-6"},"Faturamento"))),d.a.createElement("div",{className:"col p-0"}),d.a.createElement("div",{className:"col-auto"},d.a.createElement("div",{className:"rui-profile-number text-center"},d.a.createElement("h4",{className:"rui-profile-number-title h2"},this.state.data.qtde_cancel),d.a.createElement("small",{className:"text-grey-6"},"Desist\xeancias"))),d.a.createElement("div",{className:"col"})))))),d.a.createElement("div",{className:"col-lg-6 col-xl-7"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"d-flex align-items-center"},d.a.createElement("h2",{className:"card-title mnb-6 mr-auto"},"\xdaltimos atendimentos")),d.a.createElement("ul",{className:"list-group list-group-flush rui-profile-task-list"},this.state.data.sales.map((function(e){var a,t;return d.a.createElement("li",{className:"list-group-item"},d.a.createElement("div",{className:"rui-task rui-task-".concat(e.state)},d.a.createElement("div",{className:"rui-task-icon"},d.a.createElement(E.a,{name:"check-square"})),d.a.createElement("div",{className:"rui-task-content"},d.a.createElement(b.b,{className:"rui-task-title",to:"/pdv/viewer/".concat(e.id)},e.title),d.a.createElement("small",{className:"rui-task-subtitle"},"Atendente:"," ",d.a.createElement("a",null,d.a.createElement("strong",null,null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.name))),d.a.createElement("small",{className:"rui-task-subtitle"},"Valor:"," ",d.a.createElement("a",null,d.a.createElement("strong",null,e.amount.toLocaleString()))),d.a.createElement("small",{className:"rui-task-subtitle"},"Em:"," ",d.a.createElement("a",null,d.a.createElement("strong",null,Object(p.a)(null!==(t=Object(f.a)(e.date))&&void 0!==t?t:"","dd'/'MM'/'yyyy' \xe0s 'HH':'mm")))))))})))))),d.a.createElement("div",{className:"col-12"},d.a.createElement(N.a,{sliding:!0},d.a.createElement(N.a.NavItem,{isActive:"timeline"===a,onClick:function(){return e.toggleTab("timeline")}},"Linha do tempo")),d.a.createElement(N.a.Content,{activeTab:a},d.a.createElement(N.a.Pane,{tabId:"timeline"},d.a.createElement(k,{lg:"left"},this.state.timeline.map((function(e,a){var t;return d.a.createElement(k.Item,{className:e.state,swap:a%2!==0,icon:d.a.createElement(E.a,{name:C(e.state)}),date:Object(p.a)(null!==(t=Object(f.a)(e.date))&&void 0!==t?t:"","dd'/'MM'/'yyyy' \xe0s 'HH':'mm"),key:e.id},d.a.createElement("h3",null,e.title),d.a.createElement("p",null,"Identificador: ",d.a.createElement("strong",null,e.id),d.a.createElement("br",null),"Situa\xe7\xe3o: ",d.a.createElement("strong",null,function(e){if("scheduled"===e)return"Agendado";if("canceled"===e)return"Cancelado";if("realized"===e)return"Realizado/Atendido";if("rescheduled"===e)return"Reagendado";if("closed"===e)return"Realizado";if("open"===e)return"Aberto";if("active"===e)return"Ativo";if("inactive"===e)return"Inativo"}(e.state)),d.a.createElement("br",null),"Tipo: ",d.a.createElement("strong",null,e.type)))}))))))))}}]),t}(m.Component);a.default=Object(v.b)((function(e){return{settings:e.settings,toasts:e.toasts}}),{addToast:T.e,removeToast:T.f})(Object(h.f)(x));function C(e){return"scheduled"===e?"calendar":"canceled"===e?"x-square":"realized"===e?"check-square":"rescheduled"===e?"copy":"open"===e?"award":"closed"===e?"check-square":"active"===e||"inactive"===e?"star":void 0}}}]);
//# sourceMappingURL=15.7baa3a90.chunk.js.map