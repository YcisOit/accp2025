'use client';
import Link from 'next/link';
import { Home} from 'lucide-react';

export default function AQAR() {
  return (
<div className="bg-pink-10 min-h-screen text-gray-800 pb-10">
      {/* Header */}
      <div><div className="text-center py-8">
        <h1 className="text-4xl font-bold text-red-700">AQAR</h1>
        <div className="mt-2 flex justify-center items-center gap-6 text-sm text-red-700">
           <div class="w-50 h-px bg-red-800"></div>
           <div class="mx-6 text-red-800 text-3xl">★</div>
           <div class="w-50 h-px bg-red-800"></div></div>
           <span>🏠</span>
          <span>››</span>
          <span className="underline">AQAR</span>
        </div>
      </div>

      {/* Content Box */}
      <div className="flex justify-center mt-16">
        <div className="bg-white shadow-md px-20 py-10 rounded-md text-center border">
          <h1 className="text-lg font-bold text-[#003366] mb-4">
            AQAR Report 22-23
          </h1>
          <Link href="/pdf/aqar-report-22-23-1.pdf" target="_blank">
            <button className="bg-[#b22222] hover:bg-red-800 text-white px-8 py-2 rounded font-bold transition">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


