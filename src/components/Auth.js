import React from "react";
import { useDispatch } from "react-redux";
import useInputHook from "../hooks/useInputHook";
import { login, logout } from "../store/auth-slice";
import "./Auth.css";

const Auth = () => {
  const [pass, setPass] = useInputHook();
  const [username, setLogin] = useInputHook();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ pass, username }));
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleLogin}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" onChange={(e) => setLogin(e)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPass(e)}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
