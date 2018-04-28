/* 3rd party imports */
import React from 'react';
import { string, number } from 'prop-types';

const max = 11;
const Track = ({ name, order, value }) => {
  const trackNumbers = Array(max).fill(0).map((num, i) =>
    (order.toLowerCase() === 'desc' ? max - i - 1 : i));
  return (
    <div>
      <div>{name}</div>
      {
        trackNumbers.map(num => (
          <span key={`${name}${num}`}>{num === value ? `[${num}]` : num} </span>
        ))
      }
    </div>
  );
};

Track.propTypes = {
  name: string.isRequired,
  order: string,
  value: number,
};

Track.defaultProps = {
  order: 'asc',
  value: 0,
};

export default Track;
