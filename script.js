var wrapperEle = document.body.querySelector(".wrap");

var list = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];
var searchTerm = "a";
for (var i = 0; i < list.length; i++) {
  if (list[i].health >= 10) {
    if (list[i].damage >= 2) {
      if (list[i].warrior == true) {
        personEle = document.createElement("div");
        personEle.innerHTML = list[i].name;
        wrapperEle.appendChild(personEle);
        if (list[i].name.includes(searchTerm)) {
          personEle.style.color = "red";
        }
      }
    }
  }
}