import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ToggleThemes } from "../toggle-themes";
import { SignupAndSigninButtons } from "../auth/SignupAndSigninButtons";
import { userEmailState } from "@/store/selectors/userEmail";
import { useRecoilValue } from "recoil";
import { UserProfileBanner } from "../auth/user-profile-banner";
import { BlogsMenu } from "./navbar-blogs-menu";

export const Navbar = () => {
  const userEmail = useRecoilValue(userEmailState);
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        {/* 1. Website Icon  */}
        <div className="text-3xl font-bold">
          <Link to="/">
            <span className="text-fuchsia-500">Blo</span>
            <span className="text-neutral-800 dark:text-neutral-400">gram</span>
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
                <Link
                  to="/about-us"
                  className={cn(
                    "flex space-x-2 rounded-md px-3 py-2  hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black dark:text-neutral-400"
                  )}
                >
                  About Us
                </Link>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                {/* <Link
                  to="/"
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
                  }
                </Link> */}
                <BlogsMenu />
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <Link
                  to="/"
                  className={cn(
                    " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black"
                  )}
                >
                  Membership
                </Link>
              </NavigationMenuPrimitive.Item>

              <NavigationMenuPrimitive.Item>
                <Link
                  to="/"
                  className={cn(
                    " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-200 text-sm font-medium text-primary transition-colors ease-out hover:text-black "
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuPrimitive.Item>
            </NavigationMenuPrimitive.List>
          </NavigationMenuPrimitive.Root>
        </div>

        {/* 3. Signup-Signin-ProfileBanner*/}
        <div className="flex items-center space-x-3">
          {userEmail ? (
            <>
              <UserProfileBanner />
            </>
          ) : (
            <SignupAndSigninButtons />
          )}
          <ToggleThemes />
        </div>
      </div>
    </div>
  );
};
