import React, {useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick = (event) => {
        event.preventDefault();
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = (event) => {
        event.preventDefault();
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }

    const replaceAllOccurence = (event) => {
        event.preventDefault();
        let word1 = prompt("Enter word to be replace")
        let word2 = prompt("Enter word to replace with")
        let t = new RegExp(`${word1}`, "g")
        let newtext = text.replace(t, word2)
        setText(newtext)
    }

    const handleCopy = (event) => {
        event.preventDefault();
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange = (event) => {
        console.log("On change");
        event.preventDefault();
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
                  <textarea id="myBox" cols="100" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?'#072039':'white', color: props.mode==="dark"?"white":"#072039"}}></textarea>  
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={replaceAllOccurence}>Replace all occurence</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>  
                <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
            </form>

            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length -1} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something in the text box to Preview over here"}</p>
            </div>
        </>
    )
}
