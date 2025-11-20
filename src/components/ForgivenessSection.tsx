import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

function ForgivenessSection() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [forgiven, setForgiven] = useState(false);

  const handleYes = () => {
    setForgiven(true);
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth > 768 ? 200 : 100;
    const maxY = window.innerWidth > 768 ? 200 : 100;
    setNoButtonPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#FF6B9D', '#C44569', '#FFC4D0', '#A8E6CF', '#FFD3B6'][Math.floor(Math.random() * 5)]
            }} />
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-handwriting text-purple-600 mb-12">
          Will You Forgive Me? 🥺
        </h2>

        {!forgiven ? (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleYes}
              className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-12 py-6 rounded-full text-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
            >
              <Heart fill="currentColor" />
              Yes ❤️
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={{
                transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`
              }}
              className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 px-12 py-6 rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              No 😭
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <Sparkles className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
              <h3 className="text-4xl font-handwriting text-pink-600 mb-4">
                Yay! Thank you Soni! 🎉
              </h3>
              <p className="text-xl text-gray-700">
                You just made me the happiest person! Thank you for being so understanding and amazing! 💖
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ForgivenessSection;
