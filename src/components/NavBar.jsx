import React from 'react'
import logo from '../assets/images/logo.svg'
import { navLinks } from '../constants'

export default function NavBar() {
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
                <p className='font-bold'>Lee Hour's portfolio</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id} className='cursor-pointer hover:underline'>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
