$(document).ready(function() {
    //this calculates values automatically 
    sum();
    $("#num1, #num2").on("keydown keyup", function() {
        sum();
    });
});

function sum() {
		num1 = document.getElementById("value1").value;
        num2 = document.getElementById("value2").value;
        sum1= parseInt(num1)+parseInt(num2);
		document.getElementById("result").innerHTML = "Sum of two numbers is : " +sum1;
}
function diff() {
		num1 = document.getElementById("value1").value;
        num2 = document.getElementById("value2").value;
        diff1= parseInt(num1)-parseInt(num2);
		document.getElementById("result").innerHTML = "Difference of two numbers is : " +diff1;
}
function mul() {
		num1 = document.getElementById("value1").value;
        num2 = document.getElementById("value2").value;
        mul1= parseInt(num1)*parseInt(num2);
		document.getElementById("result").innerHTML = "Product of two numbers is : " +mul1;
}
function div() {
		num1 = document.getElementById("value1").value;
        num2 = document.getElementById("value2").value;
        div1= parseInt(num1)/parseInt(num2);
		document.getElementById("result").innerHTML = "Division of two numbers is : " +div1;
}