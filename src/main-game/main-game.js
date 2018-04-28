/* 3rd party imports */
import { Game } from 'boardgame.io/core';

/* Relative imports */
import Locations from './locations';
import { moveSurvivorToLocation } from './moves';


const MainGame = Game({
  setup: ctx => ({
    locations: Locations(ctx).initialSetup(),
    round: 0,
    morale: 0,
    // @todo: change the goal based on the main objective
    goal: {
      name: 'LEAVE IT ALL',
      victoryCondition: () => undefined,
    },
    crisis: {},
    garbage: {},
    colony: {},
  }),

  moves: {
    moveSurvivorToLocation,
  },
});

export default MainGame;
