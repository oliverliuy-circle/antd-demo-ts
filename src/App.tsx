import React, { FC } from 'react';
import logo from './logo.svg';
import './App.less';
import { Breadcrumb, Menu } from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
      <div className="ant-layout-top">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo"></div>
            <Menu theme="dark" mode="horizontal"
              defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">导航一</Menu.Item>
              <Menu.Item key="2">导航二</Menu.Item>
              <Menu.Item key="3">导航三</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-subheader">
          <div className="ant-layout-wrapper">
            <Menu mode="horizontal"
              defaultSelectedKeys={['1']} style={{ marginLeft: 124 }}>
              <Menu.Item key="1">二级导航</Menu.Item>
              <Menu.Item key="2">二级导航</Menu.Item>
              <Menu.Item key="3">二级导航</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div style={{ height: 400 }}></div>
          </div>
        </div>
        <div className="ant-layout-footer">Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持</div>
      </div>
    </div>
  );
}
export default App