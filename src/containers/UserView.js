import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Header, Container, Image} from 'semantic-ui-react'
import ChatWindow from './ChatWindow'
import InputForm from '../components/InputForm'



export const UserView = (props) => {


    return (
      <React.Fragment>
          <Header>
            <Image size="tiny" src={props.user.image}/>{props.user.name}
          </Header>
          <ChatWindow otherTyping={props.otherTyping} log={props.log} user={props.user} otherUser={props.otherUser} users={props.users} />
          <InputForm user={props.user} otherUser={props.otherUser} postMessage={props.postMessage} indicateTyping={props.indicateTyping}/>
      </React.Fragment>
    );
}
const propTypes = {
  otherTyping: PropTypes.bool,
  log: PropTypes.array,
  user: PropTypes.object,
  otherUser: PropTypes.object,
  users: PropTypes.array,
  indicateTyping: PropTypes.func,
  postMessage: PropTypes.func,
};

UserView.propTypes = propTypes;
