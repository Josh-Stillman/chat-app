import React, { Component } from 'react';
import {Header, Form, Input} from 'semantic-ui-react'


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
    //logic here to show typing in other chat window.
  }

  handleSubmit = () => {
    this.props.postMessage(this.state.text, this.props.user);
    this.setState({text: ''}, console.log("reset the input", this.state));
  }


  render() {
    return (
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Input focus size="large" value={this.state.text} placeholder={`Message ${this.props.otherUser.name}...`} />
      </Form>
    );
  }
}

export default InputForm;
