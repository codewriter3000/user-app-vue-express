(function(e){function t(t){for(var n,u,s=t[0],c=t[1],l=t[2],b=0,d=[];b<s.length;b++)u=s[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("cf05"),a=r.n(o),u={id:"app"},s=Object(n["f"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function c(e,t,r,o,a,c){var l=Object(n["v"])("NavbarGuest"),i=Object(n["v"])("NavbarAdmin"),b=Object(n["v"])("NavbarUser"),d=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])("div",u,[s,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(n["q"])(),Object(n["d"])(i,{key:1})):(Object(n["q"])(),Object(n["d"])(b,{key:2})):(Object(n["q"])(),Object(n["d"])(l,{key:0})),Object(n["h"])(d)])}var l=r("5530"),i=Object(n["g"])("Home"),b=Object(n["g"])(" | "),d=Object(n["g"])("Login");function p(e,t,r,o,a,u){var s=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["h"])(s,{to:{name:"Home"}},{default:Object(n["C"])((function(){return[i]})),_:1}),b,Object(n["h"])(s,{to:{name:"Login"}},{default:Object(n["C"])((function(){return[d]})),_:1})])}var f={name:"NavbarGuest"},m=r("6b0d"),O=r.n(m);const g=O()(f,[["render",p]]);var j=g,h=Object(n["g"])(" | "),v=Object(n["g"])(" | ");function w(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["f"])("button",{onClick:t[0]||(t[0]=function(){return u.dashboard&&u.dashboard.apply(u,arguments)})},"Dashboard"),h,Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return u.logout&&u.logout.apply(u,arguments)})},"Logout"),v,Object(n["f"])("button",{onClick:t[2]||(t[2]=function(){return u.admin&&u.admin.apply(u,arguments)})},"Admin Console")])}var y={name:"NavbarAdmin",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},admin:function(){this.$router.push("/admin/console")}}};const A=O()(y,[["render",w]]);var E=A,k=Object(n["g"])(" | ");function M(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["f"])("button",{onClick:t[0]||(t[0]=function(){return u.dashboard&&u.dashboard.apply(u,arguments)})},"Dashboard"),k,Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return u.logout&&u.logout.apply(u,arguments)})},"Logout")])}var x={name:"NavbarUser",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}};const U=O()(x,[["render",M]]);var R=U,C=r("5502"),q=Object(l["a"])({},Object(C["b"])(["loggedIn"])),S={name:"App",components:{NavbarGuest:j,NavbarUser:R,NavbarAdmin:E},computed:Object(l["a"])(Object(l["a"])({},q),Object(C["b"])(["getAccountType","getUser"]))};const D=O()(S,[["render",c]]);var T=D,P=(r("d3b7"),r("6c02")),L={id:"home"},N=Object(n["f"])("h1",null,"Profrec",-1),_=Object(n["f"])("p",null,"A platform for recreational sports like no other",-1),I=[N,_];function $(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("div",L,I)}var z={name:"Home",computed:Object(l["a"])({},q)};const V=O()(z,[["render",$]]);var G=V,H={id:"home"},Z=Object(n["f"])("h1",null,"Profrec: Login",-1),B=Object(n["f"])("br",null,null,-1),J=Object(n["f"])("label",{for:"username"},"Username: ",-1),F=Object(n["f"])("br",null,null,-1),W=Object(n["f"])("label",{for:"password"},"Password: ",-1),K=Object(n["f"])("br",null,null,-1),Q=Object(n["f"])("button",{type:"submit"},"Login",-1),X=Object(n["f"])("p",null,"New to this site?",-1),Y=Object(n["f"])("br",null,null,-1),ee=Object(n["g"])("Register");function te(e,t,r,o,a,u){var s=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("div",H,[Z,Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["E"])((function(){return u.validateLogin&&u.validateLogin.apply(u,arguments)}),["prevent"]))},[Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.loginErrorMessage),513),[[n["A"],null!=a.loginErrorMessage]]),B,J,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["z"],a.username]]),F,W,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["z"],a.password]]),K,Q],32),X,Y,Object(n["h"])(s,{to:{name:"Register"}},{default:Object(n["C"])((function(){return[ee]})),_:1})])}var re=r("1da1"),ne=(r("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(r=t.sent,r.successful){t.next=7;break}e.loginErrorMessage=r.message,t.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",r.token),t.next=11,e.$router.push("/user/dashboard");case 11:case"end":return t.stop()}}),t)})))()}}});const oe=O()(ne,[["render",te]]);var ae=oe,ue={id:"home"},se=Object(n["f"])("h1",null,"Profrec: Create an Account",-1),ce=Object(n["f"])("label",{for:"username"},"Username: ",-1),le=Object(n["f"])("br",null,null,-1),ie=Object(n["f"])("br",null,null,-1),be=Object(n["f"])("label",{for:"email"},"Email Address: ",-1),de=Object(n["f"])("br",null,null,-1),pe=Object(n["f"])("br",null,null,-1),fe=Object(n["f"])("label",{for:"password"},"Password: ",-1),me=Object(n["f"])("br",null,null,-1),Oe={style:{color:"red"}},ge=Object(n["f"])("br",null,null,-1),je=Object(n["f"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(n["f"])("br",null,null,-1),ve={style:{color:"red"}},we=Object(n["f"])("br",null,null,-1),ye=Object(n["f"])("button",{type:"submit"},"Register",-1);function Ae(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("div",ue,[se,Object(n["f"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return u.processRegister&&u.processRegister.apply(u,arguments)}),["prevent"]))},[ce,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["z"],a.username]]),le,Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.usernameErrorMessage),513),[[n["A"],null!=a.usernameErrorMessage]]),ie,be,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[n["z"],a.email]]),de,Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.emailErrorMessage),513),[[n["A"],null!=a.emailErrorMessage]]),pe,fe,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["z"],a.password]]),me,Object(n["D"])(Object(n["f"])("p",Oe,"Invalid Password",512),[[n["A"],null!=a.passwordErrorMessage]]),ge,je,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[n["z"],a.passwordConf]]),he,Object(n["D"])(Object(n["f"])("p",ve,"Passwords Do Not Match",512),[[n["A"],null!=a.passwordConfErrorMessage]]),we,ye],32)])}r("ac1f"),r("466d");var Ee={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),t.next=8,e.$router.push("/user/dashboard");case 8:case"end":return t.stop()}}),t)})))()}}};const ke=O()(Ee,[["render",Ae]]);var Me=ke;function xe(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("div",null," Welcome "+Object(n["x"])(e.getUsername),1)}var Ue={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},q),Object(C["b"])(["getUsername","getAccountType"]))};const Re=O()(Ue,[["render",xe]]);var Ce=Re,qe={id:"Console"},Se=Object(n["f"])("h1",null,"Admin Console",-1),De=Object(n["f"])("thead",null,"Users",-1),Te=Object(n["f"])("tr",null,[Object(n["f"])("th",null,"Username")],-1);function Pe(e,t,r,o,a,u){var s=Object(n["v"])("UserRow");return Object(n["q"])(),Object(n["e"])("div",qe,[Se,Object(n["f"])("table",null,[De,Object(n["f"])("tbody",null,[Te,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(a.users,(function(e){return Object(n["q"])(),Object(n["d"])(s,{key:e.ID,username:e.username,"account-type":parseInt(e.accountType)},null,8,["username","account-type"])})),128))])])])}var Le=r("d4ec"),Ne=r("bee2"),_e=r("bc3a"),Ie=r.n(_e),$e=Ie.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),ze=function(){function e(){Object(Le["a"])(this,e)}return Object(Ne["a"])(e,[{key:"getAll",value:function(){return $e.get("/getusers")}},{key:"get",value:function(e){return $e.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return $e.get("/login")}},{key:"authenticateLogin",value:function(e){return $e.post("/login",e)}},{key:"create",value:function(e){return $e.post("/users",e)}},{key:"update",value:function(e,t){return $e.put("/users/".concat(e),t)}},{key:"delete",value:function(e){return $e.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return $e.get("/users?username=".concat(e))}}]),e}(),Ve=new ze,Ge=Object(n["g"])(" | "),He=Object(n["f"])("td",null,[Object(n["f"])("a",null,"Require Password on Next Login")],-1),Ze=Object(n["g"])(" | "),Be=Object(n["f"])("td",null,[Object(n["f"])("a",null,"Change Account Type")],-1);function Je(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("tr",null,[Object(n["f"])("td",null,Object(n["x"])(r.username),1),Ge,He,Ze,Be])}r("a9e3");var Fe={name:"UserRow",props:{username:{type:String,required:!0},accountType:{type:Number,required:!0}}};const We=O()(Fe,[["render",Je]]);var Ke=We,Qe={name:"Console.vue",components:{UserRow:Ke},data:function(){return{users:null}},created:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ve.getAll();case 2:e.users=t.sent,console.log(e.users);case 4:case"end":return t.stop()}}),t)})))()}};const Xe=O()(Qe,[["render",Pe]]);var Ye=Xe,et=Object(n["f"])("h2",null,"Whoops this page doesn't exist",-1),tt=[et];function rt(e,t,r,o,a,u){return Object(n["q"])(),Object(n["e"])("div",null,tt)}var nt={name:"NotFound"};const ot=O()(nt,[["render",rt]]);var at=ot,ut=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:Me},{path:"/user/dashboard",name:"User Dashboard",component:Ce,meta:{requiresAuth:!0}},{path:"/admin/console",name:"Admin Console",component:Ye,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:at}],st=Object(P["a"])({history:Object(P["b"])("/"),routes:ut});st.beforeEach((function(e,t,r){var n=localStorage.getItem("user"),o="5"===localStorage.getItem("accountType");e.matched.some((function(e){return e.meta.requiresAuth}))&&!n&&r("/"),e.matched.some((function(e){return e.meta.requiresAdminAuth}))&&!o&&r("/"),r()}));var ct=st,lt=(r("e9c4"),r("bfa9")),it=new lt["a"]({storage:window.localStorage}),bt=new C["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("accountType",t),Ie.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},LOGOUT:function(e){e.user=null,localStorage.removeItem("user")}},actions:{register:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.abrupt("return",$e.post("users",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)})));case 2:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,$e.post("login",t);case 3:return o=r.sent,a=o.data,n("SET_USER_DATA",a),r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},logout:function(e){var t=e.commit;t("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user}},plugins:[it.plugin]});Object(n["c"])(T).use(bt).use(ct).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.10b104f1.js.map