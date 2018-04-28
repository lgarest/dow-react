/* 3rd party imports */
import expect from 'expect';

/* relative imports */
import { pipe } from '../utils/fp';


export const entranceStatus = {
  EMPTY: 'empty',
  ZOMBIE: 'zombie',
  BARRICADED: 'barricaded',
};

const zombieEnters = entrance => ({
  ...entrance,
  status: (entrance.status === entranceStatus.BARRICADED
    ? entranceStatus.EMPTY
    : entranceStatus.ZOMBIE),
});

const barricade = entrance => ({
  ...entrance,
  status: (entrance.status === entranceStatus.EMPTY
    ? entranceStatus.BARRICADED
    : entrance.status),
});

const zombieCanEnter = entrance =>
  entrance.status === entranceStatus.EMPTY ||
  entrance.status === entranceStatus.BARRICADED;

const canBeBarricaded = entrance => entrance.status === entranceStatus.EMPTY;

const createZombieEntrance = (status = entranceStatus.EMPTY) => ({
  status,
  barricade: () => [createZombieEntrance()].map(barricade),
  canBeBarricaded: () => [createZombieEntrance()].map(canBeBarricaded),
  zombieCanEnter: () => [createZombieEntrance()].map(zombieCanEnter),
  zombieEnters: () => [createZombieEntrance()].map(zombieEnters),
});

export default createZombieEntrance;


// TESTING HELPERS
const spotIs = (spot, status) =>
  expect(spot.status).toBe(status) || spot;

const entranceIsEmpty = entrance => spotIs(entrance, entranceStatus.EMPTY);

const entranceIsBarricaded = entrance =>
  spotIs(entrance, entranceStatus.BARRICADED);

const entranceHasZombie = entrance =>
  spotIs(entrance, entranceStatus.ZOMBIE);

const isTruthy = x => expect(x).toBeTruthy();
const isFalsy = x => expect(x).toBeFalsy();

// TESTING
(() => {
  pipe(
    entranceIsEmpty,
    barricade,
    entranceIsBarricaded,
    zombieEnters,
    entranceIsEmpty,
    zombieEnters,
    entranceHasZombie,
  )(createZombieEntrance());
})();

(() => {
  pipe(
    entranceIsEmpty,
    x => pipe(zombieCanEnter, isTruthy)(x) || x,
    x => pipe(canBeBarricaded, isTruthy)(x) || x,
    barricade,
    entranceIsBarricaded,
    x => pipe(zombieCanEnter, isTruthy)(x) || x,
    x => pipe(canBeBarricaded, isFalsy)(x) || x,
    zombieEnters,
    zombieEnters,
    x => pipe(zombieCanEnter, isFalsy)(x) || x,
    x => pipe(canBeBarricaded, isFalsy)(x) || x,
  )(createZombieEntrance());
})();
