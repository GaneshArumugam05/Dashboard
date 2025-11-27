// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!emailRegex.test(form.email)) errs.email = "Invalid email address";
    if (!passwordRegex.test(form.password)) errs.password = "Password must be minimum 8 characters with letters and numbers";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // TODO: Add backend login/auth logic here
      alert("Logged in successfully!");
      onLoginSuccess(); // Update auth state in App
      navigate("/dashboard"); // Navigate to dashboard page
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-40">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h2>
      <Input label="Email" id="email" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} error={errors.email} />
      <Input label="Password" id="password" type="password" placeholder="Enter password" value={form.password} onChange={onChange} error={errors.password} />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4">Sign In</button>
      <div className="flex justify-between text-blue-600 text-sm">
        <button type="button" onClick={() => navigate("/forgot-password")} className="hover:underline">Forgot Password?</button>
        <button type="button" onClick={() => navigate("/signup")} className="hover:underline">Create Account</button>
      </div>
    </form>
  );
}
