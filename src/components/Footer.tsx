// Footer component with government and tourism links, state map, and copyright info
// bg-cr-primary for footer background
// text-cr-secondary for footer text
// font-display for headings
// All colors are defined in the tailwind.config.js file
//Styling was a bit challenging but I managed to get help from an external source
import Image from "next/image";// This is for optimized image handling
import Link from "next/link";// This is for client-side navigation
export default function Footer() {
  return (
    <footer className="bg-cr-primary text-cr-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-display">Cross River State</h3>
            <p className="text-cr-secondary/80 mb-4">
              Nigeria's premier tourism destination, offering natural beauty, 
              rich culture, and unforgettable experiences.
            </p>
            <div className="w-32 h-24 relative">
              <Image 
                src="/cross-river-map-removebg-preview.png" 
                alt="Cross River State Map" 
                fill
                className="object-contain opacity-40"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Tourism Links</h4>
            <ul className="space-y-2">
              <li><Link href="#attractions" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors">Attractions</Link></li>
              <li><Link href="#culture" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors">Culture</Link></li>
              <li><Link href="#events" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors">Events</Link></li>
              <li><Link href="#contact" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Government</h4>
            <ul className="space-y-2">
              <li><a href="https://www.crossriverstate.gov.ng" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors" target="_blank" rel="noopener noreferrer">Main Government Website</a></li>
              <li><a href="https://www.crossriverstate.gov.ng/government" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors" target="_blank" rel="noopener noreferrer">Government Services</a></li>
              <li><a href="https://www.crossriverstate.gov.ng/news" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors" target="_blank" rel="noopener noreferrer">News & Updates</a></li>
              <li><a href="https://www.crossriverstate.gov.ng/contact" className="text-cr-secondary/80 hover:text-cr-secondary transition-colors" target="_blank" rel="noopener noreferrer">Government Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cr-secondary/20 mt-8 pt-8 text-center">
          <p className="text-cr-secondary/80">
             2025 Cross River State Government. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}





