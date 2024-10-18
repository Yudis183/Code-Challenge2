import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => (
  <div>
    <h1>Enjoy a cup of <FontAwesomeIcon icon={faCoffee} />!</h1>
  </div>
);

export default MyComponent;
