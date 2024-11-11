import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { baseURL } from "../config/api";
import { saveCookie, getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}token/`, {
        username,
        password,
      })
      .then((response) => saveCookie(response.data.access))
      .catch((error) => console.log(error));
    navigate("/");
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
    </form>
  );
}

export default Login;
