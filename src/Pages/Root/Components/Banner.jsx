import React, { useEffectEvent, useState, useEffect } from 'react'
import heroImg from '../../../assets/hero.png'
import App from '../../../Components/App'



const Banner = () => {

    const [apps, setApps] = useState([])

    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => {
                console.log("App List", data)
                setApps(data);
            })
            .catch((error) => console.error("Error loading apps", error));

    },
        []
    )
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

            {/* Apps Section */}
            <p className="text-black text-4xl font-bold text-center mt-5">Trending Apps</p>
            <p className="text-black font-light text-center mt-5">Explore all the apps in market developed by us</p>

            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-4 gap-13">
                    {apps.slice(0, 8).map((app) => (
                        <App key={app.id} app={app} />
                    ))}
                </div>
            </div>

            <button className="btn btn-primary mx-auto block mt-5">Show All</button>



        </>
    )
}

export default Banner