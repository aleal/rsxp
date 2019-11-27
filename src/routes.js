import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Jornada from './pages/Jornada';
import Quiz from './pages/Quiz';
import Code from './pages/Code';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jornada/:id" exact component={Jornada} />
        <Route path="/jornada/:id/quiz/:task" component={Quiz} />
        <Route path="/jornada/:id/code/:task" component={Code} />
      </Switch>
    </BrowserRouter>
  );
}
