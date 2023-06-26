import React, { useRef } from 'react';

const DirectionChange = () => {
  
    const handleDirectionChange = (direction) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const selectedElements = range.cloneContents().querySelectorAll('*');
      
          for (const element of selectedElements) {
            element.style.direction = direction;
          }
        }
      };
      

    return(
      <div>
        <button className="DirectionButton" onClick={() => handleDirectionChange('rtl')}>RTL</button>
        <button className="DirectionButton" onClick={() => handleDirectionChange('ltr')}>LTR</button>
      </div>
    
    );
}
export default DirectionChange