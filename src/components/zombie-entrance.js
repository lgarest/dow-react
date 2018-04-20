import expect from 'expect';

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

const zombieCanEnter = location =>
  location.status === entranceStatus.EMPTY ||
  location.status === entranceStatus.BARRICADED;

const canBeBarricaded = location => location.status === entranceStatus.EMPTY;

const createZombieEntrance = (status = entranceStatus.EMPTY) => ({
  status,
  barricade: () => [createZombieEntrance()].map(barricade),
  canBeBarricaded: () => [createZombieEntrance()].map(canBeBarricaded),
  zombieCanEnter: () => [createZombieEntrance()].map(zombieCanEnter),
  zombieEnters: () => [createZombieEntrance()].map(zombieEnters),
});

export default createZombieEntrance;

// UTILS
const pipetwoFunctions = (f, g) => (...args) => g(f(...args));
const pipe = (...fns) => fns.reduce(pipetwoFunctions);


// TESTING HELPERS
const entranceIsEmpty = entrance =>
  expect(entrance.status).toBe(entranceStatus.EMPTY) || entrance;

const entranceIsBarricaded = entrance =>
  expect(entrance.status).toBe(entranceStatus.BARRICADED) || entrance;

const entranceHasZombie = entrance =>
  expect(entrance.status).toBe(entranceStatus.ZOMBIE) || entrance;

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
