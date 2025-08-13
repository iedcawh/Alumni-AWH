import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center px-8 py-2  rounded-xl bg-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="w-12 h-12" />
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
        <li className="relative group cursor-pointer">Membership</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Gallery</li>
        <li className="cursor-pointer">Give Back</li>
        <li className="cursor-pointer">Events</li>
        <li className="cursor-pointer">News & Updates</li>
        <li className="cursor-pointer">Contact us</li>
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
