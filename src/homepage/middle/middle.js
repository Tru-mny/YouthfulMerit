import React, { useState } from 'react';
import './middle.css';

function Middle() {
    const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
    const boxContainerRef = React.useRef(null);

    const scrollBoxes = (direction) => {
        const numBoxes = boxContainerRef.current.children.length;
        const boxWidth = boxContainerRef.current.children[0].clientWidth + 10;
        const maxScrollIndex = Math.max(0, numBoxes - 1);

        if (direction === 'left' && currentScrollIndex > 0) {
            setCurrentScrollIndex((prevIndex) => prevIndex - 1);
        } else if (direction === 'right' && currentScrollIndex < maxScrollIndex) {
            setCurrentScrollIndex((prevIndex) => prevIndex + 1);
        }
    };

    const scrollPosition = currentScrollIndex * (boxContainerRef.current?.children[0].clientWidth + 10) || 0;
    const transformStyle = { transform: `translateX(-${scrollPosition}px)` };

    return (
        <div className="middle-container">
            <button className="scroll-button left" onClick={() => scrollBoxes('left')}>&lt;</button>
            <div className="box-container" ref={boxContainerRef} style={transformStyle}>
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
                <div className="box">Box 4</div>
                {/* Add more boxes as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollBoxes('right')}>&gt;</button>
        </div>
    );
}

export default Middle;