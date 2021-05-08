import { memo } from 'react';
import { useSelector } from 'react-redux';
import { senderPosts } from 'store/posts/selectors';
import PostCard from 'components/PostCard';

const PostsView = ({ from = '' }) => {
  const posts = useSelector(senderPosts(from));

  return posts.length ? (
    <div className="posts-view">
      {posts
        .slice()
        .sort((a, b) => {
          return b.created_time - a.created_time;
        })
        .map(post => (
          <PostCard key={post.id} post={post} />
        ))}
    </div>
  ) : null;
};

export default memo(PostsView);
