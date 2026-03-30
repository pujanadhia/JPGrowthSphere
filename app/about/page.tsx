export default function AboutPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">JP Growth Sphere</span>
        </h1>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          We are a premium digital growth agency obsessed with one thing: ROI. We don't just build websites; we build scalable digital ecosystems that turn attention into revenue.
        </p>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Based at the intersection of psychology-driven design and data-backed performance marketing, JP Growth Sphere is the final agency you'll ever need.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <ul className="space-y-4 text-gray-400">
            <li><strong>1. Speed over Perfection:</strong> Execute fast, gather data, iterate rapidly.</li>
            <li><strong>2. Systems over Hacky:</strong> We build automation pipelines that last.</li>
            <li><strong>3. Value First:</strong> We only win when you win. Period.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
