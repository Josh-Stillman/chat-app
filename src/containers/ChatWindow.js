import React, { Component } from 'react';
import {Header, List, Transition, Loader, Icon, Segment} from 'semantic-ui-react'
import {Message} from '../components/Message'

class ChatWindow extends Component {

  constructor(){
    super();

    this.state = {
      text: '',
      scrollTop: 0,
    };

    this.scrollRef = React.createRef();
  }

  componentWillUpdate(){
    console.log("updated with ref", this.scrollRef)

  }

  handleScroll = (scrollTop) => {
    scrollTop.persist()

    //console.log("scrolling", scrollTop)
      //console.log("refs scroll top", this.refs.chat.scrollTop)
      this.setState({ scrollTop });
   }

  render() {
    return (
      <React.Fragment>
      <Segment attached='bottom' as="div" ref={this.scrollRef} scrollTop={this.state.scrollTop} onScroll={this.handleScroll} style={{height: "600px", overflowY: "auto"}}>
      <List attached="bottom" style={{position: "absolute", bottom: "0px", maxHeight: "600px", overflowY: "none", width: "90%"}}selection divided relaxed size="large">
        {this.props.log.map((item) => <Message message={item} />)}
        <List.Item>
         <Icon size='big' name='talk outline'/>
         </List.Item>
      </List>
      </Segment>
      </React.Fragment>
    );
  }
}

export default ChatWindow;

// style={{position: "absolute", height: "0px", width: "90%"}}
