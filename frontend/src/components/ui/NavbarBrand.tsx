import React from 'react'

import { CNavbarBrand } from '@coreui/react';


import { useNavigate } from "react-router-dom";


type Props = {
    href: string
    children?: React.ReactNode
}

function NavbarBrand({ children, href }: Props) {

    const navigate = useNavigate();

    return (
        <CNavbarBrand href={href} onClick={(e) => {
            e.preventDefault();
            navigate(href);
        }}>
            {children}
        </CNavbarBrand>
    )
}

export default NavbarBrand