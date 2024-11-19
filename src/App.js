import { useState } from 'react';
import './App.css';
// import AboutUs from './work/AboutUs';
import Navbar from './work/Navbar';
import TextForm from './work/TextForm';
// import TextToSpeechDownloader from './work/TextToSpeechDownloader'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="contanier my-3">
      <TextForm mode={mode}/>
      </div>
      {/* 
      <TextToSpeechDownloader /> 
      ,,
      <AboutUs /> */}
    </div>
  );
}

export default App;
