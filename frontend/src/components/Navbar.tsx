import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ToggleThemes } from "./toggle-themes";
import { SignupAndSigninButtons } from "./auth/SignupAndSigninButtons";

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        {/* 1. Website Icon  */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <span className="text-fuchsia-500">Blo</span>gram
          </Link>
        </div>

        {/* 2. Navbar items */}
        <div className="flex items-center">
          <NavigationMenuPrimitive.Root
            delayDuration={0}
            className="relative hidden lg:block"
          >
            <NavigationMenuPrimitive.List className="flex flex-row space-x-2 ">
              <NavigationMenuPrimitive.Item>
                <p
                  className={cn(
                    "px-3 py-2 rounded-md hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black  "
                  )}
                >
                  About Us
                </p>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <p
                  className={cn(
                    " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                  )}
                >
                  Blog
                  {/* 
                  TODO:
                  Menu should open :
                  1- Create-your-own blog
                  2- Ask AI to create Blog
                  */}
                </p>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <p
                  className={cn(
                    " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-100 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                  )}
                >
                  Membership
                </p>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <p
                  className={cn(
                    " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-100 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                  )}
                >
                  Contact
                </p>
              </NavigationMenuPrimitive.Item>
            </NavigationMenuPrimitive.List>
          </NavigationMenuPrimitive.Root>
        </div>

        {/* 3. Signup-Signin-Signout Buttons */}
        <div className="flex items-center space-x-3">
          <SignupAndSigninButtons />
          <ToggleThemes />
        </div>
      </div>
    </div>
  );
};
