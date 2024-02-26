import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Banner from "../../Customer/images/banner.jpeg";
import "./AdminLogin.css";
import Layout from "../../components/Layout/Layout";

function AdminLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin@gmail.com",
      password: "admin@123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const navigate = useNavigate(); 
  const handleSubmitPage = () => {
    navigate('/pagecontroller');
  };

  return (
    <>
    <Layout>
    <div className="app" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="login-form">
        <div className="title"><center>Log In</center></div>
        {isSubmitted ? <div>User is successfully logged in! <br/> <br/><center><button style={{ backgroundColor: "#a1eafb" }} onClick={handleSubmitPage}>
          Dashboard
        </button></center></div> : renderForm}
      </div>
    </div>
    </Layout>
    </>
  );
}

export default AdminLogin;