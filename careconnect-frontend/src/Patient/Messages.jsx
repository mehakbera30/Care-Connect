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
  Send,
  Paperclip,
  MoreVertical,
} from "lucide-react";

const Messages = () => {
  const [message, setMessage] = useState("");

  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Cardiology",
      lastMessage: "Please take your medication regularly.",
      time: "10:30 AM",
      active: true,
    },
    {
      name: "Dr. Michael Brown",
      specialty: "General Physician",
      lastMessage: "Your appointment is confirmed.",
      time: "Yesterday",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Dermatology",
      lastMessage: "Your report looks good.",
      time: "18 Sep",
    },
  ];

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    console.log(message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <main className="ml-64 flex-1">

        {/* Navbar */}
        <header className="h-20 bg-gradient-to-rfrom-teal-100 bg-teal-100  border-teal-700 px-8 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Messages
            </h2>

            <p className="text-sm text-slate-500">
              Communicate with your healthcare providers.
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

        {/* Messages */}
        <div className="p-8">

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm h-[650px] flex overflow-hidden">

            {/* Doctors List */}
            <div className="w-80 border-r border-slate-200">

              <div className="p-5 border-b border-slate-200">

                <h3 className="font-semibold text-slate-800">
                  Conversations
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Your healthcare providers
                </p>

              </div>

              <div>

                {doctors.map((doctor, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-slate-100 cursor-pointer hover:bg-teal-50 ${
                      doctor.active ? "bg-teal-50" : ""
                    }`}
                  >

                    <div className="flex gap-3">

                      <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                        {doctor.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div className="flex-1 min-w-0">

                        <div className="flex justify-between">

                          <p className="font-semibold text-sm text-slate-800">
                            {doctor.name}
                          </p>

                          <span className="text-xs text-slate-400">
                            {doctor.time}
                          </span>

                        </div>

                        <p className="text-xs text-teal-600 mt-1">
                          {doctor.specialty}
                        </p>

                        <p className="text-xs text-slate-500 mt-1 truncate">
                          {doctor.lastMessage}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* Chat */}
            <div className="flex-1 flex flex-col">

              {/* Chat Header */}
              <div className="p-5 border-b border-slate-200 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                    SW
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Dr. Sarah Wilson
                    </h3>

                    <p className="text-xs text-green-600">
                      ● Online
                    </p>
                  </div>

                </div>

                <button className="text-slate-500 hover:text-slate-800">
                  <MoreVertical size={20} />
                </button>

              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 space-y-5 overflow-y-auto">

                <div className="flex">

                  <div className="bg-slate-100 rounded-xl rounded-tl-none px-4 py-3 max-w-md">

                    <p className="text-sm text-slate-700">
                      Hello John, how are you feeling today?
                    </p>

                    <span className="text-xs text-slate-400">
                      10:20 AM
                    </span>

                  </div>

                </div>

                <div className="flex justify-end">

                  <div className="bg-teal-600 text-white rounded-xl rounded-tr-none px-4 py-3 max-w-md">

                    <p className="text-sm">
                      I am feeling much better. Thank you, doctor.
                    </p>

                    <span className="text-xs text-teal-100">
                      10:25 AM
                    </span>

                  </div>

                </div>

                <div className="flex">

                  <div className="bg-slate-100 rounded-xl rounded-tl-none px-4 py-3 max-w-md">

                    <p className="text-sm text-slate-700">
                      That's good to hear. Please take your medication regularly.
                    </p>

                    <span className="text-xs text-slate-400">
                      10:30 AM
                    </span>

                  </div>

                </div>

              </div>

              {/* Message Input */}
              <form
                onSubmit={sendMessage}
                className="p-4 border-t border-slate-200 flex items-center gap-3"
              >

                <button
                  type="button"
                  className="text-slate-400 hover:text-teal-600"
                >
                  <Paperclip size={20} />
                </button>

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                />

                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg"
                >
                  <Send size={18} />
                </button>

              </form>

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

export default Messages;