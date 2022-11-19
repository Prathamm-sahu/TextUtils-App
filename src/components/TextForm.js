import React, {useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    // text = "new text"  // Wrong Way to change the state
    // setText("new text")   // correct Way to change the state
     return (
        <>
            <h2>{props.heading}</h2>
            <form>
                <div className="mb-3">
                  <textarea id="myBox" cols="100" rows="8" value={text} onChange={handleOnChange}></textarea>  
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </form>

            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length -1} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
