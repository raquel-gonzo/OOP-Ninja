
class Ninja {
    constructor(name, health=0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(name){
        console.log("My name is ", this.name);
    }
    showStats(name, strength, speed, health){
        console.log("Name :", this.name, ", Health: ", this.health, ", Strength :", this.strength, ", Speed :", this.speed);
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();