import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    console.log({ username, password });
    axios
      .post("http://158.255.77.36/api/token/", {
        username,
        password,
      })
      .then((response) => console.log(response))
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
