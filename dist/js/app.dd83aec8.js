(function(e){function t(t){for(var n,s,u=t[0],c=t[1],l=t[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("cf05"),a=r.n(o),s={id:"app"},u=Object(n["g"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function c(e,t,r,o,a,c){var l=Object(n["w"])("NavbarGuest"),i=Object(n["w"])("NavbarAdmin"),d=Object(n["w"])("NavbarUser"),p=Object(n["w"])("router-view");return Object(n["r"])(),Object(n["f"])("div",s,[u,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(n["r"])(),Object(n["d"])(i,{key:1})):(Object(n["r"])(),Object(n["d"])(d,{key:2})):(Object(n["r"])(),Object(n["d"])(l,{key:0})),Object(n["i"])(p)])}var l=r("5530"),i=Object(n["h"])("Home"),d=Object(n["h"])(" | "),p=Object(n["h"])("Login");function b(e,t,r,o,a,s){var u=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("nav",null,[Object(n["i"])(u,{to:{name:"Home"}},{default:Object(n["D"])((function(){return[i]})),_:1}),d,Object(n["i"])(u,{to:{name:"Login"}},{default:Object(n["D"])((function(){return[p]})),_:1})])}var g={name:"NavbarGuest"},m=r("6b0d"),f=r.n(m);const O=f()(g,[["render",b]]);var j=O,h=Object(n["h"])(" | "),w=Object(n["h"])(" | ");function v(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("nav",null,[Object(n["g"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),h,Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout"),w,Object(n["g"])("button",{onClick:t[2]||(t[2]=function(){return s.admin&&s.admin.apply(s,arguments)})},"Admin Console")])}var y={name:"NavbarAdmin",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},admin:function(){this.$router.push("/admin/console")}}};const A=f()(y,[["render",v]]);var E=A,T=Object(n["h"])(" | ");function M(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("nav",null,[Object(n["g"])("button",{onClick:t[0]||(t[0]=function(){return s.dashboard&&s.dashboard.apply(s,arguments)})},"Dashboard"),T,Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout")])}var R={name:"NavbarUser",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}};const k=f()(R,[["render",M]]);var C=k,x=r("5502"),I=Object(l["a"])({},Object(x["b"])(["loggedIn"])),P={name:"App",components:{NavbarGuest:j,NavbarUser:C,NavbarAdmin:E},computed:Object(l["a"])(Object(l["a"])({},I),Object(x["b"])(["getAccountType","getUser"]))};const U=f()(P,[["render",c]]);var D=U,S=(r("d3b7"),r("6c02")),_={id:"home"},N=Object(n["g"])("h1",null,"Profrec",-1),q=Object(n["g"])("p",null,"A platform for recreational sports like no other",-1),L=[N,q];function $(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("div",_,L)}var B={name:"Home",computed:Object(l["a"])({},I)};const V=f()(B,[["render",$]]);var F=V,z={id:"home"},G=Object(n["g"])("h1",null,"Profrec: Login",-1),H=Object(n["g"])("br",null,null,-1),Z=Object(n["g"])("label",{for:"username"},"Username: ",-1),J=Object(n["g"])("br",null,null,-1),W=Object(n["g"])("label",{for:"password"},"Password: ",-1),Y=Object(n["g"])("br",null,null,-1),K=Object(n["g"])("button",{type:"submit"},"Login",-1),Q=Object(n["g"])("p",null,"New to this site?",-1),X=Object(n["g"])("br",null,null,-1),ee=Object(n["h"])("Register");function te(e,t,r,o,a,s){var u=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",z,[G,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["E"])(Object(n["g"])("p",{style:{color:"red"}},Object(n["y"])(a.loginErrorMessage),513),[[n["B"],null!=a.loginErrorMessage]]),H,Z,Object(n["E"])(Object(n["g"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["A"],a.username]]),J,W,Object(n["E"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["A"],a.password]]),Y,K],32),Q,X,Object(n["i"])(u,{to:{name:"Register"}},{default:Object(n["D"])((function(){return[ee]})),_:1})])}var re=r("1da1"),ne=(r("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(r=t.sent,r.successful){t.next=7;break}e.loginErrorMessage=r.message,t.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",r.token),t.next=11,e.$router.push("/user/dashboard");case 11:case"end":return t.stop()}}),t)})))()}}});const oe=f()(ne,[["render",te]]);var ae=oe,se={id:"home"},ue=Object(n["g"])("h1",null,"Profrec: Create an Account",-1),ce=Object(n["g"])("label",{for:"username"},"Username: ",-1),le=Object(n["g"])("br",null,null,-1),ie=Object(n["g"])("br",null,null,-1),de=Object(n["g"])("label",{for:"email"},"Email Address: ",-1),pe=Object(n["g"])("br",null,null,-1),be=Object(n["g"])("br",null,null,-1),ge=Object(n["g"])("label",{for:"password"},"Password: ",-1),me=Object(n["g"])("br",null,null,-1),fe={style:{color:"red"}},Oe=Object(n["g"])("br",null,null,-1),je=Object(n["g"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(n["g"])("br",null,null,-1),we={style:{color:"red"}},ve=Object(n["g"])("br",null,null,-1),ye=Object(n["g"])("button",{type:"submit"},"Register",-1);function Ae(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("div",se,[ue,Object(n["g"])("form",{onSubmit:t[4]||(t[4]=Object(n["F"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[ce,Object(n["E"])(Object(n["g"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[n["A"],a.username]]),le,Object(n["E"])(Object(n["g"])("p",{style:{color:"red"}},Object(n["y"])(a.usernameErrorMessage),513),[[n["B"],null!=a.usernameErrorMessage]]),ie,de,Object(n["E"])(Object(n["g"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[n["A"],a.email]]),pe,Object(n["E"])(Object(n["g"])("p",{style:{color:"red"}},Object(n["y"])(a.emailErrorMessage),513),[[n["B"],null!=a.emailErrorMessage]]),be,ge,Object(n["E"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["A"],a.password]]),me,Object(n["E"])(Object(n["g"])("p",fe,"Invalid Password",512),[[n["B"],null!=a.passwordErrorMessage]]),Oe,je,Object(n["E"])(Object(n["g"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[n["A"],a.passwordConf]]),he,Object(n["E"])(Object(n["g"])("p",we,"Passwords Do Not Match",512),[[n["B"],null!=a.passwordConfErrorMessage]]),ve,ye],32)])}r("ac1f"),r("466d");var Ee={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),t.next=8,e.$router.push("/user/dashboard");case 8:case"end":return t.stop()}}),t)})))()}}};const Te=f()(Ee,[["render",Ae]]);var Me=Te,Re={key:0};function ke(e,t,r,o,a,s){return e.getUsername?(Object(n["r"])(),Object(n["f"])("div",Re," Welcome "+Object(n["y"])(e.getUsername),1)):Object(n["e"])("",!0)}var Ce={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},I),Object(x["b"])(["getUsername","getAccountType"]))};const xe=f()(Ce,[["render",ke]]);var Ie=xe,Pe={id:"Console"},Ue=Object(n["g"])("h1",null,"Admin Console",-1),De=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"User Account Management")],-1);function Se(e,t,r,o,a,s){var u=Object(n["w"])("UserRow");return Object(n["r"])(),Object(n["f"])("div",Pe,[Ue,Object(n["g"])("table",null,[Object(n["g"])("tbody",null,[De,(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.users,(function(e){return Object(n["r"])(),Object(n["d"])(u,{key:e.ID,username:e.username,"account-type":parseInt(e.account_type),userID:parseInt(e.ID)},null,8,["username","account-type","userID"])})),128))])])])}var _e=r("d4ec"),Ne=r("bee2"),qe=r("bc3a"),Le=r.n(qe),$e=Le.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),Be=function(){function e(){Object(_e["a"])(this,e)}return Object(Ne["a"])(e,[{key:"getAll",value:function(){return $e.get("/getusers")}},{key:"get",value:function(e){return $e.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return $e.get("/login")}},{key:"authenticateLogin",value:function(e){return $e.post("/login",e)}},{key:"create",value:function(e){return $e.post("/users",e)}},{key:"update",value:function(e,t){return $e.put("/users/".concat(e),t)}},{key:"delete",value:function(e){return $e.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return $e.get("/users?username=".concat(e))}}]),e}(),Ve=new Be,Fe=Object(n["h"])(" | "),ze=Object(n["h"])(" | "),Ge=Object(n["h"])(" | ");function He(e,t,r,o,a,s){var u=Object(n["w"])("ChangeAccountType");return Object(n["r"])(),Object(n["f"])("tr",null,[Object(n["g"])("td",null,Object(n["y"])(r.userID),1),Fe,Object(n["g"])("td",null,Object(n["y"])(r.username),1),ze,Object(n["g"])("td",null,[Object(n["g"])("button",{onClick:t[0]||(t[0]=function(){return s.requirePasswordOnNextLogin&&s.requirePasswordOnNextLogin.apply(s,arguments)})},"Require Password on Next Login")]),Ge,Object(n["g"])("td",null,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return s.changeAccountType&&s.changeAccountType.apply(s,arguments)})},"Change Account Type")]),Object(n["E"])(Object(n["i"])(u,{ID:r.userID,currentAccountType:r.accountType},null,8,["ID","currentAccountType"]),[[n["B"],a.changeAccountTypeID]])])}r("a9e3");var Ze={id:"ChangeAccountType"},Je=Object(n["h"])(" | "),We=Object(n["g"])("label",{for:"accountType"},"Account Type ",-1),Ye=["value"],Ke=Object(n["g"])("button",{type:"submit"},"Submit",-1);function Qe(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("div",Ze,[Object(n["g"])("form",{onSubmit:t[1]||(t[1]=Object(n["F"])((function(){return s.changeAccountType&&s.changeAccountType.apply(s,arguments)}),["prevent"]))},[Je,We,Object(n["E"])(Object(n["g"])("input",{type:"text",id:"accountType","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.accountType=e}),value:r.currentAccountType},null,8,Ye),[[n["A"],a.accountType]]),Ke],32)])}var Xe={name:"ChangeAccountType",props:{ID:{type:Number,required:!0},currentAccountType:{type:Number,required:!0}},data:function(){return{accountType:this.currentAccountType}},methods:{changeAccountType:function(){alert("Account type for user: "+this.ID+" is now: "+this.accountType)}}};const et=f()(Xe,[["render",Qe]]);var tt=et,rt={name:"UserRow",components:{ChangeAccountType:tt},props:{username:{type:String,required:!0},userID:{type:Number,required:!0},accountType:{type:Number,required:!0}},data:function(){return{changeAccountTypeID:!1}},created:function(){},methods:{changeAccountType:function(){this.changeAccountTypeID=!this.changeAccountTypeID},requirePasswordOnNextLogin:function(){$e.put("/users/"+this.userID,{require_password_at_login:1})}}};const nt=f()(rt,[["render",He]]);var ot=nt,at={name:"Console.vue",components:{UserRow:ot},data:function(){return{users:null}},created:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ve.getAll();case 2:r=t.sent,n=r.data,console.log("data: ",n),e.users=n;case 6:case"end":return t.stop()}}),t)})))()}};const st=f()(at,[["render",Se]]);var ut=st,ct=Object(n["g"])("h2",null,"Whoops this page doesn't exist",-1),lt=[ct];function it(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("div",null,lt)}var dt={name:"NotFound"};const pt=f()(dt,[["render",it]]);var bt=pt,gt={id:"PasswordReset"},mt=Object(n["g"])("h1",null,"Reset Your Password",-1),ft=Object(n["g"])("p",null,"For your own safety, an administrator has prompted you to reset your password.",-1),Ot=Object(n["g"])("label",{for:"password"},"Password: ",-1),jt=Object(n["g"])("br",null,null,-1),ht={style:{color:"red"}},wt=Object(n["g"])("br",null,null,-1),vt=Object(n["g"])("label",{for:"passwordconf"},"Confirm Password: ",-1),yt=Object(n["g"])("br",null,null,-1),At={style:{color:"red"}},Et=Object(n["g"])("br",null,null,-1),Tt=Object(n["g"])("button",{type:"submit"},"Reset Password",-1);function Mt(e,t,r,o,a,s){return Object(n["r"])(),Object(n["f"])("div",gt,[mt,ft,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return s.newPassword&&s.newPassword.apply(s,arguments)}),["prevent"]))},[Ot,Object(n["E"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.password=e})},null,512),[[n["A"],a.password]]),jt,Object(n["E"])(Object(n["g"])("p",ht,"Invalid Password",512),[[n["B"],null!=a.passwordErrorMessage]]),wt,vt,Object(n["E"])(Object(n["g"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.passwordConf=e})},null,512),[[n["A"],a.passwordConf]]),yt,Object(n["E"])(Object(n["g"])("p",At,"Passwords Do Not Match",512),[[n["B"],null!=a.passwordConfErrorMessage]]),Et,Tt],32)])}var Rt=r("1c46"),kt=r.n(Rt),Ct={name:"PasswordReset",data:function(){return{password:null,passwordConf:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{newPassword:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=6;break}return e.$store.dispatch("update",{password:kt.a.createHash("md5").update(e.password).digest("hex"),require_password_at_login:0}),t.next=6,e.$router.push("/user/dashboard");case 6:case"end":return t.stop()}}),t)})))()}}};const xt=f()(Ct,[["render",Mt]]);var It=xt,Pt=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:Me},{path:"/user/dashboard",name:"User Dashboard",component:Ie,meta:{requiresAuth:!0}},{path:"/user/passwordreset",name:"Password Reset",component:It,meta:{requiresAuth:!0,loopCatcher:!0}},{path:"/admin/console",name:"Admin Console",component:ut,meta:{requiresAdminAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:bt}],Ut=Object(S["a"])({history:Object(S["b"])("/"),routes:Pt});Ut.beforeEach((function(e,t,r){var n,o,a,s=null===(n=localStorage)||void 0===n?void 0:n.getItem("user"),u="5"===(null===(o=localStorage)||void 0===o?void 0:o.getItem("accountType")),c=null===(a=localStorage)||void 0===a?void 0:a.getItem("requirePasswordReset");e.matched.some((function(e){return e.meta.requiresAuth}))&&s&&"true"===c&&!e.matched.some((function(e){return e.meta.loopCatcher}))&&(console.log("password reset required"),r("/user/passwordreset")),e.matched.some((function(e){return e.meta.requiresAuth}))&&!s&&r("/"),e.matched.some((function(e){return e.meta.requiresAdminAuth}))&&!u&&r("/"),r()}));var Dt=Ut,St=(r("e9c4"),r("bfa9")),_t=new St["a"]({storage:window.localStorage}),Nt=new x["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("accountType",t.accountType),localStorage.setItem("requirePasswordReset",t.requirePasswordReset),Le.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},LOGOUT:function(e){return Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.removeItem("user"),localStorage.removeItem("accountType"),localStorage.removeItem("requirePasswordReset"),e.user=null;case 4:case"end":return t.stop()}}),t)})))()}},actions:{register:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.abrupt("return",$e.post("users",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)})));case 2:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,$e.post("login",t);case 3:return o=r.sent,a=o.data,n("SET_USER_DATA",a),r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},update:function(e,t){var r=this;return Object(re["a"])(regeneratorRuntime.mark((function n(){var o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,$e.put("/users/"+r.state.user.userID,t);case 3:return n.next=5,$e.get("/"+r.state.user.userID);case 5:a=n.sent,s=a.data,console.log("dataValues: ",s),o("SET_USER_DATA",s);case 9:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user},getUserID:function(e){return e.user.userID}},plugins:[_t.plugin]});Object(n["c"])(D).use(Nt).use(Dt).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cf05:function(e,t,r){e.exports=r.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.dd83aec8.js.map