import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ReasonSection from './components/ReasonSection';
import PhotoGallery from './components/PhotoGallery';
import LetterSection from './components/LetterSection';
import ForgivenessSection from './components/ForgivenessSection';
import PromiseSection from './components/PromiseSection';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = "For Soni Shaw 💗";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 overflow-hidden">
      <FloatingHearts />
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <ReasonSection />
        <PhotoGallery />
        <LetterSection />
        <ForgivenessSection />
        <PromiseSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
