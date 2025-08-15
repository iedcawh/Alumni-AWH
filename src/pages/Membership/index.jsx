function Membership() {
  return (
    <>
      <div className="bg-[#0A2A5F] min-h-screen px-6 pt-24 pb-16 text-white font-sans scroll-smooth">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Membership
          </h1>
          <p className="mb-6 text-xl md:text-2xl opacity-90">
            Stay Connected. Stay Involved. Stay Inspired.
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80">
            Becoming a member of the Alumni Association of AWH Engineering
            College is your first step in continuing the journey you began on
            this campus. It’s more than a formality — it’s a lifelong connection
            to the people, memories, and experiences that shaped who you are
            today.
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="sticky top-4 max-w-5xl mx-auto bg-white text-[#0A2A5F] backdrop-blur-md py-4 px-6 rounded-2xl z-20 shadow-lg mb-12">
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
            {[
              { id: 'why-join', label: 'Why Join?' },
              { id: 'eligibility', label: 'Eligibility' },
              { id: 'benefits', label: 'Membership Benefits' },
              { id: 'how-to-join', label: 'How to Join' },
              { id: 'renewal', label: 'Membership Renewal' },
              { id: 'faqs', label: 'FAQs' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#007ACC] transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-[#007ACC] after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-16">
          {/* Why Join */}
          <section
            id="why-join"
            className="max-w-4xl p-8 mx-auto transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-6 text-3xl font-bold border-b border-white/20">
              Why Join the Alumni Association?
            </h2>
            <p className="mb-6 leading-relaxed text-white/80">
              Becoming a member of the Alumni Association of AWH Engineering
              College is more than just staying connected — it’s about being
              part of a lifelong community that grows together, gives back, and
              celebrates the shared legacy of our institution.
            </p>
            <ul className="space-y-4 text-lg list-disc list-inside text-white/80">
              <li>
                <span className="font-semibold text-white">
                  Stay Connected with Your Alma Mater:
                </span>{' '}
                Rekindle memories, stay informed about campus developments, and
                be part of the ongoing journey.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Expand Your Professional Network:
                </span>{' '}
                Connect with fellow alumni from diverse industries across the
                globe.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Make an Impact:
                </span>{' '}
                Offer mentorship, internships, job referrals, and more.
              </li>
              <li>
                <span className="font-semibold text-white">Be Recognized:</span>{' '}
                Celebrate achievements and inspire others through alumni
                recognition programs.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Get Exclusive Updates & Invitations:
                </span>{' '}
                Access alumni events, workshops, and college news first.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Give Back with Purpose:
                </span>{' '}
                Support scholarships, campus development initiatives, or
                volunteer your time and expertise.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Stay Part of the AWH Family:
                </span>{' '}
                Joining the association ensures that your bond with AWH
                Engineering College continues beyond graduation.
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section
            id="eligibility"
            className="max-w-4xl p-8 mx-auto transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-4 text-3xl font-bold border-b border-white/20">
              Eligibility for Membership
            </h2>
            <p className="mb-6 text-lg text-white/80">
              Anyone who has been a part of AWH Engineering College, Kozhikode
              and shares a bond with the institution is welcome to become a
              member of the Alumni Association.
            </p>

            <div className="space-y-8 text-lg text-white/80">
              {/* Regular Membership */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  1. Regular Membership
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Graduates of any undergraduate or postgraduate program
                    offered by AWH Engineering College.
                  </li>
                  <li>
                    Former students who have completed at least one full
                    academic year but may not have completed the program due to
                    personal or professional reasons.
                  </li>
                  <li>
                    Alumni currently pursuing higher studies or employed
                    anywhere in India or abroad.
                  </li>
                </ul>
              </div>

              {/* Associate Membership */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  2. Associate Membership
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Former faculty members, staff, or administrators who have
                    served the college and wish to remain connected to the
                    alumni network.
                  </li>
                  <li>
                    Graduates of AWH Engineering College currently employed as
                    faculty or staff.
                  </li>
                </ul>
              </div>

              {/* Honorary Membership */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  3. Honorary Membership
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Eminent personalities, industry partners, or well-wishers of
                    the college who have made significant contributions to the
                    growth of the institution or the alumni association.
                  </li>
                  <li>
                    <span className="font-semibold">Note:</span> Honorary
                    members may be invited by the Executive Committee and may
                    not hold voting rights.
                  </li>
                </ul>
              </div>

              {/* General Conditions */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  General Conditions
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Members must support the mission and vision of the Alumni
                    Association.
                  </li>
                  <li>
                    Membership is subject to approval by the association as per
                    its bylaws.
                  </li>
                  <li>
                    All members are expected to uphold the values and spirit of
                    AWH Engineering College.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section
            id="benefits"
            className="max-w-4xl p-8 mx-auto transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-4 text-3xl font-bold border-b border-white/20">
              Membership Benefits
            </h2>
            <p className="mb-6 text-lg text-white/80">
              Becoming a member of the AWH Engineering College Alumni
              Association is not just about staying connected — it’s about
              opening doors to new opportunities, personal growth, and
              meaningful contributions.
            </p>

            <div className="space-y-8 text-lg text-white/80">
              {/* 1 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  1. Lifelong Connection with Your Alma Mater
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Stay updated with the latest developments, achievements, and
                    initiatives of AWH Engineering College.
                  </li>
                  <li>
                    Be invited to alumni meets, college functions, reunions, and
                    commemorative events.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  2. Strong Professional Network
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Connect with fellow alumni across industries, geographies,
                    and career stages.
                  </li>
                  <li>
                    Explore job leads, business opportunities, and
                    collaborations through alumni referrals and connections.
                  </li>
                  <li>
                    Join exclusive alumni-only networking platforms and social
                    media groups.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  3. Mentorship & Volunteering Opportunities
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Mentor current students through talks, workshops, career
                    guidance, or project support.
                  </li>
                  <li>
                    Share your experiences to inspire the next generation of
                    engineers.
                  </li>
                  <li>
                    Volunteer as an alumni speaker or industry guest in academic
                    or placement sessions.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  4. Career Support & Skill Building
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Access webinars, industry talks, and expert sessions
                    organized by the association.
                  </li>
                  <li>
                    Priority invitations to skill development programs,
                    alumni-led training, and career fairs.
                  </li>
                  <li>
                    Contribute or benefit from job and internship postings
                    shared within the alumni network.
                  </li>
                </ul>
              </div>

              {/* 5 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  5. Recognition & Visibility
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Get featured in the Alumni Spotlight for notable
                    achievements in industry, academia, entrepreneurship, or
                    social service.
                  </li>
                  <li>
                    Receive alumni awards, honors, or recognition during annual
                    meets or college functions.
                  </li>
                </ul>
              </div>

              {/* 6 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  6. Contribution to Institutional Development
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Support scholarships, student aid, or campus development
                    initiatives.
                  </li>
                  <li>
                    Serve as a bridge between the institution and the industry.
                  </li>
                  <li>
                    Be part of advisory panels or alumni boards that shape the
                    future of the college.
                  </li>
                </ul>
              </div>

              {/* 7 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  7. Regular Updates & Publications
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Receive the official alumni newsletter featuring news,
                    achievements, opportunities, and upcoming events.
                  </li>
                  <li>
                    Get exclusive college magazines, convocation updates, and
                    annual reports.
                  </li>
                </ul>
              </div>

              {/* 8 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  8. Access to Campus Facilities (Subject to College Policy)
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Use of the library or research resources during visits.
                  </li>
                  <li>
                    Invitations to technical festivals, conferences, or seminars
                    organized by departments.
                  </li>
                </ul>
              </div>

              {/* 9 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  9. Reunion & Community Events
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Enjoy exclusive invites to national and regional alumni
                    meets, reunions, and cultural events.
                  </li>
                  <li>
                    Meet old friends, faculty members, and relive campus
                    memories.
                  </li>
                </ul>
              </div>

              {/* 10 */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  10. Voting Rights & Participation
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Eligible to vote in alumni association elections and
                    contribute to decision-making.
                  </li>
                  <li>
                    Nominate yourself or others for office-bearer positions and
                    drive initiatives that matter.
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xl italic text-center text-white/90">
              “Together, we grow stronger.” Being a member of the Alumni
              Association gives you more than benefits — it gives you belonging,
              influence, and opportunity to give back with pride.
            </p>
          </section>

          {/* How to Join */}
          <section
            id="how-to-join"
            className="max-w-4xl p-8 mx-auto text-center transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-6 text-3xl font-bold border-b border-white/20">
              How to Join / Online Registration
            </h2>
            <p className="mb-6 text-lg text-white/80">
              You can register online by filling out the membership form below.
            </p>
            <button className="bg-gradient-to-r from-[#3FA9F5] to-[#007ACC] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
              Fill Registration Form
            </button>
          </section>

          {/* Renewal */}
          <section
            id="renewal"
            className="max-w-4xl p-8 mx-auto transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-4 text-3xl font-bold border-b border-white/20">
              Membership Renewal
            </h2>

            <p className="mb-6 text-lg text-white/80">
              Stay connected, stay engaged, and continue to be a proud part of
              the AWH Engineering College alumni community. Renewing your
              membership ensures uninterrupted access to all the benefits and
              opportunities offered by the Alumni Association — and helps us
              stay updated with your latest contact, career, and location
              details.
            </p>

            <h3 className="mb-3 text-2xl font-semibold">When to Renew</h3>
            <ul className="mb-6 space-y-2 text-lg list-disc list-inside text-white/80">
              <li>
                Membership is valid for a fixed term: 1 year, 3 years, or 5
                years
              </li>
              <li>
                Renewal reminders will be sent via email or SMS one month before
                expiry
              </li>
              <li>
                Members are encouraged to renew in time to ensure seamless
                access to alumni activities and communications
              </li>
            </ul>

            <h3 className="mb-3 text-2xl font-semibold">How to Renew</h3>
            <ol className="mb-6 space-y-2 text-lg list-decimal list-inside text-white/80">
              <li>
                Click on the “Renew Now” button on this page or in the reminder
                email.
              </li>
              <li>
                Fill in the Online Renewal Form with your updated personal,
                professional, and contact details.
              </li>
              <li>
                Select your preferred renewal duration — 1 year, 3 years, or 5
                years.
              </li>
              <li>
                Once the process is complete, you will receive a confirmation
                email along with your renewed Membership ID.
              </li>
            </ol>

            <p className="mb-6 text-lg text-white/80">
              Please ensure that your details are accurate and up-to-date — this
              helps us stay connected and serve you better.
            </p>

            <h3 className="mb-3 text-2xl font-semibold">Why Renewal Matters</h3>
            <ul className="mb-6 space-y-2 text-lg list-disc list-inside text-white/80">
              <li>Continued access to alumni events, reunions, and updates</li>
              <li>
                Participation in alumni mentorship, volunteering, and networking
                programs
              </li>
              <li>
                Eligibility to vote in association elections and hold leadership
                roles
              </li>
              <li>
                Stay informed about institutional developments and student
                initiatives
              </li>
              <li>Keep your profile current in the official alumni database</li>
              <li>
                Receive newsletters, invitations, and recognitions tailored to
                your professional journey
              </li>
            </ul>

            <h3 className="mb-3 text-2xl font-semibold">Need Help?</h3>
            <p className="mb-4 text-lg text-white/80">
              If you need assistance with the renewal process, feel free to
              reach out:
            </p>
            <p className="text-lg text-white/80">
              <strong>Email:</strong> alumni@awhce.org
              <br />
              <strong>Phone:</strong> +91-XXXX-XXXXXX
              <br />
              <strong>Support Hours:</strong> 9:00 AM – 4:30 PM (Monday to
              Friday)
            </p>

            <p className="mt-6 text-xl font-semibold text-white">
              ✅ Keep Your Membership Active – Keep Your Profile Current
            </p>
            <p className="text-lg text-white/80">
              Your continued membership strengthens our alumni network and
              empowers both our alumni and students. Renew today and remain an
              integral part of the AWH Engineering College family.
            </p>
          </section>

          {/* FAQs */}
          <section
            id="faqs"
            className="max-w-4xl p-8 mx-auto transition duration-300 shadow-lg scroll-mt-28 bg-white/5 rounded-2xl hover:shadow-2xl"
          >
            <h2 className="pb-2 mb-4 text-3xl font-bold border-b border-white/20">
              Frequently Asked Questions
            </h2>
            <p className="mb-6 text-lg text-white/80">
              Have questions? Check out our FAQs or reach out to the alumni
              office for support.
            </p>

            <div className="space-y-6 text-lg text-white/80">
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  1. Who can become a member of the Alumni Association?
                </h3>
                <p>
                  Anyone who has studied at AWH Engineering College — including
                  graduates, postgraduates, diploma holders, and students who
                  completed at least one academic year — is eligible to become a
                  member. Former faculty and staff may apply for associate
                  membership.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  2. How do I apply for membership?
                </h3>
                <p>
                  You can apply by filling out the Online Membership
                  Registration Form available on the website. After submitting
                  the form and completing the payment, you&#39;ll receive a
                  confirmation email with your Membership ID.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  3. Is the membership free?
                </h3>
                <p>
                  No. A nominal membership fee is applicable based on the type
                  and duration of the membership (1 year, 3 years, or 5 years).
                  The fee helps the association organize activities, events, and
                  student support programs.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  4. How do I renew my membership?
                </h3>
                <p>
                  Membership can be renewed by filling out the Online Membership
                  Renewal Form. During renewal, you’ll be asked to update your
                  latest personal and professional information and select your
                  renewal period.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  5. Why do I need to renew my membership?
                </h3>
                <p>
                  Renewal helps you stay connected with the association and
                  ensures your profile information is current. It also enables
                  you to continue enjoying the benefits such as event
                  invitations, newsletters, voting rights, and networking
                  access.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  6. What if I forget my Membership ID or need to update my
                  details?
                </h3>
                <p>
                  You can retrieve your Membership ID by contacting the alumni
                  office via email. For profile updates, please fill in the
                  latest information during renewal or write to us with your
                  updated details.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  7. Will I receive any confirmation after applying or renewing?
                </h3>
                <p>
                  Yes. Once you successfully register or renew, you will receive
                  a confirmation email along with your Membership ID.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  8. Can I participate in events without being a member?
                </h3>
                <p>
                  Some events are open to all alumni, but many programs,
                  including reunions, career webinars, and elections, are
                  exclusive to registered members.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  9. How is my membership fee used?
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Organizing alumni reunions and meets</li>
                  <li>Student scholarships and mentoring programs</li>
                  <li>Website maintenance and alumni communications</li>
                  <li>Campus development initiatives supported by alumni</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  10. Who do I contact for help regarding membership?
                </h3>
                <p>
                  <strong>Email:</strong> alumni@awhce.org
                  <br />
                  <strong>Phone:</strong> +91-XXXX-XXXXXX
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Membership;
