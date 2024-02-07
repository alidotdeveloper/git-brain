import React from 'react'

function Main() {
  return (
      <>
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
       <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <section class="flex flex-col items-center pt-7">
    <div className=' relative mb-6 overflow-hidden rounded-lg bg-gray-100  md:mb-8'>
   <img src="../../images/gitbrain_large.png?auto=format" width={120} height={150} loading="lazy" alt="Photo by Minh Pham" class=" object-cover object-center" ></img>
</div>
      <div class="flex max-w-xl flex-col from-[#59D499] to-[#1EAE98] items-center pb-0 pt-0.8 text-center sm:pb-10 lg:pb-22 lg:pt-25">
        <span class="uppercase tracking-[0.12em] font-normal text-md bg-gradient-to-r from-[#59D499] to-[#1EAE98] text-transparent bg-clip-text ">GITBRAIN</span>

        <h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-4xl pt-2">AI-powered Git Client for Mac</h1>

        <p class="mb-8 leading-relaxed text-gray-300 md:mb-18 xl:text-lg">Minimal git experience with AI commit messages, code splitting, and more</p>

        <div class="flex  flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" class="bg-white/90 rounded-md px-20 py-2 text-md font-medium text-[#48AE81] hover:bg-white focus:outline-none focus-visible:ring-white/60 transition-all ring-2 ring-white/30 w-full ">Download GitBrain</a>
           </div>
         <div className='flex flex-row items-center text-gray-500 font-light text-xs gap-3'>
             <span className='text-gray-500 mt-2 mb-2 text-small '>v1.0.1 &nbsp; |</span> 
             <span className='text-gray-500 mt-2 mb-2 text-small '>macOS 12.0+  &nbsp;|</span>   
             <span className='text-gray-500 mt-2 mb-2 text-small '>Free for Beta Users</span>   
                          </div>
                          
            <a href= "/" class="flex m-9 flex-col gap-2.5 sm:flex-row sm:justify-center">
            <img  src="../../images/featured.svg"  width={270} height={250} loading="lazy" alt="Photo by Minh Pham" class=" object-cover object-center" ></img>
           </a>
      </div>
    </section>
  </div>
</div>                
      </>
  )
}

export default Main