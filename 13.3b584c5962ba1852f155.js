(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ZtzB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("fXoL"),a=function(){function e(e){this.el=e,this.allowedKeys=["0","1","2","3","4","5","6","7","8","9","-","."]}return e.prototype.onKeyDown=function(e){if(-1!==this.allowedKeys.indexOf(e.key)){var t;t=this.decimalPlaces?new RegExp("^-?[0-9]*.?[0-9]{0,"+String(this.decimalPlaces)+"}$","g"):new RegExp("^-?[0-9]*$","g");var n=this.el.nativeElement.value.concat(e.key);window.getSelection().toString().length>0||!n||String(n).match(t)||e.preventDefault()}},e.prototype.onChange=function(){var e=this.el.nativeElement.value;if(e){var t=new RegExp("^-?\\d+(?:.\\d{0,"+String(this.decimalPlaces||-1)+"})?");this.el.nativeElement.value=e.toString().match(t)[0]}},e.\u0275fac=function(t){return new(t||e)(c.ac(c.o))},e.\u0275dir=c.Vb({type:e,selectors:[["","limitDecimalPlaces",""]],hostBindings:function(e,t){1&e&&c.rc("keydown",(function(e){return t.onKeyDown(e)}))("change",(function(e){return t.onChange(e)}))},inputs:{decimalPlaces:"decimalPlaces"}}),e}()},jkDv:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",(function(){return de}));var c,a,i,o,r=n("ofXK"),d=n("3Pt+"),s=n("PCNd"),l=n("tyNb"),g=n("OwiP"),f=n("1uah"),u=n("PC64"),p=n("lTCR"),v=n.n(p),m=v()(c||(i=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],o=["\n    query royalMailZoneList {\n        royalMailZones {\n            edges  {\n                node {\n                    id\n                    zone\n                    shippingPrice\n                }\n            }\n        }\n    }\n"],Object.defineProperty?Object.defineProperty(i,"raw",{value:o}):i.raw=o,c=i)),b=v()(a||(a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n'],['\n    mutation updateRoyalMailZone(\n        $id: ID!,\n        $shippingPrice: Int,\n    ) {\n        updateRoyalMailZone(input: {\n            id: $id,\n            shippingPrice: $shippingPrice,\n            clientMutationId: "",\n        }) {\n            id\n            zone\n        }\n    }\n']))),h=n("fXoL"),w=n("/IUn"),M=function(){function e(e){this.apollo=e}return e.prototype.list=function(){return this.apollo.watchQuery({query:m}).valueChanges},e.prototype.update=function(e){return this.apollo.mutate({mutation:b,variables:e})},e.\u0275fac=function(t){return new(t||e)(h.oc(w.b))},e.\u0275prov=h.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),y=n("5eHb"),C=n("n4kJ"),P=n("ZtzB"),D=n("wOBz"),x=["updatePricingForm"];function S(e,t){1&e&&h.bc(0,"span",23)}function I(e,t){if(1&e){var n=h.hc();h.gc(0,"tr"),h.gc(1,"th",13),h.dd(2),h.fc(),h.gc(3,"td"),h.gc(4,"div",14),h.gc(5,"input",15,16),h.rc("ngModelChange",(function(e){h.Pc(n);var c=t.$implicit;return h.vc(2).model.baseMetals[c.node.name]=e})),h.fc(),h.gc(7,"div",17),h.gc(8,"span",18),h.dd(9,"\xa3 / gram"),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(10,"td",19),h.gc(11,"div",20),h.gc(12,"button",21),h.rc("click",(function(){h.Pc(n);var e=t.$implicit;return h.vc(2).onUpdateBaseMetal(e.node)})),h.bd(13,S,1,0,"span",22),h.fc(),h.fc(),h.fc(),h.fc()}if(2&e){var c=t.$implicit,a=h.Mc(6),i=h.vc(2);h.Mb(2),h.ed(c.node.name),h.Mb(3),h.Cc("ngModel",i.model.baseMetals[c.node.name])("name",c.node.name),h.Mb(7),h.Sb("fa-save",!i.state.submitting),h.Cc("disabled",!a.dirty),h.Mb(1),h.Cc("ngIf",i.state.submitting)}}function k(e,t){if(1&e){var n=h.hc();h.gc(0,"input",26,27),h.rc("ngModelChange",(function(e){h.Pc(n);var t=h.vc().$implicit;return h.vc(2).model.castingPrices[t.node.name].price=e})),h.fc()}if(2&e){var c=h.vc().$implicit,a=h.vc(2);h.Cc("ngModel",a.model.castingPrices[c.node.name].price)("decimalPlaces",2)("name",c.node.name)}}function T(e,t){if(1&e){var n=h.hc();h.gc(0,"input",26,28),h.rc("ngModelChange",(function(e){h.Pc(n);var t=h.vc().$implicit;return h.vc(2).model.castingPrices[t.node.name].rate=e})),h.fc()}if(2&e){var c=h.vc().$implicit,a=h.vc(2);h.Cc("ngModel",a.model.castingPrices[c.node.name].rate)("decimalPlaces",1)("name",c.node.name)}}function A(e,t){1&e&&h.bc(0,"span",23)}function E(e,t){if(1&e){var n=h.hc();h.gc(0,"tr"),h.gc(1,"th",13),h.dd(2),h.fc(),h.gc(3,"td"),h.gc(4,"div",14),h.bd(5,k,2,3,"input",24),h.bd(6,T,2,3,"input",24),h.gc(7,"div",17),h.gc(8,"span",18),h.dd(9),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(10,"td",19),h.gc(11,"div",20),h.gc(12,"button",25),h.rc("click",(function(){h.Pc(n);var e=t.$implicit;return h.vc(2).onUpdateCastingPrice(e.node)})),h.bd(13,A,1,0,"span",22),h.fc(),h.fc(),h.fc(),h.fc()}if(2&e){var c=t.$implicit,a=h.vc(2);h.Mb(2),h.ed(c.node.displayName),h.Mb(3),h.Cc("ngIf",null!==c.node.price),h.Mb(1),h.Cc("ngIf",null===c.node.price),h.Mb(3),h.ed(c.node.price?"\xa3":"%"),h.Mb(3),h.Sb("fa-save",!a.state.submitting),h.Mb(1),h.Cc("ngIf",a.state.submitting)}}function R(e,t){1&e&&h.bc(0,"span",23)}function Z(e,t){if(1&e){var n=h.hc();h.gc(0,"tr"),h.gc(1,"th",13),h.dd(2),h.fc(),h.gc(3,"td"),h.gc(4,"div",14),h.gc(5,"input",29,30),h.rc("ngModelChange",(function(e){h.Pc(n);var c=t.$implicit;return h.vc(2).model.royalMailZones[c.node.zone]=e})),h.fc(),h.gc(7,"div",17),h.gc(8,"span",18),h.dd(9,"\xa3"),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(10,"td",19),h.gc(11,"div",20),h.gc(12,"button",21),h.rc("click",(function(){h.Pc(n);var e=t.$implicit;return h.vc(2).onUpdateRoyalMailZone(e.node)})),h.bd(13,R,1,0,"span",22),h.fc(),h.fc(),h.fc(),h.fc()}if(2&e){var c=t.$implicit,a=h.Mc(6),i=h.vc(2);h.Mb(2),h.ed(c.node.zone),h.Mb(3),h.Cc("name",c.node.zone)("ngModel",i.model.royalMailZones[c.node.zone]),h.Mb(7),h.Sb("fa-save",!i.state.submitting),h.Cc("disabled",!a.dirty),h.Mb(1),h.Cc("ngIf",i.state.submitting)}}function z(e,t){if(1&e&&(h.gc(0,"form",5,6),h.gc(2,"div",7),h.gc(3,"div",8),h.gc(4,"h5"),h.dd(5,"Metal Prices"),h.fc(),h.gc(6,"div",9),h.gc(7,"table",10),h.gc(8,"thead"),h.gc(9,"tr"),h.gc(10,"th"),h.dd(11,"Metal"),h.fc(),h.gc(12,"th"),h.dd(13,"Price"),h.fc(),h.bc(14,"th"),h.fc(),h.fc(),h.gc(15,"tbody"),h.bd(16,I,14,7,"tr",11),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(17,"div",8),h.gc(18,"h5"),h.dd(19,"Casting and Event Prices"),h.fc(),h.gc(20,"div",9),h.gc(21,"table",10),h.gc(22,"thead"),h.gc(23,"tr"),h.gc(24,"th"),h.dd(25,"Service"),h.fc(),h.gc(26,"th"),h.dd(27,"Price"),h.fc(),h.bc(28,"th"),h.fc(),h.fc(),h.gc(29,"tbody"),h.bd(30,E,14,7,"tr",11),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(31,"div",8),h.gc(32,"h5"),h.dd(33,"Shipping Prices"),h.fc(),h.gc(34,"div",12),h.gc(35,"table",10),h.gc(36,"thead"),h.gc(37,"tr"),h.gc(38,"th"),h.dd(39,"Zone"),h.fc(),h.gc(40,"th"),h.dd(41,"Price"),h.fc(),h.bc(42,"th"),h.fc(),h.fc(),h.gc(43,"tbody"),h.bd(44,Z,14,7,"tr",11),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc();h.Mb(16),h.Cc("ngForOf",n.data.baseMetals),h.Mb(14),h.Cc("ngForOf",n.data.castingPrices),h.Mb(14),h.Cc("ngForOf",n.data.royalMailZones)}}function W(e,t){1&e&&h.bc(0,"loading-ring",31),2&e&&h.Cc("size",60)}var $=function(){return function(){this.baseMetals={},this.castingPrices={},this.royalMailZones={}}}(),O=function(){function e(e,t,n,c){this.baseMetalService=e,this.castingPriceService=t,this.royalMailZoneService=n,this.toastr=c,this.model=new $,this.data={baseMetals:[],castingPrices:[],royalMailZones:[]},this.state={loading:!0,submitting:!1}}return e.prototype.ngOnInit=function(){var e=this;Object(f.a)(this.baseMetalService.listAll(),this.castingPriceService.list(),this.royalMailZoneService.list()).subscribe((function(t){var n=t[1],c=t[2];e.data.baseMetals=t[0].data.baseMetals.edges,e.data.castingPrices=n.data.castingPrices.edges,e.data.royalMailZones=c.data.royalMailZones.edges;for(var a=0,i=e.data.baseMetals;a<i.length;a++){var o=i[a];e.model.baseMetals[o.node.name]=o.node.pricePerGram/100}for(var r=0,d=e.data.castingPrices;r<d.length;r++){var s=d[r];e.model.castingPrices[s.node.name]={price:null!==s.node.price?s.node.price/100:null,rate:null!==s.node.rate?Math.round(1e3*s.node.rate)/10:null}}for(var l=0,g=e.data.royalMailZones;l<g.length;l++){var f=g[l];e.model.royalMailZones[f.node.zone]=f.node.shippingPrice/100}e.state.loading=!1}))},e.prototype.onUpdateBaseMetal=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,pricePerGram:Math.round(100*this.model.baseMetals[e.name])};this.baseMetalService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateBaseMetal.name+" Updated")}))},e.prototype.onUpdateCastingPrice=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,price:null!==this.model.castingPrices[e.name].price?Math.round(100*this.model.castingPrices[e.name].price):null,rate:null!==this.model.castingPrices[e.name].rate?this.model.castingPrices[e.name].rate/100:null};this.castingPriceService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateCastingPrice.displayName+" Updated")}))},e.prototype.onUpdateRoyalMailZone=function(e){var t=this;this.state.submitting=!0,this.toastr.success("","Updating");var n={id:e.id,shippingPrice:Math.round(100*this.model.royalMailZones[e.zone])};this.royalMailZoneService.update(n).subscribe((function(e){t.state.submitting=!1,t.updatePricingForm.form.markAsPristine(),t.toastr.success("",e.data.updateRoyalMailZone.zone+" Updated")}))},e.\u0275fac=function(t){return new(t||e)(h.ac(u.a),h.ac(g.a),h.ac(M),h.ac(y.b))},e.\u0275cmp=h.Ub({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&h.jd(x,!0),2&e&&h.Lc(n=h.sc())&&(t.updatePricingForm=n.first)},decls:5,vars:2,consts:[["subtitle","Metal, Making, and Money","title","View And Update Pricing"],[1,"card"],[1,"card-body"],["id","updatePricingForm","novalidate","",4,"ngIf"],[3,"size",4,"ngIf"],["id","updatePricingForm","novalidate",""],["updatePricingForm","ngForm"],[1,"row"],[1,"col-md-6"],[1,"table-responsive","mb-3"],[1,"data-table"],[4,"ngFor","ngForOf"],[1,"table-responsive"],["scope","row"],[1,"input-group"],["type","number",1,"form-control",3,"ngModel","name","ngModelChange"],["metalInput","ngModel"],[1,"input-group-append"],[1,"input-group-text"],[1,"tr"],[1,"btn-group"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"disabled","click"],["aria-hidden","true","class","spinner-border spinner-border-sm","role","status",4,"ngIf"],["aria-hidden","true","role","status",1,"spinner-border","spinner-border-sm"],["class","form-control","limitDecimalPlaces","","type","number",3,"ngModel","decimalPlaces","name","ngModelChange",4,"ngIf"],["type","button",1,"btn","icon-btn-outline","mx-1","fas","color-primary",3,"click"],["limitDecimalPlaces","","type","number",1,"form-control",3,"ngModel","decimalPlaces","name","ngModelChange"],["pricesNumber","ngModel"],["pricesPercent","ngModel"],["type","number",1,"form-control",3,"name","ngModel","ngModelChange"],["royalMailInput","ngModel"],[3,"size"]],template:function(e,t){1&e&&(h.bc(0,"page-title",0),h.gc(1,"div",1),h.gc(2,"div",2),h.bd(3,z,45,3,"form",3),h.bd(4,W,1,1,"loading-ring",4),h.fc(),h.fc()),2&e&&(h.Mb(3),h.Cc("ngIf",!t.state.loading),h.Mb(1),h.Cc("ngIf",t.state.loading))},directives:[C.a,r.u,d.z,d.l,d.m,r.t,d.q,d.d,d.k,d.n,P.a,D.a],encapsulation:2}),e}(),U=n("9TxS"),F=n("zz98"),G=n("S6Vu"),J=n("AytR"),L=n("tk/3"),j=function(e,t,n,c){return new(n||(n=Promise))((function(a,i){function o(e){try{d(c.next(e))}catch(t){i(t)}}function r(e){try{d(c.throw(e))}catch(t){i(t)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}d((c=c.apply(e,t||[])).next())}))},B=function(e,t){var n,c,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(a=2&i[0]?c.return:i[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,i[1])).done)return a;switch(c=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,c=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(r){i=[6,r],c=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}},N=function(){function e(e){this.http=e}return e.prototype.getWIPReport=function(e,t){return j(this,void 0,void 0,(function(){return B(this,(function(n){switch(n.label){case 0:return[4,this.http.get(J.a.apiNonGraphQLUrl+"analytics/overview",{params:{from:e,to:t}}).toPromise()];case 1:return[2,n.sent()]}}))}))},e.prototype.getAverageCosts=function(e){return j(this,void 0,void 0,(function(){return B(this,(function(t){switch(t.label){case 0:return[4,this.http.get(J.a.apiNonGraphQLUrl+"analytics/averageCost/"+e).toPromise()];case 1:return[2,t.sent()]}}))}))},e.\u0275fac=function(t){return new(t||e)(h.oc(L.b))},e.\u0275prov=h.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),q=n("1kSV"),K=n("z17N"),X=n("r1eF"),Q=n("zVvu"),V=function(e,t,n,c){return new(n||(n=Promise))((function(a,i){function o(e){try{d(c.next(e))}catch(t){i(t)}}function r(e){try{d(c.throw(e))}catch(t){i(t)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}d((c=c.apply(e,t||[])).next())}))},Y=function(e,t){var n,c,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,c&&(a=2&i[0]?c.return:i[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,i[1])).done)return a;switch(c=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,c=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(r){i=[6,r],c=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}};function _(e,t){if(1&e&&(h.gc(0,"div",27),h.gc(1,"div",28),h.gc(2,"p",29),h.dd(3,"Ring"),h.fc(),h.gc(4,"h3",22),h.dd(5),h.wc(6,"currency"),h.fc(),h.gc(7,"p"),h.dd(8),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc(3);h.Mb(5),h.ed(h.xc(6,2,n.data.averageCosts.ring.averageCost)),h.Mb(3),h.fd("Based on ",n.data.averageCosts.ring.count," submissions")}}function H(e,t){if(1&e&&(h.gc(0,"div",27),h.gc(1,"div",28),h.gc(2,"p",29),h.dd(3,"Pendant"),h.fc(),h.gc(4,"h3",22),h.dd(5),h.wc(6,"currency"),h.fc(),h.gc(7,"p"),h.dd(8),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc(3);h.Mb(5),h.ed(h.xc(6,2,n.data.averageCosts.pendant.averageCost)),h.Mb(3),h.fd("Based on ",n.data.averageCosts.pendant.count," submissions")}}function ee(e,t){if(1&e&&(h.gc(0,"div",27),h.gc(1,"div",28),h.gc(2,"p",29),h.dd(3,"Earring"),h.fc(),h.gc(4,"h3",22),h.dd(5),h.wc(6,"currency"),h.fc(),h.gc(7,"p"),h.dd(8),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc(3);h.Mb(5),h.ed(h.xc(6,2,n.data.averageCosts.earring.averageCost)),h.Mb(3),h.fd("Based on ",n.data.averageCosts.earring.count," submissions")}}function te(e,t){if(1&e&&(h.gc(0,"div",27),h.gc(1,"div",28),h.gc(2,"p",29),h.dd(3,"All"),h.fc(),h.gc(4,"h3",22),h.dd(5),h.wc(6,"currency"),h.fc(),h.gc(7,"p"),h.dd(8),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc(3);h.Mb(5),h.ed(h.xc(6,2,n.data.averageCosts.all.averageCost)),h.Mb(3),h.fd("Based on ",n.data.averageCosts.all.count," submissions")}}function ne(e,t){if(1&e&&(h.gc(0,"div",18),h.gc(1,"div",19),h.gc(2,"div",20),h.gc(3,"div",21),h.gc(4,"h5",22),h.dd(5,"Average Costs"),h.fc(),h.fc(),h.fc(),h.gc(6,"div",23),h.bd(7,_,9,4,"div",35),h.bd(8,H,9,4,"div",35),h.bd(9,ee,9,4,"div",35),h.bd(10,te,9,4,"div",35),h.fc(),h.fc(),h.fc()),2&e){var n=h.vc(2);h.Mb(7),h.Cc("ngIf",n.data.averageCosts.ring),h.Mb(1),h.Cc("ngIf",n.data.averageCosts.pendant),h.Mb(1),h.Cc("ngIf",n.data.averageCosts.earring),h.Mb(1),h.Cc("ngIf",n.data.averageCosts.all)}}function ce(e,t){if(1&e){var n=h.hc();h.gc(0,"form",2,3),h.gc(2,"div",4),h.gc(3,"div",5),h.gc(4,"div",6),h.gc(5,"label",7),h.dd(6,"Start"),h.fc(),h.gc(7,"input",8),h.rc("ngModelChange",(function(e){return h.Pc(n),h.vc().model.range=e})),h.fc(),h.bc(8,"owl-date-time",9,10),h.fc(),h.gc(10,"div",11),h.gc(11,"label",12),h.dd(12,"End"),h.fc(),h.gc(13,"input",13),h.rc("ngModelChange",(function(e){return h.Pc(n),h.vc().model.range=e})),h.fc(),h.bc(14,"owl-date-time",9,14),h.fc(),h.fc(),h.gc(16,"div",15),h.gc(17,"button",16),h.rc("click",(function(){return h.Pc(n),h.vc().resetDates()})),h.dd(18," Search "),h.fc(),h.fc(),h.fc(),h.gc(19,"div",17),h.gc(20,"div",18),h.gc(21,"div",19),h.gc(22,"div",20),h.gc(23,"div",21),h.gc(24,"h5",22),h.dd(25,"Jobs"),h.fc(),h.fc(),h.fc(),h.gc(26,"div",23),h.gc(27,"div",24),h.bc(28,"i",25),h.gc(29,"span",26),h.dd(30,"\xa0 NOW"),h.fc(),h.fc(),h.fc(),h.gc(31,"div",23),h.gc(32,"div",27),h.gc(33,"div",28),h.gc(34,"p",29),h.dd(35,"Active Jobs"),h.fc(),h.gc(36,"h3",22),h.dd(37),h.fc(),h.gc(38,"h6"),h.dd(39),h.wc(40,"currency"),h.fc(),h.fc(),h.fc(),h.gc(41,"div",30),h.gc(42,"div",28),h.gc(43,"p",29),h.dd(44,"Pre Production"),h.fc(),h.gc(45,"h3",22),h.dd(46),h.fc(),h.gc(47,"h6"),h.dd(48),h.wc(49,"currency"),h.fc(),h.fc(),h.fc(),h.gc(50,"div",30),h.gc(51,"div",28),h.gc(52,"p",29),h.dd(53,"With Manufacturer"),h.fc(),h.gc(54,"h3",22),h.dd(55),h.fc(),h.gc(56,"h6"),h.dd(57),h.wc(58,"currency"),h.fc(),h.fc(),h.fc(),h.gc(59,"div",31),h.gc(60,"div",28),h.gc(61,"p",29),h.dd(62,"Awaiting Invoice"),h.fc(),h.gc(63,"h3",22),h.dd(64),h.fc(),h.gc(65,"h6"),h.dd(66),h.wc(67,"currency"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(68,"div",18),h.gc(69,"div",19),h.gc(70,"div",20),h.gc(71,"div",21),h.gc(72,"h5",22),h.dd(73,"Casting Codes"),h.fc(),h.fc(),h.fc(),h.gc(74,"div",23),h.gc(75,"div",27),h.gc(76,"div",28),h.gc(77,"p",29),h.dd(78,"Outstanding"),h.fc(),h.gc(79,"h3",22),h.dd(80),h.fc(),h.gc(81,"h6",32),h.dd(82),h.wc(83,"currency"),h.fc(),h.gc(84,"h6",33),h.dd(85),h.wc(86,"currency"),h.fc(),h.fc(),h.fc(),h.gc(87,"div",30),h.gc(88,"div",28),h.gc(89,"p",29),h.dd(90,"New"),h.fc(),h.gc(91,"h3",22),h.dd(92),h.fc(),h.gc(93,"h6",32),h.dd(94),h.wc(95,"currency"),h.fc(),h.gc(96,"h6",33),h.dd(97),h.wc(98,"currency"),h.fc(),h.fc(),h.fc(),h.gc(99,"div",30),h.gc(100,"div",28),h.gc(101,"p",29),h.dd(102,"Redeemed"),h.fc(),h.gc(103,"h3",22),h.dd(104),h.fc(),h.gc(105,"h6",32),h.dd(106),h.wc(107,"currency"),h.fc(),h.gc(108,"h6",33),h.dd(109),h.wc(110,"currency"),h.fc(),h.fc(),h.fc(),h.gc(111,"div",31),h.gc(112,"div",28),h.gc(113,"p",29),h.dd(114,"Expired"),h.fc(),h.gc(115,"h3",22),h.dd(116),h.fc(),h.gc(117,"h6",32),h.dd(118),h.wc(119,"currency"),h.fc(),h.gc(120,"h6",33),h.dd(121),h.wc(122,"currency"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(123,"div",18),h.gc(124,"div",19),h.gc(125,"div",20),h.gc(126,"div",21),h.gc(127,"h5",22),h.dd(128,"Submissions"),h.fc(),h.fc(),h.fc(),h.gc(129,"div",23),h.gc(130,"div",27),h.gc(131,"div",28),h.gc(132,"p",29),h.dd(133,"New Submissions"),h.fc(),h.gc(134,"h3",22),h.dd(135),h.fc(),h.fc(),h.fc(),h.gc(136,"div",30),h.gc(137,"div",28),h.gc(138,"p",29),h.dd(139,"Est Cost"),h.fc(),h.gc(140,"h4"),h.dd(141),h.wc(142,"currency"),h.fc(),h.gc(143,"h6",33),h.dd(144),h.wc(145,"currency"),h.fc(),h.gc(146,"h6",33),h.dd(147),h.wc(148,"currency"),h.fc(),h.fc(),h.fc(),h.gc(149,"div",31),h.gc(150,"div",28),h.gc(151,"p",29),h.dd(152,"Revenue"),h.fc(),h.gc(153,"h3",22),h.dd(154),h.wc(155,"currency"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.gc(156,"div",18),h.gc(157,"div",19),h.gc(158,"div",20),h.gc(159,"div",21),h.gc(160,"h5",22),h.dd(161,"Kit registrations"),h.fc(),h.fc(),h.fc(),h.gc(162,"div",23),h.gc(163,"div",27),h.gc(164,"div",28),h.gc(165,"p",29),h.dd(166,"Kit Registrations"),h.fc(),h.gc(167,"h3",22),h.dd(168),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.bd(169,ne,11,4,"div",34),h.fc(),h.fc()}if(2&e){var c=h.Mc(9),a=h.Mc(15),i=h.vc();h.Mb(7),h.Cc("ngModel",i.model.range)("owlDateTimeTrigger",c)("owlDateTime",c)("selectMode","rangeFrom"),h.Mb(1),h.Cc("pickerType","calendar")("startAt",i.getStart()),h.Mb(5),h.Cc("ngModel",i.model.range)("owlDateTimeTrigger",a)("owlDateTime",a)("selectMode","rangeTo"),h.Mb(1),h.Cc("pickerType","calendar")("startAt",i.getEnd()),h.Mb(23),h.ed(i.data.wipData?i.data.wipData.activeJobs.allActiveJobs.count:""),h.Mb(2),h.ed(i.data.wipData?h.xc(40,39,i.data.wipData.activeJobs.allActiveJobs.cost):""),h.Mb(7),h.ed(i.data.wipData?i.data.wipData.activeJobs.awaitingProduction.count:""),h.Mb(2),h.ed(i.data.wipData?h.xc(49,41,i.data.wipData.activeJobs.awaitingProduction.cost):""),h.Mb(7),h.ed(i.data.wipData?i.data.wipData.activeJobs.withManufacturing.count:""),h.Mb(2),h.ed(i.data.wipData?h.xc(58,43,i.data.wipData.activeJobs.withManufacturing.cost):""),h.Mb(7),h.ed(i.data.wipData?i.data.wipData.activeJobs.awaitingInvoice.count:""),h.Mb(2),h.ed(i.data.wipData?h.xc(67,45,i.data.wipData.activeJobs.awaitingInvoice.cost):""),h.Mb(14),h.ed(i.data.wipData?i.data.wipData.activeCodes.count:""),h.Mb(2),h.ed(i.data.wipData?h.xc(83,47,i.data.wipData.activeCodes.cost):""),h.Mb(3),h.ed(i.data.wipData?h.xc(86,49,i.data.wipData.activeCodes.pricePaid):""),h.Mb(7),h.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.newCodes.count:""),h.Mb(2),h.ed(i.data.wipData.codeMovement?h.xc(95,51,i.data.wipData.codeMovement.newCodes.cost):""),h.Mb(3),h.ed(i.data.wipData.codeMovement?h.xc(98,53,i.data.wipData.codeMovement.newCodes.pricePaid):""),h.Mb(7),h.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.redeemedCodes.count:""),h.Mb(2),h.ed(i.data.wipData.codeMovement?h.xc(107,55,i.data.wipData.codeMovement.redeemedCodes.cost):""),h.Mb(3),h.ed(i.data.wipData.codeMovement?h.xc(110,57,i.data.wipData.codeMovement.redeemedCodes.pricePaid):""),h.Mb(7),h.ed(i.data.wipData.codeMovement?i.data.wipData.codeMovement.expiredCodes.count:""),h.Mb(2),h.ed(i.data.wipData.codeMovement?h.xc(119,59,i.data.wipData.codeMovement.expiredCodes.cost):""),h.Mb(3),h.ed(i.data.wipData.codeMovement?h.xc(122,61,i.data.wipData.codeMovement.expiredCodes.pricePaid):""),h.Mb(14),h.ed(i.data.wipData.submissions?i.data.wipData.submissions.count:""),h.Mb(6),h.ed(i.data.wipData.submissions?h.xc(142,63,i.data.wipData.submissions.estCostTotal):""),h.Mb(3),h.fd("Early: ",i.data.wipData.submissions?h.xc(145,65,i.data.wipData.submissions.estCostEarly):"",""),h.Mb(3),h.fd("Weighed: ",i.data.wipData.submissions?h.xc(148,67,i.data.wipData.submissions.estCostWithWeight):"",""),h.Mb(7),h.ed(i.data.wipData.submissions?h.xc(155,69,i.data.wipData.submissions.revenue):""),h.Mb(14),h.ed(i.data.wipData.kitRegistrations?i.data.wipData.kitRegistrations.count:""),h.Mb(1),h.Cc("ngIf",i.data.averageCosts)}}function ae(e,t){if(1&e){var n=h.hc();h.bc(0,"modal-header",36),h.gc(1,"div",37),h.gc(2,"p"),h.dd(3," This will recalculate the cost estimates of all non-expired, non-redeemed items. "),h.fc(),h.gc(4,"p"),h.dd(5,"The old values cannot be restored. Continue?"),h.fc(),h.fc(),h.gc(6,"div",38),h.gc(7,"div"),h.gc(8,"button",39),h.rc("click",(function(){return h.Pc(n),h.vc().modalService.dismissAll()})),h.dd(9," Go Back "),h.fc(),h.gc(10,"button",16),h.rc("click",(function(){return h.Pc(n),h.vc().refreshCostEstimates()})),h.dd(11," Refresh "),h.fc(),h.fc(),h.fc()}2&e&&h.Cc("modal",t.$implicit)}var ie=function(){return function(){}}(),oe=[{path:"accounting-report",component:function(){function e(e,t,n,c,a){this.castingCodeService=e,this.modalService=t,this.pricingAndWeightService=n,this.submissionService=c,this.analyticsService=a,this.model=new ie,this.data={baseMetals:[],castingCodes:[],created:[],createdEstimatedCost:0,estimatedCostInRange:0,expired:[],expiredEstimatedCost:0,inProgressLaborEstimatedCost:0,inProgressMetalEstimatedCost:0,redeemed:[],redeemedEstimatedCost:0,submissionsInProgress:[],totalEstimatedCost:0,wipData:null,averageCosts:null},this.state={loading:!0,wipLoading:!0,loadingRange:!1,refreshingCostEstimates:!1,timeNow:new Date}}return e.prototype.ngOnInit=function(){var e=this;this.state.loading=!0,this.model.range=[this.getStart(),this.getEnd()],this.refreshWIPAnalyticsData(),this.getAverageCosts().then((function(t){return e.data.averageCosts=t}))},e.prototype.resetDates=function(){this.state.loadingRange=!0,this.model.range[0]=this.getStart(),this.model.range[1]=this.getEnd(),this.refreshWIPAnalyticsData()},e.prototype.refreshCostEstimates=function(){var e=this;this.state.refreshingCostEstimates=!0,this.modalService.dismissAll(),this.pricingAndWeightService.refreshEstimatedCosts().subscribe((function(t){e.state.refreshingCostEstimates=!1,e.ngOnInit()}))},e.prototype.getStart=function(){return this.model.range&&this.model.range[0]?new Date(this.model.range[0]):e.getDaysAgo(7)},e.getDaysAgo=function(e){var t=new Date;return t.setDate(t.getDate()-e),t},e.prototype.getEnd=function(){return this.model.range&&this.model.range[1]?new Date(this.model.range[1]):new Date},e.prototype.refreshWIPAnalyticsData=function(){var e=this;this.state.wipLoading=!0,this.getWIPAnalytics(this.dateToString(this.model.range[0]),this.dateToString(this.model.range[1])).then((function(t){e.data.wipData=t,e.state.wipLoading=!1,e.state.loading=!1}))},e.prototype.getAverageCosts=function(e){return void 0===e&&(e="all"),V(this,void 0,void 0,(function(){return Y(this,(function(t){switch(t.label){case 0:return[4,this.analyticsService.getAverageCosts(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getWIPAnalytics=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),V(this,void 0,void 0,(function(){return Y(this,(function(n){switch(n.label){case 0:return[4,this.analyticsService.getWIPReport(e,t)];case 1:return[2,n.sent()]}}))}))},e.prototype.dateToString=function(e){return e.toISOString().substring(0,10)},e.\u0275fac=function(t){return new(t||e)(h.ac(U.a),h.ac(q.i),h.ac(F.a),h.ac(G.a),h.ac(N))},e.\u0275cmp=h.Ub({type:e,selectors:[["ng-component"]],decls:3,vars:1,consts:[["class","portal-view analytics","novalidate","",4,"ngIf"],["modalRefresh",""],["novalidate","",1,"portal-view","analytics"],["accountingReportForm","ngForm"],[1,"w-100","view-header","py-4"],[1,"date-range-container"],[1,"form-group","dateFrom"],["for","startTime",1,"req"],["id","startTime","name","startTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],[3,"pickerType","startAt"],["dt1",""],[1,"form-group","dateTo"],["for","endTime",1,"req"],["id","endTime","name","endTime","placeholder","-- Please Select --","required","",1,"form-control",3,"ngModel","owlDateTimeTrigger","owlDateTime","selectMode","ngModelChange"],["dt2",""],[1,"date-range-refine"],["type","button",1,"btn","btn-primary",3,"click"],[1,"container-fluid"],[1,"row","mb-4"],[1,"col","main-content","CardlessUI"],[1,"row","py-3","box-divider-bottom","justify-content-start","mb-4"],[1,"col"],[1,"mb-2"],[1,"row","mx-0"],[1,"ledContainer"],[1,"recordLed","live"],[1,"liveText"],[1,"col-md","col-12","mb-2","pl-md-0"],[1,"ShadowCard"],[1,"text-muted"],[1,"col-md","col-12","mb-2"],[1,"col-md","col-12","mb-2","pr-md-0"],[1,"mb-0"],[1,"mb-0","text-muted"],["class","row mb-4",4,"ngIf"],["class","col-md col-12 mb-2 pl-md-0",4,"ngIf"],["title","Are you sure?",3,"modal"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark","mr-1",3,"click"]],template:function(e,t){1&e&&(h.bd(0,ce,170,71,"form",0),h.bd(1,ae,12,1,"ng-template",null,1,h.cd)),2&e&&h.Cc("ngIf",!t.state.loading)},directives:[r.u,d.z,d.l,d.m,d.d,K.e,d.u,d.k,d.n,K.g,K.c,X.a],pipes:[Q.a],encapsulation:2}),e}()},{path:"pricing",component:O}],re=function(){function e(){}return e.\u0275mod=h.Yb({type:e}),e.\u0275inj=h.Xb({factory:function(t){return new(t||e)},imports:[[l.f.forChild(oe)],l.f]}),e}(),de=function(){function e(){}return e.\u0275mod=h.Yb({type:e}),e.\u0275inj=h.Xb({factory:function(t){return new(t||e)},imports:[[r.c,d.f,re,s.a,K.f,K.j]]}),e}()},n4kJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("fXoL"),a=function(){function e(){}return Object.defineProperty(e.prototype,"title",{set:function(e){this._title=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"subtitle",{set:function(e){this._subtitle=e},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ub({type:e,selectors:[["page-title"]],inputs:{title:"title",subtitle:"subtitle"},decls:5,vars:2,consts:[[1,"page-title"],[1,"mb-0"],[1,"text-muted"]],template:function(e,t){1&e&&(c.gc(0,"div",0),c.gc(1,"h3",1),c.dd(2),c.fc(),c.gc(3,"p",2),c.dd(4),c.fc(),c.fc()),2&e&&(c.Mb(2),c.ed(t._title),c.Mb(2),c.ed(t._subtitle))},encapsulation:2}),e}()},zz98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("y/Ic"),a=n("zOkP"),i=n("PC64"),o=n("AytR"),r=n("fXoL"),d=n("tk/3"),s={Wax:.9,Silver:10.8,"9 Carat Yellow Gold":12.7,"9 Carat Rose Gold":12.7,"9 Carat White Gold":12.7,"14 Carat Yellow Gold":14.6,"14 Carat Rose Gold":14.6,"14 Carat White Gold":14.6,"18 Carat Yellow Gold":15.9,"18 Carat Rose Gold":15.9,"18 Carat White Gold":16.9,Platinum:21.4},l=function(){function e(e){this.http=e}return e.prototype.getPriceAndWeight=function(e,t){for(var n=this.getBaseMetalMap(t),o=[],r=0,d=e;r<d.length;r++){var l=d[r],g=l.node.baseMetal?l.node.baseMetal.name:i.m,f=l.node.waxWeight*(s[g]/s.Wax);l.node.earringConfig&&l.node.earringConfig.name===c.d&&(f*=2);var u,p=n[g]/100*f,v=0;switch(l.node.kitType.name){case a.g:v=1.5;break;case a.f:v=1.5,v+=l.node.jumpRing?3:0;break;case a.e:v=9}o.push({id:l.node.id,metalWeight:f,metalCost:p,finishingCost:v,castingCost:u=f>=4?8:6,cost:p+v+u})}return o},e.prototype.getBaseMetalMap=function(e){for(var t={},n=0,c=e;n<c.length;n++){var a=c[n];t[a.node.name]=a.node.pricePerGram}return t},e.prototype.refreshEstimatedCosts=function(){return this.http.get(o.a.apiNonGraphQLUrl+"refresh-price-estimates",{})},e.\u0275fac=function(t){return new(t||e)(r.oc(d.b))},e.\u0275prov=r.Wb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);