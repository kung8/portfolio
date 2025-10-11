import {  Route, Switch } from 'react-router-dom';

import { Dashboard } from '../components/dashboard';
import Kronos from '../components/incredibles/Kronos';
import { Music } from '../components/music';
import { Recipe, Recipes } from '../components/recipes';
import { Recommendations } from '../components/recommendations/Recommendations';
import Selector from '../components/selector/Selector';

export default (
    <Switch>
        <Route path="/selector" render={(props) => <Selector {...props} />} />
        <Route path="/kronos" render={(props) => <Kronos {...props} />} />
        <Route path="/music" render={(props) => <Music {...props} />} />
        <Route path="/recommendations" render={(props) => <Recommendations {...props} />} />
        {/* <Route path="/hymns" render={(props) => <Hymns {...props} />} /> */}
        <Route path="/recipes/:id" render={(props) => <Recipe {...props} />} />
        <Route path="/recipes" render={(props) => <Recipes {...props} />} />
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
    </Switch>
)