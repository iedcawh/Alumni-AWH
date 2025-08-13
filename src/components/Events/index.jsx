import React from "react";
import bg from "../../assets/bg.png"

const events = [
  { date: "Aug. 14 - Aug. 25", title: "Celtic Classics" },
  { date: "Aug. 14", title: "WAA: Fond du Lac Chapter Night of Celebration", location: "Fond du Lac Beer Company, Fond du Lac, WI" },
  { date: "Aug. 15", title: "Badger Meet-Up", location: "Wisconsin Alumni Association and Madison, WI" },
  { date: "Aug. 18", title: "An Evening with WAA CEO Aissa Robertson", location: "Zoom Event" },
  { date: "Aug. 20 - Aug. 30", title: "Kenya Safari: The Big Five" },
  { date: "", title: "Past Events Gallery", special: true },
  { date: "Aug. 21", title: "WAA: Chicago Chapter Welcome to the City Event", location: "WeWork Kinzie, Chicago, IL" },
  { date: "Aug. 21", title: "WAA: Valley of the Sun Chapter Welcome to the City Social", location: "Culinary Dropout, Scottsdale, AZ" },
  { date: "Aug. 22", title: "Badger Meet-Up", location: "Wisconsin Alumni Association and Madison, WI" }
];

function Events() {
  return (
    <div
      className="bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Title */}
      <h2 className="text-white text-2xl font-semibold text-center mb-8">
        Events at a Glance
      </h2>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              event.special
                ? "bg-blue-800 text-white flex items-center justify-center"
                : "bg-white bg-opacity-80"
            }`}
          >
            {event.special ? (
              <h3 className="text-lg font-bold">Past Events Gallery</h3>
            ) : (
              <>
                <p className="text-xs text-gray-600">{event.date}</p>
                <h3 className="text-sm font-semibold mt-1">{event.title}</h3>
                {event.location && (
                  <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
