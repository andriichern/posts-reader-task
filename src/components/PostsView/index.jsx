import { memo } from 'react';
import { useSelector } from 'react-redux';
import { senderPosts } from 'store/posts/selectors';
import { sortOrder, numericSort } from 'services/sorting';
import PostCard from 'components/PostCard';

const CREATED_TIME_KEY = 'created_time';

const PostsView = ({ from = '' }) => {
  const posts = useSelector(senderPosts(from));
  const sortFn = numericSort(sortOrder.ASC, CREATED_TIME_KEY);

  return posts.length ? (
    <div className="posts-view">
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
