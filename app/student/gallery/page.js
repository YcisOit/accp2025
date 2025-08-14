'use client';
import { useState } from 'react';
import Image from 'next/image';

const galleryData = {

  "Welcome of AAA Committee 2023-24": [
    '/img/img7.jpeg',
   '/img/img8.jpeg',
    '/img/img9.jpeg',
  ],
  "NSS Rally, Camp, Cleaning Activity": [
    '/img/img10.jpeg',
    '/img/img11.jpeg',
    '/img/img12.jpeg',
    '/img/img13.jpeg',
    '/img/img17.jpeg',
    '/img/img15.jpeg',
  ],
  "Annual Awards Ceremony 2025": [
    '/images/img.jpg',
   '/images/img.jpg',
    '/images/img.jpg',
  ],
   "Various competitions organized on the occasion of Annual Gymkhana Day": [
    '/images/img.jpg',
   '/images/img.jpg',
    '/images/img.jpg',
  ],
   
   "Preliminary Examination": [
    '/images/img.jpg',
   '/images/img.jpg',
    '/images/img.jpg',
  ],
  "Event and Extension Activity": [
    '/images/img.jpg',
   '/images/img.jpg',
    '/images/img.jpg',
  ],
};

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Gallery</h1>

        {Object.entries(galleryData).map(([title, images], idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-xl font-semibold text-center text-black mb-6">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <div key={i} className="border-3 p-1 shadow hover:scale-105 transition-transform">
                  <Image
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
}