import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Form, Input} from 'semantic-ui-react'
const moment = require('moment');


class InputForm extends Component {

  constructor(){
    super();

    this.state = {
      text: ''
    };
  }

  static propTypes = {
    postMessage: PropTypes.func,
    indicateTyping: PropTypes.func,
    user: PropTypes.object,
    otherUser: PropTypes.object,
  };

  handleChange = (e) => {
    e.persist()
    this.setState({text: e.target.value})
    this.props.indicateTyping(this.props.user)
  }

  handleSubmit = () => {
    if(this.state.text !== ''){this.props.postMessage(this.state.text, this.props.user.id, moment());}
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
