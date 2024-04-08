import React, { useRef,useContext } from 'react';
import emailjs from '@emailjs/browser';
import {StateContext} from "./Layout";

function Contact() {

    const form = useRef();
     
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_p3ufly7', 'template_v5n7toy', form.current, {
          publicKey: 'opj5nbwlxPcm7XCan',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            var name_ele=document.getElementById("nameh");
            var email_ele=document.getElementById("emailh");
            var message_ele=document.getElementById("messageh");
            var submit_butt=document.getElementById("submith");
            submit_butt.value="Message Sent";
            document.getElementById("formemail").removeAttribute("nameh");
            name_ele.value="";
            email_ele.value="";
            message_ele.value="";


            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };




  return (
    <div className="min-h-full">
      <h4
        className="border px-5 py-2 mb-14 xl:mt-12 w-28
       font-light text-xs rounded-full border-[#565656] flex items-center justify-center mt-14"
      >
        <i className="fa-regular fa-handshake"></i>&nbsp; Contact
      </h4>
      <h1 className="table md:flex-col flex-row items-start justify-center text-left mb-12">
        Let's <span className="text-[#28e98c] text-light ">Connect</span>
      </h1>

      <form id="formemail" ref={form} onSubmit={sendEmail} className={`w-4/5 flex flex-col items-start`} >
        <label className={`m-2`}>Name*</label>
        <input id="nameh" type="text" required name="user_name" className={`w-full h-14 bg-[#565656] rounded-full border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold tracking-wider cursor-pointer`}/>
        <label className={`m-2`}>Email*</label>
        <input id="emailh" type="email" required  name="user_email" className={`w-full h-14 bg-[#565656] rounded-full border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold tracking-wider cursor-pointer`}/>
        <label className={`m-2`}>Message*</label>
        <textarea id="messageh" name="message" required  className={`w-full h-24 bg-[#565656] rounded-md border border-[#565656] hover:border-[#28e98c] outline-none focus:border-[#28e98c] p-2 font-bold mb-10 tracking-wider cursor-pointer`}/>
        <input id="submith"type="submit" value="SEND" className={`h-14 border text-black border-[#28e98c] bg-[#28e98c] w-full rounded-full cursor-pointer hover:bg-black hover:text-[#28e98c]`}/>
      </form>





    </div>
  )
}

export default Contact