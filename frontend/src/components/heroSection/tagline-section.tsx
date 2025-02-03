import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";
import { TechStackIcons } from "./tech-stack-icons";
import { Button } from "@/shadcn-components/ui/button";

export const TaglineSection = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <>
      <div className=" flex bg-fuchsia-200 rounded-full px-3 py-2 w-fit">
        <span className="text-sm text-gray-600 mt-4mr-2">
          Explore exciting blogs!
        </span>
        <Link to="/" className="text-gray-600 underline text-sm ml-1">
          Read more →
        </Link>
      </div>
      <div className=" text-6xl mt-4 font-bold text-neutral-800 dark:text-neutral-400">
        You think, <br /> We write
        <FlipWords words={words} />
        <br />
        blogs with AI
        <div className="flex">
            <div className="mr-2">
            <Button>Sign up </Button>
            </div>
            <div>
            <Button>Sign in </Button>
            </div>
        </div>
        <div>
          <TechStackIcons />
        </div>
      </div>
    </>
  );
};
