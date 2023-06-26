import React, { useRef } from 'react';


const FontAndLink = () => {
    
    const handleFontFamilyChange = (fontFamily) => {
        document.execCommand('fontName', false, fontFamily);
      };
  
      const handleInsertLink = () => {
        const url = prompt('Enter the URL:');
        const text = prompt('Enter the link text:');
        document.execCommand('insertHTML', false, `<a href="${url}">${text}</a>`);
      };


    return(
      <div>
        <select
        className="FontFamilySelector"
        onChange={(e) => handleFontFamilyChange(e.target.value)}
      >
        <option value="">Font Family</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
      </select>

      <button className="LinkButton" onClick={handleInsertLink}>
          Insert Link
        </button>
      </div>
    
    );
}
export default FontAndLink