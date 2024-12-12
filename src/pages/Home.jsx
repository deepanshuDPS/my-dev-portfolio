import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


const Home = () => {


  const whatIDoDetails = [
    {
      'icon': '/svgs/ic_web_dev.svg',
      'title': 'Web Development',
      'description': 'Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing.'
    },
    {
      'icon': '/svgs/ic_mobile.svg',
      'title': 'Mobile App Design',
      'description': 'Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing.'
    },
    {
      'icon': '/svgs/ic_research.svg',
      'title': 'UX Reseach',
      'description': 'Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing.'
    },
    {
      'icon': '/svgs/ic_brand.svg',
      'title': 'Brand Entity',
      'description': 'Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing.'
    }
  ]

  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [paused, setPaused] = useState(false);

  // Handle keyboard events (up/down arrows)
  const handleKeyDown = (e) => {
    e.preventDefault()
    if (isScrolling) return; // Prevent multiple triggers
    console.log("here" + currentSection)
    if (e.key === "ArrowDown" && currentSection < 3) {
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
    if (e.deltaY > 0 && currentSection < 3) {
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

  const topIntro = (index) => {
    return (
      <motion.div className="px-0 md:px-[5%] w-full absolute top-0 left-0 flex flex-row h-screen justify-between mt-10"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
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
    )
  }

  const whatDoIHelp = (index) => {
    return (
      <motion.div className="px-0 md:px-[5%] w-full absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="text-[48px] font-medium">What do I help?</div>
        <div className="flex text-xl font-light my-6 w-[60%]">I will help you with finding a solution and solve your problems. We use proccess design to create digital products. besides that i also help their business </div>
        <div className="grid grid-cols-2 mt-20">
          {whatIDoDetails.map((item) => {
            return (
              <div className="flex flex-row justify-center items-start m-2 space-x-4 p-6 border-2 border-gray-400 rounded-2xl">
                <img src={item.icon} />
                <div>
                  <div className="text-lg font-medium">{item.title}</div>
                  <div className="mt-1 text-[16px] font-normal text-[#6B7280]">{item.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    );
  }
  const myWorkExperience = (index) => {
    return (
      <motion.div className="px-0 md:px-[5%] w-full absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="text-[48px] font-medium">My work Experience</div>
        <div className="flex text-xl font-light my-6 w-[60%]">Passionate to craft amazing digital product. I can provide your business a new creative start right away!</div>

        <ol class="relative w-full">
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border border-2 rounded-full mt-0.75 -start-3  dark:border-gray-900 dark:bg-gray-700"></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border border-2 rounded-full mt-0.75 -start-3  dark:border-gray-900 dark:bg-gray-700"></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border border-2 rounded-full mt-0.75 -start-3  dark:border-gray-900 dark:bg-gray-700"></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
        </ol>


      </motion.div>
    );
  }

  const myLatestWork = (index) => {
    return (
      <motion.div className="absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="bg-[#FBFBFB] w-full mb-100 h-full mb-28">
          <div className="px-0 md:pl-[5%] text-[48px] font-medium mt-10">My Latest Work</div>
          <div className="px-0 md:pl-[5%] flex text-xl font-light my-6 w-[60%]">Perfect solution for digital experience</div>
          <div className={" whitespace-nowrap flex " + (paused ? '' : 'animate-slide')}
            // onMouseEnter={() => setPaused(true)}
            // onMouseLeave={() => setPaused(false)}
          >
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4 cursor-pointer">1</div>
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4">2</div>
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4">3</div>
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4">4</div>
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4">5</div>
            <div className="rounded-lg bg-[#D9D9D9] w-[480px] h-[320px] mr-4">6</div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex relative w-full overflow-hidden h-screen mx-auto">
      {topIntro(0)}
      {whatDoIHelp(1)}
      {myWorkExperience(2)}
      {myLatestWork(3)}

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
