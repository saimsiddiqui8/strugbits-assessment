import React, { useEffect } from 'react';
import "./table.css";
import DataTable from '../../components/DataTable';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../../features/Showslice';

function Table() {

    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.app
    })
    console.log(data);

    useEffect(() => {
        dispatch(getAllData())
    }, [dispatch])

    return (
        <section className='container' id='table'>
            <div className="container">
                <DataTable data={data} />
            </div>
        </section>
    )
}

export default Table;
