import { useState } from "react";
import axios from "axios";
import { baseURL } from "../config/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username) {
      return toast.error("Please enter a valid username!");
    }
    if (!password) {
      return toast.error("Please enter a valid password!");
    }
    axios
      .post(`${baseURL}token/`, {
        username,
        password,
      })
      .then((response) => {
        login(response.data.access);
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data?.detail);
      });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col p-[30px] my-[100px] max-w-[500px] m-auto shadow-2xl shadow-[var(--primary-color)] rounded-2xl "
    >
      <span className="text-lg mb-[20px] text-[var(--p-color)]">
        To use Air Gear services, please login:
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
      <span className="text-sm m-[20px] text-[var(--p-color)]">
        Do not have an account? Please{" "}
        <Link to="/signup" className="text-[var(--primary-color)]">
          Sign Up here!
        </Link>
      </span>
      <span className="text-sm mt-0 mb-[20px] ml-[20px] text-[var(--p-color)]">
        Forgot your password? Please{" "}
        <Link to="/reset-password" className="text-[var(--primary-color)]">
          click here!
        </Link>
      </span>
    </form>
  );
}

export default Login;
