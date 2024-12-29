import { Button } from "@/shadcn-components/ui/button";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ToggleThemes } from "./toggle-themes";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      {/* 1. Website Icon  */}
      <div className="text-2xl font-bold">
        <Link to="/">
          <span className="text-fuchsia-500">B</span>logram
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
                Categories
              </p>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item>
              <p
                className={cn(
                  " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                )}
              >
                About
              </p>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item>
              <p
                className={cn(
                  " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-100 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                )}
              >
                My Courses
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
          <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg" />
        </NavigationMenuPrimitive.Root>
      </div>

      {/* 3. Signup-Signin */}
      <div className="flex items-center space-x-4">
        <Link to="/sign-in">
          <Button variant="outline">Signin</Button>
        </Link>
        <Link to="/sign-up">
          <Button className="hover:bg-white hover:text-black">Signup</Button>
        </Link>
        <ToggleThemes />
      </div>
    </div>
  );
};
