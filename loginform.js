import react from "react";
import "./loginform.css"

const LoginForm = () => {

    return(
            <div className="login">
            <h1>login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>




            <div className="login-btn">Login</div> 
            <div className="signup-btn">Signup</div>
           
           
           
            <p>Or Login using:</p>
            <div className="alt-login">
            // icons

            </div>
           
            <p>Or Sign up using:</p>
            <div className="alt-signup">
              //icons

            </div>


        </div>
        
        
    )
}

export default LoginForm 