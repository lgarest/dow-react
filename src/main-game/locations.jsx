/* relative imports */
import zombieEntrance from './zombie-entrance';
import survivorSpot from './survivor-spot';


const Locations = (ctx) => {
  const locationsConfig = [{
    name: 'Police station',
    // @todo: generate this on initialSetup
    searchDeck: [1, 3, 5, 7, 9],
    survivorSpots: [],
    maxSurvivors: 3,
    initialEntrances: 3,
    entrances: [],
  }, {
    name: 'Gas station',
    // @todo: generate this on initialSetup
    searchDeck: [2, 4, 6, 8, 10],
    survivorSpots: [],
    maxSurvivors: 2,
    initialEntrances: 2,
    entrances: [],
  }];

  return {
    initialSetup: () =>
      locationsConfig
        .map(location => ({
          ...location,
          survivorSpots: Array(location.maxSurvivors).fill(0)
            .map(() => survivorSpot()),
          entrances: Array(location.initialEntrances).fill(0)
            .map(() => zombieEntrance('zombie')),
          searchDeck: ctx.random.Shuffle(location.searchDeck),
        })),
  };
};

export default Locations;
