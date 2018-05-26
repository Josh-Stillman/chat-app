import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Form, Input, Image} from 'semantic-ui-react'
let moment = require('moment');


class InputForm extends Component {

  constructor(){
    super();

    this.state = {
      text: '',
      picture: ''
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

    if(e.target.files){
      const reader = new FileReader();
      if(e.target.files[0]){const base64 = reader.readAsDataURL(e.target.files[0])}

      reader.addEventListener("load", () => {
        this.img.src = reader.result;

        this.setState({picture: reader.result}, () => console.log("picture", this.state))
      }, false);

    }else{
      this.setState({text: e.target.value})
    }


    this.props.indicateTyping(this.props.user)
  }

  handleSubmit = () => {
    if(this.state.text !== '' || this.state.picture !== ''){this.props.postMessage(this.state.text, this.state.picture, this.props.user.id, moment());}
    this.setState({text: ''});
  }


  render() {
    return (
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Input fluid focus icon='reply' size="large" value={this.state.text} placeholder={`Message ${this.props.otherUser.name}...`} />
        <Form.Input size="medium" type="file" /> <br/>
        <img height="20px" width="20px" ref={(el) => { this.img = el }} />
      </Form>
    );
  }
}

export default InputForm;
