(function(e){function r(r){for(var n,s,u=r[0],c=r[1],l=r[2],b=0,d=[];b<u.length;b++)s=u[b],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(r);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={app:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var i=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),o=t("cf05"),a=t.n(o),s={id:"app"},u=Object(n["e"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function c(e,r,t,o,a,c){var l=Object(n["t"])("NavbarGuest"),i=Object(n["t"])("NavbarAdmin"),b=Object(n["t"])("NavbarUser"),d=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])("div",s,[u,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(n["p"])(),Object(n["c"])(i,{key:1})):(Object(n["p"])(),Object(n["c"])(b,{key:2})):(Object(n["p"])(),Object(n["c"])(l,{key:0})),Object(n["g"])(d)])}var l=t("5530"),i=Object(n["f"])("Home"),b=Object(n["f"])(" | "),d=Object(n["f"])("Login");function p(e,r,t,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["g"])(u,{to:{name:"Home"}},{default:Object(n["A"])((function(){return[i]})),_:1}),b,Object(n["g"])(u,{to:{name:"Login"}},{default:Object(n["A"])((function(){return[d]})),_:1})])}var m={name:"NavbarGuest"},f=t("6b0d"),O=t.n(f);const g=O()(m,[["render",p]]);var j=g,h=Object(n["f"])(" | "),v=Object(n["f"])(" | ");function w(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["e"])("button",{onClick:r[0]||(r[0]=function(){return e.dashboard&&e.dashboard.apply(e,arguments)})},"Dashboard"),h,Object(n["e"])("button",{onClick:r[1]||(r[1]=function(){return e.logout&&e.logout.apply(e,arguments)})},"Logout"),v,Object(n["e"])("button",{onClick:r[2]||(r[2]=function(){return e.admin&&e.admin.apply(e,arguments)})},"Admin Console")])}var y={name:"NavbarAdmin"};const E=O()(y,[["render",w]]);var M=E,A=Object(n["f"])(" | ");function x(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["e"])("button",{onClick:r[0]||(r[0]=function(){return e.dashboard&&e.dashboard.apply(e,arguments)})},"Dashboard"),A,Object(n["e"])("button",{onClick:r[1]||(r[1]=function(){return e.logout&&e.logout.apply(e,arguments)})},"Logout")])}var U={name:"NavbarUser"};const k=O()(U,[["render",x]]);var C=k,R=t("5502"),S=Object(l["a"])({},Object(R["b"])(["loggedIn"])),P={name:"App",components:{NavbarGuest:j,NavbarUser:C,NavbarAdmin:M},computed:Object(l["a"])(Object(l["a"])({},S),Object(R["b"])(["getAccountType","getUser"])),created:function(){console.log(this.getUser)},methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/penis")},admin:function(){this.$router.push("/admin/console")}}};const _=O()(P,[["render",c]]);var L=_,T=(t("d3b7"),t("6c02")),N={id:"home"},B=Object(n["e"])("h1",null,"Profrec",-1),I=Object(n["e"])("p",null,"A platform for recreational sports like no other",-1),$=[B,I];function D(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",N,$)}var z={name:"Home",computed:Object(l["a"])({},S)};const V=O()(z,[["render",D]]);var G=V,H={id:"home"},Z=Object(n["e"])("h1",null,"Profrec: Login",-1),q=Object(n["e"])("br",null,null,-1),J=Object(n["e"])("label",{for:"username"},"Username: ",-1),F=Object(n["e"])("br",null,null,-1),W=Object(n["e"])("label",{for:"password"},"Password: ",-1),K=Object(n["e"])("br",null,null,-1),Q=Object(n["e"])("button",{type:"submit"},"Login",-1),X=Object(n["e"])("p",null,"New to this site?",-1),Y=Object(n["e"])("br",null,null,-1),ee=Object(n["f"])("Register");function re(e,r,t,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("div",H,[Z,Object(n["e"])("form",{onSubmit:r[2]||(r[2]=Object(n["C"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.loginErrorMessage),513),[[n["y"],null!=a.loginErrorMessage]]),q,J,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),F,W,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),K,Q],32),X,Y,Object(n["g"])(u,{to:{name:"Register"}},{default:Object(n["A"])((function(){return[ee]})),_:1})])}var te=t("1da1"),ne=(t("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(t=r.sent,t.successful){r.next=7;break}e.loginErrorMessage=t.message,r.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",t.token),r.next=11,e.$router.push("/user/dashboard");case 11:case"end":return r.stop()}}),r)})))()}}});const oe=O()(ne,[["render",re]]);var ae=oe,se={id:"home"},ue=Object(n["e"])("h1",null,"Profrec: Create an Account",-1),ce=Object(n["e"])("label",{for:"username"},"Username: ",-1),le=Object(n["e"])("br",null,null,-1),ie=Object(n["e"])("br",null,null,-1),be=Object(n["e"])("label",{for:"email"},"Email Address: ",-1),de=Object(n["e"])("br",null,null,-1),pe=Object(n["e"])("br",null,null,-1),me=Object(n["e"])("label",{for:"password"},"Password: ",-1),fe=Object(n["e"])("br",null,null,-1),Oe={style:{color:"red"}},ge=Object(n["e"])("br",null,null,-1),je=Object(n["e"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(n["e"])("br",null,null,-1),ve={style:{color:"red"}},we=Object(n["e"])("br",null,null,-1),ye=Object(n["e"])("button",{type:"submit"},"Register",-1);function Ee(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",se,[ue,Object(n["e"])("form",{onSubmit:r[4]||(r[4]=Object(n["C"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[ce,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),le,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.usernameErrorMessage),513),[[n["y"],null!=a.usernameErrorMessage]]),ie,be,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.email=e})},null,512),[[n["x"],a.email]]),de,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.emailErrorMessage),513),[[n["y"],null!=a.emailErrorMessage]]),pe,me,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),fe,Object(n["B"])(Object(n["e"])("p",Oe,"Invalid Password",512),[[n["y"],null!=a.passwordErrorMessage]]),ge,je,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return a.passwordConf=e})},null,512),[[n["x"],a.passwordConf]]),he,Object(n["B"])(Object(n["e"])("p",ve,"Passwords Do Not Match",512),[[n["y"],null!=a.passwordConfErrorMessage]]),we,ye],32)])}t("ac1f"),t("466d");var Me={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),r.next=8,e.$router.push("/user/dashboard");case 8:case"end":return r.stop()}}),r)})))()}}};const Ae=O()(Me,[["render",Ee]]);var xe=Ae;function Ue(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null," Welcome "+Object(n["v"])(e.getUsername),1)}var ke={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},S),Object(R["b"])(["getUsername","getAccountType"]))};const Ce=O()(ke,[["render",Ue]]);var Re=Ce;function Se(e,r,t,n,o,a){return null}var Pe={name:"Console.vue"};const _e=O()(Pe,[["render",Se]]);var Le=_e,Te=Object(n["e"])("h2",null,"Whoops this page doesn't exist",-1),Ne=[Te];function Be(e,r,t,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null,Ne)}var Ie={name:"NotFound"};const $e=O()(Ie,[["render",Be]]);var De=$e,ze=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:xe},{path:"/user/dashboard",name:"User Dashboard",component:Re,meta:{requiresAuth:!0}},{path:"/admin/console",name:"Admin Console",component:Le,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:De}],Ve=Object(T["a"])({history:Object(T["b"])("/"),routes:ze});Ve.beforeEach((function(e,r,t){var n=localStorage.getItem("user");e.matched.some((function(e){return e.meta.requiresAuth}))&&!n&&t("/"),t()}));var Ge=Ve,He=(t("e9c4"),t("bc3a")),Ze=t.n(He),qe=Ze.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),Je=t("bfa9"),Fe=new Je["a"]({storage:window.localStorage}),We=new R["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r)),Ze.a.defaults.headers.common["Authorization"]="Bearer ".concat(r.token)},LOGOUT:function(){localStorage.removeItem("user")}},actions:{register:function(e,r){return Object(te["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.abrupt("return",qe.post("users",r).then((function(e){var r=e.data;n("SET_USER_DATA",r)})));case 2:case"end":return t.stop()}}),t)})))()},login:function(e,r){return Object(te["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,qe.post("login",r);case 3:return o=t.sent,a=o.data,n("SET_USER_DATA",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){var r=e.commit;r("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user}},plugins:[Fe.plugin]});Object(n["b"])(L).use(We).use(Ge).mount("#app")},cf05:function(e,r,t){e.exports=t.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.dc76a1b7.js.map