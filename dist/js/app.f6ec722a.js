(function(e){function r(r){for(var t,s,u=r[0],l=r[1],c=r[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);i&&i(r);while(b.length)b.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(t=!1)}t&&(a.splice(r--,1),e=s(s.s=n[0]))}return e}var t={},o={app:0},a=[];function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)s.d(n,t,function(r){return e[r]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=r,u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"56d7":function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23"),o=n("cf05"),a=n.n(o),s={id:"app"},u=Object(t["d"])("img",{alt:"Profrec Logo",src:a.a,width:"100",height:"100"},null,-1),l=Object(t["e"])("Home"),c=Object(t["e"])(" | "),i=Object(t["e"])("Login");function d(e,r){var n=Object(t["s"])("router-link"),o=Object(t["s"])("router-view");return Object(t["o"])(),Object(t["c"])("div",s,[Object(t["d"])("nav",null,[u,Object(t["f"])(n,{to:{name:"Home"}},{default:Object(t["z"])((function(){return[l]})),_:1}),c,Object(t["f"])(n,{to:{name:"Login"}},{default:Object(t["z"])((function(){return[i]})),_:1}),Object(t["f"])(o)])])}var b=n("6b0d"),p=n.n(b);const f={},m=p()(f,[["render",d]]);var O=m,j=n("6c02"),g={id:"home"},w=Object(t["d"])("h1",null,"Profrec",-1),h=[w];function v(e,r,n,o,a,s){return Object(t["o"])(),Object(t["c"])("div",g,h)}var y={name:"Home"};const M=p()(y,[["render",v]]);var E=M,x={id:"home"},A=Object(t["d"])("h1",null,"Profrec: Login",-1),P=Object(t["d"])("br",null,null,-1),k=Object(t["d"])("label",{for:"username"},"Username: ",-1),R=Object(t["d"])("br",null,null,-1),U=Object(t["d"])("label",{for:"password"},"Password: ",-1),L=Object(t["d"])("br",null,null,-1),C=Object(t["d"])("button",{type:"submit"},"Login",-1),_=Object(t["d"])("p",null,"New to this site?",-1),z=Object(t["d"])("br",null,null,-1),S=Object(t["e"])("Register");function V(e,r,n,o,a,s){var u=Object(t["s"])("router-link");return Object(t["o"])(),Object(t["c"])("div",x,[A,Object(t["d"])("form",{onSubmit:r[2]||(r[2]=Object(t["B"])((function(){return s.validateLogin&&s.validateLogin.apply(s,arguments)}),["prevent"]))},[Object(t["A"])(Object(t["d"])("p",{style:{color:"red"}},Object(t["u"])(a.loginErrorMessage),513),[[t["x"],null!=a.loginErrorMessage]]),P,k,Object(t["A"])(Object(t["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[t["w"],a.username]]),R,U,Object(t["A"])(Object(t["d"])("input",{type:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.password=e})},null,512),[[t["w"],a.password]]),L,C],32),_,z,Object(t["f"])(u,{to:{name:"Register"}},{default:Object(t["z"])((function(){return[S]})),_:1})])}var H=n("1da1"),Z=(n("96cf"),n("d4ec")),B=n("bee2"),$=n("bc3a"),I=n.n($),J=I.a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json"}}),N=function(){function e(){Object(Z["a"])(this,e)}return Object(B["a"])(e,[{key:"getAll",value:function(){return J.get("/users")}},{key:"get",value:function(e){return J.get("/users/".concat(e))}},{key:"loginRoute",value:function(){return J.get("/login")}},{key:"authenticateLogin",value:function(e){return J.post("/login",e)}},{key:"create",value:function(e){return J.post("/users",e)}},{key:"update",value:function(e,r){return J.put("/users/".concat(e),r)}},{key:"delete",value:function(e){return J.delete("/users/".concat(e))}},{key:"findByUsername",value:function(e){return J.get("/users?username=".concat(e))}}]),e}(),T=new N,D={name:"Login",components:{},data:function(){return{username:null,password:null,loginErrorMessage:null}},methods:{validateLogin:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T.authenticateLogin({username:e.username,password:e.password});case 2:n=r.sent,n.data?e.loginErrorMessage=null:e.loginErrorMessage="Username or Password is incorrect",alert(n.data);case 5:case"end":return r.stop()}}),r)})))()}}};const q=p()(D,[["render",V]]);var F=q,G={id:"home"},K=Object(t["d"])("h1",null,"Profrec: Create an Account",-1),Q=Object(t["d"])("label",{for:"username"},"Username: ",-1),W=Object(t["d"])("br",null,null,-1),X=Object(t["d"])("br",null,null,-1),Y=Object(t["d"])("label",{for:"email"},"Email Address: ",-1),ee=Object(t["d"])("br",null,null,-1),re=Object(t["d"])("br",null,null,-1),ne=Object(t["d"])("label",{for:"password"},"Password: ",-1),te=Object(t["d"])("br",null,null,-1),oe={style:{color:"red"}},ae=Object(t["d"])("br",null,null,-1),se=Object(t["d"])("label",{for:"passwordconf"},"Confirm Password: ",-1),ue=Object(t["d"])("br",null,null,-1),le={style:{color:"red"}},ce=Object(t["d"])("br",null,null,-1),ie=Object(t["d"])("button",{type:"submit"},"Register",-1);function de(e,r,n,o,a,s){return Object(t["o"])(),Object(t["c"])("div",G,[K,Object(t["d"])("form",{onSubmit:r[4]||(r[4]=Object(t["B"])((function(){return s.processRegister&&s.processRegister.apply(s,arguments)}),["prevent"]))},[Q,Object(t["A"])(Object(t["d"])("input",{type:"textbox",id:"username","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.username=e})},null,512),[[t["w"],a.username]]),W,Object(t["A"])(Object(t["d"])("p",{style:{color:"red"}},Object(t["u"])(a.usernameErrorMessage),513),[[t["x"],null!=a.usernameErrorMessage]]),X,Y,Object(t["A"])(Object(t["d"])("input",{type:"textbox",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.email=e})},null,512),[[t["w"],a.email]]),ee,Object(t["A"])(Object(t["d"])("p",{style:{color:"red"}},Object(t["u"])(a.emailErrorMessage),513),[[t["x"],null!=a.emailErrorMessage]]),re,ne,Object(t["A"])(Object(t["d"])("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(e){return a.password=e})},null,512),[[t["w"],a.password]]),te,Object(t["A"])(Object(t["d"])("p",oe,"Invalid Password",512),[[t["x"],null!=a.passwordErrorMessage]]),ae,se,Object(t["A"])(Object(t["d"])("input",{type:"password",id:"passwordconf","onUpdate:modelValue":r[3]||(r[3]=function(e){return a.passwordConf=e})},null,512),[[t["w"],a.passwordConf]]),ue,Object(t["A"])(Object(t["d"])("p",le,"Passwords Do Not Match",512),[[t["x"],null!=a.passwordConfErrorMessage]]),ce,ie],32)])}n("ac1f"),n("466d");var be={name:"Register",data:function(){return{username:null,email:null,password:null,passwordConf:null,usernameErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null,passwordConfErrorMessage:null}},methods:{processRegister:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null==e.username?e.usernameErrorMessage="Username cannot be empty":e.username.length<3||e.username.length>20?e.usernameErrorMessage="Username must be between 3 and 20 characters long":e.username.match("^[A-Za-z0-9_-]*$")?e.usernameErrorMessage=null:e.usernameErrorMessage="Usernames can only contain alphanumeric characters and underscores",e.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")?e.emailErrorMessage=null:e.emailErrorMessage="Invalid Email Address",e.password.length<12?e.passwordErrorMessage="Password must be at least 12 characters long":e.passwordErrorMessage=null,e.password!==e.passwordConf?e.passwordConfErrorMessage="Passwords do not match":e.passwordConfErrorMessage=null,null!=e.usernameErrorMessage||null!=e.emailErrorMessage||null!=e.passwordErrorMessage||null!=e.passwordConfErrorMessage){r.next=9;break}return r.next=7,T.create({username:e.username,email:e.email,password:e.password});case 7:return r.next=9,e.$router.push("/login");case 9:case"end":return r.stop()}}),r)})))()}}};const pe=p()(be,[["render",de]]);var fe=pe,me=[{path:"/",name:"Home",component:E},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:fe}],Oe=Object(j["a"])({history:Object(j["b"])("/"),routes:me}),je=Oe;Object(t["b"])(O).use(je).mount("#app")},cf05:function(e,r,n){e.exports=n.p+"img/logo.bcd2d548.png"}});
//# sourceMappingURL=app.f6ec722a.js.map