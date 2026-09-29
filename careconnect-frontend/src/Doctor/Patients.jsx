import React, { useState } from "react";
import {
  Search,
  Bell,
  Eye,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";

const Patients = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 42,
      gender: "Male",
      condition: "Diabetes",
      bloodGroup: "B+",
      lastVisit: "25 Sep 2026",
    },
    {
      id: 2,
      name: "Emma Smith",
      age: 35,
      gender: "Female",
      condition: "Hypertension",
      bloodGroup: "O+",
      lastVisit: "24 Sep 2026",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      age: 29,
      gender: "Male",
      condition: "Fever",
      bloodGroup: "A+",
      lastVisit: "20 Sep 2026",
    },
    {
      id: 4,
      name: "Sophia Williams",
      age: 31,
      gender: "Female",
      condition: "Asthma",
      bloodGroup: "AB+",
      lastVisit: "18 Sep 2026",
    },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <DoctorSidebar />

      <main className="ml-64">
        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              My Patients
            </h1>
            <p className="text-slate-500 mt-1">
              View and manage your patients.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-3.5 text-teal-600"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-64 h-12 pl-11 pr-4 bg-white border border-teal-100 rounded-xl outline-none"
              />
            </div>

            <button className="relative w-12 h-12 bg-white border border-teal-100 rounded-xl">
              <Bell size={22} className="text-slate-500 mx-auto" />
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
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

            <div className="p-6 border-b border-slate-200 flex items-center gap-3">
              <div className="p-3 bg-teal-50 rounded-xl">
                <Users className="text-teal-600" />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Patient List
                </h2>
                <p className="text-sm text-slate-500">
                  {patients.length} patients assigned to you
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Patient
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Age
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Gender
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Condition
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Blood Group
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Last Visit
                    </th>
                    <th className="text-left px-6 py-4 text-sm text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="border-t border-slate-100"
                    >
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {patient.name}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.age}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.gender}
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                          {patient.condition}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.bloodGroup}
                      </td>

                      <td className="px-6 py-4 text-slate-500">
                        {patient.lastVisit}
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            navigate(
                              `/doctor/patients/${patient.id}`
                            )
                          }
                          className="flex items-center gap-2 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg"
                        >
                          <Eye size={17} />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Patients;