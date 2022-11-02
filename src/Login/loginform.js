import "./loginform.css"
import React, { useState } from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('')
    return(
            <div className="login">
                <div className="loginForm">
                <h1>Hello There!</h1>
                <h3>Login Or Sign UP. Connect to your peers.</h3>

                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder = "Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="login-btn"> <button>Log in</button></div> 
                <div className="row"><div className="divider"></div><span>OR</span><div className="divider"></div></div>
                <div className="login-btn "> <button className="alt-btn">Sign in with Google</button></div> 
                <div className="login-btn"> <button>Sign in with Google</button></div> 

                <a href="#" className="forgotLink">Forgot Password</a>

                <h3 className="signUp">Don't have an account <a href="#">Sign up</a></h3>

                </div>
            </div>
        
        
    )
}

export default LoginForm 