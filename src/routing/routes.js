import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../components/dashboard';
import Music from '../components/Music';
import Kronos from '../components/incredibles/Kronos';
import Selector from '../components/selector/Selector';

export default (
    <Switch>
        <Route path="/selector" component={Selector} />
        <Route path="/kronos" component={Kronos} />
        <Route path="/music" component={Music} />
        <Route exact path="/" component={Dashboard} />
    </Switch>
)