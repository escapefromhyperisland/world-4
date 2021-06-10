import React from 'react';
import { Angelo1 } from './Angelo1';
import { Angelo2 } from './components/Angelo2';
import { Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Route exact path="/" component={Angelo1} />
      <Route exact path="/Angelo2" component={Angelo2} />
    </div>
  );
};
