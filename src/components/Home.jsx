import React from "react";
import { Typewriter } from "react-simple-typewriter";
import round from "../assets/images/round-text.png";

function Home() {
  return (
    <div className="h-auto w-full flex flex-col items-start ">
      <h4 className="border px-5 py-2 mb-14 xl:mt-12 w-36 font-light text-xs rounded-full border-[#565656] flex items-center justify-center">
        <i className="fa-solid fa-house"></i>&nbsp; About Me
      </h4>
      <h1 className="flex flex-col items-start justify-center text-left">
        Hi There, I'm&nbsp;{" "}
        <span className="text-[#28e98c] text-light">Nitesh Sharma</span>
      </h1>
      <h1
        style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
        id="typewriter"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="flex items-start justify-center lg:text-5xl text-lg flex-col pb-11"
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
      </h1>
      <p
      className="text-[#999999] mb-8 text-start"
      >I'm a Full-Stack developer based in Chandigarh, Haryana.A Computer Science Engineering graduate from Chandigarh University.
      </p>
      <div className="flex flex-row flex-wrap justify-start items-center gap-4">
      <div className="flex flex-col justify-start items-start text-[#28e98c]">
      <h1>44+ </h1>
      <span className="text-left text-[#999999]">Students mentored on Coding Ninjas </span>
      </div>
      <div className="flex flex-col justify-start items-start text-[#28e98c]">
      <h1>330+ </h1>
      <span className="text-left text-[#999999]">Problems Solved on Codeforces.</span>
      </div>
      <a href="" className="h-44 w-44 border border-[#575757] rounded-full flex items-center justify-center  duration-0 relative">
        <img src={round} alt="" className="rotate" />
        <i className="fa-solid fa-down-long fa-2xl absolute text-white animate-pulse"></i>
      </a>

      </div>
    </div>
  );
}

export default Home;
