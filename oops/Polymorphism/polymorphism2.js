class sportsCar{
    constructor(speed){
        this.speed = speed;
    }

    speedCheck(){
        return `The car is going ${this.speed} miles per hour.`;
    }
}

class sportsBike extends sportsCar{
    speedCheck(){
        let result = super.speedCheck();
        console.log(result);
        console.log(`Well! I can not go ${this.speed} miles per hour!`);
    }
}

let final = new sportsBike(150);
final.speedCheck();