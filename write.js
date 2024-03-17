const fs = require("fs");

fs.writeFile("ex1.txt", "hello, how are you?", (err)=>{
    if(err){
        console.log("Error");
    }else{
        console.log("Successfull");
    }
})