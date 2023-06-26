import React, { useRef } from 'react';
import leftAlign from '../images/align-left.svg'
import riigtAlign from '../images/align-right.svg'
import centerAlign from '../images/align-center.svg'

const TextAlign = () => {
    
    const handleTextAlign = (textAlign) => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        
        const textNodes = getTextNodesInRange(range);
        
        textNodes.forEach((node) => {
          const parentElement = node.parentNode;
          parentElement.style.textAlign = textAlign;
        });
      };
      
      const getTextNodesInRange = (range) => {
        const startContainer = range.startContainer;
        const endContainer = range.endContainer;
        const commonAncestorContainer = range.commonAncestorContainer;
        
        if (startContainer === endContainer && startContainer.nodeType === Node.TEXT_NODE) {
          return [startContainer];
        }
        
        const walker = document.createTreeWalker(commonAncestorContainer, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        
        while (walker.nextNode()) {
          const node = walker.currentNode;
          
          if (isNodeInRange(node, range)) {
            textNodes.push(node);
          }
        }
        
        return textNodes;
      };
      
      const isNodeInRange = (node, range) => {
        const nodeRange = document.createRange();
        nodeRange.selectNodeContents(node);
        
        return range.intersectsNode(node) || range.compareBoundaryPoints(Range.START_TO_START, nodeRange) === 0 || range.compareBoundaryPoints(Range.END_TO_END, nodeRange) === 0;
      };
      
      


    return(
      <div>
        <button className='TextAliment' onClick={() => handleTextAlign('Left')}><img src={leftAlign}/></button>
        <button className='TextAliment' onClick={() => handleTextAlign('Center')}><img src={centerAlign}/></button>
        <button className='TextAliment' onClick={() => handleTextAlign('Right')}><img src={riigtAlign}/></button>
      </div>
    
    );
}
export default TextAlign