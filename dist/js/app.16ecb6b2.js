(function(e){function t(t){for(var n,s,u=t[0],c=t[1],l=t[2],b=0,d=[];b<u.length;b++)s=u[b],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("cf05"),a=r.n(o),s={id:"app"},u=Object(n["e"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function c(e,t,r,o,a,c){var l=Object(n["t"])("NavbarGuest"),i=Object(n["t"])("NavbarAdmin"),b=Object(n["t"])("NavbarUser"),d=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])("div",s,[u,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(n["p"])(),Object(n["c"])(i,{key:1})):(Object(n["p"])(),Object(n["c"])(b,{key:2})):(Object(n["p"])(),Object(n["c"])(l,{key:0})),Object(n["g"])(d)])}var l=r("5530"),i=Object(n["f"])("Home"),b=Object(n["f"])(" | "),d=Object(n["f"])("Login");function p(e,t,r,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["g"])(u,{to:{name:"Home"}},{default:Object(n["A"])((function(){return[i]})),_:1}),b,Object(n["g"])(u,{to:{name:"Login"}},{default:Object(n["A"])((function(){return[d]})),_:1})])}var m={name:"NavbarGuest"},g=r("6b0d"),O=r.n(g);const f=O()(m,[["render",p]]);var j=f,h=Object(n["f"])(" | "),v=Object(n["f"])(" | ");function w(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),h,Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout"),v,Object(n["e"])("button",{onClick:t[2]||(t[2]=function(){return s.admin&&s.admin.apply(s,arguments)})},"Admin Console")])}var y={name:"NavbarAdmin",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},admin:function(){this.$router.push("/admin/console")}}};const E=O()(y,[["render",w]]);var A=E,M=Object(n["f"])(" | ");function x(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["e"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),M,Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout")])}var U={name:"NavbarUser",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}};const k=O()(U,[["render",x]]);var C=k,S=r("5502"),R=Object(l["a"])({},Object(S["b"])(["loggedIn"])),P={name:"App",components:{NavbarGuest:j,NavbarUser:C,NavbarAdmin:A},computed:Object(l["a"])(Object(l["a"])({},R),Object(S["b"])(["getAccountType","getUser"]))};const T=O()(P,[["render",c]]);var _=T,L=(r("d3b7"),r("6c02")),I={id:"home"},N=Object(n["e"])("h1",null,"Profrec",-1),B=Object(n["e"])("p",null,"A platform for recreational sports like no other",-1),$=[N,B];function D(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("div",I,$)}var z={name:"Home",computed:Object(l["a"])({},R)};const V=O()(z,[["render",D]]);var G=V,q={id:"home"},H=Object(n["e"])("h1",null,"Profrec: Login",-1),Z=Object(n["e"])("br",null,null,-1),J=Object(n["e"])("label",{for:"username"},"Username: ",-1),F=Object(n["e"])("br",null,null,-1),W=Object(n["e"])("label",{for:"password"},"Password: ",-1),K=Object(n["e"])("br",null,null,-1),Q=Object(n["e"])("button",{type:"submit"},"Login",-1),X=Object(n["e"])("p",null,"New to this site?",-1),Y=Object(n["e"])("br",null,null,-1),ee=Object(n["f"])("Register");function te(e,t,r,o,a,s){var u=Object(n["t"])("router-link");return Object(n["p"])(),Object(n["d"])("div",q,[H,Object(n["e"])("form",{onSubmit:t[2]||(t[2]=Object(n["C"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.loginErrorMessage),513),[[n["y"],null!=a.loginErrorMessage]]),Z,J,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),F,W,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),K,Q],32),X,Y,Object(n["g"])(u,{to:{name:"Register"}},{default:Object(n["A"])((function(){return[ee]})),_:1})])}var re=r("1da1"),ne=(r("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(r=t.sent,r.successful){t.next=7;break}e.loginErrorMessage=r.message,t.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",r.token),t.next=11,e.$router.push("/user/dashboard");case 11:case"end":return t.stop()}}),t)})))()}}});const oe=O()(ne,[["render",te]]);var ae=oe,se={id:"home"},ue=Object(n["e"])("h1",null,"Profrec: Create an Account",-1),ce=Object(n["e"])("label",{for:"username"},"Username: ",-1),le=Object(n["e"])("br",null,null,-1),ie=Object(n["e"])("br",null,null,-1),be=Object(n["e"])("label",{for:"email"},"Email Address: ",-1),de=Object(n["e"])("br",null,null,-1),pe=Object(n["e"])("br",null,null,-1),me=Object(n["e"])("label",{for:"password"},"Password: ",-1),ge=Object(n["e"])("br",null,null,-1),Oe={style:{color:"red"}},fe=Object(n["e"])("br",null,null,-1),je=Object(n["e"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(n["e"])("br",null,null,-1),ve={style:{color:"red"}},we=Object(n["e"])("br",null,null,-1),ye=Object(n["e"])("button",{type:"submit"},"Register",-1);function Ee(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("div",se,[ue,Object(n["e"])("form",{onSubmit:t[4]||(t[4]=Object(n["C"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[ce,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["x"],a.username]]),le,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.usernameErrorMessage),513),[[n["y"],null!=a.usernameErrorMessage]]),ie,be,Object(n["B"])(Object(n["e"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[n["x"],a.email]]),de,Object(n["B"])(Object(n["e"])("p",{style:{color:"red"}},Object(n["v"])(a.emailErrorMessage),513),[[n["y"],null!=a.emailErrorMessage]]),pe,me,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["x"],a.password]]),ge,Object(n["B"])(Object(n["e"])("p",Oe,"Invalid Password",512),[[n["y"],null!=a.passwordErrorMessage]]),fe,je,Object(n["B"])(Object(n["e"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[n["x"],a.passwordConf]]),he,Object(n["B"])(Object(n["e"])("p",ve,"Passwords Do Not Match",512),[[n["y"],null!=a.passwordConfErrorMessage]]),we,ye],32)])}r("ac1f"),r("466d");var Ae={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),t.next=8,e.$router.push("/user/dashboard");case 8:case"end":return t.stop()}}),t)})))()}}};const Me=O()(Ae,[["render",Ee]]);var xe=Me;function Ue(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null," Welcome "+Object(n["v"])(e.getUsername),1)}var ke={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},R),Object(S["b"])(["getUsername","getAccountType"]))};const Ce=O()(ke,[["render",Ue]]);var Se=Ce,Re={id:"Console"},Pe=Object(n["e"])("h1",null,"Admin Console",-1),Te=[Pe];function _e(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("div",Re,Te)}var Le={name:"Console.vue"};const Ie=O()(Le,[["render",_e]]);var Ne=Ie,Be=Object(n["e"])("h2",null,"Whoops this page doesn't exist",-1),$e=[Be];function De(e,t,r,o,a,s){return Object(n["p"])(),Object(n["d"])("div",null,$e)}var ze={name:"NotFound"};const Ve=O()(ze,[["render",De]]);var Ge=Ve,qe=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:xe},{path:"/user/dashboard",name:"User Dashboard",component:Se,meta:{requiresAuth:!0}},{path:"/admin/console",name:"Admin Console",component:Ne,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:Ge}],He=Object(L["a"])({history:Object(L["b"])("/"),routes:qe});He.beforeEach((function(e,t,r){var n=localStorage.getItem("user");console.log("account type: ",localStorage.getItem("accountType"));var o="5"===localStorage.getItem("accountType");e.matched.some((function(e){return e.meta.requiresAuth}))&&!n&&r("/"),e.matched.some((function(e){return e.meta.requiresAdminAuth}))&&!o&&r("/"),r()}));var Ze=He,Je=(r("e9c4"),r("bc3a")),Fe=r.n(Je),We=Fe.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),Ke=r("bfa9"),Qe=new Ke["a"]({storage:window.localStorage}),Xe=new S["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("accountType",t),Fe.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},LOGOUT:function(e){e.user=null,localStorage.removeItem("user")}},actions:{register:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.abrupt("return",We.post("users",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)})));case 2:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,We.post("login",t);case 3:return o=r.sent,a=o.data,n("SET_USER_DATA",a),r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},logout:function(e){var t=e.commit;t("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user}},plugins:[Qe.plugin]});Object(n["b"])(_).use(Xe).use(Ze).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.16ecb6b2.js.map