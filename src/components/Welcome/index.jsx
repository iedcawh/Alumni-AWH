import React from 'react';
import img from '../../assets/sabeena.png';

const WelcomeSection = () => {
  return (
    <div className="flex items-center w-full min-h-screen px-4 py-8 bg-[#012F6D]">
      <div className="bg-[#0A2A5F] rounded-lg shadow-lg p-8 relative w-full">
        {/* Top bar with arrow */}
        <div className="relative w-full mx-auto">
          <div className="clip-shape bg-[#081b4d] h-16 w-5/6 flex items-center justify-center">
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 24L0 6.85714L4.28571 2.57143L18 16.2857L31.7143 2.57143L36 6.85714L18 24Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse items-center h-full gap-8 mt-16 md:flex-row">
          {/* Text Section */}
          <div className="flex-1 p-4 text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-wide text-center md:text-5xl md:text-left">
              WELCOME
            </h1>
            <p className="mb-4 text-lg leading-relaxed md:text-xl">
              Welcome to the official website of the Alumni Association of AWH
              Engineering College, Kozhikode. Over the years, our institution
              has seen thousands of bright minds transform into skilled
              professionals and responsible global citizens. Today, you are part
              of a vibrant, diverse network across the world, and your
              achievements stand as a proud testament to our legacy.
            </p>
            <p className="mb-4 text-lg leading-relaxed md:text-xl">
              This platform is a digital bridge to your alma mater — a place to
              reminisce, reconnect, and contribute. Our goals are to:
            </p>
            <ul className="mb-4 text-lg list-disc list-inside md:text-xl">
              <li>Foster engagement between alumni, students, and faculty</li>
              <li>Facilitate mentorship, career guidance, and collaboration</li>
              <li>Celebrate alumni achievements and promote mutual growth</li>
            </ul>
            <p className="mb-4 text-lg leading-relaxed md:text-xl">
              As Principal and President of the Alumni Association, I invite you
              to participate in our programs, share your journey, support
              students, and help strengthen our community. Your time,
              experience, and insights can inspire the next generation of
              engineers. Together, let&apos;s uphold the spirit of AWH
              Engineering College and work for the betterment of our alumni,
              students, and institution.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center flex-shrink-0 text-white md:items-end">
            <img
              src={img}
              alt="Dr. Sabeena MV"
              className="object-cover rounded-2xl w-60 sm:w-72 md:w-[28rem] h-auto shadow-xl"
            />
            <div className="mt-4 font-semibold text-center md:text-center md:mr-14">
              Dr. Sabeena MV
              <br />
              <span className="font-normal">
                Principal & President, Alumni Association
                <br />
                AWH Engineering College, Kozhikode
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
