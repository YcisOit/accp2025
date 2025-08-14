'use client';
import { useState } from 'react';
<h1>NACC</h1>
const criteriaData = [
  {
    title: 'Criteria-1',
    isOpen: true,
    content: [
      { no: 1, criteria: 'BOS 2017 to 2019', link: '/nacc/1.pdf' },
      { no: 2, criteria: 'Paper Examinar 2014 to 2019', link: '/nacc/2.pdf' },
      { no: 3, criteria: 'Paper Setter 2014 to 2019', link: '/nacc/3.pdf' },
    ],
  },
  {
    title: 'Criteria-2',
    isOpen: true,
    content: [
      { no: 1, criteria: 'B.A. Result ledgers 2014-19', link: '#' },
      { no: 2, criteria: 'B.Com Result ledgers 2014-19', link: '#' },
      { no: 3, criteria: 'Use of ICT In Teaching and Learning', link: '/nacc/2_3.pdf' },
      { no: 4, criteria: 'Student Admision List', link: '/nacc/2_4.pdf' },
      { no: 5, criteria: 'Cast Wise Student List', link: '#' },
    ],
    
  },
  {
    title: 'Criteria-3',
  isOpen: true,
    content: [
      { no: 1, criteria: 'Paper published per teacher in the journals notified on UGC Website last five year', link: '#' },
      { no: 2, criteria: 'Books Published in last five years', link: '/nacc/3_2.pdf' },
      { no: 3, criteria: 'paper published in national , international conference proceeding last five year', link: '#' },
    ],
  },
  {
    title: 'Criteria-5',
    isOpen: true,
    content: [
      { no: 1, criteria: 'Placement Students last five year', link: '/nacc/5_1.pdf' },
      { no: 2, criteria: 'Soft Skills', link: '5_2.pdf' },
      { no: 3, criteria: 'Language and Communication Skills ', link: '/nacc/5_3.pdf' },
         { no: 4, criteria: 'Life Skills', link: '/nacc/5_4.pdf' },
      { no: 5, criteria: 'ICT/Computing Skills', link: '/nacc/5_5.pdf' },
    ],
  },
  {
    title: 'Criteria-7',
   isOpen: true,
    content: [
      { no: 1, criteria: 'Green-Aoudit-Letter-converted', link: '/nacc/7_1.pdf' },
      { no: 2, criteria: 'Energy Audit', link: '/nacc/7_2.pdf' },
      { no: 3, criteria: 'Academic and Administrative Audit Cerificate', link: '/nacc/7_3.pdf' },
    ],
  },
  {
    title: 'SSR',
    isOpen: true,
    content: [
    
    ],
  },
  {
    title: 'Templates',
    isOpen: true,
    content: [
      
    ],
  },
  {
    title: 'Extended Templates',
   isOpen: true,
    content: [
      { no: 1, criteria: '1.1', link: '/nacc/e1_1.pdf' },
      { no: 2, criteria: '2.1', link: '/nacc/e2_1.pdf' },
      { no: 3, criteria: '2.2', link: '/nacc/e2_2.pdf' },
       { no: 4, criteria: '2.3', link: '/nacc/e2_3.pdf' },
      { no: 5, criteria: '3.2', link: '/nacc/e3_2.pdf' },
    ],
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-2 ">
      {criteriaData.map((item, index) => (
        <div key={index}>
          <button
            className={`w-full text-left px-4 py-3 font-bold ${
              openIndex === index ?'bg-black' : 'bg-red-800'
            } text-white`}
            onClick={() => toggle(index)}
          >
            {openIndex === index ? '−' : '+'} {item.title}
          </button>

          {openIndex === index && item.content && (
            <div className="border border-t border-gray-300">
              <table className="w-full table-auto text-sm">
                <thead className="bg-yellow-500 text-white">
                  <tr>
                    <th className="border px-3 py-2">Sr.no</th>
                    <th className="border px-3 py-2">Criteria</th>
                    <th className="border px-3 py-2">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {item.content.map((row, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-3 py-2">{row.no}</td>
                      <td className="border px-3 py-2">{row.criteria}</td>
                      <td className="border px-3 py-2 text-blue-600 underline cursor-pointer">
                        <a href={row.link} target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
