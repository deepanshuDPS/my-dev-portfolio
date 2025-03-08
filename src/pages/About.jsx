import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const About = () => {

  
  return <div className="flex relative w-full overflow-hidden mx-auto">
    <motion.div className="flex flex-col w-full"
      key={0}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}>
      <div className="flex flex-col md:flex-row bg-[#FBFBFB] justify-center items-center md:pe-[10%] ">
        <div className="md:basis-1/2 w-full justify-start ">
          <img src="/pic_about_page.jpg" className="w-full h-auto aspect-[3/4] object-cover" />
        </div>
        <div className="text-base md:basis-1/2 w-full px-6 md:ps-28 text-gray-500">
          <div className="text-3xl md:text-[70px] font-medium my-2 md:my-4 text-black" style={{ lineHeight: "80px" }}>Deepanshu</div>
          <div className="text-base md:text-lg font-medium my-2 md:my-4 text-[#00998C]">Frontend engineer & App developer</div>
          <div>I am passionate about tech‑related tasks and have been refining my skills over the past 8+ years (6+ years of
            corporate experience). My expertise lies mainly in Frontend Engineering, including Android app development,
            Flutter apps, and web development.</div>
          <Link to="contact-us" class="flex-row items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex me-2 my-12 md:my-28">
            Get in touch
            <svg className="ml-2" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292969 1.70703L7.58597 9.00003L0.292969 16.293L1.70697 17.707L10.414 9.00003L1.70697 0.29303L0.292969 1.70703Z" fill="white" />
            </svg>
          </Link>
        </div>
      </div>
      <div class="flex flex-col py-12 md:py-28 px-[12%]">
        <div className="text-2xl md:text-4xl font-medium">More About Me</div>
        <div className="my-4 md:my-8 text-gray-400">
        From the 2nd year of my college, I started Android development and continuously worked on 3-4 of my personal apps for the remaining 2 years. I love building coding logic, and I was always interested in creating creative things through it. Since then, I've been refining my skills in both coding and creativity. I have my own personal projects, where I've sometimes succeeded but struggled to grow them, or failed in some cases. I always enjoy helping students think and learn frontend engineering and development in a way that makes users feel good and enjoy the services they've created. Over the past 2 years, I also started writing and have developed a passion for content related to human psychology, which empowers my way of thinking and ethics.        </div>
        <div className="flex flex-row mt-8 space-x-6 md:space-x-12">
          <div className="flex flex-col">
            <div className="text-[30px] font-medium text-blue-700">5+</div>
            <div className="text-sm text-gray-500">Startup Projects</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[30px] font-medium text-blue-700">8+</div>
            <div className="text-sm text-gray-500">Years of experience</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[30px] font-medium text-blue-700">10+</div>
            <div className="text-sm text-gray-500">Personal Projects</div>
          </div>
        </div>
        <a
          href="https://s3.ap-south-1.amazonaws.com/files.dpskreations.com/cv_deepanshu_2025.pdf"
          target="_blank"
          class="flex-row items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex mt-12 w-fit">
          Download my CV
          <svg className="ml-2" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.35 6.04C18.67 2.59 15.64 0 12 0C9.11 0 6.6 1.64 5.35 4.04C2.34 4.36 0 6.91 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM17 9L12.35 13.65C12.15 13.85 11.84 13.85 11.64 13.65L7 9H10V5H14V9H17Z" fill="white" />
          </svg>

        </a>
      </div>
    </motion.div >
  </div>
};

export default About;
