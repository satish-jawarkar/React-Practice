import React from "react";
import Child from "./Child";

function Parent(){
    const a = {name: "Alex", add:"India"};
    return(
        <div className="hiii">
            {/* name="alex" add="India" */}
        <Child {...a}/>
        </div>
    );
}

export default Parent;