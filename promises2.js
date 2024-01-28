function newTest(marks, passingMarks){
    return new Promise((resolve, reject) => {
        // setTimeout(()=>{
        //     resolve("hi bhaii kaisa h??");
        // },5000);
        if(marks>passingMarks){
            resolve("Hurraayyyyyyy!! Finally");
        }else{
            reject("Shitt Yrrr!!");
        }

    });
}

// newTest(740, 47)
// .then((res)=>{
//     console.log("kaise kya pass hogya be",res);
// })
// .catch((err)=>{
//     console.log("lag gaye bhaiiiiiii",err);
// })


async function testCheck(){
    try{
    const a = await newTest(18, 48);
    console.log(a)
    } catch(err){
        console.log(err);
    }
}

testCheck();