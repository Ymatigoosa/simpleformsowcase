import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import RegistrationContainer from 'components/pages/Registration/RegistrationContainer'; // todo - include container
import Main from 'components/Main';

const Routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={RegistrationContainer} />
    </Route>
);

export default Routes;
