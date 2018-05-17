import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Header, List, Transition, Loader, Icon, Segment} from 'semantic-ui-react'
import {Message} from '../components/Message'
import TypingIndicator from '../components/TypingIndicator'
import '../stylesheets/ChatWindow.css';

class ChatWindow extends Component {

  constructor(){
    super();

    this.state = {
      text: '',
      scrollTop: 0,
      scrollHeight: 0,
      scrollRef: React.createRef()
    };
  }

  static propTypes = {
    otherTyping: PropTypes.bool,
    log: PropTypes.array,
    user: PropTypes.object,
    otherUser: PropTypes.object,
    users: PropTypes.array,
  };


  // handleScroll = (scrollTop) => {
  //   scrollTop.persist()
  //   this.setState({scrollTop: scrollTop.target.scrollTop, scrollHeight: scrollTop.target.scrollHeight})
  //   console.log("scrolling", scrollTop.target.scrollTop, scrollTop.target.scrollHeight, scrollTop)
  //  }

  scrollToBottom = () => {
    this[`listEnd${this.props.user.id}`].scrollIntoView({ behavior: "auto", alignToTop: "false" });
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  render() {
    return (
      <React.Fragment>
        <Segment id="chatWindow" attached='bottom' as="div" className="outer-window" >
        <List attached="bottom" className="inner-window" divided relaxed size="large">
          {this.props.log.map((item) => <Message message={item} users={this.props.users} />)}
          {this.props.otherTyping ? <TypingIndicator /> : ""}
          <List.Item>
            <div ref={(el) => { this[`listEnd${this.props.user.id}`] = el }}></div>
          </List.Item>
        </List>
        </Segment>
      </React.Fragment>
    );
  }
}

export default ChatWindow;

//style={{height: "600px", overflowY: "auto"}}
