import { useState, useLayoutEffect, useCallback } from 'react';
import PostsView from 'components/PostsView';
import SendersList from 'components/SendersList';

const PostsPage = () => {
  const [currentSender, setCurrentSender] = useState();

  const handlePostSelected = useCallback(({ target }) => {
    setCurrentSender(target.dataset.id);
  }, []);

  return (
    <div className="flex">
      <SendersList onItemSelect={handlePostSelected} />
      {currentSender && <PostsView from={currentSender} />}
    </div>
  );
};

export default PostsPage;
