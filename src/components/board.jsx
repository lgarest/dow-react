import React from 'react';
import Colony from './colony';
import Tile from './location-tile';

/* eslint-disable */

const Entrance = props => (
  <span>
    {
      props.zombie
        ? '[Z]'
        : props.barricaded
        ? '[B]'
        : '[ ]'
    }
  </span>
);

const Location = props => (
  <Tile
    name={props.name}
    onClick={props.click}
    something={console.log('props', props)}
  >
    <span>Players: {props.players} </span>
    <span>Max players: {props.maxPlayers} </span>
    <p>Search deck: {props.searchDeck} </p>
    <p>Entrances: {
      props.entrances.map((entrance, idx) =>
        <Entrance key={idx} {...entrance} />
      )
    } </p>
</Tile>
);

const Board = props => (
  <div>
    <Colony {...props} />
    {props.G.locations.map((cell, location) =>
      <Location
        name={location}
        key={location}
        click={() => props.moves.moveToLocation(location)}
        {...props.G.locations[location]}
      />
    )}
  </div>
);

export default Board;
/* eslint-enable */
