import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";
import { TechStackIcons } from "./tech-stack-icons";

export const TaglineSection = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className="text-6xl font-bold text-neutral-800 dark:text-neutral-400">
      You think, <br /> We write
      <FlipWords words={words} />
      <br />
      blogs with AI
      <div className=" flex bg-fuchsia-200 rounded-md mt-8 px-4 py-2 w-fit">
        <span className="text-sm text-gray-600 mr-2">
          Explore exciting blogs!
        </span>
        <Link to="/" className="text-gray-600 hover:underline text-sm">
          Read more →
        </Link>
      </div>
      <div>
        <TechStackIcons />
      </div>
    </div>
  );
};
