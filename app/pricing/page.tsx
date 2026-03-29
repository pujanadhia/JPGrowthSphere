import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₹,130,000",
      period: "/month",
      description: "Perfect for new businesses looking to establish a digital presence.",
      features: [
        "Basic SEO Optimization",
        "1 Sales Funnel Design",
        "Social Media Setup",
        "Monthly Progress Report",
        "Email Support",
      ],
      link: "/funnel?plan=starter",
      highlight: false,
    },
    {
      name: "Scale",
      price: "₹,175,000",
      period: "/month",
      description: "Aggressive growth systems for established businesses scaling up.",
      features: [
        "Advanced SEO & Content",
        "3 Custom Sales Funnels",
        "Paid Ads Management (Up to ₹,12L spend)",
        "Automated Email Sequences",
        "Priority Slack Support",
      ],
      link: "/funnel?plan=scale",
      highlight: true,
    },
    {
      name: "Dominance",
      price: "₹,11,50,000+",
      period: "/month",
      description: "Complete market takeover. We become your dedicated external CMO.",
      features: [
        "Omnichannel Marketing Strategy",
        "Unlimited Funnels & Landing Pages",
        "AI Chatbot & Cold Outreach System",
        "Dedicated Account Manager",
        "24/7 Priority Support",
      ],
      link: "/funnel?plan=dominance",
      highlight: false,
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">pricing</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the growth engine that fits your current trajectory. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-3xl border ${
              plan.highlight
                ? "bg-gradient-to-b from-blue-900/40 to-black border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] transform md:-translate-y-4"
                : "bg-black/40 border-white/10"
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6 min-h-[48px]">{plan.description}</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">{plan.price}</span>
              <span className="text-gray-400">{plan.period}</span>
            </div>
            
            <Link
              href={plan.link}
              className={`block w-full text-center py-4 rounded-full font-semibold mb-8 transition-colors ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Get Started
            </Link>

            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
