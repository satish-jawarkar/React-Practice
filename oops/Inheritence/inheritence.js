class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    makeSound(sound){
        console.log(`${this.name} makes ${this.sound}`);
    }
}

class Cat extends Animal{
    constructor(name, breed) {
        super(name);
        this.type = 'cat';
        this.sound = 'eeeeeuuuuuuuuuu';
        this.breed = breed;
    }

    anInfo(){
        console.log(`${this.name} is type of ${this.breed}`);
    }
}

const cat = new Cat('catt', 'pagal');
cat.anInfo();
cat.makeSound();