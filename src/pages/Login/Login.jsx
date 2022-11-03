import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebaseConfiguration";
import { signInWithPopup } from "firebase/auth";
import './login.css';

const Login = ({setIsAuth}) => {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((results) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/');
        })
    }
  return (
    <div className='loginPage'>
        <h3>
            Log in
        </h3>
        <button className='loginButton'onClick={signInWithGoogle}>Log in &gt;</button>
    </div>
  )
}

export default Login