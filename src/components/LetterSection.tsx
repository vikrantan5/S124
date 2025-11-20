import { Mail } from 'lucide-react';

function LetterSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <Mail className="w-16 h-16 text-pink-500 animate-bounce" />
        </div>

        <div className="letter-paper bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 transform hover:scale-105 transition-transform duration-300">
          <div className="font-handwriting text-gray-700 space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-2xl text-pink-600 mb-8">Dear Soni,</p>

            <p>
              I am deeply sorry for whatever hurt you. You matter a lot to me, and I don't want anything to disturb you.
            </p>

            <p>
              I hope this silly little website brings a smile to your face. You deserve all the happiness in the world, and I'm truly sorry if I took any of that away, even for a moment.
            </p>

            <p>
              Our friendship means everything to me, and I promise to cherish it always.
            </p>

            <p className="text-right mt-12 text-pink-600">
              With care and love,<br />
              <span className="text-2xl">Your Friend 💛</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetterSection;
