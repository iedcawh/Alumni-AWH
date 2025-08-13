import React from 'react';

export default function GiveBack() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Give Back
      </h1>

      {/* Cards container */}
      <div className="grid min-md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\mentor.png"
            alt="Mentor Students"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Mentor Students (Register as Mentor)
          </h2>
          <p className="mb-4 text-gray-700">
            Guide and inspire students to achieve their academic and career
            goals.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\Career_Guidance_Webinars.png"
            alt="Career Guidance"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            Career Guidance / Webinars
          </h2>
          <p className="mb-4 text-gray-700">
            Share your expertise through webinars and career guidance sessions.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\Support a Scholarship.png"
            alt="Scholarship Support"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-orange-700">
            Support a Scholarship
          </h2>
          <p className="mb-4 text-gray-700">
            Help deserving students pursue their education through scholarships.
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
            Read More
          </button>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\Fundraising Projects Campus Development.png"
            alt="Fundraising Projects"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-purple-700">
            Fundraising Projects / Campus Development
          </h2>
          <p className="mb-4 text-gray-700">
            Contribute to projects aimed at improving campus facilities and
            resources.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
            Read More
          </button>
        </div>

        {/* Card 5 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\CSR Collaboration with Companies.png"
            alt="CSR Collaboration"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-red-700">
            CSR Collaboration with Companies
          </h2>
          <p className="mb-4 text-gray-700">
            Partner with companies to implement impactful CSR initiatives.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            Read More
          </button>
        </div>

        {/* Card 6 */}
        <div className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transform transition duration-300">
          <img
            src="src\assets\Share Job Internship Opportunities.png"
            alt="Job Opportunities"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-teal-700">
            Share Job / Internship Opportunities
          </h2>
          <p className="mb-4 text-gray-700">
            Help students and alumni by sharing relevant job and internship
            openings.
          </p>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
