var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your bill?"));

var num2 = Number((num1*.07)+num1);

var num3 = (num2*.05)+num2;

containerEle.innerHTML=num3;