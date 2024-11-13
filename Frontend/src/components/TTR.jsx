
import React, { useState } from "react";


const TTR = () => {
  const [isOpen, setIsOpen] = useState(true);

  


  const toggleContent = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <h2
          className="text-3xl font-semibold text-gray-800 p-6 cursor-pointer"
          onClick={toggleContent}
        >
          Things to Remember
          <svg
            className={`h-6 w-6 ml-2 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h2>

        {isOpen && (
          <div className="p-8">
            <ol className="list-decimal pl-2">
              <li className="text-xl font-semibold text-gray-800 p-1 mb-1">
                Initially Summary will be fetched for all the carriers for NORMAL queue automatically.
              </li>
              <li className="text-xl font-semibold text-gray-800 p-1 mb-1">
                All the request will be cached for sometime.
              </li>
              <li className="text-xl font-semibold text-gray-800 p-1 mb-1">
                Data range will only work with single carrier selection.
              </li>
            </ol>
          </div>
        )}
      </div>
    
    </div>
  );
};

export default TTR;
