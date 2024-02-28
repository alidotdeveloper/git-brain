import React from 'react'

function LIsection(props) {
  return (
    <div className={`pt-2 md:pt-12 ${props.grad}  grad-commit w-full bg-transparent  `} >
   
      <div className='mx-auto md:max-w-6xl  md:flex  '>
           
        <div className=' flex-row gap-2.5  sm:justify-center md:w-1/2 mt-5 mx-8   '>
              
          <p class="text-3xl font-normal sm:text-5xl md:mb-1 md:text-2xl md:pt-14  md:mr-36  text-white   "> <span className={` ${props.gradcolor}  text-transparent bg-clip-text md:text-3xl text-2xl mr-32 `} >
            {props.gradhead} <span className='text-white md:text-3xl text-md' > { props.whitetext}</span> </span> 
            <span className='mt-6 text-2xl mb-4'>{ props.whitesmall}</span></p>
            <p class="mb-2 text-md font-semibold sm:text-5xl md:mb-0 md:text-2xl w-full   text-white "> <span className='bg-gradient-to-r from-teal-200 to-[#5b7ba8] text-transparent bg-clip-text text-1xl '>{props.gradsmall} </span> </p>
                  <p className='mb-3 mt-4 text-base font-light sm:text-5xl md:mb-0 md:text-base  mr-10 text-gray-300/90'>
                     {props.summary }
                      
             </p>
        </div>
          <div className=' flex-row  gap-2.5  sm:justify-center md:w-1/2 p-4  '>
              
              <img className="rounded-xl z-1 drop-shadow-2xl " src={props.src} alt=''  width={750} height={650} sizes='cover'/> 
                
           </div>
      </div>

      </div>
  )
}

export default LIsection