import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";

export function HeroSection() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex items-center justify-between px-8">
      <div className="text-6xl font-semibold text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
        <div className=" flex bg-gray-200 rounded-full mt-3 px-4 py-2 w-fit">
          <span className="text-sm text-gray-600 mr-2">
            Explore exciting blogs!
          </span>
          <Link to="/" className="text-blue-300 hover:underline text-sm">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
