(this["webpackJsonpDespicable-Who"]=this["webpackJsonpDespicable-Who"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"minion 1","image":"./images/minion_1.jpg","clicked":false},{"id":2,"name":"minion 2","image":"./images/minion_2.jpg","clicked":false},{"id":3,"name":"minion 3","image":"./images/minion_3.jpg","clicked":false},{"id":4,"name":"minion 4","image":"./images/minion_4.jpg","clicked":false},{"id":5,"name":"minion 5","image":"./images/minion_5.jpg","clicked":false},{"id":6,"name":"minion 6","image":"./images/minion_6.jpg","clicked":false},{"id":7,"name":"minion 7","image":"./images/minion_7.jpg","clicked":false},{"id":8,"name":"minion 8","image":"./images/minion_8.jpg","clicked":false},{"id":9,"name":"minion 9","image":"./images/minion_9.jpg","clicked":false},{"id":10,"name":"minion 10","image":"./images/minion_10.jpg","clicked":false},{"id":11,"name":"minion 11","image":"./images/minion_11.jpg","clicked":false},{"id":12,"name":"minion 12","image":"./images/minion_12.jpg","clicked":false}]')},,,function(e,n,a){e.exports=a(29)},,,,,function(e,n,a){},function(e,n,a){},,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var i=a(0),t=a.n(i),l=a(6),m=a.n(l),c=(a(19),a(7)),o=a(8),s=a(12),r=a(9),g=a(13),u=(a(20),a(10)),d=a.n(u),f=a(1),h=a.n(f);var p=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(d.a,{className:"footer"}),t.a.createElement(h.a,{className:"copyright center-align"},"Despicable Who? 2019 "))};a(24);var k=function(e){return t.a.createElement("main",Object.assign({className:"wrapper"},e),e.children)};a(25);var E=function(){return t.a.createElement("div",{className:"headerImage"})},v=a(2),j=a.n(v);a(26);var b=function(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement(h.a,{style:{backgroundColor:"#D78618",width:"100%",height:"500px",marginTop:"5px",borderRadius:"10px",paddingRight:"0px"}},t.a.createElement(j.a,{className:"s5 l5 leftImage"}),t.a.createElement(j.a,{className:"s5 l6 center-align"},t.a.createElement(h.a,null,t.a.createElement("h6",null,"Who is my partner in crime?"),t.a.createElement("h6",null,"Click the correct minion to earn points."),t.a.createElement("p",null,"Don\u2019t click more than once!")))))};a(27);var _=function(e){return t.a.createElement("img",{className:"minionProfile responsive-img",alt:e.name,src:e.image,id:e.id,onClick:e.handleBtnClick})},w=(a(28),a(11)),N=function(e){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(r.a)(n).call(this,e))).handleBtnClick=function(e){var n=e.target.id;a.state.guessed.push(n),console.log(a.state.guessed),a.shuffleMinions()},a.shuffleMinions=function(){for(var e=a.state.minions,n=e.length-1;n>0;n--){var i=Math.floor(Math.random()*(n+1)),t=[e[i],e[n]];e[n]=t[0],e[i]=t[1]}a.setState({minions:e})},a.state={minions:w,message:"Select a minion to begin",guessed:[],highScore:0,score:0},a}return Object(g.a)(n,e),Object(o.a)(n,[{key:"componentWillMount",value:function(){this.shuffleMinions()}},{key:"render",value:function(){var e=this;return t.a.createElement("main",null,t.a.createElement(k,null,t.a.createElement(E,null),t.a.createElement(h.a,null,t.a.createElement(j.a,{className:"s5"},t.a.createElement(b,null)),t.a.createElement(j.a,{className:"s7",style:{marginTop:"19px"}},this.state.minions.map((function(n,a){return t.a.createElement(_,{key:a,id:n.id,image:n.image,guessed:n.guessed,handleBtnClick:e.handleBtnClick.bind(e)})}))))),t.a.createElement(p,null))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(t.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.1377d5e8.chunk.js.map