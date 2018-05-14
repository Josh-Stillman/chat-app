import React, { Component } from 'react';
import {Header, List} from 'semantic-ui-react'
import {Message} from '../components/Message'

class ChatWindow extends Component {

  constructor(){
    super();

    this.state = {
      text: ''
    };
  }



  render() {
    return (
      <List>
        {this.props.log.map((item) => <Message message={item} />)}
      </List>
    );
  }
}

export default ChatWindow;
