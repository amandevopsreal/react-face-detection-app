import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
import './Navigation.css'
const Logo=()=>{
    return(
        <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 h-100 "> <img className="logo" src="https://www.bbvaopenmind.com/wp-content/uploads/2017/10/reconocimiento-facial-2.gif" style={{paddingTop:'5px'}} alt="image"/> </div>
        </Tilt>
        </div>        
    );
}

export default Logo;


 
