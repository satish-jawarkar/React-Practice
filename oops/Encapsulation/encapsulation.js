class Student{
    //private variables
    #name = "Alex";
    #roll_no = "02";
    #id = "1708";

    getName(){
        console.log("Name is:", this.#name);
    }
    getRoll(){
        console.log("Roll no. is", this.#roll_no);
    }
    getID(){
        console.log("ID is:", this.#id);
    }

    setName(name){
        this.#name = name;
    }
    setRoll(roll_no){
        this.#roll_no = roll_no;
    }
    setId(id){
        this.#id = id;
    }
}

let student = new Student();

// student.setName();

var input = readInt("1: Fetch 2: Update");

if(input === 1){
    student.getName();
    student.getID();
    student.getRoll();
}else if(input === 2){
    var n = prompt("Enter student name:");
    var i = readInt("Enter student id:");
    var r = readInt("Enter roll no.")
    student.setName(n);
    student.setId(i);
    student.setRoll(r);
    student.getName();
    student.getID();
    student.getRoll();
}else{
    exit();
}