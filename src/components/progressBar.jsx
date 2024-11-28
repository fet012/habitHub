import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="relative w-1/2 bg-gray-300 h-4 rounded">
    <div
      className="bg-green-500 h-4 rounded"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressBar;
