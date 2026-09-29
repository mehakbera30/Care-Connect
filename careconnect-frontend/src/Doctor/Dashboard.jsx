
import React from "react";
import {
  Search,
  Bell,
  Users,
  CalendarDays,
  Clock,
  CheckCircle,
  FileText,
} from "lucide-react";
import DoctorSidebar from "../components/DoctorSidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <DoctorSidebar />

      <main className="ml-64">

        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Doctor Dashboard
            </h1>

            <p className="text-slate-500 mt-1">
              Manage your patients and appointments.
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* Search */}
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-3.5 text-teal-600"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-12 pl-11 pr-4 bg-white border border-teal-100 rounded-xl outline-none focus:ring-2 focus:ring-teal-400 text-slate-700"
              />
            </div>

            {/* Notification */}
            <button className="relative w-12 h-12 bg-white border border-teal-100 rounded-xl flex items-center justify-center text-slate-500 hover:text-teal-600">
              <Bell size={22} />

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Divider */}
            <div className="h-10 w-px bg-slate-200"></div>

            {/* Doctor Profile */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold text-lg">
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

        {/* Content */}
        <div className="p-8">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-6 text-white mb-8">
            <h2 className="text-2xl font-bold">
              Welcome back, Dr. Sarah 👋
            </h2>

            <p className="mt-2 text-teal-50">
              Here is an overview of your patients and today's appointments.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm">
                    Total Patients
                  </p>

                  <h3 className="text-3xl font-bold text-slate-800 mt-2">
                    124
                  </h3>
                </div>

                <div className="bg-teal-50 p-3 rounded-xl">
                  <Users className="text-teal-600" size={22} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm">
                    Today's Appointments
                  </p>

                  <h3 className="text-3xl font-bold text-slate-800 mt-2">
                    8
                  </h3>
                </div>

                <div className="bg-blue-50 p-3 rounded-xl">
                  <CalendarDays className="text-blue-600" size={22} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm">
                    Pending Requests
                  </p>

                  <h3 className="text-3xl font-bold text-slate-800 mt-2">
                    3
                  </h3>
                </div>

                <div className="bg-amber-50 p-3 rounded-xl">
                  <Clock className="text-amber-600" size={22} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm">
                    Completed
                  </p>

                  <h3 className="text-3xl font-bold text-slate-800 mt-2">
                    42
                  </h3>
                </div>

                <div className="bg-green-50 p-3 rounded-xl">
                  <CheckCircle className="text-green-600" size={22} />
                </div>
              </div>
            </div>

          </div>

          {/* Today's Appointments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                Today's Appointments
              </h2>

              <button className="text-teal-600 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                    JD
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      John Doe
                    </h3>
                    <p className="text-sm text-slate-500">
                      General Consultation
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-slate-700">
                    10:30 AM
                  </p>

                  <span className="text-xs text-green-600">
                    Upcoming
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">
                    ES
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Emma Smith
                    </h3>
                    <p className="text-sm text-slate-500">
                      Follow-up
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-slate-700">
                    11:30 AM
                  </p>

                  <span className="text-xs text-green-600">
                    Upcoming
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">
                    RK
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Rahul Kumar
                    </h3>
                    <p className="text-sm text-slate-500">
                      Health Checkup
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-slate-700">
                    01:00 PM
                  </p>

                  <span className="text-xs text-green-600">
                    Upcoming
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-2 gap-6">

            {/* Recent Patients */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">

              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-slate-800">
                  Recent Patients
                </h2>

                <Users size={20} className="text-teal-600" />
              </div>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      John Doe
                    </p>
                    <p className="text-sm text-slate-500">
                      Diabetes
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    25 Sep 2026
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      Emma Smith
                    </p>
                    <p className="text-sm text-slate-500">
                      Hypertension
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    24 Sep 2026
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      Rahul Kumar
                    </p>
                    <p className="text-sm text-slate-500">
                      Fever
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    20 Sep 2026
                  </p>
                </div>

              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">

              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-slate-800">
                  Recent Reports
                </h2>

                <FileText size={20} className="text-teal-600" />
              </div>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      Blood Test Report
                    </p>
                    <p className="text-sm text-slate-500">
                      John Doe
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    25 Sep 2026
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      ECG Report
                    </p>
                    <p className="text-sm text-slate-500">
                      Emma Smith
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    24 Sep 2026
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      X-Ray Report
                    </p>
                    <p className="text-sm text-slate-500">
                      Rahul Kumar
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    20 Sep 2026
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;