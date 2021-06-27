import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import OutputIframe from './components/OutputIframe/OutputIframe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CodeEditor />
      <OutputIframe />
    </div>
  );
}

export default App;
