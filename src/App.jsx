import { Navbar } from "./components/navbar/navBar";
import { Hero } from "./components/hero/Hero";
import { HeroServ } from "./components/heroServ/HeroServ";
import { Parallax } from "./components/parallax/Parallax";
import { Projection } from "./components/projection/projection";
import { HeroComp } from "./components/heroComp/HeroComp";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Footer } from "./components/footer/Footer";
import { Sections } from "./components/sections/Sections";
import { HeroResult } from "./components/heroResult/HeroResult";
import { HeroImpl } from "./components/heroImpl/HeroImpl";
import { ArePortfolio } from "./components/arePortfolio/ArePortfolio";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section>
        <HeroServ />
      </section>
      <section id="Objetivos">
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
      <section>
        <HeroResult />
      </section>
      <section>
        <HeroImpl />
      </section>
      <section id="Enfoque">
        <Parallax type="portfolio" />
      </section>
      <ArePortfolio />
      <section id="Contacto">
        <Contact />
      </section>
      <section
        id="Informacion"
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
