import React from 'react'
import logo from "/assets/images/freshcrate_logo.png";
import { company, support } from '../constants/navLinks';

const Footer = () => {
  return (
    <div className='grid bg-[rgba(4,148,79,0.05)] mt-24 lg:h-[34rem] h-[40rem]'>
      <div className="container mx-auto px-6 md:px-12 items-center justify-center h-28 my-20 space-y-5">
        <img src={logo} alt="FreshCrate Logo"
        className="w-20 h-12 md:w-48 md:h-28"
        width={193}
        height={105}
        />
        <p className='text-gray-600 text-lg leading-relaxed text-1xl w-[22rem'>Discover a World of Possibilities with TripNavigator Tours</p>
        <hr></hr>

        <div className='text-black grid lg:grid-cols-4 grid-cols-2'>
            <div className='mt-10 space-y-3'>
                <h1 className='text-gray-800 font-semibold'>Company</h1>
                {company.map((link, index) => (
                    <ul>
                    <li key={index}><a href={link.href}
                    className='text-gray-600'>{link.name}</a></li>
                    </ul>
                ))}
            </div>

            <div className='mt-10 space-y-3'>
                <h1 className='text-gray-800 font-semibold'>Support</h1>
                {support.map((link, index) => (
                    <ul>
                    <li key={index}><a href={link.href}className='text-gray-600'>{link.name}</a></li>
                    </ul>
                ))}
            </div>

            <div className='mt-10 space-y-3 col-span-2'>
                <h1 className='text-gray-800 font-semibold flex'>Subscribe our Newsletter</h1>
                <input type='email' placeholder='Email' className='outline-none bg-white h-10 lg:w-96 w-[20rem] p-6' />
                <button className='bg-green-700 h-12 px-6 rounded-lg text-white lg:mx-2 md:mx-2 mx-0 cursor-pointer'>Book a Demo</button>
            </div>

        </div>
        

      </div>
    </div>
  )
}

export default Footer
