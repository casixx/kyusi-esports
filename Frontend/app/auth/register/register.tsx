"use client";

import Button from "../../components/Button";
import Form from 'next/form';
import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    setError('');

    if (password.length < 8) {
      e.preventDefault();
      setError('Password must be at least 8 characters long');
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setError('Passwords do not match');
      return;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url('/LoginandRegister.jpg')` }}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center bg-no-repeat"
    >
      {/* Container Box */}
      <div className="relative flex flex-col items-center justify-center gap-4 md:gap-6 text-xl md:text-2xl font-dot-gothic-16 bg-black/40 backdrop-blur-md text-white p-6 md:p-8 m-4 rounded-xl shadow-2xl w-full max-w-xs md:max-w-md border-4 border-white">

        <Form action="/api/register"
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4 drop-shadow-md font-press-start-2p">
            Create Account
          </h2>

          {/* Username Input */}
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            className="p-3 rounded text-black bg-white/90 border-2 border-white focus:outline-none focus:border-primary w-full"
          />

          {/* Email Input */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-3 rounded text-black bg-white/90 border-2 border-white focus:outline-none focus:border-primary w-full"
          />

          {/* Password Input */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded text-black bg-white/90 border-2 border-white focus:outline-none focus:border-primary w-full"
          />

          {/* Confirm Password Input */}
          <input
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update state
            className={`p-3 rounded text-black bg-white/90 border-2 w-full focus:outline-none focus:border-primary
         ${password && confirmPassword && password !== confirmPassword
                ? "border-red-500"
                : "border-white"
              }`}
          />
          {error && (

            <p className="text-red-500 bg-white/80 p-2 rounded text-sm font-bold text-center">⚠️ {error}</p>

          )}
          <div className="flex flex-col w-full gap-4 mt-4">
            <div className="flex gap-3">
              <Button label="Submit" type="submit" className="flex-1" />
              <Button
                label="Back"
                variant="outline"
                type="button"
                className="flex-1"
                onClick={() => window.history.back()}
              />
            </div>

            <div className="text-center text-sm md:text-base">
              Already have an account?{" "}
              <a href="/auth/login" className="underline hover:text-primary font-bold transition-colors">
                Login
              </a>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}