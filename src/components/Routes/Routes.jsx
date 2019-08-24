import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import ProtectedRoute from './ProtectedRoute';
import SignIn from '../SignIn/SignIn';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={SignIn} />
      <ProtectedRoute exact path='/landing' component={Landing} />
    </BrowserRouter>
  );
};

export default Routes;
