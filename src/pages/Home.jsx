import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {

  const testimonials = [
    {
      'review': 'He’s sincere and genuine ',
      'name': 'Shirley Denis',
      'link_to_profile': 'https://www.linkedin.com/in/englishwithshirley/',
      'helped_in': 'Website Development',
      'year': 2024
    },
    {
      'review': 'Deepanshu is an amazing guy with unlimited amounts of patience and a willingness to help others. There have been countless times when I’ve come to him with the programming problems i’m facing at work, and he always takes out the time and is able to figure those problems in a short amount of time. Great guy to have in your corner.',
      'name': 'Vardaan Grover',
      'link_to_profile': 'https://www.linkedin.com/in/vardaan-grover',
      'helped_in': 'Mentoring',
      'year': 2023,
      'hover': true
    },
    {
      'review': 'Amazing as a teacher and as a person.',
      'name': 'PURURV DHANKAR',
      'link_to_profile': 'https://www.instagram.com/pururv_',
      'helped_in': 'Teaching',
      'year': 2023
    },
    {
      'review': 'Have good technical knowledge and nice way to teaching. Alway adhere to practical approaches.',
      'name': 'Saurav',
      'link_to_profile': 'https://www.linkedin.com/in/ACoAABJ4WKsB0G5HnJ7B68n7zvnva97fuPusQKQ',
      'helped_in': 'App Development',
      'year': 2018
    }
  ]

  // add Club Liberty, Shirley
  const myProjects = [
    {
      'link': 'https://play.google.com/store/apps/details?id=com.dps.qr_gallery',
      'img': '/images/apps_7.png'
    },
    {
      'link': 'https://www.englishwithshirley.com',
      'img': '/images/apps_6.png'
    },
    {
      'link': 'https://www.hubhopper.com',
      'img': '/images/apps_5.jpg'
    },
    {
      'link': 'https://play.google.com/store/apps/details?id=com.dps.rider',
      'img': '/images/apps_4.jpg'
    },
    {
      'link': 'https://play.google.com/store/apps/details?id=com.app.phw',
      'img': '/images/apps_3.png'
    }
    , {
      'link': 'https://play.google.com/store/apps/details?id=com.dps.musicplayer',
      'img': '/images/apps_2.png'
    },
    {
      'link': 'https://play.google.com/store/apps/details?id=com.Game.Rowdy.virusvsvirus',
      'img': '/images/apps_1.jpg'
    }
  ]

  const whatIDoDetails = [
    {
      'icon': '/svgs/ic_web_dev.svg',
      'title': 'Web Development',
      'description': 'Building, creating, and maintaining of websites. It includes aspects such as website development to it\'s publishing.'
    },
    {
      'icon': '/svgs/ic_mobile.svg',
      'title': 'App Development',
      'description': 'Building, creating, and maintaining of android and hybrid apps. It includes aspects such as app development to it\'s publishing'
    },
    {
      'icon': '/svgs/ic_research.svg',
      'title': 'Technical Research',
      'description': 'Learning what end users of a system or product need and want, then employing those insights to products'
    },
    {
      'icon': '/svgs/ic_brand.svg',
      'title': 'Mentorship',
      'description': 'If anyone wants to start a career in frontend development, I can provide a brief overview of my experience in this field.'
    }
  ]

  const [currentSection, setCurrentSection] = useState(0);
  const [currentTestimonialSection, setCurrentTestimonialSection] = useState(0);
  const [isTestimonialsScrolling, setTestimonialsScrolling] = useState(false);
  const touchStartY = useRef(0);

  const [isScrolling, setIsScrolling] = useState(false);
  // const [paused, setPaused] = useState(false);

  // Handle keyboard events (up/down arrows)
  const handleKeyDown = (e) => {
    e.preventDefault()
    if (isScrolling) return; // Prevent multiple triggers
    let key = e.key.toLowerCase();
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    if ((key === "arrowdown" || key === "pageup") && currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else if ((key === "arrowup" || key === "pagedown") && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Handle keyboard events (up/down arrows)
  const handleLeftRight = (key) => {
    if (isTestimonialsScrolling) return; // Prevent multiple triggers
    setTestimonialsScrolling(true);
    setTimeout(() => setTestimonialsScrolling(false), 800); // Allow scrolling after animation
    if (key === "right" && currentTestimonialSection < testimonials.length - 1) {
      setCurrentTestimonialSection(currentTestimonialSection + 1);
    } else if (key === "left" && currentTestimonialSection > 0) {
      setCurrentTestimonialSection(currentTestimonialSection - 1);
    }
  };

  const handleScroll = (e) => {
    // Prevent the default scroll behavior
    e.preventDefault();
    if (isScrolling) return; // Prevent multiple scroll triggers


    const delta =
      e.wheelDelta ? -e.wheelDelta : e.detail * 20; // Handle scroll direction
    console.log(delta)
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    if (delta > 5 && currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else if (delta < -5 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isScrolling) return; // Prevent multiple scroll triggers


    const touchEndY = e.touches[0].clientY;
    const delta = touchStartY.current - touchEndY;
    console.log(delta)
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    if (delta > 5 && currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else if (delta < -5 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };




  useEffect(() => {

    const container = document.getElementById("home-containter"); // Attach listeners to a specific container

    if(container){
      // Add event listener for keyboard input (up/down arrow)
      window.addEventListener("keydown", handleKeyDown);
      container.addEventListener("wheel", handleScroll, { passive: false });
      // container.addEventListener("DOMMouseScroll", handleScroll, { passive: false }); // For older Firefox versions
      container.addEventListener("touchstart", handleTouchStart, { passive: false });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
    }
    
    // Cleanup on component unmount
    return () => {
      if (container) {
        window.removeEventListener("keydown", handleKeyDown);
        container.removeEventListener("wheel", handleScroll);
        // container.removeEventListener("DOMMouseScroll", handleScroll, { passive: false });
        container.removeEventListener("touchstart", handleTouchStart, { passive: false });
        container.removeEventListener("touchmove", handleTouchMove, { passive: false });
      }
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
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col md:flex-row justify-start h-screen items-center"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>

        <div className="flex flex-col justify-start md:basis-3/5 px-4 my-2 md:my-0">
          <div className="text-2xl md:text-5xl font-extrabold">Dream it, Design it, Develop it</div>
          <div className="text-sm md:text-lg my-6 text-gray-600">Hi, I'm here to help develop your dreams into reality through websites and mobile apps. If you believe in your dream, we believe in our development. It's not just about what we see; it's about what we dream and develop, so others can experience it.</div>

          <div className="flex flex-row mt-2 md:mt-16">
            <Link to="contact-us" class="h-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-center inline-flex items-center me-2 ">
              Let's Talk
              <svg class="w-3 h-3 md:w-4 md:h-4 ms-2" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7H6.01M10 7H10.01M14 7H14.01M7 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H12L7 18V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
            <button type="button" class="h-fit text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium  font-medium rounded-lg text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-center inline-flex items-center me-2 " onClick={() => {
              setCurrentSection(3)
            }}>
              Archive
              <svg class="rtl:rotate-180 w-3 h-3 md:w-4 md:h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>

        </div>
        <div className="md:basis-2/5 flex justify-center relative mt-8 md:-mt-[20%]">
          <div className="w-[187px] h-[210px] md:w-[374px] md:h-[420px] absolute">
            <span class="flex flex-row items-center justify-center space-x-1 md:space-x-2 bg-[#FBFBFB] text-[10px] md:text-xs font-bold text-[#312E81] text-center p-2 md:p-3 leading-none rounded-lg px-2 shadow-sm absolute left-[-30%] md:left-[-15%] top-[20%] md:top-[30%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#FDAD57" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#FDAD57" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#FDAD57" />
              </svg>
              <div>Web Development</div>
            </span>
            <span class="flex flex-row space-x-1 md:space-x-2 bg-[#FBFBFB] text-[10px] md:text-xs font-bold text-[#312E81] text-center p-2 md:p-3 leading-none rounded-lg px-2 shadow-sm absolute left-[-10%] md:left-[-10%] bottom-[7.5%] md:bottom-[15%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#312E81" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#312E81" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#312E81" />
              </svg>
              <div>App Development</div>
            </span>
            <span class="flex flex-row space-x-1 md:space-x-2 bg-[#FBFBFB] text-[10px] md:text-xs font-bold text-[#312E81] text-center p-2 md:p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[-15%] md:right-[-5%] top-[12.5%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#FF5F5F" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#FF5F5F" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#FF5F5F" />
              </svg>
              <div>Technical Research</div>
            </span>
            <span class="flex flex-row space-x-1 md:space-x-2 bg-[#FBFBFB] text-[10px] md:text-xs font-bold text-[#312E81] text-center p-2 md:p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[-10%] md:right-[-5%] bottom-[20%] md:bottom-[17.5%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#68CA95" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#68CA95" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#68CA95" />
              </svg>
              <div>Mentorship</div>
            </span>
          </div>
          <div className="absolute -z-10 hidden md:block">
            <svg width="0" height="0">
              <defs>
                <clipPath id="hexagon" clipPathUnits="userSpaceOnUse">
                  <path d="M169.443 5.57481C180.272 -0.677336 193.614 -0.677327 204.443 5.57482L355.867 92.9998C366.696 99.2519 373.367 110.806 373.367 123.311V298.161C373.367 310.665 366.696 322.219 355.867 328.471L204.443 415.896C193.614 422.149 180.272 422.149 169.443 415.896L18.0183 328.471C7.18928 322.219 0.518333 310.665 0.518333 298.161V123.311C0.518333 110.806 7.18929 99.2519 18.0183 92.9998L169.443 5.57481Z" />
                </clipPath>
              </defs>
            </svg>
            {/* Applying the Clip Path to the Image */}
            <img
              src="/dp_deepanshu.jpg"
              alt="Hexagonal Crop"
              className="w-[187px] h-[210px] md:w-[374px] md:h-[420px]"
              style={{
                clipPath: "url(#hexagon)",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute -z-10 block md:hidden -mt-[210px]">

            <svg width="187px" height="210px">
              <defs>
                <clipPath id="hexagon-sm" clipPathUnits="userSpaceOnUse">
                  <path d="M84.7215 2.7874C90.136 -0.338668 96.807 -0.338663 102.222 2.78741L177.934 46.4999C183.348 49.6259 186.684 55.403 186.684 61.6555V149.08C186.684 155.407 183.348 161.184 177.934 164.31L102.222 208.022C96.807 211.147 90.136 211.147 84.7215 208.022L8.00915 164.31C2.59464 161.184 -0.741071 155.407 -0.741071 149.08V61.6555C-0.741071 55.403 2.59464 49.6259 8.00915 46.4999L84.7215 2.7874Z" />
                </clipPath>
              </defs>
            </svg>
            <img
              src="/dp_deepanshu.jpg"
              alt="Hexagonal Crop"
              style={{
                width: "187px",
                height: "210px",
                clipPath: "url(#hexagon-sm)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
    )
  }

  const whatCanIDo = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen justify-start md:justify-center"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="text-xl md:text-4xl font-medium px-4 md:px-0">What do I help?</div>
        <div className="flex text-sm md:text-lg font-light my-1 md:my-4 px-4 md:px-0 w-full md:w-[60%]">I can help you in the fields mentioned below.</div>
        <div className="flex flex-col md:grid md:grid-cols-2 mt-2 md:mt-6 mx-2">
          {whatIDoDetails.map((item) => {
            return (
              <div className="flex flex-row justify-center m-2 items-start space-x-3 md:space-x-4 p-3 md:p-6 border-2 border-gray-400 rounded-2xl">
                <img src={item.icon} />
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="mt-1 text-xs font-normal text-[#6B7280]">{item.description}</div>
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
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen justify-start md:justify-center mt-2 placeholder:md:mt-4"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="text-xl md:text-4xl font-medium px-4 md:px-0">My work Experience</div>
        <div className="flex text-sm md:text-lg font-light my-2 md:my-4 px-4 md:px-0 w-full md:w-[60%]">I have worked on 10+ projects, including startups and personal ones. Here are my experiences.</div>

        <ol class="relative w-full">
          <li class="flex flex-row ms-4">
            <div className="basis-[25%] md:basis-[35%] pt-2 md:pt-4">
              <h3 class="text-sm md:text-base font-semibold text-gray-900 ">Personal Projects</h3>
              <p class="mb-2 md:mb-4 text-xs md:text-sm font-normal text-gray-500 ">July 2016 - Present</p>
            </div>
            <div className="basis-[75%] md:basis-[65%] relative border-s border-gray-200 ml-4 px-6 md:px-8 py-2 md:py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-sm md:text-base  font-semibold text-gray-900 ">Frontend Engineer</h3>
              <p class="mb-2 md:mb-4 text-xs md:text-sm  font-normal text-gray-500 ">Worked on 5+ android apps includes games, utility apps, website develpment and more.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[25%] md:basis-[35%] pt-2 md:pt-4">
              <h3 class="text-sm md:text-base font-semibold text-gray-900 ">Hubhopper</h3>
              <p class="mb-2 md:mb-4 text-xs font-normal text-gray-500 ">January 2021 - Present</p>
            </div>
            <div className="basis-[75%] md:basis-[65%] relative border-s border-gray-200 ml-4 px-6 md:px-8 py-2 md:py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-sm md:text-base font-semibold text-gray-900  ">Frontend Engineer</h3>
              <p class="mb-2 md:mb-4 text-xs md:text-sm  font-normal text-gray-500 ">Working on podcast creation and listening android app and it's website develoment.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[25%] md:basis-[35%] pt-2 md:pt-4">
              <h3 class="text-sm md:text-base font-semibold text-gray-900  ">NearGroup Chatbot</h3>
              <p class="mb-2 md:mb-4 text-xs font-normal text-gray-500 ">January 2020 - December 2020</p>
            </div>
            <div className="basis-[75%] md:basis-[65%] relative border-s border-gray-200 ml-4 px-6 md:px-8 py-2 md:py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-sm md:text-base font-semibold text-gray-900  ">Android App Developer</h3>
              <p class="mb-2 md:mb-4 text-xs md:text-sm  font-normal text-gray-500 ">Worked on 2 android app projects, one is dating app and the other is a quiz game app.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700      ">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[25%] md:basis-[35%] pt-2 md:pt-4">
              <h3 class="text-sm md:text-base font-semibold text-gray-900  ">Code Flow Tech LLP</h3>
              <p class="mb-2 md:mb-4 text-xs font-normal text-gray-500 ">July 2018 - September 2019</p>
            </div>
            <div className="basis-[75%] md:basis-[65%] relative border-s border-gray-200 ml-4 px-6 md:px-8 py-2 md:py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-sm md:text-base font-semibold text-gray-900  ">Android App Developer</h3>
              <p class="mb-2 md:mb-4 text-xs md:text-sm  font-normal text-gray-500 ">Worked on 2+ android app projects basically a Food Delivery, University Helpdesk app etc.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700      ">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>

        </ol>


      </motion.div>
    );
  }

  const myLatestWork = (index) => {
    return (
      <motion.div className="absolute top-0 left-0 flex flex-col h-screen w-full md:pt-[112px]"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="bg-[#FBFBFB] w-full h-full">
          <div className="md:pl-[10%] text-2xl md:text-4xl font-medium mt-4 md:mt-10 px-4 md:px-0">Archive</div>
          <div className="md:pl-[10%] flex text-base md:text-lg font-light my-2 md:my-4 px-4 md:px-0 w-full md:w-[60%]">Here are some of our past developments</div>
          <Link
            to={"/about"}
            className="md:pl-[10%] flex items-center text-base md:text-base my-2 md:my-4 px-4 md:px-0 w-full md:w-[60%] text-blue-500 hover:underline cursor-pointer">Expore More <svg class="rtl:rotate-180 w-3 h-3 md:w-4 md:h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></Link>
          <div className={"my-8 md:my-6 whitespace-nowrap hidden md:flex animate-slide"}
          // onMouseEnter={() => setPaused(true)}
          // onMouseLeave={() => setPaused(false)}
          >
            {myProjects.map((it) => {
              return (<img src={it.img} className="rounded-lg bg-[#D9D9D9] w-[480px] h-[280px] mr-4 cursor-pointer object-center" onClick={() => {
                window.open(it.link, '_blank')
              }} />)
            })}
          </div>
          <div className={"my-8 md:my-6 whitespace-nowrap md:hidden grid grid-cols-2 px-2 justify-center items-center"}>
            {myProjects.map((it) => {
              return (
                <div className="flex flex-row w-full">
                  <img src={it.img} className="rounded-lg bg-[#D9D9D9] w-fit mt-1 h-[80px] aspect-[2] cursor-pointer object-center" onClick={() => {
                    window.open(it.link, '_blank')
                  }} />
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  const peopleAboutMe = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen items-center justify-start md:justify-center"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="text-2xl md:text-4xl font-medium mt-4 md:mt-10 px-4 md:px-0">People Talk About Me</div>
        <div className="flex text-base md:text-lg font-light text-center my-2 md:my-4 px-4 md:px-0 w-full md:w-[60%]">I thank the people who gave me a chance to showcase my skills and enhance their work and services</div>
        <div className="flex flex-row w-full relative h-[300px] md:h-[150px]">
          {currentTestimonialSection != 0 && <button className="absolute left-[4%] md:left-[22%] z-10 top-[35%] md:top-[25%] shadow-md rounded-full"
            onClick={() => { handleLeftRight("left") }}>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2_52)">
                <rect width="50" height="50" rx="25" transform="matrix(-1 0 0 1 52 1)" fill="white" />
                <path d="M22 22L18 26M18 26L22 30M18 26L36 26" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>}
          {currentTestimonialSection != testimonials.length - 1 && <button className="absolute right-[4%] md:right-[22%] z-10 top-[35%] md:top-[25%] shadow-md rounded-full"
            onClick={() => { handleLeftRight("right") }}>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2_49)">
                <rect x="2" y="1" width="50" height="50" rx="25" fill="white" />
                <path d="M32 22L36 26M36 26L32 30M36 26L18 26" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>}
          {testimonials.map((t, index) => {
            return (<motion.div className={"h-full w-[85%] md:w-[50%] left-[7%] md:left-[25%] absolute top-0 mx-1 -translate-x-1/2 flex flex-col  justify-center " + (currentTestimonialSection == index ? "transition-opacity ease-in duration-300 opacity-100" : [currentTestimonialSection - 1, currentTestimonialSection + 1].includes(index) ? "transition-opacity ease-in duration-700 opacity-10" : "hidden")}
              key={index}
              initial={{ x: "100%" }}
              animate={{ x: index === currentTestimonialSection ? "0%" : index < currentTestimonialSection ? "-100%" : "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="flex flex-col bg-[#FBFBFB] rounded-lg px-6 py-4 absolute w-full justify-center items-center">
                <div className="group relative">
                  <div className="text-lg md:text-xl font-medium text-center line-clamp-6 md:line-clamp-3 cursor-pointer">{`"${t.review}"`}</div>
                  {t.hover && <div className="opacity-0 group-hover:opacity-100 duration-300 absolute text-sm font-medium text-center bg-gray-100 p-2 -top-[50%] cursor-pointer rounded-xl">{`"${t.review}"`}</div>}
                </div>
                <div className="flex text-[16px] justify-center items-center truncate mt-2">
                  <a href={t.link_to_profile} className="font-medium text-black hover:underline cursor-pointer" target="_blank">{t.name}</a>
                  {t.year && <>
                    &nbsp;•&nbsp;
                    <div className="font-light">{t.year}</div>
                  </>}
                </div>
                <div className="font-light">{t.helped_in}</div>
              </div>
            </motion.div>)
          })}

        </div>

      </motion.div>
    );
  }

  const letsConnect = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen items-center justify-between pt-0 pb-[112px] md:pb-0 md:pt-[112px]"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="flex flex-col w-[90%] md:w-[80%] justify-center px-6 md:px-10 py-2 md:py-4 items-center text-center bg-[#312E81] text-white rounded-xl mt-8 md:mt-0">
          <div className="text-2xl md:text-4xl font-medium mt-10">Let's Make Something Great Together!</div>
          <div className="flex text-base md:text-lg font-light mt-4 mb-8 md:mb-16 text-center">I will help bring your ideas to life through my code</div>
          <Link to="/contact-us" class="text-[#312E81] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center my-4 ">
            Let's Talk
            <svg class="w-4 h-4 ms-2" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 7H6.01M10 7H10.01M14 7H14.01M7 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H12L7 18V13Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center w-full text-sm px-4 mb-8 md:mb-0">
          <div className="flex flex-row space-x-4 mb-2">
            <div ><a
              href="https://www.linkedin.com/in/deepanshudps/" target="_blank">
              <i class="fab fa-linkedin text-[20px]"></i></a></div>
            <div class="social-item"><a
              href="https://www.youtube.com/channel/UCXxLsXabJCalmkG4eeOt-OA" target="_blank">
              <i class="fab fa-youtube text-[20px]"></i></a></div>
            <div class="social-item"><a
              href="https://github.com/deepanshuDPS/"
              target="_blank"><i class="fab fa-github text-[20px]"></i></a></div>
            <div class="social-item"><a
              href="https://play.google.com/store/apps/developer?id=DPS+Productions" target="_blank"><i
                class="fab fa-google-play text-[20px]"></i></a></div>
            <div class="social-item"><a href="https://wa.me/918800908158"
              target="_blank"><i class="fab fa-whatsapp text-[20px]"></i></a></div>
          </div>

          <div>© 2025. Developed by Deepanshu</div>
        </div >
      </motion.div >
    );
  }


  return (
    <div id="home-containter" className="flex relative w-full overflow-hidden h-screen mx-auto md:-mt-[112px]" style={{ touchAction: "none" }}>
      {topIntro(0)}
      {whatCanIDo(1)}
      {myWorkExperience(2)}
      {myLatestWork(3)}
      {peopleAboutMe(4)}
      {letsConnect(5)}
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
