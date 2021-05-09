import { useState, useLayoutEffect, useCallback, memo } from 'react';
import { useSelector } from 'react-redux';
import { senderPosts } from 'store/posts/selectors';
import { sortOrder, numericSort } from 'services/sorting';
import { filterWithKey } from 'utils/filter';
import PostCard from 'components/PostCard';
import PostsViewOptions from './PostsViewOptions';

const MESSAGE_KEY = 'message';
const CREATED_TIME_KEY = 'created_time';

const PostsView = ({ from_id = '' }) => {
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState(sortOrder.ASC);
  const sortFn = numericSort(order, CREATED_TIME_KEY);

  let posts = useSelector(senderPosts(from_id));

  posts = posts?.slice();

  const handleSort = useCallback(({ target }) => {
    setOrder(target.dataset.order);
  }, []);

  useLayoutEffect(() => {
    from_id && order === sortOrder.DESC && setOrder(sortOrder.ASC);
  }, [from_id]);

  return posts?.length ? (
    <section className="posts-view">
      <PostsViewOptions onSort={handleSort} onSearch={setFilter} />
      <div className="posts-view-list">
        {(filter ? filterWithKey(posts, filter, MESSAGE_KEY) : posts).sort(sortFn).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  ) : null;
};

export default memo(PostsView);
