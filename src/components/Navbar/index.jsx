/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center px-8 py-2 bg-white rounded-xl max-md:px-4">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h2 className="pl-3 text-xl font-semibold text-[#012F6D] max-sm:text-lg">
          AWH Alumni Assosciation
        </h2>
      </div>

      {/* Hamburger Button - only below 1200px */}
      <button
        className="ml-auto text-gray-700 xl:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col w-full mt-4 gap-4 items-center text-center 
     xl:mt-0 xl:flex xl:flex-row xl:items-center xl:gap-5 xl:ml-auto xl:w-auto xl:text-left
     text-gray-700 font-medium`}
      >
        <li
          className="relative cursor-pointer group"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </li>
        <li
          className="relative cursor-pointer group"
          onClick={() => {
            navigate('/membership');
          }}
        >
          Membership
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/aboutus');
          }}
        >
          About us
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Gallery
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Give Back
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Events
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          News & Updates
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/contact');
          }}
        >
          Contact us
        </li>
        <li>
          <button className="px-5 py-1 font-bold text-white transition-colors bg-blue-900 rounded-lg shadow hover:bg-blue-800">
            DONATE
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
