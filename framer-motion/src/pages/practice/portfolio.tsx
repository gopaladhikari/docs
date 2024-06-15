import Navbar from "../../components/Navbar";
import "../../styles/main.scss";

export default function Portfolio() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section id="Homepage">Parallax</section>
      <section id="services">Services</section>
      <section id="portfolio">Portfolio</section>
      <section id="contact">Contact</section>
      <section id="about">About</section>
    </>
  );
}
