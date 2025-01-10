import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {

  const [processing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState(-1);

  const onSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setProcessing(false);
    if (data.success) {
      setResult(1);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(-1)
    }
  };

  return <div className="flex relative w-full overflow-hidden mx-auto">
    <motion.div className="flex flex-col w-full"
      key={0}
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}>
      <div className="flex flex-col md:flex-row bg-[#FBFBFB] justify-center items-center py-28 px-[12%]">
        <div className="font-medium text-[48px] md:basis-1/2 w-full flex justify-center" style={{ lineHeight: "58px" }}>Get In Touch<br />With Me</div>
        <div className="text-base md:basis-1/2 w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar quam nisi nisl gravida leo nisi augue. Vivamus nunc interdum interdum pulvinar massa nullam odio at. Sem cursus tincidunt velit porttitor.</div>
      </div>
      <div class="flex flex-col  py-28 px-[12%]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h2 class="basis-1/2 mb-4 text-3xl text-start font-medium text-gray-900 ">Contact me to if you have<br />project in mind</h2>
          <p class="basis-1/2  mb-8 font-light text-center text-gray-500">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        </div>
        <form onSubmit={onSubmit} class="space-y-8 mt-20">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="what we call you?" required />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@email.com" required />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a message..." required></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Send message</button>
        </form>
      </div>
    </motion.div >
  </div>
};

export default ContactUs;
