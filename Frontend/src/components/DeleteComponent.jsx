
import React from 'react';
import axiosInstance from '../axiosInstance';

const DeleteComponent = ({ recordId, show, onClose }) => {
  const handleDelete = () => {
    axiosInstance
      .delete(`crawldata/${recordId}/`)
      .then(response => {
        console.log('Record deleted successfully');
        onClose(); // Close the modal after successful delete
      })
      .catch(error => {
        console.error('Error deleting record:', error);
      });
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Confirm Delete</h5>
            <button type='button' className='btn-close' onClick={onClose} aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <p>Are you sure you want to delete this record?</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' onClick={onClose}>
              Cancel
            </button>
            <button type='button' className='btn btn-danger' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;
