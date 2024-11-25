import { useState } from 'react';
import '../styles/dropdown.css'
function DropDown({values}){
    const[value,setValue]=useState()
    function chnageHandler(e){
        setValue(e.target.value)   
    }
    return(
        <>
        <label>
            select an fruit :
            </label>
        <select  onChange={chnageHandler} className="main-drop-down">
            {values.map((value)=>(
                <option>{value}</option>
            ))}
        </select>

        <p>selected :{value}</p>
       
        
        
        </>
    )
}
export default DropDown;