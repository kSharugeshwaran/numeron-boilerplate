// Iteration 2: Generate 2 random number and display it on the screen
var num1= Math.floor(Math.random()*100);
var num2=Math.floor(Math.random()*100);

let num1_box=document.getElementById("number1");
let num2_box=document.getElementById("number2");

num1_box.innerHTML=num1;
num2_box.innerHTML=num2;
// Iteration 3: Make the options button functional
function generatorRandomNumbers(){
     num1= Math.floor(Math.random()*100)
     num2=Math.floor(Math.random()*100)

    num1_box.innerHTML=num1;
    num2_box.innerHTML=num2;
}


let score=0;

var greaterThanButton=document.getElementById("greater-than");
var eqaulButton=document.getElementById("equal-to");
var lessThanButton=document.getElementById("lesser-than");




greaterThanButton.onclick=()=>{
    if(num1>num2){
        score++;
       finalFunction()
        
    }
    else{
        window.open("./gameover.html","_self")
    }
}

eqaulButton.onclick=()=>{
    if(num1==num2){
        score++;
       finalFunction()
        
    }
    else{
        window.open("./gameover.html","_self")
    }
}

lessThanButton.onclick=()=>{
    if(num1<num2){
        score++;
       finalFunction()
        
    }
    else{

        window.open("./gameover.html","_self")
    }
}

// Iteration 4: Build a timer for the game

let time;
let timer_box=document.getElementById("timer");
let interval 


function startInterval(){
    time=5;
    interval=setInterval(()=>{
        timer_box.textContent=time;
        time--;
   
        if(time==0){
            localStorage
    clearInterval(interval)
    location.href= "./gameover.html";

   }

},1000)}

startInterval()

function finalFunction(){
    localStorage.setItem("score",score)
    clearInterval(interval);
    startInterval()
    generatorRandomNumbers();

    
}
 
localStorage.setItem("score",0)