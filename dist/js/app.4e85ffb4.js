(function(e){function t(t){for(var n,s,u=t[0],c=t[1],l=t[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("cf05"),a=r.n(o),s={id:"app"},u=Object(n["f"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function c(e,t,r,o,a,c){var l=Object(n["v"])("NavbarGuest"),i=Object(n["v"])("NavbarAdmin"),d=Object(n["v"])("NavbarUser"),p=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])("div",s,[u,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(n["q"])(),Object(n["d"])(i,{key:1})):(Object(n["q"])(),Object(n["d"])(d,{key:2})):(Object(n["q"])(),Object(n["d"])(l,{key:0})),Object(n["h"])(p)])}var l=r("5530"),i=Object(n["g"])("Home"),d=Object(n["g"])(" | "),p=Object(n["g"])("Login");function b(e,t,r,o,a,s){var u=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["h"])(u,{to:{name:"Home"}},{default:Object(n["C"])((function(){return[i]})),_:1}),d,Object(n["h"])(u,{to:{name:"Login"}},{default:Object(n["C"])((function(){return[p]})),_:1})])}var f={name:"NavbarGuest"},m=r("6b0d"),g=r.n(m);const O=g()(f,[["render",b]]);var j=O,h=Object(n["g"])(" | "),w=Object(n["g"])(" | ");function v(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["f"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),h,Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout"),w,Object(n["f"])("button",{onClick:t[2]||(t[2]=function(){return s.admin&&s.admin.apply(s,arguments)})},"Admin Console")])}var y={name:"NavbarAdmin",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},admin:function(){this.$router.push("/admin/console")}}};const A=g()(y,[["render",v]]);var E=A,T=Object(n["g"])(" | ");function D(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("nav",null,[Object(n["f"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),T,Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout")])}var x={name:"NavbarUser",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}};const M=g()(x,[["render",D]]);var C=M,R=r("5502"),k=Object(l["a"])({},Object(R["b"])(["loggedIn"])),I={name:"App",components:{NavbarGuest:j,NavbarUser:C,NavbarAdmin:E},computed:Object(l["a"])(Object(l["a"])({},k),Object(R["b"])(["getAccountType","getUser"]))};const P=g()(I,[["render",c]]);var q=P,U=(r("d3b7"),r("6c02")),S={id:"home"},N=Object(n["f"])("h1",null,"Profrec",-1),_=Object(n["f"])("p",null,"A platform for recreational sports like no other",-1),L=[N,_];function z(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",S,L)}var $={name:"Home",computed:Object(l["a"])({},k)};const V=g()($,[["render",z]]);var G=V,H={id:"home"},Z=Object(n["f"])("h1",null,"Profrec: Login",-1),B=Object(n["f"])("br",null,null,-1),F=Object(n["f"])("label",{for:"username"},"Username: ",-1),J=Object(n["f"])("br",null,null,-1),W=Object(n["f"])("label",{for:"password"},"Password: ",-1),Y=Object(n["f"])("br",null,null,-1),K=Object(n["f"])("button",{type:"submit"},"Login",-1),Q=Object(n["f"])("p",null,"New to this site?",-1),X=Object(n["f"])("br",null,null,-1),ee=Object(n["g"])("Register");function te(e,t,r,o,a,s){var u=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("div",H,[Z,Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["E"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.loginErrorMessage),513),[[n["A"],null!=a.loginErrorMessage]]),B,F,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["z"],a.username]]),J,W,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["z"],a.password]]),Y,K],32),Q,X,Object(n["h"])(u,{to:{name:"Register"}},{default:Object(n["C"])((function(){return[ee]})),_:1})])}var re=r("1da1"),ne=(r("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(r=t.sent,r.successful){t.next=7;break}e.loginErrorMessage=r.message,t.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",r.token),t.next=11,e.$router.push("/user/dashboard");case 11:case"end":return t.stop()}}),t)})))()}}});const oe=g()(ne,[["render",te]]);var ae=oe,se={id:"home"},ue=Object(n["f"])("h1",null,"Profrec: Create an Account",-1),ce=Object(n["f"])("label",{for:"username"},"Username: ",-1),le=Object(n["f"])("br",null,null,-1),ie=Object(n["f"])("br",null,null,-1),de=Object(n["f"])("label",{for:"email"},"Email Address: ",-1),pe=Object(n["f"])("br",null,null,-1),be=Object(n["f"])("br",null,null,-1),fe=Object(n["f"])("label",{for:"password"},"Password: ",-1),me=Object(n["f"])("br",null,null,-1),ge={style:{color:"red"}},Oe=Object(n["f"])("br",null,null,-1),je=Object(n["f"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(n["f"])("br",null,null,-1),we={style:{color:"red"}},ve=Object(n["f"])("br",null,null,-1),ye=Object(n["f"])("button",{type:"submit"},"Register",-1);function Ae(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",se,[ue,Object(n["f"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[ce,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["z"],a.username]]),le,Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.usernameErrorMessage),513),[[n["A"],null!=a.usernameErrorMessage]]),ie,de,Object(n["D"])(Object(n["f"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[n["z"],a.email]]),pe,Object(n["D"])(Object(n["f"])("p",{style:{color:"red"}},Object(n["x"])(a.emailErrorMessage),513),[[n["A"],null!=a.emailErrorMessage]]),be,fe,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["z"],a.password]]),me,Object(n["D"])(Object(n["f"])("p",ge,"Invalid Password",512),[[n["A"],null!=a.passwordErrorMessage]]),Oe,je,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[n["z"],a.passwordConf]]),he,Object(n["D"])(Object(n["f"])("p",we,"Passwords Do Not Match",512),[[n["A"],null!=a.passwordConfErrorMessage]]),ve,ye],32)])}r("ac1f"),r("466d");var Ee={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),t.next=8,e.$router.push("/user/dashboard");case 8:case"end":return t.stop()}}),t)})))()}}};const Te=g()(Ee,[["render",Ae]]);var De=Te;function xe(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",null," Welcome "+Object(n["x"])(e.getUsername),1)}var Me={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},k),Object(R["b"])(["getUsername","getAccountType"]))};const Ce=g()(Me,[["render",xe]]);var Re=Ce,ke={id:"Console"},Ie=Object(n["f"])("h1",null,"Admin Console",-1),Pe=Object(n["f"])("tr",null,[Object(n["f"])("th",null,"User Account Management")],-1);function qe(e,t,r,o,a,s){var u=Object(n["v"])("UserRow");return Object(n["q"])(),Object(n["e"])("div",ke,[Ie,Object(n["f"])("table",null,[Object(n["f"])("tbody",null,[Pe,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(a.users,(function(e){return Object(n["q"])(),Object(n["d"])(u,{key:e.ID,username:e.username,"account-type":parseInt(e.account_type),userID:parseInt(e.ID)},null,8,["username","account-type","userID"])})),128))])])])}var Ue=r("d4ec"),Se=r("bee2"),Ne=r("bc3a"),_e=r.n(Ne),Le=_e.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),ze=function(){function e(){Object(Ue["a"])(this,e)}return Object(Se["a"])(e,[{key:"getAll",value:function(){return Le.get("/getusers")}},{key:"get",value:function(e){return Le.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return Le.get("/login")}},{key:"authenticateLogin",value:function(e){return Le.post("/login",e)}},{key:"create",value:function(e){return Le.post("/users",e)}},{key:"update",value:function(e,t){return Le.put("/users/".concat(e),t)}},{key:"delete",value:function(e){return Le.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return Le.get("/users?username=".concat(e))}}]),e}(),$e=new ze,Ve=Object(n["g"])(" | "),Ge=Object(n["g"])(" | "),He=Object(n["g"])(" | ");function Ze(e,t,r,o,a,s){var u=Object(n["v"])("ChangeAccountType");return Object(n["q"])(),Object(n["e"])("tr",null,[Object(n["f"])("td",null,Object(n["x"])(r.userID),1),Ve,Object(n["f"])("td",null,Object(n["x"])(r.username),1),Ge,Object(n["f"])("td",null,[Object(n["f"])("button",{onClick:t[0]||(t[0]=function(){return s.requirePasswordOnNextLogin&&s.requirePasswordOnNextLogin.apply(s,arguments)})},"Require Password on Next Login")]),He,Object(n["f"])("td",null,[Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return s.changeAccountType&&s.changeAccountType.apply(s,arguments)})},"Change Account Type")]),Object(n["D"])(Object(n["h"])(u,{ID:r.userID,currentAccountType:r.accountType},null,8,["ID","currentAccountType"]),[[n["A"],a.changeAccountTypeID]])])}r("a9e3");var Be={id:"ChangeAccountType"},Fe=Object(n["g"])(" | "),Je=Object(n["f"])("label",{for:"accountType"},"Account Type ",-1),We=["value"],Ye=Object(n["f"])("button",{type:"submit"},"Submit",-1);function Ke(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",Be,[Object(n["f"])("form",{onSubmit:t[1]||(t[1]=Object(n["E"])((function(){return s.changeAccountType&&s.changeAccountType.apply(s,arguments)}),["prevent"]))},[Fe,Je,Object(n["D"])(Object(n["f"])("input",{type:"text",id:"accountType","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.accountType=e}),value:r.currentAccountType},null,8,We),[[n["z"],a.accountType]]),Ye],32)])}var Qe={name:"ChangeAccountType",props:{ID:{type:Number,required:!0},currentAccountType:{type:Number,required:!0}},data:function(){return{accountType:this.currentAccountType}},methods:{changeAccountType:function(){alert("Account type for user: "+this.ID+" is now: "+this.accountType)}}};const Xe=g()(Qe,[["render",Ke]]);var et=Xe,tt={name:"UserRow",components:{ChangeAccountType:et},props:{username:{type:String,required:!0},userID:{type:Number,required:!0},accountType:{type:Number,required:!0}},data:function(){return{changeAccountTypeID:!1}},created:function(){console.log("AC: ",this.accountType)},methods:{changeAccountType:function(){this.changeAccountTypeID=!this.changeAccountTypeID},requirePasswordOnNextLogin:function(){alert("Required password on next login for: "+this.ID)}}};const rt=g()(tt,[["render",Ze]]);var nt=rt,ot={name:"Console.vue",components:{UserRow:nt},data:function(){return{users:null}},created:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$e.getAll();case 2:r=t.sent,n=r.data,console.log("data: ",n),e.users=n;case 6:case"end":return t.stop()}}),t)})))()}};const at=g()(ot,[["render",qe]]);var st=at,ut=Object(n["f"])("h2",null,"Whoops this page doesn't exist",-1),ct=[ut];function lt(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",null,ct)}var it={name:"NotFound"};const dt=g()(it,[["render",lt]]);var pt=dt,bt={id:"PasswordReset"},ft=Object(n["f"])("h1",null,"Reset Your Password",-1),mt=Object(n["f"])("p",null,"For your own safety, an administrator has prompted you to reset your password.",-1),gt=Object(n["f"])("label",{for:"password"},"Password: ",-1),Ot=Object(n["f"])("br",null,null,-1),jt={style:{color:"red"}},ht=Object(n["f"])("br",null,null,-1),wt=Object(n["f"])("label",{for:"passwordconf"},"Confirm Password: ",-1),vt=Object(n["f"])("br",null,null,-1),yt={style:{color:"red"}},At=Object(n["f"])("br",null,null,-1),Et=Object(n["f"])("button",{type:"submit"},"Reset Password",-1);function Tt(e,t,r,o,a,s){return Object(n["q"])(),Object(n["e"])("div",bt,[ft,mt,Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["E"])((function(){return s.newPassword&&s.newPassword.apply(s,arguments)}),["prevent"]))},[gt,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.password=e})},null,512),[[n["z"],a.password]]),Ot,Object(n["D"])(Object(n["f"])("p",jt,"Invalid Password",512),[[n["A"],null!=a.passwordErrorMessage]]),ht,wt,Object(n["D"])(Object(n["f"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.passwordConf=e})},null,512),[[n["z"],a.passwordConf]]),vt,Object(n["D"])(Object(n["f"])("p",yt,"Passwords Do Not Match",512),[[n["A"],null!=a.passwordConfErrorMessage]]),At,Et],32)])}var Dt=r("1c46"),xt=r.n(Dt),Mt={name:"PasswordReset",data:function(){return{password:null,passwordConf:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{newPassword:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=6;break}return e.$store.dispatch("update",{password:xt.a.createHash("md5").update(e.password).digest("hex"),require_password_at_login:0}),t.next=6,e.$router.push("/user/dashboard");case 6:case"end":return t.stop()}}),t)})))()}}};const Ct=g()(Mt,[["render",Tt]]);var Rt=Ct,kt=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:De},{path:"/user/dashboard",name:"User Dashboard",component:Re,meta:{requiresAuth:!0}},{path:"/user/passwordreset",name:"Password Reset",component:Rt,meta:{requiresAuth:!0,loopCatcher:!0}},{path:"/admin/console",name:"Admin Console",component:st,meta:{requiresAdminAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:pt}],It=Object(U["a"])({history:Object(U["b"])("/"),routes:kt});It.beforeEach((function(e,t,r){var n=localStorage.getItem("user"),o="5"===localStorage.getItem("accountType"),a=localStorage.getItem("requirePasswordReset");e.matched.some((function(e){return e.meta.requiresAuth}))&&n&&"true"===a&&!e.matched.some((function(e){return e.meta.loopCatcher}))&&r("/user/passwordreset"),e.matched.some((function(e){return e.meta.requiresAuth}))&&!n&&r("/"),e.matched.some((function(e){return e.meta.requiresAdminAuth}))&&!o&&r("/"),r()}));var Pt=It,qt=(r("e9c4"),r("bfa9")),Ut=new qt["a"]({storage:window.localStorage}),St=new R["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("accountType",t.accountType),localStorage.setItem("requirePasswordReset",t.requirePasswordReset),console.log("state.user: ",e.user),_e.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},LOGOUT:function(e){e.user=null,localStorage.removeItem("user"),localStorage.removeItem("accountType"),localStorage.removeItem("requirePasswordReset")}},actions:{register:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.abrupt("return",Le.post("users",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)})));case 2:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,Le.post("login",t);case 3:return o=r.sent,a=o.data,n("SET_USER_DATA",a),r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},update:function(e,t){var r=this;return Object(re["a"])(regeneratorRuntime.mark((function n(){var o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,Le.put("/users/"+r.state.user.userID,t);case 3:return n.next=5,Le.get("/"+r.state.user.userID);case 5:a=n.sent,s=a.userData,o("SET_USER_DATA",s);case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user},getUserID:function(e){return e.user.userID}},plugins:[Ut.plugin]});Object(n["c"])(q).use(St).use(Pt).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cf05:function(e,t,r){e.exports=r.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.4e85ffb4.js.map