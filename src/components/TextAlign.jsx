import React, { useRef } from 'react';
import leftAlign from '../images/align-left.svg'
import riigtAlign from '../images/align-right.svg'
import centerAlign from '../images/align-center.svg'

const TextAlign = () => {
    
    const handleTextAlign =(textAligns) =>{
        document.execCommand('justify' + textAligns, false, null);
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