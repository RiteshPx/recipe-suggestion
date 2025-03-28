import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-black  text-white py-8'>

            <div className="container mx-auto px-6 lg:px-8 flex justify-evenly space-x-4">
                {/* About us */}
                <div>
                    <h2 className='text-lg font-semibold mb-4 '>About</h2>
                    <p className='text-white text-sm'>Discover endless recipes tailored to your taste. Whether you're a home cook or a foodie.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className='text-lg font-semibold mb-4 '>Quick Links</h2>
                    <ul className='space-y-2 text-white'>
                        <li>
                            <Link to={'/'} className='hover:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className='hover:text-white'>About</Link>
                        </li>
                        <li>
                            <Link to={'/suggest'} className='hover:text-white'>Suggest</Link>
                        </li>
                        <li>
                            <Link to={'/help'} className='hover:text-white'>Help</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact us */}
                <div>
                    <h2 className='text-lg font-semibold mb-4 '>Contact Us</h2>
                    <p className='text-white text-sm'>123 Street Name,City,Country</p>
                    <p className='text-white text-sm'>Email info@example.com</p>
                    <p className='text-white text-sm'>Phone: +91 234 567 890</p>
                </div>

            </div>

            {/* Social Media and Copyright */}
            <div className='mt-8  pt-6 '></div>
            <p className='text-center text-white text-sm'>Follow us on:</p>
            <div className='flex justify-center space-x-4 mt-3'>
                <a href='#' className='text-white text-sm hover:text-white'>Facebook</a>
                <a href='#' className='text-white text-sm hover:text-white'>Twitter</a>
                <a href='#' className='text-white text-sm hover:text-white'>LinkedIn</a>
                <a href='#' className='text-white text-sm hover:text-white'>Instagram</a>
            </div>

            <p className='mt-4 text-center text-white'>&copy; {new Date().getFullYear()} RecipeGenerator. All rights reserved.</p>

        </div>
    )
}

export default Footer