(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GTRN:function(n,t,e){"use strict";e.r(t),e.d(t,"BatchModuleNgFactory",function(){return v});var i=e("CcnG"),r=e("1lsF"),a=e("1UnK"),u=e("pMnS"),o=e("WFnb"),s=e("fdTr"),l=e("0kKZ"),d=e("9AJC"),c=e("jn1S"),p=e("Ip0R"),b=e("mEXF"),m=e("gIcY"),f=e("4GxJ"),$=e("ZYCi"),A=e("/zD6"),y=e("QpxQ"),h=e("PCNd"),g=e("7ePi"),B=e("PC/O"),S=e("N6HK"),C=e("iVcr"),v=i.pb(r.a,[a.a],function(n){return i.zb([i.Ab(512,i.j,i.db,[[8,[u.a,o.a,s.a,l.a,d.a,d.b,d.h,d.i,d.e,d.f,d.g,c.a]],[3,i.j],i.y]),i.Ab(4608,p.p,p.o,[i.v,[2,p.F]]),i.Ab(4608,b.c,b.c,[]),i.Ab(4608,m.y,m.y,[]),i.Ab(4608,f.B,f.B,[i.j,i.r,f.pb,f.C]),i.Ab(1073742336,p.b,p.b,[]),i.Ab(1073742336,b.b,b.b,[]),i.Ab(1073742336,m.v,m.v,[]),i.Ab(1073742336,m.g,m.g,[]),i.Ab(1073742336,$.o,$.o,[[2,$.u],[2,$.k]]),i.Ab(1073742336,A.a,A.a,[]),i.Ab(1073742336,f.c,f.c,[]),i.Ab(1073742336,f.g,f.g,[]),i.Ab(1073742336,f.h,f.h,[]),i.Ab(1073742336,f.l,f.l,[]),i.Ab(1073742336,f.n,f.n,[]),i.Ab(1073742336,f.s,f.s,[]),i.Ab(1073742336,f.y,f.y,[]),i.Ab(1073742336,f.D,f.D,[]),i.Ab(1073742336,f.H,f.H,[]),i.Ab(1073742336,f.K,f.K,[]),i.Ab(1073742336,f.N,f.N,[]),i.Ab(1073742336,f.Q,f.Q,[]),i.Ab(1073742336,f.U,f.U,[]),i.Ab(1073742336,f.Y,f.Y,[]),i.Ab(1073742336,f.bb,f.bb,[]),i.Ab(1073742336,f.cb,f.cb,[]),i.Ab(1073742336,f.E,f.E,[]),i.Ab(1073742336,y.c,y.c,[]),i.Ab(1073742336,h.a,h.a,[]),i.Ab(1073742336,g.b,g.b,[]),i.Ab(1073742336,r.a,r.a,[]),i.Ab(1024,$.i,function(){return[[{path:"create",component:a.a,canActivate:[B.a]},{path:"",component:S.a,canActivate:[B.a]},{path:"view/:id",component:C.a}]]},[]),i.Ab(256,y.d,y.e,[])])})},Oxmh:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a});var i=e("CcnG"),r=(e("n4kJ"),i.qb({encapsulation:2,styles:[],data:{}}));function a(n){return i.Mb(0,[(n()(),i.sb(0,0,null,null,4,"div",[["class","page-title"]],null,null,null,null,null)),(n()(),i.sb(1,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(n()(),i.Kb(2,null,["",""])),(n()(),i.sb(3,0,null,null,1,"p",[["class","text-muted"]],null,null,null,null,null)),(n()(),i.Kb(4,null,["",""]))],null,function(n,t){var e=t.component;n(t,2,0,e._title),n(t,4,0,e._subtitle)})}},SjCM:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.transform=function(n){return n.toLowerCase().replace(/\s/g,"-")},n}()},n4kJ:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return Object.defineProperty(n.prototype,"title",{set:function(n){this._title=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"subtitle",{set:function(n){this._subtitle=n},enumerable:!0,configurable:!0}),n}()},uA1o:function(n,t,e){"use strict";var i,r,a,u,o,s,l,d=e("lTCR"),c=e.n(d),p=c()(i||(s=['\n    mutation createSubmissionBatch(\n        $status: String!\n        $partner: String\n        $createdAt: String!\n        $updatedAt: String!\n        $supplier: String\n    ) {\n        createSubmissionBatch(input: {\n            clientMutationId: ""\n            status: $status\n            partner: $partner\n            createdAt: $createdAt\n            updatedAt: $updatedAt\n            supplier: $supplier\n        }) {\n            id\n        }\n    }\n'],l=['\n    mutation createSubmissionBatch(\n        $status: String!\n        $partner: String\n        $createdAt: String!\n        $updatedAt: String!\n        $supplier: String\n    ) {\n        createSubmissionBatch(input: {\n            clientMutationId: ""\n            status: $status\n            partner: $partner\n            createdAt: $createdAt\n            updatedAt: $updatedAt\n            supplier: $supplier\n        }) {\n            id\n        }\n    }\n'],Object.defineProperty?Object.defineProperty(s,"raw",{value:l}):s.raw=l,i=s)),b=c()(r||(r=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}(["\n    query submissionBatchList(\n        $after: String,\n        $partnerComplete: Boolean,\n        $manufacturerComplete: Boolean,\n        $supplierExists: Boolean\n        $order: String,\n        $inProduction: Boolean,\n        $inQualityControl: Boolean,\n    ) {\n        submissionBatches (\n            after: $after,\n            status_partnerComplete: $partnerComplete,\n            status_manufacturerComplete: $manufacturerComplete,\n            status_inProduction: $inProduction,\n            status_inQualityControl: $inQualityControl\n            order: {createdAt: $order}\n            supplier: {exists: $supplierExists},\n        ) {\n            edges  {\n                node {\n                    id\n                    status {\n                        id\n                        name\n                    }\n                    partner {\n                        id\n                        name\n                    }\n                    supplier {\n                        id\n                        company\n                    }\n                    updatedAt\n                    createdAt\n                }\n                cursor\n            }\n            pageInfo {\n                hasNextPage\n            }\n        }\n    }\n"],["\n    query submissionBatchList(\n        $after: String,\n        $partnerComplete: Boolean,\n        $manufacturerComplete: Boolean,\n        $supplierExists: Boolean\n        $order: String,\n        $inProduction: Boolean,\n        $inQualityControl: Boolean,\n    ) {\n        submissionBatches (\n            after: $after,\n            status_partnerComplete: $partnerComplete,\n            status_manufacturerComplete: $manufacturerComplete,\n            status_inProduction: $inProduction,\n            status_inQualityControl: $inQualityControl\n            order: {createdAt: $order}\n            supplier: {exists: $supplierExists},\n        ) {\n            edges  {\n                node {\n                    id\n                    status {\n                        id\n                        name\n                    }\n                    partner {\n                        id\n                        name\n                    }\n                    supplier {\n                        id\n                        company\n                    }\n                    updatedAt\n                    createdAt\n                }\n                cursor\n            }\n            pageInfo {\n                hasNextPage\n            }\n        }\n    }\n"]))),m=c()(a||(a=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}(["\n    query submissionBatchById($id: ID!) {\n        submissionBatch(id: $id) {\n            id\n            status {\n                id\n                name\n            }\n            partner {\n                id\n                name\n            }\n            createdAt\n            updatedAt\n        }\n    }\n    \n"],["\n    query submissionBatchById($id: ID!) {\n        submissionBatch(id: $id) {\n            id\n            status {\n                id\n                name\n            }\n            partner {\n                id\n                name\n            }\n            createdAt\n            updatedAt\n        }\n    }\n    \n"]))),f=c()(u||(u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}(['\n    mutation updateSubmissionBatch(\n        $id: ID!,\n        $updatedAt: String!,\n        $status: String\n    ) {\n        updateSubmissionBatch(input: {\n            id: $id,\n            updatedAt: $updatedAt,\n            status: $status,\n            clientMutationId: "",\n        }) {\n            id\n            status {\n                id\n                name\n            }\n        }\n    }\n'],['\n    mutation updateSubmissionBatch(\n        $id: ID!,\n        $updatedAt: String!,\n        $status: String\n    ) {\n        updateSubmissionBatch(input: {\n            id: $id,\n            updatedAt: $updatedAt,\n            status: $status,\n            clientMutationId: "",\n        }) {\n            id\n            status {\n                id\n                name\n            }\n        }\n    }\n']))),$=c()(o||(o=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}(['\n    mutation deleteSubmissionBatch($id: ID!) {\n        deleteSubmissionBatch (\n            input: {\n                id: $id,\n                clientMutationId: ""\n            }\n        ) {\n            id\n        }\n    }\n'],['\n    mutation deleteSubmissionBatch($id: ID!) {\n        deleteSubmissionBatch (\n            input: {\n                id: $id,\n                clientMutationId: ""\n            }\n        ) {\n            id\n        }\n    }\n']))),A=e("CcnG"),y=e("jNEM");e.d(t,"a",function(){return h});var h=function(){function n(n){this.apollo=n}return n.prototype.list=function(n,t,e,i,r,a,u){return void 0===n&&(n=null),void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===r&&(r="DESC"),void 0===a&&(a=null),void 0===u&&(u=null),this.apollo.query({query:b,variables:{after:n,partnerComplete:t,manufacturerComplete:e,supplierExists:i,order:r,inProduction:a,inQualityControl:u},fetchPolicy:"network-only"})},n.prototype.get=function(n){return this.apollo.query({query:m,variables:{id:n}})},n.prototype.create=function(n){return this.apollo.mutate({mutation:p,variables:n})},n.prototype.update=function(n){return this.apollo.mutate({mutation:f,variables:n})},n.prototype.delete=function(n){return this.apollo.mutate({mutation:$,variables:{id:n}})},n.ngInjectableDef=A.U({factory:function(){return new n(A.Y(y.c))},token:n,providedIn:"root"}),n}()}}]);