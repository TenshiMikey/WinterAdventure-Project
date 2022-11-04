let userName = document.getElementById("result").innerHTML = localStorage.getItem("userName");

if (userName <= 0) {

    $("#register").show();

} else {
    $("#register").hide();
}

document.getElementById('button').addEventListener('click', () => {
   

localStorage.setItem('userName', document.getElementById('userName').value)
localStorage.setItem('email', document.getElementById('email').value)

$("#register").hide();

console.log(userName, email)
console.log('button clicked');


alert("thank you " + userName + " you are our newest subscriber.")

});
//Date call
const date = new Date();
const year = date.getFullYear();
document.getElementById("date").innerHTML = "Winter Adventure " + year;

//canvas
var canvas = document.getElementById("canVas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFF";
ctx.fillRect(0, 0, 150, 75);
