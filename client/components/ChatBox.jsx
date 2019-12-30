import React, {Component} from 'react'
import socket from '../socket'
import {connect} from 'react-redux'
import styled from 'styled-components'

const ChatBoxContainer = styled.div`
  h2 {
    text-align: center;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'new-led', monospace;
    color: black;
    opacity: 1; /* Firefox */
  }
`

class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      displayMsg: []
    }
  }

  componentDidMount() {
    this.messageBox.scrollTop = this.messageBox.scrollHeight
    socket.on('update msg', (msg, name) => {
      this.setState(prevState => {
        return {displayMsg: [...prevState.displayMsg, {msg, name}]}
      })
    })
  }

  componentDidUpdate() {
    this.messageBox.scrollTop = this.messageBox.scrollHeight
  }
  componentWillUnmount() {
    socket.removeAllListeners()
  }

  boxRef = messageBox => {
    this.messageBox = messageBox
  }

  msgRef = messageInput => {
    this.messageInput = messageInput
  }

  handleChange = e => {
    this.setState({msg: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.msg) {
      const {name} = this.props.credentials
      socket.emit('new message', this.state.msg, name)
    }
    this.setState({msg: ''})
  }

  renderMessages = messages => {
    return (
      <div className="messages-wrapper">
        {messages.map(message => {
          return (
            <div className="message-wrapper" key={message.msg}>
              {/* <div className={cssClasses}> */}
              <span className="username">{message.name}: </span>
              <span className="body">{message.msg}</span>
              {/* </div> */}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <ChatBoxContainer>
        <h2>CHATROOM</h2>
        <div className="message-box" ref={this.boxRef}>
          {this.renderMessages(this.state.displayMsg)}
        </div>

        <form className="input-box" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.msgRef}
            className="input"
            placeholder="Say hello"
            value={this.state.msg}
            onChange={this.handleChange}
          />

          <input className="button is-warning" type="submit" />
        </form>
      </ChatBoxContainer>
    )
  }
}

const mSTP = state => ({
  credentials: state.roomReducer
})

export default connect(mSTP)(ChatBox)
