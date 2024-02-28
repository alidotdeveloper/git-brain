import React from 'react'

function Whitegradhead() {
  return (
    <div className='flex m-2 flex-col gap-2.5 sm:flex-row sm:justify-center'>
    <h3 class="mb-2 md:text-4xl font-semibold sm:text-5xl md:mb-0 text-2xl pt-2 text-white text-center ">GitBrain makes <span className={` bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text`}>developers more productive.</span> </h3>
      </div>
  )
}

export default Whitegradhead