const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');//c => context

//image file paths DataBase & loader
const backgroundImagesPaths = [
  './img/location/townImage.png',//town index0
  './img/character/wizImage.png',//player index1
  './img/location/caveImage.png',//cavebg index2
  './img/location/storeImage.png',//storebg index3
  './img/location/storeImage0.png',//store0bg index4
  './img/location/storeImage1.png',//store1bg index5
  './img/character/shopEmptyWomanImage.png',//emptyWoman index6  <----
  './img/location/shelfImage.png',//shelfbg index7
  './img/monster/fangedBeastImage1.png',//beast1bg index8
  './img/monster/fangedBeastImage2.png',//beast2bg index9
  './img/monster/fangedBeastImage3.png',//beast3bg index10
  './img/monster/fangedBeastImage4.png',//beast4bg index11
  './img/monster/slimeImage1.png',//slime1bg index12
  './img/monster/slimeImage2.png',//slime2bg index13
  './img/monster/slimeImage3.png',//slime3bg index14
  './img/monster/slimeImage4.png',//slime4bg index15
  './img/monster/slimeImage5.png',//slime5bg index16
  './img/monster/dragonBackgroundImage1.png',//dragon1bg index17
  './img/monster/dragonBackgroundImage2.png',//dragon2bg index18
];

const backgroundImagesStore = [];//to store loaded images
let loadedBackgroundImages = 0;//Counter for loaded images used to keep track of the number of images that have been loaded
let currentLocation = 0;
// Load each image
backgroundImagesPaths.forEach((path, index) => {
  const img = new Image();
  img.src = path;
  img.onload = () => {
    backgroundImagesStore[index] = img;// Store the loaded image in the images array
    loadedBackgroundImages++;// Increment the counter

    if (loadedBackgroundImages === backgroundImagesPaths.length) {// If all images have been loaded, draw them onto the canvas
      drawLocation();
    }
  };
});

const characterImagesPaths = [
  './img/character/questCountryWoman.png',//questwomen index0
  './img/character/shopManImage.png',//shopMan index1
  './img/character/questCountryMan.png',//questman index2
  './img/character/kingImage.png',//king index3
  './img/character/shopWomanImage.png',//shopWoman index4
  './img/character/fangedBeast3GirlImage.png',//BeastWoman3 index5
  './img/character/fangedBeast4GirlImage.png',//BeastWoman4 index6

  './img/character/enemyFangedBeast/Upset.png',// index7
  './img/character/enemyFangedBeast/Angry.png',// index8
  './img/character/enemyFangedBeast/Calm.png',// index9
  './img/character/enemyFangedBeast/Furious.png',// index10
  './img/character/enemyFangedBeast/Mocking.png',// index11
  './img/character/enemyFangedBeast/Scared.png',// index12
  './img/character/enemyFangedBeast/Stunning.png',// index13
  './img/character/enemyFangedBeast/Thoughtful.png',// index14
  './img/character/enemyFangedBeast/Talking.png',// index15
  './img/character/enemySlime/Upset.png',// index16
  './img/character/enemySlime/Angry.png',// index17
  './img/character/enemySlime/Calm.png',// index18
  './img/character/enemySlime/Furious.png',// index19
  './img/character/enemySlime/Mocking.png',// index20
  './img/character/enemySlime/Scared.png',// index21
  './img/character/enemySlime/Stunning.png',// index22
  './img/character/enemySlime/Thoughtful.png',// index23
  './img/character/enemySlime/Talking.png',// index24

  './img/character/enemyEffects/Upset.png',// index25
  './img/character/enemyEffects/Angry.png',// index26
  './img/character/enemyEffects/Calm.png',// index27
  './img/character/enemyEffects/Furious.png',// index28
  './img/character/enemyEffects/Mocking.png',// index29
  './img/character/enemyEffects/Scared.png',// index30
  './img/character/enemyEffects/Stunning.png',// index31
  './img/character/enemyEffects/Thoughtful.png',// index32
  './img/character/enemyEffects/Talking.png',// index33

];

const characterImagesStore = [];
let loadedCharacterImages = 0;
let currentCharacter = 0;

characterImagesPaths.forEach((path, index) => {
  const img = new Image();
  img.src = path;
  img.onload = () => {
    characterImagesStore[index] = img;
    loadedCharacterImages++;

    if (loadedCharacterImages === characterImagesPaths.length) {
      drawCharacter();//change this function!!!
    }
  };
});

const shopItemsImagesPaths = [
  './img/shop-items/weapons/dagger1.png',// index0
  './img/shop-items/weapons/4.png',// index1
  './img/shop-items/weapons/7.png',// index2
  './img/shop-items/weapons/10.png',// index3
  './img/shop-items/weapons/19.png',// index4
  './img/shop-items/weapons/22.png',// index5
  './img/shop-items/weapons/25.png',// index6
  './img/shop-items/weapons/27.png',// index7
  './img/shop-items/weapons/28.png',// index8
  './img/shop-items/weapons/29.png',// index9
  './img/shop-items/weapons/35.png',// index10
  './img/shop-items/weapons/43.png',// index11
  './img/shop-items/weapons/45.png',// index12
  './img/shop-items/weapons/47.png',// index13
  './img/shop-items/weapons/dagger2.png',// index14
  './img/shop-items/weapons/dagger3.png',// index15
  './img/shop-items/weapons/dagger4.png',// index16

  './img/shop-items/potions/1.png',// index17
  './img/shop-items/potions/11.png',// index18
  './img/shop-items/potions/21.png',// index19
  './img/shop-items/potions/31.png',// index20
  './img/shop-items/potions/41.png',// index21
  './img/shop-items/potions/46.png',// index22
  './img/shop-items/potions/potion0.png',// index23
  './img/shop-items/potions/potion3.png',// index24
  './img/shop-items/potions/potion4.png',// index25
  './img/shop-items/potions/potion5.png',// index26
  './img/shop-items/potions/potion7.png',// index27
];//add path to inventory, icon ...

const shopItemsImagesStore = [];
let loadedshopItemsImages = 0;
let currentshopItems = 0;

shopItemsImagesPaths.forEach((path, index) => {
  const img = new Image();
  img.src = path;
  img.onload = () => {
    shopItemsImagesStore[index] = img;
    loadedshopItemsImages++;

    if (loadedshopItemsImages === shopItemsImagesPaths.length) {
      drawShopItems();//change this function!!!
    }
  };
});



let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let monsterPower;
let monsterLevel;
let inventory = ["stick"];

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
const monsterPowerText = document.querySelector("#monsterPower");
const monsterLevelText = document.querySelector("#monsterLevel");
const stats = document.querySelector('#stats');

const weapons = [
  { name: 'stick', power: 5 },// index0
  { name: 'dagger', power: 30, price: 30 },// index1
  { name: 'sword', power: 100, price: 130 },// index2
  { name: 'claw hammer', power: 50, price: 30 },// index3
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
    power: getMonsterAttackValue(2),
    monsterlevel: 1
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
    power: getMonsterAttackValue(8),
    monsterlevel: 1
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
    power: getMonsterAttackValue(20),
    monsterlevel: 1
  }
];

const locations = [
  {//index0
    name: "King Fozi Town",
    "button text": ["Enter the store", "Enter the cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the King Fozi Town. You see a sign that says \"Store\"."
  },
  {//index1
    name: "store",
    "button text": ["Buy Potions", "Buy weapons", "Go Back"],
    "button functions": [buyPotions, buyWeapons, goTown],
    text: "Seraphina: Welcome to the Best Store in town, how can i help you!"
  },
  {//index2
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go Back"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {//index3
    name: "fight",
    "button text": ["Attack", "Dodge", "Run for ur life"],
    "button functions": [attack, dodge, goCave],
    text: "You are fighting a monster."
  },
  {//index4
    name: "kill monster",
    "button text": ["Go to town", "Exit", "King Fozi town"],
    "button functions": [goTown, goCave, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {//index5
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. ☠️"
  },
  {//index6
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
  },
  {//index7
    name: "easter egg", 
    "button text": ["2", "8", "Exit?"], 
    "button functions": [pickTwo, pickEight, goCave], 
    text: "You find a secret game. Pick only 3 times a number from above. The numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" 
  },
  {//index8
    name: "potions",
    "button text": ["Small Potion(10)", "Large Potion(30)", "Go Back"],
    "button functions": [buyPotion1, buyPotion2, goStore],
    text: "Hello Hero! Your wounds speak of battles hard-fought and your journey far from over. But fear not, for you stand before Dalton purveyor of the finest elixirs this side of town. Speak your needs, and I shall provide!"
  },
  {//index9
    name: "weapons",
    "button text": ["Dagger(30G/30P)", "Sword(100G/100P)", "Go Back"],
    "button functions": [buyDagger, buySword, goStore],
    text: "Hello Hero! Your wounds speak of battles hard-fought and your journey far from over. But fear not, for you stand before Dalton purveyor of the finest elixirs this side of town. Speak your needs, and I shall provide!"
  },
  {//index10
    name: "fightDragon",
    "button text": ["Attack", "Dodge", "Run for ur life"],
    "button functions": [attack, dodge, goTown],
    text: "The villain stands upon a precipice, a monstrous dragon circling ominously above. You, the hero, stand defiant below."
  },
  {//index11
    name: "buyPotion1",
    "button text": ["Small Potion(10)", "Large Potion(30)", "Go Back"],
    "button functions": [buyPotion1, buyPotion2, goStore],
    text: "geting stronger?"
  },
  {//index12
    name: "buyPotion2",
    "button text": ["Small Potion(10)", "Large Potion(30)", "Go Back"],
    "button functions": [buyPotion1, buyPotion2, goStore],
    text: "woow!! take it easy."
  },
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  monsterStats.style.left = "25vw";
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
  currentLocation = 0;
  drawLocation();
  currentCharacter = 0;
  drawCharacter();
}

function goStore() {
  update(locations[1]);
  currentLocation = 1;
  drawLocation();
  currentCharacter = 2;
  drawCharacter();
}

function goCave() {
  update(locations[2]);
  currentLocation = 2;
  drawLocation();
}

//draw functions
function drawLocation() {
  c.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  switch (currentLocation) {
    case 0: // Town
      c.drawImage(backgroundImagesStore[0], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
    case 1: // Store
      c.drawImage(backgroundImagesStore[3], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
    case 2: // Cave
      c.drawImage(backgroundImagesStore[2], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 3: // Slime
      c.drawImage(backgroundImagesStore[12], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 4: // Beast
      c.drawImage(backgroundImagesStore[8], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 5: // Dragon
      c.drawImage(backgroundImagesStore[17], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 6: // byHealth
      c.drawImage(backgroundImagesStore[7], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      c.drawImage(shopItemsImagesStore[23], canvas.width - 700, canvas.height - 450);
      c.drawImage(shopItemsImagesStore[27], canvas.width - 500, canvas.height - 450);
      break;
      case 7: // byWeapon
      c.drawImage(backgroundImagesStore[7], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      c.drawImage(shopItemsImagesStore[0], canvas.width - 700, canvas.height - 450);
      c.drawImage(shopItemsImagesStore[6], canvas.width - 500, canvas.height - 450);
      break;
  }
}
function drawCharacter() {
  //c.clearRect(0, 0, canvas.width - 250, canvas.height - 250);

  switch (currentCharacter) {
    case 0: // king
      c.drawImage(characterImagesStore[3], 0, canvas.height - 250);
      break;
    case 1: // questWoman
      c.drawImage(characterImagesStore[0], 0, canvas.height - 250);
      break;
    case 2: // shopWoman
      c.drawImage(characterImagesStore[4], 0, canvas.height - 250);
      break;
      case 3: // shopMan
      c.drawImage(characterImagesStore[1], 0, canvas.height - 250);
      break;
      case 4: // BeastWoman3
      c.drawImage(characterImagesStore[5], 0, canvas.height - 250);
      break;
      case 5: // BeastWoman4
      c.drawImage(characterImagesStore[6], 0, canvas.height - 250);
      break;
  }
}
function drawShopItems() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  switch (currentshopItems) {
    case 0: // weapon1
      c.drawImage(backgroundImagesStore[0], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      c.drawImage(backgroundImagesStore[20], 0, canvas.height - 250);
      break;
    case 1: // weapon2
      c.drawImage(backgroundImagesStore[3], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      c.drawImage(backgroundImagesStore[19], 0, canvas.height - 250);
      break;
    case 2: // weapon3
      c.drawImage(backgroundImagesStore[2], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 3: // weapon4
      c.drawImage(backgroundImagesStore[12], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 4: // weapon5
      c.drawImage(backgroundImagesStore[8], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
      case 5: // weapon6
      c.drawImage(backgroundImagesStore[17], 0, 0);
      c.drawImage(backgroundImagesStore[1], canvas.width - 250, canvas.height - 226);
      break;
  }
}

function buyPotions() {
  //update images
  currentLocation = 6;
  drawLocation();
  currentCharacter = 3;
  drawCharacter();
  update(locations[8]);
}

function buyPotion1() {
  update(locations[11]);
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyPotion2() {
  update(locations[12]);
  if (gold >= 30) {
    gold -= 30;
    health += 30;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}


function buyWeapons() {
  currentLocation = 7;
  drawLocation();
  currentCharacter = 3;
  drawCharacter();
  update(locations[9]);
}
function buyDagger() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[1].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
}
function buySword() {
  if (gold >= 100) {
    gold -= 100;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[2].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
}

/*function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}*/

function sellWeapon() {
  currentLocation = 7;
  drawLocation();
  currentCharacter = 3;
  drawCharacter();

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
  currentLocation = 3;
  drawLocation();

  fighting = 0;
  goFight();
}

function fightBeast() {
  currentLocation = 4;
  drawLocation();

  fighting = 1;
  goFight();
}

function fightDragon() {
  currentLocation = 5;
  drawLocation();
  currentCharacter = 5;
  drawCharacter();

  fighting = 2;
  goFightDragon();
}

function goFightDragon() {
  update(locations[10]);
  monsterHealth = monsters[fighting].health;
  monsterPower = monsters[fighting].power;
  monsterLevel = monsters[fighting].monsterlevel;
  monsterStats.style.display = "block";
  monsterStats.style.left = 0;
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  monsterPowerText.innerText = monsterPower;
  monsterLevelText.innerText = monsterLevel;
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterPower = monsters[fighting].power;
  monsterLevel = monsters[fighting].monsterlevel;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  monsterPowerText.innerText = monsterPower;
  monsterLevelText.innerText = monsterLevel;
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