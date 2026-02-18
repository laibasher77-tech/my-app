import React, { useState } from "react";

function Breakprac(){
    const [count, setCount]=useState(0)
 const increaseCount=()=>{
    setCount(count => count + 1)
 }
    return(
        <>
        <button className="bg-amber-300 h-7 w-8 mx-4 my-4 " 
        onClick={()=>{
            increaseCount()
            increaseCount()
            increaseCount()
        }}
        >{count}</button>

        </>
    )
}
export default Breakprac 