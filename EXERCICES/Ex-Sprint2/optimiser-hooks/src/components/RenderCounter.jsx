import React, { useState, useRef } from 'react';

export default function RenderCounter() {

  const [text, setText] = useState('');
  const renderCount = useRef(0);
  renderCount.current = renderCount.current +1;

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <p>Ce composant s'est rendu {renderCount.current} fois.</p>
    </div>
  );
}