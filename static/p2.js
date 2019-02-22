let getsum = function (arg1, arg2) {
  return parseInt(arg1) + parseInt(arg2);
}

const sumbtn = document.getElementById('sum');
if(sumbtn){
  sumbtn.addEventListener('click', sum);
}

function mouseHOver() {
  const xhttp = new XMLHttpRequest();
  $.ajax({
    type: 'GET',
    url: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4',
    success: function (data) {
      $("#mouseOverExamp").html(data[1].quote);
    }
  });
}

function mouseOut() {
  $("#mouseOverExamp").html("Place the cursor on me");
}




function sum() {
  num1 = document.getElementById("value1").value;
  num2 = document.getElementById("value2").value;
  let sumVar=getsum(num1, num2);
  localStorage.setItem("sum1", sumVar);
  $("#result").html("Sum of two numbers is : " + localStorage.getItem("sum1"));
}
let getdiff = function (arg1, arg2) {
  return parseInt(arg1) - parseInt(arg2);
}
function diff() {
  num1 = document.getElementById("value1").value;
  num2 = document.getElementById("value2").value;
  localStorage.setItem("diff1", getdiff(num1, num2));
  $("#result").html("Difference of two numbers is : " + localStorage.getItem("diff1"));
}
let getmul = function (arg1, arg2) {
  return parseInt(arg1) * parseInt(arg2);
}
function mul() {
  num1 = document.getElementById("value1").value;
  num2 = document.getElementById("value2").value;
  localStorage.setItem("mul1", getmul(num1, num2));
  $("#result").html("Product of two numbers is : " + localStorage.getItem("mul1"));
}
let getdiv = function (arg1, arg2) {
  return parseInt(arg1) / parseInt(arg2);
}
function div() {
  num1 = document.getElementById("value1").value;
  num2 = document.getElementById("value2").value;
  localStorage.setItem("div1", getdiv(num1, num2));
  $("#result").html("Division of two numbers is : " + localStorage.getItem("div1"));
}


