import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Music from '../components/Music';
import Components from '../components/Components';

export default (
    <Switch>
        <Route path="/components" component={Components} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/music" component={Music} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
    </Switch>
)