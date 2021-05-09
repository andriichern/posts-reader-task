import { useState, useLayoutEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from 'store/posts';
import PostsView from 'components/PostsView';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const dispatch = useDispatch();
  const [currentSender, setCurrentSender] = useState();

  const handlePostSelected = useCallback(({ target }) => {
    setCurrentSender(target.dataset.id);
  }, []);

  useLayoutEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="flex">
      <SendersList onItemSelect={handlePostSelected} />
      {currentSender && <PostsView from={currentSender} />}
    </div>
  );
};

export default PostsPage;
