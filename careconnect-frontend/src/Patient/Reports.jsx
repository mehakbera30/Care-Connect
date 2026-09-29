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
  Download,
  Eye,
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      name: "Blood Test Report",
      doctor: "Dr. Sarah Wilson",
      date: "18 Sep 2026",
      type: "Blood Test",
      status: "Available",
    },
    {
      name: "General Health Checkup",
      doctor: "Dr. Michael Brown",
      date: "12 Sep 2026",
      type: "Health Checkup",
      status: "Available",
    },
    {
      name: "ECG Report",
      doctor: "Dr. Emily Davis",
      date: "05 Sep 2026",
      type: "ECG",
      status: "Available",
    },
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
              Reports
            </h2>

            <p className="text-sm text-slate-500">
              View and manage your medical reports.
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

          {/* Heading */}
          <div className="mb-7">

            <h3 className="text-xl font-bold text-slate-800">
              Medical Reports
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Access your recent medical test reports and health records.
            </p>

          </div>

          {/* Reports */}
          <div className="space-y-4">

            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                      <FileText size={24} />
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-800">
                        {report.name}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        {report.doctor} • {report.date}
                      </p>

                    </div>

                  </div>

                  <div className="hidden md:block text-sm text-slate-500">
                    {report.type}
                  </div>

                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    {report.status}
                  </span>

                  <div className="flex gap-2">

                    <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:text-teal-600 hover:border-teal-200">
                      <Eye size={18} />
                    </button>

                    <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:text-teal-600 hover:border-teal-200">
                      <Download size={18} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Empty / Info Section */}
          <div className="mt-8 bg-teal-50 border border-teal-100 rounded-xl p-5">

            <div className="flex items-center gap-3">

              <FileText className="text-teal-600" size={22} />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Keep your medical records organized
                </h4>

                <p className="text-sm text-slate-600 mt-1">
                  Your reports will appear here after they are uploaded by your healthcare provider.
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

export default Reports;