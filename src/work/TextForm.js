import React from 'react'
import { useState } from 'react';


function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText)
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container mt-3'>
                <div className="form-group">
                    <h1>Enter your Text here:</h1>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows={4}></textarea>
                </div>
                <button type="submit" onClick={speak} className="btn mt-3 btn-warning">Speak</button>
                <button type="submit" className="btn mt-3 btn-primary mx-3" onClick={handleUpClick}>UpperCase</button>
                <button type="submit" className="btn mt-3 btn-primary" onClick={handleLowClick}>LowerCase</button>
                <button type="submit" className="btn mt-3 btn-primary mx-3" onClick={handleCapitalize}>Capital</button>
                <button type="submit" className="btn mt-3 btn-danger" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3">
                <h4>Your text summary</h4>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes reqired to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}

export default TextForm