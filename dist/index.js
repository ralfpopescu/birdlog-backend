!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=11)}([function(e,n){e.exports=require("fs")},function(e,n,r){"use strict";r.d(n,"b",function(){return t}),r.d(n,"a",function(){return o});var t={name:"insert_journal_entry",text:"INSERT INTO journal_entries (month, day, year, entry) VALUES ($1, $2, $3, $4);",values:[1,2,3,"hello"]},o={name:"get_journal_entry",text:"SELECT * FROM journal_entries"}},function(e,n,r){"use strict";var t=r(7),o={Query:{entry:function(e,n,r,t){return n.id}}},u=r.n(t)()(o);n.a=u},function(e,n){e.exports=require("path")},function(e,n,r){"use strict";r.d(n,"a",function(){return c});var t=r(0),o=r.n(t),u=r(3),i=r.n(u),c=function(e){return function(e){return o.a.readdirSync(e).map(function(n){return i.a.join(e,n)})}(e).map(function(e){return o.a.readFileSync(e,{encoding:"utf-8"})}).reduce(function(e,n){return e+"\n"+n})}},function(e,n){e.exports=require("express-graphql")},function(e,n){e.exports=require("graphql-tools")},function(e,n){e.exports=require("lodash.merge")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("graphql")},function(e,n){e.exports=require("pg")},function(e,n,r){"use strict";r.r(n),function(e){var n=r(8),t=r.n(n),o=r(1),u=r(2),i=r(6),c=r(5),a=r.n(c),s=r(4),l=r(10),f=(r(9),t()()),p=Object(s.a)(path.resolve(e,"schema")),d=Object(i.makeExecutableSchema)({typeDefs:p,resolvers:u.a}),y=new l.Client("postgres://ralfpopescu:@localhost:5432/birdlog");y.connect(),f.get("/",function(e,n){y.query(o.b,[1,2,3,"hello"],function(e,r){e?console.log(e.stack):(n.send(r.rows[0]),console.log(r.rows[0]))})}),f.get("/q",function(e,n){y.query(o.a,function(e,r){e?n.send(e.stack):n.send(r.rows[0])})}),f.use("/graphql",a()({schema:d,graphiql:!0})),f.listen(3e3),console.log("Serving at http://localhost:3000")}.call(this,"/")}]);