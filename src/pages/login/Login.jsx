import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  console.log(isFetching);
  console.log(error);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialApp
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              required
              ref={password}
            />
            <button className="loginBtn">
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Passoword?</span>
            <button type="submit" className="loginRegisterBtn">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
