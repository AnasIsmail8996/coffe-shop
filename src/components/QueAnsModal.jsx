import React, { useState } from 'react';


function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>What is Java Times Caffé?</h2>
            <p>The Java 300 project issues a total of 120,000,000 shares with an initial value of 20 MXN each. These shares will increase in value over time, providing opportunities for investor growth. As an investor, you can benefit from the increasing valuation of the shares and receive dividends for life.
         What is the minimu</p>
          </div>  
        </div>
      )}



<button onClick={openModal}>Open Modal</button>

{isModalOpen && (
  <div className="modal-two">
    <div className="modal-content-two">
      <span className="close-two" onClick={closeModal}>&times;</span>
      <h2>How do the shares work?</h2>
      <p>
The Java 300 project issues a total of 120,000,000 shares with an initial value of 20 MXN each. These shares will increase in value over time, providing opportunities for investor growth. As an investor, you can benefit from the increasing valuation of the shares and receive dividends for life.

</p>
    </div>  
  </div>
)}


    </div>
  );
}

export default ModalExample;

