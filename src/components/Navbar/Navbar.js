import React from 'react';
import './navbar.css';

function Navbar({writeOutputToIframe, codeTxt}) {

    function onClickRun(e){
        console.log("run");
        writeOutputToIframe(codeTxt);
    }
    function onClickDownload(e){
        console.log("download");
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
