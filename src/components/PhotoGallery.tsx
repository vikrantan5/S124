import { Camera } from 'lucide-react';

function PhotoGallery() {
  const photos = [
    "Photos nhi h mere paas",
    "tumhara nhi to zarur dalta",
    "photos khud imagine karlo",
    "Good times together"
  ];

  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-handwriting text-center text-purple-600 mb-16">
          Our Memories 📸
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((text, index) => (
            <div
              key={index}
              className="polaroid animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="polaroid-inner">
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 aspect-square rounded-t-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-light">{text}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="h-1 w-20 bg-gray-300 rounded mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
