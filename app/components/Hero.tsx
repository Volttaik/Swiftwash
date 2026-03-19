export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Clean Home, Happy Life
            </h2>
            <p className="text-lg text-green-100 mb-6">
              Discover premium cleaning and washing products delivered fast to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧼</div>
                <p className="text-green-100 text-sm">Premium Cleaning Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
