/* 3rd party imports */
import { arrayOf, func, objectOf, number, string } from 'prop-types';

/* relative imports */
import Tile from './location-tile';
import Entrance from './entrance';

const LocationSurvivorSpot = ({ status, click }) => (
  <button onClick={click} >
    {
      status === 'player'
        ? '[P]'
        : '[ ]'
    }
  </button>
);

LocationSurvivorSpot.propTypes = {
  status: string.isRequired,
  click: func.isRequired,
};


const Location = props => (
  <Tile name={props.name}>
    <span>
      SurvivorSpots: {
        props.survivorSpots.map((spot, idx) =>
          <LocationSurvivorSpot key={idx} click={props.click} {...spot} />)
      }
    </span>
    <span>Max survivors: {props.maxSurvivors} </span>
    <p>Search deck: {props.searchDeck} </p>
    <p>Entrances: {
      props.entrances.map((entrance, idx) =>
        <Entrance key={idx} {...entrance} />)
    }
    </p>
  </Tile>
);

Location.propTypes = {
  name: string.isRequired,
  click: func.isRequired,
  survivorSpots: arrayOf(objectOf(LocationSurvivorSpot)).isRequired,
  maxSurvivors: number.isRequired,
  searchDeck: arrayOf(number).isRequired,
  entrances: arrayOf(objectOf(Entrance)).isRequired,
};

export default Location;
