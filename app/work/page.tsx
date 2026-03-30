import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const caseStudies = [
    {
      title: "How We Scaled 'EcoBlend' from $10k to $150k/mo in 90 Days",
      category: "E-Commerce",
      description: "By rebuilding their backend funnel and running aggressive ad creatives, we unlocked a 15x ROAS.",
      stats: [
        { label: "Revenue Increase", value: "+1400%" },
        { label: "CPA Reduction", value: "-65%" },
      ]
    },
    {
      title: "B2B SaaS Lead Generation: 400 Qualified Meetings in 30 Days",
      category: "SaaS",
      description: "We deployed an AI-powered cold email infrastructure that bypassed spam filters and booked calls directly.",
      stats: [
        { label: "Meetings Booked", value: "400+" },
        { label: "Deal Volume pipeline", value: "$2.4M" },
      ]
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Track Record</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We don't sell vanity metrics. We sell revenue. Here are a few examples of businesses we've transformed.
        </p>
      </div>

      <div className="space-y-12">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover:bg-white/10 transition-colors">
            <div className="flex-1">
              <span className="text-sm font-bold tracking-wider uppercase text-blue-500 mb-2 block">{study.category}</span>
              <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {study.description}
              </p>
              <div className="flex gap-8 mb-8">
                {study.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group">
                Discuss Your Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-black/50 border border-white/5 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 font-medium">Video / Image Asset Placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
