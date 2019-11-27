import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Login from "./pages/Login";
import Home from "./pages/Home";
=======
import Login from './pages/Login';
import Home from './pages/Home';
import Jornada from './pages/Jornada';
>>>>>>> f08a8f88051029eff1e5206878c27e16414d440e

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Jornada" component={Jornada} />
      </Switch>
    </BrowserRouter>
  );
}
