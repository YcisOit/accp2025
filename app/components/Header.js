'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Top header */}
      <header>
        <nav className="bg-[#0D2B4F] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-1">
              <ul className="flex flex-wrap space-x-4 text-sm font-medium"></ul>
              <div className="flex space-x-3">
                <div className="bg-[#1DA1F2] rounded-full w-8 h-8 flex items-center justify-center">
                  <FaTwitter className="text-white text-lg" />
                </div>
                <div className="bg-[#A52B2B] rounded-full w-8 h-8 flex items-center justify-center">
                  <FaYoutube className="text-white text-lg" />
                </div>
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaInstagram className="text-[#A52B2B] text-lg" />
                </div>
                <div className="bg-[#3b5998] rounded-full w-8 h-8 flex items-center justify-center">
                  <FaFacebookF className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Banner */}
        <div className="bg-[#A52B2B] text-white px-4 py-8 min-h-[190px] flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center gap-20">
            <Image
              src="/images/logo-2.png"
              alt="Founder"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div>
              <p className="text-m">Rayat Shikshan Sanstha’s</p>
              <h1 className="text-yellow-400 text-4xl font-bold leading-tight">
                Arts and Commerce College, Pusegaon
              </h1>
              <p className="text-sm">Tal. Khatav, Dist. Satara (Maharashtra) Pin: 415 502</p>
              <p className="text-m font-semibold">
                Affiliated to Shivaji University, Kolhapur | Reaccredited by NAAC ’B’ Grade
              </p>
              <p className="text-sm">
                Email: accp_puse@yahoo.in &nbsp; | &nbsp; Phone: 02375-260637
              </p>
            </div>
          </div>
          <div className="pl-20 mt-4 md:mt-0">
            <Image
              src="/images/college-logo.png" // Replace with your actual path
              alt="College Logo"
              width={112}
              height={112}
              className="rounded-full mx-auto md:mx-0"
            />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#0f274d] text-white relative px-4 py-2 z-50">
        <div className="flex justify-between items-center md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul
          className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 md:gap-3 md:justify-center mt-3 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:bg-red-800 px-3 py-1 rounded block">
              HOME
            </Link>
          </li>

          {/* ABOUT */}
          <li
            className="relative"
            onMouseEnter={() => !mobileMenuOpen && toggleDropdown('about')}
            onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
          >
            <span
              className="cursor-pointer hover:bg-red-800 px-3 py-1 block"
              onClick={() => mobileMenuOpen && toggleDropdown('about')}
            >
              ABOUT ▾
            </span>
            {openDropdown === 'about' && (
              <ul className="md:absolute md:top-full left-0 bg-white text-blue-900 shadow-md w-60 z-10">
                {[
                  ['/about/aboutcollege', 'About College'],
                  ['/about/aboutfounder', 'About Founder'],
                  ['/about/aboutsanstha', 'About Sanstha'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-red-800 bg-[#0f274d] text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* ADMINISTRATION */}
          <li
            className="relative"
            onMouseEnter={() => !mobileMenuOpen && toggleDropdown('administration')}
            onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
          >
            <span
              className="cursor-pointer hover:bg-red-800 px-3 py-1 block"
              onClick={() => mobileMenuOpen && toggleDropdown('administration')}
            >
              ADMINISTRATION ▾
            </span>
            {openDropdown === 'administration' && (
              <ul className="md:absolute md:top-full left-0 bg-white text-blue-900 shadow-md w-60 z-10">
                {[
                  ['/administration/AQAR', 'AQAR'],
                  ['/administration/CDC', 'College Development Committee (CDC)'],
                  ['#', 'New Education Policy'],
                  ['#', 'Vision & Mission'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-red-800 bg-[#0f274d] text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
         {/* STUDENT */}
          <li
            className="relative"
            onMouseEnter={() => !mobileMenuOpen && toggleDropdown('student')}
            onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
          >
            <span
              className="cursor-pointer hover:bg-red-800 px-3 py-1 block"
              onClick={() => mobileMenuOpen && toggleDropdown('student')}
            >
              STUDENT ▾
            </span>
            {openDropdown === 'student' && (
              <ul className="md:absolute md:top-full left-0 bg-white text-blue-900 shadow-md w-60 z-10">
                {[
                  ['/student/sc', 'Scholarship'],
                  ['/student/cc', 'Carrier Katta'],
                  ['/student/gallery', 'Gallery'],
                  ['/student/gallery', 'Vision & Mission'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-red-800 bg-[#0f274d] text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

 {/* SUPPORT SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => !mobileMenuOpen && toggleDropdown('support_services')}
            onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
          >
            <span
              className="cursor-pointer hover:bg-red-800 px-3 py-1 block"
              onClick={() => mobileMenuOpen && toggleDropdown('support_services')}
            >
              SUPPORT SERVICES ▾
            </span>
            {openDropdown === 'support_services' && (
              <ul className="md:absolute md:top-full left-0 bg-white text-blue-900 shadow-md w-60 z-10">
                {[
                  ['/support_services/sports', 'Sports'],
                  ['/support_services/nss', 'NSS'],
                
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-red-800 bg-[#0f274d] text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Static Menu Items */}
          {[
            ['/programme', 'PROGRAMME'],
            ['/department', 'DEPARTMENT'],
            ['/naac', 'NAAC'],
            ['/iqac', 'IQAC'],
            ['/exam', 'EXAM'],
            ['/feedback', 'FEEDBACK'],
            ['/library', 'LIBRARY'],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="hover:bg-red-800 px-3 py-1 block">
                {label}
              </Link>
            </li>
          ))}

          {/* SOCIAL MEDIA */}
          <li
            className="relative"
            onMouseEnter={() => !mobileMenuOpen && toggleDropdown('social')}
            onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
          >
            <span
              className="cursor-pointer hover:bg-red-800 px-3 py-1 block"
              onClick={() => mobileMenuOpen && toggleDropdown('social')}
            >
              SOCIAL MEDIA ▾
            </span>
            {openDropdown === 'social' && (
              <ul className="md:absolute md:top-full left-0 bg-[#0f274d] text-white shadow-md w-60 z-10">
                <li>
                  <Link
                    href="https://www.youtube.com/@rayatshikshansansthasatara"
                    target="_blank"
                    className="block px-4 py-2 hover:bg-red-800"
                  >
                    YouTube Channel
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/rayatofficial/"
                    target="_blank"
                    className="block px-4 py-2 hover:bg-red-800"
                  >
                    Facebook Page
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      
    </>
  );
};

export default Navbar;
