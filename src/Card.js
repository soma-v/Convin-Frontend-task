import React from 'react';
import { Modal } from 'antd';
import { useState } from "react";

import EditCardForm from './editCardForm';
import DeleteCardForm from './deleteCardForm';
import MoveCardForm from './moveCardForm';
const Card = ({ title, videoLink, onEdit, onDelete }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  return (

    <div className="card" >
      <div onClick={handleCardClick} className="card-content">
      <h3>{title}</h3>
      {/* <iframe width="50" height="50" src={videoLink} title={title} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
      <a href={videoLink} className="btn btn-primary" target="_blank">
            Watch Video
      </a>
      </div>
      <div className="button-container">
        {/* <button className="button-edit" onClick={onEdit}>Edit</button>
        <button className="button-delete" onClick={onDelete}>Delete</button> */}
        <EditCardForm />
        <DeleteCardForm />
      </div>
      <Modal
        title={title}
        open={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <iframe src={videoLink} width="100%" height="500px" />
      </Modal>
    </div>
  );
}

export default Card;
