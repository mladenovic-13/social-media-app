import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form onSubmit={handleSubmit} className="loginBox">
            <input
              ref={username}
              placeholder="Username"
              className="loginInput"
              type="text"
              required
            />
            <input
              ref={email}
              placeholder="Email"
              className="loginInput"
              type="email"
              required
            />
            <input
              ref={password}
              placeholder="Password"
              className="loginInput"
              type="password"
              required
            />
            <input
              ref={passwordAgain}
              placeholder="Password again"
              className="loginInput"
              type="password"
              required
            />
            <button className="loginBtn">Sign Up</button>
            <button type="submit" className="loginRegisterBtn">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
