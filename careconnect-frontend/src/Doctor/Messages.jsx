import React, { useState } from "react";
import {
  Search,
  Bell,
  Send,
} from "lucide-react";
import DoctorSidebar from "../components/DoctorSidebar";

const Messages = () => {
  const [selectedPatient, setSelectedPatient] = useState(1);
  const [message, setMessage] = useState("");

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Thank you, doctor.",
      messages: [
        { sender: "patient", text: "Hello doctor, I have a question about my medicine." },
        { sender: "doctor", text: "Sure John, what would you like to know?" },
        { sender: "patient", text: "Should I take it after meals?" },
        { sender: "doctor", text: "Yes, take it after meals." },
        { sender: "patient", text: "Thank you, doctor." },
      ],
    },
    {
      id: 2,
      name: "Emma Smith",
      lastMessage: "I will come tomorrow.",
      messages: [
        { sender: "doctor", text: "Your follow-up appointment is tomorrow." },
        { sender: "patient", text: "I will come tomorrow." },
      ],
    },
    {
      id: 3,
      name: "Rahul Kumar",
      lastMessage: "My fever is better now.",
      messages: [
        { sender: "patient", text: "My fever is better now." },
        { sender: "doctor", text: "That's good. Continue your medication." },
      ],
    },
  ]);

  const selectedConversation = conversations.find(
    (item) => item.id === selectedPatient
  );

  const handleSend = () => {
    if (!message.trim()) return;

    setConversations(
      conversations.map((conversation) =>
        conversation.id === selectedPatient
          ? {
              ...conversation,
              lastMessage: message,
              messages: [
                ...conversation.messages,
                {
                  sender: "doctor",
                  text: message,
                },
              ],
            }
          : conversation
      )
    );

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DoctorSidebar />

      <main className="ml-64">
        {/* Header */}
        <div className="h-20 bg-gradient-to-r from-teal-100 border-teal-500 px-8 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Messages
            </h1>
            <p className="text-slate-500 mt-1">
              Communicate with your patients.
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
          <div className="bg-white rounded-2xl border border-slate-200 h-[650px] flex overflow-hidden">

            {/* Patient List */}
            <div className="w-80 border-r border-slate-200">
              <div className="p-4 border-b border-slate-200">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 outline-none"
                />
              </div>

              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() =>
                    setSelectedPatient(conversation.id)
                  }
                  className={`w-full text-left p-4 border-b border-slate-100 ${
                    selectedPatient === conversation.id
                      ? "bg-teal-50 border-l-4 border-teal-600"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
                      {conversation.name[0]}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {conversation.name}
                      </h3>
                      <p className="text-sm text-slate-500 truncate w-48">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Chat */}
            <div className="flex-1 flex flex-col">
              <div className="p-5 border-b border-slate-200">
                <h2 className="font-semibold text-slate-800">
                  {selectedConversation?.name}
                </h2>
                <p className="text-sm text-green-600">
                  Online
                </p>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {selectedConversation?.messages.map(
                  (msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.sender === "doctor"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-md px-4 py-3 rounded-2xl ${
                          msg.sender === "doctor"
                            ? "bg-teal-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="p-4 border-t border-slate-200 flex gap-3">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSend()
                  }
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-xl outline-none"
                />

                <button
                  onClick={handleSend}
                  className="bg-teal-600 text-white px-5 rounded-xl"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;