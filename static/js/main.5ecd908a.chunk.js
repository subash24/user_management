(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){},79:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(20),r=a.n(c),l=a(3),i=a(55),o=a(19),j=a.n(o),d=a(25),u=a(11),b=(a(61),a(17)),m=a(8),h=a(27),x=a(28),O=a(22),f=a(21),p=(a(32),a(48)),g=a(2),v=new(a(63)),N=function(e){var t,a="rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")",s=v.contrastColor({bgColor:a});console.log(a),console.log(s);var n={background:a,color:s};return t=void 0!==e.firstname?e.firstname.charAt(0).toUpperCase():"",Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("i",{className:"logo",style:n,children:t}),Object(g.jsxs)("div",{className:"item",children:[Object(g.jsxs)("h4",{children:[e.firstname," ",Object(g.jsx)("span",{children:e.lastname})]}),Object(g.jsx)("span",{style:{color:"#999999"},children:e.email})]}),Object(g.jsx)("span",{className:"delete",style:n,onClick:function(){e.handleclick(e.email)},children:Object(g.jsx)(p.a,{})})]})},y=function(e){var t=e.users,a=e.deleteUser,n=e.usercount,c=Object(s.useState)(!1),r=Object(u.a)(c,2),l=r[0],i=r[1];return t=t.filter((function(e){return""!==e.fist_name})),Object(s.useEffect)((function(){i(0===n)}),[n]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(f.a,{variant:"primary",className:l?"cus-show":"cus-hide",onClose:function(){i(!1)},dismissible:!0,children:["Currently There are No users"," ",Object(g.jsx)(f.a.Link,{children:Object(g.jsx)(b.b,{style:{color:"inherit"},to:"/adduser/",children:"Click to Add New User"})})]}),Object(g.jsx)(h.a,{children:Object(g.jsx)("div",{id:"page-content-wrapper",children:Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsx)(x.a,{xs:3,children:t.map((function(e){return Object(g.jsx)(O.a,{children:Object(g.jsx)(N,{email:e.email,firstname:e.fist_name,lastname:e.last_name,handleclick:a},e.email)},e.email)}))})})})})]})},w=a(52),C=a(54),U=a(53),k=(a(79),function(e){return Object(g.jsxs)("header",{children:[Object(g.jsx)("div",{id:"sidebar-wrapper",children:Object(g.jsxs)("ul",{className:"sidebar-nav",children:[Object(g.jsx)("li",{className:"sidebar-brand",children:"Navigation"}),Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/",exact:!0,activeClassName:"is-active",style:{textDecoration:"none"},children:Object(g.jsxs)("span",{className:"link",children:[Object(g.jsx)(w.a,{style:{fontSize:"22px",margin:"5px"}}),"Existing User"]})})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/adduser/",activeClassName:"is-active",style:{textDecoration:"none"},children:Object(g.jsxs)("span",{className:"link",children:[Object(g.jsx)(U.a,{style:{fontSize:"22px",margin:"5px"}}),"Create User"]})})})]})}),Object(g.jsx)("nav",{className:"nav d-flex align-items-center",children:Object(g.jsxs)("div",{className:"brand",children:[Object(g.jsx)(C.a,{className:"burger",style:{fontSize:"28px",margin:"10px"},onClick:e.toggleClass}),"User Management System"]})})]})}),S=a(16),_=function(e){var t=e.handleClick,a=Object(s.useState)({firstname:"",lastname:"",username:"",email:"",password:""}),n=Object(u.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)(!1),o=Object(u.a)(i,2),j=o[0],d=o[1],m=Object(s.useState)(!1),p=Object(u.a)(m,2),v=p[0],N=p[1];return Object(g.jsxs)("div",{className:"User-panel",children:[Object(g.jsxs)(f.a,{variant:"success",className:"text-center ".concat(j?"cus-show":"cus-hide"),dismissible:!0,onClose:function(){d(!1)},children:["User successfully Added"," ",Object(g.jsx)(f.a.Link,{children:Object(g.jsx)(b.b,{to:"/",style:{color:"inherit"},children:"View All Users"})})]}),Object(g.jsxs)(f.a,{variant:"danger",className:"text-center ".concat(v?"cus-show":"cus-hide"),dismissible:!0,onClose:function(){N(!1)},children:["The Username or Email You entered already exists"," ",Object(g.jsx)(f.a.Link,{children:Object(g.jsx)(b.b,{to:"/",style:{color:"inherit"},children:"View Existing Users"})})]}),Object(g.jsx)(h.a,{children:Object(g.jsxs)("div",{className:"form-cus",children:[Object(g.jsx)("h1",{className:"text-center mb-3 pt-2",children:"USER FORM"}),Object(g.jsx)("div",{className:"user-form",children:Object(g.jsxs)(S.a,{className:"container",onSubmit:function(e){e.preventDefault();var a=t(c);console.log(a),a.then((function(e){e?(r({firstname:"",lastname:"",username:"",email:"",password:""}),d(!0),console.log("success")):(N(!0),console.log("failure"))}))},style:{maxWidth:"440px",padding:"40px 0"},autoComplete:"off",children:[Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(S.a.FloatingLabel,{controlId:"First Name",label:"First Name",className:"mb-3",children:Object(g.jsx)(S.a.Control,{type:"text",placeholder:"eg:Sam,sara",value:c.firstname,onChange:function(e){r(Object(l.a)(Object(l.a)({},c),{},{firstname:e.target.value}))},required:!0})})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(S.a.FloatingLabel,{controlId:"Last Name",label:"Last Name",className:"mb-3",children:Object(g.jsx)(S.a.Control,{type:"text",placeholder:"eg:S,Smith",value:c.lastname,onChange:function(e){r(Object(l.a)(Object(l.a)({},c),{},{lastname:e.target.value}))},required:!0})})})]}),Object(g.jsx)(S.a.FloatingLabel,{controlId:"Username",label:"Username",className:"mb-3",children:Object(g.jsx)(S.a.Control,{type:"text",placeholder:"Username",value:c.username,onChange:function(e){r(Object(l.a)(Object(l.a)({},c),{},{username:e.target.value}))},required:!0})}),Object(g.jsx)(S.a.FloatingLabel,{controlId:"Email",label:"Email address",className:"mb-3",children:Object(g.jsx)(S.a.Control,{type:"email",placeholder:"name@example.com",value:c.email,onChange:function(e){r(Object(l.a)(Object(l.a)({},c),{},{email:e.target.value}))},required:!0})}),Object(g.jsx)(S.a.FloatingLabel,{controlId:"Password",label:"Password",className:"mb-3",children:Object(g.jsx)(S.a.Control,{type:"password",placeholder:"Password",value:c.password,onChange:function(e){r(Object(l.a)(Object(l.a)({},c),{},{password:e.target.value}))},required:!0})}),Object(g.jsx)("div",{className:"mt-3 d-flex justify-content-center",children:Object(g.jsx)("button",{className:"btn btn-primary px-3 py-2",children:"Add User"})})]})})]})})]})},L={fetchUsers:"//3.6.93.159:7883/machstatz/get_all_users",addUser:"//3.6.93.159:7883/machstatz/add_new_user",deleteUser:"//3.6.93.159:7883/machstatz/delete_existing_user"},E=a(29),F=a.n(E),M=(a(98),function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),r=Object(u.a)(c,2),o=r[0],h=r[1],x=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(L.fetchUsers);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(e){var t=e.email,s=e.usename;return a.filter((function(e){return e.email===t||e.username===s})).length>0?"exists":"200"},f=function(){var e=Object(d.a)(j.a.mark((function e(t){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),"200"!==O(t)){e.next=13;break}return s={email:t.email,fist_name:t.firstname,last_name:t.lastname,pwd:t.password,username:t.username},console.log("adding user"),e.next=7,F.a.post(L.addUser,s);case 7:return c=e.sent,n([].concat(Object(i.a)(a),[s])),console.log(c),e.abrupt("return",!0);case 13:return console.log("already exists"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(j.a.mark((function e(t){var s,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleted successfully"),s=a.filter((function(e){return e.email!==t})),console.log(s),n(s),c={email:t},e.next=7,F.a.delete(L.deleteUser+"?email=".concat(t),c);case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{id:"wrapper",className:o?"toggled":"",children:Object(g.jsxs)(b.a,{basename:"/user_management",children:[Object(g.jsx)(k,{toggleClass:function(){h(!o),console.log(o)}}),Object(g.jsxs)(m.c,{children:[Object(g.jsx)(m.a,{path:"/adduser/",render:function(e){return Object(g.jsx)(_,Object(l.a)(Object(l.a)({},e),{},{handleClick:f}))}}),Object(g.jsx)(m.a,{path:"/",exact:!0,render:function(e){return Object(g.jsx)(y,{users:a,deleteUser:p,usercount:a.length})}})]})]})})});r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.5ecd908a.chunk.js.map