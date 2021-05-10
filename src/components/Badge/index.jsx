import { memo } from 'react';
import PropTypes from 'prop-types';

const Badge = ({ value }) => <span className="flex centered badge">{value}</span>;

Badge.propTypes = {
  value: PropTypes.number.isRequired,
};

export default memo(Badge);
