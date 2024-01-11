import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import FormSection from './FormSection';
import { useFormik } from 'formik';
import "./main.css"
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddCustomer = ({ closeModal }) => {
    const [loading, setLoading] = useState(false);


    const handleCancel = () => {
        closeModal();
    }

    //form functions for validation
    const validationSchema = Yup.object().shape({
        customername: Yup.string().required('Customer name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const handleOk = () => {
        if (!formik.values.customername || !formik.values.email) {
            toast.error('Please fill in all the fields.');
        } else if (formik.isValid) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                closeModal();
                toast.success('Customer added successfully');
            }, 3000);
        } else {
            toast.error('Form has errors. Please fix them before submitting.');
        }
    };


    const formik = useFormik({
        initialValues: {
            customername: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (formik.isValid) {
                // Handle form submission logic here
                console.log('Form submitted:', values);
                toast.success('Customer added successfully');
            } else {
                toast.error('Form has errors. Please fix them before submitting.');
            }
        },
    });

    return (
        <>
            <Modal
                visible={true}
                title={[
                    <h2 className='text-center fw-bold mt-3'>Add New Customer</h2>
                ]}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" className='w-100 newCustomer text-white fw-bold mt-3' loading={loading} onClick={handleOk}>
                        Add Customer
                    </Button>
                ]}
            >
                <div className='mt-5'>
                    <FormSection
                        placeholder="Customer Name"
                        type="text"
                        id="customername"
                        name="customername"
                        value={formik.values.customername}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.touched.username && formik.errors.username}
                    />
                    <FormSection
                        placeholder="Email"
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.touched.email && formik.errors.email}
                    />
                </div>
            </Modal >
        </>
    );
};

export default AddCustomer;