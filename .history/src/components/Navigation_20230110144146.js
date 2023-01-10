import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
           <ul>
            <NavLink to="/" className={(nav)=>nav.isActive ? "nav-act"}>
            <li>accueil</li>
            </NavLink>
            <NavLink to="/about">
            <li>A propos</li>
            </NavLink>    
            </ul> 
        </div>
    );
};

export default Navigation;