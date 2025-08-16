import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/not-found.json'; // Your Lottie JSON file

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#081b4d] text-white">
      <div className="max-w-lg p-6 text-center">
        {/* Lottie Animation */}
        <div className="mb-6">
          <Lottie
            animationData={notFoundAnimation}
            loop={true}
            className="mx-auto w-72"
          />
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-bold md:text-4xl">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="mb-6 text-gray-300">
          Oops! The page you’re looking for doesn’t exist or has been moved.
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
