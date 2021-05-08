import { memo } from 'react';
import { useSelector } from 'react-redux';
import { sendersWithCount } from 'store/posts/selectors';
import Badge from '../Badge';

const sort = {
  asc: (a, b) => {
    if (a.from_name === b.from_name) {
      return 0;
    }

    if (a.from_name < b.from_name) {
      return -1;
    }

    return 1;
  },
};

const SendersList = ({ onItemSelect }) => {
  const authors = useSelector(sendersWithCount);

  return (
    <ul className="senders-list">
      {authors.sort(sort.asc).map(author => (
        <li
          key={author.from_id}
          data-id={author.from_id}
          className="flex align-center justify-spaced senders-list-item"
          onClick={onItemSelect}
        >
          {author.from_name}
          <Badge value={author.count} />
        </li>
      ))}
    </ul>
  );
};

export default memo(SendersList);
