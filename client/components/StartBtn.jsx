import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

const Start = styled.button`
  grid-column: 2/3;
  justify-self: center;
  transform: translateY(45rem);
`

class StartBtn extends Component {
  onClick = () => {
    this.props.history.push('/guest')
  }
  render() {
    return (
      <Start
        onClick={this.onClick}
        type="button"
        className="button is-primary is-warning is-large"
        id="start"
      >
        START NOW
      </Start>
    )
  }
}

export default withRouter(StartBtn)
