(function(e){function t(t){for(var r,u,c=t[0],s=t[1],l=t[2],b=0,p=[];b<c.length;b++)u=c[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var i=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),a=n.n(o),u={id:"app"},c=Object(r["f"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1);function s(e,t,n,o,a,s){var l=Object(r["v"])("NavbarGuest"),i=Object(r["v"])("NavbarAdmin"),b=Object(r["v"])("NavbarUser"),p=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["e"])("div",u,[c,e.loggedIn?e.loggedIn&&5===e.getAccountType?(Object(r["q"])(),Object(r["d"])(i,{key:1})):(Object(r["q"])(),Object(r["d"])(b,{key:2})):(Object(r["q"])(),Object(r["d"])(l,{key:0})),Object(r["h"])(p)])}var l=n("5530"),i=Object(r["g"])("Home"),b=Object(r["g"])(" | "),p=Object(r["g"])("Login");function d(e,t,n,o,a,u){var c=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",null,[Object(r["h"])(c,{to:{name:"Home"}},{default:Object(r["C"])((function(){return[i]})),_:1}),b,Object(r["h"])(c,{to:{name:"Login"}},{default:Object(r["C"])((function(){return[p]})),_:1})])}var f={name:"NavbarGuest"},m=n("6b0d"),O=n.n(m);const g=O()(f,[["render",d]]);var j=g,h=Object(r["g"])(" | "),v=Object(r["g"])(" | ");function y(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("nav",null,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return u.dashboard&&u.dashboard.apply(u,arguments)})},"Dashboard"),h,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return u.logout&&u.logout.apply(u,arguments)})},"Logout"),v,Object(r["f"])("button",{onClick:t[2]||(t[2]=function(){return u.admin&&u.admin.apply(u,arguments)})},"Admin Console")])}var w={name:"NavbarAdmin",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},admin:function(){this.$router.push("/admin/console")}}};const A=O()(w,[["render",y]]);var T=A,E=Object(r["g"])(" | ");function k(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("nav",null,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return u.dashboard&&u.dashboard.apply(u,arguments)})},"Dashboard"),E,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return u.logout&&u.logout.apply(u,arguments)})},"Logout")])}var M={name:"NavbarUser",methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}};const x=O()(M,[["render",k]]);var U=x,C=n("5502"),D=Object(l["a"])({},Object(C["b"])(["loggedIn"])),R={name:"App",components:{NavbarGuest:j,NavbarUser:U,NavbarAdmin:T},computed:Object(l["a"])(Object(l["a"])({},D),Object(C["b"])(["getAccountType","getUser"]))};const q=O()(R,[["render",s]]);var S=q,I=(n("d3b7"),n("6c02")),P={id:"home"},L=Object(r["f"])("h1",null,"Profrec",-1),N=Object(r["f"])("p",null,"A platform for recreational sports like no other",-1),_=[L,N];function z(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("div",P,_)}var $={name:"Home",computed:Object(l["a"])({},D)};const V=O()($,[["render",z]]);var G=V,H={id:"home"},Z=Object(r["f"])("h1",null,"Profrec: Login",-1),B=Object(r["f"])("br",null,null,-1),J=Object(r["f"])("label",{for:"username"},"Username: ",-1),F=Object(r["f"])("br",null,null,-1),W=Object(r["f"])("label",{for:"password"},"Password: ",-1),K=Object(r["f"])("br",null,null,-1),Q=Object(r["f"])("button",{type:"submit"},"Login",-1),X=Object(r["f"])("p",null,"New to this site?",-1),Y=Object(r["f"])("br",null,null,-1),ee=Object(r["g"])("Register");function te(e,t,n,o,a,u){var c=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["e"])("div",H,[Z,Object(r["f"])("form",{onSubmit:t[2]||(t[2]=Object(r["E"])((function(){return u.validateLogin&&u.validateLogin.apply(u,arguments)}),["prevent"]))},[Object(r["D"])(Object(r["f"])("p",{style:{color:"red"}},Object(r["x"])(a.loginErrorMessage),513),[[r["A"],null!=a.loginErrorMessage]]),B,J,Object(r["D"])(Object(r["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[r["z"],a.username]]),F,W,Object(r["D"])(Object(r["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[r["z"],a.password]]),K,Q],32),X,Y,Object(r["h"])(c,{to:{name:"Register"}},{default:Object(r["C"])((function(){return[ee]})),_:1})])}var ne=n("1da1"),re=(n("96cf"),{name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(ne["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(n=t.sent,n.successful){t.next=7;break}e.loginErrorMessage=n.message,t.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",n.token),t.next=11,e.$router.push("/user/dashboard");case 11:case"end":return t.stop()}}),t)})))()}}});const oe=O()(re,[["render",te]]);var ae=oe,ue={id:"home"},ce=Object(r["f"])("h1",null,"Profrec: Create an Account",-1),se=Object(r["f"])("label",{for:"username"},"Username: ",-1),le=Object(r["f"])("br",null,null,-1),ie=Object(r["f"])("br",null,null,-1),be=Object(r["f"])("label",{for:"email"},"Email Address: ",-1),pe=Object(r["f"])("br",null,null,-1),de=Object(r["f"])("br",null,null,-1),fe=Object(r["f"])("label",{for:"password"},"Password: ",-1),me=Object(r["f"])("br",null,null,-1),Oe={style:{color:"red"}},ge=Object(r["f"])("br",null,null,-1),je=Object(r["f"])("label",{for:"passwordconf"},"Confirm Password: ",-1),he=Object(r["f"])("br",null,null,-1),ve={style:{color:"red"}},ye=Object(r["f"])("br",null,null,-1),we=Object(r["f"])("button",{type:"submit"},"Register",-1);function Ae(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("div",ue,[ce,Object(r["f"])("form",{onSubmit:t[4]||(t[4]=Object(r["E"])((function(){return u.processRegister&&u.processRegister.apply(u,arguments)}),["prevent"]))},[se,Object(r["D"])(Object(r["f"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[r["z"],a.username]]),le,Object(r["D"])(Object(r["f"])("p",{style:{color:"red"}},Object(r["x"])(a.usernameErrorMessage),513),[[r["A"],null!=a.usernameErrorMessage]]),ie,be,Object(r["D"])(Object(r["f"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[r["z"],a.email]]),pe,Object(r["D"])(Object(r["f"])("p",{style:{color:"red"}},Object(r["x"])(a.emailErrorMessage),513),[[r["A"],null!=a.emailErrorMessage]]),de,fe,Object(r["D"])(Object(r["f"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[r["z"],a.password]]),me,Object(r["D"])(Object(r["f"])("p",Oe,"Invalid Password",512),[[r["A"],null!=a.passwordErrorMessage]]),ge,je,Object(r["D"])(Object(r["f"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.passwordConf=e})},null,512),[[r["z"],a.passwordConf]]),he,Object(r["D"])(Object(r["f"])("p",ve,"Passwords Do Not Match",512),[[r["A"],null!=a.passwordConfErrorMessage]]),ye,we],32)])}n("ac1f"),n("466d");var Te={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(ne["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),t.next=8,e.$router.push("/user/dashboard");case 8:case"end":return t.stop()}}),t)})))()}}};const Ee=O()(Te,[["render",Ae]]);var ke=Ee;function Me(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("div",null," Welcome "+Object(r["x"])(e.getUsername),1)}var xe={name:"Dashboard",computed:Object(l["a"])(Object(l["a"])({},D),Object(C["b"])(["getUsername","getAccountType"]))};const Ue=O()(xe,[["render",Me]]);var Ce=Ue,De={id:"Console"},Re=Object(r["f"])("h1",null,"Admin Console",-1),qe=Object(r["f"])("tr",null,[Object(r["f"])("th",null,"User Account Management")],-1);function Se(e,t,n,o,a,u){var c=Object(r["v"])("UserRow");return Object(r["q"])(),Object(r["e"])("div",De,[Re,Object(r["f"])("table",null,[Object(r["f"])("tbody",null,[qe,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(a.users,(function(e){return Object(r["q"])(),Object(r["d"])(c,{key:e.ID,username:e.username,"account-type":parseInt(e.accountType)},null,8,["username","account-type"])})),128))])])])}var Ie=n("d4ec"),Pe=n("bee2"),Le=n("bc3a"),Ne=n.n(Le),_e=Ne.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),ze=function(){function e(){Object(Ie["a"])(this,e)}return Object(Pe["a"])(e,[{key:"getAll",value:function(){return _e.get("/getusers")}},{key:"get",value:function(e){return _e.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return _e.get("/login")}},{key:"authenticateLogin",value:function(e){return _e.post("/login",e)}},{key:"create",value:function(e){return _e.post("/users",e)}},{key:"update",value:function(e,t){return _e.put("/users/".concat(e),t)}},{key:"delete",value:function(e){return _e.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return _e.get("/users?username=".concat(e))}}]),e}(),$e=new ze,Ve=Object(r["g"])(" | "),Ge=Object(r["f"])("td",null,[Object(r["f"])("button",null,"Require Password on Next Login")],-1),He=Object(r["g"])(" | "),Ze=Object(r["f"])("br",null,null,-1);function Be(e,t,n,o,a,u){var c=Object(r["v"])("ChangeAccountType");return Object(r["q"])(),Object(r["e"])("span",null,[Object(r["f"])("tr",null,[Object(r["f"])("td",null,Object(r["x"])(n.username),1),Ve,Ge,He,Object(r["f"])("td",null,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return u.changeAccountType&&u.changeAccountType.apply(u,arguments)})},"Change Account Type")])]),Ze,Object(r["D"])(Object(r["h"])(c,{ID:a.changeAccountTypeID},null,8,["ID"]),[[r["A"],a.changeAccountTypeID]])])}n("a9e3");var Je={id:"ChangeAccountType"},Fe=Object(r["f"])("label",{for:"accountType"},"Account Type ",-1),We=["value"],Ke=Object(r["f"])("br",null,null,-1),Qe=Object(r["f"])("button",{type:"submit"},"Submit",-1);function Xe(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("div",Je,[Object(r["f"])("form",{onSubmit:t[1]||(t[1]=Object(r["E"])((function(){return u.changeAccountType&&u.changeAccountType.apply(u,arguments)}),["prevent"]))},[Fe,Object(r["D"])(Object(r["f"])("input",{type:"text",id:"accountType","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.accountType=e}),value:a.accountType},null,8,We),[[r["z"],a.accountType]]),Ke,Qe],32)])}var Ye={name:"ChangeAccountType",props:{ID:{type:Number,required:!0}},data:function(){return{accountType:null}},methods:{changeAccountType:function(){alert("Account type for user: "+this.ID+" is now: "+this.accountType)}}};const et=O()(Ye,[["render",Xe]]);var tt=et,nt={name:"UserRow",components:{ChangeAccountType:tt},props:{username:{type:String,required:!0},accountType:{type:Number,required:!0}},data:function(){return{changeAccountTypeID:!1}},methods:{changeAccountType:function(){this.changeAccountTypeID=!this.changeAccountTypeID}}};const rt=O()(nt,[["render",Be]]);var ot=rt,at={name:"Console.vue",components:{UserRow:ot},data:function(){return{users:null}},created:function(){var e=this;return Object(ne["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$e.getAll();case 2:n=t.sent,r=n.data,e.users=r;case 5:case"end":return t.stop()}}),t)})))()}};const ut=O()(at,[["render",Se]]);var ct=ut,st=Object(r["f"])("h2",null,"Whoops this page doesn't exist",-1),lt=[st];function it(e,t,n,o,a,u){return Object(r["q"])(),Object(r["e"])("div",null,lt)}var bt={name:"NotFound"};const pt=O()(bt,[["render",it]]);var dt=pt,ft=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/register",name:"Register",component:ke},{path:"/user/dashboard",name:"User Dashboard",component:Ce,meta:{requiresAuth:!0}},{path:"/admin/console",name:"Admin Console",component:ct,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:dt}],mt=Object(I["a"])({history:Object(I["b"])("/"),routes:ft});mt.beforeEach((function(e,t,n){var r=localStorage.getItem("user"),o="5"===localStorage.getItem("accountType");e.matched.some((function(e){return e.meta.requiresAuth}))&&!r&&n("/"),e.matched.some((function(e){return e.meta.requiresAdminAuth}))&&!o&&n("/"),n()}));var Ot=mt,gt=(n("e9c4"),n("bfa9")),jt=new gt["a"]({storage:window.localStorage}),ht=new C["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("accountType",t),Ne.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},LOGOUT:function(e){e.user=null,localStorage.removeItem("user")}},actions:{register:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.abrupt("return",_e.post("users",t).then((function(e){var t=e.data;r("SET_USER_DATA",t)})));case 2:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,_e.post("login",t);case 3:return o=n.sent,a=o.data,r("SET_USER_DATA",a),n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username},getAccountType:function(e){return e.user.accountType},getUser:function(e){return e.user}},plugins:[jt.plugin]});Object(r["c"])(S).use(ht).use(Ot).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.030e09d2.js.map