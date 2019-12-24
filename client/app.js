import React from 'react'
import Room from './components/Room'
import {Guest, Login, SignUp} from './components/RoomForm'
import {Switch, Route} from 'react-router-dom'
import StartBtn from './components/StartBtn'
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'new-led';
  display: grid;
  position: relative;
  grid-template-columns: 300px minmax(min-content, 1fr) 300px;
  transition: background-color 300ms ease-in-out;
`

const App = () => {
  return (
    <Body>
      <Switch>
        <Route path="/room" component={Room} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/guest" component={Guest} />
        <Route path="/" component={StartBtn} />
      </Switch>
    </Body>
  )
}

export default App
