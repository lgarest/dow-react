/* 3rd party imports */
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

/* Relative imports */
import Board from '../components/board';

const zombieEntrance = () => {
  let zombie = false;
  let barricaded = false;
  const zombieEnters = () => (zombie
    ? false
    : barricaded
      ? (() => { barricaded = false; })()
      : (() => { zombie = true; })()
  );
  return {
    zombie,
    barricaded,
    zombieEnters,
  };
};

const Locations = (ctx) => {
  const locationsConfig = [{
    name: 'Police station',
    searchDeck: [1, 3, 5, 7, 9],
    players: [],
    maxPlayers: 3,
    initialEntrances: 3,
    entrances: [],
  }, {
    name: 'Gas station',
    searchDeck: [2, 4, 6, 8, 10],
    players: [],
    maxPlayers: 2,
    initialEntrances: 2,
    entrances: [],
  }];

  return {
    initialSetup: () =>
      locationsConfig
        .map(location => ({
          ...location,
          entrances: Array(location.initialEntrances).fill(0).map(zombieEntrance),
          searchDeck: ctx.random.Shuffle(location.searchDeck),
        })),
  };
};

const MainGame = Game({
  setup: ctx => ({ locations: Locations(ctx).initialSetup() }),

  moves: {
    moveToLocation(G, ctx, id) {
      const locations = [...G.locations]; // don't mutate original state.
      locations[id].players = locations[id].players.concat(ctx.currentPlayer);
      return { ...G, locations }; // don't mutate original state.
    },
  },
});

const App = Client({
  game: MainGame,
  board: Board,
});

export default App;
