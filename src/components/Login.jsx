import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { baseURL } from "../config/api";
import { saveCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginToken, loginToken, logout } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}token/`, {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        saveCookie(response.data.access);
        navigate("/dashboard");
        setLoginToken(response.data.access);
      })
      .catch((error) => {
        toast.error(error);
      });
    // navigate("/dashboard");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <span>To use Air Gear services, please login:</span>
      <label htmlFor="username">Your Username</label>
      <input
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Your Password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <span style={{ margin: "10px" }}>
        Do not have an account? please{" "}
        <Link to="/signup" style={{ color: " var(--primary-color)" }}>
          Sign Up here!
        </Link>
      </span>
    </form>
  );
}

export default Login;
