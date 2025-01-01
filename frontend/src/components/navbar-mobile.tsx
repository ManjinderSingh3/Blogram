import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LandingPage } from "./landing-page";

export function NavbarMobile() {
  const [open, setOpen] = useState<boolean>(false);
  console.log("Value of open:", open);
  console.log("Width of Window:", window.innerWidth);
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
      <div className="lg:hidden">
        {open && window.innerWidth < 1024 ? (
          <ul className="grid divide-y divide-gray-200 lg:block">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Signup</Link>
            </li>
          </ul>
        ) : (
            <LandingPage />
        )}
      </div>
      <div className="hidden lg:block">
        <LandingPage />
      </div>
    </div>
  );
}
