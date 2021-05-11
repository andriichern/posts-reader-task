import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './';

test('Badge component should display value', async () => {
  const testValue = 5;
  render(<Badge value={testValue} />);

  const element = screen.getByText(testValue);
  expect(element.tagName.toLocaleLowerCase()).toEqual('span');
});
