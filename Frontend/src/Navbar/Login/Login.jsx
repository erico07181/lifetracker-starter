import * as React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
import apiClient from "../../../services/apiClient";
import { useEffect } from "react";

export default function Login({
  user,
  setUser,
  setAppState,
  setIsLoggedIn,
  isLoggedIn,
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnInputChange = (evt) => {
    if (evt.target.name === "email") {
      if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email" }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }
    setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.loginUser({
      email: form.email,
      password: form.password,
    });
    if (error) {
      setErrors((e) => ({ ...e, form: error }));
    }
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
      setIsLoggedIn(true);
      navigate("/activity");
    }

    setIsLoading(false);
  };

  if (isLoggedIn) {
    useEffect(() => {
      if (user?.email) {
        navigate("/activity");
      }
    }, [user, navigate]);
  }

  if (!isLoggedIn) {
    return (
      <div className="Login">
        <div className="card">
          <h2>Login</h2>
          {Boolean(errors.form) && <span className="error">{errors.form}</span>}
          <br></br>
          <div className="form">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="user@email.com"
                value={form.email}
                onChange={handleOnInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleOnInputChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <button
              disabled={isLoading}
              onClick={handleOnSubmit}
              className="btn"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="footer">
            <p>
              Don't have an account? Sign up <Link to="/register">here</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
