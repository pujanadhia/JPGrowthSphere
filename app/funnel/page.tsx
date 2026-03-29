"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FunnelPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    revenue: "",
    budget: "",
    goal: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  
  const submitLead = async () => {
    // Phase 4 DB connection will go here
    nextStep(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
      <div className="w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Let's get to know you.</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">FullName</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Work Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <button onClick={nextStep} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex cursor-pointer items-center justify-center transition-colors">
                  Continue <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Tell us about your business.</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Business Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" value={formData.businessType} onChange={(e) => setFormData({...formData, businessType: e.target.value})}>
                    <option value="" className="bg-black text-gray-400">Select...</option>
                    <option value="ecommerce" className="bg-black">E-Commerce</option>
                    <option value="saas" className="bg-black">SaaS</option>
                    <option value="agency" className="bg-black">Agency / B2B</option>
                    <option value="local" className="bg-black">Local Business</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Current Monthly Revenue</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" value={formData.revenue} onChange={(e) => setFormData({...formData, revenue: e.target.value})}>
                    <option value="" className="bg-black text-gray-400">Select...</option>
                    <option value="<10k" className="bg-black">Under ₹,110L</option>
                    <option value="10k-50k" className="bg-black">₹,110L - ₹,150L</option>
                    <option value=">50k" className="bg-black">₹,150L+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Marketing Budget</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                    <option value="" className="bg-black text-gray-400">Select...</option>
                    <option value="starter" className="bg-black">₹,130,000 /mo</option>
                    <option value="scale" className="bg-black">₹,175,000 /mo</option>
                    <option value="dominance" className="bg-black">₹,11.5L+ /mo</option>
                  </select>
                </div>
                <button onClick={submitLead} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 cursor-pointer rounded-xl font-semibold flex items-center justify-center transition-colors">
                  Analyze My Business <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Analysis Complete.</h2>
              <div className="bg-blue-900/40 border border-blue-500 p-6 rounded-2xl mb-8">
                <p className="text-blue-300 font-medium mb-2">Recommended Strategy:</p>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {formData.budget === 'starter' ? 'The Starter Setup' : formData.budget === 'scale' ? 'The Scaling Engine' : 'Total Market Dominance'}
                </h3>
                <p className="text-sm text-gray-300">Based on your revenue of {formData.revenue}, we project a 150%+ ROI within 90 days of implementing our custom funnels.</p>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => alert("Calendly Embed here!")} 
                  className="w-full bg-white text-black hover:bg-gray-200 py-4 cursor-pointer rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Book Your Strategy Call
                </button>
                <p className="text-gray-500 text-sm">or</p>
                <button 
                  onClick={() => alert("Stripe Integration here!")}
                  className="w-full border border-white/20 text-white hover:bg-white/10 py-4 rounded-xl cursor-pointer font-semibold"
                >
                  Proceed to Payment
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
