import React, {useState} from "react";

function Custom(props){

    const [counter, setCounter] = useState(0)
    function increase(){
        setCounter(oldCounterValue => oldCounterValue+1)
    }
    function decrease(){
        setCounter(oldCounterValue => oldCounterValue -1)
    }

    return <div>
        <h1>Counter : {counter}</h1>
        <button onClick={increase}>Increase the Counter</button>
        <button onClick={decrease}>Decrease the Counter</button>
    </div>
}
export default Custom