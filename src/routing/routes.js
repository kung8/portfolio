import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../components/dashboard';
import { Music } from '../components/music';
import Kronos from '../components/incredibles/Kronos';
import Selector from '../components/selector/Selector';

export default (
    <Switch>
        <Route path="/selector" render={(props) => <Selector {...props} />} />
        <Route path="/kronos" render={(props) => <Kronos {...props} />} />
        <Route path="/music" render={(props) => <Music {...props} />} />
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
    </Switch>
)