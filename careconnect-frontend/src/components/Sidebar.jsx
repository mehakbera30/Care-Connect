import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeartPulse,
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  FileText,
  Pill,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white fixed left-0 top-0 h-screen flex flex-col">

      <div className="px-6 py-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-teal-500 p-2 rounded-xl">
          <HeartPulse size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold">CareConnect</h1>
          <p className="text-xs text-slate-400">
            Healthcare Portal
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">

        <NavLink
          to="/patient/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/patient/appointments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <CalendarDays size={20} />
          Appointments
        </NavLink>

        <NavLink
          to="/patient/calendar"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <CalendarDays size={20} />
          Calendar
        </NavLink>

        <NavLink
          to="/patient/messages"
          className={({ isActive }) =>
            `flex items-center justify-between px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <div className="flex items-center gap-3">
            <MessageSquare size={20} />
            Messages
          </div>

          <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </NavLink>

        <NavLink
          to="/patient/reports"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <FileText size={20} />
          Reports
        </NavLink>

        <NavLink
          to="/patient/prescriptions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <Pill size={20} />
          Prescriptions
        </NavLink>

        <NavLink
          to="/patient/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>

      <div className="px-4 pb-6">

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          <LogOut size={20} />
          Logout
        </NavLink>

      </div>

    </aside>
  );
};

export default Sidebar;