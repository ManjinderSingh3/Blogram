import { Navbar } from "./navbar";
import { HeroSection } from "./hero-section";

export const LandingPage = () => {
  return (
    <div>
      <div className="lg:hidden">
        <HeroSection />
      </div>
      <div className="hidden lg:block">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};
