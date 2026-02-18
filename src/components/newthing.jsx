import React, {  useState } from 'react'

export default function Newthing() {
 const [myStyle, setStyle]=useState({
    backgroundColor: "white",
    height:"100vh"
    
 })
 const [btntext, setbtnText]=useState('Enable Dark Mode')
 
 const darktoLight = ()=>{
    if(myStyle.backgroundColor==="white"){
        setStyle({
           backgroundColor:"black",
             height:"100vh"
        })
        setbtnText("Enable White Mode")
    } else{
        setStyle({
            backgroundColor:"white",
              height:"100vh"
        })
        setbtnText("Enable Dark Mode")
    }
 }
 
  return (
    <div style={myStyle} >
      <button onClick={darktoLight} >{btntext}</button>
    </div>
  )
}
