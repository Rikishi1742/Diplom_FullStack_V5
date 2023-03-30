import { CNavbar, CButton, CImage, CCollapse, CContainer, CNavbarNav, CNavItem, CTooltip,  CHeaderText } from '@coreui/react';
// import {  } from '@coreui/react/dist/components';
import React, { useContext, useState } from 'react'

import CIcon from '@coreui/icons-react';
import { cilExitToApp } from '@coreui/icons';


import { useNavigate } from "react-router-dom";
import NavbarBrand from '../components/ui/NavbarBrand';
import NavLink from '../components/ui/NavLink';
import { UserContext } from '../context/UserContext';
import { deleteTokens } from '../manage-tokens';



type Props = {
  children?: React.ReactNode
}
function AppBar({ children }: Props) {

  const navigate = useNavigate();

  const { userPayload, setUserDataByDispatch } = useContext(UserContext);

  return (
    <>
      <CNavbar expand="lg" colorScheme="dark" className="bg-dark" >
        <CContainer fluid>
          <NavbarBrand href="/" >

            <CImage rounded thumbnail src="inthemelabLogo.png" width={40} height={40} />
          </NavbarBrand>
          {/* <CNavbarToggler onClick={() => setVisible(!visible)} /> */}
          <CCollapse className="navbar-collapse">
            <CNavbarNav>
              <CNavItem>
                <NavLink href="/personalAccount" active>
                  Личный кабинет
                </NavLink>
              </CNavItem>

              <CNavItem>
                <NavLink href="/projects" active>
                  Проекты
                </NavLink>
              </CNavItem>

              <CNavItem>
                <NavLink href="/tasks" active>
                  Задачи
                </NavLink>
              </CNavItem>

              <CNavItem>
                <NavLink href="/workers" active>
                  Сотрудники
                </NavLink>
              </CNavItem>

              <CNavItem>
                <NavLink href="/kpiWorkers" active>
                  KPI по сотрудникам
                </NavLink>
              </CNavItem>

            </CNavbarNav>
          </CCollapse>
        </CContainer>

        <div className='d-flex mx-2'>
         
          <CHeaderText color='secondary' className='mx-3 text-light'>{userPayload.username}</CHeaderText>
          <CTooltip content="Выйти">
            <CButton color="secondary" size="sm" onClick={() => {

              setUserDataByDispatch("LOGOUT", null);
              deleteTokens();
              navigate("/login");

            }}><CIcon icon={cilExitToApp} /></CButton>
          </CTooltip>
        </div>

      </CNavbar>


      {children}
    </>


  )
}

export default AppBar