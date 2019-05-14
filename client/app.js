import React, {Component} from 'react'
import {Navbar} from './components'
import Routes from './routes'
import Room from './components/room'
import {Guest, Login, SignUp} from './components/roomForm'
import {Switch, Route} from 'react-router-dom'
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/room" component={Room} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Guest} />
        </Switch>
      </div>
    )
  }
}

export default App
