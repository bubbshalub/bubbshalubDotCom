"use client";

// Import necessary React hooks
import React, { useState } from "react";

// Create your functional component
const DynamicElements = () => {
  // State to store the created elements
  const [elements, setElements] = useState([]);

  const value = null;

  // Function to handle button click and add a new element
  const handleButtonClick = () => {
    // Create a unique key for the new element (you can use a library for this in a real application)
    const newElementKey = elements.length + 1;

    // Create a new element and add it to the state
    const newElement = <div key={newElementKey}>Element {newElementKey}</div>;
    setElements([...elements, newElement]);
  };

  return (
    <div>
      {/* Button to add a new element */}
      <button onClick={handleButtonClick}>Add Element</button>

      {/* Display the created elements */}
      <div>
        {elements.map((element) => (
          <div key={element.key} className="flex flex-row w-[100%]">
            <button className="bg-green-500 w-16 m-1"> roll </button>
            <div className="w-[8em] bg-zinc-800 m-1"> result: {} </div>
            <button className="w-8 bg-red-500 m-1"> - </button>
            <input
              type="text"
              value={value}
              className="m-1"
              placeholder="effect name"
            />
            <input type="text" className="w-14 m-1 p-0" placeholder="unit(s)" />
            <input type="text" className="w-12 m-1 p-0" placeholder="min" />
            <input type="text" className="w-12 m-1 p-0" placeholder="max" />
            <input type="text" className="w-6 m-1 p-0" placeholder="min" />
            <input type="text" className="w-6 m-1 p-0" placeholder="max" />
            <div className="w-14 bg-blue-500 m-1"> cur val </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export your component
export default DynamicElements;
