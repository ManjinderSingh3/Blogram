import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarMobile() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="sm:mx-0 flex items-center justify-between px-4">
      <div className="lg:hidden text-2xl">
        <Link to="/">
          <span className="font-bold text-fuchsia-500">Blo</span>gram
        </Link>
      </div>
      <div className="justify-end">
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden rounded-full transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 ",
            open && "hover:bg-white active:bg-gray-200"
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
  );
}
