import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import About from "./About";
import Carousel from "./Glimpse";
import HomeAbout from "./HomeAbout";
import JoinOur from "./JoinOur";
import OurEvents from "./OurEvents";
import TestimonialsCarousel from "./Testimonials";
import UpperSection from "./UpperSection";
function LandingPage() {
  return (
    <>
      <div className="overflow-x-hidden bg-gray-900 after:content-['']">
        <UpperSection />
        <About />
        <OurEvents />
        <TestimonialsCarousel />
        <Carousel />
        <JoinOur />
      </div>
    </>
  );
}

export default LandingPage;
