// src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!emailRegex.test(form.email)) errs.email = "Invalid email address";
    if (!passwordRegex.test(form.password)) errs.password = "Password must be minimum 8 characters with letters and numbers";
    if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully!");
      // Add your signup API logic here
      navigate("/login"); // Redirect to login after successful signup
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-24">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Sign Up</h2>
      <Input label="Username" id="username" type="text" placeholder="Enter username" value={form.username} onChange={onChange} error={errors.username} />
      <Input label="Email" id="email" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} error={errors.email} />
      <Input label="Password" id="password" type="password" placeholder="Enter password" value={form.password} onChange={onChange} error={errors.password} />
      <Input label="Confirm Password" id="confirmPassword" type="password" placeholder="Re-enter password" value={form.confirmPassword} onChange={onChange} error={errors.confirmPassword} />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4">Create Account</button>
      <div className="text-center text-blue-600 text-sm">
        <button type="button" onClick={() => navigate("/login")} className="hover:underline">
          Already have an account? Sign In
        </button>
      </div>
    </form>
  );
}
