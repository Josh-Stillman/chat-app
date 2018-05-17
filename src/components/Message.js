import React, { Component } from 'react';
import {Header, List, Image, Grid} from 'semantic-ui-react'
//let moment = require('moment');
import {moment} from 'moment'
var wrap = require('word-wrap');
var wrap2 = require('wordwrap').hard(0,40);



export const Message = (props) => {
    return (
      <List.Item>
        <Grid columns={2}>
          <Grid.Row>
        <Grid.Column width={2}>
        <Image avatar src={props.message.user.image}/>
        </Grid.Column>
        <Grid.Column>


          <span><Header as='h4' style={{display: "inline"}}>{props.message.user.name} </Header> <Header as='h5' disabled style={{display: "inline"}}>
           <i>{props.message.time ? props.message.time.format("MMMM Do, h:mm A") : ""} </i></Header></span>

          <p style={{wordWrap: "break-word", width: "400px"}} >{props.message.text}</p>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
}
//Grid this out?
  // <List.Content >
  //   </List.Content>

//style={{wordWrap: "break-word", width: "100%" }}
   //style={{wordWrap: "break-word", flex: "inherit"}}
//<div style={{wordWrap: "break-word", width: "450px", display: "inline"}}>
          //</div>

        //  style={{overflowX: "hide"}
