import {number, shape, string} from 'prop-types';

export const itemPropType = shape({
  id: string.isRequired,
  scale: number.isRequired,
  width: number.isRequired,
});
