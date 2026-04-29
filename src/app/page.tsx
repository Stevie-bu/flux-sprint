import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import About from "@/components/About";
import PhotoBreak from "@/components/PhotoBreak";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <About />
      <PhotoBreak />
      <Services />
      <Portfolio />
      <Testimonials />
      <News />
      <Footer />
    </>
  );
}
