class Company{
    constructor(job){
        this.job = job;
    }

    work() {
        console.log(`${this.job} is done byy company!`);
    }
}


class employee extends Company{
    work(){
        super.work();
        console.log(`And also, the employee is doing some other ${this.job} work.`);
    }
}

const final = new employee('coding');
final.work();