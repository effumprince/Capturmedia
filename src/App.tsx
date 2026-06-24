import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';
import ApertureWipe from './components/ApertureWipe';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Catalog from './pages/Catalog';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <ApertureWipe />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
      <ToTopButton />
    </BrowserRouter>
  );
}

export default App;
