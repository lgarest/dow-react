import zombieEntrance from './zombie-entrance';

const Locations = (ctx) => {
  const locationsConfig = [{
    name: 'Police station',
    searchDeck: [1, 3, 5, 7, 9],
    survivors: [],
    maxSurvivors: 3,
    initialEntrances: 3,
    entrances: [],
  }, {
    name: 'Gas station',
    searchDeck: [2, 4, 6, 8, 10],
    survivors: [],
    maxSurvivors: 2,
    initialEntrances: 2,
    entrances: [],
  }];

  return {
    initialSetup: () =>
      locationsConfig
        .map(location => ({
          ...location,
          entrances: Array(location.initialEntrances).fill(0)
            .map(() => zombieEntrance('zombie')),
          searchDeck: ctx.random.Shuffle(location.searchDeck),
        })),
  };
};

export default Locations;
