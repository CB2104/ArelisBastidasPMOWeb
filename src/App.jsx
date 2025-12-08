import { Navbar } from './components/navbar/navBar';
import { Hero } from './components/hero/Hero';
import { Parallax } from './components/parallax/Parallax';
import { Services } from './components/services/Services';
import './App.scss'

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section><Services/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <section>Projects1</section>
    <section>Projects2</section>
    <section>Projects3</section>
    <section id='Contact'>Contact</section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
