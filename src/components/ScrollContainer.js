import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Header, List, Transition, Loader, Icon, Segment} from 'semantic-ui-react'
import {Message} from '../components/Message'
import TypingIndicator from '../components/TypingIndicator'
import '../stylesheets/ChatWindow.css';

class ScrollContainer extends Component {

  constructor(){
    super();
  }


  render() {
    return (
        <div id="chatWindow" attached='bottom' as="div" className="ui bottom attached segment outer-window" >
        </div>
    );
  }
}

export default ScrollContainer;
