(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{DnJw:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),u=function(){return function(){}}(),i=l("pMnS"),r=l("9AJC"),o=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),a=t.pb({encapsulation:0,styles:[[""]],data:{}});function d(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" loading-spinner works!\n"]))],null,null)}var g,c,s,b,p,m=l("Ip0R"),f=l("gIcY"),y=l("lTCR"),h=l.n(y),G=h()(g||(b=["\n  query greetingsList {\n    greetings {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"],p=["\n  query greetingsList {\n    greetings {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"],Object.defineProperty?Object.defineProperty(b,"raw",{value:p}):b.raw=p,g=b)),v=h()(c||(c=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(['\n  mutation createGreeting($name: String!) {\n    createGreeting(input: {\n      name: $name,\n      clientMutationId: ""\n    }) {\n      id\n      name\n    }\n  }\n'],['\n  mutation createGreeting($name: String!) {\n    createGreeting(input: {\n      name: $name,\n      clientMutationId: ""\n    }) {\n      id\n      name\n    }\n  }\n']))),q=h()(s||(s=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(['\n  mutation deleteGreeting($id: ID!) {\n    deleteGreeting(input: {\n      id: $id,\n      clientMutationId: ""\n    }) {\n      id\n    }\n  }\n'],['\n  mutation deleteGreeting($id: ID!) {\n    deleteGreeting(input: {\n      id: $id,\n      clientMutationId: ""\n    }) {\n      id\n    }\n  }\n']))),B=l("KB5g"),C=function(){function n(n){this.apollo=n}return n.prototype.list=function(){return this.apollo.watchQuery({query:G}).valueChanges},n.prototype.add=function(n){return this.apollo.mutate({mutation:v,variables:{name:n.name},optimisticResponse:{createGreeting:{__typename:"createGreetingPayload",id:"",name:n.name}},update:function(n,e){var l=n.readQuery({query:G});l.greetings.edges.push({__typename:"GreetingEdge",node:{__typename:"Greeting",id:"",name:e.data.createGreeting.name}}),n.writeQuery({query:G,data:l})}})},n.prototype.deleteGreeting=function(n){return this.apollo.mutate({mutation:q,variables:{id:n},optimisticResponse:{deleteGreeting:{__typename:"deleteGreetingPayload",id:n}},update:function(e,l){var t=e.readQuery({query:G});t.greetings.edges=t.greetings.edges.filter(function(e){return e.node.id!==n}),e.writeQuery({query:G,data:t})}})},n.ngInjectableDef=t.U({factory:function(){return new n(t.Y(B.b))},token:n,providedIn:"root"}),n}(),w=function(){return function(){this.name=""}}(),I=function(){function n(n,e,l){this.apollo=n,this.greetingService=e,this.toastr=l,this.loadingGreetings=!0,this.createGreetingModel=new w}return n.prototype.ngOnInit=function(){var n=this;this.greetingService.list().subscribe(function(e){n.loadingGreetings=e.loading,n.greetings=e.data.greetings.edges})},n.prototype.addGreeting=function(){var n=this;this.greetingService.add({name:this.createGreetingModel.name}).subscribe(function(e){n.toastr.success(e.data.createGreeting.name+" added!")}),this.createGreetingModel=new w},n.prototype.deleteGreeting=function(n){var e=this;this.greetingService.deleteGreeting(n.node.id).subscribe(function(n){e.toastr.success("Greeting Deleted")})},n}(),M=l("SZbH"),P=t.pb({encapsulation:2,styles:[],data:{}});function j(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"app-loading-spinner",[],null,null,null,d,a)),t.qb(1,114688,null,0,o,[],null,null)],function(n,e){n(e,1,0)},null)}function z(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.Jb(1,null,["Hi ","! "])),(n()(),t.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.deleteGreeting(n.context.$implicit)&&t),t},null,null)),(n()(),t.Jb(-1,null,["Delete"]))],null,function(n,e){n(e,1,0,e.context.$implicit.node.name)})}function k(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),t.rb(1,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.ib(16777216,null,null,1,null,z)),t.qb(3,278528,null,0,m.j,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,3,0,e.component.greetings)},null)}function O(n){return t.Lb(0,[(n()(),t.ib(16777216,null,null,1,null,j)),t.qb(1,16384,null,0,m.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,null,1,null,k)),t.qb(3,16384,null,0,m.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(n()(),t.rb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Add Greeting"])),(n()(),t.rb(6,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,l){var u=!0,i=n.component;return"submit"===e&&(u=!1!==t.Bb(n,8).onSubmit(l)&&u),"reset"===e&&(u=!1!==t.Bb(n,8).onReset()&&u),"submit"===e&&(u=!1!==i.addGreeting()&&u),u},null,null)),t.qb(7,16384,null,0,f.t,[],null,null),t.qb(8,4210688,[["createGreetingForm",4]],0,f.k,[[8,null],[8,null]],null,null),t.Gb(2048,null,f.b,null,[f.k]),t.qb(10,16384,null,0,f.j,[[4,f.b]],null,null),(n()(),t.rb(11,0,null,null,7,"input",[["id","name"],["name","name"],["placeholder","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,l){var u=!0,i=n.component;return"input"===e&&(u=!1!==t.Bb(n,12)._handleInput(l.target.value)&&u),"blur"===e&&(u=!1!==t.Bb(n,12).onTouched()&&u),"compositionstart"===e&&(u=!1!==t.Bb(n,12)._compositionStart()&&u),"compositionend"===e&&(u=!1!==t.Bb(n,12)._compositionEnd(l.target.value)&&u),"ngModelChange"===e&&(u=!1!==(i.createGreetingModel.name=l)&&u),u},null,null)),t.qb(12,16384,null,0,f.c,[t.F,t.k,[2,f.a]],null,null),t.qb(13,16384,null,0,f.o,[],{required:[0,"required"]},null),t.Gb(1024,null,f.f,function(n){return[n]},[f.o]),t.Gb(1024,null,f.g,function(n){return[n]},[f.c]),t.qb(16,671744,null,0,f.l,[[2,f.b],[6,f.f],[8,null],[6,f.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,f.h,null,[f.l]),t.qb(18,16384,null,0,f.i,[[4,f.h]],null,null),(n()(),t.rb(19,0,null,null,1,"button",[],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Jb(-1,null,["Add"]))],function(n,e){var l=e.component;n(e,1,0,l.loadingGreetings),n(e,3,0,!l.loadingGreetings),n(e,13,0,""),n(e,16,0,"name",l.createGreetingModel.name)},function(n,e){n(e,6,0,t.Bb(e,10).ngClassUntouched,t.Bb(e,10).ngClassTouched,t.Bb(e,10).ngClassPristine,t.Bb(e,10).ngClassDirty,t.Bb(e,10).ngClassValid,t.Bb(e,10).ngClassInvalid,t.Bb(e,10).ngClassPending),n(e,11,0,t.Bb(e,13).required?"":null,t.Bb(e,18).ngClassUntouched,t.Bb(e,18).ngClassTouched,t.Bb(e,18).ngClassPristine,t.Bb(e,18).ngClassDirty,t.Bb(e,18).ngClassValid,t.Bb(e,18).ngClassInvalid,t.Bb(e,18).ngClassPending),n(e,19,0,!t.Bb(e,8).valid)})}function _(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"ng-component",[],null,null,null,O,P)),t.qb(1,114688,null,0,I,[B.b,C,M.j],null,null)],function(n,e){n(e,1,0)},null)}var J=t.nb("ng-component",I,_,{},{},[]),S=l("ZYCi"),$=l("4GxJ"),D=l("PCNd"),L=l("Yj9t"),Q=l("PC/O"),R=function(){return function(){}}();l.d(e,"TestModuleNgFactory",function(){return F});var F=t.ob(u,[],function(n){return t.yb([t.zb(512,t.j,t.db,[[8,[i.a,r.d,J]],[3,t.j],t.y]),t.zb(4608,f.u,f.u,[]),t.zb(4608,m.m,m.l,[t.v,[2,m.B]]),t.zb(1073742336,f.r,f.r,[]),t.zb(1073742336,f.d,f.d,[]),t.zb(1073742336,m.b,m.b,[]),t.zb(1073742336,S.o,S.o,[[2,S.u],[2,S.k]]),t.zb(1073742336,$.R,$.R,[]),t.zb(1073742336,D.a,D.a,[]),t.zb(1073742336,L.a,L.a,[]),t.zb(1073742336,R,R,[]),t.zb(1073742336,u,u,[]),t.zb(1024,S.i,function(){return[[{path:"greetings",component:I,canActivate:[Q.a]}]]},[])])})}}]);