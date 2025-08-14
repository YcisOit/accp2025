// app/about/page.js

"use client";
import React from "react";

const AboutCollege = () => {
  return (
    
    <div className="bg-white min-h-screen py-10 px-4 md:px-4">
      <div class="bg-red-10 py-3 text-center">
  <h2 class="text-4xl font-bold text-red-800">About College</h2>
  <div class="flex justify-center items-center mt-2">
    <div class="w-40 h-px bg-red-800"></div>
    <div class="mx-6 text-red-800 text-xl">★</div>
    <div class="w-40 h-px bg-red-800"></div>
  </div>
  <div class="flex justify-center items-center mt-2 text-red-800 text-sm font-medium space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
      <path d="M10.707 1.707a1 1 0 00-1.414 0L1 10h3v7a1 1 0 001 1h4V13h2v5h4a1 1 0 001-1v-7h3L10.707 1.707z" />
    </svg>
    <span class="text-xs">»</span>
    <span class="text-sm">about college</span>
  </div>
</div>
      <div className="max-w-6xl mx-auto border-t-6 border-b-6 border-red-800 shadow-lg z-0 rounded-md p-6 md:p-10">
        
        <p className="text-justify text-black-800 leading-relaxed mb-4">
          The college was established by Rayat Shikshan Sanstha at Pusegaon on 5th September, 1994 with 77 students in drought prone area of Satara District with the aim of imparting education to socially and economically downgraded masses. The institution is affiliated to Shivaji University, Kolhapur. It is multi- faculty (Arts and Commerce) institution having 05 departments viz. Marathi, Hindi, English, History and Commerce. Recently the institution has started PG Program in Hindi as per the recommendations of NAAC Peer Team. Today the strength of students is more than 500. The teaching and non teaching staff is well qualified and experienced.
        </p>
        <p className="text-justify text-gray-800 leading-relaxed mb-4">
          College has been recognized by the University Grants Commission with 2(f) and 12(b) on 14th Nov. 2007. The college has its own beautiful premises and well-developed campus with all required infrastructure and amenities, keeping best in tune with Information Technology (I.T). Apart from this college imparts skill and career oriented education by conducting UGC sponsored 3 COC courses like Tally Package, Translation and Communicative Proficiency in English and Balwadi Sevika Training Course and short term courses like, Basic Foundation of Computer, English Modi Script, Typing, Fashion Designing and Tailoring, Beauty and Wellness, Yoga, Karate, Foundation Course in Competitive Examination Guidance. The college is awarded “Karmaveer Paritoshik”, one of the prestigious awards, by Rayat Shikshan Sanstha, Satara in 2014 for its good performance. Institution has organized 02 state and 06 national level seminars and 01 state level conference during last five years which have increased the knowledge and research attitude of both students and faculty. The college was re-accredited with ‘B’ Grade 2.29 CGPA by NAAC Peer Team in 2012.
        </p>
        <p className="text-justify text-gray-800 leading-relaxed">
          To achieve the all round development of our students, college offers various extracurricular activities like Sports, NSS, Cultural activities, “Vedavati” (College magazine), Competitive Examination Guidance Centre, Women cell, Health services etc. College has been contributing in social cause by conducting blood donation camp, collecting relief fund for flood as well as drought, organizing street plays and cleanliness drive. Every year the college results of the college are always better than the results of the university. The college also organized Kabaddi (Boys and Girls) zonal tournaments. I hope College will prosper academically in future because we, the faculty, students, alumni together are walking on the road paved by the great visionary of Maharashtra & our founder Padmabhushan Dr. Karmveer Bhaurao Patil.
        </p>
      </div>
      
    </div>
    
  );
};

export default AboutCollege;
