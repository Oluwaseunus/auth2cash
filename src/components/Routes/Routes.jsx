import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import ProtectedRoute from './ProtectedRoute';
import NavBar from '../NavBar/NavBar';

import { useAuth0 } from '../../utils/oauth';

const Routes = () => {
  const { loading } = useAuth0();

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Route exact path='/' component={NavBar} />
      <ProtectedRoute exact path='/landing' component={Landing} />
    </BrowserRouter>
  );
};

export default Routes;
