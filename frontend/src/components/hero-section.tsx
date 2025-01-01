import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="py-5">
    <section className="flex flex-col items-center justify-center text-center py-6 bg-gradient-to-b from-white to-gray-200 rounded-xl ">
      <div className="bg-gray-200 px-4 py-1 rounded-full mb-4">
        <span className="text-sm text-gray-600">Blogram is now live! </span>
        <Link to="/read-more" className="text-blue-500 hover:underline">
          Read more →
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Write, Share, and Connect with the World
      </h1>
      <p className="text-gray-600 mb-6">
        Blogram is your platform for creative expression and connection. Explore
        insights and stories in real time.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Start for Free
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Get a Demo
        </button>
      </div>
    </section>
    </div>
  );
};
