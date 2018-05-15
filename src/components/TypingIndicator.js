import React, { Component } from 'react';
import {Header, Form, Input, List, Icon, Transition, Image} from 'semantic-ui-react'


class InputForm extends Component {

  constructor(){
    super();
    this.state = {
      visible: true,
    };
  }

  onComplete = () => {
      setTimeout(() => { this.setState({visible: !this.state.visible})}, 100);
  }

  render() {
    return (
      <List.Item>
        <Transition onComplete={this.onComplete} transitionOnMount={true} animation={'pulse'} duration={1000} visible={this.state.visible}>
          <Icon size='big' name='talk outline'/>
        </Transition>
      </List.Item>
    );
  }
}

export default InputForm;
