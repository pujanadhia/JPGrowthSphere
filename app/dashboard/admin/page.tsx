"use client";
import { Users, Mail } from "lucide-react";

export default function AdminDashboard() {
  const dummyLeads = [
    { id: 1, name: "Alice M.", email: "alice@startup.io", status: "New", budget: "scale" },
    { id: 2, name: "Bob C.", email: "bob@ecommerce.com", status: "Contacted", budget: "dominance" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Agency Operations HQ</h1>
        <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg">Generate Report</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 p-6 rounded-2xl">
          <p className="text-3xl font-bold text-white">₹4.5L</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">Active Clients</p>
          <p className="text-3xl font-bold text-white">12</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">New Leads (30d)</p>
          <p className="text-3xl font-bold text-white">45</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm text-gray-400 mb-1">Churn Rate</p>
          <p className="text-3xl font-bold text-green-400">0%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Users className="w-5 h-5 text-blue-500" /> Recent Leads</h2>
            <button className="text-sm text-blue-400 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {dummyLeads.map((lead) => (
              <div key={lead.id} className="flex justify-between items-center p-4 bg-black/50 border border-white/5 rounded-xl">
                <div>
                  <p className="text-white font-medium">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.email} • Budget: {lead.budget}</p>
                </div>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">{lead.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Mail className="w-5 h-5 text-purple-500" /> Cold Outreach</h2>
          </div>
          <p className="text-sm text-gray-400 mb-6">Trigger automated sequence (Resend API) for imported leads.</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-center border-dashed">
              <p className="text-sm text-gray-400">+ Upload Leads CSV</p>
            </div>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors">
              Start Campaign "Q4 SaaS Founders"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
