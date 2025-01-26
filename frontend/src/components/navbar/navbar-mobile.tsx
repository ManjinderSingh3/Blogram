import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { hamburgerAtom } from "@/store/atoms/hamburger";
import { ToggleThemes } from "../toggle-themes";
import { Button } from "@/shadcn-components/ui/button";

export function NavbarMobile() {
  const [openHamburger, setOpenHamburger] = useRecoilState(hamburgerAtom);
  return (
    <div>
      <div className="flex items-center justify-between py-4 h-16">
        {/* Website Logo */}
        <div className="lg:hidden text-2xl font-bold">
          <Link to="/">
            <span className=" text-fuchsia-500">Blo</span>gram
          </Link>
        </div>

        {/* Hamburger and Toggle theme icon */}
        <div className="flex items-center space-x-3">
          <ToggleThemes />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpenHamburger(!openHamburger)}
            className={cn(
              "lg:hidden hover:bg-gray-100 p-1 hover:scale-100 px-3",
              openHamburger && "hover:bg-gray-200"
            )}
          >
            {openHamburger ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </Button>
        </div>
      </div>
      <div>
        {openHamburger ? (
          <ul className="h-[calc(100vh-64px)] px-2 grid divide-y space-y-3 divide-gray-300 font-semibold lg:block py-4">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li className="pt-3">
              <Link to="/">Blog</Link>
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
