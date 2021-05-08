import { memo } from 'react';

const Badge = ({ value }) => <span className="badge">{value}</span>;

export default memo(Badge);
