// RightSidebarMenu.js
"use client";
import React from "react";

const menuItems = [
  "Academic Calender",
  "News",
  "Awards And Achievement",
  "Online Admission",
  "Prospectus",
  "Alumni",
  "Code Of Conduct",
  "College Committees",
  "Gallery",
  "NIRF",
  "AISHE",
  "Online Library",
  "MoUs/Linkages/Collabration"
];

export default function SidebarMenu() {
  const [active, setActive] = React.useState("News");

  return (
    <div className="w-68 bg-[#A52B2B] text-white font-semibold">
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActive(item)}
          className={`px-4 py-4 cursor-pointer 
            ${active === item ? "bg-[#0E2F51]" : "hover:bg-[#0E2F51]"} 
            transition-all duration-300`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
