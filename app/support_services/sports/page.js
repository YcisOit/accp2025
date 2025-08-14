"use client"
import Head from 'next/head';
import { useState } from 'react';

export default function Sports() {
  const [activeTab, setActiveTab] = useState('sports');

  return (
    <>
      <Head>
        <title>Sports</title>
      </Head>

      <div className="bg-[#fff7f5] min-h-screen">
        {/* Page Title */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-[#a31c1c]">Sports</h1>
          <div className="text-[#a31c1c] mt-2">
            <span className="text-sm">🏠 &nbsp;&raquo; &nbsp; Sports</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-md border border-black-300 shadow-md px-6 py-4">
          {/* Tabs */}
          <div className="flex justify-center mb-4 space-x-2">
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === 'sports'
                  ? 'bg-[#123456] text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === 'gallery'
                  ? 'bg-[#a31c1c] text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Gallery
            </button>
          </div>

          {/* Sports PDF Section */}
          {activeTab === 'sports' && (
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold text-[#123456] mb-2">Download Sports PDF</h2>
              <a
                href="/sports.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#a31c1c] text-white px-4 py-2 rounded hover:bg-[#7f1724] transition duration-200 mb-4"
              >
                📄 Download PDF
              </a>
              {/* <div className="mt-4 flex justify-center">
                <iframe
                  src="/sports.pdf"
                  width="100%"
                  height="600px"
                  className="rounded shadow border border-gray-300"
                />
              </div> */}
            </div>
          )}

          {/* Gallery Section */}
          {activeTab === 'gallery' && (
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold text-[#a31c1c] mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['sport4.jpg', 'sport5.jpg', 'sport7.jpg','sport8.jpg','sport110.jpg','sport112.jpg'].map((img, index) => (
                  <div key={index} className="overflow-hidden rounded shadow">
                    <img
                      src={`/gallery/${img}`}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}