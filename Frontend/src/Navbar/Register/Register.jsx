import * as React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import axios from "axios";
import apiClient from "../../../services/apiClient";
import "./Register.css";
import { useEffect } from "react";
import Activity from "../../Activity/Activity";

export default function Register({
  user,
  setUser,
  setAppState,
  setIsLoggedIn,
  isLoggedIn,
  appState,
}) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.confirmPassword !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    const { data, error } = await apiClient.registerUser({
      first_name: form.first_name,
      last_name: form.last_name,
      username: form.username,
      email: form.email,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
      setIsLoggedIn(true);
      navigate("/activity");
    }

    setIsLoading(false);
  };

  const handleOnInputChange = (evt) => {
    if (evt.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword !== evt.target.value) {
        setErrors((e) => ({
          ...e,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, confirmPassword: null }));
      }
    }

    if (evt.target.name === "passwordConfirm") {
      if (form.password && form.password !== evt.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    if (evt.target.name === "email") {
      if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }));
  };

  if (!isLoggedIn) {
    return (
      <div className="Register">
        <div className="card">
          <h2>Register</h2>
          <br></br>
          <div className="form">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email"
                value={form.email}
                onChange={handleOnInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter a username"
                value={form.username}
                onChange={handleOnInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="split-input-field">
              <div className="input-field">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={handleOnInputChange}
                />
                {errors.first_name && (
                  <span className="error">{errors.first_name}</span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={handleOnInputChange}
                />
              </div>
              {errors.last_name && (
                <span className="error">{errors.last_name}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleOnInputChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="confirmPassord">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleOnInputChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
            <button
              className="btn"
              disabled={isLoading}
              onClick={handleOnSubmit}
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    useEffect(() => {
      if (user?.email) {
        navigate("/activity");
      }
    }, [user, navigate]);

    return (
      <Activity
        setAppState={setAppState}
        appState={appState}
        user={appState?.user}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
    );
  }
}
