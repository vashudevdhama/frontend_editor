import React from 'react';
import './navbar.css';

function Navbar({writeOutputToIframe, codeTxt}) {

    function onClickRun(){
        writeOutputToIframe(codeTxt);
    }
    function onClickDownload(){
        downloadTxtFile("download.txt", codeTxt);
    }

    function downloadTxtFile(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        
        element.style.display = 'none';
        document.body.appendChild(element);
        
        element.click();
        
        document.body.removeChild(element);
    }    

    return (    
        <nav className="navbar">
            <div className="title">Frontend <span>Editor</span></div>
            <button className="run-btn" onClick={(e)=> onClickRun(e)}>Run</button>
            <button className="download-btn" onClick={(e)=> onClickDownload(e)}>Download</button>
        </nav>
    )
}

export default Navbar
