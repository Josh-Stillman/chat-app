import React, { Component } from 'react';
import {Header, Container} from 'semantic-ui-react'
import ChatWindow from './ChatWindow'
import InputForm from '../components/InputForm'

export const UserView = (props) => {


    return (
      <React.Fragment>
          <Header>
            {props.user.name}
          </Header>
          <ChatWindow otherTyping={props.otherTyping} log={props.log} user={props.user} otherUser={props.otherUser} />
          <InputForm user={props.user} otherUser={props.otherUser} postMessage={props.postMessage}/>
      </React.Fragment>
    );
}
