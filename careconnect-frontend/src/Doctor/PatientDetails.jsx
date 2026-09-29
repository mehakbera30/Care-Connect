import React, { useState } from "react";
import {
  ArrowLeft,
  UserRound,
  HeartPulse,
  FileText,
  Edit3,
  Save,
  Eye,
} from "lucide-react";
import DoctorSidebar from "../components/DoctorSidebar";

const PatientDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [patient, setPatient] = useState({
    name: "John Doe",
    age: 42,
    gender: "Male",
    bloodGroup: "B+",
    phone: "+91 9876543210",
    email: "johndoe@email.com",
    allergies: "Penicillin",
    condition: "Diabetes",
    bloodPressure: "130/85",
    bloodSugar: "110",
    temperature: "98.4",
    notes: "Patient is responding well to the current treatment.",
    diagnosis: "Type 2 Diabetes",
    treatment: "Continue prescribed medication and maintain a healthy diet.",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Patient:", patient);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <DoctorSidebar />

      <main className="ml-64 flex-1">

        {/* Header */}
          <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">

          <button
            onClick={() => window.history.back()}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Patient Details
            </h2>

            <p className="text-slate-500 mt-1">
              View and manage patient's medical information
            </p>
          </div>

        </div>

        {/* Patient Profile */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">

          <div className="flex justify-between items-start">

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                <UserRound size={38} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {patient.name}
                </h3>

                <p className="text-slate-500 mt-1">
                  {patient.age} years • {patient.gender}
                </p>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm">
                  {patient.condition}
                </span>
              </div>

            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Edit3 size={17} />
              {isEditing ? "Cancel" : "Edit Record"}
            </button>

          </div>

        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">

          <h3 className="text-xl font-bold text-slate-800 mb-5">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div>
              <p className="text-sm text-slate-500">Blood Group</p>
              <p className="font-semibold text-slate-800 mt-1">
                {patient.bloodGroup}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-semibold text-slate-800 mt-1">
                {patient.phone}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-semibold text-slate-800 mt-1">
                {patient.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Allergies</p>
              <p className="font-semibold text-red-600 mt-1">
                {patient.allergies}
              </p>
            </div>

          </div>

        </div>

        {/* Vitals */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">
            <HeartPulse className="text-teal-600" />
            <h3 className="text-xl font-bold text-slate-800">
              Current Vitals
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-500">
                Blood Pressure
              </p>

              {isEditing ? (
                <input
                  name="bloodPressure"
                  value={patient.bloodPressure}
                  onChange={handleChange}
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2"
                />
              ) : (
                <p className="text-xl font-bold text-slate-800 mt-2">
                  {patient.bloodPressure} mmHg
                </p>
              )}
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-500">
                Blood Sugar
              </p>

              {isEditing ? (
                <input
                  name="bloodSugar"
                  value={patient.bloodSugar}
                  onChange={handleChange}
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2"
                />
              ) : (
                <p className="text-xl font-bold text-slate-800 mt-2">
                  {patient.bloodSugar} mg/dL
                </p>
              )}
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-500">
                Temperature
              </p>

              {isEditing ? (
                <input
                  name="temperature"
                  value={patient.temperature}
                  onChange={handleChange}
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2"
                />
              ) : (
                <p className="text-xl font-bold text-slate-800 mt-2">
                  {patient.temperature} °F
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Medical Reports */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">

          <div className="flex justify-between items-center mb-5">

            <div className="flex items-center gap-2">
              <FileText className="text-teal-600" />

              <h3 className="text-xl font-bold text-slate-800">
                Medical Reports
              </h3>
            </div>

            <button className="text-teal-600 font-medium">
              View All
            </button>

          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between border border-slate-100 rounded-lg p-4">

              <div>
                <p className="font-semibold text-slate-800">
                  Blood Test Report
                </p>

                <p className="text-sm text-slate-500">
                  25 September 2026
                </p>
              </div>

              <button className="flex items-center gap-2 text-teal-600">
                <Eye size={18} />
                View
              </button>

            </div>

            <div className="flex items-center justify-between border border-slate-100 rounded-lg p-4">

              <div>
                <p className="font-semibold text-slate-800">
                  ECG Report
                </p>

                <p className="text-sm text-slate-500">
                  20 September 2026
                </p>
              </div>

              <button className="flex items-center gap-2 text-teal-600">
                <Eye size={18} />
                View
              </button>

            </div>

            <div className="flex items-center justify-between border border-slate-100 rounded-lg p-4">

              <div>
                <p className="font-semibold text-slate-800">
                  X-Ray Report
                </p>

                <p className="text-sm text-slate-500">
                  15 September 2026
                </p>
              </div>

              <button className="flex items-center gap-2 text-teal-600">
                <Eye size={18} />
                View
              </button>

            </div>

          </div>

        </div>

        {/* Diagnosis & Treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">

            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Diagnosis
            </h3>

            {isEditing ? (
              <textarea
                name="diagnosis"
                value={patient.diagnosis}
                onChange={handleChange}
                rows="4"
                className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
              />
            ) : (
              <p className="text-slate-600">
                {patient.diagnosis}
              </p>
            )}

          </div>

          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">

            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Treatment
            </h3>

            {isEditing ? (
              <textarea
                name="treatment"
                value={patient.treatment}
                onChange={handleChange}
                rows="4"
                className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
              />
            ) : (
              <p className="text-slate-600">
                {patient.treatment}
              </p>
            )}

          </div>

        </div>

        {/* Doctor Notes */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">

          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Doctor Notes
          </h3>

          {isEditing ? (
            <textarea
              name="notes"
              value={patient.notes}
              onChange={handleChange}
              rows="5"
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />
          ) : (
            <p className="text-slate-600">
              {patient.notes}
            </p>
          )}

        </div>

        {/* Save */}
        {isEditing && (
          <div className="flex justify-end">

            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
            >
              <Save size={18} />
              Save Changes
            </button>

          </div>
        )}

      </main>
    </div>
  );
};

export default PatientDetails;