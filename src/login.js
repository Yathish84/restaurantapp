import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { auth } from './firebase';
import './login.css'

function Login() {
    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const login = (e)=>{
        e.preventDefault();   // prevent refreshing
        // firebase stuff
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            
            
            console.log(auth);
            history.push("/")
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            
                <img className="loginbg" src="/images/loginbg.jpg"></img>
                <div className="login__logo">
                    <h1>OD</h1>
                </div>
                <div className="login__container">
                    <form>
                        <h4>Name</h4>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        <h4>Email</h4>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        <h4>password</h4>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button className="btn__submit" type='submit' onClick={login}>Login</button>
                        <button className="btn__register" type="submit" onClick={register}>Register</button>
                    </form>
                </div>
            </div>
    )
}

export default Login
