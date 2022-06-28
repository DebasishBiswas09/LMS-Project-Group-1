import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter,Routes,Link,Route,useNavigate } from "react-router-dom";
import "./my_css.css";


function Adminlogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  // User Login info
  const database = [
    {
      username: "admin",
      password: "pass1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
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
        navigate("/admin");
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
          <label>
            <b> Username </b>
          </label>
          <input class="field" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>
            <b> Password </b>
          </label>
          <input class="field" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="mylogin">
      <div className="login-form">
        <div className="title" style={{color:"white"}}>Admin Sign In</div>
        {isSubmitted ? alert("Admin Logged in Successfully") : renderForm}
      </div>
      <div>
        <h4>
          <Link to="/home">
            <button classNmae="btn btn-success">Back</button>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Adminlogin;