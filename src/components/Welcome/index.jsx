import React from 'react';
import img from '../../assets/sabeena.png';

const WelcomeSection = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center px-4 py-8"
      style={{
        background:
          'linear-gradient(135deg, #012F6C 0%, #04255c 50%, #081b4d 100%)',
      }}
    >
      <div className="bg-[#081b4d] rounded-lg shadow-lg p-8 relative w-full">
        {/* Top bar with arrow */}
        <div className="relative w-full mx-auto">
          <div className="clip-shape bg-[#0A2A5F] h-16 w-5/6 flex items-center justify-center">
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
        <div className="flex flex-col-reverse md:flex-row h-full items-center gap-8 mt-16">
          {/* Text Section */}
          <div className="flex-1 text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-6 tracking-wide">
              WELCOME
            </h1>
            <p className="mb-4 text-lg md:text-xl leading-relaxed">
              Welcome to the official website of the Alumni Association of AWH
              Engineering College, Kozhikode. Over the years, our institution
              has seen thousands of bright minds transform into skilled
              professionals and responsible global citizens. Today, you are part
              of a vibrant, diverse network across the world, and your
              achievements stand as a proud testament to our legacy.
            </p>
            <p className="mb-4 text-lg md:text-xl leading-relaxed">
              This platform is a digital bridge to your alma mater — a place to
              reminisce, reconnect, and contribute. Our goals are to:
            </p>
            <ul className="list-disc list-inside mb-4 text-lg md:text-xl">
              <li>Foster engagement between alumni, students, and faculty</li>
              <li>Facilitate mentorship, career guidance, and collaboration</li>
              <li>Celebrate alumni achievements and promote mutual growth</li>
            </ul>
            <p className="mb-4 text-lg md:text-xl leading-relaxed">
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
          <div className="flex-shrink-0 flex flex-col items-center md:items-end text-white">
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
