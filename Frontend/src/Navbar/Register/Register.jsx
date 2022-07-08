import * as React from "react";
import { useState } from "react";
import "./Register.css";

export default function Register() {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });

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
  };

  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>
        <br></br>
      </div>
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

          <div className="split-input-field">
            <div className="input-field">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleOnInputChange}
              />
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

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleOnInputChange}
              />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
