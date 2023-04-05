import { useMutation } from '@apollo/client';
import { CForm, CFormInput, CCol, CButton, CRow, CImage } from '@coreui/react';
import React, { useCallback, FormEventHandler, useState, useContext, useEffect } from 'react'
import { USER_SIGN_IN, USER_SIGN_UP } from '../../GraphQL/mutation';
import { UserContext, LoginStatus } from "../../context/UserContext";
import Button from '../../components/Elements/Button';

import "./LoginPage.css";
import "../../css/index.css";
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

      <div className='container'>
        <CForm className="row d-flex h-100 w-100 justify-content-center align-items-center" onSubmit={(event) => {
          event.preventDefault();
          signIn();
        }}>
              {registerMode && <h2>Registration</h2>}
              {registerMode === false && <h2>Authorization</h2>}
              <CFormInput type="string" className='my-2' id="usernameInput" feedbackInvalid={errorMessage} invalid={errorMessage ? true : false} value={username} onChange={(e) => { setUsername(e.target.value) }} label="Login" />

              {registerMode && (<CFormInput type="email" className='my-2' id="emailInput" value={email} onChange={(e) => { setEmail(e.target.value) }} label="Email" />
              )}

              {
                registerMode && (<CFormInput type="string" className='my-2' id="nameInput" value={name} onChange={(e) => { setName(e.target.value) }} label="Name" />
                )
              }

              <CFormInput type="password" className='my-2' id="passwordInput" value={password} onChange={(e) => { setPassowrd(e.target.value) }} label="Password" />

              {
                registerMode && (<CFormInput type="password" className='my-2' id="passwordRepeatInput" value={repeatPassword} onChange={(e) => { setRepeatPassword(e.target.value) }} label="Password repeat" />

                )
              }

              {
                registerMode === false && (
                  <div className='btnWrapper'>
                    <Button type="submit" onClick={signIn} Value="Log in" className='w-100 my-2'>Log in</Button>
                    <Button onClick={() => { setRegisterMode(true) }} type="js" Value="Registration" className='w-100 my-2'>Registration</Button>
                  </div>
                )
              }

              {
                registerMode && (<Button type="submit" onClick={signUp} Value="Register" className='w-100 my-2'>Register</Button>

                )
              }
        </CForm>
      </div>
    </div>
  )
}

export default LoginPage