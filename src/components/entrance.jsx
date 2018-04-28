/* 3rd party imports */
import { oneOf } from 'prop-types';

/* relative imports */
import { entranceStatus } from '../main-game/zombie-entrance';


const Entrance = ({ status }) => (
  <span>
    {
      status === entranceStatus.ZOMBIE
        ? '[Zombie]'
        : status === entranceStatus.BARRICADED
        ? '[Barricade]'
        : '[ ]'
    }
  </span>
);

Entrance.propTypes = {
  status: oneOf([...Object.values(entranceStatus)]).isRequired,
};

export default Entrance;
