function showLoans() {
document.getElementById("loanContent").style.height ="50%";
document.getElementById("fundsContent").style.height ="0%";
document.getElementById("termsContent").style.height ="0%";
setTimeout(function(){
document.getElementById("loanContent").style.height ="0%";
document.getElementById("fundsContent").style.height ="0%";
document.getElementById("termsContent").style.height ="0%";
},20000);
let time = 20; 
let counter;
 function countDownTimer() {
let display = document.getElementById("timer1");
display.innerHTML = "Closes in "+time + " seconds";
time--;
if (time < 0) {
clearInterval(counter);
}
}		
function startTimer() {
counter = setInterval(countDownTimer, 1000);
}
startTimer();
}

function showFunds() {
document.getElementById("loanContent").style.height ="0%";
document.getElementById("fundsContent").style.height ="50%";
document.getElementById("termsContent").style.height ="0%";
setTimeout(function(){
document.getElementById("loanContent").style.height ="0%";
document.getElementById("fundsContent").style.height ="0%";
document.getElementById("termsContent").style.height ="0%";
},20000);
let time = 20; 
let counter;
 function countDownTimer() {
let display = document.getElementById("timer2");
display.innerHTML = "Closes in "+time + " seconds";
time--;
if (time < 0) {
clearInterval(counter);
}
}		
function startTimer() {
counter = setInterval(countDownTimer, 1000);
}
startTimer();
}

function showTerms() {
document.getElementById("loanContent").style.height ="0%";
document.getElementById("fundsContent").style.height ="0%";
document.getElementById("termsContent").style.height ="50%";
setTimeout(function(){
document.getElementById("loanContent").style.height ="0%";
document.getElementById("fundsContent").style.height ="0%";
document.getElementById("termsContent").style.height ="0%";
},20000);
let time = 20; 
let counter;
 function countDownTimer() {
let display = document.getElementById("timer3");
display.innerHTML = "Closes in "+time + " seconds";
time--;
if (time < 0) {
clearInterval(counter);
}
}		
function startTimer() {
counter = setInterval(countDownTimer, 1000);
}
startTimer();
}


function readTerms(){
location.replace("loading.html");
}

function openTerms(){
setTimeout(function(){
location.replace("terms.html");
}, 5000);
}

function openBiz(){
location.replace("loading2.html");
}

function openBizz(){
setTimeout(function(){
location.replace("business.html");
}, 5000);
}

function openAgri(){
location.replace("loading3.html");
}

function openAgrii(){
setTimeout(function(){
location.replace("agriculture.html");
}, 5000);
}

function openSch(){
location.replace("loading4.html");
}

function openFees(){
setTimeout(function(){
location.replace("schoolfees.html");
}, 5000);
}

function openEm(){
location.replace("loading5.html");
}

function openEmer(){
setTimeout(function(){
location.replace("emergency.html");
}, 5000);
}

function openHos(){
location.replace("loading6.html");
}

function openHosp(){
setTimeout(function(){
location.replace("hospital.html");
}, 5000);
}


function showNav() {
document.getElementById("navv").style.width ="80%";
}