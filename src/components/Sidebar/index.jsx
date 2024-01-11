import React from 'react';
import "./sidebar.css";
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import { BsGrid1X2Fill } from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
   

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive " : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img src="/images/logoImg.png" alt="" />
                </div>
                <span className='icon close_icon mt-3' onClick={OpenSidebar}>X</span>
            </div>
            <div className="container">
                <ul className='sidebar-list'>
                        <li className="sidebar-list-item">
                            <a>
                                <BsGrid1X2Fill color='#ffffff' className='icon mt-1' /> CUSTOMERS
                            </a>
                        </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar