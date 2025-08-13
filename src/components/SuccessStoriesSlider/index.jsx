import { useRef, useEffect } from 'react';

const slides = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s',
    title: 'Satisfy Your Wanderlust',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s',
    title: 'Make a Difference',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
    title: 'Strengthen UW Connections',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
    title: 'Stay in the Know',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s',
    title: 'Share Your UW Pride',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s',
    title: 'Share Your UW Pride',
    description:
      'Travel the world with fellow Badgers on unforgettable adventures.',
    link: '/success-story/1',
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

      <div className="w-full px-6 py-10 bg-[#0A2A5F]">
        <h2 className="text-3xl font-bold italic text-white text-center mb-8">
          Success Stories
        </h2>

        <div className="relative px-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            style={{ backgroundColor: '#012F6D' }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full text-white p-2 rounded z-10"
          >
            ❮
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth md:justify-center"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 bg-white rounded-lg shadow p-3"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="mt-2 text-center">
                  <p className="font-medium text-gray-800 italic">
                    {slide.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {slide.description}
                  </p>
                  <a href={slide.link}>
                    <button
                      style={{ backgroundColor: '#012F6D' }}
                      className="mt-3 px-4 py-1 text-sm text-white rounded hover:brightness-90 transition"
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full text-white p-2 rounded z-10"
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSlider;
