import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app-root'));

if (module.hot) {
  module.hot.accept();
}
