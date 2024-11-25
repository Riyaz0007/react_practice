import { useState } from "react"

function DataFilter(){
    const data=[{id:1,name:'apple',desc:'its a fruit'},{id:2,name:'banana',desc:'its a fruit'},{id:3,name:'grape',desc:'its a fruit'},{id:4,name:'watermelon',desc:'its a fruit'},{id:5,name:'guva',desc:'its a fruit'}]
    const[entered,setEntered]=useState('')
    const[updated,setUpdated]=useState(data)

    function handleChange(e){
        const inputValue = e.target.value;
        setEntered(inputValue)
        if(inputValue === ""){
            setUpdated(data)
        }
        else{
        const res=data.filter((value)=>value.name.includes(entered))
        setUpdated(res)
        }
    }
    return(
        <>
        <lable>Enter a value : </lable>
        <input type="text" value={entered} onChange={handleChange}/>
        {updated.map((val)=>(
            <p key={val.id}>{val.name}</p>

        ))}
        
        
        </>
    )
}
export default DataFilter;