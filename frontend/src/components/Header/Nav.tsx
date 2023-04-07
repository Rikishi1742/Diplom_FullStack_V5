import React from "react";
import NavItems from "./NavItems";

import './Nav.css';

const Nav = () => {

    return (
    <>
        <div className="darktheme"></div>
        <nav>
            <NavItems />
        </nav>
    </>
    
    );

};

export default Nav;