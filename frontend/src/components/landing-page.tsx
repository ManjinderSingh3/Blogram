import { useEffect, useState } from "react";
import { NavbarMobile } from "./navbar-mobile";
import { HeroSection } from "./hero-section";
import { Navbar } from "@/components/Navbar";
import { useRecoilValue } from "recoil";
import { hamburgerAtom } from "@/store/atoms/hamburger";
import { InitUser } from "./init-user";

export const LandingPage = () => {
  const openHamburger = useRecoilValue(hamburgerAtom);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Dynamically check screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    updateScreenSize(); // Initialize on component mount
    window.addEventListener("resize", updateScreenSize); // Update on resize

    return () => {
      window.removeEventListener("resize", updateScreenSize); // Clean up listener
    };
  }, []);

  return (
    <div>
      <InitUser />
      {/* Conditionally render Navbar or NavbarMobile */}
      {isMobile && !openHamburger ? (
        <>
          <NavbarMobile />
          <HeroSection />
        </>
      ) : isMobile && openHamburger ? (
        <NavbarMobile />
      ) : (
        <>
          <Navbar />
          <HeroSection />
        </>
      )}
    </div>
  );
};
