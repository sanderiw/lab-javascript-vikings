// WEEK 2 - DAY 1: LAB | JS Vikings [MFAP-1 && SANDER] 

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}
 

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`; 
    } else {
      return `${this.name} has died in act of combat`; 
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}


// Saxon
class Saxon extends Soldier {
  // Inherit from Soldier the atributes (via constructor) and atack method
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`; 
    } else {
      return `A Saxon has died in combat`; 
    }
  }
}


// War
class War {
  // Atributes:
  vikingArmy = [];
  saxonArmy = [];

  // Methods:
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  
  // SUPER BONUS - Generic attack method:
  genericAttack(armyType) {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let msg = '';
    if (armyType.toLowerCase() === 'viking') {
      // Source of damage:
      let dmg = this.vikingArmy[randomViking].strength;
      // Damage receiver:
      msg = this.saxonArmy[randomSaxon].receiveDamage(dmg);
      // Checking if the Saxon has died, if so, remove it from the battlefield:
      if (this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
    } else if (armyType.toLowerCase() === 'saxon') {
      // Source of damage:
      let dmg = this.saxonArmy[randomSaxon].strength;
      // Damage receiver:
      msg = this.vikingArmy[randomViking].receiveDamage(dmg);
      // Checking if the Viking has died, if so, remove it from the battlefield:
      if (this.vikingArmy[randomViking].health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
      }
    } else {
      throw new Error(`Invalid army. Please choose between 'viking' or 'saxon'.`);
    }
    return msg;
  }

  vikingAttack() {
    return this.genericAttack('viking');

    // THE CODE BELOW WAS DEVELOPED PRIOR TO THE 'genericAttack()' method. Kept, just in case.

    // Source of damage
    // let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // let dmg = this.vikingArmy[randomViking].strength;

    // // Damage receiver:
    // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // let msg = this.saxonArmy[randomSaxon].receiveDamage(dmg);
    
    // // Checking if the Saxon has died, if so, remove it from the battlefield:
    // if (this.saxonArmy[randomSaxon].health <= 0) {
    //   this.saxonArmy.splice(randomSaxon, 1);
    // }

    // // Returning this combat msg  
    // return msg;
  }
  
  saxonAttack() {
    return this.genericAttack('saxon');
    
    // THE CODE BELOW WAS DEVELOPED PRIOR TO THE 'genericAttack()' method. Kept, just in case.

    // Source of damage
    // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // let dmg = this.saxonArmy[randomSaxon].strength;
    
    // // Damage receiver:
    // let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // let msg = this.vikingArmy[randomViking].receiveDamage(dmg);
    
    // // Checking if the Viking has died, if so, remove it from the battlefield:
    // if (this.vikingArmy[randomViking].health <= 0) {
    //   this.vikingArmy.splice(randomViking, 1);
    // }

    // // Returning this combat msg  
    // return msg;
  }
  

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}