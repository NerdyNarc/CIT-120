var contentEle = document.body.querySelector(".content");
var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var messageBox2 = document.body.querySelector(".message2");
var notes = [];
var priority = [];

var list = [
  {
    username: "cool",
    password: "password"
  }
];

var i = 0;
i < list.length;
i++;
document.body.querySelector(".submit").addEventListener("click", function () {
  for (i = 0; i < list.length; i++) {
    var userBox = document.body.querySelector(".username");
    var passBox = document.body.querySelector(".password");
    if (
      userBox.value == list[i].username &&
      passBox.value == list[i].password
    ) {
      contentEle.innerHTML = "";
      alert("Login successful, redirecting you.");
      var headEle = document.createElement("h1");
      messageBox.innerHTML = "";
      headEle.innerHTML = "Main Page";
      contentEle.appendChild(headEle);
      var noteEle = document.createElement("input");
      var impEle = document.createElement("input");
      noteEle.placeholder = "Name...";
      var impEle = document.createElement("input");
      impEle.placeholder = "Grade...";
      contentEle.appendChild(noteEle);
      contentEle.appendChild(impEle);
      var noteButton = document.createElement("button");
      var viewButton = document.createElement("button");
      viewButton.textContent = "View Grade"
      noteButton.textContent = "Enter Grade";
      noteButton.addEventListener("click", function () {
        if (impEle.value.length == 0) {
          messageBox2.innerHTML = "";
          messageBox2.innerHTML = "You must assign a grade to your name";
        } 
        if (isNaN(impEle.value)) {
          messageBox2.innerHTML = "";
          messageBox2.innerHTML = "Value entered for Grade was not a valid";
        } else {
          priority.push(impEle.value);
          renderNote();
        }
        if (noteEle.value.length <= 1) {
          messageBox.innerHTML = "";
          messageBox.innerHTML =
            "Your note input must be longer than 1 character.";
        } else {
          notes.push(noteEle.value);
          renderNote();
        }
      });
      function renderNote() {
        document.body.querySelector(".note").innerHTML = "";
        document.body.querySelector(".import").innerHTML = "";
        for (var x = 0; x < notes.length; x++) {
          messageBox.innerHTML = "";
          messageBox2.innerHTML = "";
          var itmEle = document.createElement("h3");
          itmEle.innerHTML = "Name: " + notes[x] + "     Grade: " + priority[x];
          document.body.querySelector(".note").appendChild(itmEle);
        }
      }
      contentEle.appendChild(noteButton);
    } else {
      messageBox.innerHTML = "";
      messageBox.innerHTML = "Username not found.";
    }
    if (userBox.value !== list.username) {
      messageBox.innerHTML = "";
      messageBox.innerHTML = "Username is Incorrect";
      return;
    }

    if (passBox.value !== list.password) {
      messageBox.innerHTML = "";
      messageBox.innerHTML = "Password is Incorrect";
      return;
    }
  }
});