import React from 'react'
import Footer from './Footer';
import './Login.css'
const imgPath = process.env.PUBLIC_URL;

function Login() {
    return (
       
        <div className="container">
        <div className="row gx-3 section">
            <div className="col-md-6  my-auto mx-auto">
            <div className="container Sign_Up ">
                <div>
                    <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                </div>
                <form d-flex justify-content-center >
`                     <div class="mb-3">
                         <input type="email" class="form-control" id="Name" placeholder="Email or UserName or Mobile Number"/>
                    </div>
                    <div class="mb-3">
                         <input type="password" class="form-control" id="Name" placeholder="Password"/>
                    </div>
                
                       <div className="btn_google">              
                        <button type="button" class="btn btn-primary">Create Account</button>
                    
                    </div>

                </form>

               
            </div>
                {/* instagram Image */}
                <div className="container">
                    <div>
                        <button type="button" class="btn btn-light btn-account">Already Have an Account? <span>Sign In</span></button>
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
    )
}

export default Login