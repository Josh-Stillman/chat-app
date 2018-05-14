import React, { Component } from 'react';
import {Header, List, Image} from 'semantic-ui-react'

export const Message = (props) => {

    return (
      <List.Item>
        <Image avatar  />
        <List.Content>
          <List.Header as='a'>{props.message.user.name}</List.Header>
          <List.Description>{props.message.time}</List.Description>
          <List.Description>{props.message.text}</List.Description>
        </List.Content>
      </List.Item>
    );
}
