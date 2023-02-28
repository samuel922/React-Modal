import React from "react"
import "./Modal.css"

const Modal = ({closeModal}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h2>Do you want to continue</h2>
        </div>
        <div className="body">
          <p>The next page is awesome! you should move forward, you will enjoy</p>
        </div>
        <div className="footer">
          <button id="contBtn">Continue</button>
          <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal