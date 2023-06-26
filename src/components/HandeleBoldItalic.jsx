import React, { useRef } from 'react';


const HandeleBoldItalic = () => {
    const contentEditableRef = useRef(null); 

    const handleBoldSelection = () => {
      const selection = window.getSelection();
    
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        const isBold = document.queryCommandState('bold');
    
        if (isBold) {
          document.execCommand('bold', false, null);
        } else {
          const boldElement = document.createElement('b');
          boldElement.appendChild(document.createTextNode(selectedText));
    
          range.deleteContents();
          range.insertNode(boldElement);
        }
      }
    };
    
    const handleItalicSelection = () => {
      const selection = window.getSelection();
    
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        const isItalic = document.queryCommandState('italic');
    
        if (isItalic) {
          document.execCommand('italic', false, null);
        } else {
          const italicElement = document.createElement('i');
          italicElement.appendChild(document.createTextNode(selectedText));
    
          range.deleteContents();
          range.insertNode(italicElement);
        }
      }
    };
    


    return(
      <div>
          <button className='BoldButton' onClick={handleBoldSelection}>B</button>
          <button className='ItalicButton'onClick={handleItalicSelection}>I</button>
      </div>
    
    );
}
export default HandeleBoldItalic