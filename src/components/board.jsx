import React from 'react';
import Colony from './colony';

const Board = props => (
  <div>
    <Colony {...props} />
    <div>-------------</div>
    <div>Police Station</div>
    <div>Supermarket</div>
    <div>School</div>
    <div>Library</div>
    <div>Gas Station</div>
    <div>Hospital</div>
  </div>
);

export default Board;
