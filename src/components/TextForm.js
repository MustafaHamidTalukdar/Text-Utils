import React,{useState} from 'react'


export default function TextForm(props) {
    const uppercase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowercase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const capitalize =()=>{
        let newText = text.charAt(0).toUpperCase()+ text.slice(1);
        setText(newText);
    }
    const lower =()=>{
        let newText = text.charAt(0).toLowerCase()+ text.slice(1);
        setText(newText);
    }
    const clear =()=>{
        setText("");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div>
    <div className="mb-3 container my-4">
    <h1>Enter The Text To Analyze</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
      <button type="submit" className="btn btn-primary mx-1" onClick={uppercase}>UpperCase</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={lowercase}>LowerCase</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={capitalize}>Capitalize</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={lower}>Small First Letter</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={clear}>Clear Text</button>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.length} Characters, {text.split(" ").length} Words, {text.split(".").length} Sentence and {text.replace(0-9).length} Numbers</p>
        <p>You Will need {0.008 * text.split(" ").length} to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
        </div>
    )
}
