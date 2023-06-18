import React from "react";
import './ImageLinkForm.css';
import './Navigation.css';
import './Navigation.css'

const ImageLinkForm=({onChangeSearch,onButtonClick})=>{
    return(
        <div>
            <p className="f3 color2">{'Upload and Detect, More Features Soon!'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                <input onChange={onChangeSearch} className="f4 pa2 w-70 center" type={'text'}/>
                <button onClick={onButtonClick} className="w-30 grow f4 link ph3 pv2 dib black btn">Detect</button>
                </div>
            </div>
        </div>        
    );
}

export default ImageLinkForm;


 
