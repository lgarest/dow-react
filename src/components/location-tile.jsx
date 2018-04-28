import styled from 'styled-components';
import { string, node } from 'prop-types';

const LocationTileWrapper = styled.div`
  display: grid;
  background: rgba(211,211,211, 0.4);
  padding: 1rem;
  margin: 0 0 0.5rem;
`;

const LocationTile = ({ name, children, ...props }) => (
  <LocationTileWrapper {...props}>
    <h2>{name}</h2>
    { children }
  </LocationTileWrapper>
);

LocationTile.propTypes = {
  name: string.isRequired,
  children: node.isRequired,
};

export default LocationTile;
