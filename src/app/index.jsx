import { Routing } from '../pages';
import { withRouter } from './providers';

import './index.scss';

const App = () => {
  return (
    <div className='App wrapper'>
      <h1>Hello FSD!</h1>
      <Routing />
    </div>
  );
};

export default withRouter(App);
