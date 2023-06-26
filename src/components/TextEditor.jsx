import React, { useRef } from 'react';

import HandeleBoldItalic from './HandeleBoldItalic'
import TextAlign from './TextAlign'
import DirectionChange from './DirectionChange'
import ColorAndSize from './ColorAndSize'
import FontAndLink from './FontAndLink'

const MyComponent = () => {
  const contentEditableRef = useRef(null);


  return (
    <div>
      <HandeleBoldItalic/>
      <TextAlign/>
      <DirectionChange/>
      <ColorAndSize/>
      <FontAndLink/>

      <div className='TextArea'
        ref={contentEditableRef}
        contentEditable="true"
        style={{ border: '1px solid black', padding: '5px' }}
      >
      </div>
      
    </div>
  );
};

export default MyComponent;
