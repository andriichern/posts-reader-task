import { memo } from 'react';
import PropTypes from 'prop-types';

const Card = ({ post }) => (
  <div className="post-card">
    <div className="post-card-data">{post.created_time?.toLocaleString()}</div>
    <hr className="post-card-divider" />
    <div className="post-card-data">{post.message}</div>
  </div>
);

Card.propTypes = {
  post: PropTypes.shape({
    message: PropTypes.string.isRequired,
    created_time: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default memo(Card);
