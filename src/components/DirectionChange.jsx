import React, { useRef } from 'react';

const DirectionChange = () => {
  
      const handleDirectionChange = (direction) => {
        document.execCommand('dir', false, direction);
      };

    return(
      <div>
        <button className="DirectionButton" onClick={() => handleDirectionChange('rtl')}>RTL</button>
      <button className="DirectionButton" onClick={() => handleDirectionChange('ltr')}>LTR</button>
      </div>
    
    );
}
export default DirectionChange