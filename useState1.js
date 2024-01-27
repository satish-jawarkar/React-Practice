import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count++);
        console.log("Incrementing");
    }

    return(
        <>
        <h3> Here's an basic counter using useState </h3>
        <h3>Initially Count is {count} </h3>
        <button onClick={increment}>Click Me </button>
        </>

    );
}

export default Counter;