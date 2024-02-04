let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const townSquare = document.querySelector('#townSquare');
const store = document.querySelector('#store');
const cave = document.querySelector('#cave');
const dragonBackgroundImage = document.querySelector('#dragonBackgroundImage');
const dragon = document.querySelector('#dragon');
const byHealthImage = document.querySelector('#byHealthImage');
const byWeaponImage = document.querySelector('#byWeaponImage');
const sellWeaponImage = document.querySelector('#sellWeaponImage');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. ☠️"
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
  },
  {
    name: "easter egg", 
    "button text": ["2", "8", "Go to town square?"], 
    "button functions": [pickTwo, pickEight, goTown], 
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" 
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
  townSquare.style.display = "block";
  store.style.display = "none";
  cave.style.display = "none";
  dragonBackgroundImage.style.display = "none";
  dragon.style.display = "none";
  byHealthImage.style.display = "none";
  byWeaponImage.style.display = "none";
  sellWeaponImage.style.display = "none";
}

function goStore() {
  update(locations[1]);
  townSquare.style.display = "none";
  store.style.display = "block";
  cave.style.display = "none";
  dragonBackgroundImage.style.display = "none";
  dragon.style.display = "none";
  byHealthImage.style.display = "none";
  byWeaponImage.style.display = "none";
  sellWeaponImage.style.display = "none";
}

function goCave() {
  update(locations[2]);
  townSquare.style.display = "none";
  store.style.display = "none";
  cave.style.display = "block";
  dragonBackgroundImage.style.display = "none";
  dragon.style.display = "none";
  byHealthImage.style.display = "none";
  byWeaponImage.style.display = "none";
  sellWeaponImage.style.display = "none";
}

function buyHealth() {
  if (gold >= 10) {
    townSquare.style.display = "none";
    store.style.display = "block";
    cave.style.display = "none";
    dragonBackgroundImage.style.display = "none";
    dragon.style.display = "none";
    byHealthImage.style.display = "block";
    byWeaponImage.style.display = "none";
    sellWeaponImage.style.display = "none";
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    townSquare.style.display = "none";
    store.style.display = "block";
    cave.style.display = "none";
    dragonBackgroundImage.style.display = "none";
    dragon.style.display = "none";
    byHealthImage.style.display = "none";
    byWeaponImage.style.display = "none";
    sellWeaponImage.style.display = "none";
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      townSquare.style.display = "none";
      store.style.display = "block";
      cave.style.display = "none";
      dragonBackgroundImage.style.display = "none";
      dragon.style.display = "none";
      byHealthImage.style.display = "none";
      byWeaponImage.style.display = "block";
      sellWeaponImage.style.display = "none";
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      townSquare.style.display = "none";
      store.style.display = "block";
      cave.style.display = "none";
      dragonBackgroundImage.style.display = "none";
      dragon.style.display = "none";
      byHealthImage.style.display = "none";
      byWeaponImage.style.display = "none";
      sellWeaponImage.style.display = "none";
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
    if (button2.onclick) {
      townSquare.style.display = "none";
      store.style.display = "block";
      cave.style.display = "none";
      dragonBackgroundImage.style.display = "none";
      dragon.style.display = "none";
      byHealthImage.style.display = "none";
      byWeaponImage.style.display = "none";
      sellWeaponImage.style.display = "block";
    }
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
    townSquare.style.display = "none";
    store.style.display = "none";
    cave.style.display = "none";
    dragonBackgroundImage.style.display = "block";
    dragon.style.display = "block";
    byHealthImage.style.display = "none";
    byWeaponImage.style.display = "none";
    sellWeaponImage.style.display = "none";
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  //easy mode
  //health -= monsters[fighting].level;
  //monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  //easy mode
  //hard mode
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss."
  }
  //hard mode
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  //hard mode weapon breaks
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
  //hard mode
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  //if (hit > 0) {return hit} else {return 0}
  return hit > 0 ? hit : 0 //returns hit if hit is greater than 0 or returns 0 if it's not
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

//easter egg
function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) { //.includes used to check if the guess is in the numbers array or not
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose()
    }
  }
}
