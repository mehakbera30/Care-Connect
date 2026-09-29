import React from "react";
import Sidebar from "../components/Sidebar";
import {
  LayoutDashboard,
  CalendarDays,
  MessageCircle,
  FileText,
  Pill,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  HeartPulse,
  Activity,
  Droplets,
  Thermometer,
  Clock3,
  UserRound,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= SIDEBAR ================= */}
       <Sidebar />
      {/* ================= MAIN CONTENT ================= */}

      <main className="lg:ml-64">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-teal-100  border-teal-700 px-8 backdrop-blur lg:px-8">
          

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Dashboard
            </h2>

            <p className="hidden text-sm text-slate-500 sm:block">
              Here's an overview of your health.
            </p>
          </div>


          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden items-center rounded-xl bg-slate-100 px-3 py-2 md:flex">

              <Search
                size={17}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-48 bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
              />

            </div>


            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200">

              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

            </button>


            {/* Profile */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-semibold text-teal-700">
                JD
              </div>

              <div className="hidden sm:block">

                <p className="text-sm font-semibold text-slate-800">
                  John Doe
                </p>

                <p className="text-xs text-slate-500">
                  Patient
                </p>

              </div>

            </div>

          </div>

        </header>


        {/* Dashboard */}
        <div className="p-5 sm:p-6 lg:p-8">


          {/* ================= WELCOME BANNER ================= */}

          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-500 p-6 text-white shadow-sm sm:p-8">

            <div className="relative z-10 max-w-xl">

              <p className="mb-2 text-sm text-teal-100">
                Welcome back, John 👋
              </p>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Take care of your health today.
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-6 text-teal-50">
                Keep track of your health information, monitor your
                vital signs and stay updated with your medical records.
              </p>

              <button className="mt-5 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-50">
                View Health Summary
              </button>

            </div>


            {/* Decorative Heart */}
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">

              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10">

                <HeartPulse
                  size={85}
                  strokeWidth={1.3}
                  className="text-white/80"
                />

              </div>

            </div>

          </section>


          {/* ================= VITAL CARDS ================= */}

          <section className="mt-7">

            <div className="mb-4">

              <h3 className="text-lg font-bold text-slate-800">
                Health Overview
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Your latest recorded vital signs
              </p>

            </div>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">


              {/* Hemoglobin */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <Droplets size={21} />
                  </div>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                    Normal
                  </span>

                </div>

                <p className="mt-5 text-sm text-slate-500">
                  Hemoglobin
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-2xl font-bold text-slate-800">
                    13.8
                  </h3>

                  <span className="mb-1 text-xs text-slate-400">
                    g/dL
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Last checked 18 Sep 2026
                </p>

              </div>


              {/* Blood Pressure */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <Activity size={21} />
                  </div>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                    Normal
                  </span>

                </div>

                <p className="mt-5 text-sm text-slate-500">
                  Blood Pressure
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-2xl font-bold text-slate-800">
                    120/80
                  </h3>

                  <span className="mb-1 text-xs text-slate-400">
                    mmHg
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Last checked 18 Sep 2026
                </p>

              </div>


              {/* Blood Sugar */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    <Activity size={21} />
                  </div>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                    Normal
                  </span>

                </div>

                <p className="mt-5 text-sm text-slate-500">
                  Blood Sugar
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-2xl font-bold text-slate-800">
                    98
                  </h3>

                  <span className="mb-1 text-xs text-slate-400">
                    mg/dL
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Last checked 18 Sep 2026
                </p>

              </div>


              {/* Temperature */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Thermometer size={21} />
                  </div>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                    Normal
                  </span>

                </div>

                <p className="mt-5 text-sm text-slate-500">
                  Temperature
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-2xl font-bold text-slate-800">
                    98.6
                  </h3>

                  <span className="mb-1 text-xs text-slate-400">
                    °F
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Last checked 18 Sep 2026
                </p>

              </div>

            </div>

          </section>


          {/* ================= CALENDAR + APPOINTMENT ================= */}

          <section className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-3">


            {/* Upcoming Appointment */}
            <div className="rounded-2xl border border-slate-200 bg-white xl:col-span-2">

              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <div>

                  <h3 className="font-bold text-slate-800">
                    Upcoming Appointment
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Your next scheduled consultation
                  </p>

                </div>

                <button className="text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View All
                </button>

              </div>


              <div className="p-6">

                <div className="flex flex-col justify-between gap-5 rounded-2xl bg-teal-50 p-5 sm:flex-row sm:items-center">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
                      <UserRound size={25} />
                    </div>

                    <div>

                      <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                        Tomorrow • 10:30 AM
                      </span>

                      <h4 className="mt-1 font-bold text-slate-800">
                        General Consultation
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Dr. Sarah Wilson • Cardiology
                      </p>

                    </div>

                  </div>


                  <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    View Details
                    <ChevronRight size={16} />
                  </button>

                </div>

              </div>

            </div>


            {/* Calendar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-slate-800">
                    Calendar
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    September 2026
                  </p>

                </div>

                <CalendarDays
                  size={20}
                  className="text-teal-600"
                />

              </div>


              <div className="mt-6 grid grid-cols-7 gap-y-3 text-center">

                {["S", "M", "T", "W", "T", "F", "S"].map(
                  (day, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-slate-400"
                    >
                      {day}
                    </span>
                  )
                )}


                {Array.from({ length: 30 }, (_, index) => index + 1).map(
                  (date) => (
                    <button
                      key={date}
                      className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs transition ${
                        date === 29
                          ? "bg-teal-600 font-semibold text-white"
                          : date === 30
                          ? "bg-teal-50 font-semibold text-teal-700"
                          : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                      }`}
                    >
                      {date}
                    </button>
                  )
                )}

              </div>

            </div>

          </section>


          {/* ================= REPORTS + PRESCRIPTIONS ================= */}

          <section className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-2">


            {/* Recent Reports */}
            <div className="rounded-2xl border border-slate-200 bg-white">

              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <div>

                  <h3 className="font-bold text-slate-800">
                    Recent Reports
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Your latest medical reports
                  </p>

                </div>

                <button className="text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View All
                </button>

              </div>


              <div className="divide-y divide-slate-100">

                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FileText size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        Blood Test Report
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        18 September 2026
                      </p>

                    </div>

                  </div>

                  <button className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700">
                    View
                    <ChevronRight size={15} />
                  </button>

                </div>


                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                      <FileText size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        General Health Checkup
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        12 September 2026
                      </p>

                    </div>

                  </div>

                  <button className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700">
                    View
                    <ChevronRight size={15} />
                  </button>

                </div>


                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <FileText size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        ECG Report
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        05 September 2026
                      </p>

                    </div>

                  </div>

                  <button className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700">
                    View
                    <ChevronRight size={15} />
                  </button>

                </div>

              </div>

            </div>


            {/* Prescriptions */}
            <div className="rounded-2xl border border-slate-200 bg-white">

              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <div>

                  <h3 className="font-bold text-slate-800">
                    My Prescriptions
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Your current medications
                  </p>

                </div>

                <button className="text-sm font-semibold text-teal-600 hover:text-teal-700">
                  View All
                </button>

              </div>


              <div className="divide-y divide-slate-100">

                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      <Pill size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        Cardiology Prescription
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Issued 18 September 2026
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                    Active
                  </span>

                </div>


                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Pill size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        Vitamin D Prescription
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Issued 12 September 2026
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                    Active
                  </span>

                </div>


                <div className="flex items-center justify-between px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                      <Pill size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        Antibiotic Prescription
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Issued 05 September 2026
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                    Completed
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* Last Updated */}
          <div className="mt-6 flex items-center justify-end gap-2 text-xs text-slate-400">

            <Clock3 size={14} />

            Last updated: 18 September 2026

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;