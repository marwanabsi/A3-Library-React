import React, { useRef } from 'react';


const HandeleBoldItalic = () => {
    const contentEditableRef = useRef(null); 

    const handleBoldSelection = () => {
        const selection = window.getSelection();
    
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const selectedText = range.toString();
    
          const isBold = range.commonAncestorContainer.parentElement.tagName === 'B';
    
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
    
      const handelItalicSelection= () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
          const selectedText = range.toString();
    
          const isItalic = range.commonAncestorContainer.parentElement.tagName === 'I';
    
          if (isItalic) {
            document.execCommand('italic', false, null); 
          } else {
    
    
    
            const boldElement = document.createElement('i');
            boldElement.appendChild(document.createTextNode(selectedText));
    
            range.deleteContents();
            range.insertNode(boldElement);
          }
        };


    return(
      <div>
          <button className='BoldButton' onClick={handleBoldSelection}>B</button>
          <button className='ItalicButton'onClick={handelItalicSelection}>I</button>
      </div>
    
    );
}
export default HandeleBoldItalic