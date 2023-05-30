import React from "react";

console.log("hello" && "sayyam")
let age = 20

function Custom(props){

    function button_click_func(){
        console.log("I was Pressed")
    }

    return <div>
        <h1>Hello There</h1>
        <button onClick={button_click_func}> Click Me </button>
        {age > 18 ? <p>Which may be visible</p> : null}
    </div>
}

export default Custom