import { useState, useLayoutEffect, useCallback, memo } from 'react';
import { useSelector } from 'react-redux';
import { senderPosts } from 'store/posts/selectors';
import { sortOrder, numericSort } from 'services/sorting';
import PostCard from 'components/PostCard';

const CREATED_TIME_KEY = 'created_time';

const PostsView = ({ from_id = '' }) => {
  const posts = useSelector(senderPosts(from_id));
  const [order, setOrder] = useState(sortOrder.ASC);
  const sortFn = numericSort(order, CREATED_TIME_KEY);

  const handleSort = useCallback(({ target }) => {
    setOrder(target.dataset.order);
  }, []);

  useLayoutEffect(() => {
    from_id && order === sortOrder.DESC && setOrder(sortOrder.ASC);
  }, [from_id]);

  return posts?.length ? (
    <div className="posts-view">
      <div className="flex spaced posts-view-options">
        <div className="flex posts-view-sorting">
          <span
            data-order={sortOrder.ASC}
            className="flex centered posts-view-sort-btn up"
            onClick={handleSort}
          ></span>
          <span
            data-order={sortOrder.DESC}
            className="flex centered posts-view-sort-btn down"
            onClick={handleSort}
          ></span>
        </div>
      </div>
      {posts
        .slice()
        .sort(sortFn)
        .map(post => (
          <PostCard key={post.id} post={post} />
        ))}
    </div>
  ) : null;
};

export default memo(PostsView);
