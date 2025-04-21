import React, { useContext, useState } from "react";
import "../componentsCss/BookNowCards.css";
import { AppContext } from "../App";

function BookNowCards() {
  const { book } = useContext(AppContext);
  // const [data, setData] = useState(book);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="booknow-cards-container">
      {/* Banner */}
      <div className="booknow-banner">
        <h1>Complaint-Specimen</h1>
      </div>

      {book.length > 0 &&
        book.map((item, index) => (
          <div className="booknow-card" key={index}>
            <h3>{item.name}</h3>
            <p>
              <strong>Phone:</strong> {item.phone}
            </p>
            <p>
              <strong>Email:</strong> {item.email || "N/A"}
            </p>
            <p>
              <strong>City:</strong> {item.city}
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>Service:</strong> {item.service}
            </p>
            <p>
              <strong>Preferred Date:</strong> {item.preferredDate}
            </p>
            <p>
              <strong>Preferred Time:</strong> {item.preferredTime}
            </p>
            <p>
              <strong>Comments:</strong> {item.comments || "N/A"}
            </p>

            <div className="booknow-card-actions">
              {/* <button onClick={() => alert("Book Now action for " + item.name)}>Reject</button>
              <button onClick={() => alert("Enquire action for " + item.name)}>Forward</button> */}
              <button onClick={() => openModal(item)}>View Details</button>
            </div>
          </div>
        ))}

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedItem.name} - Details</h3>
            <p>
              <strong>Phone:</strong> {selectedItem.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedItem.email}
            </p>
            <p>
              <strong>Service:</strong> {selectedItem.service}
            </p>
            <p>
              <strong>Preferred Date:</strong> {selectedItem.preferredDate}
            </p>
            <p>
              <strong>Preferred Time:</strong> {selectedItem.preferredTime}
            </p>
            <p>
              <strong>Address:</strong> {selectedItem.address}
            </p>
            <p>
              <strong>City:</strong> {selectedItem.city}
            </p>
            <p>
              <strong>Comments:</strong> {selectedItem.comments}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookNowCards;
