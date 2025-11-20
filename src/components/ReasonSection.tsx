import { Heart, Sparkles, Star } from 'lucide-react';

function ReasonSection() {
  const reasons = [
    {
      icon: Heart,
      text: "I know I made a mistake. aur sorry ye urta hua heart dalne k liye aur kuch acchaa nhi mil rha tha",
      color: "pink"
    },
    {
      icon: Sparkles,
      text: "I truly value our friendship.",
      color: "purple"
    },
    {
      icon: Star,
      text: "I promise to do better and understand you more.",
      color: "blue"
    }
  ];

  return (
    <section id="reason-section" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-handwriting text-center text-pink-600 mb-16">
          Why I'm Sorry 💫
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${reason.color}-300 to-${reason.color}-400 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 text-center font-light leading-relaxed">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReasonSection;
