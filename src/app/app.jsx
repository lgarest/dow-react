/* 3rd party imports */
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

/* Relative imports */
import Board from '../components/board';
import Locations from '../components/locations';


const MainGame = Game({
  setup: ctx => ({
    locations: Locations(ctx).initialSetup(),
    round: 0,
    morale: 0,
    goal: {
      name: 'LEAVE IT ALL',
      victoryCondition: () => undefined,
    },
    crisis: {},
    garbage: {},
    colony: {},
    cells: Array(9).fill(null),
  }),

  moves: {
    moveToLocation(G, ctx, id) {
      const locations = [...G.locations]; // don't mutate original state.
      locations[id].survivors = locations[id].survivors.concat(ctx.currentPlayer);
      return { ...G, locations }; // don't mutate original state.
    },
  },
});

const App = Client({
  game: MainGame,
  board: Board,
});

export default App;
