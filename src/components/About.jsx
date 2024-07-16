import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center'>
            <div className='max-w-[1300px] flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Sapphire smith, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Hi, I'm Sapphire, a passionate MERN stack developer dedicated to crafting exceptional
                            digital experiences. Currently, I'm focused on building responsive full-stack web
                            applications with a strong emphasis on frontend development using React and Next.js.
                            I love turning complex problems into simple, beautiful, and intuitive designs.
                            Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About