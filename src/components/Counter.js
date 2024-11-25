import React, { useState } from 'react'
import '../styles/counter.css'
function Counter(){
    const[count,setCount]=useState(0);



    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    function handleReset(){
        setCount(0)
    }

    return(
        <>
        <button onClick={handleIncrement} className='inc-btn'>Increment</button>
        <button onClick={handleDecrement}className='dec-btn'>Decrement</button>
        <button onClick={handleReset} className='res-btn'>reset</button>
        <spam className='display-count'>{count}</spam>
        </>
    )

}
export default  Counter;