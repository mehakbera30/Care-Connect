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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Calendar = () => {
  const days = [
    30, 31, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 1, 2, 3,
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
       <Sidebar />

      {/* Main */}
      <main className="ml-64 flex-1">

        {/* Navbar */}
        <header className="h-20 bg-gradient-to-r from-teal-100 border-teal-500  to-white border-b border-teal-100 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Calendar
            </h2>

            <p className="text-sm text-slate-500">
              View your appointments and schedule.
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

          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                September 2026
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Your monthly appointment schedule
              </p>
            </div>

            <div className="flex gap-2">

              <button className="p-2 border border-slate-200 bg-white rounded-lg hover:bg-slate-50">
                <ChevronLeft size={20} />
              </button>

              <button className="px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm">
                Today
              </button>

              <button className="p-2 border border-slate-200 bg-white rounded-lg hover:bg-slate-50">
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

          {/* Calendar */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

            {/* Week Days */}
            <div className="grid grid-cols-7 border-b border-slate-200">

              {[
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
              ].map((day) => (
                <div
                  key={day}
                  className="p-4 text-center text-sm font-semibold text-slate-500"
                >
                  {day}
                </div>
              ))}

            </div>

            {/* Dates */}
            <div className="grid grid-cols-7">

              {days.map((day, index) => {

                const isToday = day === 28 && index === 29;
                const isAppointment =
                  day === 30 && index === 3;

                return (
                  <div
                    key={index}
                    className={`min-h-28 border-r border-b border-slate-200 p-3 ${
                      day === 30 || day === 31
                        ? "text-slate-300"
                        : "text-slate-700"
                    }`}
                  >

                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                        isToday
                          ? "bg-teal-600 text-white"
                          : ""
                      }`}
                    >
                      {day}
                    </div>

                    {isAppointment && (
                      <div className="mt-2 bg-teal-50 border-l-4 border-teal-500 rounded p-2">

                        <p className="text-xs font-semibold text-teal-700">
                          10:30 AM
                        </p>

                        <p className="text-xs text-slate-600 mt-1">
                          Dr. Sarah Wilson
                        </p>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          </div>

          {/* Upcoming */}
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Upcoming Appointments
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

                <p className="text-sm text-teal-600 font-medium">
                  30 September 2026 • 10:30 AM
                </p>

                <h4 className="font-semibold text-slate-800 mt-2">
                  Dr. Sarah Wilson
                </h4>

                <p className="text-sm text-slate-500">
                  Cardiology
                </p>

              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

                <p className="text-sm text-teal-600 font-medium">
                  04 October 2026 • 02:00 PM
                </p>

                <h4 className="font-semibold text-slate-800 mt-2">
                  Dr. Michael Brown
                </h4>

                <p className="text-sm text-slate-500">
                  General Physician
                </p>

              </div>

            </div>

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

export default Calendar;