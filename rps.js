var score = document.getElementById("score").value;
var paper = document.getElementById("paper");
var rock = document.getElementById('rock');
var scissors = document.getElementById("scissors");
var tri = document.getElementById("tri");
var text = document.getElementById("text").style;
var text1 = document.getElementById("text1").style;
var rule = document.getElementById("rule").style;
var rrock = document.getElementById("rrock");
var rpaper = document.getElementById("rpaper");
var rscissors = document.getElementById("rscissors");
var rad = document.getElementById("rad");
var win = document.getElementById("win");
setInterval(function(){
   if(tri.style.display=="block"){
      paper.innerText="🖐️";
      rock.innerText="✊";
      scissors.innerText="✌️";
} 

},50)


function rul(){
document.getElementById("body1").style.filter="blur(5px)";
document.getElementById("rulet").style.display="flex";
}
function clos(){
document.getElementById("body1").style.filter="blur(0px)";
document.getElementById("rulet").style.display="none";    
}
rock.addEventListener("click" , function(){wi();random();});
scissors.addEventListener("click" , function(){wi();random()});
paper.addEventListener("click" , function(){wi();random()});

function wi(){
if (rad.checked==true){
 setTimeout(wine,200);}
}
function wine(){
//alert("work");
   if(paper.innerText=="🖐️" && scissors.innerText=="🖐️"){win.innerText="DRAW🤝"}
else if(paper.innerText=="🖐️" && scissors.innerText=="✊"){
win.innerText="WIN🎖️";score = score - -1;document.getElementById("score").value=score} 
 else if(paper.innerText=="🖐️" && scissors.innerText=="✌️"){win.innerText="LOSE💔"}
else if(paper.innerText=="✌️" && scissors.innerText=="✌️"){win.innerText="DRAW🤝"}
else if(paper.innerText=="✌️" && scissors.innerText=="✊"){win.innerText="LOSE💔"}
else if(paper.innerText=="✌️" && scissors.innerText=="🖐️"){win.innerText="WIN🎖️";score = score - -1;document.getElementById("score").value=score}
else if(paper.innerText=="✊" && scissors.innerText=="✊"){win.innerText="DRAW🤝"}
else if(paper.innerText=="✊" && scissors.innerText=="✌️"){win.innerText="WIN🎖️";score = score - -1;document.getElementById("score").value=score}
else if(paper.innerText=="✊" && scissors.innerText=="🖐️"){win.innerText="LOSE💔"}  
}
function switc() {
rock.style.display = "none";
tri.style.display = "none";
text.display = "block";
text1.display = "block";
rule.top="80px";
paper.className="paper left";
scissors.className="scissors right";
setTimeout(function(){rad.checked=false},1);
}
function home(){
rock.style.display = "block";
tri.style.display = "block";
text.display = "none";
text1.display = "none";
rule.top="160px";
paper.className="paper";
scissors.className="scissors";
rad.checked=true;
}
function pape(){
if (rad.checked==true){
    paper.innerText="🖐️";
}}
function sci(){
if (rad.checked==true){
    paper.innerText="✌️";
}}
function roc(){
if (rad.checked==true){
  paper.innerText="✊";
}}
function random(){
//alert("random");  
if (rad.checked==true){
 var ran = Math.floor(Math.random() * 3);
 if (ran=="0"){scissors.innerText="🖐️"};
 if (ran=="1"){scissors.innerText="✊"};
 if (ran=="2"){scissors.innerText="✌️"};
//document.getElementById("score").innerText=ran;
}
}
