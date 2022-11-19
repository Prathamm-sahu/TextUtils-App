import React, {useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("Enter text Here");
    // text = "new text"  // Wrong Way to change the state
    // setText("new text")   // correct Way to change the state
     return (
        <>
            <h2>{props.heading}</h2>
            <form>
                <div className="mb-3">
                  <textarea id="myBox" cols="100" rows="8" value={text} onChange={handleOnChange}></textarea>  
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </form>
        </>
    )
}
