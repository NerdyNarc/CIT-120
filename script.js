var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleAge = document.createElement("h4");
if(list[i].age > 25){
  ele.style.color="green";
}
eleName.innerHTML = "Name: " + list[i].name;
  eleAge.innerHTML = "Age: " + list[i].age;
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendChild(ele);
}
var clicks = 5;

function counter(){
  clicks += 1
  document.getElementById("clicks").innerHTML = clicks
}