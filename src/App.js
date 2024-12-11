import { useState } from 'react';
import './App.css';
import About from './work/About';
import Navbar from './work/Navbar';
import TextForm from './work/TextForm';
// import TextToSpeechDownloader from './work/TextToSpeechDownloader';
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch in react-router-dom v6
  Route, // Use Route instead of Router for defining paths
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = "TextUtils - Dark Mode";

      // Uncomment these lines to change the title periodically for promotion
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 5000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF';
      document.title = "TextUtils - Light Mode";

      // Uncomment these lines to change the title periodically for promotion
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils - Light Mode";
      // }, 5000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            {/* Define the About page route */}
            <Route exact path="/about" element={<About />} />
            {/* Define the TextForm page as the default route */}
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
        {/* Uncomment if needed */}
        {/* <TextToSpeechDownloader /> */}
      </Router>
    </>
  );
}

export default App;
