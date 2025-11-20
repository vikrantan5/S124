import { Heart } from 'lucide-react';

function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('reason-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        <div className="mb-6 flex justify-center gap-4">
          <Heart className="w-12 h-12 text-pink-400 animate-pulse" fill="currentColor" />
          <Heart className="w-16 h-16 text-pink-500 animate-bounce" fill="currentColor" />
          <Heart className="w-12 h-12 text-pink-400 animate-pulse" fill="currentColor" />
        </div>

        <h1 className="text-6xl md:text-8xl font-handwriting text-pink-600 mb-6 animate-slide-down">
          Soni,
        </h1>
        <h2 className="text-5xl md:text-7xl font-handwriting text-purple-500 mb-8 animate-slide-up">
          I'm really sorry 💗
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light leading-relaxed animate-fade-in-delay">
          I didn't mean to hurt you. You're very special to me.
        </p>

        <button
          onClick={scrollToNext}
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-500 hover:to-purple-500"
        >
          Forgive Me? 💖
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
