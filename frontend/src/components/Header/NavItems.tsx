import Logo from "./Logo";
import './NavItems.css'
import NavLink from '../../components/ui/NavLink';
import { CTooltip } from "@coreui/react";

import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { deleteTokens } from "../../manage-tokens";

type Props = {
    children?: React.ReactNode
}

const NavItems = ({ children }: Props) => {

    const navigate = useNavigate();

    const { userPayload, setUserDataByDispatch } = useContext(UserContext);


    return (
        <div className="NavItemsContainer">
            <Logo />

            <div className="BurgerMenu">

                <div className="Items">

                    <NavLink href="/aboutUS" active>
                        <p>About Us</p>
                    </NavLink>

                    <NavLink href="/Education" active>
                        <p>Education</p>
                    </NavLink>

                    <NavLink href="/login" active>
                        <p>Authorization</p>
                    </NavLink>

                    <p>Settings</p>

                    <button onClick={()=> {
                        setUserDataByDispatch("LOGOUT", null)
                        deleteTokens()
                        navigate("/login");
                    }

                        

                    }>Exit</button>

                </div>

                <div className="Burger"></div>
            </div>

        </div>
    );
};

export default NavItems;