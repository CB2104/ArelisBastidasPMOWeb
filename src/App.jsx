import { Navbar } from "./components/navbar/navBar";
import { Hero } from "./components/hero/Hero";
import { HeroServ } from "./components/heroServ/HeroServ";
import { Parallax } from "./components/parallax/Parallax";
import { Projection } from "./components/projection/projection";
import { HeroComp } from "./components/heroComp/HeroComp";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Footer } from "./components/footer/Footer";
import "./App.scss";
import { Sections } from "./components/sections/Sections";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <HeroServ />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Projection />
      </section>
      <section>
        <HeroComp />
      </section>
      <section>
        <Sections />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section
        id="about"
        style={{ height: "auto", minHeight: "auto", scrollSnapAlign: "end" }}
      >
        <Footer />
      </section>
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
