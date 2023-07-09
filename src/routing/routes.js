import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Music from '../components/Music';
import Components from '../components/Components';
import Kronos from '../components/incredibles/Kronos';
import Pokemon from '../components/pokemon/Pokemon';
import Selector from '../components/selector/Selector';
import Camera from '../components/camera/Camera';
import Weather from '../components/weather/Weather';
import Clock from '../components/clock/Clock';
import Timer from '../components/clock/Timer';
import Stopwatch from '../components/clock/Stopwatch';

export default (
    <Switch>
        <Route path="/stopwatch" component={Stopwatch} />
        <Route path="/timer" component={Timer} />
        <Route path="/clock" component={Clock} />
        <Route path="/weather" component={Weather} />
        <Route path="/camera" component={Camera} />
        <Route path="/selector" component={Selector} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/kronos" component={Kronos} />
        <Route path="/components" component={Components} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/music" component={Music} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
    </Switch>
)