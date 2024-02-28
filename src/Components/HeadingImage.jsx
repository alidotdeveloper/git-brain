import React from 'react'

function HeadingImage() {
  return (
    <div className='mb-20'>
      <div className='flex m-2 flex-col gap-2.5 sm:flex-row sm:justify-center '>
      <h3 class=" mb-2 text-4xl text-center font-semibold sm:text-5xl md:mb-0 md:text-4xl pt-2 bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">Git made simple</h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-cyan-400   rounded-full grad-color '></div>
      <div className='bg-gradient-to-r from-cyan-100 to-cyan-400   rounded-full grad-color-left '></div>
            <div className='flex m-3 flex-col gap-2.5 sm:flex-row sm:justify-center'>
        <h3 class="mb-2 text-3xl font-semibold sm:text-5xl md:mb-6 md:text-2xl  text-white text-transparent bg-clip-text text-center"> Focus on code. GitBrain handles Git for you.</h3>
        
      </div>
      <div className='mb-10 flex m-6 flex-col gap-2.5 sm:flex-row sm:justify-center z-0'>
        <img src='../../images/gitbrain.gif' alt='' width={750} height={650} sizes='cover' /> 
        
        
      </div>
      <div className=''></div>

      </div>
 
  )
}
   
export default HeadingImage