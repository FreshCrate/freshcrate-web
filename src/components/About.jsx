import frame1 from "/assets/images/frame1.png";
import frame2 from "/assets/images/frame2.png";
import frame3 from "/assets/images/frame3.png";

const About = () => {
  return (
    <div >
        {/* About Us */}
        <div className='grid p-4 w-full justify-center space-y-6'>
            <p className='border rounded-full border-green-600 w-24 text-center text-green-600 mx-auto'>About us</p>
            <h1 className='text-black text-4xl'>What we do</h1>
        </div>

        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-4/5 mx-auto w-'>

            {/* 1st Section */}
            <div className='grid text-black w-[8/10] p-12 mt-8 px-6 md:px-12'>
                <img src={frame1} alt='First Food' className='flex justify-center w-full text-center'/>
                <h1 className='text-center py-7 text-2xl text-gray-800'>Fresh and Nutritious</h1>
                <p className='text-center text-gray-600'>Providing easy access to meals that are fresh, nutritious, and suited for everyone.</p>
            </div>

            {/* 2nd Section */}
            <div className='grid text-black w-[8/10] p-12 mt-8 px-6 md:px-12'>
                <img src={frame2} alt='First Food' className='flex justify-center w-full text-center'/>
                <h1 className='text-center py-7 text-2xl text-gray-800'>Health & Sustainability</h1>
                <p className='text-center text-gray-600'>Dedicated to promoting health-focused diets and reducing food insecurity for lasting change.</p>
            </div>

            {/* 3rd Section */}
            <div className='grid text-black w-[8/10] p-12 mt-8 px-6 md:px-12'>
                <img src={frame3} alt='First Food' className='flex justify-center w-full text-center'/>
                <h1 className='text-center py-7 text-2xl text-gray-800'>Budget Friendly</h1>
                <p className='text-center text-gray-600'>Bringing cost-effective meal options tailored to fit diverse lifestyles and health needs.</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
