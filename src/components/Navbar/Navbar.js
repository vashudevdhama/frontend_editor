import React from 'react';
import './navbar.css';

function Navbar({writeOutputToIframe, codeTxt, theme, setTheme}) {

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

    function onChangeThemeChange(){
        if(theme === 'tomorrow'){
            setTheme('tomorrow_night')
        } else if(theme === 'tomorrow_night'){
            setTheme('tomorrow');
        }
    }

    return (    
        <nav className="navbar">
            <div className="title">Frontend <span>Editor</span></div>
            <button className="run-btn" onClick={onClickRun}>Run</button>
            <button className="download-btn" onClick={onClickDownload}>Download</button>
            <div className="theme-check">
                <label htmlFor="theme">Dark: </label>
                <input type="checkbox" name="theme" id="theme" onChange={onChangeThemeChange}/>
            </div>
        </nav>
    )
}

export default Navbar
