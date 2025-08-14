"use client";

import Image from "next/image";
import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import InfoLinks from "./components/InfoLinks";
import Gallery from "./components/Gallery";


export default function HomePage() {
  const images = ["/images/i1.jpg", "/images/i2.jpg", "/images/i5.jpg", "/images/i4.jpg", "/images/i3.jpg"];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <main className="bg-white">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* ⬅️ Left Sidebar */}
        <div className="bg-white p-2">
          <LeftSidebar />
        </div>

        {/* 🖼️ Center Content */}
        <section className="flex-10 p-3 h-full">
          {/* Image Slider */}
          <div className="relative w-full h-[500px] mb-4 overflow-hidden rounded shadow"> {/* Adjust height here */}
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Image
        src={img}
        alt={`Slide ${index + 1}`}
        fill
        className="object-cover"
        priority={index === 0}
      />
    </div>
  ))}

  {/* Slider Buttons */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-20"
  >
    ◀
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-20"
  >
    ▶
  </button>
</div>
           {/*Welcome Text */}

           <div className="text-justify text-m md:text-base">
            <h2 className="text-lg font-bold text-blue-900 mb-2">Welcome Arts and Commerce College, Pusegaon</h2>
            <p>
The college was established by Rayat Shikshan Sanstha at Pusegaon on 5th September, 1994 with 77 students in drought prone area of Satara District 
with the aim of imparting education to socially and economically downtrodden masses. The institution is affiliated to Shivaji University, Kolhapur. 
It is multi- faculty (Arts and Commerce) institution having 05 departments viz. Marathi, Hindi, English, History and Commerce. Recently the institution has started PG Program in 
Hindi as per the recommendations of NAAC Peer Team. Today the strength of students is more than 500.The teaching and non teaching staff is well qualified and experienced.</p>
          </div>
          <br></br>

<div>
  <InfoLinks />
</div>



        </section>
        
        {/* ➡️ Right Sidebar */}
        <div className="bg-white p-2">
          <RightSidebar />
        </div>

      </div>
      <div className="min-h-screen bg-white" >
  <Gallery />
</div>
    
    </main>
  );
}
