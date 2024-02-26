import React, { useState } from 'react';
import "../styles/LoginSignup.css";
import password_icon from "../images/password.png";
import user_icon from "../images/person.png";
import email_icon from "../images/email.png";
import Banner from "../images/banner.jpeg";
import Layout from '../../components/Layout/Layout';
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    const navigate = useNavigate(); 
    const handleSubmitPage = () => {
      navigate('/cart');
    };

    const handleSubmit = () => {
        navigate('/login');
    };

  return (
    <>
    <Layout>
    <div style={{ backgroundImage: `url(${Banner})` }}>
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline">

            </div>
        </div>
        <div className="inputs">
            {action==="Log In"?<div></div>: 
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>
            }
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: 
            <div className="forgot-password">
                Forgot Password? <span>Click Here!</span>
            </div>
        }
        <button  className='btn' onClick={handleSubmitPage} style={{ backgroundColor: "#a1eafb" }}>
            Submit
        </button>
        <div className="submit-container">
            <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleSubmit}>
                Log In
            </div>
        </div>
    </div>
    </div>
    </Layout>
    </>
  )
}

export default LoginSignup
