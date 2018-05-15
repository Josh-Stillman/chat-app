import React, { Component } from 'react';
import {Header, List, Transition, Loader} from 'semantic-ui-react'
import {Message} from '../components/Message'

class ChatWindow extends Component {

  constructor(){
    super();

    this.state = {
      text: ''
    };
  }

  typingIndicator = () => {
    return (
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
      <List selection animated divided relaxed size="large">
        {this.props.log.map((item) => <Message message={item} />)}
         <Loader active inline />
      </List>
        {this.typingIndicator()}
      </React.Fragment>
    );
  }
}

export default ChatWindow;
