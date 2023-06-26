import React, { useRef } from 'react';


const FontAndLink = () => {
    
    const handleFontFamilyChange = (fontFamily) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.style.fontFamily = fontFamily;
            range.surroundContents(span);
        }
      };
  
      const handleInsertLink = () => {
        const url = prompt('Enter the URL:');
        const text = prompt('Enter the link text:');
      
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.textContent = text;
      
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(linkElement);
        }
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