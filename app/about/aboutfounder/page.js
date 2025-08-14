'use client';

import Image from 'next/image';
// import MenuBar from './components/MenuBar';


export default function AboutFounder() {
  return (
    <>

      {/* <MenuBar /> */}
      <div className="bg-[#fff8f6] py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#9a1e2d] mb-4">About Founder</h1>
          <hr className="border-t-2 border-[#9a1e2d] w-10 mx-auto mb-10 drop-shadow-lg" />
              {/* Right Side Shadow */}
        <div className="absolute top-0 right-0 h-full w-2 shadow-lg z-0" />    
          <div className="bg-white rounded-md  border-t-6 border-b-6 border-[#9a1e2d]  p-4 sm:p-10 mx-2 sm:mx-6">
            <div className="flex flex-col items-center">
              <Image
                src="/image/aboutfounder.png"
                alt="Padmabhushan Dr. Karmaveer Bhaurao Patil"
                width={200}
                height={100}
                className="rounded-full border border-white-300"
              />
              <h2 className="text-lg font-semibold mt-4 text-[#9a1e2d]">
                Padmabhushan Dr. Karmaveer Bhaurao Patil
              </h2>
            </div>

            <p className="mt-4 text-justify font-body-roboto text-black-800 leading-relaxed text-sm sm:text-base">
              Padmabhushan Dr. Karmaveer Bhaurao Patil was born on 22nd September, 1887 at Kumbhoj, in Kolhapur district of Maharashtra. 
              People called him ‘Anna’. He was greatly influenced by Rajarshi Chhatrapati Shahu Maharaj, king of Kolhapur who advocated 
              social equality and promoted education to the downtrodden and poor masses of the society. One of the famous social reformers, 
              Mahatma Jyotirao Phule made a demand for providing free education for all. The social reformers movement in the 19th century 
              in Maharashtra led by Lokmanya Tilak, Gopal Ganesh Agarkar, Mahadev Govind Ranade and others brought changes in the educational 
              systems. The King of Kolhapur, Chhatrapati Shahu Maharaj even brought in the reservation system in education. 
              Bhaurao Patil was influenced by these reforms and started educating the children of rural Maharashtra.
              <br />
              Padmabhushan Dr. Karmaveer Bhaurao Patil, man of masses, understood the social ills and realized the need to spread the 
              education. In his view, education was the means to empower the masses to enjoy the fruits of freedom and to emancipate 
              them from social, economic and cultural slavery. Thus, he founded the Rayat Shikshan Sanstha by opening Boarding House at 
              Kale (Tal-Karad, Dist-Satara) in 1919. He believed that education alone could eradicate illiteracy, untouchability, 
              caste-hierarchy and superstitions, social and economic inequality. He was the prophet of the poor, and strived for their upliftment. 
              Such renowned person has established this educational institution with specific aims and objectives.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}
