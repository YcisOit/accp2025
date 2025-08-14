"use client";
{/*"use client";
import { FaUniversity } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { PiBooksFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";

const infoItems = [
  { icon: <FaUniversity size={32} />, label: "Admissions" },
  { icon: <GiGraduateCap size={32} />, label: "Scholarship" },
  { icon: <BsClipboardData size={32} />, label: "Syllabus" },
  { icon: <PiBooksFill size={32} />, label: "Prospectus" },
  { icon: <FaCalendarAlt size={32} />, label: "Academic Calendar" },
  { icon: <MdOutlineAssignment size={32} />, label: "Exam Section" },
];

export default function InfoLinks() {
  return (
    <div className="bg-[#A52B2B] text-white rounded-t-2xl p-6 flex justify-around items-center flex-wrap gap-6">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-sm hover:scale-105 transition-transform duration-200"
        >
          <div className="text-white mb-2">{item.icon}</div>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
  "use client";
  import Image from "next/image";
  
  const images = [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
    "/images/g6.jpg",
    
  ];
  
  export default function Gallery() {
    return (
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-[#0D2B4F] mb-4">Gallery</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[200px] flex-shrink-0 rounded overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
*/}


// components/PrincipalMessage.js


import Image from "next/image";
import principalImg from "/public/images/principal-1.jpg"; // Replace with your correct image path

export default function PrincipalMessage() {
  return (
    <div className="max-w-10xl mx-auto my-20 p-6 rounded-lg shadow-lg border-t-6 border-b-6 border-[#A52B2B] bg-white relative">
      <h2 className="text-xl font-bold text-[#0D2B4F] mb-4">Principal's Message</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Message Text */}
        <div className="text-s text-justify  font-bold text-black-800">
          <p>
            The college was established by Rayat Shikshan Sanstha at Pusegaon on 5th September, 1994
            with 77 students in drought prone area of Satara District with the aim of imparting
            education to socially and economically downtrodden masses. The institution is affiliated
            to Shivaji University, Kolhapur. It is multi-faculty (Arts and Commerce) institution
            having 05 departments viz. Marathi, Hindi, English, History and Commerce. Recently the
            institution has started PG Program in Hindi as per the recommendations of NAAC Peer
            Team. Today the strength of students is more than 500.
           
            The teaching and non teaching staff is well qualified and experienced. The college has
            been organizing regional, state and national seminars and conferences regularly. We are
            committed to enhance quality of the students and also to imbibe various values, research
            culture and skills among our students. For this purpose we run 12 short term courses.
            Our students have shown better results in sports and cultural competitions and have won
            many prizes. It is a matter of pride that the faculty members have been continuously
            striving hard to maintain the academic standards without disturbing their duties and
            activities in the college.
           
            I would like to thank our parent institution for their valuable guidance and
            encouragement. I am also thankful to college development committee for its active
            support, guidance and encouragement.
           
            Once again I welcome you to Arts and Commerce College, Pusegaon. I hope that students
            seeking and completing their education from this college will have bright and prosperous
            career.
          </p>
        </div>

        {/* Principal Image */}
        <div className="flex flex-col items-center">
          <div className="w-60 h-auto overflow-hidden rounded shadow">
            <Image
              src={principalImg}
              alt="Principal"
              className="rounded"
              width={300}
              height={350}
              objectFit="cover"
            />
          </div>
          <div className="mt-4 text-center text-sm text-[#A52B2B] font-medium">
            <p>Principal</p>
            <p>Dr. R. P. Bhosale</p>
            <p>(M.A. M.Phil Ph.D., D.Litt.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}


