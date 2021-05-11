import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostCard from './';

test('PostCard component should display post', async () => {
  const testPost = {
    message: 'test message',
    created_time: new Date(),
  };

  render(<PostCard post={testPost} />);

  const element = screen.getByText('message', { exact: false });

  expect(element.tagName.toLocaleLowerCase()).toEqual('div');
  expect(element.parentElement.tagName.toLowerCase()).toEqual('div');
  expect(element.previousElementSibling.tagName.toLowerCase()).toEqual('hr');
});
