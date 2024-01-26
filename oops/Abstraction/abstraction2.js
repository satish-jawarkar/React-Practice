class Salary{
    constructor(name, salary, age){
        this.name = name;
        this.salary = salary;
        this.age = age;
    }

    checkSalary(bonus){
        return this.salary + bonus;
    }

    finalSalary(bonus){
        var f = this.checkSalary(bonus);
        console.log(`Her name is ${this.name} who is ${this.age} year old `);
        console.log(`Her final salary is`, f);
    }
}

var s = new Salary('Dragon', 500000, 20);
s.finalSalary(45000); 