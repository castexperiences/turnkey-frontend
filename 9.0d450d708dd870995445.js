(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{DnJw:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),u=function(){return function(){}}(),i=l("9AJC"),d=l("pMnS"),o=l("EqZT"),r=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),a=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" loading-spinner works!\n"]))],null,null)}var p,m,g,s,f,v=l("Ip0R"),b=l("gIcY"),y=l("lTCR"),h=l.n(y),C=h()(p||(s=["\n  query greetingsList {\n    greetings {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"],f=["\n  query greetingsList {\n    greetings {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"],Object.defineProperty?Object.defineProperty(s,"raw",{value:f}):s.raw=f,p=s)),G=h()(m||(m=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(['\n  mutation createGreeting($name: String!) {\n    createGreeting(input: {\n      name: $name,\n      clientMutationId: ""\n    }) {\n      id\n      name\n    }\n  }\n'],['\n  mutation createGreeting($name: String!) {\n    createGreeting(input: {\n      name: $name,\n      clientMutationId: ""\n    }) {\n      id\n      name\n    }\n  }\n']))),I=h()(g||(g=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(['\n  mutation deleteGreeting($id: ID!) {\n    deleteGreeting(input: {\n      id: $id,\n      clientMutationId: ""\n    }) {\n      id\n    }\n  }\n'],['\n  mutation deleteGreeting($id: ID!) {\n    deleteGreeting(input: {\n      id: $id,\n      clientMutationId: ""\n    }) {\n      id\n    }\n  }\n']))),M=l("nbgS"),w=function(){function n(n){this.apollo=n}return n.prototype.list=function(){return this.apollo.watchQuery({query:C}).valueChanges},n.prototype.add=function(n){return this.apollo.mutate({mutation:G,variables:{name:n.name},optimisticResponse:{createGreeting:{__typename:"createGreetingPayload",id:"",name:n.name}},update:function(n,e){var l=n.readQuery({query:C});l.greetings.edges.push({__typename:"GreetingEdge",node:{__typename:"Greeting",id:"",name:e.data.createGreeting.name}}),n.writeQuery({query:C,data:l})}})},n.prototype.deleteGreeting=function(n){return this.apollo.mutate({mutation:I,variables:{id:n},optimisticResponse:{deleteGreeting:{__typename:"deleteGreetingPayload",id:n}},update:function(e,l){var t=e.readQuery({query:C});t.greetings.edges=t.greetings.edges.filter(function(e){return e.node.id!==n}),e.writeQuery({query:C,data:t})}})},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n(t.inject(M.c))},token:n,providedIn:"root"}),n}(),R=function(){return function(){this.name=""}}(),j=function(){function n(n,e,l){this.apollo=n,this.greetingService=e,this.toastr=l,this.loadingGreetings=!0,this.createGreetingModel=new R}return n.prototype.ngOnInit=function(){var n=this;this.greetingService.list().subscribe(function(e){n.loadingGreetings=e.loading,n.greetings=e.data.greetings.edges})},n.prototype.addGreeting=function(){var n=this;this.greetingService.add({name:this.createGreetingModel.name}).subscribe(function(e){n.toastr.success(e.data.createGreeting.name+" added!")}),this.createGreetingModel=new R},n.prototype.deleteGreeting=function(n){var e=this;this.greetingService.deleteGreeting(n.node.id).subscribe(function(n){e.toastr.success("Greeting Deleted")})},n}(),P=l("SZbH"),q=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-loading-spinner",[],null,null,null,c,a)),t["\u0275did"](1,114688,null,0,r,[],null,null)],function(n,e){n(e,1,0)},null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["Hi ","! "])),(n()(),t["\u0275eld"](2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.deleteGreeting(n.context.$implicit)&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Delete"]))],null,function(n,e){n(e,1,0,e.context.$implicit.node.name)})}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](3,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,3,0,e.component.greetings)},null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](1,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](3,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Add Greeting"])),(n()(),t["\u0275eld"](6,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,l){var u=!0,i=n.component;return"submit"===e&&(u=!1!==t["\u0275nov"](n,8).onSubmit(l)&&u),"reset"===e&&(u=!1!==t["\u0275nov"](n,8).onReset()&&u),"submit"===e&&(u=!1!==i.addGreeting()&&u),u},null,null)),t["\u0275did"](7,16384,null,0,b.x,[],null,null),t["\u0275did"](8,4210688,[["createGreetingForm",4]],0,b.n,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,b.d,null,[b.n]),t["\u0275did"](10,16384,null,0,b.m,[[4,b.d]],null,null),(n()(),t["\u0275eld"](11,0,null,null,7,"input",[["id","name"],["name","name"],["placeholder","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,l){var u=!0,i=n.component;return"input"===e&&(u=!1!==t["\u0275nov"](n,12)._handleInput(l.target.value)&&u),"blur"===e&&(u=!1!==t["\u0275nov"](n,12).onTouched()&&u),"compositionstart"===e&&(u=!1!==t["\u0275nov"](n,12)._compositionStart()&&u),"compositionend"===e&&(u=!1!==t["\u0275nov"](n,12)._compositionEnd(l.target.value)&&u),"ngModelChange"===e&&(u=!1!==(i.createGreetingModel.name=l)&&u),u},null,null)),t["\u0275did"](12,16384,null,0,b.e,[t.Renderer2,t.ElementRef,[2,b.a]],null,null),t["\u0275did"](13,16384,null,0,b.s,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,b.i,function(n){return[n]},[b.s]),t["\u0275prd"](1024,null,b.j,function(n){return[n]},[b.e]),t["\u0275did"](16,671744,null,0,b.o,[[2,b.d],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.k,null,[b.o]),t["\u0275did"](18,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t["\u0275eld"](19,0,null,null,1,"button",[],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Add"]))],function(n,e){var l=e.component;n(e,1,0,l.loadingGreetings),n(e,3,0,!l.loadingGreetings),n(e,13,0,""),n(e,16,0,"name",l.createGreetingModel.name)},function(n,e){n(e,6,0,t["\u0275nov"](e,10).ngClassUntouched,t["\u0275nov"](e,10).ngClassTouched,t["\u0275nov"](e,10).ngClassPristine,t["\u0275nov"](e,10).ngClassDirty,t["\u0275nov"](e,10).ngClassValid,t["\u0275nov"](e,10).ngClassInvalid,t["\u0275nov"](e,10).ngClassPending),n(e,11,0,t["\u0275nov"](e,13).required?"":null,t["\u0275nov"](e,18).ngClassUntouched,t["\u0275nov"](e,18).ngClassTouched,t["\u0275nov"](e,18).ngClassPristine,t["\u0275nov"](e,18).ngClassDirty,t["\u0275nov"](e,18).ngClassValid,t["\u0275nov"](e,18).ngClassInvalid,t["\u0275nov"](e,18).ngClassPending),n(e,19,0,!t["\u0275nov"](e,8).valid)})}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,S,q)),t["\u0275did"](1,114688,null,0,j,[M.c,w,P.j],null,null)],function(n,e){n(e,1,0)},null)}var N=t["\u0275ccf"]("ng-component",j,T,{},{},[]),F=l("4GxJ"),k=l("t/Na"),A=l("eDkP"),L=l("Fzqc"),x=l("M2Lx"),$=l("K8t8"),E=l("N4fx"),J=l("QpxQ"),Q=l("ZYCi"),V=l("4c35"),X=l("dWZg"),Z=l("qAlS"),z=l("lLAP"),K=l("zACK"),U=l("PCNd"),Y=l("Yj9t"),H=l("PC/O"),B=function(){return function(){}}();l.d(e,"TestModuleNgFactory",function(){return W});var W=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,i.b,i.h,i.i,i.e,i.f,i.g,d.a,o.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.y,b.y,[]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,F.A,F.A,[t.ComponentFactoryResolver,t.Injector,F.ob,F.B]),t["\u0275mpd"](4608,k.j,k.p,[v.DOCUMENT,t.PLATFORM_ID,k.n]),t["\u0275mpd"](4608,k.q,k.q,[k.j,k.o]),t["\u0275mpd"](5120,k.a,function(n){return[n]},[k.q]),t["\u0275mpd"](4608,k.m,k.m,[]),t["\u0275mpd"](6144,k.k,null,[k.m]),t["\u0275mpd"](4608,k.i,k.i,[k.k]),t["\u0275mpd"](6144,k.b,null,[k.i]),t["\u0275mpd"](4608,k.f,k.l,[k.b,t.Injector]),t["\u0275mpd"](4608,k.c,k.c,[k.f]),t["\u0275mpd"](4608,A.b,A.b,[A.h,A.d,t.ComponentFactoryResolver,A.g,A.e,t.Injector,t.NgZone,v.DOCUMENT,L.b,[2,v.Location]]),t["\u0275mpd"](5120,A.i,A.j,[A.b]),t["\u0275mpd"](4608,x.a,x.a,[]),t["\u0275mpd"](4608,$.b,$.b,[[2,$.a],E.a,A.b]),t["\u0275mpd"](1073742336,b.v,b.v,[]),t["\u0275mpd"](1073742336,b.g,b.g,[]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,F.c,F.c,[]),t["\u0275mpd"](1073742336,F.g,F.g,[]),t["\u0275mpd"](1073742336,F.h,F.h,[]),t["\u0275mpd"](1073742336,F.l,F.l,[]),t["\u0275mpd"](1073742336,F.m,F.m,[]),t["\u0275mpd"](1073742336,F.r,F.r,[]),t["\u0275mpd"](1073742336,F.x,F.x,[]),t["\u0275mpd"](1073742336,F.C,F.C,[]),t["\u0275mpd"](1073742336,F.G,F.G,[]),t["\u0275mpd"](1073742336,F.J,F.J,[]),t["\u0275mpd"](1073742336,F.M,F.M,[]),t["\u0275mpd"](1073742336,F.P,F.P,[]),t["\u0275mpd"](1073742336,F.T,F.T,[]),t["\u0275mpd"](1073742336,F.X,F.X,[]),t["\u0275mpd"](1073742336,F.ab,F.ab,[]),t["\u0275mpd"](1073742336,F.bb,F.bb,[]),t["\u0275mpd"](1073742336,F.D,F.D,[]),t["\u0275mpd"](1073742336,J.c,J.c,[]),t["\u0275mpd"](1073742336,Q.o,Q.o,[[2,Q.u],[2,Q.k]]),t["\u0275mpd"](1073742336,k.e,k.e,[]),t["\u0275mpd"](1073742336,k.d,k.d,[]),t["\u0275mpd"](1073742336,E.e,E.e,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,V.f,V.f,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,A.f,A.f,[]),t["\u0275mpd"](1073742336,x.b,x.b,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,$.d,$.d,[]),t["\u0275mpd"](1073742336,K.SidebarModule,K.SidebarModule,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,B,B,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](256,J.d,J.e,[]),t["\u0275mpd"](256,k.n,"XSRF-TOKEN",[]),t["\u0275mpd"](256,k.o,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,$.a,{panelClass:"fullscreen"},[]),t["\u0275mpd"](1024,Q.i,function(){return[[{path:"greetings",component:j,canActivate:[H.a]}]]},[])])})}}]);