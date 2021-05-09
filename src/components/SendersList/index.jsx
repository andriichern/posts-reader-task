import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sendersWithCount } from 'store/posts/selectors';
import { sortOrder, lexicalSort } from 'services/sorting';
import { getPostLink } from 'utils/navigation';
import Badge from '../Badge';

const FROM_NAME_KEY = 'from_name';
const sortFn = lexicalSort(sortOrder.ASC, FROM_NAME_KEY);

const SendersList = () => {
  const authors = useSelector(sendersWithCount);

  return (
    <ul className="senders-list">
      {authors.sort(sortFn).map(author => (
        <li key={author.from_id} data-id={author.from_id} className="senders-list-item">
          <NavLink
            to={getPostLink(author.from_id)}
            activeClassName="active"
            className="flex align-center justify-spaced senders-list-link"
          >
            <span>{author.from_name}</span>
            <Badge value={author.count} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default memo(SendersList);
