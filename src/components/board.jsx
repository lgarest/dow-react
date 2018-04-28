import { Game } from 'boardgame.io/core';

import { objectOf } from 'prop-types';

import Colony from './colony';
import Location from './location';

const Board = props => (
  <div>
    <Colony {...props} />
    {props.G.locations.map((cell, location) => (
      <Location
        name={location}
        key={location}
        click={() => props.moves.moveToLocation(location)}
        {...props.G.locations[location]}
      />
    ))}
  </div>
);

Board.propTypes = {
  G: objectOf(Game).isRequired,
};

export default Board;
