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
  Clock,
} from "lucide-react";

const Prescriptions = () => {
  const prescriptions = [
    {
      medicine: "Atorvastatin 10 mg",
      doctor: "Dr. Sarah Wilson",
      dosage: "1 tablet once daily",
      duration: "30 days",
      date: "18 Sep 2026",
      status: "Active",
    },
    {
      medicine: "Vitamin D3 60K",
      doctor: "Dr. Michael Brown",
      dosage: "1 tablet once a week",
      duration: "8 weeks",
      date: "12 Sep 2026",
      status: "Active",
    },
    {
      medicine: "Azithromycin 500 mg",
      doctor: "Dr. Emily Davis",
      dosage: "1 tablet once daily",
      duration: "5 days",
      date: "05 Sep 2026",
      status: "Completed",
    },
  ];

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
              Prescriptions
            </h2>

            <p className="text-sm text-slate-500">
              View your current and previous prescriptions.
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

          <div className="mb-7">
            <h3 className="text-xl font-bold text-slate-800">
              My Prescriptions
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Keep track of your medicines and prescribed treatments.
            </p>
          </div>

          {/* Prescription List */}
          <div className="space-y-4">

            {prescriptions.map((prescription, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                      <Pill size={24} />
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-800">
                        {prescription.medicine}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Prescribed by {prescription.doctor}
                      </p>

                    </div>

                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      prescription.status === "Active"
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {prescription.status}
                  </span>

                </div>

                <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-slate-100">

                  <div>
                    <p className="text-xs text-slate-400">
                      Dosage
                    </p>

                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {prescription.dosage}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Duration
                    </p>

                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {prescription.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Prescribed On
                    </p>

                    <p className="text-sm font-medium text-slate-700 mt-1 flex items-center gap-1">
                      <Clock size={14} />
                      {prescription.date}
                    </p>
                  </div>

                </div>

              </div>
            ))}

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

export default Prescriptions;