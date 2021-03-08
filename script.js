var dragonHP = 10;

var playerHP = 5;
while (dragonHP > 0 || playerHP > 0) {
  var playerDamage = prompt(
    "You are attacked by a FireBreathing Dragon. How many hits will you attempt? (Between 1-5)"
  );

  playerDamage = Math.floor(Math.random() * playerDamage + 1);
  var dragonDamage = Math.floor(Math.random() * 2 + 1);

  if (playerDamage < 1 || playerDamage > 5) {
    alert("Damage must be between 1 and 5");
  }

  if (isNaN(playerDamage)) {
    alert("Value entered is not a number.");
    break;
  }

  dragonHP = dragonHP - playerDamage;
  if (dragonHP <= 0) break;
  playerHP = playerHP - dragonDamage;
  if (playerHP <= 0) break;
}

if (playerHP <= 0) {
  document.body.querySelector(".PlayerDeath").innerHTML =
    "You have Died! The Dragon Wins!";
}

if (dragonHP <= 0) {
  document.body.querySelector(".DragonDeath").innerHTML =
    "You have slain the Dragon!";
}

document.body.querySelector("#playerHP").innerHTML = playerHP;

document.body.querySelector("#dragonHP").innerHTML = dragonHP;