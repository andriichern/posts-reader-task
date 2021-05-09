import { useSelector } from 'react-redux';
import { authSelector } from 'store/auth/selectors';

export default () => useSelector(authSelector);
