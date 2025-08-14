'use client';
import Image from 'next/image';
import ccImage from '@/public/gallery/cc1.jpeg'; // Put image in public folder

export default function cc() {
  return (
    <div className="bg-pink-30 min-h-screen text-black-800 pb-10">
      {/* Header */}
      <div><div className="text-center py-8">
        <h1 className="text-4xl font-bold text-red-800">Career Katta</h1>
        <div className="mt-2 flex justify-center items-center gap-6 text-sm text-red-800">
           <div class="w-50 h-px bg-red-800"></div>
           <div class="mx-6 text-red-800 text-3xl">★</div>
           <div class="w-50 h-px bg-red-800"></div></div>
           <span>🏠</span>
          <span>››</span>
          <span className="underline">Career Katta</span>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <Image
          src={ccImage}
          alt="Career Katta"
          width={700}
          height={400}
          className="rounded-d shadow-md"
        />
      </div>
      </div>
  )
}




