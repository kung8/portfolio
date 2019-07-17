import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Projects from './components/Projects'

export default (
    <Switch>
        <Route path='/contact' component={Contact}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' exact component={About}/>
    </Switch>

)