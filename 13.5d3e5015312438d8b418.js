(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ZtzB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("fXoL"),a=function(){function e(e){this.el=e,this.allowedKeys=["0","1","2","3","4","5","6","7","8","9","-","."]}return e.prototype.onKeyDown=function(e){if(-1!==this.allowedKeys.indexOf(e.key)){var t;t=this.decimalPlaces?new RegExp("^-?[0-9]*.?[0-9]{0,"+String(this.decimalPlaces)+"}$","g"):new RegExp("^-?[0-9]*$","g");var n=this.el.nativeElement.value.concat(e.key);window.getSelection().toString().length>0||!n||String(n).match(t)||e.preventDefault()}},e.prototype.onChange=function(){var e=this.el.nativeElement.value;if(e){var t=new RegExp("^-?\\d+(?:.\\d{0,"+String(this.decimalPlaces||-1)+"})?");this.el.nativeElement.value=e.toString().match(t)[0]}},e.\u0275fac=function(t){return new(t||e)(c.ac(c.o))},e.\u0275dir=c.Vb({type:e,selectors:[["","limitDecimalPlaces",""]],hostBindings:function(e,t){1&e&&c.rc("keydown",(function(e){return t.onKeyDown(e)}))("change",(function(e){return t.onChange(e)}))},inputs:{decimalPlaces:"decimalPlaces"}}),e}()},jkDv:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",(function(){return H}));var c,a,i,o,r=n("ofXK"),d=n("3Pt+"),s=n("PCNd"),l=n("tyNb"),u=n("OwiP"),g=n("1uah"),f=n("PC64"),p=n("lTCR"),m=n.n(p),h=m()(c||(i=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],o=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],Object.defineProperty?Object.defineProperty(i,"raw",{value:o}):i.raw=o,c=i)),b=m()(a||(a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n'],['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n']))),v=n("fXoL"),w=n("/IUn"),M=function(){function e(e){this.apollo=e}return e.prototype.list=function(){return this.apollo.watchQuery({query:h}).valueChanges},e.prototype.update=function(e){return this.apollo.mutate({mutation:b,variables:e})},e.\u0275fac=function(t){return new(t||e)(v.oc(w.b))},e.\u0275prov=v.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),y=n("5eHb"),P=n("n4kJ"),C=n("ZtzB"),D=n("wOBz"),S=["updatePricingForm"];function x(e,t){1&e&&v.bc(0,"span",23)}function k(e,t){if(1&e){var n=v.hc();v.gc(0,"tr"),v.gc(1,"th",13),v.dd(2),v.fc(),v.gc(3,"td"),v.gc(4,"div",14),v.gc(5,"input",15,16),v.rc("ngModelChange",(function(e){v.Pc(n);var c=t.$implicit;return v.vc(2).model.baseMetals[c.node.name]=e})),v.fc(),v.gc(7,"div",17),v.gc(8,"span",18),v.dd(9,"\xa3 / gram"),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(10,"td",19),v.gc(11,"div",20),v.gc(12,"button",21),v.rc("click",(function(){v.Pc(n);var e=t.$implicit;return v.vc(2).onUpdateBaseMetal(e.node)})),v.bd(13,x,1,0,"span",22),v.fc(),v.fc(),v.fc(),v.fc()}if(2&e){var c=t.$implicit,a=v.Mc(6),i=v.vc(2);v.Mb(2),v.ed(c.node.name),v.Mb(3),v.Cc("ngModel",i.model.baseMetals[c.node.name])("name",c.node.name),v.Mb(7),v.Sb("fa-save",!i.state.submitting),v.Cc("disabled",!a.dirty),v.Mb(1),v.Cc("ngIf",i.state.submitting)}}function I(e,t){if(1&e){var n=v.hc();v.gc(0,"input",26,27),v.rc("ngModelChange",(function(e){v.Pc(n);var t=v.vc().$implicit;return v.vc(2).model.castingPrices[t.node.name].price=e})),v.fc()}if(2&e){var c=v.vc().$implicit,a=v.vc(2);v.Cc("ngModel",a.model.castingPrices[c.node.name].price)("decimalPlaces",2)("name",c.node.name)}}function T(e,t){if(1&e){var n=v.hc();v.gc(0,"input",26,28),v.rc("ngModelChange",(function(e){v.Pc(n);var t=v.vc().$implicit;return v.vc(2).model.castingPrices[t.node.name].rate=e})),v.fc()}if(2&e){var c=v.vc().$implicit,a=v.vc(2);v.Cc("ngModel",a.model.castingPrices[c.node.name].rate)("decimalPlaces",1)("name",c.node.name)}}function E(e,t){1&e&&v.bc(0,"span",23)}function A(e,t){if(1&e){var n=v.hc();v.gc(0,"tr"),v.gc(1,"th",13),v.dd(2),v.fc(),v.gc(3,"td"),v.gc(4,"div",14),v.bd(5,I,2,3,"input",24),v.bd(6,T,2,3,"input",24),v.gc(7,"div",17),v.gc(8,"span",18),v.dd(9),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(10,"td",19),v.gc(11,"div",20),v.gc(12,"button",25),v.rc("click",(function(){v.Pc(n);var e=t.$implicit;return v.vc(2).onUpdateCastingPrice(e.node)})),v.bd(13,E,1,0,"span",22),v.fc(),v.fc(),v.fc(),v.fc()}if(2&e){var c=t.$implicit,a=v.vc(2);v.Mb(2),v.ed(c.node.displayName),v.Mb(3),v.Cc("ngIf",null!==c.node.price),v.Mb(1),v.Cc("ngIf",null===c.node.price),v.Mb(3),v.ed(c.node.price?"\xa3":"%"),v.Mb(3),v.Sb("fa-save",!a.state.submitting),v.Mb(1),v.Cc("ngIf",a.state.submitting)}}function R(e,t){1&e&&v.bc(0,"span",23)}function Z(e,t){if(1&e){var n=v.hc();v.gc(0,"tr"),v.gc(1,"th",13),v.dd(2),v.fc(),v.gc(3,"td"),v.gc(4,"div",14),v.gc(5,"input",29,30),v.rc("ngModelChange",(function(e){v.Pc(n);var c=t.$implicit;return v.vc(2).model.royalMailZones[c.node.zone]=e})),v.fc(),v.gc(7,"div",17),v.gc(8,"span",18),v.dd(9,"\xa3"),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(10,"td",19),v.gc(11,"div",20),v.gc(12,"button",21),v.rc("click",(function(){v.Pc(n);var e=t.$implicit;return v.vc(2).onUpdateRoyalMailZone(e.node)})),v.bd(13,R,1,0,"span",22),v.fc(),v.fc(),v.fc(),v.fc()}if(2&e){var c=t.$implicit,a=v.Mc(6),i=v.vc(2);v.Mb(2),v.ed(c.node.zone),v.Mb(3),v.Cc("name",c.node.zone)("ngModel",i.model.royalMailZones[c.node.zone]),v.Mb(7),v.Sb("fa-save",!i.state.submitting),v.Cc("disabled",!a.dirty),v.Mb(1),v.Cc("ngIf",i.state.submitting)}}function z(e,t){if(1&e&&(v.gc(0,"form",5,6),v.gc(2,"div",7),v.gc(3,"div",8),v.gc(4,"h5"),v.dd(5,"Metal Prices"),v.fc(),v.gc(6,"div",9),v.gc(7,"table",10),v.gc(8,"thead"),v.gc(9,"tr"),v.gc(10,"th"),v.dd(11,"Metal"),v.fc(),v.gc(12,"th"),v.dd(13,"Price"),v.fc(),v.bc(14,"th"),v.fc(),v.fc(),v.gc(15,"tbody"),v.bd(16,k,14,7,"tr",11),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(17,"div",8),v.gc(18,"h5"),v.dd(19,"Casting and Event Prices"),v.fc(),v.gc(20,"div",9),v.gc(21,"table",10),v.gc(22,"thead"),v.gc(23,"tr"),v.gc(24,"th"),v.dd(25,"Service"),v.fc(),v.gc(26,"th"),v.dd(27,"Price"),v.fc(),v.bc(28,"th"),v.fc(),v.fc(),v.gc(29,"tbody"),v.bd(30,A,14,7,"tr",11),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(31,"div",8),v.gc(32,"h5"),v.dd(33,"Shipping Prices"),v.fc(),v.gc(34,"div",12),v.gc(35,"table",10),v.gc(36,"thead"),v.gc(37,"tr"),v.gc(38,"th"),v.dd(39,"Zone"),v.fc(),v.gc(40,"th"),v.dd(41,"Price"),v.fc(),v.bc(42,"th"),v.fc(),v.fc(),v.gc(43,"tbody"),v.bd(44,Z,14,7,"tr",11),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc()),2&e){var n=v.vc();v.Mb(16),v.Cc("ngForOf",n.data.baseMetals),v.Mb(14),v.Cc("ngForOf",n.data.castingPrices),v.Mb(14),v.Cc("ngForOf",n.data.royalMailZones)}}function W(e,t){1&e&&v.bc(0,"loading-ring",31),2&e&&v.Cc("size",60)}var $=function(){return function(){this.baseMetals={},this.castingPrices={},this.royalMailZones={}}}(),O=function(){function e(e,t,n,c){this.baseMetalService=e,this.castingPriceService=t,this.royalMailZoneService=n,this.toastr=c,this.model=new $,this.data={baseMetals:[],castingPrices:[],royalMailZones:[]},this.state={loading:!0,submitting:!1}}return e.prototype.ngOnInit=function(){var e=this;Object(g.a)(this.baseMetalService.listAll(),this.castingPriceService.list(),this.royalMailZoneService.list()).subscribe((function(t){var n=t[1],c=t[2];e.data.baseMetals=t[0].data.baseMetals.edges,e.data.castingPrices=n.data.castingPrices.edges,e.data.royalMailZones=c.data.royalMailZones.edges;for(var a=0,i=e.data.baseMetals;a<i.length;a++){var o=i[a];e.model.baseMetals[o.node.name]=o.node.pricePerGram/100}for(var r=0,d=e.data.castingPrices;r<d.length;r++){var s=d[r];e.model.castingPrices[s.node.name]={price:null!==s.node.price?s.node.price/100:null,rate:null!==s.node.rate?Math.round(1e3*s.node.rate)/10:null}}for(var l=0,u=e.data.royalMailZones;l<u.length;l++){var g=u[l];e.model.royalMailZones[g.node.zone]=g.node.shippingPrice/100}e.state.loading=!1}))},e.prototype.onUpdateBaseMetal=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,pricePerGram:Math.round(100*this.model.baseMetals[e.name])};this.baseMetalService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateBaseMetal.name+" Updated")}))},e.prototype.onUpdateCastingPrice=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,price:null!==this.model.castingPrices[e.name].price?Math.round(100*this.model.castingPrices[e.name].price):null,rate:null!==this.model.castingPrices[e.name].rate?this.model.castingPrices[e.name].rate/100:null};this.castingPriceService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateCastingPrice.displayName+" Updated")}))},e.prototype.onUpdateRoyalMailZone=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,shippingPrice:Math.round(100*this.model.royalMailZones[e.zone])};this.royalMailZoneService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateRoyalMailZone.zone+" Updated")}))},e.\u0275fac=function(t){return new(t||e)(v.ac(f.a),v.ac(u.a),v.ac(M),v.ac(y.b))},e.\u0275cmp=v.Ub({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&v.jd(S,!0),2&e&&v.Lc(n=v.sc())&&(t.updatePricingForm=n.first)},decls:5,vars:2,consts:[["subtitle","Metal, Making, and Money","title","View And Update Pricing"],[1,"card"],[1,"card-body"],["id","updatePricingForm","novalidate","",4,"ngIf"],[3,"size",4,"ngIf"],["id","updatePricingForm","novalidate",""],["updatePricingForm","ngForm"],[1,"row"],[1,"col-md-6"],[1,"table-responsive","mb-3"],[1,"data-table"],[4,"ngFor","ngForOf"],[1,"table-responsive"],["scope","row"],[1,"input-group"],["type","number",1,"form-control",3,"ngModel","name","ngModelChange"],["metalInput","ngModel"],[1,"input-group-append"],[1,"input-group-text"],[1,"tr"],[1,"btn-group"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"disabled","click"],["aria-hidden","true","class","spinner-border spinner-border-sm","role","status",4,"ngIf"],["aria-hidden","true","role","status",1,"spinner-border","spinner-border-sm"],["class","form-control","limitDecimalPlaces","","type","number",3,"ngModel","decimalPlaces","name","ngModelChange",4,"ngIf"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"click"],["limitDecimalPlaces","","type","number",1,"form-control",3,"ngModel","decimalPlaces","name","ngModelChange"],["pricesNumber","ngModel"],["pricesPercent","ngModel"],["type","number",1,"form-control",3,"name","ngModel","ngModelChange"],["royalMailInput","ngModel"],[3,"size"]],template:function(e,t){1&e&&(v.bc(0,"page-title",0),v.gc(1,"div",1),v.gc(2,"div",2),v.bd(3,z,45,3,"form",3),v.bd(4,W,1,1,"loading-ring",4),v.fc(),v.fc()),2&e&&(v.Mb(3),v.Cc("ngIf",!t.state.loading),v.Mb(1),v.Cc("ngIf",t.state.loading))},directives:[P.a,r.u,d.z,d.l,d.m,r.t,d.q,d.d,d.k,d.n,C.a,D.a],encapsulation:2}),e}(),U=n("9TxS"),F=n("zz98"),G=n("S6Vu"),J=n("AytR"),j=n("tk/3"),L=function(){function e(e){this.http=e}return e.prototype.getWIPReport=function(e,t){return n=this,void 0,a=function(){return function(e,t){var n,c,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(a=2&i[0]?c.return:i[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,i[1])).done)return a;switch(c=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,c=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(r){i=[6,r],c=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,(function(n){switch(n.label){case 0:return[4,this.http.get(J.a.apiNonGraphQLUrl+"analytics/overview",{params:{from:e,to:t}}).toPromise()];case 1:return[2,n.sent()]}}))},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(a.next(e))}catch(n){t(n)}}function o(e){try{r(a.throw(e))}catch(n){t(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}r((a=a.apply(n,[])).next())}));var n,c,a},e.\u0275fac=function(t){return new(t||e)(v.oc(j.b))},e.\u0275prov=v.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),N=n("1kSV"),B=n("z17N"),q=n("r1eF"),X=n("zVvu");function K(e,t){if(1&e){var n=v.hc();v.gc(0,"form",2,3),v.gc(2,"div",4),v.gc(3,"div",5),v.gc(4,"div",6),v.gc(5,"label",7),v.dd(6,"Start"),v.fc(),v.gc(7,"input",8),v.rc("ngModelChange",(function(e){return v.Pc(n),v.vc().model.range=e})),v.fc(),v.bc(8,"owl-date-time",9,10),v.fc(),v.gc(10,"div",11),v.gc(11,"label",12),v.dd(12,"End"),v.fc(),v.gc(13,"input",13),v.rc("ngModelChange",(function(e){return v.Pc(n),v.vc().model.range=e})),v.fc(),v.bc(14,"owl-date-time",9,14),v.fc(),v.fc(),v.gc(16,"div",15),v.gc(17,"button",16),v.rc("click",(function(){return v.Pc(n),v.vc().resetDates()})),v.dd(18," Search "),v.fc(),v.fc(),v.fc(),v.gc(19,"div",17),v.gc(20,"div",18),v.gc(21,"div",19),v.gc(22,"div",20),v.gc(23,"div",21),v.gc(24,"h5",22),v.dd(25,"Jobs"),v.fc(),v.fc(),v.fc(),v.gc(26,"div",23),v.gc(27,"div",24),v.bc(28,"i",25),v.gc(29,"span",26),v.dd(30,"\xa0 NOW"),v.fc(),v.fc(),v.fc(),v.gc(31,"div",23),v.gc(32,"div",27),v.gc(33,"div",28),v.gc(34,"p",29),v.dd(35,"Active Jobs"),v.fc(),v.gc(36,"h3",22),v.dd(37),v.fc(),v.gc(38,"h6"),v.dd(39),v.wc(40,"currency"),v.fc(),v.fc(),v.fc(),v.gc(41,"div",30),v.gc(42,"div",28),v.gc(43,"p",29),v.dd(44,"Pre Production"),v.fc(),v.gc(45,"h3",22),v.dd(46),v.fc(),v.gc(47,"h6"),v.dd(48),v.wc(49,"currency"),v.fc(),v.fc(),v.fc(),v.gc(50,"div",30),v.gc(51,"div",28),v.gc(52,"p",29),v.dd(53,"With Manufacturer"),v.fc(),v.gc(54,"h3",22),v.dd(55),v.fc(),v.gc(56,"h6"),v.dd(57),v.wc(58,"currency"),v.fc(),v.fc(),v.fc(),v.gc(59,"div",31),v.gc(60,"div",28),v.gc(61,"p",29),v.dd(62,"Awaiting Invoice"),v.fc(),v.gc(63,"h3",22),v.dd(64),v.fc(),v.gc(65,"h6"),v.dd(66),v.wc(67,"currency"),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(68,"div",18),v.gc(69,"div",19),v.gc(70,"div",20),v.gc(71,"div",21),v.gc(72,"h5",22),v.dd(73,"Casting Codes"),v.fc(),v.fc(),v.fc(),v.gc(74,"div",23),v.gc(75,"div",27),v.gc(76,"div",28),v.gc(77,"p",29),v.dd(78,"Outstanding"),v.fc(),v.gc(79,"h3",22),v.dd(80),v.fc(),v.gc(81,"h6",32),v.dd(82),v.wc(83,"currency"),v.fc(),v.gc(84,"h6",33),v.dd(85),v.wc(86,"currency"),v.fc(),v.fc(),v.fc(),v.gc(87,"div",30),v.gc(88,"div",28),v.gc(89,"p",29),v.dd(90,"New"),v.fc(),v.gc(91,"h3",22),v.dd(92),v.fc(),v.gc(93,"h6",32),v.dd(94),v.wc(95,"currency"),v.fc(),v.gc(96,"h6",33),v.dd(97),v.wc(98,"currency"),v.fc(),v.fc(),v.fc(),v.gc(99,"div",30),v.gc(100,"div",28),v.gc(101,"p",29),v.dd(102,"Redeemed"),v.fc(),v.gc(103,"h3",22),v.dd(104),v.fc(),v.gc(105,"h6",32),v.dd(106),v.wc(107,"currency"),v.fc(),v.gc(108,"h6",33),v.dd(109),v.wc(110,"currency"),v.fc(),v.fc(),v.fc(),v.gc(111,"div",31),v.gc(112,"div",28),v.gc(113,"p",29),v.dd(114,"Expired"),v.fc(),v.gc(115,"h3",22),v.dd(116),v.fc(),v.gc(117,"h6",32),v.dd(118),v.wc(119,"currency"),v.fc(),v.gc(120,"h6",33),v.dd(121),v.wc(122,"currency"),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.gc(123,"div",18),v.gc(124,"div",19),v.gc(125,"div",20),v.gc(126,"div",21),v.gc(127,"h5",22),v.dd(128,"Submissions"),v.fc(),v.fc(),v.fc(),v.gc(129,"div",23),v.gc(130,"div",27),v.gc(131,"div",28),v.gc(132,"p",29),v.dd(133,"New Submissions"),v.fc(),v.gc(134,"h3",22),v.dd(135),v.fc(),v.fc(),v.fc(),v.gc(136,"div",30),v.gc(137,"div",28),v.gc(138,"p",29),v.dd(139,"Est Cost"),v.fc(),v.gc(140,"h4"),v.dd(141),v.wc(142,"currency"),v.fc(),v.gc(143,"h6",33),v.dd(144),v.wc(145,"currency"),v.fc(),v.gc(146,"h6",33),v.dd(147),v.wc(148,"currency"),v.fc(),v.fc(),v.fc(),v.gc(149,"div",31),v.gc(150,"div",28),v.gc(151,"p",29),v.dd(152,"Revenue"),v.fc(),v.gc(153,"h3",22),v.dd(154),v.wc(155,"currency"),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc(),v.fc()}if(2&e){var c=v.Mc(9),a=v.Mc(15),i=v.vc();v.Mb(7),v.Cc("ngModel",i.model.range)("owlDateTimeTrigger",c)("owlDateTime",c)("selectMode","rangeFrom"),v.Mb(1),v.Cc("pickerType","calendar")("startAt",i.getStart()),v.Mb(5),v.Cc("ngModel",i.model.range)("owlDateTimeTrigger",a)("owlDateTime",a)("selectMode","rangeTo"),v.Mb(1),v.Cc("pickerType","calendar")("startAt",i.getEnd()),v.Mb(23),v.ed(i.data.wipData?i.data.wipData.activeJobs.allActiveJobs.count:""),v.Mb(2),v.ed(i.data.wipData?v.xc(40,37,i.data.wipData.activeJobs.allActiveJobs.cost):""),v.Mb(7),v.ed(i.data.wipData?i.data.wipData.activeJobs.awaitingProduction.count:""),v.Mb(2),v.ed(i.data.wipData?v.xc(49,39,i.data.wipData.activeJobs.awaitingProduction.cost):""),v.Mb(7),v.ed(i.data.wipData?i.data.wipData.activeJobs.withManufacturing.count:""),v.Mb(2),v.ed(i.data.wipData?v.xc(58,41,i.data.wipData.activeJobs.withManufacturing.cost):""),v.Mb(7),v.ed(i.data.wipData?i.data.wipData.activeJobs.awaitingInvoice.count:""),v.Mb(2),v.ed(i.data.wipData?v.xc(67,43,i.data.wipData.activeJobs.awaitingInvoice.cost):""),v.Mb(14),v.ed(i.data.wipData?i.data.wipData.activeCodes.count:""),v.Mb(2),v.ed(i.data.wipData?v.xc(83,45,i.data.wipData.activeCodes.cost):""),v.Mb(3),v.ed(i.data.wipData?v.xc(86,47,i.data.wipData.activeCodes.pricePaid):""),v.Mb(7),v.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.newCodes.count:""),v.Mb(2),v.ed(i.data.wipData.codeMovement?v.xc(95,49,i.data.wipData.codeMovement.newCodes.cost):""),v.Mb(3),v.ed(i.data.wipData.codeMovement?v.xc(98,51,i.data.wipData.codeMovement.newCodes.pricePaid):""),v.Mb(7),v.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.redeemedCodes.count:""),v.Mb(2),v.ed(i.data.wipData.codeMovement?v.xc(107,53,i.data.wipData.codeMovement.redeemedCodes.cost):""),v.Mb(3),v.ed(i.data.wipData.codeMovement?v.xc(110,55,i.data.wipData.codeMovement.redeemedCodes.pricePaid):""),v.Mb(7),v.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.expiredCodes.count:""),v.Mb(2),v.ed(i.data.wipData.codeMovement?v.xc(119,57,i.data.wipData.codeMovement.expiredCodes.cost):""),v.Mb(3),v.ed(i.data.wipData.codeMovement?v.xc(122,59,i.data.wipData.codeMovement.expiredCodes.pricePaid):""),v.Mb(14),v.ed(i.data.wipData.submissions?i.data.wipData.submissions.count:""),v.Mb(6),v.ed(i.data.wipData.submissions?v.xc(142,61,i.data.wipData.submissions.estCostTotal):""),v.Mb(3),v.fd("Early: ",i.data.wipData.submissions?v.xc(145,63,i.data.wipData.submissions.estCostEarly):"",""),v.Mb(3),v.fd("Weighed: ",i.data.wipData.submissions?v.xc(148,65,i.data.wipData.submissions.estCostWithWeight):"",""),v.Mb(7),v.ed(i.data.wipData.submissions?v.xc(155,67,i.data.wipData.submissions.revenue):"")}}function V(e,t){if(1&e){var n=v.hc();v.bc(0,"modal-header",34),v.gc(1,"div",35),v.gc(2,"p"),v.dd(3," This will recalculate the cost estimates of all non-expired, non-redeemed items. "),v.fc(),v.gc(4,"p"),v.dd(5,"The old values cannot be restored. Continue?"),v.fc(),v.fc(),v.gc(6,"div",36),v.gc(7,"div"),v.gc(8,"button",37),v.rc("click",(function(){return v.Pc(n),v.vc().modalService.dismissAll()})),v.dd(9," Go Back "),v.fc(),v.gc(10,"button",16),v.rc("click",(function(){return v.Pc(n),v.vc().refreshCostEstimates()})),v.dd(11," Refresh "),v.fc(),v.fc(),v.fc()}2&e&&v.Cc("modal",t.$implicit)}var Y=function(){return function(){}}(),Q=[{path:"accounting-report",component:function(){function e(e,t,n,c,a){this.castingCodeService=e,this.modalService=t,this.pricingAndWeightService=n,this.submissionService=c,this.analyticsService=a,this.model=new Y,this.data={baseMetals:[],castingCodes:[],created:[],createdEstimatedCost:0,estimatedCostInRange:0,expired:[],expiredEstimatedCost:0,inProgressLaborEstimatedCost:0,inProgressMetalEstimatedCost:0,redeemed:[],redeemedEstimatedCost:0,submissionsInProgress:[],totalEstimatedCost:0,wipData:null},this.state={loading:!0,wipLoading:!0,loadingRange:!1,refreshingCostEstimates:!1,timeNow:new Date}}return e.prototype.ngOnInit=function(){this.state.loading=!0,this.model.range=[this.getStart(),this.getEnd()],this.refreshWIPAnalyticsData()},e.prototype.resetDates=function(){this.state.loadingRange=!0,this.model.range[0]=this.getStart(),this.model.range[1]=this.getEnd(),this.refreshWIPAnalyticsData()},e.prototype.refreshCostEstimates=function(){var e=this;this.state.refreshingCostEstimates=!0,this.modalService.dismissAll(),this.pricingAndWeightService.refreshEstimatedCosts().subscribe((function(t){e.state.refreshingCostEstimates=!1,e.ngOnInit()}))},e.prototype.getStart=function(){return this.model.range&&this.model.range[0]?new Date(this.model.range[0]):e.getDaysAgo(7)},e.getDaysAgo=function(e){var t=new Date;return t.setDate(t.getDate()-e),t},e.prototype.getEnd=function(){return this.model.range&&this.model.range[1]?new Date(this.model.range[1]):new Date},e.prototype.refreshWIPAnalyticsData=function(){var e=this;this.state.wipLoading=!0,this.getWIPAnalytics(this.dateToString(this.model.range[0]),this.dateToString(this.model.range[1])).then((function(t){e.data.wipData=t,e.state.wipLoading=!1,e.state.loading=!1}))},e.prototype.getWIPAnalytics=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),n=this,void 0,a=function(){return function(e,t){var n,c,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(a=2&i[0]?c.return:i[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,i[1])).done)return a;switch(c=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,c=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(r){i=[6,r],c=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,(function(n){switch(n.label){case 0:return[4,this.analyticsService.getWIPReport(e,t)];case 1:return[2,n.sent()]}}))},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(a.next(e))}catch(n){t(n)}}function o(e){try{r(a.throw(e))}catch(n){t(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}r((a=a.apply(n,[])).next())}));var n,c,a},e.prototype.dateToString=function(e){return e.toISOString().substring(0,10)},e.\u0275fac=function(t){return new(t||e)(v.ac(U.a),v.ac(N.i),v.ac(F.a),v.ac(G.a),v.ac(L))},e.\u0275cmp=v.Ub({type:e,selectors:[["ng-component"]],decls:3,vars:1,consts:[["class","portal-view analytics","novalidate","",4,"ngIf"],["modalRefresh",""],["novalidate","",1,"portal-view","analytics"],["accountingReportForm","ngForm"],[1,"w-100","view-header","py-4"],[1,"date-range-container"],[1,"form-group","dateFrom"],["for","startTime",1,"req"],["id","startTime","name","startTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],[3,"pickerType","startAt"],["dt1",""],[1,"form-group","dateTo"],["for","endTime",1,"req"],["id","endTime","name","endTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],["dt2",""],[1,"date-range-refine"],["type","button",1,"btn","btn-primary",3,"click"],[1,"container-fluid"],[1,"row","mb-4"],[1,"col","main-content","CardlessUI"],[1,"row","py-3","box-divider-bottom","justify-content-start","mb-4"],[1,"col"],[1,"mb-2"],[1,"row","mx-0"],[1,"ledContainer"],[1,"recordLed","live"],[1,"liveText"],[1,"col-md","col-12","mb-2","pl-md-0"],[1,"ShadowCard"],[1,"text-muted"],[1,"col-md","col-12","mb-2"],[1,"col-md","col-12","mb-2","pr-md-0"],[1,"mb-0"],[1,"mb-0","text-muted"],["title","Are you sure?",3,"modal"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark","mr-1",3,"click"]],template:function(e,t){1&e&&(v.bd(0,K,156,69,"form",0),v.bd(1,V,12,1,"ng-template",null,1,v.cd)),2&e&&v.Cc("ngIf",!t.state.loading)},directives:[r.u,d.z,d.l,d.m,d.d,B.e,d.u,d.k,d.n,B.g,B.c,q.a],pipes:[X.a],encapsulation:2}),e}()},{path:"pricing",component:O}],_=function(){function e(){}return e.\u0275mod=v.Yb({type:e}),e.\u0275inj=v.Xb({factory:function(t){return new(t||e)},imports:[[l.f.forChild(Q)],l.f]}),e}(),H=function(){function e(){}return e.\u0275mod=v.Yb({type:e}),e.\u0275inj=v.Xb({factory:function(t){return new(t||e)},imports:[[r.c,d.f,_,s.a,B.f,B.j]]}),e}()},n4kJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("fXoL"),a=function(){function e(){}return Object.defineProperty(e.prototype,"title",{set:function(e){this._title=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"subtitle",{set:function(e){this._subtitle=e},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ub({type:e,selectors:[["page-title"]],inputs:{title:"title",subtitle:"subtitle"},decls:5,vars:2,consts:[[1,"page-title"],[1,"mb-0"],[1,"text-muted"]],template:function(e,t){1&e&&(c.gc(0,"div",0),c.gc(1,"h3",1),c.dd(2),c.fc(),c.gc(3,"p",2),c.dd(4),c.fc(),c.fc()),2&e&&(c.Mb(2),c.ed(t._title),c.Mb(2),c.ed(t._subtitle))},encapsulation:2}),e}()},zz98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("y/Ic"),a=n("zOkP"),i=n("PC64"),o=n("AytR"),r=n("fXoL"),d=n("tk/3"),s={Wax:.9,Silver:10.8,"9 Carat Yellow Gold":12.7,"9 Carat Rose Gold":12.7,"9 Carat White Gold":12.7,"14 Carat Yellow Gold":14.6,"14 Carat Rose Gold":14.6,"14 Carat White Gold":14.6,"18 Carat Yellow Gold":15.9,"18 Carat Rose Gold":15.9,"18 Carat White Gold":16.9,Platinum:21.4},l=function(){function e(e){this.http=e}return e.prototype.getPriceAndWeight=function(e,t){for(var n=this.getBaseMetalMap(t),o=[],r=0,d=e;r<d.length;r++){var l=d[r],u=l.node.baseMetal?l.node.baseMetal.name:i.m,g=l.node.waxWeight*(s[u]/s.Wax);l.node.earringConfig&&l.node.earringConfig.name===c.d&&(g*=2);var f,p=n[u]/100*g,m=0;switch(l.node.kitType.name){case a.g:m=1.5;break;case a.f:m=1.5,m+=l.node.jumpRing?3:0;break;case a.e:m=9}o.push({id:l.node.id,metalWeight:g,metalCost:p,finishingCost:m,castingCost:f=g>=4?8:6,cost:p+m+f})}return o},e.prototype.getBaseMetalMap=function(e){for(var t={},n=0,c=e;n<c.length;n++){var a=c[n];t[a.node.name]=a.node.pricePerGram}return t},e.prototype.refreshEstimatedCosts=function(){return this.http.get(o.a.apiNonGraphQLUrl+"refresh-price-estimates",{})},e.\u0275fac=function(t){return new(t||e)(r.oc(d.b))},e.\u0275prov=r.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);