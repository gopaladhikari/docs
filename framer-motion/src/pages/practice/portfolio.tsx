import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Parallax from "../../components/Parallax";
import Services from "../../components/Services";
import PortfolioSection from "../../components/Portfolio";
import "../../styles/main.scss";

export default function Portfolio() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <PortfolioSection />
      <section id="contact">Contact</section>
      <section id="about">About</section>
    </>
  );
}
