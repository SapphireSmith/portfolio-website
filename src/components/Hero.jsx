import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
    return (
        <div name='home' className='bg-[#0a192f] flex justify-center'>
            <div className='max-w-[1300px] h-screen w-full'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-pink-600'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                        SAPPHIRE SMITH
                    </h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                        I'm a Full Stack Developer.
                    </h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I'm a MERN stack developer specializing in building exceptional digital experiences.
                        Currently, I'm focused on building responsive full-stack web applications with a strong
                        emphasis on frontend development using React and Next.js.
                    </p>
                    <div>
                        <a href="#work">
                            <button className='text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-pink-600
                    hover:border-pink-600'>
                                View Work
                                <span className='group-hover:rotate-90 duration-300 '>
                                    <HiArrowNarrowRight className={`ml-3`} />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero