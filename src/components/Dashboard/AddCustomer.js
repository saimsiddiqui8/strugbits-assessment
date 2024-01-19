import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import FormSection from './FormSection';
import { useFormik } from 'formik';
import "./main.css"
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getAllData } from '../../features/Showslice';
import FileUpload from './FileUpload';
const AddCustomer = ({ closeModal }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);

    const handleCancel = () => {
        closeModal();
    }

    // Form functions for validation
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('Customer name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const handleOk = () => {
        if (!formik.values.first_name || !formik.values.email) {
            toast.error('Please fill in all the fields.');
        } else if (formik.isValid) {
            setLoading(true);
            const nextId = data.users.data.length + 1;
            dispatch(createUser({
                id: nextId,
                first_name: formik.values.first_name,
                email: formik.values.email,
                avatar: formik.values.avatar,
            }));
            setTimeout(() => {
                setLoading(false);
                closeModal();
                toast.success('Customer added successfully');
            }, 500);
        } else {
            toast.error('Form has errors. Please fix them before submitting.');
        }
    };

    const formik = useFormik({
        initialValues: {
            first_name: '',
            email: '',
            avatar: [],
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

    const handleChange = ({ fileList }) => {
        // Update avatar in formik values whenever it changes
        formik.setFieldValue('avatar', fileList)
    };
    

    const handlePreview = async (file) => {
        // Handle file preview if needed
        console.log(file);
    };

    return (
        <>
            <Modal
                open={true}
                title={
                    <h2 className='text-center fw-bold mt-3'>Add New Customer</h2>
                }
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    <Button key="submit" className='w-100 newCustomer text-white fw-bold mt-3' loading={loading} onClick={handleOk}>
                        Add Customer
                    </Button>
                }
            >
                <FileUpload
                    fileList={formik.values.avatar} // Use the same name as in the initialValues
                    onChange={handleChange}
                    onPreview={handlePreview}
                />
                <div className='mt-5'>
                    <FormSection
                        placeholder="Customer Name"
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formik.values.first_name}
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