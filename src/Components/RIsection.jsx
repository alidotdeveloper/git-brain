import React from 'react'

function LIsection(props) {
  return (
    <div className='  mt-8'>
   
        <div className='mx-auto max-w-6xl flex '>
           
          <div className='m-6 flex-row gap-2.5  sm:justify-center w-1/2 '>
              
          <p class="text-3xl font-normal sm:text-5xl md:mb-1 md:text-2xl pt-8 mr-24  text-white  "> <span className={` ${props.gradcolor}  text-transparent bg-clip-text text-3xl mr-16`} >
            {props.gradhead} <span className='text-white text-3xl' > { props.whitetext}</span> </span> 
            <span className='mt-6'>{ props.whitesmall}</span></p>
            <p class="mb-2 text-3xl font-semibold sm:text-5xl md:mb-0 md:text-2xl  mr-16 text-white "> <span className='bg-gradient-to-r from-teal-200 to-[#5b7ba8] text-transparent bg-clip-text text-1xl '>{props.gradsmall} </span> </p>
                  <p className='mb-3 mt-4 text-base font-light sm:text-5xl md:mb-0 md:text-base  mr-10 text-gray-300/90
                  '>
                     {props.summary }
                      
             </p>
          </div>
          <div className=' flex-row  gap-2.5  sm:justify-center w-1/2 p-4'>
              
              <img src={props.src} alt=''  width={750} height={650} sizes='cover'/> 
                
           </div>
      </div>

      </div>
  )
}

export default LIsection