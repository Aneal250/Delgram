import React from 'react'
import Footer from './Footer';
import './SignUp.css'
const imgPath = process.env.PUBLIC_URL;

function SignUp() {
    return (
        <div className="container">
            <div className="row gx-3 section">
                <div className="col-md-6 ">
                <div className="container Sign_Up ">
                    <div>
                        <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                    </div>
                    <form >
  `                     <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Username"/>
                        </div>
                        <div class="mb-3">
                        <div class="row  align-items-center">
                            <div class="col-6">
                                <input type="text" class="form-control" id="Name" placeholder="Mobile Number" />
                            </div>
                            <div className="col-6">
                                <select id="Stack" class="form-select">
                                    <option>FrontEnd</option>
                                    <option>Backend</option>
                                    <option>Andriod</option>
                                    <option>UI/UX</option>
                                </select>
                            </div>
                            {/* <div class="col-6">
                                <input type="text" class="form-control" id="Name" placeholder="Stack" />
                             </div> */}
                        </div>
                        
                        </div>

                        <div className="btn_google">

                            <div class="mb-3">
                                <input type="password" class="form-control" id="Name" placeholder="Password"/>
                            </div>
                       
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

export default SignUp
