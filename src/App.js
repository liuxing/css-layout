import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from './layouts/Layout'
import routes from './router'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              {routes.map((route, i) => <Route key={route.path} {...route}></Route>)}
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App
