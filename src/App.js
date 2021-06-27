import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CodeEditor from './components/CodeEditor/CodeEditor';

import './App.css';

function App() {
  const initialCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo doc</title>

    <!-- css styles -->
    <style>
      h1{
        color: blue;
      }
    </style>
  </head>

  <body>
    <h1>Hi There</h1>
    <a href="https://vashudev.netlify.app" target="_blank">My Portfolio</a>

    <!-- javascript -->
    <script>
      console.log("hi")
    </script>

  </body>
</html>`;

  const [codeTxt, setCodeTxt] = React.useState(initialCode);
  const [theme, setTheme] = React.useState('tomorrow');

  function writeOutputToIframe(newValue){
    const idoc = document.getElementById('iframe').contentWindow.document;
    idoc.open();
    idoc.write(newValue);
    idoc.close();
  }


  return (
    <div className="App">
      <Navbar writeOutputToIframe={writeOutputToIframe} codeTxt={codeTxt} theme={theme} setTheme={setTheme}/>
      <main className="container">
        <CodeEditor codeTxt={codeTxt} setCodeTxt={setCodeTxt} writeOutputToIframe={writeOutputToIframe} theme={theme}/>
        <iframe id="iframe" frameBorder="0" title="output"></iframe>
      </main>
    </div>
  );
}

export default App;