(function(e){function t(t){for(var r,s,u=t[0],c=t[1],l=t[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);i&&i(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("53ca"),o=n("cf05"),s=n.n(o),u={id:"app"},c=Object(r["d"])("img",{alt:"Profrec Logo",src:s.a,width:"100",height:"100"},null,-1),l=Object(r["e"])("Home"),i=Object(r["e"])(" | "),d=Object(r["e"])("Login"),b=Object(r["e"])("Logout");function p(e,t,n,o,s,p){var f=Object(r["s"])("router-link"),m=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["c"])("div",u,[Object(r["d"])("nav",null,[c,Object(r["f"])(f,{to:{name:"Home"}},{default:Object(r["z"])((function(){return[l]})),_:1}),i,Object(r["A"])(Object(r["f"])(f,{to:{name:"Login"}},{default:Object(r["z"])((function(){return[d]})),_:1},512),[[r["x"],void 0===Object(a["a"])(p.user)]]),Object(r["A"])(Object(r["f"])(f,{to:{name:"UserLogout"}},{default:Object(r["z"])((function(){return[b]})),_:1},512),[[r["x"],void 0!==Object(a["a"])(p.user)]]),Object(r["f"])(m)])])}var f={name:"App",computed:{user:{get:function(){return this.$store.state.userdata}}}},m=n("6b0d"),O=n.n(m);const j=O()(f,[["render",p]]);var g=j,h=n("6c02"),v={id:"home"},w=Object(r["d"])("h1",null,"Profrec",-1),y=Object(r["d"])("p",null,"A platform for recreational sports like no other",-1),x=[w,y];function E(e,t,n,a,o,s){return Object(r["o"])(),Object(r["c"])("div",v,x)}var M={name:"Home"};const A=O()(M,[["render",E]]);var U=A,P={id:"home"},k=Object(r["d"])("h1",null,"Profrec: Login",-1),L=Object(r["d"])("br",null,null,-1),R=Object(r["d"])("label",{for:"username"},"Username: ",-1),_=Object(r["d"])("br",null,null,-1),S=Object(r["d"])("label",{for:"password"},"Password: ",-1),C=Object(r["d"])("br",null,null,-1),$=Object(r["d"])("button",{type:"submit"},"Login",-1),z=Object(r["d"])("p",null,"New to this site?",-1),T=Object(r["d"])("br",null,null,-1),V=Object(r["e"])("Register");function H(e,t,n,a,o,s){var u=Object(r["s"])("router-link");return Object(r["o"])(),Object(r["c"])("div",P,[k,Object(r["d"])("form",{onSubmit:t[2]||(t[2]=Object(r["B"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(r["A"])(Object(r["d"])("p",{style:{color:"red"}},Object(r["u"])(o.loginErrorMessage),513),[[r["x"],null!=o.loginErrorMessage]]),L,R,Object(r["A"])(Object(r["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.username=e})},null,512),[[r["w"],o.username]]),_,S,Object(r["A"])(Object(r["d"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[r["w"],o.password]]),C,$],32),z,T,Object(r["f"])(u,{to:{name:"Register"}},{default:Object(r["z"])((function(){return[V]})),_:1})])}var D=n("1da1"),G=(n("96cf"),n("d4ec")),I=n("bee2"),N=n("bc3a"),Z=n.n(N),B=Z.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json"}}),J=function(){function e(){Object(G["a"])(this,e)}return Object(I["a"])(e,[{key:"getAll",value:function(){return B.get("/users")}},{key:"get",value:function(e){return B.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return B.get("/login")}},{key:"authenticateLogin",value:function(e){return B.post("/login",e)}},{key:"create",value:function(e){return B.post("/users",e)}},{key:"update",value:function(e,t){return B.put("/users/".concat(e),t)}},{key:"delete",value:function(e){return B.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return B.get("/users?username=".concat(e))}}]),e}(),W=new J,Y=n("1c46"),q={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.authenticateLogin({username:e.username,password:e.password});case 2:if(n=t.sent,n){t.next=7;break}e.loginErrorMessage="Username or Password is incorrect",t.next=15;break;case 7:if(e.loginErrorMessage=null,0!==n.data){t.next=13;break}return t.next=11,e.$router.push("/suspended");case 11:t.next=15;break;case 13:r={username:e.username,password:Y.createHash("md5").update(e.password).digest("hex"),accountType:n.data},e.$store.dispatch("pushUserdata",r).then((function(){e.$router.push("/user/dashboard")}));case 15:case"end":return t.stop()}}),t)})))()}}};const F=O()(q,[["render",H]]);var K=F,Q={id:"home"},X=Object(r["d"])("h1",null,"Profrec: Create an Account",-1),ee=Object(r["d"])("label",{for:"username"},"Username: ",-1),te=Object(r["d"])("br",null,null,-1),ne=Object(r["d"])("br",null,null,-1),re=Object(r["d"])("label",{for:"email"},"Email Address: ",-1),ae=Object(r["d"])("br",null,null,-1),oe=Object(r["d"])("br",null,null,-1),se=Object(r["d"])("label",{for:"password"},"Password: ",-1),ue=Object(r["d"])("br",null,null,-1),ce={style:{color:"red"}},le=Object(r["d"])("br",null,null,-1),ie=Object(r["d"])("label",{for:"passwordconf"},"Confirm Password: ",-1),de=Object(r["d"])("br",null,null,-1),be={style:{color:"red"}},pe=Object(r["d"])("br",null,null,-1),fe=Object(r["d"])("button",{type:"submit"},"Register",-1);function me(e,t,n,a,o,s){return Object(r["o"])(),Object(r["c"])("div",Q,[X,Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["B"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[ee,Object(r["A"])(Object(r["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.username=e})},null,512),[[r["w"],o.username]]),te,Object(r["A"])(Object(r["d"])("p",{style:{color:"red"}},Object(r["u"])(o.usernameErrorMessage),513),[[r["x"],null!=o.usernameErrorMessage]]),ne,re,Object(r["A"])(Object(r["d"])("input",{type:"textbox",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e})},null,512),[[r["w"],o.email]]),ae,Object(r["A"])(Object(r["d"])("p",{style:{color:"red"}},Object(r["u"])(o.emailErrorMessage),513),[[r["x"],null!=o.emailErrorMessage]]),oe,se,Object(r["A"])(Object(r["d"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e})},null,512),[[r["w"],o.password]]),ue,Object(r["A"])(Object(r["d"])("p",ce,"Invalid Password",512),[[r["x"],null!=o.passwordErrorMessage]]),le,ie,Object(r["A"])(Object(r["d"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.passwordConf=e})},null,512),[[r["w"],o.passwordConf]]),de,Object(r["A"])(Object(r["d"])("p",be,"Passwords Do Not Match",512),[[r["x"],null!=o.passwordConfErrorMessage]]),pe,fe],32)])}n("ac1f"),n("466d");var Oe={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){t.next=9;break}return t.next=7,W.create({username:e.username,email:e.email,password:e.password});case 7:return t.next=9,e.$router.push("/login");case 9:case"end":return t.stop()}}),t)})))()}}};const je=O()(Oe,[["render",me]]);var ge=je,he=Object(r["d"])("h1",null,"User Dashboard",-1),ve=Object(r["e"])("Admin Panel");function we(e,t,n,a,o,s){var u=Object(r["s"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["A"])(Object(r["d"])("div",null," You need to be logged in to be able to visit this page ",512),[[r["x"],null===s.user]]),Object(r["A"])(Object(r["d"])("div",null,[he,Object(r["d"])("p",null,"Welcome "+Object(r["u"])(s.user.username),1),Object(r["A"])(Object(r["d"])("div",null,[Object(r["f"])(u,{to:{name:"AdminPanel"}},{default:Object(r["z"])((function(){return[ve]})),_:1})],512),[[r["x"],5===s.user.accountType]])],512),[[r["x"],null!==s.user]])])}var ye={name:"UserDashboard",computed:{user:{get:function(){return this.$store.state.userdata}}},data:function(){return{events:"Loading events..."}},created:function(){var e=this;Z.a.get("http://localhost:8080/api/user/jwtauth").then((function(t){var n=t.data;e.events=n.events.events}))}};const xe=O()(ye,[["render",we]]);var Ee=xe;function Me(e,t,n,a,o,s){return Object(r["o"])(),Object(r["c"])("div",null," Sorry but your account has been suspended. Contact the site administrator for details. ")}var Ae={name:"Suspended"};const Ue=O()(Ae,[["render",Me]]);var Pe=Ue,ke=Object(r["d"])("h1",null,"Admin Panel",-1),Le=Object(r["d"])("p",null,"You have made it to the admin panel. With great power comes great responsibility.",-1),Re=[ke,Le];function _e(e,t,n,a,o,s){return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["A"])(Object(r["d"])("div",null," Only site admins are allowed to have access to this page ",512),[[r["x"],5!==s.userdata.accountType]]),Object(r["A"])(Object(r["d"])("div",null,Re,512),[[r["x"],5===s.userdata.accountType]])])}var Se={name:"AdminPanel",props:{user:{type:Object,required:!0}},computed:{userdata:{get:function(){return this.$store.state.userdata}}}};const Ce=O()(Se,[["render",_e]]);var $e=Ce;function ze(e,t,n,a,o,s){return Object(r["o"])(),Object(r["c"])("div")}var Te={name:"UserLogout",created:function(){var e=this;this.$store.dispatch("nullUserdata").then((function(){e.$router.push("/login")}))}};const Ve=O()(Te,[["render",ze]]);var He=Ve,De=[{path:"/",name:"Home",component:U},{path:"/login",name:"Login",component:K},{path:"/register",name:"Register",component:ge},{path:"/user/dashboard",name:"User Dashboard",component:Ee},{path:"/suspended",name:"Suspended",component:Pe},{path:"/admin/panel",name:"Admin Panel",component:$e},{path:"/user/logout",name:"UserLogout",component:He}],Ge=Object(h["a"])({history:Object(h["b"])("/"),routes:De}),Ie=Ge,Ne=n("5502"),Ze=Object(Ne["a"])({state:{userdata:{}},mutations:{LOGIN_USER:function(e,t){e.userdata=t},LOGOUT_USER:function(e){e.userdata=null}},actions:{pushUserdata:function(e,t){var n=e.commit;return n("LOGIN_USER",t)},nullUserdata:function(e){var t=e.commit;return t("LOGOUT_USER")}}});Object(r["b"])(g).use(Ze).use(Ie).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cf05:function(e,t,n){e.exports=n.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.a8119801.js.map