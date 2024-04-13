import { useState } from "react";
import "./App.css";
import Layout from './components/Layout.jsx';
import { motion } from "framer-motion";

function App() {
  console.log(`
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
Hey there 👋, curious!
You're probably wondering how cool this site is.

    If you think it's interesting and want to see the code behind it,
    I've placed it in the open at https://github.com/nitesh32/portfolio_nit.
    Feel free to check it out!

    Also, you can contact me on https://www.linkedin.com/in/nitesh-sharma-3429541bb/ or via nit8339@gmail.com ✨.
  `);
  
   const [preloader,setpreloader] = useState(true);
  
  const transitionValues = {
    duration: 1,
    loop: Infinity,
    ease: "easeInOut",
    repeat: Infinity,
  };

  const ballStyle = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#28e98c",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto"
  };

  const myGreeting =()=>{
    setpreloader(false);
  }
const myTimeout = setTimeout(myGreeting, 2000);
function myStopFunction() {
  clearTimeout(myTimeout);
}

  return (
    <>
    {preloader ? (
    <motion.div className="bg-#1f1f1f text-white w-screen h-screen flex items-center justify-center p-0 m-0"
    >
       <motion.span
      style={ballStyle}
      transition={{
        y: transitionValues,
        width: transitionValues,
        
      }}
      animate={{
        y: ["2rem",  "10rem",  '2rem'],
        width: ["2rem","2rem", "3rem", "2rem","2rem"],
      }}
    />
    </motion.div>
    ):
    (<Layout/>)}
      


    </>
  );
}



export default App;



