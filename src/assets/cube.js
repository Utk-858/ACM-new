import React, { useState, useEffect, useRef } from 'react';

const EnhancedCrystalACMLogoCube = () => {
  const cubeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let rotation = { x: 0, y: 0 };

    const animate = () => {
      rotation.x += 0.005;
      rotation.y += 0.005;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `
          rotateX(${rotation.x + mousePosition.y * 0.1}rad)
          rotateY(${rotation.y + mousePosition.x * 0.1}rad)
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const ACMFace = ({ rotation }) => (
    <div className="w-full h-full relative overflow-hidden bg-blue-400 bg-opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-200 opacity-50"></div>
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
        <defs>
          <radialGradient id="crystal-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#crystal-glow)" />
        <circle cx="50" cy="50" r="35" fill="rgba(255,255,255,0.7)" />
        <text x="50" y="58" fontSize="24" fill="#0053a9" textAnchor="middle" fontFamily="Arial, sans-serif" className="font-bold">acm</text>
      </svg>
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30"
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
    </div>
  );

  return (
    <div 
      className="w-96 h-96 perspective-1000 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div 
        ref={cubeRef}
        className="w-full h-full relative transform-style-3d transition-transform duration-300 ease-out"
      >
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, index) => (
          <div
            key={face}
            className={`absolute w-full h-full backface-hidden ${face} shadow-lg`}
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(48px)`,
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
            }}
          >
            <ACMFace rotation={index * 90} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-white to-transparent opacity-20"></div>
      </div>
    </div>
  );
};

export default EnhancedCrystalACMLogoCube;