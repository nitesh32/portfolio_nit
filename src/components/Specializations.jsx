import React, { useState } from "react";
import { motion } from "framer-motion";

function Specializations() {
  const [active, setactive] = useState(0);

  return (
    <div className="min-h-full">
      <motion.h4
        className="border px-5 py-2 mb-14 xl:mt-12 w-40 font-light text-xs rounded-full border-[#565656] flex items-center justify-center mt-14"
        whileInView={{ y: 0, opacity: 1,  }}
      initial={{ y: "50%", opacity: 0, }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      >
        <i className="fa-solid fa-chart-simple"></i>&nbsp; Specializations
      </motion.h4>
      <motion.h1
        whileInView={{ y: 0, opacity: 1,  }}
        initial={{ y: "50%", opacity: 0, }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="table md:flex-col flex-row items-start justify-center lg:text-6xl text-4xl text-left mb-12"
      >
        My <span className="text-[#28e98c] text-light ">Specializations</span>
      </motion.h1>
      <div
        className={`grid xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 h-auto xl:w-4/5 w-full`}
      >
        <motion.div
          onMouseEnter={() => setactive(1)}
          onMouseLeave={() => setactive(0)}

          className={` min-h-52 w-full border border-[${
            active == 1 ? "#28e98c" : "#565656"
          }] rounded-2xl p-6 text-left ease-in-out duration-300`}
        >
          <div className="text-2xl leading-loose">Frontend Development</div>
          <div className="text-base text-[#999999] mb-4">
            I am proficient in modern framework such as React. Skilled in
            responsive design, state management for dynamic and interactive web
            applications.
          </div>
          <div className={`${active == 1 ? "underline" : ""} `}>
            5+ Projects
          </div>
          <i></i>
        </motion.div>

        <motion.div
          onMouseEnter={() => setactive(2)}
          onMouseLeave={() => setactive(0)}
          className={` min-h-52 w-full border border-[${
            active == 2 ? "#28e98c" : "#565656"
          }] rounded-2xl p-6 text-left ease-in-out duration-300`}
        >
          <div className="text-2xl leading-loose">Backend Development</div>
          <div className="text-base text-[#999999] mb-4">
            I am proficient in Node.js, Express.js, and MongoDB. Skilled in API
            development and authentication implementation.
          </div>
          <div className={`${active == 2 ? "underline" : ""} `}>2 Projects</div>
          <i></i>
        </motion.div>

        <div
          onMouseEnter={() => setactive(3)}
          onMouseLeave={() => setactive(0)}
          className={` min-h-52 w-full border border-[${
            active == 3 ? "#28e98c" : "#565656"
          }] rounded-2xl p-6 text-left ease-in-out duration-300`}
        >
          <div className="text-2xl leading-loose">Competitive Programing</div>
          <div className="text-base text-[#999999] mb-4">
            In competitive programming,I have participated in over 50 contests
            and earned an excellence certification.
          </div>
          <div className={`${active == 3 ? "underline" : ""} `}>
            700+ Problems
          </div>
          <i></i>
        </div>
      </div>
    </div>
  );
}

export default Specializations;
