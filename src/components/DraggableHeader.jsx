'use client'

import { useRef, useState } from "react";
// header hight draggable

export default function DraggableHeader() {
  const [height, setHeight] = useState(150);
  const minHeight = 50;
  const maxHeight = 150;

  const startY = useRef(0);

  const startHeight = useRef(0);

  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startHeight.current = height;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = () => {
    if ((!isDragging, current)) return;

    const dy = e.clientY - startY.current;
    const newHeight = Math.min(
      Math.max(startHeight.current + dy, minHeight),
      maxHeight
    );
    console.log(newHeight, "NEWWW HEIGHT");
    setHeight(newHeight);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseMove);
  };

  return (
    <>
      <div style={{ height: `${height}px`, backgroundColor: "GrayText" }}>
        <div onMouseDown={handleMouseDown}>Drag me</div>
        <div>
          <p>drag this below items</p>
        </div>
      </div>
    </>
  );
}
