(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(11),o=n.n(c),l=(n(17),n(7)),r=n(1),u=n(4),s=n(3),d=(n(18),function(e){var t=Object(i.useState)(e.title),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(i.useState)(!1),r=Object(s.a)(l,2),u=r[0],d=r[1],b=function(){d(!u),""!==c&&e.callBack(c)};return u?a.a.createElement("input",{autoFocus:!0,onBlur:b,value:c,onChange:function(e){o(e.currentTarget.value),console.log()}}):a.a.createElement("span",{onDoubleClick:b},e.title)}),b=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(i.useState)(null),r=Object(s.a)(l,2),u=r[0],d=r[1],b=function(){var t=c.trim();""!==c.trim()?(e.callBack(t),o("")):d("Title is required")};return a.a.createElement("div",null,a.a.createElement("input",{value:c,onChange:function(e){o(e.currentTarget.value),console.log()},onKeyPress:function(e){d(null),13===e.charCode&&b()},className:u?"error":""}),a.a.createElement("button",{onClick:b},"+"),u&&a.a.createElement("div",{className:"error-message"},u))};function f(e){return a.a.createElement("div",null,a.a.createElement("h3",null,a.a.createElement(d,{title:e.title,callBack:function(t){e.editTodoList(e.id,t)}}),a.a.createElement("button",{onClick:function(){e.removeTodoList(e.todoListID)}},"X")),a.a.createElement(b,{callBack:function(t){e.addTask(t,e.id)}}),a.a.createElement("ul",null,e.tasks.map((function(t){return a.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},a.a.createElement("input",{type:"checkbox",onChange:function(n){e.changeTaskStatus(e.todoListID,t.id,n.currentTarget.checked)},checked:t.isDone}),a.a.createElement(d,{title:t.title,callBack:function(n){return function(t,n){e.editTask(e.id,t,n)}(t.id,n)}}),a.a.createElement("button",{onClick:function(){return e.removeTask(e.todoListID,t.id)}},"x"))}))),a.a.createElement("div",null,a.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListID,"all")}},"All"),a.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListID,"active")}},"Active"),a.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){return e.changeFilter(e.todoListID,"completed")}},"Completed")))}var m=n(2);var j=function(){var e,t=Object(m.v1)(),n=Object(m.v1)(),c=Object(i.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),o=Object(s.a)(c,2),d=o[0],j=o[1],v=Object(i.useState)((e={},Object(u.a)(e,t,[{id:Object(m.v1)(),title:"HTML&CSS",isDone:!0},{id:Object(m.v1)(),title:"JS",isDone:!0},{id:Object(m.v1)(),title:"ReactJS",isDone:!1},{id:Object(m.v1)(),title:"Rest API",isDone:!1},{id:Object(m.v1)(),title:"GraphQL",isDone:!1}]),Object(u.a)(e,n,[{id:Object(m.v1)(),title:"HTML&CSS2",isDone:!0},{id:Object(m.v1)(),title:"JS2",isDone:!0},{id:Object(m.v1)(),title:"ReactJS2",isDone:!1},{id:Object(m.v1)(),title:"Rest API2",isDone:!1},{id:Object(m.v1)(),title:"GraphQL2",isDone:!1}]),e)),O=Object(s.a)(v,2),k=O[0],h=O[1],E=function(e,t){j(d.map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),{},{title:t}):n})))},p=function(e,t,n){console.log(Object(r.a)(Object(r.a)({},k),{},Object(u.a)({},e,k[e].map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{title:n}):e})))))},D=function(e){j(d.filter((function(t){return t.id===e}))),delete k[e],console.log(k)};function g(e,t){h(Object(r.a)(Object(r.a)({},k),{},Object(u.a)({},e,k[e].filter((function(e){return e.id!==t})))))}function T(e,t){var n={id:Object(m.v1)(),title:e,isDone:!1},i=k[t];k[t]=[n].concat(Object(l.a)(i))}function S(e,t,n){h(Object(r.a)(Object(r.a)({},k),{},Object(u.a)({},e,k[e].map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{isDone:n}):e})))))}function L(e,t){}return a.a.createElement("div",{className:"App"},a.a.createElement(b,{callBack:function(e){var t=Object(m.v1)();j([{id:t,title:e,filter:"all"}].concat(Object(l.a)(d))),h(Object(r.a)(Object(r.a)({},k),{},Object(u.a)({},t,[])))}}),d.map((function(e,t){var n=k[e.id];return"active"===e.filter&&(n=k[e.id].filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(n=k[e.id].filter((function(e){return!0===e.isDone}))),a.a.createElement(f,{key:e.id,id:e.id,todoListID:e.id,title:e.title,tasks:n,removeTask:g,changeFilter:L,addTask:T,changeTaskStatus:S,filter:e.filter,removeTodoList:D,editTask:p,editTodoList:E})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.efc0b9af.chunk.js.map