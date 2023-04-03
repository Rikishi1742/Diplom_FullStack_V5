import { useMutation } from '@apollo/client';
import { CForm, CFormInput, CCol, CButton, CRow, CImage } from '@coreui/react';
import React, { useCallback, FormEventHandler, useState, useContext, useEffect } from 'react'
import { USER_SIGN_IN, USER_SIGN_UP } from '../../GraphQL/mutation';
import { UserContext, LoginStatus } from "../../context/UserContext";

import "./LoginPage.css";
import { decodeToken, saveTokens } from '../../manage-tokens';
import { useNavigate } from 'react-router-dom';

type Props = {}

function LoginPage({ }: Props) {

  const navigate = useNavigate();

  const { loginStatus, setUserDataByDispatch } = useContext(UserContext);

  useEffect(() => {
    if (loginStatus === LoginStatus.LoggedIn) {
      navigate("/");
    }
  }, [loginStatus])

  const [username, setUsername] = useState<string>();
  const [password, setPassowrd] = useState<string>();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [repeatPassword, setRepeatPassword] = useState<string>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [registerMode, setRegisterMode] = useState<boolean>(false);

  const [userSignIn] = useMutation(USER_SIGN_IN);
  const [userSignUp] = useMutation(USER_SIGN_UP);


  const signIn = useCallback(() => {

    setErrorMessage(null);

    userSignIn({
      variables: {
        userPayLoad: {
          username: username,
          password: password
        }
      },

      onCompleted: (data) => {
        saveTokens({ accessToken: data.UserSignIn.accessToken, refreshToken: data.UserSignIn.refreshToken });
        const decodedToken = decodeToken(data.UserSignIn.accessToken)
        setUserDataByDispatch("LOGIN", decodedToken);
        navigate("/");
      },

      onError: (error) => {
        setErrorMessage(error.message);
      }
    })
  }, [username, password, errorMessage]);

  const signUp = useCallback(() => {
    if (password !== repeatPassword) {
      setErrorMessage("Пароли не совпадают");
      return;
    }


    userSignUp({
      variables: {
        userRegisterData: {
          email: email,
          name: name,
          username: username,
          password: password
        }
      },

      onCompleted: (data) => {
        saveTokens({ accessToken: data.UserSignUp.accessToken, refreshToken: data.UserSignUp.refreshToken });
        const decodedToken = decodeToken(data.UserSignUp.accessToken)
        setUserDataByDispatch("LOGIN", decodedToken);
        navigate("/");
      },

      onError: (error) => {
        setErrorMessage(error.message);
      }

    })

  }, [username, email, name, password, repeatPassword]);

  return (
    <div className='loginPage'>

      <div className='w-100'>
        <div className='d-flex justify-content-center align-items-center'>
          <CImage src="inthemelabLogo.png" width={100} height={100} />
        </div>
        <CForm className="row d-flex h-100 w-100 justify-content-center align-items-center" onSubmit={(event) => {
          event.preventDefault();
          signIn();
        }}>
          <CRow className="justify-content-center w-50">
            <CCol md={6}>
              <CFormInput type="string" className='my-2' id="usernameInput" feedbackInvalid={errorMessage} invalid={errorMessage ? true : false} value={username} onChange={(e) => { setUsername(e.target.value) }} label="Логин" />

              {registerMode && (<CFormInput type="email" className='my-2' id="emailInput" value={email} onChange={(e) => { setEmail(e.target.value) }} label="Email" />
              )}

              {
                registerMode && (<CFormInput type="string" className='my-2' id="nameInput" value={name} onChange={(e) => { setName(e.target.value) }} label="Имя" />
                )
              }

              <CFormInput type="password" className='my-2' id="passwordInput" value={password} onChange={(e) => { setPassowrd(e.target.value) }} label="Пароль" />

              {
                registerMode && (<CFormInput type="password" className='my-2' id="passwordRepeatInput" value={repeatPassword} onChange={(e) => { setRepeatPassword(e.target.value) }} label="Повторите пароль" />

                )
              }

              {
                registerMode === false && (
                  <>
                    <CButton type="submit" onClick={signIn} className='w-100 my-2'>Войти</CButton>
                    <CButton onClick={() => { setRegisterMode(true) }} color="primary" variant="outline" className='w-100 my-2'>Регистрация</CButton>
                  </>
                )
              }
 
              {
                registerMode && (<CButton type="submit" onClick={signUp} className='w-100 my-2'>Зарегистрироваться</CButton>

                )
              }
              
            </CCol>
          </CRow>
        </CForm>
      </div>
    </div>
  )
}

export default LoginPage