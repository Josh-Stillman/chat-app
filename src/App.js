import React, { Component } from 'react';
import {Header} from 'semantic-ui-react'
import {UserView} from './containers/UserView'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      users: [{id: 1, name: "Laura", image: 'https://react.semantic-ui.com/assets/images/avatar/small/veronika.jpg'}, {id: 2, name: "Rob", image: 'https://react.semantic-ui.com/assets/images/avatar/small/matthew.png'}],
      messageId: 0,
      log: []
    };
  }

  
  postMessage = (message, user) => {
    let newLog = this.state.log;
    let newMessage = {id: this.state.messageId + 1, text: message, user: user}
    newLog.push(newMessage)
    this.setState({log: newLog, messageId: this.state.messageId + 1}, console.log("new log", this.state.log))
  }
  
  
  render() {
    return (
      <React.Fragment>
      <p>test</p>
      <Header>
        Chat App
      </Header>
      <UserView user={this.state.users[0]} otherUser={this.state.users[1]} log={this.state.log} postMessage={this.postMessage}/>
      <UserView user={this.state.users[1]} otherUser={this.state.users[0]} log={this.state.log} postMessage={this.postMessage}/>
      </React.Fragment>
    );
  }
}

export default App;