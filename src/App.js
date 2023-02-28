import React, {useState} from "react"
import Modal from "./components/Modal"
import "./App.css"

const App = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h1>Hello, click the button to open the modal, it's exciting!</h1>

      <button 
        className="openModalBtn" 
        type="button"
        onClick={() => setOpenModal(true)}
      >
          open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )

}

export default App