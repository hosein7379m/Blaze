import React, { useState, useContext } from "react";
import "../assets/css/register.css";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = (props) => {
  const navigate = useNavigate();
  /* import global context api */
  const authContext = useContext(AuthContext);
  /*  */
  const [isSignUp, setIsSignUp] = useState(true);
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  /* ohChange function for insert username and password user in hook state */
  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  /* switch function for handle conditional in login and signup form */
  const changeRegister = () => {
    setIsSignUp(!isSignUp);
  };
  /* function for submit data for login and register */
  const registerUser = (e) => {
    e.preventDefault();
    /*  */
    if (
      signUp.firstName &&
      signUp.lastName &&
      signUp.username &&
      signUp.password
    ) {
      AuthService.register(signUp).then((data) => {
        const { isAuthenticated, user, message } = data;

        if (isAuthenticated) {
          toast.success(message.msgBody);
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          localStorage.setItem("currUser", user);
          setTimeout(() => {
            navigate("/course");
          }, 1500);
        } else {
          toast.success(message.msgBody);
        }
      });
    } else if (!signUp.firstName) {
      toast.error("you should enter your first name");
    } else if (!signUp.lastName) {
      toast.error("you should enter your last name");
    } else if (!signUp.username) {
      toast.error("you should enter your username");
    } else if (!signUp.password) {
      toast.error("you should enter your password");
    }
  };
  const loginUser = (e) => {
    e.preventDefault();
    if (login.username && login.password) {
      AuthService.login(login).then((data) => {
        const { isAuthenticated, user, message } = data;
        if (isAuthenticated) {
          toast.success(message.msgBody);
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        } else {
          toast.success(message.msgBody);
        }
      });
    } else if (!login.username) {
      toast.error("you should enter your username");
    } else if (!login.password) {
      toast.error("you should enter password");
    }
  };

  return (
    <div className="register">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            fontSize: "1.3rem",
            fontWeight: "600",
          },
        }}
      />
      {/* form section */}
      <section className="form-container">
        {/* signup form */}
        <form className={`signup-form ${isSignUp ? "signupOff" : "signupOn"}`}>
          <h1 className="form-title">SignUp</h1>
          <div className="input-field fName-signUp">
            {/* <i className="fa-solid fa-user"></i> */}
            <input
              type="text"
              placeholder="First Name"
              autoComplete="off"
              spellCheck="false"
              name="firstName"
              value={signUp.firstName}
              onChange={onChangeSignUp}
            />
          </div>
          <div className="input-field lName-signUp">
            {/* <i className="fa-solid fa-user"></i> */}
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              spellCheck="false"
              name="lastName"
              value={signUp.lastName}
              onChange={onChangeSignUp}
            />
          </div>
          <div className="input-field username-signUp">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="username"
              autoComplete="off"
              spellCheck="false"
              name="username"
              value={signUp.username}
              onChange={onChangeSignUp}
            />
          </div>
          <div className="input-field password-signUp">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              spellCheck="false"
              name="password"
              value={signUp.password}
              onChange={onChangeSignUp}
            />
          </div>
          <button className="form-btn" onClick={registerUser}>
            Sign Up
          </button>

          <hr
            style={{
              backgroundColor: "#5e81f4",
              margin: ".5rem 0",
              width: "150px",
              height: ".5px",
            }}
          />
          <div className="signUp-way">
            <p>{isSignUp ? "Login with: " : "Sign up with: "}</p>
            <i className="fa-brands fa-google-plus-g"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </form>
        {/* login form */}
        <form className={`login-form ${isSignUp ? "loginOn" : "loginOff"}`}>
          <h1 className="form-title">Login</h1>
          <div className="input-field username-login">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="username"
              autoComplete="off"
              spellCheck="false"
              name="username"
              value={login.username}
              onChange={onChangeLogin}
            />
          </div>
          <div className="input-field password-login">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              spellCheck="false"
              name="password"
              value={login.password}
              onChange={onChangeLogin}
            />
          </div>
          <p className="error-text"></p>
          <button className="form-btn" onClick={loginUser}>
            Login
          </button>
          <hr
            style={{
              backgroundColor: "#5e81f4",
              margin: ".5rem 0",
              width: "150px",
              height: ".5px",
            }}
          />
          <div className="signUp-way">
            <p>{isSignUp ? "Login with " : "Sign up with "}</p>
            <i className="fa-brands fa-google-plus-g"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </form>
      </section>
      {/* switch section */}
      <section className="switch-container">
        <div className="switch">
          <div className="switch-brand">
            <h1>
              <b>Blaze</b>
            </h1>
          </div>
          <h2>The best courses with Blaze</h2>
          <h5>
            Get started using a courses to strengthen skills in the best
            possible way, grow up with Blaze
          </h5>
          <p className="switch-cta">
            {isSignUp ? "Already have account?" : "Dont have account?"}
          </p>
          <button className="switch-btn" onClick={changeRegister}>
            {isSignUp ? "Login" : "SignUp"}
          </button>
        </div>
      </section>
      {/* <OwnerInfo /> */}
    </div>
  );
};

export default Register;
