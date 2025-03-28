import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex bg-green-400 max-w-full h-[50px] justify-evenly items-center text-xl'>
            <div>
                <Link to={'/'}>
                <h1>Recipe<span>Generator</span></h1>
                
                </Link>                
                </div>
            <div >
                <ul className='w-[400px] flex justify-evenly '>
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