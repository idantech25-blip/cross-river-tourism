import { IconType } from "react-icons";
interface EventCardProps {
  title: string;
  date: string;
  description: string;
  icon: IconType;
  tags?: string[];
  buttonText: string;
  isFeatured?: boolean;
  onButtonClick?: () => void;
}// Interface for event card props(*I had help from a friend)

export default function EventCard({ 
  title, 
  date, 
  description, 
  icon: Icon, 
  tags = [], 
  buttonText, 
  isFeatured = false,
  onButtonClick
}: EventCardProps) {
  const cardClasses = isFeatured 
    ? "bg-cr-secondary/15 backdrop-blur-sm rounded-xl p-6 border border-cr-secondary/30 lg:col-span-2"
    : "bg-cr-secondary/10 backdrop-blur-sm rounded-xl p-6 border border-cr-secondary/20";

  return (
    <div className={cardClasses}>
      {isFeatured ? (
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4"><Icon /></div>
          <div>
            <h3 className="text-2xl font-bold font-display">{title}</h3>
            <p className="text-sm opacity-90">{date}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-3xl mb-4"><Icon /></div>
          <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
          <p className="text-sm opacity-90 mb-4">{date}</p>
        </>
      )}
      
      <p className="text-sm mb-4">{description}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-cr-accent/20 text-cr-secondary px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <button 
        onClick={onButtonClick}
        className={`${
          isFeatured 
            ? "bg-cr-accent hover:bg-cr-secondary text-cr-primary font-bold py-2 px-4 rounded-lg transition-colors transform hover:scale-105"
            : "w-full bg-cr-accent/20 hover:bg-cr-accent text-cr-secondary font-medium py-2 px-4 rounded-lg transition-colors transform hover:scale-105"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

