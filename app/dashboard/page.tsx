"use client";
import { CheckCircle, Clock } from "lucide-react";

export default function ClientDashboard() {
  const activePlan = "Scale Phase";
  const tasks = [
    { id: 1, title: "Initial Discovery Call", status: "completed" },
    { id: 2, title: "SEO Keyword Analysis", status: "completed" },
    { id: 3, title: "Framer Motion Landing Page Design", status: "in-progress" },
    { id: 4, title: "Cold Email Sequence Setup", status: "pending" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-white mb-8">Welcome back, Partner.</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">Active Plan</p>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {activePlan}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">Project Progress</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-white">45%</p>
            <p className="text-sm text-green-400 mb-1">+12% this week</p>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 mt-4">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">Next Payment</p>
          <p className="text-2xl font-bold text-white">Oct 15, 2026</p>
          <p className="text-sm text-gray-500 mt-2">Manage in Billing</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-6">Current Sprint Tasks</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                {task.status === "completed" ? (
                  <CheckCircle className="text-green-500 w-6 h-6" />
                ) : task.status === "in-progress" ? (
                  <Clock className="text-blue-500 w-6 h-6" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-600" />
                )}
                <span className={`font-medium ${task.status === "completed" ? "text-gray-500 line-through" : "text-gray-200"}`}>
                  {task.title}
                </span>
              </div>
              <div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  task.status === "completed" ? "bg-green-500/10 text-green-500" :
                  task.status === "in-progress" ? "bg-blue-500/10 text-blue-500" :
                  "bg-gray-500/10 text-gray-500"
                }`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
