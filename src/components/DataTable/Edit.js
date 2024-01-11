import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormSection from '../Dashboard/FormSection';
import "../Dashboard/main.css"

const Edit = ({ visible, onCancel, onUpdate, customer }) => {
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onCancel();
  };

  // form functions for validation
  const validationSchema = Yup.object().shape({
    customername: Yup.string().required('Customer name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const handleUpdate = () => {
    if (formik.isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onUpdate(formik.values);
        onCancel();
        toast.success('Customer updated successfully');
      }, 3000);
    } else {
      toast.error('Form has errors. Please fix them before submitting.');
    }
  };

  const formik = useFormik({
    initialValues: {
      customername: customer.customername,
      email: customer.email,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // You can handle form submission logic here if needed
    },
  });

  return (
    <Modal
      visible={visible}
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
          id="customername"
          name="customername"
          value={formik.values.customername}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.customername && formik.errors.customername}
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
    </Modal>
  );
};

export default Edit;
