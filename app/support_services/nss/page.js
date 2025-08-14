"use client";
import Head from "next/head";
import { useState } from "react";

export default function NSS() {
  const [activeTab, setActiveTab] = useState("nss");

  return (
    <>
      <Head>
        <title>NSS</title>
      </Head>

      <div className="bg-[#fff7f5] min-h-screen">
        {/* Page Title */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-[#a31c1c]">NSS</h1>
          <div className="text-[#a31c1c] mt-2">
            <span className="text-sm">🏠 &nbsp;&raquo; &nbsp; NSS</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-md app/about/aboutfounder/page.js border-t-6 border-b-6 border-red-800 shadow-md px-6 py-4">
          {/* Tabs */}
          <div className="flex justify-center mb-4 space-x-2">
            <button
              onClick={() => setActiveTab("nss")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "nss"
                  ? "bg-[#123456] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              NSS
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "activities"
                  ? "bg-[#a31c1c] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              NSS Activities
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-2 font-semibold rounded ${
                activeTab === "gallery"
                  ? "bg-[#a31c1c] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Gallery
            </button>
          </div>
          

          {/* NSS Description */}
          {activeTab === "nss" && (
            <div className="text-black mt-6">
              <div className="text-center text-lg font-medium mb-4">
                (“NOT ME BUT YOU”)
              </div>
              <p className="text-justify mb-4">
                NSS makes the contribution to the socio-economic progress of the country. It also provides opportunities to the students to understand and appreciate the problems of community, awaken social consciousness and inculcate a sense of dignity of labour.
              </p>
                <p><strong>Aims and objectives:</strong> To provide opportunities to the students to understand and appreciate problems of community. To involve students in community services. To provide opportunities for personality development through community engagement. To contribute to the socio-economic progress of the country.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>National Service Scheme</li>
                <li>Date of Establishment: <strong>1994</strong></li>
                <li>Unit: <strong>01</strong></li>
                <li>Total Students: <strong>100</strong></li>
                <li>Winter Special Camp: <strong>50</strong></li>
                <li>Programme Officer: <strong>Prof. Katte A. P.</strong></li>
              </ul>
            </div>
          )}

          {/* NSS Activities PDF Download */}
          {activeTab === "activities" && (
            <div className=" mt-6">
              <p className="text-justify mb-4">
              </p>
              <ul className="list-disc pl-25 ">
                <strong>The various activities are conducted by NSS:</strong>
<li>National Service Scheme Inauguration Programme</li>
<li>Tree Plantation</li>
<li>Cleanliness Drive at  Various Places</li>
<li>Swacch Bharat Abhiyan</li>
<li>Beti Bachav – Beti Padhav Abhiyan</li>
<li>Karmaveer Jayanti</li>
<li>Mahatma Gandhi Jayanti</li>
<li>Awareness about Cleanliness</li>
<li>Swine Flu Awareness Programme</li>
<li>To inculcate the dignity of labor we arrange “Shramadan” programme.</li>
<li>International Yoga Day</li>
<li>Participation in Samudaik Vivah Sohala (Collective Marriage Ceremony for Poor)</li>
<li>Blood donation  Camp.</li>
<li>AIDS awareness Programme</li>
<li>De –addiction Programme.</li>
<li>Socio Awareness among college students.</li>
<li>Independence  day Celebration, Flag Hoisting and Campus cleaning</li>
<li>Teachers Day</li>
<li>Poster presentation Competition on the occasion of the World Population day</li>
<li>NSS day</li>
<li>National Voters day</li>
<li>Special Winter Camp</li>
              </ul>
            </div>
          )}

          {/* NSS Gallery */}
          {activeTab === "gallery" && (
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold text-[#a31c1c] mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {["nss1.jpg", "nss2.jpg", "nss3.jpg", "nss4.jpg", "nss5.jpg", "nss6.jpg"].map(
                  (img, index) => (
                    <div key={index} className="overflow-hidden rounded shadow">
                      <img
                        src={`/gallery/${img}`}
                        alt={`NSS Image ${index + 1}`}
                        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
