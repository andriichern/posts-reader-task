import { useState, useLayoutEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { fetchPosts } from 'store/posts';
import PostsView from 'components/PostsView';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const [currentSender, setCurrentSender] = useState();

  const handlePostSelected = useCallback(({ target }) => {
    setCurrentSender(target.dataset.id);
  }, []);

  useLayoutEffect(() => {
    dispatch(fetchPosts(auth.data.sl_token));
  }, []);

  return (
    <div className="flex">
      <SendersList onItemSelect={handlePostSelected} />
      {currentSender && <PostsView from={currentSender} />}
    </div>
  );
};

export default PostsPage;
