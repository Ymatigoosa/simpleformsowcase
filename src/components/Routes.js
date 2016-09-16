import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import Registration from 'components/pages/Registration/Registration'; // todo - include container
import Main from 'components/Main';

const Routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={Registration} />
    </Route>
);

export default Routes;
