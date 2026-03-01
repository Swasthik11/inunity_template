import './styles/global.css';
import Cursor       from './components/Cursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import About        from './components/About';
import Offerings    from './components/Offerings';
import Cluster      from './components/Cluster';
import Impact       from './components/Impact';
import Inpulse      from './components/Inpulse';
import Testimonials from './components/Testimonials';
import CTABand      from './components/CTABand';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Offerings />
        <Cluster />
        <Impact />
        <Inpulse />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
