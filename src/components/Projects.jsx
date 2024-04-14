import React, { useState } from "react";
import galleryapi from "../assets/images/galleryapi.webp";
import todo from "../assets/images/todo.webp";
import gallery from "../assets/images/gallery.webp";
import benemart from "../assets/images/benemart.webp";
import { motion } from "framer-motion";


function Projects() {
  const [active, setactive] = useState(0);
  return (
    <div className="min-h-full" id="projects">
      <motion.h4
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      initial={{ y: "20%", opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
        className="border px-5 py-2 mb-14 xl:mt-12 w-28
       font-light text-xs rounded-full border-[#565656] flex items-center justify-center mt-14"
      >
        <i className="fa-solid fa-laptop-code"></i>&nbsp; Projects
      </motion.h4>
      <motion.h1 whileInView={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "20%", opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            repeatType: "reverse",
            ease: "easeInOut",
          }} className="table md:flex-col flex-row items-start justify-center text-left mb-12">
        My <span className="text-[#28e98c] text-light ">Projects</span>
      </motion.h1>
      <div
        className={`h-auto xl:w-4/5 w-full  md:grid-cols-2 grid grid-cols-1 gap-14 overflow-hidden mb-24`}
      >
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
          className={`max-h-96  `}
          onMouseEnter={() => setactive(1)}
          onMouseLeave={() => setactive(0)}
        >
          <div className={`max-h-96  flex flex-col items-start justify-center`}>
            <a href="https://github.com/nitesh32/benemart/" target="_blank" className="relative ">
              <img
                src={benemart}
                alt=""
                className="max-h-80 w-full object-fill rounded-2xl mb-6"
              />
              <div
                className={`absolute bottom-8 rounded-2xl w-full h-10 flex flex-wrap flex-col overflow-scroll px-2 gap-2`}
              >
                <div
                  className={`${active == 1 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 1 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Node Js
                </div>
                <div
                  className={`${active == 1 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 1 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Mongo Db
                </div>
                <div
                  className={`${active == 1 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 1 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Bootstrap
                </div>
              </div>
            </a>
            <span
              className={`text-2xl font-bold ${
                active == 1 ? "underline" : ""
              } ease-in-out duration-300 `}
            >
              Benemart (e-commerce)
            </span>
          </div>
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
          className={`max-h-96  `}
          onMouseEnter={() => setactive(2)}
          onMouseLeave={() => setactive(0)}
        >
          <div className={`max-h-96  flex flex-col items-start justify-center`}>
            <a href="https://nitesh32.github.io/gallery_api/" target="_blank" className="relative">
              <img
                src={galleryapi}
                alt=""
                className="max-h-80  object-fill rounded-2xl mb-6"
              />
              <div
                className={`absolute bottom-8 rounded-2xl w-full h-10 flex flex-wrap flex-col overflow-scroll px-2 gap-2`}
              >
                <div
                  className={`${active == 2 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 2 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  React Js
                </div>
                <div
                  className={`${active == 2 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 2 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Unsplash API
                </div>
                <div
                  className={`${active == 2 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 2 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Javascript
                </div>
              </div>
            </a>
            <span
              className={`text-2xl font-bold ${
                active == 2 ? "underline" : ""
              } ease-in-out duration-300 `}
            >
              Gallery_Api
            </span>
          </div>
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
          className={`max-h-96  `}
          onMouseEnter={() => setactive(3)}
          onMouseLeave={() => setactive(0)}
        >
          <div className={`max-h-96  flex flex-col items-start justify-center`}>
            <a href="https://nitesh32.github.io/gallery/" target="_blank" className="relative">
              <img
                src={gallery}
                alt=""
                className="max-h-80  object-fill rounded-2xl mb-6"
              />
              <div
                className={`absolute bottom-8 rounded-2xl w-full h-10 flex flex-wrap flex-col overflow-scroll px-2 gap-2`}
              >
                <div
                  className={`${active == 3 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 3 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  HTML
                </div>
                <div
                  className={`${active == 3 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 3 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Javascript
                </div>
                <div
                  className={`${active == 3 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 3 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  CSS
                </div>
              </div>
            </a>
            <span
              className={`text-2xl font-bold ${
                active == 3 ? "underline" : ""
              } ease-in-out duration-300 `}
            >
              Image carousel
            </span>
          </div>
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
          className={`max-h-96  `}
          onMouseEnter={() => setactive(4)}
          onMouseLeave={() => setactive(0)}
        >
          <div className={`max-h-96  flex flex-col items-start justify-center`}>
            <a href="https://nitesh32.github.io/todo/" target="_blank" className="relative">
              <img
                src={todo}
                alt=""
                className="max-h-80  object-fill rounded-2xl mb-6"
              />
              <div
                className={`absolute bottom-8 rounded-2xl w-full h-10 flex flex-wrap flex-col overflow-scroll px-2 gap-2`}
              >
                <div
                  className={`${active == 4 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 4 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  HTML
                </div>
                <div
                  className={`${active == 4 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 4 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  Javascript
                </div>
                <div
                  className={`${active == 4 ? "bg-[#bfbfbf]" : "bg-[white]"} ${
                    active == 4 ? "text-[white]" : "text-[black]"
                  } h-full rounded-full flex items-center justify-center px-2 ease-in-out duration-300`}
                >
                  CSS
                </div>
              </div>
            </a>
            <span
              className={`text-2xl font-bold ${
                active == 4 ? "underline" : ""
              } ease-in-out duration-300 `}
            >
              Todo-web
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
