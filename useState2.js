import { useState } from "react";

function InputCheck(){

    let [inputvalue, setInputvalue] = useState("");
    

    return(
        <>
        <h2>Input Check</h2>
        <input type="text" value={inputvalue} onChange={(e)=> setInputvalue(e.target.value)}/>
        <h3>{inputvalue} Dude Seriously!! That's what you typed!</h3>
        </>
    );
}

export default InputCheck;