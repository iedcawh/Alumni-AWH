import bg from '../../assets/clg1.png';
import events from './events.json';

function Events() {
  return (
    <div
      className="py-12 bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="mb-8 text-3xl font-bold text-center text-white">
        Events at a Glance
      </h2>

      <div className="flex flex-wrap justify-center w-full gap-8 max-md:flex-col max-md:items-center">
        {events.slice(0, 3).map((event, index) => (
          <div
            key={index}
            className="w-[18%] bg-white bg-opacity-80 px-5 py-2 h-[20rem] cursor-pointer max-md:w-[80%] rounded-md flex flex-col"
          >
            <p className="text-xl text-[#3C3C3C] font-bold">{event.date}</p>
            <h3 className="text-[#0A2A5F] text-lg font-semibold mt-1">
              {event.title}
            </h3>
            <hr className="w-[12%] my-3 h-2 bg-[#0A2A5F]" />
            <p className="pt-2 text-sm">
              {event.authors.map((a, index) => (
                <span key={index}>
                  {a}
                  {index < event.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>

            {/* This div will grow and clamp description */}
            <p className="mt-2 overflow-hidden text-sm text-gray-600  line-clamp-4">
              {event.description}
            </p>

            {/* Button pinned to bottom */}
            <a
              href={event.link || '#'}
              className="mt-3 inline-block px-4 py-2 text-white transition rounded-lg bg-[#0A2A5F] hover:bg-blue-700 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
