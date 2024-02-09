import React from 'react'

function HeadingImage() {
  return (
    <>
      <div className='flex m-2 flex-col gap-2.5 sm:flex-row sm:justify-center'>
      <h3 class="mb-2 text-4xl font-semibold sm:text-5xl md:mb-0 md:text-4xl pt-2 bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">Git made simple</h3>
    </div>
            <div className='flex m-3 flex-col gap-2.5 sm:flex-row sm:justify-center'>
        <h3 class="mb-2 text-3xl font-semibold sm:text-5xl md:mb-6 md:text-2xl  text-white text-transparent bg-clip-text"> Focus on code. GitBrain handles Git for you.</h3>
        
      </div>
      <div className='flex m-6 flex-col gap-2.5 sm:flex-row sm:justify-center'>
      <img src='../../images/gitbrain.gif' alt=''  width={750} height={650} sizes='cover'/> 
        
      </div>

      </>
 
  )
}
   
export default HeadingImage