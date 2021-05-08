import { memo } from 'react';
import { useSelector } from 'react-redux';
import { sendersWithCount } from 'store/posts/selectors';
import Badge from '../Badge';

const SendersList = ({}) => {
  const authors = useSelector(sendersWithCount);

  return (
    <ul className="senders-list">
      {authors.map(author => (
        <li className="senders-list-item">
          {author.from_name}
          <Badge value={author.count} />
        </li>
      ))}
    </ul>
  );
};

export default memo(SendersList);
