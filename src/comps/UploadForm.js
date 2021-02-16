import React from 'react'
import { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, seterror] = useState(null)
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if(selected && types.includes(selected.type)){
            setFile(selected);
            seterror('');
        }else{
            setFile(null);
            seterror('PLease select the correct file type');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="filename">{file.name}</div>}
                {file && <ProgressBar file = {file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
