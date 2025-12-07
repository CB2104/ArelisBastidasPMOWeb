import './App.scss'
import { Navbar } from './components/navbar/navBar';
import { Test } from './Test';

const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Projects1</section>
    <section>Projects2</section>
    <section>Projects3</section>
    <section>Contact</section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
