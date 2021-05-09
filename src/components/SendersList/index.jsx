import { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sendersWithCount } from 'store/posts/selectors';
import { sortOrder, lexicalSort } from 'services/sorting';
import { filterWithKey } from 'utils/filter';
import { getPostLink } from 'utils/navigation';
import Badge from 'components/Badge';
import SearchBox from 'components/SearchBox';

const FROM_NAME_KEY = 'from_name';
const sortFn = lexicalSort(sortOrder.ASC, FROM_NAME_KEY);

const SendersList = () => {
  const [filter, setFilter] = useState();
  const senders = useSelector(sendersWithCount);

  return senders.length ? (
    <section>
      <SearchBox onSearch={setFilter} />
      <ul className="senders-list">
        {(filter ? filterWithKey(senders, filter, FROM_NAME_KEY) : senders)
          .sort(sortFn)
          .map(sender => (
            <li key={sender.from_id} data-id={sender.from_id} className="senders-list-item">
              <NavLink
                to={getPostLink(sender.from_id)}
                activeClassName="active"
                className="flex align-center justify-spaced senders-list-link"
              >
                <span>{sender.from_name}</span>
                <Badge value={sender.count} />
              </NavLink>
            </li>
          ))}
      </ul>
    </section>
  ) : null;
};

export default memo(SendersList);
