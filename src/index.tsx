import React, { Component, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends Component {
  refs!: {
    [key: string]: HTMLInputElement;
  };
  handleClick(): void {
    this.refs.myInput.focus();
  }
  render(): JSX.Element {
    return (
      <div>
        <input type='text' ref='myInput' />
        <input type='button' value='点我输入框获取焦点' onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('example'))