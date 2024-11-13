// import React, { useState } from 'react';
import React, { useState, useRef } from 'react';


const TextToSpeechDownloader = () => {const [text, setText] = useState('');
    const [audioURL, setAudioURL] = useState(null);
    const audioChunks = useRef([]);
    const mediaRecorderRef = useRef(null);

    const handleTextToSpeech = async () => {
        // Check for browser support of media devices
        if (!navigator.mediaDevices || !window.MediaRecorder) {
            alert("Your browser does not support audio recording.");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        
        // Start recording when TTS starts
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => {
            audioChunks.current = []; // Reset chunks
            mediaRecorderRef.current.start();
        };

        // Stop recording when TTS ends
        utterance.onend = () => {
            mediaRecorderRef.current.stop();
        };

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunks.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
            setAudioURL(URL.createObjectURL(audioBlob));
        };

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="container text-center p-3">
            <h2>Text to Speech Converter</h2>
            <textarea
                className="form-control mb-3"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
                rows="4"
            />
            <button className="btn btn-primary mb-3" onClick={handleTextToSpeech}>
                Convert to Voice
            </button>
            <br />
            {audioURL && (
                <a href={audioURL} download="speech.wav" className="btn btn-success">
                    Download Voice
                </a>
            )}
        </div>
    );
};

export default TextToSpeechDownloader;