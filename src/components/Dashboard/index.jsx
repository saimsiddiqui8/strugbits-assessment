import React, { useState } from 'react';
import "./main.css";
import { FaPlus } from "react-icons/fa";
import AddCustomer from './AddCustomer';
import Table from '../Table';
import { ToastContainer } from 'react-toastify';

function Main() {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };

    return (
        <main className='main-container ms-2 dashboard overflow-hidden'>
            <button onClick={showModal} style={{ padding: "10px 20px" }} className='my-4 text-white newCustomer'> <FaPlus className='me-3' />ADD NEW CUSTOMER</button>
            <div className='main-title overflow-hidden'>
                <Table />
            </div>
            <ToastContainer />
            {open && <AddCustomer closeModal={closeModal} />}
        </main>
    );
}

export default Main;
