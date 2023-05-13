import "./App.css";
import Frustration from "./components/Frustration";
import HeroSec from "./components/HeroSec";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SolutionSec from "./components/SolutionSec";
import ReasonSec from "./components/ReasonSec";
import OurBlogs from "./components/OurBlogs";
import OurPartners from "./components/OurPartners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetInTouch from "./components/GetInTouch";
import CaseStudy from "./components/CaseStudy";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <MyNav />
        <HeroSec />
        <OurPartners />
        <Frustration />
        <SolutionSec />
        <ReasonSec />
        <CaseStudy />
        <OurBlogs />
        <Testimonials />
        <GetInTouch />
        <BackToTop />
        <Preloader />
      </div>
    </>
  );
}

export default App;
