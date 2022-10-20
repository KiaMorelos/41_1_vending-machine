import React from 'react';
import chips from "./jeff-siepman-7cRBG4nQtKs-unsplash.jpg";
import { Link } from "react-router-dom";


function Chips () {

    return(
        <div>
            <h1>Chips</h1>
            <p>        
            <Link to="/">GO BACK</Link>
            </p>
            <img src={chips}/>
        </div>
    )
}

export default Chips;