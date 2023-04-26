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
var pas = document.getElementById("pas");
var scis = document.getElementById("scis");
var rocs = document.getElementById("rocs");
setInterval(function(){
   if(tri.style.display=="block"){
      pas.innerHTML="&#9995;";
      rocs.innerHTML="&#9994;";
      scis.innerHTML="&#9996;";
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
rock.addEventListener("click" , function(){;wi();random();});
scissors.addEventListener("click" , function(){wi();random()});
paper.addEventListener("click" , function(){wi();random()});

function wi(){
if (rad.checked==true){
 setTimeout(wine,200);}
}
function wine(){
 if(pas.innerText==String.fromCharCode(9995) && scis.innerText==String.fromCharCode(9995)){win.innerHTML="DRAW &#129309;"}
else if(pas.innerText==String.fromCharCode(9995) && scis.innerText==String.fromCharCode(9994)){
win.innerHTML="WIN &#127894;";score = score - -1;document.getElementById("score").value=score} 
 else if(pas.innerText==String.fromCharCode(9995) && scis.innerText==String.fromCharCode(9996)){win.innerHTML="LOSE &#128148;"}
else if(pas.innerText==String.fromCharCode(9996) && scis.innerText==String.fromCharCode(9996)){win.innerHTML="DRAW &#129309;"}
else if(pas.innerText==String.fromCharCode(9996) && scis.innerText==String.fromCharCode(9994)){win.innerHTML="LOSE &#128148;"}
else if(pas.innerText==String.fromCharCode(9996) && scis.innerText==String.fromCharCode(9995)){win.innerHTML="WIN &#127894;";score = score - -1;document.getElementById("score").value=score}
else if(pas.innerText==String.fromCharCode(9994) && scis.innerText==String.fromCharCode(9994)){win.innerHTML="DRAW &#129309;"}
else if(pas.innerText==String.fromCharCode(9994) && scis.innerText==String.fromCharCode(9996)){win.innerHTML="WIN &#127894;";score = score - -1;document.getElementById("score").value=score}
else if(pas.innerText==String.fromCharCode(9994) && scis.innerText==String.fromCharCode(9995)){win.innerHTML="LOSE &#128148;"}  
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
    pas.innerHTML="&#9995;";
}}
function sci(){
if (rad.checked==true){
    pas.innerHTML="&#9996;";
}}
function roc(){
if (rad.checked==true){
  pas.innerHTML="&#9994;";
}}
function random(){
//alert("random");  
if (rad.checked==true){
 var ran = Math.floor(Math.random() * 3);
 if (ran=="0"){scis.innerHTML="&#9995;"};
 if (ran=="1"){scis.innerHTML="&#9994;"};
 if (ran=="2"){scis.innerHTML="&#9996;"};
//document.getElementById("score").innerText=ran;
}
}
