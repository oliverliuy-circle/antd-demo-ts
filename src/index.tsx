import React, { Component, MouseEvent, MouseEventHandler, Requireable } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Item from 'antd/lib/list/Item'

interface BlogProps {
  posts: {
    id: number
    title: string
    content: string
  }[]
}
class Blog extends Component<BlogProps>{
  lis: JSX.Element[] = this.props.posts.map(
    (item) => <li key={item.id}>{item.title}</li>
  )
  hs: JSX.Element[] = this.props.posts.map(
    (item) => <div> <h1 key={'h1' + item.id}>{item.title}</h1><h2 key={'h2' + item.id}>{item.content}</h2></div>
  )
  render(): JSX.Element {
    return (
      <div>
        <ul>{this.lis}</ul>
        <hr></hr>
        {this.hs}
      </div>
    )
  }
}
const posts: {
  id: number
  title: string
  content: string
}[] = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' },
    { id: 3, title: 'oliver', content: 'hello oliver.' }
  ];
ReactDOM.render(<Blog posts={posts} />, document.getElementById('example'))