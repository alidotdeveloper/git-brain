import React from 'react'

function Header() {

    return (
        <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 pl-3 pr-3  md:flex-row   items-center ">
       
          <a class="flex title-font font-medium items-center bg-transparent  text-gray-900 mb-4 md:mb-0  text-sm md:text-base">
          <img src="../../images/gitbrain.png" alt= "image-logo" width={28} height={28}  />   
            <span class="ml-2  text-white ">GitBrain</span>
            </a>
        
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <a class="mr-5 hover:text-white-900">First Link</a>
            <a class="mr-5 hover:text-white-900">Second Link</a>
            <a class="mr-5 hover:text-white-900">Third Link</a>
            <a class="mr-5 hover:text-white-900">Fourth Link</a> */}
          </nav>
          <button class="rounded bg-green-950 text-gray-400 font-medium inline-flex items-center   border-0 py-1 px-3 focus:outline-none hover:bg-{#173D43} text-white mt-2 md:mt-0 download-btn ">Download
          </button>
        </div>
      </header>
  )
}

export default Header