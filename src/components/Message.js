import React from 'react';
import {Header, List, Image, Grid} from 'semantic-ui-react'
import '../stylesheets/Message.css'


export const Message = (props) => {

  const user = props.users.find((u) => u.id === props.message.userId)
  const userName = user.name
  const userImage = user.image

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
              <img src={props.message.picture} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
}
