import React from 'react';
import candy from "./arturo-esparza-Ky4q3IbRCLk-unsplash.jpg";
import { Link } from "react-router-dom";

function Candy () {
    return (
        <div>
        <h1>Candy</h1>
        <p>        
            <Link to="/">GO BACK</Link>
        </p>
         <img src={candy}/>
    </div>
    )
}

export default Candy;