import React from 'react';

import mentorBg from '../../assets/mentor.png';
import guidanceBg from '../../assets/Career_Guidance_Webinars.png';
import supportBg from '../../assets/Support.png';
import developmentBg from '../../assets/Development.png';
import csrBg from '../../assets/CSR.png';
import opportunitiesBg from '../../assets/Opportunities.png';

export default function GiveBack() {
  return (
    <div className="min-h-screen p-8 text-center bg-gray-100">
      {/* Heading */}
      <h2 className="mb-4 text-6xl font-bold text-[#081b4d] max-md:text-4xl">
        Give Back
      </h2>
      <p className="mb-8 text-gray-600">
        Your support helps strengthen our institution, inspire students, and
        create lasting change.
      </p>

      {/* Cards container */}
      <div className="grid gap-8 min-md:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={mentorBg}
            alt="Mentor Students"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            Mentor Students (Register as Mentor)
          </h2>
          <p className="mb-4 text-gray-700">
            Guide and inspire students to achieve their academic and career
            goals.
          </p>
          <a
            href="https://airtable.com/appLnD2BQdaA7nQjt/pagAceLpsqyf2DMJY/form"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={guidanceBg}
            alt="Career Guidance"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            Career Guidance / Webinars
          </h2>
          <p className="mb-4 text-gray-700">
            Share your expertise through webinars and career guidance sessions.
          </p>
          <a
            href="https://airtable.com/appLnD2BQdaA7nQjt/pagEx1L7t1ym4Mnst/form"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>

        {/* Card 3 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={supportBg}
            alt="Scholarship Support"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            Support a Scholarship
          </h2>
          <p className="mb-4 text-gray-700">
            Help deserving students pursue their education through scholarships.
          </p>
          <a
            href="http://example.com/"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>

        {/* Card 4 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={developmentBg}
            alt="Fundraising Projects"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            Fundraising Projects / Campus Development
          </h2>
          <p className="mb-4 text-gray-700">
            Contribute to projects aimed at improving campus facilities and
            resources.
          </p>
          <a
            href="http://example.com/"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>

        {/* Card 5 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={csrBg}
            alt="CSR Collaboration"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            CSR Collaboration with Companies
          </h2>
          <p className="mb-4 text-gray-700">
            Partner with companies to implement impactful CSR initiatives.
          </p>
          <a
            href="http://example.com/"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>

        {/* Card 6 */}
        <div className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105">
          <img
            src={opportunitiesBg}
            alt="Job Opportunities"
            className="object-cover w-full h-40 mb-4 rounded-lg"
          />
          <h2 className="mb-2 text-xl font-semibold text-[#0A2A5F]">
            Share Job / Internship Opportunities
          </h2>
          <p className="mb-4 text-gray-700">
            Help students and alumni by sharing relevant job and internship
            openings.
          </p>
          <a
            href="http://example.com/"
            className="inline-block px-4 py-2 font-semibold text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
}
