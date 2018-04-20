import { arrayOf, func, objectOf, number, string } from 'prop-types';

import Tile from './location-tile';
import Entrance from './entrance';


const Location = props => (
  <Tile
    name={props.name}
    onClick={props.click}
  >
    <span>Survivors: {props.survivors} </span>
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
  survivors: arrayOf(string).isRequired,
  maxSurvivors: number.isRequired,
  searchDeck: arrayOf(number).isRequired,
  entrances: arrayOf(objectOf(Entrance)).isRequired,
};

export default Location;
