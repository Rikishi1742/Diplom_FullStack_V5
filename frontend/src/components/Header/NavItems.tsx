import Logo from "./Logo";
import './NavItems.css'
import NavLink from '../../components/ui/NavLink';

import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext, LoginStatus } from "../../context/UserContext";

import { deleteTokens } from "../../manage-tokens";
import BurgerMenu from "./BurgerMenu";
import Burger from "./Burger";

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

type Props = {
    children?: React.ReactNode
}

const NavItems = ({ children }: Props) => {

    const navigate = useNavigate();
    const { userPayload, loginStatus, setUserDataByDispatch,  } = useContext(UserContext);
    
    const BurgerEl = (document.getElementsByClassName("Burger") as HTMLCollectionOf<HTMLElement>)
    const BurgerMenuEl = (document.getElementsByClassName("BurgerMenu") as HTMLCollectionOf<HTMLElement>)
    const menuItemsEl = (document.getElementsByClassName("Items") as HTMLCollectionOf<HTMLElement>)
    const darkthemeEl = (document.getElementsByClassName("darktheme") as HTMLCollectionOf<HTMLElement>)

    const leaveBurgerMenu = (document.getElementsByClassName("LeaveBurgerMenu") as HTMLCollectionOf<HTMLElement>)
    
    return (
        <>
        <div className="NavItemsContainer">
            <Logo />

            <div className="BurgerMenu">
                <BurgerMenu>

                    <div className="LeaveBurgerMenu" onClick={() => {
                        
                         BurgerEl[0].style.display = "flex";
                         BurgerMenuEl[0].style.display = "none";
                         menuItemsEl[0].style.display = "none";
                         darkthemeEl[0].style.display = "none";
                        leaveBurgerMenu[0].style.display = "none"}}>
                         
                    </div>

                    <a href="/aboutUS">
                        <p>About Us</p>
                    </a>

                    <a href="/Education">
                        <p>Education</p>
                    </a>

                    {loginStatus == LoginStatus.LoggedOut &&  <a href="/login">
                        <p onClick={() => {navigate("/login");}}>Authorization</p>
                    </a>}

                    <a href="/settings">
                        <p>Settings</p>
                    </a>  

                    {loginStatus == LoginStatus.LoggedIn && <>
                        <a href="/Account" ><p>Account</p></a> 
                        <a href="/login" >
                        <p onClick={() => {setUserDataByDispatch("LOGOUT", null)
                        deleteTokens()
                        navigate("/login");}}>Exit</p>
                    </a>
                    </>
                    }
                </BurgerMenu>
                    
            </div>

            <Burger/>

        </div>
        </>
    );
};

export default NavItems;