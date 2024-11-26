import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  // State to track the progress percentage
  const [progress, setProgress] = useState(0);

  // Simulate progress update using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          return 100;
        }
        return prevProgress + 10; // Increase progress by 10% every 500ms
      });
    }, 500);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
      <div
        style={{
          height: '30px',
          width: `${progress}%`,
          backgroundColor: '#4caf50',
          borderRadius: '10px',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;