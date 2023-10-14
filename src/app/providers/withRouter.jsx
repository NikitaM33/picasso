import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Spin } from 'antd';

const withRouter = (component) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spin delay={300} className='overlay' size='large' />}>
        {component()}
      </Suspense>
    </BrowserRouter>
  );

  export default withRouter;
