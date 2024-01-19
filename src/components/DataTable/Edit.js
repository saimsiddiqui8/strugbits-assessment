import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormSection from '../Dashboard/FormSection';
import { editUser } from '../../features/Showslice';
import "../Dashboard/main.css"
import { useDispatch } from 'react-redux';

const Edit = ({ visible, onCancel, customer }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onCancel();
  };

  // form functions for validation
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Customer name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const handleUpdate = async () => {
    if (formik.isValid) {
      setLoading(true);

      try {
        if (
          formik.values.first_name === customer.first_name &&
          formik.values.email === customer.email
        ) {
          toast.error('No changes made. Please modify the values before updating.');
          setLoading(false);
          return;
        }
        // Dispatching the editUser action with the updated user data
        dispatch(
          editUser({
            id: customer.id,
            email: formik.values.email,
            first_name: formik.values.first_name,
          })
        );

        toast.success('Customer updated successfully!');
        setLoading(false);
        onCancel();
      } catch (error) {
        console.error('Error updating customer:', error);
        toast.error('Failed to update customer. Please try again later.');
        setLoading(false);
      }
    } else {
      toast.error('Form has errors. Please fix them before submitting.');
    }
  };




  const formik = useFormik({
    initialValues: {
      first_name: customer.first_name,
      email: customer.email,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // You can handle form submission logic here if needed
    },
  });

  return (
    <Modal
      open={visible}
      title={<h2 className='text-center fw-bold mt-3'>Edit Customer</h2>}
      onOk={handleUpdate}
      onCancel={handleCancel}
      footer={[
        <Button key="update" className='w-100 newCustomer text-white fw-bold mt-3' loading={loading} onClick={handleUpdate}>
          Update Customer
        </Button>,
      ]}
    >
      <div className='mt-5'>
        <FormSection
          placeholder="Customer Name"
          type="text"
          id="first_name"
          name="first_name"
          value={formik.values.first_name || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.first_name && formik.errors.first_name}
        />
        <FormSection
          placeholder="Email"
          type="text"
          id="email"
          name="email"
          value={formik.values.email || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.email && formik.errors.email}
        />
      </div>
    </Modal>
  );
};

export default Edit;
