import { useState } from "react";

function ModalPhoto() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="modal-overlay absolute inset-0 bg-gray-800 opacity-50"
            onClick={closeModal} // Close modal when clicking outside
          ></div>
          <div className="modal-container bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-2xl font-semibold">Modal Title</h2>
            <p className="text-sm">This is a customizable modal.</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPhoto;
