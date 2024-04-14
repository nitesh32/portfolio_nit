import React, { useState } from "react";
import Figma from "../assets/images/Figma.webp";
import Reacts from "../assets/images/Reacts.webp";
import Tailwinds from "../assets/images/Tailwinds.webp";
import Node from "../assets/images/Node.webp";
import Mongo from "../assets/images/Mongo.webp";
import Github from "../assets/images/Github.webp";
import cpp from "../assets/images/cpp.webp";
import Framer from "../assets/images/Framer.webp";
import { motion } from "framer-motion";


function Skills() {
  const [active, setactive] = useState(0);

  return (
    <div className="min-h-full">
      <motion.h4 className="border px-5 py-2 mb-14 xl:mt-12 w-24 font-light text-xs rounded-full border-[#565656] flex items-center justify-center mt-14"
      whileInView={{ y: 0, opacity: 1, scale:1 }}
      initial={{ y: "50%", opacity: 0, scale:0.5}}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}>
        <i className="fa-solid fa-laptop-code"></i>&nbsp; Skills
      </motion.h4>
      <motion.h1 whileInView={{ y: 0, opacity: 1,  }}
        initial={{ y: "50%", opacity: 0, }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }} 
        className="table md:flex-col flex-row items-start justify-center text-left mb-12">
        My <span className="text-[#28e98c] text-light ">Skills</span>
      </motion.h1>

      <div
        className={`h-auto xl:w-4/5 w-full  md:grid-cols-4 grid grid-cols-2 gap-4 `}
      >
        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold "
          onMouseEnter={() => setactive(2)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active == 2 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Reacts} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">80%</h1>
          </div>
          <span className="">React Js</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(3)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active == 3 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Tailwinds} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">85%</h1>
          </div>
          <span className="">Tailwind CSS</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(4)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active == 4 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Node} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">60%</h1>
          </div>
          <span className="">Node Js</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(5)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active == 5 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Mongo} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">85%</h1>
          </div>
          <span className="">Mongo DB</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(6)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active == 6 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Github} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">80%</h1>
          </div>
          <span className="">Github</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(7)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active ==7 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={cpp} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">90%</h1>
          </div>
          <span className="">C++</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(8)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border rounded-t-3xl border-[${
                active ==8 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Framer} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">60%</h1>
          </div>
          <span className="">Framer Motion</span>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1, scale:1 }}
        initial={{ y: "50%", opacity: 0, scale:0.5}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
          className="h-64 mb-12 font-bold"
          onMouseEnter={() => setactive(1)}
          onMouseLeave={() => setactive(0)}
        >
          <div
            className={`h-5/6 border  rounded-t-3xl border-[${
                active == 1 ? "#28e98c" : "#565656"
              }] ease-in-out duration-300 rounded-b-3xl mb-5 flex flex-col items-center justify-around overflow-hidden p-8`}
          >
            <img src={Figma} alt="" className="h-14 w-14" />
            <h1 className="text-2xl text-[#28e98c]">45%</h1>
          </div>
          <span className="">Figma</span>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Skills;
