!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=6)}([function(e,n){e.exports=require("path")},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("express-graphql")},function(e,n){e.exports=require("graphql-tools")},function(e,n){e.exports=require("lodash.merge")},function(e,n){e.exports=require("express")},function(e,n,r){"use strict";r.r(n);var t=r(5),o=r.n(t),u={name:"insert_journal_entry",text:"INSERT INTO journal_entries (month, day, year, entry) VALUES ($1, $2, $3, $4);",values:[1,2,3,"hello"]},i={name:"get_journal_entry",text:"SELECT * FROM journal_entries"},c=r(4),l={Query:{journalEntry:function(e,n,r,t){return n.id}}},a=r.n(c)()(l),s=r(3),f=r(2),p=r.n(f),d=r(1),y=r.n(d),g=r(0),x=r.n(g),h=r(8),m=(r(7),o()()),b=function(e){return function(e){return y.a.readdirSync(e).map(function(n){return x.a.join(e,n)})}(e).map(function(e){return y.a.readFileSync(e,{encoding:"utf-8"})}).reduce(function(e,n){return e+"\n"+n})}(x.a.resolve(__dirname,"../src","schema")),q=Object(s.makeExecutableSchema)({typeDefs:b,resolvers:a}),j=new h.Client("postgres://ralfpopescu:@localhost:5432/birdlog");j.connect(),m.get("/",function(e,n){j.query(u,[1,2,3,"hello"],function(e,r){e?console.log(e.stack):(n.send(r.rows[0]),console.log(r.rows[0]))})}),m.get("/q",function(e,n){j.query(i,function(e,r){e?n.send(e.stack):n.send(r.rows[0])})}),m.use("/graphql",p()({schema:q,graphiql:!0})),m.listen(3e3),console.log("Serving at http://localhost:3000")},function(e,n){e.exports=require("graphql")},function(e,n){e.exports=require("pg")}]);