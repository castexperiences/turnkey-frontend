(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ZtzB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n("fXoL"),i=function(){function e(e){this.el=e,this.allowedKeys=["0","1","2","3","4","5","6","7","8","9","-","."]}return e.prototype.onKeyDown=function(e){if(-1!==this.allowedKeys.indexOf(e.key)){var t;t=this.decimalPlaces?new RegExp("^-?[0-9]*.?[0-9]{0,"+String(this.decimalPlaces)+"}$","g"):new RegExp("^-?[0-9]*$","g");var n=this.el.nativeElement.value.concat(e.key);window.getSelection().toString().length>0||!n||String(n).match(t)||e.preventDefault()}},e.prototype.onChange=function(){var e=this.el.nativeElement.value;if(e){var t=new RegExp("^-?\\d+(?:.\\d{0,"+String(this.decimalPlaces||-1)+"})?");this.el.nativeElement.value=e.toString().match(t)[0]}},e.\u0275fac=function(t){return new(t||e)(c.ac(c.o))},e.\u0275dir=c.Vb({type:e,selectors:[["","limitDecimalPlaces",""]],hostBindings:function(e,t){1&e&&c.rc("keydown",(function(e){return t.onKeyDown(e)}))("change",(function(e){return t.onChange(e)}))},inputs:{decimalPlaces:"decimalPlaces"}}),e}()},jkDv:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",(function(){return H}));var c,i,a,o,r=n("ofXK"),d=n("3Pt+"),s=n("PCNd"),l=n("tyNb"),g=n("OwiP"),f=n("1uah"),u=n("PC64"),p=n("lTCR"),m=n.n(p),v=m()(c||(a=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],o=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],Object.defineProperty?Object.defineProperty(a,"raw",{value:o}):a.raw=o,c=a)),h=m()(i||(i=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n'],['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n']))),b=n("fXoL"),w=n("/IUn"),M=function(){function e(e){this.apollo=e}return e.prototype.list=function(){return this.apollo.watchQuery({query:v}).valueChanges},e.prototype.update=function(e){return this.apollo.mutate({mutation:h,variables:e})},e.\u0275fac=function(t){return new(t||e)(b.oc(w.b))},e.\u0275prov=b.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),y=n("5eHb"),P=n("n4kJ"),C=n("ZtzB"),D=n("wOBz"),S=["updatePricingForm"];function x(e,t){1&e&&b.bc(0,"span",23)}function k(e,t){if(1&e){var n=b.hc();b.gc(0,"tr"),b.gc(1,"th",13),b.dd(2),b.fc(),b.gc(3,"td"),b.gc(4,"div",14),b.gc(5,"input",15,16),b.rc("ngModelChange",(function(e){b.Pc(n);var c=t.$implicit;return b.vc(2).model.baseMetals[c.node.name]=e})),b.fc(),b.gc(7,"div",17),b.gc(8,"span",18),b.dd(9,"\xa3 / gram"),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(10,"td",19),b.gc(11,"div",20),b.gc(12,"button",21),b.rc("click",(function(){b.Pc(n);var e=t.$implicit;return b.vc(2).onUpdateBaseMetal(e.node)})),b.bd(13,x,1,0,"span",22),b.fc(),b.fc(),b.fc(),b.fc()}if(2&e){var c=t.$implicit,i=b.Mc(6),a=b.vc(2);b.Mb(2),b.ed(c.node.name),b.Mb(3),b.Cc("ngModel",a.model.baseMetals[c.node.name])("name",c.node.name),b.Mb(7),b.Sb("fa-save",!a.state.submitting),b.Cc("disabled",!i.dirty),b.Mb(1),b.Cc("ngIf",a.state.submitting)}}function I(e,t){if(1&e){var n=b.hc();b.gc(0,"input",26,27),b.rc("ngModelChange",(function(e){b.Pc(n);var t=b.vc().$implicit;return b.vc(2).model.castingPrices[t.node.name].price=e})),b.fc()}if(2&e){var c=b.vc().$implicit,i=b.vc(2);b.Cc("ngModel",i.model.castingPrices[c.node.name].price)("decimalPlaces",2)("name",c.node.name)}}function T(e,t){if(1&e){var n=b.hc();b.gc(0,"input",26,28),b.rc("ngModelChange",(function(e){b.Pc(n);var t=b.vc().$implicit;return b.vc(2).model.castingPrices[t.node.name].rate=e})),b.fc()}if(2&e){var c=b.vc().$implicit,i=b.vc(2);b.Cc("ngModel",i.model.castingPrices[c.node.name].rate)("decimalPlaces",1)("name",c.node.name)}}function E(e,t){1&e&&b.bc(0,"span",23)}function R(e,t){if(1&e){var n=b.hc();b.gc(0,"tr"),b.gc(1,"th",13),b.dd(2),b.fc(),b.gc(3,"td"),b.gc(4,"div",14),b.bd(5,I,2,3,"input",24),b.bd(6,T,2,3,"input",24),b.gc(7,"div",17),b.gc(8,"span",18),b.dd(9),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(10,"td",19),b.gc(11,"div",20),b.gc(12,"button",25),b.rc("click",(function(){b.Pc(n);var e=t.$implicit;return b.vc(2).onUpdateCastingPrice(e.node)})),b.bd(13,E,1,0,"span",22),b.fc(),b.fc(),b.fc(),b.fc()}if(2&e){var c=t.$implicit,i=b.vc(2);b.Mb(2),b.ed(c.node.displayName),b.Mb(3),b.Cc("ngIf",null!==c.node.price),b.Mb(1),b.Cc("ngIf",null===c.node.price),b.Mb(3),b.ed(c.node.price?"\xa3":"%"),b.Mb(3),b.Sb("fa-save",!i.state.submitting),b.Mb(1),b.Cc("ngIf",i.state.submitting)}}function A(e,t){1&e&&b.bc(0,"span",23)}function Z(e,t){if(1&e){var n=b.hc();b.gc(0,"tr"),b.gc(1,"th",13),b.dd(2),b.fc(),b.gc(3,"td"),b.gc(4,"div",14),b.gc(5,"input",29,30),b.rc("ngModelChange",(function(e){b.Pc(n);var c=t.$implicit;return b.vc(2).model.royalMailZones[c.node.zone]=e})),b.fc(),b.gc(7,"div",17),b.gc(8,"span",18),b.dd(9,"\xa3"),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(10,"td",19),b.gc(11,"div",20),b.gc(12,"button",21),b.rc("click",(function(){b.Pc(n);var e=t.$implicit;return b.vc(2).onUpdateRoyalMailZone(e.node)})),b.bd(13,A,1,0,"span",22),b.fc(),b.fc(),b.fc(),b.fc()}if(2&e){var c=t.$implicit,i=b.Mc(6),a=b.vc(2);b.Mb(2),b.ed(c.node.zone),b.Mb(3),b.Cc("name",c.node.zone)("ngModel",a.model.royalMailZones[c.node.zone]),b.Mb(7),b.Sb("fa-save",!a.state.submitting),b.Cc("disabled",!i.dirty),b.Mb(1),b.Cc("ngIf",a.state.submitting)}}function z(e,t){if(1&e&&(b.gc(0,"form",5,6),b.gc(2,"div",7),b.gc(3,"div",8),b.gc(4,"h5"),b.dd(5,"Metal Prices"),b.fc(),b.gc(6,"div",9),b.gc(7,"table",10),b.gc(8,"thead"),b.gc(9,"tr"),b.gc(10,"th"),b.dd(11,"Metal"),b.fc(),b.gc(12,"th"),b.dd(13,"Price"),b.fc(),b.bc(14,"th"),b.fc(),b.fc(),b.gc(15,"tbody"),b.bd(16,k,14,7,"tr",11),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(17,"div",8),b.gc(18,"h5"),b.dd(19,"Casting and Event Prices"),b.fc(),b.gc(20,"div",9),b.gc(21,"table",10),b.gc(22,"thead"),b.gc(23,"tr"),b.gc(24,"th"),b.dd(25,"Service"),b.fc(),b.gc(26,"th"),b.dd(27,"Price"),b.fc(),b.bc(28,"th"),b.fc(),b.fc(),b.gc(29,"tbody"),b.bd(30,R,14,7,"tr",11),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(31,"div",8),b.gc(32,"h5"),b.dd(33,"Shipping Prices"),b.fc(),b.gc(34,"div",12),b.gc(35,"table",10),b.gc(36,"thead"),b.gc(37,"tr"),b.gc(38,"th"),b.dd(39,"Zone"),b.fc(),b.gc(40,"th"),b.dd(41,"Price"),b.fc(),b.bc(42,"th"),b.fc(),b.fc(),b.gc(43,"tbody"),b.bd(44,Z,14,7,"tr",11),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc()),2&e){var n=b.vc();b.Mb(16),b.Cc("ngForOf",n.data.baseMetals),b.Mb(14),b.Cc("ngForOf",n.data.castingPrices),b.Mb(14),b.Cc("ngForOf",n.data.royalMailZones)}}function W(e,t){1&e&&b.bc(0,"loading-ring",31),2&e&&b.Cc("size",60)}var $=function(){return function(){this.baseMetals={},this.castingPrices={},this.royalMailZones={}}}(),O=function(){function e(e,t,n,c){this.baseMetalService=e,this.castingPriceService=t,this.royalMailZoneService=n,this.toastr=c,this.model=new $,this.data={baseMetals:[],castingPrices:[],royalMailZones:[]},this.state={loading:!0,submitting:!1}}return e.prototype.ngOnInit=function(){var e=this;Object(f.a)(this.baseMetalService.listAll(),this.castingPriceService.list(),this.royalMailZoneService.list()).subscribe((function(t){var n=t[1],c=t[2];e.data.baseMetals=t[0].data.baseMetals.edges,e.data.castingPrices=n.data.castingPrices.edges,e.data.royalMailZones=c.data.royalMailZones.edges;for(var i=0,a=e.data.baseMetals;i<a.length;i++){var o=a[i];e.model.baseMetals[o.node.name]=o.node.pricePerGram/100}for(var r=0,d=e.data.castingPrices;r<d.length;r++){var s=d[r];e.model.castingPrices[s.node.name]={price:null!==s.node.price?s.node.price/100:null,rate:null!==s.node.rate?Math.round(1e3*s.node.rate)/10:null}}for(var l=0,g=e.data.royalMailZones;l<g.length;l++){var f=g[l];e.model.royalMailZones[f.node.zone]=f.node.shippingPrice/100}e.state.loading=!1}))},e.prototype.onUpdateBaseMetal=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,pricePerGram:Math.round(100*this.model.baseMetals[e.name])};this.baseMetalService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateBaseMetal.name+" Updated")}))},e.prototype.onUpdateCastingPrice=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,price:null!==this.model.castingPrices[e.name].price?Math.round(100*this.model.castingPrices[e.name].price):null,rate:null!==this.model.castingPrices[e.name].rate?this.model.castingPrices[e.name].rate/100:null};this.castingPriceService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateCastingPrice.displayName+" Updated")}))},e.prototype.onUpdateRoyalMailZone=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,shippingPrice:Math.round(100*this.model.royalMailZones[e.zone])};this.royalMailZoneService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateRoyalMailZone.zone+" Updated")}))},e.\u0275fac=function(t){return new(t||e)(b.ac(u.a),b.ac(g.a),b.ac(M),b.ac(y.b))},e.\u0275cmp=b.Ub({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&b.jd(S,!0),2&e&&b.Lc(n=b.sc())&&(t.updatePricingForm=n.first)},decls:5,vars:2,consts:[["subtitle","Metal, Making, and Money","title","View And Update Pricing"],[1,"card"],[1,"card-body"],["id","updatePricingForm","novalidate","",4,"ngIf"],[3,"size",4,"ngIf"],["id","updatePricingForm","novalidate",""],["updatePricingForm","ngForm"],[1,"row"],[1,"col-md-6"],[1,"table-responsive","mb-3"],[1,"data-table"],[4,"ngFor","ngForOf"],[1,"table-responsive"],["scope","row"],[1,"input-group"],["type","number",1,"form-control",3,"ngModel","name","ngModelChange"],["metalInput","ngModel"],[1,"input-group-append"],[1,"input-group-text"],[1,"tr"],[1,"btn-group"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"disabled","click"],["aria-hidden","true","class","spinner-border spinner-border-sm","role","status",4,"ngIf"],["aria-hidden","true","role","status",1,"spinner-border","spinner-border-sm"],["class","form-control","limitDecimalPlaces","","type","number",3,"ngModel","decimalPlaces","name","ngModelChange",4,"ngIf"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"click"],["limitDecimalPlaces","","type","number",1,"form-control",3,"ngModel","decimalPlaces","name","ngModelChange"],["pricesNumber","ngModel"],["pricesPercent","ngModel"],["type","number",1,"form-control",3,"name","ngModel","ngModelChange"],["royalMailInput","ngModel"],[3,"size"]],template:function(e,t){1&e&&(b.bc(0,"page-title",0),b.gc(1,"div",1),b.gc(2,"div",2),b.bd(3,z,45,3,"form",3),b.bd(4,W,1,1,"loading-ring",4),b.fc(),b.fc()),2&e&&(b.Mb(3),b.Cc("ngIf",!t.state.loading),b.Mb(1),b.Cc("ngIf",t.state.loading))},directives:[P.a,r.u,d.z,d.l,d.m,r.t,d.q,d.d,d.k,d.n,C.a,D.a],encapsulation:2}),e}(),U=n("9TxS"),F=n("zz98"),G=n("S6Vu"),J=n("AytR"),j=n("tk/3"),L=function(){function e(e){this.http=e}return e.prototype.getWIPReport=function(e,t){return n=this,void 0,i=function(){return function(e,t){var n,c,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(i=2&a[0]?c.return:a[0]?c.throw||((i=c.return)&&i.call(c),0):c.next)&&!(i=i.call(c,a[1])).done)return i;switch(c=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,c=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(r){a=[6,r],c=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,(function(n){switch(n.label){case 0:return[4,this.http.get(J.a.apiNonGraphQLUrl+"analytics/overview",{params:{from:e,to:t}}).toPromise()];case 1:return[2,n.sent()]}}))},new((c=void 0)||(c=Promise))((function(e,t){function a(e){try{r(i.next(e))}catch(n){t(n)}}function o(e){try{r(i.throw(e))}catch(n){t(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(a,o)}r((i=i.apply(n,[])).next())}));var n,c,i},e.\u0275fac=function(t){return new(t||e)(b.oc(j.b))},e.\u0275prov=b.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),N=n("1kSV"),B=n("z17N"),q=n("r1eF"),K=n("zVvu");function X(e,t){if(1&e){var n=b.hc();b.gc(0,"form",2,3),b.gc(2,"div",4),b.gc(3,"div",5),b.gc(4,"div",6),b.gc(5,"label",7),b.dd(6,"Start"),b.fc(),b.gc(7,"input",8),b.rc("ngModelChange",(function(e){return b.Pc(n),b.vc().model.range=e})),b.fc(),b.bc(8,"owl-date-time",9,10),b.fc(),b.gc(10,"div",11),b.gc(11,"label",12),b.dd(12,"End"),b.fc(),b.gc(13,"input",13),b.rc("ngModelChange",(function(e){return b.Pc(n),b.vc().model.range=e})),b.fc(),b.bc(14,"owl-date-time",9,14),b.fc(),b.fc(),b.gc(16,"div",15),b.gc(17,"button",16),b.rc("click",(function(){return b.Pc(n),b.vc().resetDates()})),b.dd(18," Search "),b.fc(),b.fc(),b.fc(),b.gc(19,"div",17),b.gc(20,"div",18),b.gc(21,"div",19),b.gc(22,"div",20),b.gc(23,"div",21),b.gc(24,"h5",22),b.dd(25,"Jobs"),b.fc(),b.fc(),b.fc(),b.gc(26,"div",23),b.gc(27,"div",24),b.bc(28,"i",25),b.gc(29,"span",26),b.dd(30,"\xa0 NOW"),b.fc(),b.fc(),b.fc(),b.gc(31,"div",23),b.gc(32,"div",27),b.gc(33,"div",28),b.gc(34,"p",29),b.dd(35,"Active Jobs"),b.fc(),b.gc(36,"h3",22),b.dd(37),b.fc(),b.gc(38,"h6"),b.dd(39),b.wc(40,"currency"),b.fc(),b.fc(),b.fc(),b.gc(41,"div",30),b.gc(42,"div",28),b.gc(43,"p",29),b.dd(44,"Pre Production"),b.fc(),b.gc(45,"h3",22),b.dd(46),b.fc(),b.gc(47,"h6"),b.dd(48),b.wc(49,"currency"),b.fc(),b.fc(),b.fc(),b.gc(50,"div",30),b.gc(51,"div",28),b.gc(52,"p",29),b.dd(53,"With Manufacturer"),b.fc(),b.gc(54,"h3",22),b.dd(55),b.fc(),b.gc(56,"h6"),b.dd(57),b.wc(58,"currency"),b.fc(),b.fc(),b.fc(),b.gc(59,"div",31),b.gc(60,"div",28),b.gc(61,"p",29),b.dd(62,"Awaiting Invoice"),b.fc(),b.gc(63,"h3",22),b.dd(64),b.fc(),b.gc(65,"h6"),b.dd(66),b.wc(67,"currency"),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(68,"div",18),b.gc(69,"div",19),b.gc(70,"div",20),b.gc(71,"div",21),b.gc(72,"h5",22),b.dd(73,"Casting Codes"),b.fc(),b.fc(),b.fc(),b.gc(74,"div",23),b.gc(75,"div",27),b.gc(76,"div",28),b.gc(77,"p",29),b.dd(78,"Outstanding"),b.fc(),b.gc(79,"h3",22),b.dd(80),b.fc(),b.gc(81,"h6",32),b.dd(82),b.wc(83,"currency"),b.fc(),b.gc(84,"h6",33),b.dd(85),b.wc(86,"currency"),b.fc(),b.fc(),b.fc(),b.gc(87,"div",30),b.gc(88,"div",28),b.gc(89,"p",29),b.dd(90,"New"),b.fc(),b.gc(91,"h3",22),b.dd(92),b.fc(),b.gc(93,"h6",32),b.dd(94),b.wc(95,"currency"),b.fc(),b.gc(96,"h6",33),b.dd(97),b.wc(98,"currency"),b.fc(),b.fc(),b.fc(),b.gc(99,"div",30),b.gc(100,"div",28),b.gc(101,"p",29),b.dd(102,"Redeemed"),b.fc(),b.gc(103,"h3",22),b.dd(104),b.fc(),b.gc(105,"h6",32),b.dd(106),b.wc(107,"currency"),b.fc(),b.gc(108,"h6",33),b.dd(109),b.wc(110,"currency"),b.fc(),b.fc(),b.fc(),b.gc(111,"div",31),b.gc(112,"div",28),b.gc(113,"p",29),b.dd(114,"Expired"),b.fc(),b.gc(115,"h3",22),b.dd(116),b.fc(),b.gc(117,"h6",32),b.dd(118),b.wc(119,"currency"),b.fc(),b.gc(120,"h6",33),b.dd(121),b.wc(122,"currency"),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(123,"div",18),b.gc(124,"div",19),b.gc(125,"div",20),b.gc(126,"div",21),b.gc(127,"h5",22),b.dd(128,"Submissions"),b.fc(),b.fc(),b.fc(),b.gc(129,"div",23),b.gc(130,"div",27),b.gc(131,"div",28),b.gc(132,"p",29),b.dd(133,"New Submissions"),b.fc(),b.gc(134,"h3",22),b.dd(135),b.fc(),b.fc(),b.fc(),b.gc(136,"div",30),b.gc(137,"div",28),b.gc(138,"p",29),b.dd(139,"Est Cost"),b.fc(),b.gc(140,"h4"),b.dd(141),b.wc(142,"currency"),b.fc(),b.gc(143,"h6",33),b.dd(144),b.wc(145,"currency"),b.fc(),b.gc(146,"h6",33),b.dd(147),b.wc(148,"currency"),b.fc(),b.fc(),b.fc(),b.gc(149,"div",31),b.gc(150,"div",28),b.gc(151,"p",29),b.dd(152,"Revenue"),b.fc(),b.gc(153,"h3",22),b.dd(154),b.wc(155,"currency"),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.gc(156,"div",18),b.gc(157,"div",19),b.gc(158,"div",20),b.gc(159,"div",21),b.gc(160,"h5",22),b.dd(161,"Kit registrations"),b.fc(),b.fc(),b.fc(),b.gc(162,"div",23),b.gc(163,"div",27),b.gc(164,"div",28),b.gc(165,"p",29),b.dd(166,"Kit Registrations"),b.fc(),b.gc(167,"h3",22),b.dd(168),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc(),b.fc()}if(2&e){var c=b.Mc(9),i=b.Mc(15),a=b.vc();b.Mb(7),b.Cc("ngModel",a.model.range)("owlDateTimeTrigger",c)("owlDateTime",c)("selectMode","rangeFrom"),b.Mb(1),b.Cc("pickerType","calendar")("startAt",a.getStart()),b.Mb(5),b.Cc("ngModel",a.model.range)("owlDateTimeTrigger",i)("owlDateTime",i)("selectMode","rangeTo"),b.Mb(1),b.Cc("pickerType","calendar")("startAt",a.getEnd()),b.Mb(23),b.ed(a.data.wipData?a.data.wipData.activeJobs.allActiveJobs.count:""),b.Mb(2),b.ed(a.data.wipData?b.xc(40,38,a.data.wipData.activeJobs.allActiveJobs.cost):""),b.Mb(7),b.ed(a.data.wipData?a.data.wipData.activeJobs.awaitingProduction.count:""),b.Mb(2),b.ed(a.data.wipData?b.xc(49,40,a.data.wipData.activeJobs.awaitingProduction.cost):""),b.Mb(7),b.ed(a.data.wipData?a.data.wipData.activeJobs.withManufacturing.count:""),b.Mb(2),b.ed(a.data.wipData?b.xc(58,42,a.data.wipData.activeJobs.withManufacturing.cost):""),b.Mb(7),b.ed(a.data.wipData?a.data.wipData.activeJobs.awaitingInvoice.count:""),b.Mb(2),b.ed(a.data.wipData?b.xc(67,44,a.data.wipData.activeJobs.awaitingInvoice.cost):""),b.Mb(14),b.ed(a.data.wipData?a.data.wipData.activeCodes.count:""),b.Mb(2),b.ed(a.data.wipData?b.xc(83,46,a.data.wipData.activeCodes.cost):""),b.Mb(3),b.ed(a.data.wipData?b.xc(86,48,a.data.wipData.activeCodes.pricePaid):""),b.Mb(7),b.ed(a.data.wipData.codeMovement?a.data.wipData.codeMovement.newCodes.count:""),b.Mb(2),b.ed(a.data.wipData.codeMovement?b.xc(95,50,a.data.wipData.codeMovement.newCodes.cost):""),b.Mb(3),b.ed(a.data.wipData.codeMovement?b.xc(98,52,a.data.wipData.codeMovement.newCodes.pricePaid):""),b.Mb(7),b.ed(a.data.wipData.codeMovement?a.data.wipData.codeMovement.redeemedCodes.count:""),b.Mb(2),b.ed(a.data.wipData.codeMovement?b.xc(107,54,a.data.wipData.codeMovement.redeemedCodes.cost):""),b.Mb(3),b.ed(a.data.wipData.codeMovement?b.xc(110,56,a.data.wipData.codeMovement.redeemedCodes.pricePaid):""),b.Mb(7),b.ed(a.data.wipData.codeMovement?a.data.wipData.codeMovement.expiredCodes.count:""),b.Mb(2),b.ed(a.data.wipData.codeMovement?b.xc(119,58,a.data.wipData.codeMovement.expiredCodes.cost):""),b.Mb(3),b.ed(a.data.wipData.codeMovement?b.xc(122,60,a.data.wipData.codeMovement.expiredCodes.pricePaid):""),b.Mb(14),b.ed(a.data.wipData.submissions?a.data.wipData.submissions.count:""),b.Mb(6),b.ed(a.data.wipData.submissions?b.xc(142,62,a.data.wipData.submissions.estCostTotal):""),b.Mb(3),b.fd("Early: ",a.data.wipData.submissions?b.xc(145,64,a.data.wipData.submissions.estCostEarly):"",""),b.Mb(3),b.fd("Weighed: ",a.data.wipData.submissions?b.xc(148,66,a.data.wipData.submissions.estCostWithWeight):"",""),b.Mb(7),b.ed(a.data.wipData.submissions?b.xc(155,68,a.data.wipData.submissions.revenue):""),b.Mb(14),b.ed(a.data.wipData.kitRegistrations?a.data.wipData.kitRegistrations.count:"")}}function V(e,t){if(1&e){var n=b.hc();b.bc(0,"modal-header",34),b.gc(1,"div",35),b.gc(2,"p"),b.dd(3," This will recalculate the cost estimates of all non-expired, non-redeemed items. "),b.fc(),b.gc(4,"p"),b.dd(5,"The old values cannot be restored. Continue?"),b.fc(),b.fc(),b.gc(6,"div",36),b.gc(7,"div"),b.gc(8,"button",37),b.rc("click",(function(){return b.Pc(n),b.vc().modalService.dismissAll()})),b.dd(9," Go Back "),b.fc(),b.gc(10,"button",16),b.rc("click",(function(){return b.Pc(n),b.vc().refreshCostEstimates()})),b.dd(11," Refresh "),b.fc(),b.fc(),b.fc()}2&e&&b.Cc("modal",t.$implicit)}var Y=function(){return function(){}}(),Q=[{path:"accounting-report",component:function(){function e(e,t,n,c,i){this.castingCodeService=e,this.modalService=t,this.pricingAndWeightService=n,this.submissionService=c,this.analyticsService=i,this.model=new Y,this.data={baseMetals:[],castingCodes:[],created:[],createdEstimatedCost:0,estimatedCostInRange:0,expired:[],expiredEstimatedCost:0,inProgressLaborEstimatedCost:0,inProgressMetalEstimatedCost:0,redeemed:[],redeemedEstimatedCost:0,submissionsInProgress:[],totalEstimatedCost:0,wipData:null},this.state={loading:!0,wipLoading:!0,loadingRange:!1,refreshingCostEstimates:!1,timeNow:new Date}}return e.prototype.ngOnInit=function(){this.state.loading=!0,this.model.range=[this.getStart(),this.getEnd()],this.refreshWIPAnalyticsData()},e.prototype.resetDates=function(){this.state.loadingRange=!0,this.model.range[0]=this.getStart(),this.model.range[1]=this.getEnd(),this.refreshWIPAnalyticsData()},e.prototype.refreshCostEstimates=function(){var e=this;this.state.refreshingCostEstimates=!0,this.modalService.dismissAll(),this.pricingAndWeightService.refreshEstimatedCosts().subscribe((function(t){e.state.refreshingCostEstimates=!1,e.ngOnInit()}))},e.prototype.getStart=function(){return this.model.range&&this.model.range[0]?new Date(this.model.range[0]):e.getDaysAgo(7)},e.getDaysAgo=function(e){var t=new Date;return t.setDate(t.getDate()-e),t},e.prototype.getEnd=function(){return this.model.range&&this.model.range[1]?new Date(this.model.range[1]):new Date},e.prototype.refreshWIPAnalyticsData=function(){var e=this;this.state.wipLoading=!0,this.getWIPAnalytics(this.dateToString(this.model.range[0]),this.dateToString(this.model.range[1])).then((function(t){e.data.wipData=t,e.state.wipLoading=!1,e.state.loading=!1}))},e.prototype.getWIPAnalytics=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),n=this,void 0,i=function(){return function(e,t){var n,c,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(i=2&a[0]?c.return:a[0]?c.throw||((i=c.return)&&i.call(c),0):c.next)&&!(i=i.call(c,a[1])).done)return i;switch(c=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,c=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(r){a=[6,r],c=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,(function(n){switch(n.label){case 0:return[4,this.analyticsService.getWIPReport(e,t)];case 1:return[2,n.sent()]}}))},new((c=void 0)||(c=Promise))((function(e,t){function a(e){try{r(i.next(e))}catch(n){t(n)}}function o(e){try{r(i.throw(e))}catch(n){t(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(a,o)}r((i=i.apply(n,[])).next())}));var n,c,i},e.prototype.dateToString=function(e){return e.toISOString().substring(0,10)},e.\u0275fac=function(t){return new(t||e)(b.ac(U.a),b.ac(N.i),b.ac(F.a),b.ac(G.a),b.ac(L))},e.\u0275cmp=b.Ub({type:e,selectors:[["ng-component"]],decls:3,vars:1,consts:[["class","portal-view analytics","novalidate","",4,"ngIf"],["modalRefresh",""],["novalidate","",1,"portal-view","analytics"],["accountingReportForm","ngForm"],[1,"w-100","view-header","py-4"],[1,"date-range-container"],[1,"form-group","dateFrom"],["for","startTime",1,"req"],["id","startTime","name","startTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],[3,"pickerType","startAt"],["dt1",""],[1,"form-group","dateTo"],["for","endTime",1,"req"],["id","endTime","name","endTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],["dt2",""],[1,"date-range-refine"],["type","button",1,"btn","btn-primary",3,"click"],[1,"container-fluid"],[1,"row","mb-4"],[1,"col","main-content","CardlessUI"],[1,"row","py-3","box-divider-bottom","justify-content-start","mb-4"],[1,"col"],[1,"mb-2"],[1,"row","mx-0"],[1,"ledContainer"],[1,"recordLed","live"],[1,"liveText"],[1,"col-md","col-12","mb-2","pl-md-0"],[1,"ShadowCard"],[1,"text-muted"],[1,"col-md","col-12","mb-2"],[1,"col-md","col-12","mb-2","pr-md-0"],[1,"mb-0"],[1,"mb-0","text-muted"],["title","Are you sure?",3,"modal"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark","mr-1",3,"click"]],template:function(e,t){1&e&&(b.bd(0,X,169,70,"form",0),b.bd(1,V,12,1,"ng-template",null,1,b.cd)),2&e&&b.Cc("ngIf",!t.state.loading)},directives:[r.u,d.z,d.l,d.m,d.d,B.e,d.u,d.k,d.n,B.g,B.c,q.a],pipes:[K.a],encapsulation:2}),e}()},{path:"pricing",component:O}],_=function(){function e(){}return e.\u0275mod=b.Yb({type:e}),e.\u0275inj=b.Xb({factory:function(t){return new(t||e)},imports:[[l.f.forChild(Q)],l.f]}),e}(),H=function(){function e(){}return e.\u0275mod=b.Yb({type:e}),e.\u0275inj=b.Xb({factory:function(t){return new(t||e)},imports:[[r.c,d.f,_,s.a,B.f,B.j]]}),e}()},n4kJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n("fXoL"),i=function(){function e(){}return Object.defineProperty(e.prototype,"title",{set:function(e){this._title=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"subtitle",{set:function(e){this._subtitle=e},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ub({type:e,selectors:[["page-title"]],inputs:{title:"title",subtitle:"subtitle"},decls:5,vars:2,consts:[[1,"page-title"],[1,"mb-0"],[1,"text-muted"]],template:function(e,t){1&e&&(c.gc(0,"div",0),c.gc(1,"h3",1),c.dd(2),c.fc(),c.gc(3,"p",2),c.dd(4),c.fc(),c.fc()),2&e&&(c.Mb(2),c.ed(t._title),c.Mb(2),c.ed(t._subtitle))},encapsulation:2}),e}()},zz98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("y/Ic"),i=n("zOkP"),a=n("PC64"),o=n("AytR"),r=n("fXoL"),d=n("tk/3"),s={Wax:.9,Silver:10.8,"9 Carat Yellow Gold":12.7,"9 Carat Rose Gold":12.7,"9 Carat White Gold":12.7,"14 Carat Yellow Gold":14.6,"14 Carat Rose Gold":14.6,"14 Carat White Gold":14.6,"18 Carat Yellow Gold":15.9,"18 Carat Rose Gold":15.9,"18 Carat White Gold":16.9,Platinum:21.4},l=function(){function e(e){this.http=e}return e.prototype.getPriceAndWeight=function(e,t){for(var n=this.getBaseMetalMap(t),o=[],r=0,d=e;r<d.length;r++){var l=d[r],g=l.node.baseMetal?l.node.baseMetal.name:a.m,f=l.node.waxWeight*(s[g]/s.Wax);l.node.earringConfig&&l.node.earringConfig.name===c.d&&(f*=2);var u,p=n[g]/100*f,m=0;switch(l.node.kitType.name){case i.g:m=1.5;break;case i.f:m=1.5,m+=l.node.jumpRing?3:0;break;case i.e:m=9}o.push({id:l.node.id,metalWeight:f,metalCost:p,finishingCost:m,castingCost:u=f>=4?8:6,cost:p+m+u})}return o},e.prototype.getBaseMetalMap=function(e){for(var t={},n=0,c=e;n<c.length;n++){var i=c[n];t[i.node.name]=i.node.pricePerGram}return t},e.prototype.refreshEstimatedCosts=function(){return this.http.get(o.a.apiNonGraphQLUrl+"refresh-price-estimates",{})},e.\u0275fac=function(t){return new(t||e)(r.oc(d.b))},e.\u0275prov=r.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);