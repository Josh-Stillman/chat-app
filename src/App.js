import React, { Component } from 'react';
import {Header} from 'semantic-ui-react'
import {UserView} from './containers/UserView'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      users: [{id: 1, name: "Laura", image: ''}, {id: 2, name: "Rob", image: ''}],
      log: []
    };
  }
  
  postMessage = (message) => {
    let newLog = this.state.log;
    newLog.push(message)
    this.setState({log: newLog})
  }
  
  
  render() {
    return (
      <React.Fragment>
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
