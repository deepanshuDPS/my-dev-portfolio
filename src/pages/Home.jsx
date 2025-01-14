import React, { useEffect, useState } from "react";
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

  const [isScrolling, setIsScrolling] = useState(false);
  const [paused, setPaused] = useState(false);

  // Handle keyboard events (up/down arrows)
  const handleKeyDown = (e) => {
    e.preventDefault()
    if (isScrolling) return; // Prevent multiple triggers
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    if (e.key === "ArrowDown" && currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else if (e.key === "ArrowUp" && currentSection > 0) {
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
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800); // Allow scrolling after animation
    if (e.deltaY > 0 && currentSection < 5) {
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
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-row justify-start h-screen items-center -mt-[10%]"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>

        <div className="flex flex-col justify-start basis-3/5 px-4">
          <div className="text-5xl font-extrabold">Hi There, I'm Deepanshu</div>
          <div className="text-lg font-light my-6">Hi, I'm a Frontend Engineer passionate about tech-related tasks and have been refining my skills over the past 8+ years. My expertise lies mainly in Frontend Engineering, including Android app development, Flutter apps, and web development.</div>

          <div className="flex flex-row mt-16">
            <Link to="contact-us" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center me-2 ">
              Let's Talk
              <svg class="w-4 h-4 ms-2" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7H6.01M10 7H10.01M14 7H14.01M7 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H12L7 18V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
            <button type="button" class="text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center" onClick={() => {
              setCurrentSection(3)
            }}>
              Portfolio
              <svg class="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>

        </div>
        <div className="basis-2/5 flex justify-center relative -mt-[20%]">
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
              <div>App Development</div>
            </span>
            <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[5%] top-[12.5%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#FF5F5F" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#FF5F5F" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#FF5F5F" />
              </svg>
              <div>Technical Research</div>
            </span>
            <span class="flex flex-row space-x-2 bg-[#FBFBFB] text-xs font-bold text-[#312E81] text-center p-3 leading-none rounded-lg px-2 shadow-sm absolute right-[-5%] bottom-[17.5%]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.09531" cy="6.04785" r="6" fill="#68CA95" fill-opacity="0.35" />
                <circle cx="6.09531" cy="6.04785" r="4" fill="#68CA95" fill-opacity="0.65" />
                <circle cx="6.09531" cy="6.04785" r="2" fill="#68CA95" />
              </svg>
              <div>Mentorship</div>
            </span>
          </div>
          <div className="absolute -z-10">
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
              style={{
                width: "374px",
                height: "421px",
                clipPath: "url(#hexagon)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
    )
  }

  const whatDoIHelp = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="text-4xl font-medium">What do I help?</div>
        <div className="flex text-lg font-light my-4 w-[60%]">I will help you with frontend development as mentioned, and I understand that a visually appealing design with minimal friction creates a better service.</div>
        <div className="grid grid-cols-2 mt-12">
          {whatIDoDetails.map((item) => {
            return (
              <div className="flex flex-row justify-center items-start m-2 space-x-4 p-6 border-2 border-gray-400 rounded-2xl">
                <img src={item.icon} />
                <div>
                  <div className="text-base font-medium">{item.title}</div>
                  <div className="mt-1 text-sm font-normal text-[#6B7280]">{item.description}</div>
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
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="text-4xl font-medium">My work Experience</div>
        <div className="flex text-lg font-light my-4 w-[60%]">I have worked on 10+ projects, including startups and personal ones. Here are my experiences.</div>

        <ol class="relative w-full">
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-base font-semibold text-gray-900 ">Personal Projects</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">July 2016 - Present</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-base font-semibold text-gray-900 ">Frontend Engineer</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">Worked on 5+ android apps includes games, utility apps, website develpment and more.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-base font-semibold text-gray-900 ">Hubhopper</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">January 2021 - Present</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-base font-semibold text-gray-900 ">Frontend Engineer</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">Working on podcast creation and listening android app and it's website develoment.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-base font-semibold text-gray-900 ">NearGroup Chatbot</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">January 2020 - December 2020</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-base font-semibold text-gray-900 ">Android App Developer</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">Worked on 2 android app projects, one is dating app and the other is a quiz game app.</p>

            </div>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700      ">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="flex flex-row ms-4">
            <div className="basis-[35%] pt-4">
              <h3 class="text-base font-semibold text-gray-900 ">Code Flow Tech LLP</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">July 2018 - September 2019</p>
            </div>
            <div className="basis-[65%] relative border-s border-gray-200 ml-4 px-8 py-4">
              <div class="absolute w-6 h-6 bg-white border-gray-200 border-dotted border-2 rounded-full mt-0.75 -start-3  "></div>
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time> */}
              <h3 class="text-base font-semibold text-gray-900 ">Android App Developer</h3>
              <p class="mb-4 text-sm font-normal text-gray-500 ">Worked on 2+ android app projects basically a Food Delivery, University Helpdesk app etc.</p>

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
      <motion.div className="absolute top-0 left-0 flex flex-col h-screen"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="bg-[#FBFBFB] w-full h-full mb-28">
          <div className="px-0 md:pl-[10%] text-4xl font-medium mt-10">My Portfolio</div>
          <div className="px-0 md:pl-[10%] flex text-lg font-light mt-2 w-[60%]">One step away to develop your product with us</div>
          <div className={" my-6 whitespace-nowrap flex " + (paused ? '' : 'animate-slide')}
          // onMouseEnter={() => setPaused(true)}
          // onMouseLeave={() => setPaused(false)}
          >
            {myProjects.map((it) => {
              return (<img src={it.img} className="rounded-lg bg-[#D9D9D9] w-[480px] h-[280px] mr-4 cursor-pointer object-center" onClick={() => {
                window.open(it.link, '_blank')
              }} />)
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  const letsConnect = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen items-center justify-between"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="flex flex-col w-[80%] justify-center px-10 py-4 items-center text-center bg-[#312E81] text-white rounded-xl">
          <div className="text-4xl font-medium mt-10">Let's Make Something Great Together!</div>
          <div className="flex text-lg font-light mt-4 mb-16 text-center">I will help you to create your brands and innovate businesses</div>
          <button type="button" class="text-[#312E81] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center my-4 ">
            Let's Talk
            <svg class="w-4 h-4 ms-2" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 7H6.01M10 7H10.01M14 7H14.01M7 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H12L7 18V13Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row justify-between mb-32 w-full text-sm">
          © 2025 Deepanshu. All rights reserved.
          <div className="flex flex-row space-x-4">
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
        </div >
      </motion.div >
    );
  }

  const peopleAboutMe = (index) => {
    return (
      <motion.div className="px-0 md:px-[10%] w-full absolute top-0 left-0 flex flex-col h-screen  items-center"
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: index === currentSection ? "0%" : index < currentSection ? "-100%" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="text-4xl font-medium mt-10">People Talk About Me</div>
        <div className="flex text-lg font-light mt-4 mb-16 w-[50%] text-center">I got a job that was in accordance with that salary and field of work, the process of submitting an application was quite cosy</div>
        <div className="flex flex-row w-full relative h-[150px]">
          {currentTestimonialSection != 0 && <button className="absolute left-[22%] z-10 top-[25%] shadow-md rounded-full"
            onClick={() => { handleLeftRight("left") }}>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2_52)">
                <rect width="50" height="50" rx="25" transform="matrix(-1 0 0 1 52 1)" fill="white" />
                <path d="M22 22L18 26M18 26L22 30M18 26L36 26" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>}
          {currentTestimonialSection != testimonials.length - 1 && <button className="absolute right-[22%] z-10 top-[25%] shadow-md rounded-full"
            onClick={() => { handleLeftRight("right") }}>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2_49)">
                <rect x="2" y="1" width="50" height="50" rx="25" fill="white" />
                <path d="M32 22L36 26M36 26L32 30M36 26L18 26" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>}
          {testimonials.map((t, index) => {
            return (<motion.div className={"h-full w-[50%] left-[25%] absolute top-0 mx-1 -translate-x-1/2 flex flex-col  justify-center " + (currentTestimonialSection == index ? "transition-opacity ease-in duration-300 opacity-100" : [currentTestimonialSection - 1, currentTestimonialSection + 1].includes(index) ? "transition-opacity ease-in duration-700 opacity-10" : "hidden")}
              key={index}
              initial={{ x: "100%" }}
              animate={{ x: index === currentTestimonialSection ? "0%" : index < currentTestimonialSection ? "-100%" : "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="flex flex-col bg-[#FBFBFB] rounded-lg px-6 py-4 absolute w-full justify-center items-center">
                <div className="group relative">
                  <div className="text-xl font-medium text-center line-clamp-3 cursor-pointer">{`"${t.review}"`}</div>
                  {t.hover && <div className="opacity-0 group-hover:opacity-100 duration-300 absolute text-sm font-medium text-center bg-gray-100 p-2 -top-[50%] cursor-pointer rounded-xl">{`"${t.review}"`}</div>}
                </div>
                <div className="flex flex-row text-[16px] my-2">
                  <a href={t.link_to_profile} className="font-medium text-black hover:underline cursor-pointer" target="_blank">{t.name}</a>
                  &nbsp;•&nbsp;
                  <div className="font-light">{t.helped_in}</div>
                  {t.year && <>
                    &nbsp;•&nbsp;
                    <div className="font-light">{t.year}</div>
                  </>}
                </div>
              </div>
            </motion.div>)
          })}

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
