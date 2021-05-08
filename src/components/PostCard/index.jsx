import { memo } from 'react';

const Card = ({ post }) => (
  <div className="post-card">
    <div className="post-card-data">{post.created_time?.toLocaleString()}</div>
    <hr className="post-card-divider" />
    <div className="post-card-data">{post.message}</div>
  </div>
);

export default memo(Card);
