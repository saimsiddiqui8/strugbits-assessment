import React from 'react';
import { Modal, Button } from 'antd';

const Delete = ({ visible, onCancel, onDelete, customer }) => {
    return (
        <Modal
            open={visible}
            title=" "
            onCancel={onCancel}
            footer={
                <div className='d-flex flex-row'>
                    <Button className='w-50 bg-secondary text-white' key="cancel" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button className='w-50 bg-danger text-white' type="danger" onClick={() =>  onDelete()}>
                        Delete
                    </Button>
                </div>
            }
        >
            <div className='text-center mt-5 '>
                <img src='/images/delete.png' alt='img' />
                <h3 className='my-4'>Are you sure?</h3>
                <p className='mb-2'>Do you really want to delete this customer? This process cannot be undone.</p>
            </div>
        </Modal>
    );
};

export default Delete;
