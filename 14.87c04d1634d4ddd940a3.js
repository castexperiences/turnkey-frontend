(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HKlZ:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.state={allSelected:!1,hasNextPage:!1,loading:!0,page:0,paginating:!1,paginationCursors:[null],creatingPdf:!1,allExpanded:!1,exporting:!1}}return n.prototype.ngOnInit=function(){this.updateTable(null)},n.prototype.updateTable=function(n){},n.prototype.handlePagination=function(n){n.edges.length&&(this.state.paginationCursors[this.state.page+1]=n.edges.slice(-1)[0].cursor),this.state.hasNextPage=n.pageInfo.hasNextPage,this.state.paginating=!1,this.state.loading=!1},n.prototype.softReset=function(){this.state.allSelected=!1,this.state.page=0,this.state.paginationCursors=[null],this.state.hasNextPage=!1,this.state.loading=!0},n.prototype.nextPage=function(){this.state.allSelected=!1,this.state.page++,this.updateTable(this.state.paginationCursors[this.state.page])},n.prototype.previousPage=function(){this.state.allSelected=!1,this.state.page--,this.updateTable(this.state.paginationCursors[this.state.page])},n.prototype.getNumericId=function(n){return n.replace(/\D/g,"")},n}()},Oxmh:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o});var l=e("CcnG"),a=(e("n4kJ"),l["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","page-title"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,["",""])),(n()(),l["\u0275eld"](3,0,null,null,1,"p",[["class","text-muted"]],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,t){var e=t.component;n(t,2,0,e._title),n(t,4,0,e._subtitle)})}},UasY:function(n,t,e){"use strict";e.r(t),e.d(t,"SubmissionModuleNgFactory",function(){return A});var l=e("CcnG"),a=e("c3nT"),o=e("9AJC"),u=e("pMnS"),i=e("EqZT"),p=e("1TXF"),d=e("CrKN"),r=e("L2ze"),s=e("6SX5"),c=e("Ip0R"),m=e("mEXF"),f=e("gIcY"),g=e("4GxJ"),b=e("t/Na"),h=e("eDkP"),v=e("Fzqc"),C=e("M2Lx"),P=e("K8t8"),y=e("N4fx"),N=e("fwCW"),x=e("QpxQ"),I=e("ZYCi"),R=e("4c35"),T=e("dWZg"),k=e("qAlS"),_=e("lLAP"),w=e("zACK"),F=e("PCNd"),M=e("QuaY"),O=e("qOWQ"),S=e("oZ8P"),E=e("riF4"),X=e("2iZg"),A=l["\u0275cmf"](a.a,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,o.b,o.h,o.i,o.e,o.f,o.g,u.a,i.a,p.a,d.a,r.a,s.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[l.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,m.c,m.c,[]),l["\u0275mpd"](4608,f.y,f.y,[]),l["\u0275mpd"](4608,g.A,g.A,[l.ComponentFactoryResolver,l.Injector,g.ob,g.B]),l["\u0275mpd"](4608,b.j,b.p,[c.DOCUMENT,l.PLATFORM_ID,b.n]),l["\u0275mpd"](4608,b.q,b.q,[b.j,b.o]),l["\u0275mpd"](5120,b.a,function(n){return[n]},[b.q]),l["\u0275mpd"](4608,b.m,b.m,[]),l["\u0275mpd"](6144,b.k,null,[b.m]),l["\u0275mpd"](4608,b.i,b.i,[b.k]),l["\u0275mpd"](6144,b.b,null,[b.i]),l["\u0275mpd"](4608,b.f,b.l,[b.b,l.Injector]),l["\u0275mpd"](4608,b.c,b.c,[b.f]),l["\u0275mpd"](4608,h.b,h.b,[h.h,h.d,l.ComponentFactoryResolver,h.g,h.e,l.Injector,l.NgZone,c.DOCUMENT,v.b,[2,c.Location]]),l["\u0275mpd"](5120,h.i,h.j,[h.b]),l["\u0275mpd"](4608,C.a,C.a,[]),l["\u0275mpd"](4608,P.b,P.b,[[2,P.a],y.a,h.b]),l["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),l["\u0275mpd"](1073742336,m.b,m.b,[]),l["\u0275mpd"](1073742336,f.v,f.v,[]),l["\u0275mpd"](1073742336,f.g,f.g,[]),l["\u0275mpd"](1073742336,g.x,g.x,[]),l["\u0275mpd"](1073742336,N.c,N.c,[]),l["\u0275mpd"](1073742336,g.c,g.c,[]),l["\u0275mpd"](1073742336,g.g,g.g,[]),l["\u0275mpd"](1073742336,g.h,g.h,[]),l["\u0275mpd"](1073742336,g.l,g.l,[]),l["\u0275mpd"](1073742336,g.m,g.m,[]),l["\u0275mpd"](1073742336,g.r,g.r,[]),l["\u0275mpd"](1073742336,g.C,g.C,[]),l["\u0275mpd"](1073742336,g.G,g.G,[]),l["\u0275mpd"](1073742336,g.J,g.J,[]),l["\u0275mpd"](1073742336,g.M,g.M,[]),l["\u0275mpd"](1073742336,g.P,g.P,[]),l["\u0275mpd"](1073742336,g.T,g.T,[]),l["\u0275mpd"](1073742336,g.X,g.X,[]),l["\u0275mpd"](1073742336,g.ab,g.ab,[]),l["\u0275mpd"](1073742336,g.bb,g.bb,[]),l["\u0275mpd"](1073742336,g.D,g.D,[]),l["\u0275mpd"](1073742336,x.c,x.c,[]),l["\u0275mpd"](1073742336,I.o,I.o,[[2,I.u],[2,I.k]]),l["\u0275mpd"](1073742336,b.e,b.e,[]),l["\u0275mpd"](1073742336,b.d,b.d,[]),l["\u0275mpd"](1073742336,y.e,y.e,[]),l["\u0275mpd"](1073742336,v.a,v.a,[]),l["\u0275mpd"](1073742336,R.f,R.f,[]),l["\u0275mpd"](1073742336,T.b,T.b,[]),l["\u0275mpd"](1073742336,k.b,k.b,[]),l["\u0275mpd"](1073742336,h.f,h.f,[]),l["\u0275mpd"](1073742336,C.b,C.b,[]),l["\u0275mpd"](1073742336,_.a,_.a,[]),l["\u0275mpd"](1073742336,P.d,P.d,[]),l["\u0275mpd"](1073742336,w.SidebarModule,w.SidebarModule,[]),l["\u0275mpd"](1073742336,F.a,F.a,[]),l["\u0275mpd"](1073742336,M.a,M.a,[]),l["\u0275mpd"](1073742336,a.a,a.a,[]),l["\u0275mpd"](256,x.d,x.e,[]),l["\u0275mpd"](256,b.n,"XSRF-TOKEN",[]),l["\u0275mpd"](256,b.o,"X-XSRF-TOKEN",[]),l["\u0275mpd"](256,P.a,{panelClass:"fullscreen"},[]),l["\u0275mpd"](1024,I.i,function(){return[[{path:"list",component:O.a},{path:"view/:id",component:S.a},{path:"scan",component:E.a},{path:"upload",component:X.a}]]},[])])})},XXSO:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n.prototype.transform=function(n){return n.replace(/\D/g,"")},n}()},Xv7A:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("CcnG"),a=function(){function n(){this.previousPage=new l.EventEmitter,this.nextPage=new l.EventEmitter}return Object.defineProperty(n.prototype,"state",{set:function(n){this._state=n},enumerable:!0,configurable:!0}),n.prototype.goPreviousPage=function(){this.previousPage.emit()},n.prototype.goNextPage=function(){this.nextPage.emit()},n}()},n4kJ:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return Object.defineProperty(n.prototype,"title",{set:function(n){this._title=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"subtitle",{set:function(n){this._subtitle=n},enumerable:!0,configurable:!0}),n}()},uhBv:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return p});var l=e("CcnG"),a=e("Ip0R"),o=(e("Xv7A"),l["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goPreviousPage()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,[" Previous "]))],null,function(n,t){n(t,0,0,t.component._state.paginating)})}function i(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goNextPage()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,[" Next "]))],null,function(n,t){n(t,0,0,t.component._state.paginating)})}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,2,"div",[["class","col-sm-2"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](3,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](4,0,null,null,2,"div",[["class","offset-sm-8 col-sm-2"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,i)),l["\u0275did"](6,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,3,0,e._state.page>0),n(t,6,0,e._state.hasNextPage)},null)}}}]);