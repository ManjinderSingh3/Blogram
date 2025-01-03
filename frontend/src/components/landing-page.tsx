import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { NavbarMobile } from "./navbar-mobile";
import { HeroSection } from "./hero-section";

export const LandingPage = () => {
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
      {/* Conditionally render Navbar or NavbarMobile */}
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <HeroSection />
    </div>
  );
};
