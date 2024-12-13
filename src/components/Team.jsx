import React from 'react'
import face from "/assets/images/face.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Team = () => {
  return (
    <div className='container mx-auto px-6 md:px-12 py-8 md:py-16'>
        <div className='text-black space-y-10 mb-16'>
            <h1 className='text-4xl md:text-5xl font-semibold'>Meet Our Team</h1>
            <p className='text-gray-600 text-lg leading-relaxed text-1xl lg:w-1/2 w-full'>Empowers users to create, customize, collaborate, and track seamlessly, streamlining project tasks for optimal efficiency.</p>
        </div>

        

        <div className='grid lg:h-[30rem] h-auto w-11/12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mx-auto'>
            {/* Team Section 1 */}

            <div className='bg-[rgba(4,148,79,0.05)] lg:w-full md:w-[1/2] w-[9/10] h-[500px] justify-center items-center flex flex-col rounded-t-full rounded-b-full'>
                <img src={face} alt='Oyebamiji Israel'
                className='rounded-full w-52 h-52 mb-8'
                />

                <div className='grid text-black space-y-2'>
                    <h1 className='font-semibold lg:text-3xl text-2xl'>Oyebamiji Israel </h1>
                    <p className='text-center text-gray-600'>CEO</p>
                    
                    {/* Icons */}
                    <div className='flex flex-row space-x-3 justify-center text-gray-800'>
                        <div className='border border-black rounded-full p-2'>
                            <FaFacebookF />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaInstagram  />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <RiTwitterXFill />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaLinkedinIn />
                        </div> 
                        
                        
                        
                    </div>

                </div>
                
            </div>
            {/* End */}

             {/* Team Section 2 */}

             <div className='bg-[rgba(4,148,79,0.05)] lg:w-full md:w-[1/2] w-[9/10] h-[500px] justify-center items-center flex flex-col rounded-t-full rounded-b-full'>
                <img src={face} alt='Ihuarulam Gideon'
                className='rounded-full w-52 h-52 mb-8'
                />

                <div className='grid text-black space-y-2'>
                    <h1 className='font-semibold lg:text-3xl text-2xl'>Ihuarulam Gideon</h1>
                    <p className='text-center text-gray-600'>CFO</p>
                    
                    {/* Icons */}
                    <div className='flex flex-row space-x-3 justify-center text-gray-800'>
                        <div className='border border-black rounded-full p-2'>
                            <FaFacebookF />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaInstagram  />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <RiTwitterXFill />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaLinkedinIn />
                        </div> 
                        
                        
                        
                    </div>

                </div>
                
            </div>
            {/* End */}

            {/* Team Section 3 */}

            <div className='bg-[rgba(4,148,79,0.05)] lg:w-full md:w-[1/2] w-[9/10] h-[500px] justify-center items-center flex flex-col rounded-t-full rounded-b-full'>
                <img src={face} alt='Nwakaihe Onyekachi'
                className='rounded-full w-52 h-52 mb-8'
                />

                <div className='grid text-black space-y-2'>
                    <h1 className='font-semibold lg:text-3xl text-2xl'>Nwakaihe Onyekachi </h1>
                    <p className='text-center text-gray-600'>CTO</p>
                    
                    {/* Icons */}
                    <div className='flex flex-row space-x-3 justify-center text-gray-800'>
                        <div className='border border-black rounded-full p-2'>
                            <FaFacebookF />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaInstagram  />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <RiTwitterXFill />
                        </div>

                        <div className='border border-black rounded-full p-2'>
                            <FaLinkedinIn />
                        </div> 
                        
                        
                        
                    </div>

                </div>
                
            </div>
            {/* End */}

        </div>

    </div>
  )
}

export default Team
