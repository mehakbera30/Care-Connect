import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Lock,
  BellRing,
} from "lucide-react";
import DoctorSidebar from "../components/DoctorSidebar";

const Settings = () => {
  const [name, setName] = useState("Dr. Sarah Wilson");
  const [email, setEmail] = useState("sarah.wilson@careconnect.com");
  const [specialization, setSpecialization] =
    useState("Cardiologist");

  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    console.log({
      name,
      email,
      specialization,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DoctorSidebar />

      <main className="ml-64">
        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Settings
            </h1>
            <p className="text-slate-500 mt-1">
              Manage your account and preferences.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-3.5 text-teal-600"
              />
              <input
                placeholder="Search..."
                className="w-64 h-12 pl-11 pr-4 bg-white border border-teal-100 rounded-xl outline-none"
              />
            </div>

            <button className="relative w-12 h-12 bg-white border border-teal-100 rounded-xl">
              <Bell size={22} className="text-slate-500 mx-auto" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </button>

            <div className="h-10 w-px bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                SW
              </div>

              <div>
                <p className="font-semibold text-slate-800">
                  Dr. Sarah Wilson
                </p>
                <p className="text-sm text-teal-600">
                  Cardiologist
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-5xl">

          {/* Profile */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-50 rounded-xl">
                <User className="text-teal-600" />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Profile Information
                </h2>

                <p className="text-sm text-slate-500">
                  Update your professional information.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Email
                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Specialization
                </label>

                <input
                  value={specialization}
                  onChange={(e) =>
                    setSpecialization(e.target.value)
                  }
                  className="w-full p-3 border border-slate-200 rounded-lg outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="mt-6 bg-teal-600 text-white px-5 py-3 rounded-lg"
            >
              Save Changes
            </button>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-teal-50 rounded-xl">
                <Lock className="text-teal-600" />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Security
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your account security.
                </p>
              </div>
            </div>

            <button className="border border-slate-300 px-5 py-3 rounded-lg text-slate-700">
              Change Password
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <BellRing className="text-teal-600" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-slate-800">
                    Notifications
                  </h2>

                  <p className="text-sm text-slate-500">
                    Receive appointment and patient updates.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setNotifications(!notifications)
                }
                className={`w-12 h-6 rounded-full ${
                  notifications
                    ? "bg-teal-600"
                    : "bg-slate-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    notifications
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Settings;