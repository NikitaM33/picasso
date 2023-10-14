import { Routes, Route } from 'react-router-dom';

import Comment from './Comment';
import FullComment from './FullComment';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Comment />} />
      <Route path='/:id' element={<FullComment />} />
    </Routes>
  );
};
