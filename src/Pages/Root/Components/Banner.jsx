import React from 'react'
import heroImg from '../../../assets/hero.png'

const Banner = () => {
    return (
        <>
            <p className='text-black text-5xl font-bold text-center mt-10'>
                We Build <br></br> Productive Apps
            </p>
            <p className='text-black text-center mt-5 text-lg font-thin'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className='flex justify-center gap-5 mt-8'>

                <button className="btn btn-xs text-lg bg-white text-black sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Google Play</button>
                <button className="btn btn-xs text-lg bg-white text-black sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">App Store</button>
            </div>

            <img className='h-90 mx-auto mt-10' src={heroImg} alt="Hero Image" />
            <div className="text-center bg-[#946af0] h-80 w-full p-12">
                <p className="font-bold text-4xl">Trusted By Millions, Built For You</p>
                <div className="flex justify-center gap-100 mt-10">
                    <div>
                        <p>Total Downloads</p>
                        <p className="text-4xl font-bold mt-4 mb-4">29.6M</p>
                        <p>21% more than last<br></br>the last month</p>
                    </div>
                    <div>
                        <p>Total Downloads</p>
                        <p className="text-4xl font-bold mt-4 mb-4">29.6M</p>
                        <p>21% more than last<br></br>the last month</p>
                    </div>
                    <div>
                        <p>Total Downloads</p>
                        <p className="text-4xl font-bold mt-4 mb-4">29.6M</p>
                        <p>21% more than last<br></br>the last month</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner