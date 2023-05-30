import React from 'react'
const amIAbove18 = !true

function Header(){
    return <header>
        <h1>This is Header{amIAbove18 ? <p>I am above 18</p> : <p>I am small </p>}</h1>
    </header>
}

export default Header