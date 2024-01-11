import React, { useState, useMemo } from 'react';
import { Switch, Pagination } from 'antd';
import "./dataTable.css";
import { MdOutlineUnfoldMore } from "react-icons/md";
import DeleteModal from './Delete';
import Edit from './Edit';

const DataTable = ({ data }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const showDeleteModal = (customer) => {
    setSelectedCustomer(customer);
    setDeleteModalVisible(true);
  };

  const showEditModal = (customer) => {
    setSelectedCustomer(customer);
    setEditModalVisible(true);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log('Deleting customer:', selectedCustomer);
    setDeleteModalVisible(false);
  };

  const handleEditUpdate = (updatedValues) => {
    // Implement your update logic here
    console.log('Updating customer:', updatedValues);
    setEditModalVisible(false);
  };

  const handleCancel = () => {
    setDeleteModalVisible(false);
    setEditModalVisible(false);
  };
  return (
    <div className='responsive-container'>
      <div className='table-container  overflow-hidden'>
        <div className='thead d-flex justify-content-evenly'>
          <span>Customer ID <MdOutlineUnfoldMore /></span>
          <span>Customer Name <MdOutlineUnfoldMore /></span>
          <span>Email <MdOutlineUnfoldMore /></span>
        </div>
        {
          data?.users?.data &&
          data.users.data.map((elem, i) => {
            return (
              <div key={i} className='tables d-flex justify-content-evenly'>
                <span> <img src={elem.avatar} style={{ width: "60px", height: "60px" }} className='tdimg' /></span>
                <span> {elem.id}</span>
                <span style={{ color: '#57BC90', texspanecoration: 'underLine' }}>{elem.first_name}</span>
                <span>{elem.email}</span>
                <span>  <button className='btn1' onClick={() => showEditModal(elem)}>Edit</button></span>
                <span>  <button className='btn2' onClick={() => showDeleteModal(elem)}>Delete</button></span>
              </div>
            )
          })
        }
      </div>
      <DeleteModal
        visible={deleteModalVisible}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
      {selectedCustomer && (
        <Edit
          visible={editModalVisible}
          onCancel={handleCancel}
          onUpdate={handleEditUpdate}
          customer={selectedCustomer}
        />
      )}
    </div>
  );
};

export default DataTable;
