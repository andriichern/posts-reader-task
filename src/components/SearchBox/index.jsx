import { useCallback, memo } from 'react';
import { debounce } from 'utils/fn';

const HANDLER_TIMEOUT = 300;

const SearchBox = ({ onSearch = () => {} }) => {
  const handleChange = useCallback(
    debounce(({ target }) => onSearch(target.value), HANDLER_TIMEOUT),
    [debounce],
  );

  return (
    <div className="search-box">
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default memo(SearchBox);
