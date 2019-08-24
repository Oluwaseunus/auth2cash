import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (rest.something) {
        return <Component {...props} />;
      } else return <Redirect to='/' />;
    }}
  />
);

export default ProtectedRoute;
