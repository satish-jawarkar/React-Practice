const fs = require("fs");

fs.readFile("./ex1.txt", 'utf-8', (err, data)=>{
    if(err){
        console.log("Error");
    }else{
        console.log(data);
    }
})