/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center px-8 py-2  rounded-xl bg-white">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h2 className="pl-3 text-xl font-semibold text-[#012F6D]">
          AWH Alumni Assosciation
        </h2>
      </div>

      {/* Hamburger Button - only below 1200px */}
      <button
        className="ml-auto xl:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col w-full mt-4 gap-4 items-center text-center 
     xl:mt-0 xl:flex xl:flex-row xl:items-center xl:gap-12 xl:ml-auto xl:w-auto xl:text-left
     text-gray-700 font-medium`}
      >
        <li
          className="relative group cursor-pointer"
          onClick={() => {
            navigate('/membership');
          }}
        >
          Membership
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate('/');
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
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-1 px-5 rounded-lg shadow transition-colors">
            DONATE
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
