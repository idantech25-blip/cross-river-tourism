// Uses Tailwind CSS for styling
// bg-gradient-to-r from-cr-primary to-cr-primary-light for section background
// text-cr-secondary for text
// font-display for headings
// All colors are defined in the tailwind.config.js file
// onButtonClick and handleEventClick for button click handling
// onViewAllClick and handleViewAllClick for view all button click handling
//I had issues with the functionality of the buttons so I added comments on what to do
import EventCard from "./EventCard";// Reusable card component for individual events
import { 
  FaMusic, 
  FaLeaf, 
  FaUtensils, 
  FaMountain, 
  FaPaintBrush, 
  FaWater 
} from "react-icons/fa";

const events = [
  {
    title: "Calabar Carnival 2025",
    date: "December 1-31, 2025",
    description: "Africa's biggest street party featuring vibrant parades, music, dance, and cultural displays. Join thousands of visitors from around the world in this month-long celebration of Cross River State's rich heritage.",
    icon: FaMusic,
    tags: ["Cultural", "Music", "Dance", "Family"],
    buttonText: "Learn More",
    isFeatured: true
  },
  {
    title: "Nature Walk Festival",
    date: "Coming Soon",
    description: "Explore the Cross River National Park with guided tours and wildlife spotting.",
    icon: FaLeaf,
    buttonText: "Register"
  },
  {
    title: "Food & Culture Festival",
    date: "June 20-22, 2025",
    description: "Taste traditional delicacies and experience local cultural performances.",
    icon: FaUtensils,
    buttonText: "Register"
  },
  {
    title: "Obudu Mountain Marathon",
    date: "August 10, 2025",
    description: "Annual marathon through the scenic Obudu Mountain Resort.",
    icon: FaMountain,
    buttonText: "Register"
  },
  {
    title: "Arts & Crafts Exhibition",
    date: "October 5-7, 2025",
    description: "Showcase of local artists and traditional crafts.",
    icon: FaPaintBrush,
    buttonText: "View Details"
  },
  {
    title: "Water Sports Festival",
    date: "November 15-17, 2025",
    description: "Competitions and activities at Marina Resort.",
    icon: FaWater,
    buttonText: "Register"
  }
];

"use client";

export default function Events() {
  const handleEventClick = (eventTitle: string) => {
    // Handle event button clicks
    console.log(`Clicked event: ${eventTitle}`);
  };
  const handleViewAllClick = () => {
    // Handle view all events button click
    console.log('View all events clicked');
  };
  return (
    <section id="events" className="py-20 bg-gradient-to-r from-cr-primary to-cr-primary-light text-cr-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display">Upcoming Events & Festivals</h2>
          <p className="text-xl opacity-90">Experience the vibrant culture and exciting events of Cross River State</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              icon={event.icon}
              tags={event.tags}
              buttonText={event.buttonText}
              isFeatured={event.isFeatured}
              onButtonClick={() => handleEventClick(event.title)}
            />
          ))}
        </div>
        
        {/** View All Events Button **/}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllClick}
            className="bg-cr-secondary text-cr-primary hover:bg-cr-accent hover:text-cr-secondary font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}

