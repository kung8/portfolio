import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'

export default (
    <Switch>
        <Route path='/contact' component={Contact}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/' exact component={About}/>
    </Switch>

)