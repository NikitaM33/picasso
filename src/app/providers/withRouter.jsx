import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { Spin } from 'antd';

import store from '../redux/store';

const withRouter = (component) => () =>
  (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense
          fallback={<Spin delay={300} className='overlay' size='large' />}>
          {component()}
        </Suspense>
      </Provider>
    </BrowserRouter>
  );

export default withRouter;
