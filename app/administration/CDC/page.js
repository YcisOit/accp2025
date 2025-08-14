'use client';
import React from 'react';

export default function CDCPage() {
  const committeeMembers = [
    { name: 'Hon. Chandrakant N. Dalvi', role: 'Chairman, Rayat Shikshan Sanstha, Satara', designation: 'Chairman' },
    { name: 'Hon. Vikas Vishwasrao Deshmukh', role: 'Secretary, Rayat Shikshan Sanstha, Satara', designation: 'Member' },
    { name: 'Shri. Hanumant G. Nimase Principal', role: 'Nominated Member', designation: 'Member' },
    { name: 'Smt. Manuja B. Sonar', role: 'Teacher Representative', designation: 'Member' },
    { name: 'Shri. Lalasaheb K. Pawar', role: 'Teacher Representative', designation: 'Member' },
    { name: 'Dr. Sanjay R. Kshirsagar', role: 'Teacher Representative', designation: 'Member' },
    { name: 'Shri. Kishor S. Shinde', role: 'Non–Teaching Representative', designation: 'Member' },
    { name: 'Hon. Prin. Dr. Krushnaji M. Nalawade', role: 'Educationalist', designation: 'Member' },
    { name: 'Hon. Krishnarao K. Ghatage', role: 'Researcher', designation: 'Member' },
    { name: 'Hon. Sundargiri Maharaj', role: 'Social Worker', designation: 'Member' },
    { name: 'Hon. Adv. Kisan S. Khamkar', role: 'Industrialist', designation: 'Member' },
    { name: 'Shahaji A. Mali', role: 'Coordinator, IQAC', designation: 'Member' },
    { name: 'Chairman, College Student Council', role: 'Arts and Commerce College, Pusegaon', designation: 'Member' },
    { name: 'Secretary, College Student Council', role: 'Arts and Commerce College, Pusegaon', designation: 'Member' },
    { name: 'Hon. Principal', role: 'Arts and Commerce College, Pusegaon', designation: 'Secretary' },
  ];

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-4">
      <div class="bg-red-10 py-3 text-center">
  <h2 class="text-4xl font-bold text-red-800">College Development Committee (CDC)</h2>
  <div class="flex justify-center items-center mt-2">
    <div class="w-40 h-px bg-red-800"></div>
    <div class="mx-6 text-red-800 text-xl">★</div>
    <div class="w-40 h-px bg-red-800"></div></div>
      <div class="flex justify-center items-center mt-2 text-red-800 text-sm font-medium space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
      <path d="M10.707 1.707a1 1 0 00-1.414 0L1 10h3v7a1 1 0 001 1h4V13h2v5h4a1 1 0 001-1v-7h3L10.707 1.707z" />
    </svg>
    <span class="text-xs">»</span>
    <span class="text-sm">College Development Committee (CDC)</span>
  </div>
        </div>
         <div className="max-w-5xl mx-auto bg-white shadow-md hover:shadow-15xl rounded-xl border border-black-300 overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#0D2B4F] text-white">
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Designation</th>
                <th className="py-2 px-4 border">Role</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((member, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="py-2 px-4 border">{member.name}</td>
                  <td className="py-2 px-4 border">{member.role}</td>
                  <td className="py-2 px-4 border">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  
  );
}
