"use client";

import React, { useEffect, useRef, useState } from "react";

function MatchBoundingBox() {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const [boundingBox, setBoundingBox] = useState(null);

  useEffect(() => {
    const sourceElement = sourceRef.current;
    const targetElement = targetRef.current;

    if (sourceElement && targetElement) {
      const sourceRect = sourceElement.getBoundingClientRect();

      // Adjust the position and size of the target element
      targetElement.style.position = "absolute";
      targetElement.style.top = `${sourceRect.top}px`;
      targetElement.style.left = `${sourceRect.left}px`;
      targetElement.style.width = `${sourceRect.width}px`;
      targetElement.style.height = `${sourceRect.height}px`;

      // Optionally, you can store the bounding box in state if needed
      setBoundingBox(sourceRect);
    }
  }, []); // Only re-run the effect when sourceRef changes

  return (
    <div>
      <div
        ref={sourceRef}
        style={{ width: "100px", height: "100px", background: "red" }}
      >
        <p> Source Element </p>
      </div>
      <div ref={targetRef} style={{ background: "blue" }}>
        <p> Target Element </p>
      </div>
      {boundingBox && <div>Bounding Box: {JSON.stringify(boundingBox)}</div>}
    </div>
  );
}

export default MatchBoundingBox;
