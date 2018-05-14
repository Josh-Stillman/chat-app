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
    this.props.postMessage(this.state.text)
      this.setState({text: ''})
  }


  render() {
    return (
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Input focus placeholder={`Message ${this.props.otherUser}...`} />
      </Form>
    );
  }
}

export default InputForm;
