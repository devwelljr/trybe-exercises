import React from 'react';
import Daughter from './Daughter';

function Father(props) {
  return(
    <div>
    <h2>Father</h2>
    <Daughter />
    </div>
  );
}

export default Father;
