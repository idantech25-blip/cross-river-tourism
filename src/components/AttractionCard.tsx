// Individual attraction card component
// Uses props for title, description, icon, and gradient colors
// bg-cr-secondary for card background
// text-cr-primary for title text
// text-cr-light for description text
// bg-cr-accent and bg-cr-primary gradients for visual appeal
// font-display for titles
// All colors are defined in the tailwind.config.js file
import { IconType } from "react-icons";// For icon types
interface AttractionCardProps {
  title: string;
  description: string;
  icon: IconType;
  gradientFrom: string;
  gradientTo: string;
}// Interface for attraction card props

export default function AttractionCard({ title, description, icon: Icon, gradientFrom, gradientTo }: AttractionCardProps) {
  return (
    <div className="bg-cr-secondary rounded-xl shadow-lg overflow-hidden card-hover border border-cr-light">
      <div className={`h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
        <div className="text-center text-cr-secondary">
          <div className="text-6xl mb-2"><Icon /></div>
          <h3 className="text-2xl font-bold font-display">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cr-primary mb-3 font-display">{title}</h3>
        <p className="text-cr-light mb-4">
          {description}
        </p>
        <button className="w-full bg-cr-accent hover:bg-cr-primary-light text-cr-secondary font-bold py-2 px-4 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

