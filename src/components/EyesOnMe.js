// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function eyesFocus(){
        console.log("Good!")
    }
    function eyesBlur(){
        console.log('Hey! Eyes on me!')
    }
    return(
        <button onFocus={eyesFocus} onBlur={eyesBlur}>Eyes on me</button>
    )
}

export default EyesOnMe