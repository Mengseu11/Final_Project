import { useState, useEffect } from "react";

export default function Alert({ onClose }) {
  const [showAlert, setShowAlert] = useState(true);

  // Close the alert after 3 seconds automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose(); // Notify parent to hide alert
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Handle manual close
  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  if (!showAlert) return null; // Don't render if alert is closed

  return (
    <div className="fixed top-5 right-5 rounded-xl border border-gray-100 bg-white p-4 shadow-lg z-50">
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">Successfully</strong>
          <p className="mt-1 block text-sm text-gray-700">
            Your product checkout was successful.
          </p>
        </div>

        <button onClick={handleClose} className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
