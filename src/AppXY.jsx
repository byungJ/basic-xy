import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x: 0, y: 0});

    return (
        <div className="container" onPointerMove={(event)=>{
            console.log(`${event.clientX}, ${event.clientY}`);
            //setPosition({ x: event.clientX, y: event.clientY});

            setPosition(prev => {
                return ({x: event.clientX, y: prev.y})
            });
        }}>
            <div className="pointer" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
        </div>
    );
}