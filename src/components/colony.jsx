/* 3rd party imports */
import styled from 'styled-components';
import { objectOf } from 'prop-types';
import { Game } from 'boardgame.io/core';

/* relative imports */
import Track from './numeric-track';
import Tile from './location-tile';


// @todo: Change this to a proper grid layout with areas
const ColonyTile = styled(Tile)`
  background: rgba(211, 0 , 0, 0.4);
`;

const Colony = props => (
  <ColonyTile name="The Colony">
    <Track name="Morale" order="desc" value={props.G.morale} />
    <Track name="Rounds" order="asc" value={props.G.round} />
  </ColonyTile>
);

Colony.propTypes = {
  G: objectOf(Game).isRequired,
};

export default Colony;
