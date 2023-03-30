import React from 'react'

import { CNavLink } from '@coreui/react';

import "./NavLink.css";

import { useNavigate } from "react-router-dom";

type Props = {
    href: string,
    active: boolean,
    children?: React.ReactNode
}

function NavLink({ href, active, children }: Props) {

    const navigate = useNavigate();

    return (
        <CNavLink href={href} active={active} className="navLink" onClick={(e) => {
            e.preventDefault();
            navigate(href);
        }} >
            {children}
        </CNavLink>
    )
}

export default NavLink