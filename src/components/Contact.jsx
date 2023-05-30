import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Contact = () => {
    return (

        <div name='contact' className='bg-[#0a192f] flex justify-center'>
            <div className='max-w-[1300px] w-full h-screen flex justify-center items-center p-4'>
                <form action="https://getform.io/f/755867a9-bbf7-47ff-8d70-4c0116a776a9" method='POST' className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                            Contact
                        </p>
                        <p className='text-gray-300 py-4'>
                            // Submit the form below or shoot me an email - contact.sapphiresmith@gmail.com
                        </p>
                    </div>

                    <input className='bg-[#ccd6f6] py-2 px-3 focus:outline-none rounded-lg'
                        type="text" placeholder='Name' name='name' required />
                    <input className='my-4 py-2 px-3 bg-[#ccd6f6] focus:outline-none rounded-lg'
                        type="email" placeholder='Email' name='email' required />
                    <textarea className='bg-[#ccd6f6] p-2 focus:outline-none py-2 px-3 rounded-lg'
                        name="message" rows="10" placeholder='Message' required></textarea>
                    <button class="text-white border-2 group focus:outline-none duration-300 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                        <span className='group-hover:translate-x-2 duration-300'>Let's Collaborate</span>
                        <span class="group-hover:translate-x-2 duration-300">
                            <HiArrowNarrowRight class=" ml-3 transform-gpu transition-transform" />
                        </span>
                    </button>
                </form>
            </div>
        </div >

    )
}

export default Contact