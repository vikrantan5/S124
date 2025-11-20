import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-pink-500 animate-pulse" fill="currentColor" />
          <Heart className="w-8 h-8 text-pink-600 animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-pink-500 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>

        <p className="text-2xl md:text-3xl font-handwriting text-purple-700 mb-4">
          "Friendships are stronger than mistakes."
        </p>

        <p className="text-gray-600 text-sm">
          Made with love and lots of apologies 💕
        </p>
      </div>
    </footer>
  );
}

export default Footer;
