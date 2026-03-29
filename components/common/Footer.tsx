import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              JP Growth Sphere
            </span>
            <p className="mt-4 text-gray-400 max-w-sm">
              The ultimate agency operating system. We build digital growth systems, convert leads, and scale your business effortlessly.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/services#funnels" className="text-base text-gray-400 hover:text-white">Sales Funnels</Link></li>
              <li><Link href="/services#seo" className="text-base text-gray-400 hover:text-white">SEO & Content</Link></li>
              <li><Link href="/services#automation" className="text-base text-gray-400 hover:text-white">Automations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/work" className="text-base text-gray-400 hover:text-white">Our Work</Link></li>
              <li><Link href="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} JP Growth Sphere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/dashboard" className="text-gray-400 hover:text-white">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
