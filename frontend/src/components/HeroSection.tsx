export const HeroSection = () => {
  <div>
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">
        Make your websites look 10x awesome
      </h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Copy-paste the most trending components and use them in your websites
        without worrying about styling and animations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group relative w-full h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-xl font-semibold">Hover over me</p>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-lg font-light">Hidden content revealed!</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
              Amazing Tailwind CSS Layouts
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full h-64 bg-black border border-gray-700 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg">Hover to see magic</p>
          </div>
        </div>
      </div>
    </section>
  </div>;
};
