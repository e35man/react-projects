import React, { useState } from "react";

export default function Warning() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleCloseAlt = () => {
    window.location.href = "https://www.youtube.com/@rakhipereira1449/videos";
  };

  return (
    <>
      {showPopup && (
        <div className="fixed w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Notice</h2>
            <p className="text-gray-800 mb-4">
              Your attention is required. This website uses moderate amount of
              your computer's memory since it fetches real-time data per second.
            </p>
            <p className="text-gray-800 mb-4">
              Please acknowledge that you understand and wish to proceed.
            </p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              onClick={handleClose}
            >
              Yes, I understand
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mx-5 rounded-lg"
              onClick={handleCloseAlt}
            >
              No, Too bad
            </button>
          </div>
        </div>
      )}
    </>
  );
}
