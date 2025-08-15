import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#133E7C] text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Column 1 */}
        <div>
          <img src="src\assets\logo.png" alt="Logo" className="mb-4 w-12" />{' '}
          {/* Replace with actual logo */}
          <div className="border-t border-white w-16 mb-4"></div>
          <p className="mb-2">
            University of Wisconsin–Madison
            <br />
            <a href="https://example.com" className="underline">
              wisc.edu
            </a>
          </p>
          <p className="mb-2">
            Wisconsin Foundation and Alumni Association
            <br />
            <a href="https://example.com" className="underline">
              advanceuw.org
            </a>
          </p>
          <p>
            University of Wisconsin Foundation
            <br />
            <a href="https://example.com" className="underline">
              supportuw.org
            </a>
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-2">WISCONSIN ALUMNI ASSOCIATION®</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://example.com" className="hover:underline">
                About WAA
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Alumni Advisory Council
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Career Opportunities at WFAA
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Diversity & Inclusion
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                For News Media
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                For WAA Group Leaders
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
          <h3 className="font-bold mt-4">CONTACT US</h3>
          <p>
            650 N. Lake Street
            <br />
            Madison, WI 53706
          </p>
          <p>608-262-2551 or 888-947-2586</p>
          <p>
            <a href="mailto:waa@uwalumni.com" className="underline">
              waa@uwalumni.com
            </a>
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-2">STUDENTS</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://example.com" className="hover:underline">
                Commencement & Recent Grads
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                WASB
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-2">WFAA POLICIES & INFO</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://example.com" className="hover:underline">
                CASL Opt In
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Digital Community Guidelines
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Event Participation Waivers
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                GDPR
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Refund/Event Cancellation
              </a>
            </li>
            <li>
              <a href="https://example.com" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-6 pt-4 pb-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm">
          © 2025 Wisconsin Foundation and Alumni Association. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://example.com">
            <img src="src\assets\fb.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src="src/assets/x.png" alt="Twitter/X" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src="src\assets\insta.png" alt="insta" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src="src\assets\yt.png" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src="src\assets\chat.png" alt="Chat" className="w-6 h-6" />
          </a>
          <a href="https://example.com">
            <img src="src\assets\in.png" alt="Chat" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
