(this["webpackJsonpDespicable-Who"]=this["webpackJsonpDespicable-Who"]||[]).push([[0],[,,,,,,,,,,,function(e,n,a){e.exports=a.p+"static/media/gru_t.62be63d7.png"},function(e){e.exports=JSON.parse('[{"id":1,"name":"minion 1","image":"./images/minion_1.jpg","clicked":false},{"id":2,"name":"minion 2","image":"./images/minion_2.jpg","clicked":false},{"id":3,"name":"minion 3","image":"./images/minion_3.jpg","clicked":false},{"id":4,"name":"minion 4","image":"./images/minion_4.jpg","clicked":false},{"id":5,"name":"minion 5","image":"./images/minion_5.jpg","clicked":false},{"id":6,"name":"minion 6","image":"./images/minion_6.jpg","clicked":false},{"id":7,"name":"minion 7","image":"./images/minion_7.jpg","clicked":false},{"id":8,"name":"minion 8","image":"./images/minion_8.jpg","clicked":false},{"id":9,"name":"minion 9","image":"./images/minion_9.jpg","clicked":false},{"id":10,"name":"minion 10","image":"./images/minion_10.jpg","clicked":false},{"id":11,"name":"minion 11","image":"./images/minion_11.jpg","clicked":false},{"id":12,"name":"minion 12","image":"./images/minion_12.jpg","clicked":false}]')},,,function(e,n,a){e.exports=a(29)},,,,,function(e,n,a){},function(e,n,a){},,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var i=a(0),t=a.n(i),l=a(6),c=a.n(l),o=(a(20),a(7)),s=a(8),r=a(13),m=a(9),u=a(14),g=(a(21),a(10)),d=a.n(g),h=a(1),f=a.n(h);var p=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(d.a,{className:"footer"}),t.a.createElement(f.a,{className:"copyright center-align"},"Despicable Who? 2019 "))};a(25);var E=function(e){return t.a.createElement("main",Object.assign({className:"wrapper"},e),e.children)};a(26);var k=function(){return t.a.createElement("div",{className:"headerImage"})},v=a(11),j=a.n(v);var b=function(){return t.a.createElement("img",{alt:"gru",src:j.a,style:{maxWidth:"200px",width:"100%",marginTop:"40px"}})};var x=function(e){return t.a.createElement("div",Object.assign({style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-around",height:"500px",padding:"0 60px"}},e),e.children)};var w=function(e){return t.a.createElement("div",Object.assign({style:{backgroundColor:"#D78618",width:"100%",height:"500px",marginTop:"5px",borderRadius:"10px",paddingRight:"0px",flex:"2 1 0 "}},e),e.children)};var y=function(e){return t.a.createElement("div",Object.assign({style:{marginTop:"17px",flex:"3 1 0 "}},e),e.children)},O=a(2),_=a.n(O);a(27);var C=function(e){return t.a.createElement("img",{className:"minionProfile responsive-img right-align",alt:e.name,src:e.image,id:e.id,onClick:e.handleBtnClick})},W=(a(28),a(12)),N=function(e){function n(e){var a;return Object(o.a)(this,n),(a=Object(r.a)(this,Object(m.a)(n).call(this,e))).handleBtnClick=function(e){var n=e.target.id,i=a.state.guessed.length,t=a.state.minions.length;a.state.guessed.includes(n)&&i!==t?a.gameOver():a.state.guessed.includes(n)?a.wonGame():(a.state.guessed.push(n),a.correctGuess()),a.shuffleMinions()},a.shuffleMinions=function(){for(var e=a.state.minions,n=e.length-1;n>0;n--){var i=Math.floor(Math.random()*(n+1)),t=[e[i],e[n]];e[n]=t[0],e[i]=t[1]}a.setState({minions:e})},a.gameOver=function(){alert("GAME OVER!")},a.correctGuess=function(){var e=a.state.score+2,n=e>a.state.highScore?e:a.state.score;a.setState({highScore:n,score:e,status:"Correct! "})},a.wonGame=function(){alert("Congradulations, You Won!")},a.state={minions:W,status:"Select a minion to begin! Good Luck!",guessed:[],highScore:0,score:0},a}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentWillMount",value:function(){this.shuffleMinions()}},{key:"render",value:function(){var e=this;return t.a.createElement("main",null,t.a.createElement(E,null,t.a.createElement(k,null),t.a.createElement(x,null,t.a.createElement(w,null,t.a.createElement(f.a,null,t.a.createElement(_.a,{className:"s5 l5"},t.a.createElement(b,null)),t.a.createElement(_.a,{className:"s5 l6 center-align"},t.a.createElement(f.a,null,t.a.createElement("h6",null,"Welcome to the Despicable Who Memory Game!"),t.a.createElement("p",null,"Can you rescue all of the minions from Gru?"),t.a.createElement("p",null," Click on each minion to earn points."),t.a.createElement("p",null,"Don\u2019t click the same minion more than once!"),t.a.createElement("p",null,this.state.status," ")),t.a.createElement(f.a,null,t.a.createElement("h6",null," Highscore: ",this.state.highScore),t.a.createElement("h6",null," Score: ",this.state.score))))),t.a.createElement(y,{className:"right-align"},this.state.minions.map((function(n,a){return t.a.createElement(C,{key:a,id:n.id,image:n.image,guessed:n.guessed,handleBtnClick:e.handleBtnClick.bind(e)})}))))),t.a.createElement(p,null))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.243bd84b.chunk.js.map