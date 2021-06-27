import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/theme-github";

function CodeEditor({setCodeTxt, codeTxt, writeOutputToIframe}) {

    const debouncePeriod = 300; // 300ms

    function onChange(newValue) {
        setCodeTxt(newValue);        
    } 
    function onLoad(codeTxt) {
        writeOutputToIframe(codeTxt);
    }

    return (
        <div id="editor">
        <AceEditor
          mode="html"
          name="code"
          onLoad={()=>onLoad(codeTxt)}
          onChange={onChange}
          debounceChangePeriod={debouncePeriod}
          fontSize={16}
          height={'100%'}
          width={'100%'}
          highlightActiveLine={true}
          value={codeTxt}
          setOptions={{
          showLineNumbers: true,
          tabSize: 2,
          }}/>
      </div>
    )
}

export default CodeEditor
