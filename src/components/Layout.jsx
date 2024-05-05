import React ,{ createContext, useState , useEffect, useRef 
} from 'react'
import Side_bar from './Side_bar'
import Main from './Main'
import Mail from "./Mail";
export const StateContext = createContext();
import { Analytics } from "@vercel/analytics/react"





function Layout(props) {
  const [dis,setdis] = useState("hidden");
  const [oplayout,setoplayout] = useState("blur-none");
  const hello = () => {
    setdis(dis === "hidden" ? "block" : "hidden");
    setoplayout(dis === "hidden" ? "blur-xl" : "blur-none");
  };
  function cancelmailer(){
    if(dis==="block"){
      setdis("hidden");
      setoplayout("blur-none");
    }

  }
  
  
  
  return (
    <StateContext.Provider value={{hello}} >
    <div
    className={`bg-[#1f1f1f] text-black h-auto w-screen ${props.fl?"hidden":"grid"} sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5  lg:px-20 xl:px-5 font-poppins scroll-smooth select-none`}
    >
        <Analytics />
        <div onClick={()=>cancelmailer()} className={`bg-[#1f1f1f] w-full flex px-5 justify-items-stretch items-center  text-white h-auto mt-4 ${oplayout}`}  >
            <Side_bar/>
        </div >
        <div onClick={()=>cancelmailer()} className={`bg-[#1f1f1f]  text-white xl:h-screen h:auto overflow-visible xl:col-span-2 lg:overflow-scroll  ${oplayout}`} >
            <Main/>
        </div>
        <Mail display={dis}/>
        
    </div>
    </StateContext.Provider>
    
  )
}

export default Layout