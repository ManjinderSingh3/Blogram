import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarMobile() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between py-4 h-16">
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
      <div >
        {open ? (
          <ul className="h-[calc(100vh-64px)] px-2 grid divide-y space-y-3 divide-gray-300 font-semibold lg:block py-4">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li className="pt-3">
              <Link to="/">Write</Link>
            </li>
            <li className="pt-3">
              <Link to="/">Membership</Link>
            </li>
            <li className="pt-3">
              <Link to="/"> Contact</Link>
            </li>
            <li className="pt-3">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="pt-3">
              <Link to="/sign-up">Signup</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
