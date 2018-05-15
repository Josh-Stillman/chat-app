import React, { Component } from 'react';
import {Header, List, Image} from 'semantic-ui-react'
//let moment = require('moment');
import {moment} from 'moment'
export const Message = (props) => {

    return (
      <List.Item>
        <Image avatar src={props.message.user.image}/>
        <List.Content>
          <List.Header>{props.message.user.name ? "" : "user"}</List.Header>
          <List.Description>{props.message.time ? props.message.time.format("MMMM Do, h:mm A") : "time"}</List.Description>
          <List.Description>{props.message.text}</List.Description>
        </List.Content>
      </List.Item>
    );
}
