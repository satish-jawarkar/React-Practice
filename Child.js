import React from "react";
// import Parent from "./Parent";

function Child(props){
    return(
        <div className="container">
            <h2>My Name is {props.name}</h2>
            <h3>And I live in {props.add}</h3>
        </div>
        
    );
}

export default Child;