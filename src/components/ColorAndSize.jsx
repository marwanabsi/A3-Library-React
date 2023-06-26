import React, { useRef } from 'react';

const ColorAndSize = () => {
  
    const handleColorChange = (color) => {
        document.execCommand('foreColor', false, color);
      };
      const handleFontSizeChange = (size) => {
        document.execCommand('fontSize', false, size);
      };
      

    return(
      <div>
         <input
            type="color"
            className="ColorPicker"
            onChange={(e) => handleColorChange(e.target.value)}
        />
 
        <select
            className="FontSizeSelector"
            onChange={(e) => handleFontSizeChange(e.target.value)}>
            <option value="">Font Size</option>
            <option value="1">8px</option>
            <option value="2">10px</option>
            <option value="3">12px</option>
            <option value="4">14px</option>
            <option value="5">16px</option>
            <option value="6">18px</option>
            <option value="7">20px</option>
        </select>
      </div>
    
    );
}
export default ColorAndSize