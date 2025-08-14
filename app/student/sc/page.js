'use client';
import React from 'react';

export default function scpage() {
  const facultyMembers = [
    {SrNo: '1', Name: 'Government Scholarships' },
    { SrNo: '2', Name: 'Freeship for Backward Class',},
    { SrNo: '3', Name: 'Chh. Rajarshi Shahu Maharaj Scholarship (EBC)',},
    {SrNo: '4', Name: 'Shivaji University ,Kolhapur Merit Scholarship',},
    { SrNo: '5', Name: 'Dr. Punjabrao Deshmukh Scholarship',},
    {SrNo: '6', Name: 'Non-Government Scholarship',},
    {SrNo: '7', Name: 'Barrister P. G. Patil Scholarship',},
    { SrNo: '8', Name: 'State Government Open Merit Scholarship',},
    { SrNo: '9', Name: 'Central Sector Scholarship',},
    { SrNo: '10', Name: 'Rayat Shikshan Sanstha’s Merit Scholarship',},
  ];

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-4">
      <div class="bg-red-10 py-3 text-center">
  <h2 class="text-4xl font-bold text-red-800">Scholarships</h2>
  <div class="flex justify-center items-center mt-2">
    <div class="w-40 h-px bg-red-800"></div>
    <div class="mx-6 text-red-800 text-xl">★</div>
    <div class="w-40 h-px bg-red-800"></div></div>
      <div class="flex justify-center items-center mt-2 text-red-800 text-sm font-medium space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
      <path d="M10.707 1.707a1 1 0 00-1.414 0L1 10h3v7a1 1 0 001 1h4V13h2v5h4a1 1 0 001-1v-7h3L10.707 1.707z" />
    </svg>
    <span class="text-xs">»</span>
    <span class="text-sm">Scholarships</span>
  </div>
        </div>
         <div className="max-w-5xl mx-auto bg-white shadow-md hover:shadow-15xl rounded-xl border border-black-300 overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#0D2B4F] text-white">
              <tr>
                <th className="py-2 px-4 border">Sr.No</th>
                <th className="py-2 px-4 border">Name of Faculty</th>
              </tr>
            </thead>
            <tbody>
              {facultyMembers.map((member, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="py-2 px-4 border">{member.SrNo}</td>
                  <td className="py-2 px-4 border">{member.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  
  );
}
