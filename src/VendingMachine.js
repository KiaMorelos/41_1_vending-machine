import React from 'react'
import { NavLink } from "react-router-dom";
function VendingMachine() {
    return (
        <nav>
            <NavLink to="/candy">Candy</NavLink>
            <NavLink to="/chips">Chips</NavLink>
            <NavLink to="/soda">Soda</NavLink>
        </nav>
    )
}

export default VendingMachine;