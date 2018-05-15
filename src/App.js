import React, { Component } from 'react';
import {Header, Grid, Container} from 'semantic-ui-react'
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

  
  postMessage = (message, user, time) => {
    let newLog = this.state.log;
    let newMessage = {id: this.state.messageId + 1, text: message, user: user, time: time}
    newLog.push(newMessage)
    this.setState({log: newLog, messageId: this.state.messageId + 1}, console.log("new log", this.state.log))
  }
  
  
  render() {
    return (
      <React.Fragment>
      <Header>
        Chat App
      </Header>
      <Container>
      <Grid columns='equal' divided relaxed padded centered stretched>
        <Grid.Column>
          <UserView user={this.state.users[0]} otherUser={this.state.users[1]} log={this.state.log} postMessage={this.postMessage}/>
        </Grid.Column>
        <Grid.Column>
          <UserView user={this.state.users[1]} otherUser={this.state.users[0]} log={this.state.log} postMessage={this.postMessage}/>
        </Grid.Column>
      </Grid>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;