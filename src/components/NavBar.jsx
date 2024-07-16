import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='bg-[#0a192f] h-[100px] w-full  flex justify-center items-center  '>
            <div className='fixed w-full max-w-[1300px] flex justify-between items-center px-4 text-gray-300'>
                <div className='flex gap-1'>
                    <h1 className='text-4xl capitalize font-extrabold text-[#ccd6f6]'>SAPPHIRE</h1>
                    <div className='h-[20px] w-[20px] mt-[15px] bg-pink-600 rounded-full'/>
                </div>

                {/* menu */}
                <ul className='hidden md:flex font-bold'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                {/* Mobile menu */}
                <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
                    <li className='py-6 text-4xl'>
                        <Link to='home' onClick={handleClick} smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='about' onClick={handleClick} smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='skills' onClick={handleClick} smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='work' onClick={handleClick} smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='contact' onClick={handleClick} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Social icons */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                target='_blank' href="https://www.linkedin.com/in/sapphiresmith/">LinkedIn <FaLinkedin size={30} /> </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-gray-800'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                target='_blank' href="https://github.com/SapphireSmith">GitHub <FaGithub size={30} /> </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                target='_blank' href="">Twitter <FaTwitter size={30} /> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar