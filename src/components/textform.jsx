import {useState} from "react";
import "./App.css"
import PropTypes from 'prop-types';

function Textforms(props) {
    const [text, setText]=useState(" ")
    const [num, setnum]=useState(0)
    
    const [texting , setTexting]=useState('')
    const [todo , setTodo]=useState([])
    function WhenChange(evt){
        // const uppertext=evt.value.target.toClickUp()
        setText(evt.target.value)
    }
    function ClickUp(e){
        e.preventDefault()
        const newtext=text.toUpperCase()
        setText(newtext)
        props.alerting("Text converted in upper case ","success")
    
    }
    function numChange(){
        setnum(num=>num+1)
    }
    const copyText=()=>{
      
        let text=document.getElementById("input")
        text.select()
        navigator.clipboard.writeText(text.value)
       
    }
    const clearText=()=>{
        setText(" ")
    }
    
    return (
        <>
           <div style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
            <h1 >my text</h1>
            <input className="bg-amber-500 " id="input" type="text" value={text} onChange={WhenChange} style={{backgroundColor:props.mode === 'light' ? 'white' : 'black', color:props.mode==="light" ? "black" : "white"}}/>
            <button  onClick={ClickUp}>convert text in ClickUp</button>
            <button onClick={copyText}>Copy Text</button>
            <button onClick={clearText}>clear Text</button>
  
        <p id="wantTocopy">Your age is {num}</p>
        <button onClick={()=>{
            numChange()
            numChange()
        }}> +2</button>

    
        <input type="text" value={texting} onChange={e=>setTexting(e.target.value)} style={{backgroundColor:props.mode === 'light' ? 'white' : 'black'}}/>
        <button onClick={()=>{
            setTexting('')
            setTodo([
                {text:texting},
                ...todo])
        }}>Add</button>
   
        <ul>
        {todo.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <p> Your text has {text.split(' ').length} words and {text.length} characters</p>
      <p> {0.008 * text.split(' ').length} minutes </p>
        </div>
        </>
    )
}

export default Textforms;
 