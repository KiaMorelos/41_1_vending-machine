import React from 'react';
import soda from "./edge2edge-media-0KxfiWujzyY-unsplash.jpg";
import { Link } from "react-router-dom";


function Soda () {
    return (
        <div>
            <h1>Soda</h1>
            <p>        
            <Link to="/">GO BACK</Link>
            </p>
             <img src={soda}/>
        </div>
    )
}

export default Soda;