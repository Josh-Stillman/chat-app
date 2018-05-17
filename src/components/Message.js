import React from 'react';
import {Header, List, Image, Grid} from 'semantic-ui-react'
import '../stylesheets/Message.css'


export const Message = (props) => {

  let userName = props.users.find((u) => u.id === props.message.userId).name
  let userImage = props.users.find((u) => u.id === props.message.userId).image

    return (
      <List.Item>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image avatar src={userImage}/>
            </Grid.Column>
            <Grid.Column>
              <span><Header as='h4' className='message-header' >{userName} </Header> <Header as='h5' disabled className='message-header'>
               <i>{props.message.time ? props.message.time.format("MMMM Do, h:mm A") : ""} </i></Header></span>
              <p className="wrapping-text" >{props.message.text}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
}
