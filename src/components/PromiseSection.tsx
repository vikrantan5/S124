import { Ear, Heart, Flower2 } from 'lucide-react';

function PromiseSection() {
  const promises = [
    {
      icon: Ear,
      text: "Maaf karde yaar",
      emoji: "🙏"
    },
    {
      icon: Heart,
      text: "Nahi hoga abse",
      emoji: "🥲"
    },
    {
      icon: Flower2,
      text: "I promise to always respect our friendship",
      emoji: "🌸"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-handwriting text-center text-pink-600 mb-16">
          My Promises to You 🤝
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div
                key={index}
                className="promise-card bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl text-gray-700 text-center font-light mb-2">
                  {promise.text}
                </p>
                <p className="text-4xl text-center">{promise.emoji}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PromiseSection;
