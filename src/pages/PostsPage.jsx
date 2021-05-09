import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPosts } from 'store/posts';
import PostsView from 'components/PostsView';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const history = useHistory();
  const { from_id } = useParams();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPosts(history));
  }, []);

  return (
    <div className="flex">
      <SendersList />
      {from_id && <PostsView from_id={from_id} />}
    </div>
  );
};

export default PostsPage;
