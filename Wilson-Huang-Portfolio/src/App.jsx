import './index.css'
import React, { useRef } from 'react';

// Define the height of your sticky navbar in pixels

function App() {

    const NAVBAR_HEIGHT = 60;
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const projects = useRef(null);

    // Define the central function to handle the scroll action
    const scrollToSection = (ref) => {
      // Check if the ref is attached to an element before scrolling
      if (ref.current) {
        const topPosition = ref.current.getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset;

        window.scrollTo({
          top: topPosition + currentScrollPosition - NAVBAR_HEIGHT,
          behavior: 'smooth',
        });
      }
    };

    // ----Fix this because it openes github instead of the website, make button for the github link-""
    const projectLink = () =>{
        window.open("https://github.com/Wilson1009/Tenzies-Game","_blank")
    }

    return(
        <>
        {/* NavBar - Ensure this is where you measure the height from! */}
            <nav className="bg-[#778DA9] w-100vh h-full sticky top-0 z-50 cursor-pointer font-patrick-hand text-white pr-5 flex flex-row-reverse">
                <button onClick={() => scrollToSection(projects)} className="text-[clamp(1rem,6vw,3rem)] cursor-pointer px-5 duration-200 hover:bg-[#1B263B]">Projects </button>
                <button onClick={() => scrollToSection(aboutRef)} className="text-[clamp(1rem,6vw,3rem)] cursor-pointer px-5 duration-200 hover:bg-[#1B263B]">About Me </button>
                <button onClick={() => scrollToSection(introRef)} className="text-[clamp(1rem,6vw,3rem)] cursor-pointer px-5 duration-200 hover:bg-[#1B263B]">Home </button>
            </nav>
        {/* Intro Page */}
            <section ref = {introRef} className="h-screen" >
                <header className="font-patrick-hand text-white flex-col text-[clamp(3rem,6vw,5rem)] justify-items-center my-[25vh] ">
                    <h1 className="h-100vh w-100v ">Hello, my name is Wilson,</h1> 
                    <h1 className="h-100vh w-100vh ">I'm a full stack developer.</h1> 
                    <div className="flex mt-10">
                        <button onClick={() => scrollToSection(aboutRef)}className="justify-center text-[35px] w-[200px] h-[75px] rounded-sm bg-[#E0E1DD] text-[#0D1B2A] cursor-pointer duration-200 hover:text-[40px]">More &darr;</button>
                    </div>
                </header>
            </section>

        {/* About Me */}
        <section ref={aboutRef} className="h-screen z-0 text-white">
            {/* ADD mt-0 to the first child element */}
            <h1>Temp Placement Thing</h1>
        </section>

        {/* Projects */}
            <section ref={projects} className="h-screen">
            <header className="text-white text-[clamp(3.5rem,6vw,5rem)] font-patrick-hand text-center">Projects</header>
            <div className="font-patrick-hand mt-25 ml-10 text-whitem flex">

                <div 
                onClick={projectLink}
                className="p-9 pl-0 w-[clamp(50vw,65vw,65vw)] h-[clamp(27vw,35vw,40vw)] bg-[#E0E1DD] cursor-pointer
                            flex transition-transform duration-200 ease-in-out 
                            hover:scale-[1.1] hover:z-10">
                    <img 
                        src="src/assets/Tenzies.png" 
                        alt="Tenzies game image" />
                </div>

                <div className="flex flex-col px-20">
                    <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white">Tenzies Game</h2>
                    <p className="mt-5 text-[clamp(1rem,3vw,2rem)] text-white">Simple front-end game of Tenzies built with React.</p>
                    
                    <button onClick={projectLink} class="mt-15 bg-[#E0E1DD] text-[#0D1B2A] cursor-pointer w-full h-[clamp(20px,55px,75px)] text-3xl group relative overflow-hidden transition-colors duration-200 hover:text-white">
                        <span class=" absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-250 ease-out origin-bottom z-0"></span>
                        <span class="relative z-10 duration-500">Live Demo</span>
                    </button>
                    
                    <button onClick={projectLink} class="mt-15 bg-[#E0E1DD] text-[#0D1B2A] cursor-pointer w-full h-[clamp(20px,55px,75px)] text-3xl group relative overflow-hidden transition-colors duration-200 hover:text-white">
                        <span class=" absolute inset-0 bg-[#778DA9] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-250 ease-out origin-bottom z-0"></span>
                        <span class="relative z-10 duration-500">Learn More</span>
                    </button>

                </div>

            </div>
            <div className="mt-250">
                t
            </div>
        </section> 
        </>
    )
}

export default App