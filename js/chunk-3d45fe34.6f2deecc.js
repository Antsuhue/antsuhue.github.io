(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d45fe34"],{"3a2b":function(e,n,t){"use strict";t.r(n);var c=t("7a23"),r=t("cf05"),a=t.n(r),o=function(e){return Object(c["v"])("data-v-6cbc2a5e"),e=e(),Object(c["t"])(),e},u={class:"row"},s={class:"card"},l=o((function(){return Object(c["f"])("img",{src:a.a},null,-1)})),i=o((function(){return Object(c["f"])("p",null,"Informe Seu E-mail ou seu login cadastrado:",-1)})),f={class:"label-input",for:""},b=o((function(){return Object(c["f"])("br",null,null,-1)}));function d(e,n,t,r,a,o){return Object(c["s"])(),Object(c["e"])("div",null,[Object(c["f"])("div",u,[Object(c["f"])("div",s,[l,i,Object(c["f"])("label",f,[Object(c["H"])(Object(c["f"])("input",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.access=e}),type:"text",placeholder:"Email ou login"},null,512),[[c["E"],a.access]])]),Object(c["f"])("button",{onClick:n[1]||(n[1]=function(){return o.sendEmail&&o.sendEmail.apply(o,arguments)}),class:"button"},"Enviar"),Object(c["f"])("nav",null,[b,Object(c["f"])("a",{style:{cursor:"pointer"},onClick:n[2]||(n[2]=function(){return o.Home&&o.Home.apply(o,arguments)})},"Voltar")])])])])}var p=t("1da1"),m=(t("96cf"),t("7424")),j={data:function(){return{access:""}},methods:{sendEmail:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var t,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log("click"),t={access:e.access},n.next=5,m["a"].post("/forgot_password",t);case 5:c=n.sent,console.log("email enviado",c),e.$router.push("/requestEmail"),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},Home:function(){this.$router.push("/")}}},v=(t("f1cc"),t("6b0d")),O=t.n(v);const h=O()(j,[["render",d],["__scopeId","data-v-6cbc2a5e"]]);n["default"]=h},"482b":function(e,n,t){},f1cc:function(e,n,t){"use strict";t("482b")}}]);
//# sourceMappingURL=chunk-3d45fe34.6f2deecc.js.map