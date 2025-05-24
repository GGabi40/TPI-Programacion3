import React from "react";
import "./modalDelete.css";

const ModalConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onCancel}>×</button>
        <div className="modal-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="trash" />
        </div>
        <h2 style={{color: "black"}}>¿Estas seguro?</h2>
        <p className="dark">¿Realmente quieres eliminar este club?</p>
        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onCancel}>Cancelar</button>
          <button className="btn-delete" onClick={onConfirm}>Sí, eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;