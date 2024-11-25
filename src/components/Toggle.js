import React, { useState } from "react";
import '../styles/toggle.css'

function Toggle(){
    const[value,setValue]=useState(false)
    function handleToggle(){
        setValue(!value)
    }
    return(
        <>
        <button className="toggle" onClick={handleToggle}>{value?'OFF':'ON'}</button>
        <div className="content-div">{value?"ON MODE":"OFF MODE"}</div>

    
        </>
    )
}
export default Toggle;