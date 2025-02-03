import { TaglineSection } from "./tagline-section";
import { CardSection } from "./cards-section";

export function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-between p-8 ">
        <div className="mt-40 mb-40">
          <TaglineSection />
        </div>

        <CardSection />
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-gray-200 h-48 md:h-64 rounded-lg"></div>{" "}
          {/* Placeholder for Image/Text */}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
          <div className="col-span-2 bg-gray-300 h-20 rounded-lg"></div>{" "}
          {/* Top Box */}
          <div className="bg-gray-300 h-32 rounded-lg"></div>{" "}
          {/* Left Small Box */}
          <div className="bg-gray-300 h-32 rounded-lg"></div>{" "}
          {/* Right Small Box */}
        </div>
      </section>
    </>
  );
}
