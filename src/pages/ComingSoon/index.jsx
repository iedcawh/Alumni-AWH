import Lottie from 'lottie-react';
import comingSoonAnimation from '../../assets/coming-soon.json'; // Your Lottie JSON file

export default function ComingSoon() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#081b4d] text-white">
      <div className="max-w-lg p-6 text-center">
        {/* Lottie Animation */}
        <div className="mb-6">
          <Lottie
            animationData={comingSoonAnimation}
            loop={true}
            className="w-64 mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="mb-2 text-4xl font-bold">Coming Soon</h1>

        {/* Message */}
        <p className="mb-6 text-gray-300">
          We’re working hard to bring you something amazing. This section will
          be available soon.
        </p>

        {/* Back to Home */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-[#081b4d] rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
