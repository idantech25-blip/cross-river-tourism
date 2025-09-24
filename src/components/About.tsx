//This is the About component for the Means of Transport section
// It uses Tailwind CSS for styling
//bg-cr-secondary for section background
// text-cr-primary for headings
// text-cr-light for descriptive text
// bg-white for card backgrounds
// text-gray-600 for card text
// All colors are defined in the tailwind.config.js file
import Image from "next/image";  // This is for optimized image handling
export default function About() {
  return (
    <section className="py-20 bg-cr-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cr-primary mb-4 font-display">Means of Transport</h2>
          <p className="text-xl text-cr-light max-w-3xl mx-auto mb-8">
            How To Get Around Cross River State's blessed breathtaking natural landscapes.
          </p>
        </div>
        
        {/* * Transport Options Section * */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image 
              src="/icons/flight-icon.png" 
              alt="Flights" 
              width={64} 
              height={64} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Flights</h3>
            <p className="text-gray-600">
              Discover direct flights to Cross River State from major cities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image 
              src="/icons/car-icon.png" 
              alt="EaseDrive" 
              width={64} 
              height={64} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">EaseDrive</h3>
            <p className="text-gray-600">
              Enjoy scenic car rides connecting you to Cross River State.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image 
              src="/icons/bus-icon.png" 
              alt="Bus Services" 
              width={64} 
              height={64} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Bus Services</h3>
            <p className="text-gray-600">
              Convenient bus services available from neighboring states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}