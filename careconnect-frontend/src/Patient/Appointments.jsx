import React, { useState } from "react";
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
  Plus,
  Clock,
  MapPin,
  X,
  UserRound,
} from "lucide-react";

const Appointments = () => {
  const [showBooking, setShowBooking] = useState(false);

  const upcomingAppointments = [
    {
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiology",
      date: "30 Sep 2026",
      time: "10:30 AM",
      location: "CareConnect Clinic",
    },
    {
      doctor: "Dr. Michael Brown",
      specialty: "General Physician",
      date: "04 Oct 2026",
      time: "02:00 PM",
      location: "CareConnect Clinic",
    },
  ];

  const pastAppointments = [
    {
      doctor: "Dr. Emily Davis",
      date: "18 Sep 2026",
    },
    {
      doctor: "Dr. James Wilson",
      date: "10 Sep 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
       <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1">

        {/* Professional Navbar */}
        <header className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Appointments
            </h2>

            <p className="text-sm text-slate-500">
              Manage your upcoming and past appointments.
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* Search */}
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

            {/* Notification */}
            <button className="relative w-10 h-10 flex items-center justify-center bg-white border border-teal-100 rounded-lg text-slate-500 hover:text-teal-600">
              <Bell size={21} />

              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
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

        {/* Page Content */}
        <div className="p-8">

          {/* Title + Button */}
          <div className="flex items-center justify-between mb-7">

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                My Appointments
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                View and manage your doctor appointments.
              </p>
            </div>

            <button
              onClick={() => setShowBooking(true)}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg font-medium transition"
            >
              <Plus size={19} />
              Book Appointment
            </button>

          </div>

          {/* Upcoming Appointments */}
          <section>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              Upcoming Appointments
            </h4>

            <div className="space-y-4">

              {upcomingAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

                    {/* Doctor */}
                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <UserRound size={28} />
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-slate-800">
                          {appointment.doctor}
                        </h5>

                        <p className="text-sm text-slate-500">
                          {appointment.specialty}
                        </p>
                      </div>

                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-5 text-sm text-slate-600">

                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={17}
                          className="text-teal-600"
                        />
                        {appointment.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock
                          size={17}
                          className="text-teal-600"
                        />
                        {appointment.time}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          className="text-teal-600"
                        />
                        {appointment.location}
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">

                      <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                        View Details
                      </button>

                      <button className="px-4 py-2 border border-red-200 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50">
                        Cancel
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* Past Appointments */}
          <section className="mt-10">

            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              Past Appointments
            </h4>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

              {pastAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-6 py-5 ${
                    index !== pastAppointments.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <UserRound size={21} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-800">
                        {appointment.doctor}
                      </p>

                      <p className="text-sm text-slate-500">
                        {appointment.date}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Completed
                  </div>

                </div>
              ))}

            </div>
          </section>

        </div>
      </main>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">

            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Book Appointment
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Schedule an appointment with your doctor.
                </p>
              </div>

              <button
                onClick={() => setShowBooking(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={22} />
              </button>

            </div>

            <form className="p-6 space-y-5">

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Specialization
                </label>

                <select className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Cardiology</option>
                  <option>General Physician</option>
                  <option>Dermatology</option>
                  <option>Neurology</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Doctor
                </label>

                <select className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Dr. Sarah Wilson</option>
                  <option>Dr. Michael Brown</option>
                  <option>Dr. Emily Davis</option>
                  <option>Dr. James Wilson</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Date
                </label>

                <input
                  type="date"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Time
                </label>

                <select className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500">
                  <option>10:30 AM</option>
                  <option>11:30 AM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Reason for Visit
                </label>

                <textarea
                  rows="3"
                  placeholder="Describe the reason for your visit..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="px-5 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium"
                >
                  Book Appointment
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
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
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && (
        <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

export default Appointments;