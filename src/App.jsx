import React, { useState, useRef } from "react";
import tenziesImg from "./assets/Tenzies.png";
import mapsHomePage from "./assets/maps/HomePage.png"; 
import mapsProfessorSearch from "./assets/maps/ProfessorSearch.png"; 
import mapsProfessorPage from "./assets/maps/ProfessorPage.png"; 
import mapsRoadMapEmpty from "./assets/maps/RoadMapEmpty.png"; 
import mapsRoadMapFill from "./assets/maps/RoadMapFill.png"; 
import mapsCoursePickerFilled from "./assets/maps/CoursePickerFilled.png"; 
import mapsScheduleBuilder from "./assets/maps/ScheduleBuilder.png"; 
import blueProfile from "./assets/BlueProfile.png"
import "./index.css";

/**
 * A reusable Carousel component for project images
 */
const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Image Slider */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-1 transition-all ${
              currentIndex === index ? "bg-[#1B263B]" : "bg-[#E0E1DD]"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={goToPrev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &#10094;
      </button>
      <button 
        onClick={goToNext} 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &#10095;
      </button>
    </div>
  );
};

function App() {
  const NAVBAR_HEIGHT = 60;
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Smooth scroll handler
  const scrollToSection = (ref) => {
    if (ref.current) {
      const topPosition = ref.current.getBoundingClientRect().top;
      const currentScrollPosition = window.pageYOffset;
      window.scrollTo({
        top: topPosition + currentScrollPosition - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  // Image arrays for carousels
  const mapsImages = [
    mapsHomePage,
    mapsProfessorSearch,
    mapsProfessorPage,
    mapsRoadMapEmpty,
    mapsRoadMapFill,
    mapsCoursePickerFilled,
    mapsScheduleBuilder
  ];

  const tenziesImages = [
    tenziesImg,
  ];

  return (
    <div className="bg-[#0D1B2A] min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#778DA9] w-full h-[60px] sticky top-0 z-50 font-patrick-hand text-white flex flex-row-reverse items-center pr-10">
        <button onClick={() => scrollToSection(projectsRef)} className="text-[clamp(1.2rem,3vw,2rem)] px-5 hover:bg-[#1B263B] h-full transition-colors">Projects</button>
        <button onClick={() => scrollToSection(aboutRef)} className="text-[clamp(1.2rem,3vw,2rem)] px-5 hover:bg-[#1B263B] h-full transition-colors">About Me</button>
        <button onClick={() => scrollToSection(introRef)} className="text-[clamp(1.2rem,3vw,2rem)] px-5 hover:bg-[#1B263B] h-full transition-colors">Home</button>
      </nav>

      {/* Hero Section */}
      <section ref={introRef} className="h-screen flex flex-col justify-center items-center text-center font-patrick-hand text-white">
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-tight">Hello, my name is Wilson,</h1>
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-tight">I'm a full stack developer.</h1>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="mt-10 text-[2rem] px-10 py-4 rounded-sm bg-[#E0E1DD] text-[#0D1B2A] hover:scale-110 transition-transform duration-200"
        >
          More &darr;
        </button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="h-screen flex items-center justify-center text-white border-t border-white/10">
        <img src={blueProfile} alt="blueProfile" />
        <h1 className="text-4xl font-patrick-hand mx-10">My name is Wilson Huang. As a first-generation CS student at Queens College, I focus on the intersection of robust code and UI/UX. I believe a well-designed interface is the ultimate bridge between human and machine. I’m driven by the challenge of transforming complex problems into simple, beautiful, and navigable solutions. </h1>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="min-h-screen py-20 px-5 lg:px-20">
        <header className="text-white text-[clamp(3.5rem,6vw,5rem)] font-patrick-hand text-center mb-20">
          Projects
        </header>

        <div className="flex flex-col gap-32">
          
          {/* Project 1: M.A.P.S */}
          <div className="flex flex-col lg:flex-row gap-10 items-start font-patrick-hand">
            {/* The Image Container - flex-shrink-0 prevents resizing */}
            <div className="flex-shrink-0 w-full lg:w-[600px] aspect-video bg-[#E0E1DD] rounded-3xl overflow-hidden shadow-2xl">
              <ProjectCarousel images={mapsImages} />
            </div>

            {/* The Text Container */}
            <div className="flex flex-col flex-1 text-white">
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none mb-4">
                M.A.P.S – Academic Planning
              </h2>
              <p className="text-[clamp(1.1rem,2vw,1.4rem)] opacity-90 mb-8 leading-relaxed">
                Full-stack web application designed for Computer Science undergraduates at Queens College. 
                Centralizes course data, professor reviews, and tracking into an intuitive platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button 
                  onClick={() => openLink("https://maps-demo.com")}
                  className="relative group bg-[#E0E1DD] text-[#0D1B2A] py-3 px-8 text-xl overflow-hidden transition-colors"
                >
                  <span className="absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
                  <span className="relative z-10 group-hover:text-white">Live Demo</span>
                </button> */}
                <button 
                  onClick={() => openLink("https://github.com/Wilson1009/MAPS")}
                  className="relative group bg-[#E0E1DD] text-[#0D1B2A] py-3 px-8 text-xl overflow-hidden transition-colors"
                >
                  <span className="absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
                  <span className="relative z-10 group-hover:text-white">GitHub Repo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 2: Tenzies */}
          <div className="flex flex-col lg:flex-row gap-10 items-start font-patrick-hand">
            <div className="flex-shrink-0 w-full lg:w-[600px] aspect-video bg-[#E0E1DD] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center group">
              <img 
                src={tenziesImg} 
                className="w-[90%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-500 rounded-2xl" 
                alt="Tenzies" 
              />
            </div>

            <div className="flex flex-col flex-1 text-white">
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none mb-4">
                Tenzies Game
              </h2>
              <p className="text-[clamp(1.1rem,2vw,1.4rem)] opacity-90 mb-8 leading-relaxed">
                A fast-paced dice rolling game built with React. Features high-score tracking, 
                confetti celebrations, and optimized state management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button onClick={() => openLink("#")} className="relative group bg-[#E0E1DD] text-[#0D1B2A] py-3 px-8 text-xl overflow-hidden">
                  <span className="absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
                  <span className="relative z-10 group-hover:text-white">Live Demo</span>
                </button> */}
                <button onClick={() => openLink("https://github.com/Wilson1009/Tenzies-Game")} className="relative group bg-[#E0E1DD] text-[#0D1B2A] py-3 px-8 text-xl overflow-hidden">
                  <span className="absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
                  <span className="relative z-10 group-hover:text-white">GitHub</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer Spacer */}
      <div className="h-40" />
    </div>
  );
}

export default App;