import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import round from "../assets/images/round-text.png";
import { motion } from "framer-motion";



function Home() {
  const gotoproj = (val) => {
    console.log("eefrgthyjk");
    const element = document.getElementById(val);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="h-auto w-full flex flex-col items-start " >
      <motion.h4 whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} 
          className="border px-5 py-2 mb-14 xl:mt-12  w-36 font-light text-xs rounded-full border-[#565656] flex items-center justify-center" >
        <i className="fa-solid fa-house"></i>&nbsp; About Me
      </motion.h4>
      <motion.h1 whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} className="table flex-col items-start justify-center text-left">
        Hi There, I'm&nbsp;
        <span className="text-[#28e98c] text-light">Nitesh Sharma</span>
      </motion.h1>
      <motion.h1
        style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
        id="typewriter"
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        // data-aos="fade-up"
        // data-aos-easing="linear"
        // data-aos-duration="1000"
        className="table items-start justify-center lg:text-5xl text-lg flex-col pb-11"
      >
        I Am Into&nbsp;
        <span className="text-[#28e98c] ">
          <Typewriter
            words={["Web Development", "Competitive Programing"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </span>
      </motion.h1>
      <motion.p whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} className="text-[#999999] mb-8 text-start w-4/5" >
        I'm a Full-Stack developer based in Chandigarh, Haryana.A Computer
        Science Engineering graduate from Chandigarh University.
      </motion.p>
      <div className="flex flex-row flex-wrap justify-start items-center gap-4">
        <motion.div whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} className="flex flex-col justify-start items-start text-[#28e98c]">
          <h1>50+ </h1>
          <span className="text-left text-[#999999]">
            Students mentored on Coding Ninjas{" "}
          </span>
        </motion.div>
        <motion.div whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} className="flex flex-col justify-start items-start text-[#28e98c]">
          <h1>330+ </h1>
          <span className="text-left text-[#999999]">
            Problems Solved on Codeforces.
          </span>
        </motion.div>
        <motion.div
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: "20%", opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
          onClick={() => gotoproj("projects")}
          className="h-44 w-44 border border-[#575757] rounded-full flex items-center justify-center  duration-0 relative cursor-pointer"
        >
          <img src={round} alt="" className="rotate" />
          <i className="fa-solid fa-down-long fa-2xl absolute text-white animate-pulse"></i>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
