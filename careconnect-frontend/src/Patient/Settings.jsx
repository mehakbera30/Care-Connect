import React from "react";
import Sidebar from "../components/Sidebar";
import {
  Search,
  Bell,
  HeartPulse,
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  FileText,
  Pill,
  Settings,
  LogOut,
  User,
  Lock,
} from "lucide-react";

const Setting = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
       <Sidebar />
      {/* Main */}
      <main className="ml-64 flex-1">

        {/* Navbar */}
        <header className="h-20 bg-gradient-to-r from-teal-50 via-white to-white border-b border-teal-100 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Settings
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account and preferences.
            </p>
          </div>

          <div className="flex items-center gap-5">

            <div className="relative hidden lg:block">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-52 bg-white border border-teal-100 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-200"
              />

            </div>

            <button className="relative w-10 h-10 flex items-center justify-center bg-white border border-teal-100 rounded-lg text-slate-500 hover:text-teal-600">
              <Bell size={21} />

              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-teal-100">

              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold">
                JD
              </div>

              <div className="hidden md:block">

                <p className="text-sm font-semibold text-slate-700">
                  John Doe
                </p>

                <p className="text-xs text-teal-600">
                  Patient
                </p>

              </div>

            </div>

          </div>
        </header>

        {/* Content */}
        <div className="p-8">

          {/* Profile */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                <User size={28} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Personal Information
                </h3>

                <p className="text-sm text-slate-500">
                  Update your basic account information.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="text-sm text-slate-600">
                  Full Name
                </label>

                <input
                  type="text"
                  value="John Doe"
                  readOnly
                  className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">
                  Email
                </label>

                <input
                  type="email"
                  value="john@example.com"
                  readOnly
                  className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none"
                />
              </div>

            </div>

            <button className="mt-5 px-5 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">
              Save Changes
            </button>

          </div>

          {/* Security */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mt-6">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                <Lock size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Security
                </h3>

                <p className="text-sm text-slate-500">
                  Manage your password and account security.
                </p>
              </div>

            </div>

            <button className="px-5 py-2.5 border border-teal-200 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50">
              Change Password
            </button>

          </div>

        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active, badge }) => {
  return (
    <button
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
        active
          ? "bg-teal-600 text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}

        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      {badge && (
        <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

export default Setting;