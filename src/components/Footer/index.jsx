import React from 'react';
import logo from '../../assets/logo.png';
import clgLogo from '../../assets/awhlogo.png';
import fb from '../../assets/fb.png';
import x from '../../assets/x.png';
import insta from '../../assets/insta.png';
import yt from '../../assets/yt.png';
import ln from '../../assets/in.png';

export default function Footer() {
  return (
    <footer className="bg-[#081b4d] text-white relative">
      {/* Main Footer Content */}
      <div className="relative z-10 grid grid-cols-1 gap-8 px-6 py-12 mx-auto max-w-7xl md:grid-cols-3 max-md:text-xs">
        {/* Column 1 */}
        <div>
          <div className="flex gap-2">
            <img src={clgLogo} alt="Logo" className="w-12 mb-4" />
            <img src={logo} alt="Logo" className="w-12 mb-4" />{' '}
          </div>
          {/* Replace with actual logo */}
          <div className="w-24 mb-4 border-t border-white"></div>
          <p className="mb-2">
            AWH Engineering College
            <br />
            <a href="https://awhengg.org/" className="underline">
              awhengg.org
            </a>
          </p>
          <p className="mb-2">
            Alumni Association
            <br />
            <a href="https://alumni.awhengg.org" className="underline">
              alumni.awhengg.org
            </a>
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="mb-2 font-bold">AWH ALUMNI ASSOCIATION®</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://example.com" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Membership
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Give Back
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                News & Updates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">CONTACT US</h3>
          <p>
            AWH Engineering College
            <br />
            Kuttikattor, Calicut,
            <br />
            PIN : 673 008, Kerala, India.
          </p>
          <p>Office : +91 94950 60633</p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alumni@awhengg.org"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              alumni@awhengg.org
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between px-6 pt-4 pb-6 mx-auto mt-6 border-t border-white/30 md:flex-row max-w-7xl">
        <p className="text-sm max-md:text-xs">
          © 2025 AWH Engineering College Alumni Association. All rights
          reserved.
        </p>
        <div className="flex mt-4 space-x-4 md:mt-0">
          <a href="https://example.com">
            <img src={fb} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src={x} alt="Twitter/X" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src={insta} alt="insta" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src={yt} alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src={ln} alt="Chat" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
