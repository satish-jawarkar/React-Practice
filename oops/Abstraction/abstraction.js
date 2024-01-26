class myAdd{
  constructor(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  
  addNum(){
    return this.num1 + this.num2 ;
  }

  finalAns(){
    var f = this.addNum();
    console.log(f);
  }

}

const add = new myAdd(3,5);
add.finalAns();