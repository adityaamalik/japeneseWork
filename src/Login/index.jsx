import React, { useEffect, useState } from "react";
import "./index.scss";
import userPhoto from "../images/user.jpeg";
import continueImage from "../images/continue.jpeg";
import firstPic from "../images/1.jpeg";
import secondPic from "../images/2.jpeg";
import thirdPic from "../images/3.jpeg";
import microsoftLogo from "../images/microsoftLogo.jpeg";

const Login = (props) => {

  // const [username, setUsername] = useState("User");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);
  }, []);

  const exitHandler = () => {
    console.log(">>>>>>>>>");
    var fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.msFullscreenElement;

    if (!fullscreenElement) {
      console.log("Leaving full-screen mode...");
    } else {
      console.log("Entering full-screen mode...");
    }
  };

  const loginToDash = () => {
    console.log(
      "get id and passwird and pass them to below dict. i have used hardcoded data"
    );

    var formValues = {
      email: "abc@gmail.com",
      password: 1111,
    };

    if (formValues.password === 1111) {
      localStorage.setItem("isSignedIn", true);
      localStorage.setItem("email", formValues.email);
      localStorage.setItem("password", formValues.password);

      props.history.push("/dashboard");
    }
  };

  return (
    <div className="login-wrapper" id="login-wrapper">
      <div className="center">
        <div className="container">
          <img src={userPhoto} className="rounded-circle userPhoto" height="180px" width="180px"/>
          <h1 className="mt-3 microsoftFont" style={{color: "white"}}>有効期限切りました</h1>
          {/* <input type="text" value={username} readOnly={true} className="usernameField mt-3"/><br /> */}
          <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="passwordField microsoftFont mt-3"/>
          <img src={continueImage} className="buttonSubmit" onClick={loginToDash}/>

          <p className="mt-3 signinoptions microsoftFont">サポートのため050-3185-4619までご連絡ください</p>

          <div id="chat-box">
            <img src={microsoftLogo} />
            <span style={{color: "#222",
              fontSize: "30px",
              fontWeight: "600",
              marginLeft: "6px",
              position: "relative",
              top: "5px"
            }}>
                Microsoft
            </span> 
            <p style={{fontWeight: "600"}}>サポート問い合わせ先</p>
            <h4 style={{fontWeight: "600"}}>
              050-3185-4619
            </h4>
            <div class="arrow-down">
                <i class="fa fa-caret-down"></i>
            </div>
          </div>

          <img src={firstPic} className="iconImage1 rounded-circle"/>
          <img src={secondPic} className="iconImage2 rounded-circle"/>
          <img src={thirdPic} className="iconImage3 rounded-circle"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
