import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Initial from '../pages/initial';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Initial } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;