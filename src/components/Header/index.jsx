import React from 'react';
import "./header.css"
import { BsJustify, BsSearch } from 'react-icons/bs'

function Header({ OpenSidebar }) {
    return (
        <header className='header overflow-hidden'>
            <div className='menu-icon '>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <h2 id='customersHeading'>CUSTOMERS</h2>
            </div>
        </header>
    )
}

export default Header