(function(e){function r(r){for(var n,s,u=r[0],c=r[1],l=r[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);i&&i(r);while(b.length)b.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={app:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var i=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),o=t("cf05"),a=t.n(o),s={id:"app"},u={key:0},c=Object(n["d"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1),l=Object(n["e"])("Home"),i=Object(n["e"])(" | "),d=Object(n["e"])("Login"),b={key:1},p=Object(n["d"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1),m=Object(n["e"])(" | ");function O(e,r,t,o,a,O){var f=Object(n["s"])("router-link"),j=Object(n["s"])("router-view");return Object(n["o"])(),Object(n["c"])("div",s,[e.loggedIn?(Object(n["o"])(),Object(n["c"])("nav",b,[p,Object(n["d"])("button",{onClick:r[0]||(r[0]=function(){return O.dashboard&&O.dashboard.apply(O,arguments)})},"Dashboard"),m,Object(n["d"])("button",{onClick:r[1]||(r[1]=function(){return O.logout&&O.logout.apply(O,arguments)})},"Logout")])):(Object(n["o"])(),Object(n["c"])("nav",u,[c,Object(n["f"])(f,{to:{name:"Home"}},{default:Object(n["z"])((function(){return[l]})),_:1}),i,Object(n["f"])(f,{to:{name:"Login"}},{default:Object(n["z"])((function(){return[d]})),_:1})])),Object(n["f"])(j)])}var f=t("1da1"),j=t("5530"),g=(t("96cf"),t("5502")),h=Object(j["a"])({},Object(g["b"])(["loggedIn"])),w={name:"App",computed:Object(j["a"])({},h),methods:{dashboard:function(){this.$router.push("/user/dashboard")},logout:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.$store.dispatch("logout"),r.next=3,e.$router.push("/login");case 3:case"end":return r.stop()}}),r)})))()}}},v=t("6b0d"),y=t.n(v);const E=y()(w,[["render",O]]);var A=E,x=(t("d3b7"),t("6c02")),M={id:"home"},k=Object(n["d"])("h1",null,"Profrec",-1),P=Object(n["d"])("p",null,"A platform for recreational sports like no other",-1),R=[k,P];function U(e,r,t,o,a,s){return Object(n["o"])(),Object(n["c"])("div",M,R)}var S={name:"Home",computed:Object(j["a"])({},h)};const _=y()(S,[["render",U]]);var L=_,C={id:"home"},T=Object(n["d"])("h1",null,"Profrec: Login",-1),I=Object(n["d"])("br",null,null,-1),$=Object(n["d"])("label",{for:"username"},"Username: ",-1),z=Object(n["d"])("br",null,null,-1),D=Object(n["d"])("label",{for:"password"},"Password: ",-1),V=Object(n["d"])("br",null,null,-1),N=Object(n["d"])("button",{type:"submit"},"Login",-1),B=Object(n["d"])("p",null,"New to this site?",-1),H=Object(n["d"])("br",null,null,-1),Z=Object(n["e"])("Register");function q(e,r,t,o,a,s){var u=Object(n["s"])("router-link");return Object(n["o"])(),Object(n["c"])("div",C,[T,Object(n["d"])("form",{onSubmit:r[2]||(r[2]=Object(n["B"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.loginErrorMessage),513),[[n["x"],null!=a.loginErrorMessage]]),I,$,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["w"],a.username]]),z,D,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.password=e})},null,512),[[n["w"],a.password]]),V,N],32),B,H,Object(n["f"])(u,{to:{name:"Register"}},{default:Object(n["z"])((function(){return[Z]})),_:1})])}var J={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("login",{username:e.username,password:e.password});case 2:if(t=r.sent,t.successful){r.next=7;break}e.loginErrorMessage=t.message,r.next=11;break;case 7:return e.loginErrorMessage=null,localStorage.setItem("token",t.token),r.next=11,e.$router.push("/user/dashboard");case 11:case"end":return r.stop()}}),r)})))()}}};const W=y()(J,[["render",q]]);var F=W,G={id:"home"},Y=Object(n["d"])("h1",null,"Profrec: Create an Account",-1),K=Object(n["d"])("label",{for:"username"},"Username: ",-1),Q=Object(n["d"])("br",null,null,-1),X=Object(n["d"])("br",null,null,-1),ee=Object(n["d"])("label",{for:"email"},"Email Address: ",-1),re=Object(n["d"])("br",null,null,-1),te=Object(n["d"])("br",null,null,-1),ne=Object(n["d"])("label",{for:"password"},"Password: ",-1),oe=Object(n["d"])("br",null,null,-1),ae={style:{color:"red"}},se=Object(n["d"])("br",null,null,-1),ue=Object(n["d"])("label",{for:"passwordconf"},"Confirm Password: ",-1),ce=Object(n["d"])("br",null,null,-1),le={style:{color:"red"}},ie=Object(n["d"])("br",null,null,-1),de=Object(n["d"])("button",{type:"submit"},"Register",-1);function be(e,r,t,o,a,s){return Object(n["o"])(),Object(n["c"])("div",G,[Y,Object(n["d"])("form",{onSubmit:r[4]||(r[4]=Object(n["B"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[K,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[n["w"],a.username]]),Q,Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.usernameErrorMessage),513),[[n["x"],null!=a.usernameErrorMessage]]),X,ee,Object(n["A"])(Object(n["d"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.email=e})},null,512),[[n["w"],a.email]]),re,Object(n["A"])(Object(n["d"])("p",{style:{color:"red"}},Object(n["u"])(a.emailErrorMessage),513),[[n["x"],null!=a.emailErrorMessage]]),te,ne,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return a.password=e})},null,512),[[n["w"],a.password]]),oe,Object(n["A"])(Object(n["d"])("p",ae,"Invalid Password",512),[[n["x"],null!=a.passwordErrorMessage]]),se,ue,Object(n["A"])(Object(n["d"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return a.passwordConf=e})},null,512),[[n["w"],a.passwordConf]]),ce,Object(n["A"])(Object(n["d"])("p",le,"Passwords Do Not Match",512),[[n["x"],null!=a.passwordConfErrorMessage]]),ie,de],32)])}t("ac1f"),t("466d");var pe={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=8;break}return e.$store.dispatch("register",{username:e.username,email:e.email,password:e.password}),r.next=8,e.$router.push("/user/dashboard");case 8:case"end":return r.stop()}}),r)})))()}}};const me=y()(pe,[["render",be]]);var Oe=me;function fe(e,r,t,o,a,s){return Object(n["o"])(),Object(n["c"])("div",null," Welcome "+Object(n["u"])(e.getUsername),1)}var je={name:"Dashboard",computed:Object(j["a"])(Object(j["a"])({},h),Object(g["b"])(["getUsername"]))};const ge=y()(je,[["render",fe]]);var he=ge,we=Object(n["d"])("h1",null,"Admin Panel",-1),ve=Object(n["d"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),ye=[we,ve];function Ee(e,r,t,o,a,s){return Object(n["o"])(),Object(n["c"])("div",null,[Object(n["A"])(Object(n["d"])("div",null," Only site admins are allowed to have access to this page ",512),[[n["x"],5!==s.userdata.accountType]]),Object(n["A"])(Object(n["d"])("div",null,ye,512),[[n["x"],5===s.userdata.accountType]])])}var Ae={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const xe=y()(Ae,[["render",Ee]]);var Me=xe,ke=Object(n["d"])("h2",null,"Whoops this page doesn't exist",-1),Pe=[ke];function Re(e,r,t,o,a,s){return Object(n["o"])(),Object(n["c"])("div",null,Pe)}var Ue={name:"NotFound"};const Se=y()(Ue,[["render",Re]]);var _e=Se,Le=[{path:"/",name:"Home",component:L},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:Oe},{path:"/user/dashboard",name:"User Dashboard",component:he,meta:{requiresAuth:!0}},{path:"/admin/panel",name:"Admin Panel",component:Me},{path:"/:catchAll(.*)",name:"NotFound",component:_e}],Ce=Object(x["a"])({history:Object(x["b"])("/"),routes:Le});Ce.beforeEach((function(e,r,t){var n=localStorage.getItem("user");e.matched.some((function(e){return e.meta.requiresAuth}))&&!n&&t("/"),t()}));var Te=Ce,Ie=(t("e9c4"),t("bc3a")),$e=t.n(Ie),ze=$e.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),De=new g["a"]({state:{user:null},mutations:{SET_USER_DATA:function(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r)),$e.a.defaults.headers.common["Authorization"]="Bearer ".concat(r.token)},LOGOUT:function(){localStorage.removeItem("user"),location.reload()}},actions:{register:function(e,r){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.abrupt("return",ze.post("users",r).then((function(e){var r=e.data;n("SET_USER_DATA",r)})));case 2:case"end":return t.stop()}}),t)})))()},login:function(e,r){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ze.post("login",r);case 3:return o=t.sent,a=o.data,n("SET_USER_DATA",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){var r=e.commit;r("LOGOUT")}},getters:{loggedIn:function(e){return!!e.user},getUsername:function(e){return e.user.username}}});Object(n["b"])(A).use(De).use(Te).mount("#app")},cf05:function(e,r,t){e.exports=t.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.1b1682ec.js.map