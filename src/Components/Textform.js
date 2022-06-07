import propTypes from 'prop-types';
import { useState } from 'react';

export default function Textform(props) {
    
    let light = {
        color : "black",
        backgroundColor : "white",
        border : "1px solid white" 
    }

    let dark = {
        color : "white",
        backgroundColor : "black",
        border : "1px solid black",
        borderRadius : "10px"
    }

    const [text , setText] = useState();
    const [mode, setMode] = useState({
        color : "black",
        backgroundColor : "white"
    });
    const [btn, setbtnText] = useState("Enable Dark Mode");
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleUpClick = () =>{
        let newtext = text.toUpperCase();  
        setText(newtext);
    }

    const handleDownClick = () =>{
        let newtext = text.toLowerCase();  
        setText(newtext);
    }
    
    const handleSpaces = () =>{
     let newtext = text.split(/[ ]+/);
     setText(newtext.join(" "));
    }

    const handleClear = ()=>{
        setText(""); 
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("text copied");
    }
    
    const  handleMode = () => {
        if (mode.color === 'white'){
            setMode(light);
            setbtnText("Enable Dark Mode");
            document.body.style.backgroundColor = "white";
        }
        else{
            setMode(dark);
            setbtnText("Disable Dark Mode");
            document.body.style.backgroundColor = "black";
        }
    }
    


return (
    <>
<div  >
<div className='container' style={mode}>
<h2>{props.heading}</h2>
<div className="mb-2">
<textarea className="form-control" onChange={handleChange} value = {text} id="myBox" rows="8"></textarea>
</div>
<button  className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
<button  className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to lowercase</button>
<button  className='btn btn-primary mx-1 my-1' onClick={handleSpaces}> Remove extra spaces</button>
<button  className='btn btn-light mx-1 my-1'   onClick={handleCopy}>Copy</button>
<button  className='btn btn-danger mx-1 my-1' onClick={handleClear}>Clear</button>
<button  className='btn btn-dark mx-1 my-1' onClick={handleMode}>{btn}</button>
</div>
<div className='container my-5' style={mode} >
<h3>Your text summary:</h3>
<p>You've written <b>{
    

    text ? 
    
    text?.split(/\s+/).filter((element)=>{return element.length!==0}).length : "0"}</b> words and <b>{text ? text?.length : "0"}</b> characters</p>
  
   
        
    
    
<h3>Preview</h3>
<p>{text ? text : "Enter something in textbox above to preview here" }</p>
</div>
</div>
</>
)
}

Textform.propTypes = {
 heading : propTypes.string.isRequired
}

