// Header component with government banner and navigation menu
// bg-cr-primary for banner background
// text-cr-secondary for banner text
// bg-cr-secondary for nav background
// text-cr-primary for nav text
// text-cr-dark for inactive nav links
// border-cr-light for nav border
// All colors are defined in the tailwind.config.js file
// The navigation links should have hover effects and be spaced evenly
//Should be responsive and adapt to different screen sizes
//Styling was done using Tailwind CSS*(It was a bit difficult I got some help from an external source)
import Link from "next/link";// This is for client-side navigation
export default function Header() {
  return (
    <>
      {/* Government Banner */}
      <div className="bg-cr-primary text-cr-secondary py-2 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>Official Tourism Portal of Cross River State Government | 
            <a href="https://www.crossriverstate.gov.ng" className="underline hover:text-cr-accent ml-1" target="_blank" rel="noopener noreferrer">
              Visit Main Government Website
            </a>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-cr-secondary shadow-lg sticky top-0 z-50 border-b border-cr-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-cr-primary font-display">Cross River State Tourism</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link href="#home" className="text-cr-primary hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <span className="text-cr-light/30">|</span>
                <Link href="#attractions" className="text-cr-dark hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"> Destinations</Link>
                <span className="text-cr-light/30">|</span>
                <Link href="#culture" className="text-cr-dark hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Activities</Link>
                <span className="text-cr-light/30">|</span>
                <Link href="#events" className="text-cr-dark hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</Link>
                <span className="text-cr-light/30">|</span>
                <Link href="#contact" className="text-cr-dark hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Offers</Link>
                <span className="text-cr-light/30">|</span>
                <Link href="#contact" className="text-cr-dark hover:text-cr-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
                <span className="text-cr-light/30">|</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

