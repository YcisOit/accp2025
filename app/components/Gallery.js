'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
  '/images/g1.jpg',
  '/images/g2.jpg',
  '/images/g3.jpg',
  '/images/g4.jpg',
  '/images/g5.jpg',
  '/images/g6.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // Auto scroll functionality
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 1, // speed of scroll
          behavior: 'smooth',
        });
      }
    }, 20); // how often it scrolls (ms)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-[#0D2B4F] mb-10">Gallery</h2>

      {/* Horizontal Auto-Scrolling Gallery */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 w-max overflow-x-scroll no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer min-w-[400px] h-[260px] relative"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                width={400}
                height={260}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Selected"
            width={1000}
            height={700}
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
