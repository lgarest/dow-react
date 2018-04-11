import React from 'react';

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
  <div onClick={props.click} something={console.log('rops', props)}>
    <span>{props.name} </span>
    <span>Players: {props.players} </span>
    <span>Max players: {props.maxPlayers} </span>
    <p>Search deck: {props.searchDeck} </p>
    <p>Entrances: {
      props.entrances.map((entrance,idx) =>
        <Entrance key={idx} {...entrance} />
      )
    } </p>
  </div>
);

const Board = props => (
  <div>
    {props.G.locations.map((cell, idx) =>
      <Location
        key={idx}
        click={() => props.moves.moveToLocation(idx)}
        {...props.G.locations[idx]}
      />
    )}
  </div>
);

export default Board;
/* eslint-enable */
