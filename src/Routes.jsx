import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from 'components/pages/home/Home';

function Routes() {
  return (
    <ReactRoutes>
      <Route exact path='/' element={<Home />} />
    </ReactRoutes>
  );
}

export default Routes;
