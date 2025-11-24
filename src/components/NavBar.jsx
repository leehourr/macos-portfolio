import React from 'react'
import logo from '/images/logo.svg'
import { navIcons, navLinks } from '../constants'
import dayjs from 'dayjs'
import useWindowStore from '../store/window'

export default function NavBar() {
    const { openWindow } = useWindowStore();
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
                <p className='font-bold text-nowrap'>Lee Hour's portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} className='cursor-pointer hover:underline'
                            onClick={() => { openWindow(type) }}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id} className='icon-hover cursor-pointer'>
                            <img src={img} alt="" />
                        </li>
                    ))
                    }
                </ul>

                <time className='text-nowrap' datetime="">{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}
