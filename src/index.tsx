import React, { Component, MouseEvent, MouseEventHandler, Requireable } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Item from 'antd/lib/list/Item'
import { createPublicKey } from 'crypto'

interface HelloProps {
  name: string
}
interface HelloState {
  opacity: number
}
class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = { opacity: 1.0 };
  }
  componentDidMount(): void {
    window.setInterval(() => {
      let opacity: number = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }, 100);
  }
  render(): JSX.Element {
    return (
      <div style={{ opacity: this.state.opacity }}>
        Hello {this.props.name}
      </div>
    );
  }
}
ReactDOM.render(<Hello name="world" />, document.body);