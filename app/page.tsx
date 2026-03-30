"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight, Activity, Users, CreditCard, Layers, ChevronRight, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            JPGrowthSphere
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-5 py-2.5 text-sm font-medium hover:text-blue-400 transition-colors">
              Log in
            </Link>
            <Link href="/funnel" className="px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16 px-6">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto pt-20 pb-32 relative">
          {/* Animated Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
              <Zap size={16} className="text-blue-400" />
              <span>The Next Generation Agency OS is here</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
              Scale your agency <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                without the chaos.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              The ultimate operating system for modern agencies. Manage leads, automate client outreach, process payments, and deliver projects faster – all in one unified platform.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/funnel" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#features" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                Explore Features
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Dashboard Mockup Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="mt-24 relative z-20 mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl p-2 shadow-2xl relative overflow-hidden group">
              {/* Fake dashboard UI */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
              <div className="rounded-xl border border-white/5 bg-[#0a0a0c] overflow-hidden flex flex-col h-[500px]">
                {/* Header */}
                <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="h-6 w-full max-w-md bg-white/5 rounded flex items-center px-3 text-xs text-gray-500">
                    app.jpgrowthsphere.com/dashboard
                  </div>
                </div>
                {/* Content Area */}
                <div className="flex flex-1">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-white/5 p-4 flex flex-col gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`h-8 rounded ${i === 1 ? 'bg-white/10' : 'bg-white/5'}`} />
                    ))}
                  </div>
                  {/* Main */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="h-10 w-48 bg-white/10 rounded" />
                    <div className="grid grid-cols-3 gap-6">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between group-hover:bg-white/10 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-white/10" />
                          <div>
                            <div className="h-4 w-16 bg-white/20 rounded mb-2" />
                            <div className="h-6 w-24 bg-white/30 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
            {[
              { label: "Agencies Scaled", value: "500+" },
              { label: "Revenue Generated", value: "$42M" },
              { label: "Hours Saved Weekly", value: "15hrs" },
              { label: "Client Satisfaction", value: "99%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center pl-8 first:pl-0 border-white/5 line-clamp-none">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">in one powerful ecosystem.</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Stop stitching together 10 different SaaS subscriptions. JP Growth Sphere provides an elegant natively integrated solution for your entire agency lifecycle.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users size={24} />, title: "CRM & Pipelines", desc: "Track every lead and client in real-time. Drag and drop pipelines to master your sales process." },
                { icon: <Zap size={24} />, title: "Automated Outreach", desc: "Put your follow-ups on autopilot. Send personalized email and SMS sequences without lifting a finger." },
                { icon: <CreditCard size={24} />, title: "Stripe Billing", desc: "Get paid faster. Send beautiful invoices and set up recurring subscriptions with our native Stripe integration." },
                { icon: <Layers size={24} />, title: "Client Portals", desc: "Give your clients a premium login area to view project progress, approve assets, and pay invoices." },
                { icon: <Activity size={24} />, title: "Analytics & Reporting", desc: "Know your numbers. Beautiful dashboards track your MRR, churn rate, and campaign performance." },
                { icon: <CheckCircle2 size={24} />, title: "Task Management", desc: "Assign work to your team, set deadlines, and ensure delivering client work is always a smooth process." }
              ].map((feature, i) => (
                <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm flex-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works / Social Proof */}
        <section id="how-it-works" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080b1a] to-black -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for founders who value their time.</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We understand that scaling an agency means getting bogged down in operations. That's why we've streamlined the entire client journey into three simple steps.
                </p>
                
                <div className="space-y-8">
                  {[
                    { number: "01", title: "Capture & Qualify", desc: "Use our converting funnels to capture leads and automatically qualify them based on your custom logic." },
                    { number: "02", title: "Close & Onboard", desc: "Send automated proposals, secure payments via Stripe, and fire off onboarding emails instantly." },
                    { number: "03", title: "Deliver & Retain", desc: "Manage projects via client portals, automate weekly updates, and keep churn exceptionally low." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-3xl font-black text-white/10">{step.number}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-blue-500/30 to-purple-500/5 w-full max-w-md mx-auto">
                  <div className="bg-[#0a0a0c] rounded-3xl p-8 h-full">
                    <div className="flex gap-1 text-yellow-500 mb-6">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    <p className="text-xl font-medium leading-relaxed mb-8">
                      "Since moving our agency to JP Growth Sphere, we've saved over 20 hours a week on administrative tasks and our close rate has increased by 45%. It pays for itself."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-white/20 bg-gradient-to-tr from-blue-400 to-purple-600" />
                      <div>
                        <div className="font-bold text-white">Sarah Jenkins</div>
                        <div className="text-sm text-gray-500">CEO, Jenkins Media</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative text-center px-6">
          <div className="absolute inset-0 max-w-5xl mx-auto">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] pointer-events-none rounded-full" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto p-12 rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to scale?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Join hundreds of other ambitious agencies using JP Growth Sphere to power their daily operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/funnel" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                Start 14-Day Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
                Talk to Sales
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-6 tracking-wide">NO CREDIT CARD REQUIRED • CANCEL ANYTIME</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              JPGrowthSphere
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-6">
              The operating system that builds, powers, and scales modern creative and marketing agencies globally.
            </p>
            <div className="text-sm text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} JP Growth Sphere. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#changelog" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
