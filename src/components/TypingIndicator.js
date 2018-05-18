import React, { Component } from 'react';
import {List, Icon, Transition} from 'semantic-ui-react'


class TypingIndicator extends Component {

  constructor(){
    super();
    this.state = {
      visible: true,
      timer: null,
    };
  }
  componentDidMount(){
    this.mounted = true
  }

  onComplete = () => {
      if(this.mounted){this.setState({timer: setTimeout(() => { this.setState({visible: !this.state.visible})}, 200)});}
  }

  componentWillUnmount(){
      this.mounted = false
      clearTimeout(this.state.timer)
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

export default TypingIndicator;
