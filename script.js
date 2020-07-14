
class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3) {
      this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
    sayName(name) {
      console.log("My name is ", this.name);
      return this;
    }
    showStats(name, strength, speed, health) {
      console.log("Name :", this.name, ", Health: ", this.health, ", Strength :", this.strength, ", Speed :", this.speed);
      return this;
    }
    drinkSake() {
      this.health += 10;
      return this;
    }
  }
  
  class Sensei extends Ninja {
    constructor(name, wisdom=10) {
      super(name, 200, 10, 10);
      this.wisdom = wisdom;
    }
    speakWisdom() {
      super.drinkSake();
      console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats() {
      super.showStats();
      console.log("Wisdom :", this.wisdom);
    }
  }
  
  const genkai = new Sensei("Genkai")
  
  genkai.speakWisdom();
  genkai.showStats();
  