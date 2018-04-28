/* 3rd party imports */
import expect from 'expect';

/* relative imports */
import { pipe } from '../utils/fp';

export const spotStatus = {
  EMPTY: 'empty',
  // @todo: refactor to accomodate the actual survivor data
  SURVIVOR: 'survivor',
};

const survivorCanEnter = spot =>
  spot.status === spotStatus.EMPTY;

const survivorEnters = spot => ({
  ...spot,
  status: (survivorCanEnter(spot)
    ? spotStatus.SURVIVOR
    : spot.status
  ),
});

const createSurvivorSpot = (status = spotStatus.EMPTY) => ({
  status,
  survivorCanEnter: () => [createSurvivorSpot].map(survivorCanEnter),
  survivorEnters: () => [createSurvivorSpot].map(survivorEnters),
});

export default createSurvivorSpot;

// TESTING HELPERS
const spotIs = (spot, status) =>
  expect(spot.status).toBe(status) || spot;

const spotIsEmpty = spot => spotIs(spot, spotStatus.EMPTY);

const spotHasSurvivor = spot => spotIs(spot, spotStatus.SURVIVOR);

const isTruthy = x => expect(x).toBeTruthy();
const isFalsy = x => expect(x).toBeFalsy();

// TESTING
(() => {
  pipe(
    spotIsEmpty,
    survivorEnters,
    spotHasSurvivor,
  )(createSurvivorSpot());
})();

(() => {
  pipe(
    spotIsEmpty,
    x => pipe(survivorCanEnter, isTruthy)(x) || x,
    survivorEnters,
    spotHasSurvivor,
    x => pipe(survivorCanEnter, isFalsy)(x) || x,
  )(createSurvivorSpot());
})();
