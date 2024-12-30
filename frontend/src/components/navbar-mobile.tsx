import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarMobile() {
  const [open, setOpen] = useState<boolean>(false);
  const [openCourseCategories, setOpenCourseCategories] =
    useState<boolean>(false);
  console.log("Value of open:", open);
  return (
    <div>
      <div className="sm:mx-0 flex items-center justify-between py-4">
        <div className="lg:hidden text-2xl font-bold">
          <Link to="/">
            <span className=" text-fuchsia-500">Blo</span>gram
          </Link>
        </div>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden hover:bg-gray-200 p-1 rounded-full hover:scale-100",
              open && "hover:bg-gray-200"
            )}
          >
            {open ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <ul className="grid divide-y divide-gray-200">
          <li className="py-3">
            <button
              className="flex w-full justify-between"
              onClick={() => setOpenCourseCategories(!openCourseCategories)}
            >
              <p className="font-semibold">Course Categories</p>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gray-500 transition-all",
                  openCourseCategories && "rotate-180"
                )}
              />
            </button>
          </li>
          <li>
            <Link to="sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="sign-up">Signup</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
