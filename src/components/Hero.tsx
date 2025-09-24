// Hero section with background image, gradient overlay, and call-to-action buttons
// bg-cr-primary for background
// text-cr-secondary for text
// bg-hero-pattern for subtle patterned overlay (defined in tailwind.config.js)*This was a bit difficult I got some help from an external source
// All colors are defined in the tailwind.config.js file
//It's supposed to be a full screen hero section with a background display and news media, a gradient overlay for better text visibility, and two a call-to-action buttons. The layout should be responsive and visually appealing. 
import Image from "next/image";// This is for optimized image handling
export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-5 opacity-10">
        <Image 
          src="/cross-river-map-removebg-preview.png" 
          alt="Cross River State Map" 
          fill
          className="object-contain"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient z-10"></div>
      
      <div className="relative z-20 text-center text-cr-secondary px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
          Welcome to Cross River State
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Discover the natural beauty, rich culture, and warm hospitality of Nigeria&apos;s tourism capital
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cr-accent hover:bg-cr-primary-light text-cr-secondary font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
            Plan Your Visit
          </button>
          <button className="border-2 border-cr-secondary text-cr-secondary hover:bg-cr-secondary hover:text-cr-primary font-bold py-4 px-8 rounded-full text-lg transition-all">
            Explore Attractions
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
    </section>
  );
}

