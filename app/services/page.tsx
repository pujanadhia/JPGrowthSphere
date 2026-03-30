import { Target, Zap, TrendingUp, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "funnels",
      title: "High-Converting Sales Funnels",
      description: "We don't build generic websites. We build automated sales machines that capture attention and force conversions. Every click is optimized for maximum ROI.",
      icon: Target,
      color: "text-blue-500",
    },
    {
      id: "seo",
      title: "SEO & Content Architecture",
      description: "Dominate search rankings. We build authority-driven content frameworks and technical SEO that brings high-intent buyers straight to your offers.",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      id: "automation",
      title: "Smart Automations & Systems",
      description: "Stop doing manual tasks. We integrate CRMs, email sequences, and payment pipelines so your business runs smoothly even while you sleep.",
      icon: Zap,
      color: "text-purple-500",
    },
    {
      id: "outreach",
      title: "AI-Powered Cold Outreach",
      description: "Generate B2B leads on autopilot. Our multi-channel outreach strategies use personalized AI to break through the noise and book meetings directly to your calendar.",
      icon: Users,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Our Arsenal of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Growth Services</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We combine cutting-edge tech, psychological design, and data-driven marketing to scale your agency or e-commerce brand to the moon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((svc) => (
          <div key={svc.id} id={svc.id} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className={`p-4 bg-black/50 rounded-2xl inline-block mb-6`}>
              <svc.icon className={`w-10 h-10 ${svc.color}`} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{svc.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {svc.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
