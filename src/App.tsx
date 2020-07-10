import React, { FC } from 'react';
import logo from './logo.svg';
import { Button, Divider, Radio } from 'antd'
import './App.less';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> */}
      <Divider>
        <Button type="primary">Button</Button>
        <br></br>
        <Radio>是</Radio>
        <Radio>不是</Radio>
      </Divider>
    </div>
  );
}
export default App;