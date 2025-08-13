import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#0A2A5F] text-white py-12 px-4">
      <section
        id="contact"
        className="scroll-mt-28 max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 border-b border-white/20 pb-2">
          Contact Us
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Have questions or need assistance? Get in touch with the Alumni
          Association using the details below.
        </p>

        {/* Office Contact Info */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Alumni Office</h2>
          <ul className="text-white/80 space-y-2">
            <li>
              <strong>Email:</strong> alumni@awhengg.org
            </li>
            <li>
              <strong>Phone:</strong> +91-90721-38606
            </li>
            <li>
              <strong>Office Hours:</strong> Mon–Fri, 9:00 AM – 4:30 PM
            </li>
          </ul>
        </div>

        {/* Map & Directions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Visit Us</h2>
          <iframe
            title="AWH Engineering College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.02528715672!2d75.87244397504898!3d11.259549988920124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b53b70fed51%3A0x56083717be9c111a!2sAWH%20Engineering%20College!5e0!3m2!1sen!2sin!4v1755082795800!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex space-x-6 justify-center">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="hover:text-blue-500"
              />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="hover:text-blue-400"
              />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="hover:text-pink-500"
              />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="hover:text-blue-600"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
