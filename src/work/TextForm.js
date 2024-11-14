import React, { useState } from 'react';

function TextForm(props) {
    // State for text history, current index, and spell check toggle
    const [history, setHistory] = useState(['']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSpellCheck, setIsSpellCheck] = useState(false);

    // Helper function to update the text and history
    const updateText = (newText) => {
        const newHistory = [...history.slice(0, currentIndex + 1), newText];
        setHistory(newHistory);
        setCurrentIndex(currentIndex + 1);
    };

    // Text modification handlers
    const handleUpClick = () => updateText(history[currentIndex].toUpperCase());
    const handleLowClick = () => updateText(history[currentIndex].toLowerCase());
    const handleClearClick = () => updateText('');
    const handleCapitalize = () => {
        const newText = history[currentIndex].split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        updateText(newText);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(history[currentIndex]);
    };

    const handlePasteClick = async () => {
        const text = await navigator.clipboard.readText();
        updateText(history[currentIndex] + text); // Append pasted text
    };

    const handleSpellCheckClick = () => {
        setIsSpellCheck(!isSpellCheck);
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = history[currentIndex];
        window.speechSynthesis.speak(msg);
    };

    const handleOnChange = (event) => {
        updateText(event.target.value);
    };

    // Undo and redo functions
    const undo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const redo = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <div className='container mt-3'>
                <div className="form-group">
                    <h1>Enter your Text here:</h1>
                    <textarea 
                        className='form-control' 
                        value={history[currentIndex]} 
                        onChange={handleOnChange} 
                        id="myBox" 
                        rows={8} 
                        spellCheck={isSpellCheck}
                        key={isSpellCheck} // Force re-render when spell check state changes
                    ></textarea>
                </div>
                <button type="button" onClick={speak} className="btn mt-3 btn-warning">Speak</button>
                <button type="button" className="btn mt-3 btn-primary mx-3" onClick={handleUpClick}>UpperCase</button>
                <button type="button" className="btn mt-3 btn-primary" onClick={handleLowClick}>LowerCase</button>
                <button type="button" className="btn mt-3 btn-primary mx-3" onClick={handleCapitalize}>Capital</button>
                <button type="button" className="btn mt-3 btn-danger" onClick={handleClearClick}>Clear</button>
                <button type="button" className="btn mt-3 btn-secondary mx-3" onClick={undo} disabled={currentIndex === 0}>Undo</button>
                <button type="button" className="btn mt-3 btn-secondary" onClick={redo} disabled={currentIndex === history.length - 1}>Redo</button> <br />
                <button type="button" className='btn mt-3 btn-dark' onClick={handleCopyClick}>Copy</button>
                <button type="button" className='btn mt-3 btn-dark mx-3' onClick={handlePasteClick}>Paste</button>
                <button type="button" className="btn mt-3 btn-secondary" onClick={handleSpellCheckClick}>
                    {isSpellCheck ? 'SpellCheck Enabled' : 'SpellCheck Disabled'}
                </button>
            </div>

            <div className="container my-3">
                <h4>Your text summary</h4>
                <p>{history[currentIndex].split(" ").length} words, {history[currentIndex].length} characters</p>
                <p>{0.008 * history[currentIndex].split(" ").length} Minutes required to read</p>
                <h3>Preview</h3>
                <p>{history[currentIndex]}</p>
            </div>
        </>
    );
}

export default TextForm;
