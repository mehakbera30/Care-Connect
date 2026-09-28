import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
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

          <h2 className="text-4xl font-bold text-slate-800 leading-tight mb-5">
            Your health,
            <br />
            connected.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Create your CareConnect account and manage
            your healthcare information in one secure place.
          </p>

          {/* Simple illustration */}
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

        <div className="p-8 md:p-14">

          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Join CareConnect and manage your healthcare easily.
          </p>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* Name */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                required
              />

            </div>


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

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                required
              />

            </div>


            {/* Role */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Register As
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
              >

                <option value="patient">
                  Patient
                </option>

                <option value="doctor">
                  Doctor
                </option>

              </select>

            </div>


            {/* Register Button */}

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-700 transition duration-200 shadow-sm"
            >
              Create Account
            </button>

          </form>


          {/* Login */}

          <p className="text-center text-slate-500 mt-7">

            Already have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;