// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }
    setError("");
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Password reset email sent!");
      // Add password reset API logic here
      navigate("/login"); // Redirect back to login after reset request
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-40">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Forgot Password</h2>
      <Input label="Email" id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4">Reset Password</button>
      <div className="text-center text-blue-600 text-sm">
        <button type="button" onClick={() => navigate("/login")} className="hover:underline">
          Back to Login
        </button>
      </div>
    </form>
  );
}
