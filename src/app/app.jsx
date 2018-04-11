/* 3rd party imports */
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

/* Relative imports */
import Board from '../components/board';

const MainGame = Game({
  setup: () => ({
    round: 0,
    morale: 0,
    goal: {
      name: 'LEAVE IT ALL',
      victoryCondition: () => undefined,
    },
    crisis: {},
    garbage: {},
    colony: {},
    cells: Array(9).fill(null)
  }),

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells]; // don't mutate original state.
      cells[id] = ctx.currentPlayer;
      return { ...G, cells }; // don't mutate original state.
    },
  },
});

const App = Client({
  game: MainGame,
  board: Board,
});

export default App;
