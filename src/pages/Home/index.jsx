import homeBg from '../../assets/home-bg.png';
import Events from '../../components/Events';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import WelcomeSection from '../../components/Welcome';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative flex justify-center w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-9/12 h-full px-4 space-y-4 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight uppercase max-md:text-2xl">
            <span className="block text-2xl font-medium tracking-wide max-md:text-xl">
              Welcome to
            </span>
            AWH Engineering College <br /> Alumni Association
          </h1>
          <p className="max-w-2xl text-sm leadig-relaxed md:text-lg">
            At AWH Engineering College, graduation isn’t the end — it’s the
            beginning of a lifelong connection. The{' '}
            <strong>Alumni Association</strong> is where memories meet
            opportunities, friendships are rekindled, and futures are shaped
            together.
          </p>
          <button className="px-6 py-3 font-semibold text-white transition-all duration-200 border-2 border-white rounded-md hover:bg-white hover:text-[#081b4d]">
            Join the Association
          </button>
        </div>
      </div>
      <WelcomeSection />
      <SuccessStoriesSlider />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
