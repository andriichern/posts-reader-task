import { memo } from 'react';

const Badge = ({ value }) => <span className="flex centered badge">{value}</span>;

export default memo(Badge);
