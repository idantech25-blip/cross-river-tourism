// The Attractions section showcasing key tourist spots in Cross River State
// Each attraction is represented by a card with an icon, title, and description
// Colors and gradients are defined in tailwind.config.js for consistency
// bg-cr-light for section background
// text-cr-primary for headings
// text-cr-light for descriptive text
// font-display for headings
// All colors are defined in the tailwind.config.js file
import AttractionCard from "./AttractionCard";// Import the AttractionCard component
import { 
  FaMountain, 
  FaWater, 
  FaTheaterMasks, 
  FaTree, 
  FaUmbrellaBeach, 
  FaPalette 
} from "react-icons/fa";// Import icons from react-icons

const attractions = [
  {
    title: "Obudu Mountain Resort",
    description: "Experience the cool climate and breathtaking views at Nigeria's premier mountain resort. Enjoy cable car rides and temperate weather year-round.",
    icon: FaMountain,
    gradientFrom: "from-cr-primary",
    gradientTo: "to-cr-primary-light"
  },// Example attraction
  {
    title: "Agbokim Waterfalls",
    description: "Marvel at the seven cascading waterfalls surrounded by lush rainforest vegetation. A perfect spot for nature lovers and photographers.",
    icon: FaWater,
    gradientFrom: "from-cr-accent",
    gradientTo: "to-cr-primary"
  },// Another attraction
  {
    title: "Calabar Carnival",
    description: "Join Africa's biggest street party! Experience vibrant parades, music, dance, and cultural displays every December.",
    icon: FaTheaterMasks,
    gradientFrom: "from-cr-primary-dark",
    gradientTo: "to-cr-primary"
  },
  {
    title: "Cross River National Park",
    description: "Explore the biodiversity hotspot home to the endangered Cross River gorilla and diverse flora and fauna.",
    icon: FaTree,
    gradientFrom: "from-cr-primary",
    gradientTo: "to-cr-accent"
  },
  {
    title: "Marina Resort",
    description: "A recreational hub featuring a slave history museum, cinema, and beautiful waterfront relaxation areas.",
    icon: FaUmbrellaBeach,
    gradientFrom: "from-cr-accent",
    gradientTo: "to-cr-primary-light"
  },
  {
    title: "Cultural Heritage",
    description: "Discover traditional dances, festivals, and the famous Edikang Ikong and Afang soup cuisine.",
    icon: FaPalette,
    gradientFrom: "from-cr-primary-light",
    gradientTo: "to-cr-primary"
  }
];

export default function Attractions() {
  return (
    <section id="attractions" className="py-20 bg-cr-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cr-primary mb-4 font-display">Must-Visit Attractions</h2>
          <p className="text-xl text-cr-light">Discover the wonders that await you in Cross River State</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              title={attraction.title}
              description={attraction.description}
              icon={attraction.icon}
              gradientFrom={attraction.gradientFrom}
              gradientTo={attraction.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

