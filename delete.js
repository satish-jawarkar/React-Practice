const fs = require("fs");

fs.unlink('./ex1.txt', (err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("deleted");
    }
})