import React from 'react'

function LIsection(props) {
  return (
    <div className='  mt-8'>
   
      <div className='mx-auto max-w-6xl flex '>
         
        
        <div className='m-6 flex-row  gap-2.5  sm:justify-center w-1/2 p-4'>
            
                  <img src={props.img} alt=''  width={props.width} height={props.height} sizes='cover'/> 
              
              </div>
              <div className='m-6 flex-row gap-2.5  sm:justify-center w-1/2 '>
            
          <p class="text-3xl font-normal sm:text-5xl md:mb-1 md:text-2xl pt-16   text-white  "> <span
            className={`${props.gradcolor} mr-44  text-transparent bg-clip-text text-3xl 
                `}> {props.gradhead} <span className='text-white text-3xl' > { props.whitetext}</span>  </span> 
                      <span className='mt-6 font-normal'>{ props.head}</span></p>
        
                <p className='mb-3 mt-4 text-base font-light sm:text-5xl md:mb-0 md:text-base  mr-10 text-gray-300/90
                '>
                    {props.summary}
           </p>
        </div>
    </div>

    </div>
  )
}

export default LIsection