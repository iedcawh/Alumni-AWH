import bg from '../../assets/bg.png';
import events from './events.json';

function Events() {
  return (
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-black text-2xl font-bold text-center mb-8">
        Events at a Glance
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-8 max-md:flex-col max-md:items-center">
        {events.slice(0, 3).map((event, index) => (
          <div
            key={index}
            className="w-[18%] bg-white bg-opacity-80 px-5 py-2 h-[20rem] cursor-pointer max-md:w-[80%]"
          >
            <p className="text-2xl text-[#3C3C3C] font-bold">{event.date}</p>
            <h3 className="text-[#012F6D] text-xl font-semibold mt-1">
              {event.title}
            </h3>
            <hr className="w-[12%] my-3 h-2 bg-[#012F6D]" />
            <p className="text-sm pt-2">
              {event.authors.map((a, index) => (
                <span key={index}>
                  {a}
                  {index < event.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
