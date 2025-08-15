import React from 'react';
import aboutBg from '../../assets/clg2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import avathar from './images/avathar.jpeg';

const teamMembers = [
  {
    name: 'Dr. Sabeena M V',
    position: 'President',
    profession: 'Principal of AWH Engineering College',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
  {
    name: 'Mr. Sameer K M',
    position: 'Vice President',
    profession: 'Technical Lead, AXISCADES Technologies',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
  {
    name: 'Mr. Muralikrishnan',
    position: 'Vice Presidents',
    profession: 'Assistant Professor, EEE Department, AWH EC',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
  {
    name: 'Ms. Aparna K C',
    position: 'Secretary',
    profession: 'Assistant Professor, ECE Department, AWH EC',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
  {
    name: ' Mr. Muhammed Jaseem',
    position: 'Joint Secretary',
    profession: ' Assistant Professor, CSE Department, AWH EC',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
  {
    name: ' Ms. Anila',
    position: 'Treasurer',
    profession: 'Assistant Professor, CE Department, AWH EC',
    linkedin: 'https://linkedin.com',
    image: avathar,
  },
];

function AboutUs() {
  return (
    <>
      <div
        className="relative flex justify-center w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-9/12 h-full px-4 space-y-4 text-center text-white max-md:w-11/12">
          <h1 className="text-6xl font-bold leading-tight uppercase max-md:text-4xl">
            About Us
          </h1>
          <h1 className="text-4xl font-semibold leading-tight max-md:text-xl">
            Connecting the Past, Empowering the Future
          </h1>
          <p className="max-w-2xl text-sm leadig-relaxed md:text-lg">
            The <strong>AWH Engineering College Alumni Assosciation</strong> is
            more than just a community — it’s a family bound by shared
            experiences, lifelong friendships, and a commitment to giving back.
            Since its inception, our alumni association has been a bridge
            between generations, linking graduates across the globe with their
            alma mater.
          </p>
        </div>
      </div>
      <div className="px-8 py-12 mx-auto space-y-6 text-justify max-w-7xl">
        <h1 className="p-2 text-3xl font-bold border-l-4 border-[#081b4d] max-md:text-xl">
          History & Origin
        </h1>
        <div>
          <p>
            The AWH Engineering College (AWHEC), established in 2001, has been a
            cradle of engineering excellence, producing graduates who have gone
            on to make their mark in industries, academia, research, and
            entrepreneurship across the globe. Recognizing the need to preserve
            the bond between the institution and its alumni, The{' '}
            <strong>AWHEC Alumni Association</strong> was formally established
            in 2005 and constituted with effect from{' '}
            <strong>January 5, 2006</strong> .
          </p>
          <br />
          <p>
            The Association is led by an elected board comprising a President,
            Vice President, Secretary/Treasurer, and Joint Secretary, who act as
            a vital bridge between alumni, current students, faculty,
            administration, and the broader community. Their mission is to
            foster engagement, encourage communication, and facilitate
            collaboration with key stakeholders, including academia, industry,
            and global leaders.
          </p>
          <br />
          <p>
            From its inception, the Alumni Association has been committed to{' '}
            <strong>unifying alumni worldwide into a cohesive network</strong>,
            strengthening ties with the alma mater, and working together on
            initiatives that benefit both graduates and the institution. The
            committee plays a pivotal role in:
          </p>
          <br />
          <ul className="px-4 space-x-2 list-disc list-inside">
            <li>
              Strengthening bonds between alumni, faculty, and students through
              opportunities to share knowledge and experiences.
            </li>
            <li>
              Planning and organizing alumni activities and ensuring
              sustainability in these initiatives.
            </li>
            <li>
              Designing services and programs that directly support current
              students in their academic and professional journeys.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center px-8 py-12 mx-auto space-y-6 text-justify text-white bg-[#081b4d]">
        <div className="flex gap-5 max-w-7xl max-md:flex-col max-md:items-center">
          <div className="flex flex-col items-center justify-center w-1/2 p-6 mt-6 bg-white text-[#081b4d] rounded-lg shadow-lg max-md:w-full">
            <h1 className="flex items-center p-2 mb-4 text-3xl font-bold max-md:text-xl">
              <span className="mr-2">
                <FontAwesomeIcon icon={faEye} size="1x" />
              </span>
              Vision
            </h1>
            <p>
              To build a vibrant, engaged, and collaborative alumni network that
              contributes to the continuous growth of its members, the
              institution, and society through shared knowledge, mentorship, and
              collective pride in AWH Engineering College.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 p-6 mt-6 bg-white text-[#081b4d] rounded-lg shadow-lg max-md:w-full">
            <h1 className="flex items-center p-2 mb-4 text-3xl font-bold max-md:text-xl">
              <span className="mr-2">
                <FontAwesomeIcon icon={faBullseye} size="1x" />
              </span>
              Mission
            </h1>
            <ul className="text-left list-disc list-inside">
              <li>
                To foster a lifelong relationship between the college and its
                alumni, creating avenues for professional, academic, and
                personal growth
              </li>
              <li>
                To provide a platform for alumni to contribute towards the
                development of students, departments, and the institution as a
                whole.
              </li>
              <li>
                To encourage a spirit of unity, belonging, and service among
                alumni through meaningful engagement and collaboration.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-8 py-12 mx-auto space-y-6 text-justify max-w-7xl">
        <h1 className="p-2 mb-4 text-3xl font-bold border-l-4 border-[#081b4d] max-md:text-xl">
          Objectives
        </h1>
        <div>
          <ul className="list-decimal">
            <li>
              <h1 className="font-semibold">
                Strengthen Alumni–Institution Ties:
              </h1>
              <p>
                Promote regular interaction between the alumni and the college
                through events, mentorship, and academic collaborations.
              </p>
            </li>
            <li>
              <h1 className="font-semibold">Support Current Students:</h1>
              <p>
                Facilitate student development through alumni-led career
                guidance, internships, scholarships, and industry exposure.
              </p>
            </li>
            <li>
              <h1 className="font-semibold">Celebrate Alumni Achievements:</h1>
              <p>
                Recognize and showcase the professional and societal
                contributions of alumni across diverse fields.
              </p>
            </li>
            <li>
              <h1 className="font-semibold">
                Promote Professional Networking:
              </h1>
              <p>
                Create opportunities for alumni to network, collaborate, and
                support one another in their career and entrepreneurial
                pursuits.
              </p>
            </li>
            <li>
              <h1 className="font-semibold">
                Contribute to Institutional Development:
              </h1>
              <p>
                Encourage alumni involvement in the strategic growth and
                reputation enhancement of the college.
              </p>
            </li>
            <li>
              <h1 className="font-semibold">
                Encourage Philanthropy & Volunteering:
              </h1>
              <p>
                Enable alumni to give back through donations, expertise, or time
                towards causes aligned with the institution’s mission
              </p>
            </li>
            <li>
              <h1 className="font-semibold">
                Uphold Ethical and Social Values:
              </h1>
              <p>
                Inspire alumni to remain responsible citizens and contribute to
                sustainable and inclusive development in line with the values of
                the college.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#081b4d] text-white">
        <div className="px-8 py-12 mx-auto space-y-6 max-w-7xl">
          <h1 className="p-2 mb-4 text-3xl font-bold border-l-4 border-white max-md:text-xl">
            Meet the Team
          </h1>
          <div className="grid gap-8 mt-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 transition-shadow bg-white shadow rounded-xl hover:shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600">{member.position}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {member.profession}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 text-center my-11">
        <h1 className="text-4xl font-bold leading-tight max-md:text-2xl">
          Join Us
        </h1>
        <h1 className="text-2xl font-bold leading-tight max-md:text-xl">
          Reconnect. Reignite. Relive.
        </h1>
        <p className="text-xl font-medium leading-tight max-md:text-lg">
          Whether you graduated last year or decades ago, you’ll always be part
          of the AWH family.
        </p>
        <a
          className="px-6 py-3 font-semibold text-[#081b4d] transition-all duration-200 border-2 border-[#081b4d] rounded-md hover:bg-[#081b4d] hover:text-white mt-10"
          href="https://airtable.com/appLnD2BQdaA7nQjt/pagVZiXOqxZJ54bGK/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Association
        </a>
      </div>
    </>
  );
}

export default AboutUs;
