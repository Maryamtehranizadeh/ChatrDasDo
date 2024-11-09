import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { baseURL } from "../config/api";

const setCookie = (token) => (document.cookie = `${token}; max-age=1*24*60*60`);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}token/`, {
        username,
        password,
      })
      .then((response) => setCookie(response.data.access))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>Please Login</p>
      <span>
        To use Air Gear services, enter your phone number, you will receive a
        verification code.
      </span>
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
