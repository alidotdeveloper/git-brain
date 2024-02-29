import React from 'react'

function LIsection(props) {
  return (
    <div className={` md:pt-8 ${props.grad}  w-full `}>
   
      <div className='mx-auto w-full md:max-w-7xl   flex flex-col-reverse md:flex-row '>
         
        
        <div className=' md:pl-36 md:pr-20 px-16  flex-row  gap-2.5   sm:justify-center w-66  p-4 '>
            
           <img src={props.img} alt=''  width={props.width} height={props.height}  className='drop-shadow-xl '/> 
              
        </div>
        <div className='m-4 flex-row gap-2.5  sm:justify-center  md:w-1/3 w-full '>
            
          <p class="text-2xl font-normal sm:text-5xl md:mb-1 md:text-2xl pt-14   text-white  "> <span
            className={`${props.gradcolor} mr-64  text-transparent bg-clip-text text-2xl md:text-3xl
                `}> {props.gradhead} <span className='text-white   md:text-3xl' > { props.whitetext}</span>  </span> 
                      <span className='mt-6 font-normal text-xl'>{ props.head}</span></p>
        
                <p className='mb-3 mt-4 text-base font-light sm:text-5xl md:mb-0 md:text-base mr-16  text-gray-300/90
                '>
                    {props.summary}
           </p>
        </div>

      </div>
    

    </div>
  )
}

export default LIsection