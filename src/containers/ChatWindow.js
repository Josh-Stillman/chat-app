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
    };
  }

  static propTypes = {
    otherTyping: PropTypes.bool,
    log: PropTypes.array,
    user: PropTypes.object,
    otherUser: PropTypes.object,
    users: PropTypes.array,
  };


  scrollToBottom = () => {
    this[`listEnd${this.props.user.id}`].scrollIntoView({ behavior: "auto", alignToTop: "false" });
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  render() {
    return (
      <React.Fragment>
        <Segment attached="bottom" className="outer-window"  >
        <List attached="bottom" className="inner-window" divided relaxed size="large">
          {this.props.log.map((item, i) => <Message message={item} key={i} users={this.props.users} />)}
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
