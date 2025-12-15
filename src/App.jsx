import { Navbar } from "./components/navbar/navBar";
import { Hero } from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Footer } from "./components/footer/Footer";
import { HeroServ } from "./components/heroServ/HeroServ";
import "./App.scss";

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
        <Services />
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
