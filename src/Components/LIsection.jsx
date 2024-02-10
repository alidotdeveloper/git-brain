import React from 'react'

function LIsection() {
  return (
    <div className='  mt-8'>
      <div className='flex m-2 flex-col gap-2.5 sm:flex-row sm:justify-center'>
              <h3 class="mb-2 text-4xl font-semibold sm:text-5xl md:mb-0 md:text-4xl pt-2 text-white ">GitBrain makes <span className='bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text'>developers more productive.</span> </h3>
          </div>
        <div className='mx-auto max-w-6xl flex '>
           
          <div className='m-6 flex-row gap-2.5  sm:justify-center w-1/2 p-4'>
              
                  <p class="text-3xl font-semibold sm:text-5xl md:mb-1 md:text-2xl pt-2 mr-16  text-white "> <span className=' bg-gradient-to-r from-teal-200 to-[#5b7ba8] text-transparent bg-clip-text text-3xl 
                  '>Split code changes <span className='text-white text-3xl' >into</span> </span> 
                      <span className='mt-6'>multiple AI-generated commits</span></p>
            <p class="mb-2 text-3xl font-semibold sm:text-5xl md:mb-0 md:text-2xl  mr-16 text-white "> <span className='bg-gradient-to-r from-teal-200 to-[#5b7ba8] text-transparent bg-clip-text text-1xl '>- customizable & editable </span> </p>
                  <p className='mb-3 mt-4 text-base font-light sm:text-5xl md:mb-0 md:text-base  mr-10 text-gray-300/90
                  '>
                      As developers, we often forget to commit our changes, and end up with a huge commit that is hard to review.
                      GitBrain intelligently splits your code changes into multiple AI-generated commits and even allows you
                      to interactively edit them. You can select, reorder, and even merge multiple commits into one with the help of our AI.
             </p>
          </div>
          <div className='m-6 flex-row  gap-2.5  sm:justify-center w-1/2 p-4'>
              
              <img src='../../images/gitbrain.gif' alt=''  width={750} height={650} sizes='cover'/> 
                
           </div>
      </div>

      </div>
  )
}

export default LIsection