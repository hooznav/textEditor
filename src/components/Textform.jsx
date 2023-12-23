import React, {useState} from 'react'
    // const [state, setState] = useState(initialState);
   // setText("b");

export default function Textform(props) {
  const[text, setText] = useState("Enter text here");
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked")
    setText(text.toUpperCase())
  }
  const handleOnChange = (event)=>{
      console.log("OnChange was clicked")
      setText(event.target.value)
  }
  const handleSpeechClick = ()=>{
    console.log("Text-to-speech was clicked")
    const val = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(val)
}
  return(
    <>

    <div className='container'>   
        <h1>{props.heading}</h1>
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="7"></textarea>    
            <button className='btn btn-primary mx-1' onClick = {handleUpClick}>Convert to Uppercase</button>     
            <button className='btn btn-primary mx-1' onClick = {handleSpeechClick}>Text to Speech</button>
            <button className='btn btn-primary mx-1' onclick = {}></button>
    </div>
    <div className="container">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text}</p>
    </div>
    </>
  )
}
