import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { fetchPosts } from 'store/posts';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPosts(auth.data.sl_token));
  }, []);

  return <SendersList />;
};

export default PostsPage;
