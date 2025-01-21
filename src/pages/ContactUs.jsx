import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {

  const [processing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState(-1);

  const onSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "32d16d8a-4e84-4907-90b2-1f35605ebbee");

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
      setResult(0)
    }
    setTimeout(() => {
      setResult(-1)
    }, 3000)
  };

  return <div className="flex relative w-full overflow-hidden mx-auto">
    <motion.div className="flex flex-col w-full"
      key={0}
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}>
      <div className="flex flex-col md:flex-row bg-[#FBFBFB] justify-center items-center py-14 md:py-28 px-[6%] md:px-[12%]">
        <div className="font-medium text-3xl md:text-[50px] md:basis-1/2 w-full flex justify-start px-4 md:px-10 leading-[48px] md:leading-[62px]" >Get In Touch<br />With Us</div>
        <div className="text-base md:basis-1/2 w-full px-4 md:px-10 mt-4 md:mt-0">Before starting any project, mentorship, or development, we always need a discussion that provides clarity in the thought process from both sides. These discussions encourage us to understand the process and what we are going to do.</div>
      </div>
      <div class="flex flex-col py-7 md:py-14 px-[12%]">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <h2 class="basis-1/2 mb-4 text-3xl text-start font-medium text-gray-900 -mt-1">Contact me to if you need<br />any help from us</h2>

          <div className="basis-1/2 flex flex-col">
            <p class="text-base mb-4 font-light text-start text-gray-500">Got a technical issue? Want to lean something from us? Need details about how we can help you? Let us know.</p>
            <div className="flex flex-col md:flex-row w-full justify-start md:justify-around">
              <a className="text-base text-[#00998C]" href="https://wa.me/918800757476" target="_blank"><i class="fab fa-whatsapp me-2"></i>+91-8800757476</a>
              <a className="flex flex-row text-base w-fit md:w-auto items-center md:space-x-2 text-[#00998C]" href="mailto:ideepanshu9@gmail.com" target="_blank">
                <svg width="auto" height="12px" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H20C21.1046 0 22 0.89543 22 2V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM2 6.61811V16H20V6.61853L11 11.1185L2 6.61811ZM2 4.38199L11 8.88245L20 4.38247V2H2V4.38199Z" fill="#00998C" />
                </svg>
                &nbsp;&nbsp;ideepanshu9@gmail.com</a>
            </div>
          </div>
        </div>
        <form onSubmit={processing ? null : onSubmit} class="space-y-8 mt-20">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            <div className="basis-1/2">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input type="text" id="name" name="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="What's your name?" required />
            </div>
            <div className="basis-1/2">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="name@email.com" required />
            </div>
          </div>
          <div class="sm:col-span-2 -mt-2 md:-mt-0">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
            <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a message..." required></textarea>
          </div>
          <div>
            <button type="submit" class={"flex flex-row items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " + (processing ? "opacity-80" : "")}>
              {processing && <div role="status">
                <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span class="sr-only">Loading...</span>
              </div>}
              <div className="ms-2">{processing ? "Sending" : "Send Message"}</div>
            </button>
            {result != -1 && <div className={"text-sm mt-2 " + (result == 0 ? "text-red-500" : "text-green-400")}>{result == 0 ? "Something went wrong" : "Message sent successfully"}</div>}
          </div>
        </form>
      </div>
    </motion.div >
  </div>
};

export default ContactUs;
