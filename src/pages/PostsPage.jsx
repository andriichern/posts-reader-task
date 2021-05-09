import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from 'store/posts';
import PostsView from 'components/PostsView';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const dispatch = useDispatch();
  const { from_id } = useParams();

  useLayoutEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="flex">
      <SendersList />
      {from_id && <PostsView from_id={from_id} />}
    </div>
  );
};

export default PostsPage;
