import React, { useState } from "react";
import {
  Search,
  Bell,
  CalendarDays,
  Check,
  X,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";

const Appointments = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientId: 1,
      patient: "John Doe",
      type: "General Consultation",
      date: "30 Sep 2026",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patientId: 2,
      patient: "Emma Smith",
      type: "Follow-up",
      date: "30 Sep 2026",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      patientId: 3,
      patient: "Rahul Kumar",
      type: "Health Checkup",
      date: "30 Sep 2026",
      time: "01:00 PM",
      status: "Confirmed",
    },
    {
      id: 4,
      patientId: 4,
      patient: "Sophia Williams",
      type: "Consultation",
      date: "01 Oct 2026",
      time: "10:00 AM",
      status: "Completed",
    },
  ]);

  const updateStatus = (id, status) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DoctorSidebar />

      <main className="ml-64">
        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Appointments
            </h1>
            <p className="text-slate-500 mt-1">
              Manage your patient appointments.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-3.5 text-teal-600"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-12 pl-11 pr-4 bg-white border border-teal-100 rounded-xl outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button className="relative w-12 h-12 bg-white border border-teal-100 rounded-xl flex items-center justify-center">
              <Bell size={22} className="text-slate-500" />
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

        <div className="p-8">
          {/* Summary */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-slate-500">Today's Appointments</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">3</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-slate-500">Pending Requests</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">1</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-slate-500">Completed</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">1</h2>
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="text-teal-600" />
              <h2 className="text-xl font-semibold text-slate-800">
                All Appointments
              </h2>
            </div>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                      {appointment.patient
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {appointment.patient}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {appointment.type}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-medium text-slate-700">
                      {appointment.date}
                    </p>
                    <p className="text-sm text-slate-500">
                      {appointment.time}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : appointment.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {appointment.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {appointment.status === "Pending" && (
                      <>
                        <button
                          onClick={() =>
                            updateStatus(appointment.id, "Confirmed")
                          }
                          className="p-2 bg-green-100 text-green-600 rounded-lg"
                        >
                          <Check size={18} />
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(appointment.id, "Rejected")
                          }
                          className="p-2 bg-red-100 text-red-600 rounded-lg"
                        >
                          <X size={18} />
                        </button>
                      </>
                    )}

                    {appointment.status === "Confirmed" && (
                      <button
                        onClick={() =>
                          updateStatus(appointment.id, "Completed")
                        }
                        className="px-3 py-2 bg-teal-600 text-white rounded-lg text-sm"
                      >
                        Complete
                      </button>
                    )}

                    <button
                      onClick={() =>
                        navigate(`/doctor/patients/${appointment.patientId}`)
                      }
                      className="p-2 bg-slate-200 text-slate-600 rounded-lg"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;