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
        <Route path="/jornada/:id" component={Jornada} />
        <Route path="/jornada/quiz" component={Quiz} />
        <Route path="/jornada/code" component={Code} />
      </Switch>
    </BrowserRouter>
  );
}
