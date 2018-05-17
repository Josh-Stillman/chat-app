import React, { Component } from 'react';
import {Header, List, Transition, Loader, Icon, Segment} from 'semantic-ui-react'
import {Message} from '../components/Message'
import TypingIndicator from '../components/TypingIndicator'

class ChatWindow extends Component {

  constructor(){
    super();

    this.state = {
      text: '',
      scrollTop: 0,
      scrollHeight: 0,
      scrollRef: React.createRef()
    };

    //this.scrollRef = React.createRef();
  }

  componentWillUpdate(){
    console.log("updated with ref", this.scrollRef)

  }

  handleScroll = (scrollTop) => {
    scrollTop.persist()
    this.setState({scrollTop: scrollTop.target.scrollTop, scrollHeight: scrollTop.target.scrollHeight})
    console.log("scrolling", scrollTop.target.scrollTop, scrollTop.target.scrollHeight, scrollTop)
      //console.log("refs scroll top", this.refs.chat.scrollTop)
      //this.setState({ scrollTop });
   }

scrollToBottom = () => {
  this[`listEnd${this.props.user.id}`].scrollIntoView({ behavior: "auto", alignToTop: "false" });
}

// componentDidMount() {
//   this.scrollToBottom();
// }

// componentWillReceiveProps(nextProps) {
//   if(nextProps.log.length === this.props.log.length){this.scrollToBottom();}
//   console.log("new props", nextProps.log.length, this.props.log.length)
// }
componentDidUpdate(){
  this.scrollToBottom();

}
//scrolltop={this.state.scrollTop} onScroll={this.handleScroll}
  render() {
    return (
      <React.Fragment >
      <Segment id="chatWindow" attached='bottom' as="div" style={{height: "600px", overflowY: "auto"}}>

      <List attached="bottom" style={{position: "absolute", bottom: "0px", maxHeight: "575px", minHeight: "0", overflowY: "none", width: "90%"}} divided relaxed size="large">
        {this.props.log.map((item) => <Message message={item} />)}
        {this.props.otherTyping ? <TypingIndicator /> : ""}
        <List.Item>      <div
                ref={(el) => { this[`listEnd${this.props.user.id}`] = el }}>
              </div></List.Item>

      </List>

      </Segment>
      </React.Fragment>
    );
  }
}

export default ChatWindow;

// style={{position: "absolute", height: "0px", width: "90%"}}
