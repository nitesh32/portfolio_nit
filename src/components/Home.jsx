import React from "react";
import { Typewriter } from "react-simple-typewriter";
import round from "../assets/images/round-text.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="h-auto w-full flex flex-col items-start "
    >
      <motion.h4 className="border px-5 py-2 mb-14 xl:mt-12  w-36 font-light text-xs rounded-full border-[#565656] flex items-center justify-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      >
        <i className="fa-solid fa-house"></i>&nbsp; About Me
      </motion.h4>
      <motion.h1 className="table flex-col items-start justify-center text-left"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}>
        Hi There, I'm&nbsp;
        <span className="text-[#28e98c] text-light">Nitesh Sharma</span>
      </motion.h1>
      <motion.h1
        style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
        id="typewriter"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="table items-start justify-center lg:text-5xl text-lg flex-col pb-11"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
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
      <motion.p className="text-[#999999] mb-8 text-start w-4/5"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}>
        I'm a Full-Stack developer based in Chandigarh, Haryana.A Computer
        Science Engineering graduate from Chandigarh University.
      </motion.p>
      <div className="flex flex-row flex-wrap justify-start items-center gap-4">
        <motion.div className="flex flex-col justify-start items-start text-[#28e98c]"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}>
          <h1>50+ </h1>
          <span className="text-left text-[#999999]">
            Students mentored on Coding Ninjas{" "}
          </span>
        </motion.div>
        <motion.div className="flex flex-col justify-start items-start text-[#28e98c]"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}>
          <h1>330+ </h1>
          <span className="text-left text-[#999999]">
            Problems Solved on Codeforces.
          </span>
        </motion.div>
        <motion.a
          href=""
          className="h-44 w-44 border border-[#575757] rounded-full flex items-center justify-center  duration-0 relative"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <img src={round} alt="" className="rotate" />
          <i className="fa-solid fa-down-long fa-2xl absolute text-white animate-pulse"></i>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Home;
