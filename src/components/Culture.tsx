"use client";
//In this file I made use of React Slick a popular carousel slider library 
// bg-cr-secondary for background
// text-cr-primary for headings
// bg-gradient-cr for card backgrounds
// text-cr-dark for text
// text-cr-secondary for button text
//All the colors are defined in the tailwind.config.js file

import { FaTheaterMasks } from "react-icons/fa";// This is for the cultural icon
import Slider from "react-slick";// React Slick for carousel functionality
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS

export default function Culture() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section id="culture" className="py-20 bg-cr-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-cr-primary mb-12 font-display text-center">Rich Cultural Heritage</h2>
        <div className="mx-auto max-w-5xl relative px-12">
          <Slider {...settings}>
            <div className="flex flex-col items-center bg-gradient-cr rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4 text-cr-primary"><FaTheaterMasks /></div>
              <h3 className="text-2xl font-bold text-cr-primary mb-4 font-display">Calabar Carnival's</h3>
              <p className="text-cr-dark mb-6">
                Africa's biggest street party featuring vibrant costumes, music, and dance performances 
                that showcase the rich cultural diversity of Cross River State.
              </p>
              <button className="bg-cr-accent hover:bg-cr-primary-light text-cr-secondary font-bold py-3 px-6 rounded-full transition-colors">
                Learn About Events
              </button>
            </div>
            <div className="flex flex-col items-center bg-gradient-cr rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-cr-primary mb-4 font-display">Traditional Festivals</h3>
              <p className="text-cr-dark mb-6">
                Experience the vibrant traditional festivals that celebrate our rich heritage and community spirit.
              </p>
              <button className="bg-cr-accent hover:bg-cr-primary-light text-cr-secondary font-bold py-3 px-6 rounded-full transition-colors">
                View Festivals
              </button>
            </div>
            <div className="flex flex-col items-center bg-gradient-cr rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-cr-primary mb-4 font-display">Culinary Delights</h3>
              <p className="text-cr-dark mb-6">
                Savor the unique flavors of Cross River State's world-renowned cuisine and delicacies.
              </p>
              <button className="bg-cr-accent hover:bg-cr-primary-light text-cr-secondary font-bold py-3 px-6 rounded-full transition-colors">
                Explore Cuisine
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}