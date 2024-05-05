import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


function Resume() {
  const [active, setactive] = useState(0);
  return (
    <div>
      <motion.h4 whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }} className="border px-5 py-2 mb-14 xl:mt-12 w-36 font-light text-xs rounded-full border-[#565656] flex items-center justify-center mt-14">
        <i className="fa-solid fa-suitcase"></i>&nbsp; Resume
      </motion.h4>
      <motion.h1 whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }} className="table flex-col items-start justify-center text-left mb-12">
        Education &{" "}
        <span className="text-[#28e98c] text-light ">Experience</span>
      </motion.h1>

      <motion.div
      whileInView={{ y: 0, opacity: 1,  }}
      initial={{ y: "50%", opacity: 0, }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
        onMouseEnter={() => setactive(1)}
        onMouseLeave={() => setactive(0)}
        className={`md:h-40 h-52 border-l border-[#565656] flex items-start justify-start relative text-left`}
      >
        <div
          className={`absolute  -translate-x-1/2 -translate-y-1/2 border border-[${
            active == 1 ? "#28e98c" : "#565656"
          }]  bg-[${
            active == 1 ? "#28e98c" : "#565656"
          }] size-4 rounded-full ease-in-out duration-300`}
        ></div>
        <div
          className={`absolute  md:left-20 left-10 -translate-y-1/2  text-[${
            active == 1 ? "#28e98c" : "#999999"
          }] h-4 w-30 rounded-full leading-3 ease-in-out duration-300 `}
        >
          2024-present
        </div>
        <div className={`absolute md:left-20 left-10 mt-8 text-2xl flex items-start flex-col leading-10`}>Teaching Assistant for Competitive Programing Course <br/><span className="text-base text-[#999999]">Coding ninjas</span></div>
      </motion.div>

      <motion.div
      whileInView={{ y: 0, opacity: 1,  }}
      initial={{ y: "50%", opacity: 0, }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
        onMouseEnter={() => setactive(2)}
        onMouseLeave={() => setactive(0)}
        className={`md:h-40 h-52  border-l border-[#565656] flex items-start justify-start relative text-left` }
      >
        <div
          className={`absolute  -translate-x-1/2 -translate-y-1/2 border border-[${
            active == 2 ? "#28e98c" : "#565656"
          }]  bg-[${
            active == 2 ? "#28e98c" : "#565656"
          }] size-4 rounded-full ease-in-out duration-300`}
        ></div>
        <div
          className={`absolute  md:left-20 left-10 -translate-y-1/2  text-[${
            active == 2 ? "#28e98c" : "#999999"
          }] h-4 w-30 rounded-full leading-3 ease-in-out duration-300`}
        >
          2020-2024
        </div>
        <div className={`absolute md:left-20 left-10 mt-8 text-2xl flex items-start flex-col leading-10`}>Bachelor Degree of Computer Science & Engineering <br/><span className="text-base text-[#999999]">Chandigarh University</span></div>
        
      </motion.div>

      <motion.div
      whileInView={{ y: 0, opacity: 1,  }}
      initial={{ y: "50%", opacity: 0, }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
        onMouseEnter={() => setactive(3)}
        onMouseLeave={() => setactive(0)}
        className={`h-32  border-l border-[#565656] flex items-start justify-start relative`}
      >
        <div
          className={`absolute  -translate-x-1/2 -translate-y-1/2 border border-[${
            active == 3 ? "#28e98c" : "#565656"
          }]  bg-[${
            active == 3 ? "#28e98c" : "#565656"
          }] size-4 rounded-full ease-in-out duration-300`}
        ></div>
        <div
          className={`absolute  md:left-20 left-10 -translate-y-1/2  text-[${
            active == 3 ? "#28e98c" : "#999999"
          }] h-4 w-30 rounded-full leading-3 ease-in-out duration-300`}
        >
          2005-2019
        </div>
        <div className={`absolute md:left-20 left-10 mt-8 text-2xl flex items-start flex-col leading-10`}>Secondary Education <br/><span className="text-base text-[#999999]">HBSE</span></div>
      </motion.div>
    </div>
  );
}

export default Resume;
