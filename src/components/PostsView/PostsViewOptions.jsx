import { memo } from 'react';
import SearchBox from 'components/SearchBox';
import { sortOrder } from 'services/sorting';

const PostsViewOptions = ({ onSort, onSearch }) => (
  <div className="flex justify-spaced">
    <div className="flex posts-view-sorting">
      <span
        data-order={sortOrder.ASC}
        className="flex centered posts-view-sort-btn up"
        onClick={onSort}
      ></span>
      <span
        data-order={sortOrder.DESC}
        className="flex centered posts-view-sort-btn down"
        onClick={onSort}
      ></span>
    </div>
    <SearchBox onSearch={onSearch} />
  </div>
);

export default memo(PostsViewOptions);
