import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home'

const Main = () => {
  return(
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
      </Switch>
    </main>
  );
};

export default Main;
