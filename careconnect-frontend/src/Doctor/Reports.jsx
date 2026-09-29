// src/Doctor/Reports.jsx

import React, { useState } from "react";
import {
  Search,
  Bell,
  FileText,
  Eye,
  Edit,
  Save,
} from "lucide-react";
import DoctorSidebar from "../components/DoctorSidebar";

const Reports = () => {
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [reports, setReports] = useState([
    {
      id: 1,
      patient: "John Doe",
      patientId: 1,
      report: "Blood Test Report",
      date: "25 Sep 2026",
      type: "Blood Test",
      status: "Reviewed",
      findings: "Blood sugar level is slightly elevated.",
    },
    {
      id: 2,
      patient: "Emma Smith",
      patientId: 2,
      report: "ECG Report",
      date: "24 Sep 2026",
      type: "ECG",
      status: "Pending Review",
      findings: "",
    },
    {
      id: 3,
      patient: "Rahul Kumar",
      patientId: 3,
      report: "X-Ray Report",
      date: "20 Sep 2026",
      type: "X-Ray",
      status: "Reviewed",
      findings: "No significant abnormality detected.",
    },
    {
      id: 4,
      patient: "Sophia Williams",
      patientId: 4,
      report: "Blood Test Report",
      date: "18 Sep 2026",
      type: "Blood Test",
      status: "Pending Review",
      findings: "",
    },
  ]);

  const filteredReports = reports.filter(
    (report) =>
      report.patient.toLowerCase().includes(search.toLowerCase()) ||
      report.report.toLowerCase().includes(search.toLowerCase())
  );

  const updateFindings = (id, value) => {
    setReports(
      reports.map((report) =>
        report.id === id
          ? { ...report, findings: value }
          : report
      )
    );
  };

  const saveFindings = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id
          ? { ...report, status: "Reviewed" }
          : report
      )
    );

    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <DoctorSidebar />

      <main className="ml-64">

        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Patient Reports
            </h1>

            <p className="text-slate-500 mt-1">
              Review and manage your patients' medical reports.
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-64 h-12 pl-11 pr-4 bg-white border border-teal-100 rounded-xl outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Notification */}
            <button className="relative w-12 h-12 bg-white border border-teal-100 rounded-xl flex items-center justify-center">
              <Bell size={22} className="text-slate-500" />

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </button>

            <div className="h-10 w-px bg-slate-200" />

            {/* Doctor */}
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

        {/* Page Content */}
        <div className="p-8">

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">
                Total Reports
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {reports.length}
              </h2>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">
                Pending Review
              </p>

              <h2 className="text-3xl font-bold text-amber-600 mt-2">
                {
                  reports.filter(
                    (report) => report.status === "Pending Review"
                  ).length
                }
              </h2>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">
                Reviewed
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {
                  reports.filter(
                    (report) => report.status === "Reviewed"
                  ).length
                }
              </h2>
            </div>

          </div>

          {/* Reports Card */}
          <div className="bg-white rounded-2xl border border-slate-200">

            {/* Card Header */}
            <div className="p-6 border-b border-slate-200 flex items-center gap-3">

              <div className="bg-teal-50 p-3 rounded-xl">
                <FileText
                  size={22}
                  className="text-teal-600"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Medical Reports
                </h2>

                <p className="text-sm text-slate-500">
                  View patient reports and add your findings.
                </p>
              </div>

            </div>

            {/* Reports List */}
            <div className="p-6 space-y-4">

              {filteredReports.map((report) => (

                <div
                  key={report.id}
                  className="border border-slate-200 rounded-xl p-5 hover:border-teal-200 transition"
                >

                  {/* Report Top */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                        <FileText
                          size={22}
                          className="text-teal-600"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {report.report}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                          Patient: {report.patient}
                        </p>

                        <p className="text-sm text-slate-400">
                          {report.type} • {report.date}
                        </p>
                      </div>

                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        report.status === "Reviewed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {report.status}
                    </span>

                  </div>

                  {/* Findings */}
                  <div className="mt-5">

                    <p className="text-sm font-medium text-slate-600 mb-2">
                      Doctor's Findings
                    </p>

                    {editingId === report.id ? (

                      <div>
                        <textarea
                          value={report.findings}
                          onChange={(e) =>
                            updateFindings(
                              report.id,
                              e.target.value
                            )
                          }
                          placeholder="Enter your findings..."
                          rows="3"
                          className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <div className="flex gap-3 mt-3">

                          <button
                            onClick={() =>
                              saveFindings(report.id)
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg"
                          >
                            <Save size={17} />
                            Save Findings
                          </button>

                          <button
                            onClick={() => setEditingId(null)}
                            className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600"
                          >
                            Cancel
                          </button>

                        </div>
                      </div>

                    ) : (

                      <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg">

                        <p className="text-sm text-slate-600">
                          {report.findings ||
                            "No findings added yet."}
                        </p>

                        <div className="flex items-center gap-3">

                          <button
                            className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-600"
                          >
                            <Eye size={17} />
                            View
                          </button>

                          <button
                            onClick={() =>
                              setEditingId(report.id)
                            }
                            className="flex items-center gap-2 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg"
                          >
                            <Edit size={17} />
                            {report.findings
                              ? "Edit"
                              : "Add Findings"}
                          </button>

                        </div>

                      </div>

                    )}

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

export default Reports;