import { TaglineSection } from "./tagline-section";
import { CardSection } from "./cards-section";

export function HeroSection() {
  return (
    <div className="h-[40rem] flex items-center justify-between p-8">
      <TaglineSection/>
      <CardSection/>
    </div>
  );
}
