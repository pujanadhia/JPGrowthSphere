import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Connect</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to scale? Drop us a line or book directly into our calendar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="p-4 bg-white/5 rounded-full"><Mail className="text-blue-500" /></div>
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">Email Us</p>
              <p className="text-lg">hello@jpgrowthsphere.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="p-4 bg-white/5 rounded-full"><Phone className="text-purple-500" /></div>
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">Call Us</p>
              <p className="text-lg">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="p-4 bg-white/5 rounded-full"><MapPin className="text-green-500" /></div>
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">Headquarters</p>
              <p className="text-lg">Cyber City, Gurugram, India</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="How can we help?" />
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
