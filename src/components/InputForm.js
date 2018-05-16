import React, { Component } from 'react';
import {Header, Form, Input} from 'semantic-ui-react'
let moment = require('moment');

class InputForm extends Component {

  constructor(){
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    e.persist()
    this.setState({text: e.target.value})
    this.props.indicateTyping(this.props.user)
  }

  handleSubmit = () => {
    this.props.postMessage(this.state.text, this.props.user, moment());
    this.setState({text: ''});

  }


  render() {
    return (
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Input fluid focus icon='reply' size="large" value={this.state.text} placeholder={`Message ${this.props.otherUser.name}...`} />
      </Form>
    );
  }
}

export default InputForm;
