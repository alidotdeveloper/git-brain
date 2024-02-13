import React from 'react'
import Headinggreen from './Headinggreen'
function Footer() {
  return (
      <div className=' mt-8  items-center pb-0 pt-0.8 text-center sm:pb-10 lg:pb-22 lg:pt-25 '>
          
          <Headinggreen head="ARE YOU READY?" />
          <div class="flex  flex-col gap-2.5 sm:flex-row sm:justify-center m-5 mb-20">
          <a href="#" class="bg-white/90 rounded-md px-20 py-2 text-md font-medium text-[#48AE81] hover:bg-white focus:outline-none focus-visible:ring-white/60 transition-all ring-2 ring-white/30  ">Download GitBrain</a>
          </div>
          
          <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap mt-5 pl-28 pr-28 flex-col md:flex-row items-center  ">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img src="../../images/gitbrain.png" alt= "image-logo" width={20} height={20}  />   
            <span class="ml-1 text-sm text-white font-normal">GitBrain - AI-powered Git Client</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           
          </nav>
          <p class="rounded  text-gray-400 text-sm font-normal inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-#173D43,text-white mt-4 md:mt-0">© { new Date().getFullYear()} GitBrain.
          </p>
        </div>
      </header>

    </div>
  )
}

export default Footer