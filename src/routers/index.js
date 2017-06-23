import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" getComponent={Home}/>
      <Route path="/about" getComponent={About}/>
    </div>
  </Router>
)
const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/a').default)
  }, 'a')
}
const About = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/b').default)
  }, 'b')
}

export default BasicExample