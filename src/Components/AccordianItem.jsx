import React from 'react';

function AccordianItem({ title, body, isOpen, setIsOpen }) {
  const headerStyle = {
    fontWeight: 'bold', // equivalent to font-bold
    padding: '8px', // equivalent to p-2
    backgroundColor: '#E2E8F0', // equivalent to bg-slate-200
    display: 'flex', // equivalent to flex
    justifyContent: 'space-between', // equivalent to justify-between
    cursor: 'pointer', // equivalent to cursor-pointer
  };

  const bodyStyle = {
    padding: '8px', // equivalent to p-2
  };

  return (
    <div>
      <div style={headerStyle} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div style={bodyStyle}>{body}</div>}
    </div>
  );
}

export default AccordianItem;
