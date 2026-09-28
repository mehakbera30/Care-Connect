import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  // Store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login form
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* ================= LEFT SECTION ================= */}
        <div className="bg-teal-50 p-10 md:p-14 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">

            <div className="w-11 h-11 bg-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                +
              </span>
            </div>

            <h1 className="text-2xl font-bold text-teal-700">
              CareConnect
            </h1>

          </div>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-slate-800 leading-tight mb-5">
            Your health,
            <br />
            connected.
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Manage your medical records, appointments and
            healthcare information in one secure place.
          </p>

          {/* Healthcare Illustration */}
          <div className="mt-10 flex justify-center">

            <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center shadow-sm">

              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center">

                <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center">

                  <span className="text-white text-5xl font-light">
                    +
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SECTION ================= */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-800">
            Welcome Back
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Login to access your CareConnect account.
          </p>


          {/* ================= LOGIN FORM ================= */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                required
              />

            </div>


            {/* Password */}
            <div>

              <div className="flex justify-between items-center mb-2">

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-teal-600 font-medium hover:text-teal-700"
                >
                  Forgot Password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                required
              />

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-700 transition duration-200 shadow-sm"
            >
              Login
            </button>

          </form>


          {/* Register */}
          <p className="text-center text-slate-500 mt-7">

            Don't have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              Create Account
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;