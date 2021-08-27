import React from 'react'
import {
    BrowserRouter as Router, Switch, Route,
    Link
  } from "react-router-dom";  
import Footer from '../Pages/Footer';
import './Login.css'
const imgPath = process.env.PUBLIC_URL;

function Login(props) {

        const { username, setUserName, password, setPassword, HandleLogin } = props
    return (
        <>
       <Router>
        <div className="container">
        <div className="row gx-3 section">
            <div className="col-md-6  my-auto mx-auto">
            <div className="container Sign_Up ">
                <div>
                    <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                </div>
                <form d-flex justify-content-center >
`                     <div class="mb-3">
                         <input type="email" 
                         class="form-control" id="Name" 
                         placeholder="Email or UserName or Mobile Number"
                         value={username}
                         onChange={(e) =>  setUserName(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                         <input type="password" 
                         class="form-control" id="Name" 
                         placeholder="Password"
                         value={password}
                         onChange={(e) =>  setPassword(e.target.value)}
                         /> 
                    </div>
                
                       <div className="btn_google">              
                        <button type="button" class="btn btn-primary" onClick={HandleLogin}>Login</button>
                    
                    </div>

                </form>

               
            </div>
                {/* instagram Image */}
                <div className="container">
                    <div>
                    <Link to="/SignUp">
                        <button type="button" class="btn btn-light btn-account">Already Have an Account? <span>Sign In</span></button>
                    </Link>
               
           
                    </div>

                    <div>
                       <a href="#">Get App</a>
                    </div>
                    <div>
                        <img src={`${imgPath}/img/google_play.png`} alt="SignUP" className="google_img"/>
                    </div>

                </div>
            </div>

            <div className="col-md-6">
            {/* image Column */}
                <div className="col-md-6">
                    <img className="signup_img" src={`${imgPath}/img/SignUp.png`} alt="SignUP"/>
                </div>
            </div>
        </div>
        
        <Footer/>
       
    </div>
    </Router>
   </> 
    )
}

export default Login
