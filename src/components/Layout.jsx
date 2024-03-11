import React from 'react'
import Side_bar from './Side_bar'
import Main from './Main'

function Layout() {
  return (
    <div
    className='bg-[#1f1f1f] text-black h-auto w-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5  lg:px-20 xl:px-5 font-poppins scroll-smooth'
    >
        <div className='bg-#1f1f1f w-full flex px-5 justify-items-stretch items-center  text-white h-screen ' >
            <Side_bar/>
        </div >
        <div className='bg-#1f1f1f  text-white xl:h-screen h:auto overflow-visible xl:col-span-2 lg:overflow-scroll '>
            <Main/>
        </div>
        
    </div>
    
  )
}

export default Layout