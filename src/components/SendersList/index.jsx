import { memo } from 'react';
import { useSelector } from 'react-redux';
import { sendersWithCount } from 'store/posts/selectors';
import { sortOrder, lexicalSort } from 'services/sorting';
import Badge from '../Badge';

const FROM_NAME_KEY = 'from_name';
const sortFn = lexicalSort(sortOrder.ASC, FROM_NAME_KEY);

const SendersList = ({ onItemSelect }) => {
  const authors = useSelector(sendersWithCount);

  return (
    <ul className="senders-list">
      {authors.sort(sortFn).map(author => (
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
