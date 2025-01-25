// import { Link } from "react-router-dom";

// export const HeroSection = () => {
//   return (
//     <div className="py-10">
//     <div className="flex flex-col items-center justify-center text-center py-6 bg-gradient-to-b from-white to-gray-200 rounded-xl ">
//       <div className="bg-gray-200 px-4 py-1 rounded-full mb-4">
//         <span className="text-sm text-gray-600">Blogram is now live! </span>
//         <Link to="/read-more" className="text-blue-500 hover:underline">
//           Read more →
//         </Link>
//       </div>
//       <h1 className="text-4xl font-bold mb-4">
//         Write, Share, and Connect with the World
//       </h1>
//       <p className="text-gray-600 mb-6">
//         Blogram is your platform for creative expression and connection. Explore
//         insights and stories in real time.
//       </p>
//       <div className="flex space-x-4">
//         <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
//           Start for Free
//         </button>
//         <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
//           Get a Demo
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };
import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";

export function HeroSection() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex items-center justify-between px-8">
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
        <div className=" flex bg-gray-200 rounded-full mt-3 px-4 py-2 w-fit">
          <span className="text-sm text-gray-600 mr-2">
            Blogram is now live!
          </span>
          <Link to="/" className="text-blue-300 hover:underline text-sm">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
