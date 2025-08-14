// app/about-sanstha/page.tsx
import Image from 'next/image';
import buildingImage from '@/public/image/sanstha.jpg'; // Put image in public folder

export default function AboutSanstha() {
  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 pb-10">
      {/* Header */}
      <div><div className="text-center py-8">
        <h1 className="text-4xl font-bold text-red-700">About Sanstha</h1>
        <div className="mt-2 flex justify-center items-center gap-6 text-sm text-red-700">
           <div class="w-40 h-px bg-red-800"></div>
           <div class="mx-6 text-red-800 text-xl">★</div>
           <div class="w-40 h-px bg-red-800"></div></div>
           <span>🏠</span>
          <span>››</span>
          <span className="underline">about hindi
            
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <Image
          src={buildingImage}
          alt="Rayat Shikshan Sanstha Building"
          width={900}
          height={400}
          className="rounded-d shadow-md"
        />
      </div>

      {/* Accordion */}
      <div className="max-w-5xl mx-auto space-y- px-8">
        <details className="border border-black-300 rounded-d p-4 bg-white">
          <summary className="font-bold cursor-pointer">
            AIMS AND OBJECTIVES OF RAYAT SHIKSHAN SANSTHA
          </summary>
           <div className="px-6 py-4 text-sm text-black-100 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>To impart liberal and vocational education from pre-primary to university level to rise generations.</li>
              <li>To impart the knowledge to the students of new generation.</li>
              <li>To provide education to the people from remote places, tribal-rural, and urban areas by establishing educational institutions.</li>
              <li>To provide education to all the classes of society especially to the downtrodden, economically and socially backward sections of the society.</li>
              <li>To provide education to women by establishing girls schools, high schools and colleges.</li>
              <li>To inculcate values like social equality, feeling of brotherhood and self-help by establishing boarding houses.</li>
              <li>To provide training for quality improvement of teachers and non-teaching employees of the Sanstha.</li>
              <li>To make available competent trained teachers for the schools.</li>
              <li>For enrichment of the dignity of labour to make the arrangements for providing the education against the labour.</li>
              <li>To promote the acquisition of the knowledge and to offer opportunities for upgrading the knowledge, training and skills in all fields of human endeavor by developing educational network with use of modern communication media and technologies.</li>
              <li>To enrich and enhance the quality and standards of the education.</li>
              <li>To promote the education to enable the students to accept the challenges of new era.</li>
              <li>To promote a sense of equality, national integration, social justice, secularism and to be a catalyst in socio-economic transformation by basic attitudes and values of essence of national development among the students.</li>
              <li>To make arrangements for promoting the healthy atmosphere, corporate life and welfare of the students and employees.</li>
            </ul>
          </div>
      
        </details>

        <details className="border border-black-900 rounded-d p-4 bg-white">
          <summary className="font-bold cursor-pointer">
            HIGHLIGHTS OF RAYAT SHIKSHAN SANSTHA'S VARIOUS PROJECTS
          </summary>
           <div className="px-16 py-4 text-sm text-black-100 leading-relaxed space-y-2">
    <ul className="list-disc list-inside space-y-12">
      <li>Merit Promotion Scheme in its every institution.</li>
      <li>Computerization of some institutions with E-mail and Internet facilities. Formation of the websites of the Sanstha and all the colleges of Sanstha.</li>
      <li>Ashramshalas for the education of Aadivasis.</li>
      <li>Initiation of Gurukul Project at Satara and at various places in Sanstha.</li>
      <li>Earn and Learn scheme.</li>
      <li>Rayat Printing Press at Satara and Ahmednagar.</li>
      <li>Educational furniture manufacturing workshops at Satara and Ahmednagar.</li>
      <li>Stationery (Note books, Exercise Books & Journals) production centre.</li>
      <li>Co-Operative stores of sports material, stationery and Laboratory chemicals, etc.</li>
      <li>Rayat Sevak Co-Operative Bank Ltd. Satara.</li>
      <li>Late Shrimati Laxmibai Bhaurao Patil Co-Operative Academic Loan Scholarship Fund.</li>
      <li>Rayat Shikshan Sanstha’s Employees Welfare Fund.</li>
      <li>Weaker branch Development Fund.</li>
      <li>Building loan scheme for its various branches with 0% interest.</li>
      <li>Non grant-institution aid fund.</li>
      <li>Special school for S.S.C. failed students.</li>
      <li>Karmveer Vidhya Prabodhini:</li>
      <ul className="list-[lower-alpha] list-inside ml-4 space-y-1">
        <li>Preparation of text books, workbooks and course material.</li>
        <li>Research journal.</li>
        <li>Rayat Talent Search Scheme (RTS).</li>
        <li>Maharshi Vitthal Ramji Shinde Adhyasan.</li>
        <li>Kala Krida Manch.</li>
        <li>Competitive Examination Centres.</li>
      </ul>
      <li>Vocational Guidance Centers.</li>
      <li>Audio-Visual Aids Production Unit.</li>
      <li>Karmveer Institute of Information Technology (KIIT).</li>
    </ul>

    <p className="pt-4 text-justify">
      There are <strong>43 (25 Junior Colleges)</strong> Senior colleges, <strong>441 (184 Junior Colleges)</strong> Secondary Schools, <strong>7</strong> Training Colleges, <strong>52</strong> Primary Schools, <strong>42</strong> Pre-Primary Schools, <strong>91</strong> boys and girls hostels, <strong>7</strong> Administrative Offices, <strong>8 (04 Junior Colleges)</strong> Ashramshalas, <strong>3</strong> ITIs, <strong>1</strong> RIRD, and <strong>57</strong> Ancillary branches in the sanstha’s credit. There are total <strong>751 branches</strong> of our Sanstha.
    </p>
  </div>
</details>
      </div>
    </div>
  );
}
