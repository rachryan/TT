import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Services from './components/Services';
import HealthCheck from './components/HealthCheck';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Process />
        <Services />
        <HealthCheck />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
