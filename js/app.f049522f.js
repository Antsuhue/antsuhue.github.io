(function(e){function n(n){for(var r,c,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00a68049":"2e34f259","chunk-2a15b174":"a4452521","chunk-2d0c4bf4":"8c7b37c3","chunk-3d45fe34":"6f2deecc","chunk-41f87130":"f4c4d2e6","chunk-5245c30c":"df049442","chunk-57b75860":"921ffe3f","chunk-6aca31f6":"0b1e4207","chunk-6cc065f4":"1e765523","chunk-6e0d9cae":"9f274b7d","chunk-96782a26":"562c3b1c","chunk-b7adc9c4":"01ace609","chunk-35aa3034":"a863205e","chunk-64f44cb6":"d2db0840","chunk-c33e8538":"fb979bdc"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-00a68049":1,"chunk-2a15b174":1,"chunk-3d45fe34":1,"chunk-41f87130":1,"chunk-5245c30c":1,"chunk-57b75860":1,"chunk-6aca31f6":1,"chunk-6cc065f4":1,"chunk-6e0d9cae":1,"chunk-96782a26":1,"chunk-b7adc9c4":1,"chunk-35aa3034":1,"chunk-64f44cb6":1,"chunk-c33e8538":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-00a68049":"8aa36de7","chunk-2a15b174":"8798a4a1","chunk-2d0c4bf4":"31d6cfe0","chunk-3d45fe34":"5fa63bfd","chunk-41f87130":"718929be","chunk-5245c30c":"7c0a629f","chunk-57b75860":"7c91964b","chunk-6aca31f6":"3929088f","chunk-6cc065f4":"9ee82e8e","chunk-6e0d9cae":"1e3de198","chunk-96782a26":"dfc9f4cb","chunk-b7adc9c4":"ca3fdf7d","chunk-35aa3034":"ac35b1a8","chunk-64f44cb6":"9b0693c1","chunk-c33e8538":"059b11b4"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3087:function(e,n,t){"use strict";t("b5b9")},"522e":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("b0c0");var r=t("7a23"),c=Object(r["f"])("div",null,null,-1);function a(e,n){var t=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["e"])(r["a"],null,[c,Object(r["i"])(t)],64)}t("5f69");var o=t("6b0d"),u=t.n(o);const i={},s=u()(i,[["render",a]]);var d=s,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),l=t("cf05"),h=t.n(l),b=function(e){return Object(r["v"])("data-v-0997baeb"),e=e(),Object(r["t"])(),e},p={class:"container"},m={class:"content first-content"},k={class:"first-column"},v=b((function(){return Object(r["f"])("figure",null,[Object(r["f"])("img",{src:h.a,width:"200"})],-1)})),g=b((function(){return Object(r["f"])("h2",{class:"title title-primary"},"Bem-Vindo!",-1)})),O=b((function(){return Object(r["f"])("p",{class:"description description-primary"},"por favor faça o cadastro com suas informações.",-1)})),j={class:"second-column"},y=b((function(){return Object(r["f"])("h2",{class:"title title-second"},"Conectar",-1)})),w=b((function(){return Object(r["f"])("br",null,null,-1)})),E=b((function(){return Object(r["f"])("p",{class:"description description-second"},"Use seu nome de usuário para conectar:",-1)}));function P(e,n,t,c,a,o){var u=Object(r["A"])("Form-login");return Object(r["s"])(),Object(r["e"])("div",p,[Object(r["f"])("div",m,[Object(r["f"])("div",k,[v,g,O,Object(r["f"])("button",{id:"signin",onClick:n[0]||(n[0]=function(){return o.registerUser&&o.registerUser.apply(o,arguments)}),class:"btn btn-primary"},"Cadastrar")]),Object(r["f"])("div",j,[y,w,E,Object(r["i"])(u)])])])}var x=function(e){return Object(r["v"])("data-v-c1da2de2"),e=e(),Object(r["t"])(),e},C={key:0},S={class:"label-input",for:""},A={class:"label-input",for:""},_=x((function(){return Object(r["f"])("button",{class:"btn btn-second"},"Entrar",-1)}));function N(e,n,t,c,a,o){return Object(r["s"])(),Object(r["e"])("div",null,[Object(r["f"])("div",{id:"erro",class:Object(r["o"])({erro:a.errorActive})},[a.errorActive?(Object(r["s"])(),Object(r["e"])("p",C,Object(r["C"])(a.msgErro),1)):Object(r["d"])("",!0)],2),Object(r["f"])("div",null,[Object(r["f"])("form",{class:"form",onSubmit:n[3]||(n[3]=Object(r["I"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"]))},[Object(r["f"])("div",null,[Object(r["f"])("label",S,[Object(r["H"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=function(e){return a.userName=e}),placeholder:"Username"},null,512),[[r["E"],a.userName]])]),Object(r["f"])("label",A,[Object(r["H"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":n[1]||(n[1]=function(e){return a.pass=e}),placeholder:"Password"},null,512),[[r["E"],a.pass]])]),_]),Object(r["f"])("a",{style:{cursor:"pointer"},onClick:n[2]||(n[2]=function(){return o.forgotPass&&o.forgotPass.apply(o,arguments)})},"Esqueceu a Senha")],32)])])}var I=t("1da1"),U=(t("96cf"),t("498a"),t("7424")),L={data:function(){return{errorActive:!1,userName:"",pass:"",msgErro:""}},methods:{login:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={userName:e.userName.trim(),pass:e.pass},n.prev=1,n.next=4,U["a"].post("/login",t);case 4:r=n.sent,console.log(r),localStorage.setItem("kipiai-token",r.data.token),e.$router.push({path:"dashboard"}),n.next=15;break;case 10:n.prev=10,n.t0=n["catch"](1),e.errorActive=!0,e.msgErro=n.t0.response.data.status,console.log("error");case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},forgotPass:function(){this.$router.push("sendpassword")}}};t("9a16");const T=u()(L,[["render",N],["__scopeId","data-v-c1da2de2"]]);var q=T,B={name:"Login",components:{FormLogin:q},methods:{registerUser:function(){this.$router.push({path:"create"})}}};t("988a");const F=u()(B,[["render",P],["__scopeId","data-v-0997baeb"]]);var z=F,M=function(e){return Object(r["v"])("data-v-67c9a457"),e=e(),Object(r["t"])(),e},R={class:"container"},V=M((function(){return Object(r["f"])("nav",null,[Object(r["f"])("img",{src:h.a,width:"235"})],-1)})),$=M((function(){return Object(r["f"])("h2",null,"Ops! Página não encontrada.",-1)})),H=M((function(){return Object(r["f"])("h1",null,"404",-1)})),D=M((function(){return Object(r["f"])("p",null,"Não posso achar a página que você está procurando.",-1)}));function J(e,n,t,c,a,o){return Object(r["s"])(),Object(r["e"])("div",R,[V,$,H,D,Object(r["f"])("a",{onClick:n[0]||(n[0]=function(){return o.home&&o.home.apply(o,arguments)}),style:{cursor:"pointer"}},"Volte para o inicio")])}var K={methods:{home:function(){this.$router.push({path:"/"})}}};t("3087");const G=u()(K,[["render",J],["__scopeId","data-v-67c9a457"]]);var Q=G,W=[{path:"/notauthorized",name:"Not Authirized",component:function(){return t.e("chunk-2d0c4bf4").then(t.bind(null,"3bc2"))},meta:{auth:!0,user:!0,admin:!1}},{path:"/Erro404",name:"Not Found",component:Q,meta:{auth:!1,user:!1,admin:!1}},{path:"/:catchAll(.*)",redirect:"/Erro404"},{path:"/",name:"home",component:z,meta:{auth:!1,user:!1,admin:!1}},{path:"/create",name:"create",component:function(){return t.e("chunk-5245c30c").then(t.bind(null,"d879"))},meta:{auth:!1,user:!1,admin:!1}},{path:"/indexAdm",name:"Inidex",component:function(){return Promise.all([t.e("chunk-b7adc9c4"),t.e("chunk-64f44cb6")]).then(t.bind(null,"533a"))},meta:{auth:!0,user:!1,admin:!0}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([t.e("chunk-b7adc9c4"),t.e("chunk-35aa3034")]).then(t.bind(null,"ddf5"))},meta:{auth:!0,user:!0,admin:!1}},{path:"/settings",name:"settings",component:function(){return t.e("chunk-00a68049").then(t.bind(null,"1071"))},meta:{auth:!0,user:!1,admin:!0}},{path:"/sendpassword",name:"SendPassword",component:function(){return t.e("chunk-3d45fe34").then(t.bind(null,"3a2b"))},meta:{auth:!1,user:!1,admin:!1}},{path:"/editpassword",name:"Senha",component:function(){return t.e("chunk-6e0d9cae").then(t.bind(null,"d248"))}},{path:"/verification",name:"verification",component:function(){return t.e("chunk-57b75860").then(t.bind(null,"22ff"))}},{path:"/confirmation",name:"confirmation",component:function(){return t.e("chunk-2a15b174").then(t.bind(null,"0a17"))}},{path:"/expired",name:"expired",component:function(){return t.e("chunk-c33e8538").then(t.bind(null,"0db8"))}},{path:"/changeConfirmation",name:"changeConfirmation",component:function(){return t.e("chunk-6cc065f4").then(t.bind(null,"09db"))}},{path:"/requestEmail",name:"RequestEmail",component:function(){return t.e("chunk-6aca31f6").then(t.bind(null,"353d"))}},{path:"/managementcards",name:"managementCards",component:function(){return t.e("chunk-41f87130").then(t.bind(null,"5ee5"))},meta:{auth:!0,user:!0,admin:!1}},{path:"/edituser",name:"edituser",component:function(){return t.e("chunk-96782a26").then(t.bind(null,"b2b9"))},meta:{auth:!0,user:!1,admin:!0}}],X=Object(f["a"])({history:Object(f["b"])(),routes:W}),Y=X;Y.beforeEach((function(e,n,t){var r=localStorage.getItem("kipiai-token");switch(console.log(e),"Not Found"==e.name&&t(),e.meta.auth){case!1:null==r?t():t({name:"dashboard"});break;case!0:null==r?t("/"):t();break}switch(e.meta.admin){case!1:t("/notauthorized");break;case!0:t();break}})),Object(r["c"])(d).use(Y).mount("#app")},"5f69":function(e,n,t){"use strict";t("9654")},7424:function(e,n,t){"use strict";var r=t("bc3a"),c=localStorage.getItem("kipiai-token"),a=r.create({headers:{authorization:"Bearer "+c},baseURL:"http://localhost:4000"});n["a"]=a},9654:function(e,n,t){},"96dc":function(e,n,t){},"988a":function(e,n,t){"use strict";t("522e")},"9a16":function(e,n,t){"use strict";t("96dc")},b5b9:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.7b57a5c3.png"}});
//# sourceMappingURL=app.f049522f.js.map