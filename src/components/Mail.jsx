import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { StateContext } from "./Layout";
import { motion } from "framer-motion";

function Mail(props) {
  const form = useRef();
  const { hello } = useContext(StateContext);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_p3ufly7", "template_v5n7toy", form.current, {
        publicKey: "opj5nbwlxPcm7XCan",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`${props.display} text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border border-[#565656] rounded-2xl h-auto w-auto bg-[#1f1f1f] flex flex-col items-center justify-center p-5`}
    >
      <h1>Let's Discuss</h1>
      <label className={`m-2`}>Name</label>
      <input
        type="text"
        name="user_name"
        className={`w-60 h-14 bg-[#565656] rounded-full border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold tracking-wider cursor-pointer`}
      />
      <label className={`m-2`}>Email</label>
      <input
        type="email"
        name="user_email"
        className={`w-60 h-14 bg-[#565656] rounded-full border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold tracking-wider cursor-pointer`}
      />
      <label className={`m-2`}>Message</label>
      <textarea
        name="message"
        className={`w-60 h-24 bg-[#565656] rounded-md border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold mb-2 tracking-wider cursor-pointer`}
      />
      <motion.input
        type="submit"
        onClick={hello}
        value="SEND"
        className={`h-14 border text-black border-[#28e98c] bg-[#28e98c] w-4/5 rounded-full cursor-pointer hover:bg-black hover:text-[#28e98c]`}
      />
    </form>
  );
}

export default Mail;
