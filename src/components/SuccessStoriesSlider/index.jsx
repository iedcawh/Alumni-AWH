import { useRef, useEffect } from 'react';

import stImg1 from '../../assets/success-stories1.png';
import stImg2 from '../../assets/success-stories2.png';
import stImg3 from '../../assets/success-stories3.png';

const slides = [
  {
    image: stImg1,
    title: 'Career Growth',
    description:
      'From humble beginnings to achieving a thriving professional career, this journey highlights how dedication and continuous learning can open doors to new opportunities. The transformation stands as proof that perseverance can turn aspirations into achievements.',
    link: '/success-story/1',
  },
  {
    image: stImg2,
    title: 'Entrepreneurial Journey',
    description:
      'Starting with just an idea, this journey turned challenges into stepping stones. With determination and creativity, what began as a dream evolved into a flourishing venture, inspiring many to believe in their vision and take the leap forward.',
    link: '/success-story/2',
  },
  {
    image: stImg3,
    title: 'Overcoming Challenges',
    description:
      'This journey is about resilience and strength in the face of difficulties. By embracing challenges as opportunities for growth, it became a powerful reminder that setbacks are never the end but the beginning of a stronger comeback.',
    link: '/success-story/3',
  },
];

const SuccessStoriesSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -250, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <div className="p-4 bg-[#0A2A5F]">
        <div className="w-full px-6 py-10">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Success Stories
          </h2>

          <div className="relative px-8">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              style={{ backgroundColor: '#012F6D' }}
              className="absolute left-0 z-10 p-2 text-white transform -translate-x-full -translate-y-1/2 rounded top-1/2"
            >
              ❮
            </button>

            {/* Slider */}
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth md:justify-center"
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-3 bg-white rounded-lg shadow w-[350px]"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover w-full h-40 rounded"
                  />
                  <div className="mt-2 text-center">
                    <p className="italic font-medium text-gray-800">
                      {slide.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {slide.description}
                    </p>
                    <a href={slide.link}>
                      <button
                        style={{ backgroundColor: '#012F6D' }}
                        className="px-4 py-1 mt-3 text-sm text-white transition rounded hover:brightness-90"
                      >
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              style={{ backgroundColor: '#012F6D' }}
              className="absolute right-0 z-10 p-2 text-white transform translate-x-full -translate-y-1/2 rounded top-1/2"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSlider;
