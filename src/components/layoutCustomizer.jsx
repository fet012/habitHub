import React, { useState } from 'react';

const LayoutCustomizer = () => {
  const [layout, setLayout] = useState('default');

  const updateLayout = () => {
    // Intentional Bug: Doesn't update layout correctly.
    setLayout('updated');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Customize Layout</h2>
      <button onClick={updateLayout} className="bg-purple-500 text-white px-4 py-2 rounded">
        Update Layout
      </button>
      <p className="mt-2">Current Layout: {layout}</p>
    </div>
  );
};

export default LayoutCustomizer;
