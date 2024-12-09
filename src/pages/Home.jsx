import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Home = () => {

  const sections = [
    { id: 1, title: "Section 1", bg: "bg-red-500" },
    { id: 2, title: "Section 2", bg: "bg-blue-500" },
    { id: 3, title: "Section 3", bg: "bg-green-500" },
    { id: 4, title: "Section 4", bg: "bg-yellow-500" },
    { id: 5, title: "Section 5", bg: "bg-purple-500" },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle keyboard events (up/down arrows)
  const handleKeyDown = (e) => {
    e.preventDefault()
    if (isScrolling) return; // Prevent multiple triggers

    if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (e.key === "ArrowUp" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleScroll = (e) => {
    // Prevent the default scroll behavior
    e.preventDefault();
    if (isScrolling) return; // Prevent multiple scroll triggers
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    console.log("here" + currentSection)
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    // Add event listener for keyboard input (up/down arrow)
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  // const SlowAnimationExample = () => {
  //   return (
  //     <motion.div
  //       initial={{ x: 0 }}
  //       animate={{ x: 300 }}
  //       transition={{
  //         duration: 2,  // Duration of the animation in seconds
  //         ease: "easeInOut",  // Easing function for smooth transition
  //       }}
  //       style={{ width: 100, height: 100, backgroundColor: "blue" }}
  //     >
  //       <h1 className="text-white">Slow Animation</h1>
  //     </motion.div>

  //   );
  // };


  return (
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full overflow-hidden h-screen">
        <motion.div className="flex flex-row h-screen justify-between mt-10"
          key={0}
          initial={{ y: "100%" }}
          animate={{ y: "0" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-start basis-3/5 px-4">
            <div className="text-[56px] font-extrabold">Hi There, I'm Jimmy Chairperson</div>
            <div className="text-xl font-light my-6">Hi I'm a UI/UX Designer, creating bold and brave Interface design <br></br>for companies all across the world</div>

            <div className="flex flex-row mt-20">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center me-2 ">

                Let's Talk
                <svg class="w-4 h-4 ms-2" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 7H6.01M10 7H10.01M14 7H14.01M7 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H12L7 18V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button type="button" class="text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center ">
                Portfolio
                <svg class="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>

          </div>
          <div className="basis-2/5 flex justify-center relative">
            <div className="w-[374px] h-[421px] absolute">
              <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute left-[-15%] top-[30%]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.09531" cy="6.04785" r="6" fill="#FDAD57" fill-opacity="0.35" />
                  <circle cx="6.09531" cy="6.04785" r="4" fill="#FDAD57" fill-opacity="0.65" />
                  <circle cx="6.09531" cy="6.04785" r="2" fill="#FDAD57" />
                </svg>
                <div>Web Development</div>
              </span>
              <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute left-[-10%] bottom-[15%]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.09531" cy="6.04785" r="6" fill="#312E81" fill-opacity="0.35" />
                  <circle cx="6.09531" cy="6.04785" r="4" fill="#312E81" fill-opacity="0.65" />
                  <circle cx="6.09531" cy="6.04785" r="2" fill="#312E81" />
                </svg>
                <div>UX Research</div>
              </span>
              <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[5%] top-[12.5%]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.09531" cy="6.04785" r="6" fill="#FF5F5F" fill-opacity="0.35" />
                  <circle cx="6.09531" cy="6.04785" r="4" fill="#FF5F5F" fill-opacity="0.65" />
                  <circle cx="6.09531" cy="6.04785" r="2" fill="#FF5F5F" />
                </svg>
                <div>Brand Identity</div>
              </span>
              <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[-5%] bottom-[17.5%]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.09531" cy="6.04785" r="6" fill="#68CA95" fill-opacity="0.35" />
                  <circle cx="6.09531" cy="6.04785" r="4" fill="#68CA95" fill-opacity="0.65" />
                  <circle cx="6.09531" cy="6.04785" r="2" fill="#68CA95" />
                </svg>
                <div>Mobile App Design</div>
              </span>
            </div>
            <div className="absolute -z-10">
              <svg width="374" height="421" viewBox="0 0 374 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.443 5.57481C180.272 -0.677336 193.614 -0.677327 204.443 5.57482L355.867 92.9998C366.696 99.2519 373.367 110.806 373.367 123.311V298.161C373.367 310.665 366.696 322.219 355.867 328.471L204.443 415.896C193.614 422.149 180.272 422.149 169.443 415.896L18.0183 328.471C7.18928 322.219 0.518333 310.665 0.518333 298.161V123.311C0.518333 110.806 7.18929 99.2519 18.0183 92.9998L169.443 5.57481Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// {sections.map((section, index) => (
//   <motion.div
//     key={section.id}
//     className={`absolute top-0 left-0 w-full h-screen ${section.bg} flex items-center justify-center`}
//     initial={{ y: "100%" }}
//     animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
//     transition={{ duration: 0.6, ease: "easeInOut" }}
//   >
//     <h1 className="text-white text-4xl font-bold">{section.title}</h1>
//   </motion.div>
// ))}

export default Home;
