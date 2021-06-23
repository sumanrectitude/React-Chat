import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
        className="form-group"
      >
        <div className="row">
        <div className="col-sm-1">
        <label htmlFor="">
          Enter Message:&nbsp;
          </label>
          </div>
        <div className="col-sm-4">
        
        <input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          className="form-control form-group"
        />
        </div>
        <div className="col-sm-4 btn-send">
        <input type="submit" value={'Send'} className="btn btn-success" />
        </div>
        </div>
      </form>
    )
  }
}

export default ChatInput
