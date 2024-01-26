class Parent{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }

    maturityCheck(){
        console.log(`I'm Very much mature than ${this.name} because i'm ${this.level} +`);
    }
}

class Child extends Parent{
    constructor(name){
        super(name);
        this.level = '25';
    }
    mCheck(){
        console.log(`im not that mature because im not ${this.level}`);
    }
}

let check = new Child('Caeser');
check.maturityCheck();
check.mCheck();