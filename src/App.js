import React, { Component } from 'react';
import {Header, Grid, Container, Segment} from 'semantic-ui-react'
import {UserView} from './containers/UserView'
import './stylesheets/App.css';
import {server} from './services/MockServer'

class App extends Component {

  constructor(){
    super();
    this.state = {
      users: [{id: 1, name: "Laura", image: 'https://react.semantic-ui.com/assets/images/avatar/small/veronika.jpg'}, {id: 2, name: "Rob", image: 'https://react.semantic-ui.com/assets/images/avatar/small/matthew.png'}],
      messageId: 0,
      log: [],
      user1Typing: false,
      user2Typing: false,
      user1TypingTimeout: null,
      user2TypingTimeout: null,
    };
  }

  //The postMessage makes use of a mock-server for now.
  //It can be refactored with a fetch request to use with a real server.
  postMessage = (message, picture, userId, time) => {
    let newLog = this.state.log;

    let newMessage = {text: message, userId: userId, time: time, picture: picture}
    
    let response = server.post(newMessage)
    newLog.push(response)

    this.setState({log: newLog, messageId: this.state.messageId + 1, [`user${userId}Typing`]: false})

    if(this.state[`user${userId}TypingTimeout`]){
      clearTimeout(this.state[`user${userId}TypingTimeout`])
    }
  }

  indicateTyping = (user) => {
    if(!this.state[`user${user.id}Typing`]){
      this.setState({[`user${user.id}Typing`]: true})
    }
    if(this.state[`user${user.id}TypingTimeout`]){
      clearTimeout(this.state[`user${user.id}TypingTimeout`])
    }

    this.setState({[`user${user.id}TypingTimeout`]: setTimeout(() => { if (this.state[`user${user.id}Typing`]) {this.setState({[`user${user.id}Typing`]: false})}}, 1000)})
  }

  render() {
    return (
      <React.Fragment>
      <Segment inverted basic>
        <Header as="h3">
          Chat App
        </Header>
      </Segment>
      <Container>
      <Grid columns='equal' divided relaxed padded centered stretched>
        <Grid.Column>
          <UserView user={this.state.users[0]} otherUser={this.state.users[1]} users={this.state.users} log={this.state.log} postMessage={this.postMessage} otherTyping={this.state.user2Typing} indicateTyping={this.indicateTyping}/>
        </Grid.Column>
        <Grid.Column>
          <UserView user={this.state.users[1]} otherUser={this.state.users[0]} log={this.state.log} users={this.state.users} postMessage={this.postMessage} otherTyping={this.state.user1Typing} indicateTyping={this.indicateTyping}/>
        </Grid.Column>
      </Grid>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;
