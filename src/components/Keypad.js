// Code Keypad Component Here
import React from "react";

function Keypad(){
    function keypadChange(){
        console.log('Entering password...')
    }
    return(
        <input type='password' onChange={keypadChange} />
    )
}

export default Keypad