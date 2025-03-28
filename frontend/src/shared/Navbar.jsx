import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex fixed top-0 left-0 w-full h-[70px] font-bold text-xl justify-evenly items-center bg-transparent text-white z-50'>
            <div className='cursor-pointer'>
                <Link to={'/'}>
                    <h1>Recipe<span>Generator</span></h1>
                </Link>
            </div>
            <div>
                <ul className='w-[500px] flex justify-evenly'>
                    <li className='cursor-pointer hover:underline'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='cursor-pointer hover:underline'>
                        <Link to={'/suggest'}>Suggest</Link>
                    </li>
                    <li className='cursor-pointer hover:underline'>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className='cursor-pointer hover:underline'>
                        <Link to={'/help'}>Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar