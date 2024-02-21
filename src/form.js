import React, { useState } from 'react';
import './App.css';

export default function Form(props) {
    
    // settext("this is my text");
    const handleup = () => {
        // alert("You Have Clicked UpperCase Button");
        const a = text.toUpperCase();
        settext(a);
    }
    const handleup1 = () => {
        // alert("You Have Clicked LowerCase Button");
        const a = text.toLowerCase();
        settext(a);
    }
    const handleup2 = () => {
        // alert("You Have Clicked Clear Button");
        settext(" ");
    }
    const handleup3 = () => {
        // alert("You Have Clicked LowerCase Button");
        const a = text.split(" ").join("");
        settext(a);
    }
    const handlechange=(event)=>{
        // alert("clicked");
        settext(event.target.value);
    }
    const [text, settext] = useState(" ");
    const [mystyle,mode] = useState({
        color : 'black',
        backgoundColor : 'white',
    });
    const [mode1,changemode] = useState("Enable Dark Mode");
    const toggle = () => {
        if (mystyle.color === "white") {
            mode({
                color: 'black',
                backgroundColor: 'white',
            });
            document.body.style.backgroundColor = "white"; // Corrected here
            changemode("Enable Dark Mode");
        } else {
            mode({
                color: 'white',
                backgroundColor: 'black',
            });
            document.body.style.backgroundColor = "black"; // Corrected here
            changemode("Disable Dark Mode");
        }
    }
    

  return (
    <>
   
    <div>
        {/* <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<h3 style={mystyle}>{props.heading}</h3>
<div className="mb-3" style={mystyle}>
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handlechange}></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleup}>Convert To UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleup1}>Convert To LowerCase</button>
<button className='btn btn-primary mx-1' onClick={handleup2}>Clear Text</button>
{/* <button className='btn btn-primary mx-1' onClick={toggle}>{mode1}</button> */}
<button className='btn btn-primary mx-1' onClick={handleup3}>Remove Extra Spaces</button>

    </div>
  
    <div className='container my-2' style={mystyle}>
        <h1>
            Text Summary
        </h1>
    <p>{text.split(" ").length} words {text.length} characters</p>
    <p>This text read is {0.008* (text.split(" ").length)} Minutes</p>
    <h3>Preview</h3>
    <p>{text}</p>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggle}/>
  <label className="form-check-label" >{mode1}</label>
</div>
    </div>

    </>
  )
}
