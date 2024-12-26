import { motion } from "framer-motion";

export const HeroSectionTest = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
        {/* {Array.from({ length: 144 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-gray-700 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: index * 0.02,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))} */}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-6">
          Make your websites look{" "}
          <span className="text-blue-500">10x awesome</span>
        </h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Build great websites with ease using our components and tools.
        </p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md"
          >
            Browse Components
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md"
          >
            Custom Components
          </motion.button>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative w-full h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-xl font-semibold">Hover over me</p>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-lg font-light">Hidden content revealed!</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 2.05 }}
          className="group relative w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
              Amazing Tailwind CSS Layouts
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-64 bg-black border border-gray-700 rounded-lg shadow-lg flex items-center justify-center"
        >
          <div className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg">Hover to see magic</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
