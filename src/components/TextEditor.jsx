import React, { useRef } from 'react';
import leftAlign from '../images/align-left.svg'
import riigtAlign from '../images/align-right.svg'
import centerAlign from '../images/align-center.svg'


const MyComponent = () => {
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

    const handleTextAlign =(textAligns) =>{
      document.execCommand('justify' + textAligns, false, null);
    };

    const handleDirectionChange = (direction) => {
      document.execCommand('dir', false, direction);
    };

    const handleColorChange = (color) => {
      document.execCommand('foreColor', false, color);
    };
    const handleFontSizeChange = (size) => {
      document.execCommand('fontSize', false, size);
    };

    const handleFontFamilyChange = (fontFamily) => {
      document.execCommand('fontName', false, fontFamily);
    };

    const handleInsertLink = () => {
      const url = prompt('Enter the URL:');
      const text = prompt('Enter the link text:');
      document.execCommand('insertHTML', false, `<a href="${url}">${text}</a>`);
    };

  return (
    <div>
      <div className="textEdit"></div>
      <button className='BoldButton' onClick={handleBoldSelection}>B</button>
      <button className='ItalicButton'onClick={handelItalicSelection}>I</button>
      <button className='TextAliment' onClick={() => handleTextAlign('Left')}><img src={leftAlign}/></button>
      <button className='TextAliment' onClick={() => handleTextAlign('Center')}><img src={centerAlign}/></button>
      <button className='TextAliment' onClick={() => handleTextAlign('Right')}><img src={riigtAlign}/></button>
      <button className="DirectionButton" onClick={() => handleDirectionChange('rtl')}>RTL</button>
      <button className="DirectionButton" onClick={() => handleDirectionChange('ltr')}>LTR</button>
      <input
        type="color"
        className="ColorPicker"
        onChange={(e) => handleColorChange(e.target.value)}
      />
 
      <select
         className="FontSizeSelector"
        onChange={(e) => handleFontSizeChange(e.target.value)}
      >
        <option value="">Font Size</option>
        <option value="1">8px</option>
        <option value="2">10px</option>
        <option value="3">12px</option>
        <option value="4">14px</option>
        <option value="5">16px</option>
        <option value="6">18px</option>
        <option value="7">20px</option>
      </select>

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

      
      

      <div
        ref={contentEditableRef}
        contentEditable="true"
        style={{ border: '1px solid black', padding: '5px' }}
      >
      </div>
      
    </div>
  );
};

export default MyComponent;
