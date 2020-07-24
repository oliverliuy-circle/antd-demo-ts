import React, { Component, ChangeEvent } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

interface DemoState
{
  userName: string
  password: string
}
interface RequestModel
{
  requestJson: string
}
interface ResponseModel
{
  IsDone: boolean
  Message: string
  User: User
}
interface DOBase
{
  ID: number
  GUID: string
  InsertTime: Date
  UpdateTime: Date
}
interface User extends DOBase
{
  UserName: string
  Password: string
  Name: string
  Sex: boolean
  Birthday: Date
  Phone: string
  Email: string
  Image: string
  Score: number
}
class Demo extends Component<{}, DemoState>
{
  constructor ( props: {} )
  {
    super( props )
    this.state = { userName: '', password: '' }
  }
  userNameChange ( e: ChangeEvent<HTMLInputElement> ): void
  {
    this.setState( { userName: e.target.value } )
  }
  passwordChange ( e: ChangeEvent<HTMLInputElement> ): void
  {
    this.setState( { password: e.target.value } )
  }
  login (): void
  {
    const url: string = 'http://172.6.200.70:8001/WebServiceForCircle.asmx/GetUserByUserNameAndPassword'
    const data: RequestModel = { requestJson: JSON.stringify( this.state ) }
    $.ajax( { type: 'post', url: url, data: data } ).done( function ( result: any )
    {
      let resultStr: string = result.children[ 0 ].innerHTML
      let responseModel: ResponseModel = JSON.parse( resultStr )
      if ( !responseModel.IsDone )
      {
        alert( responseModel.Message )
        return
      }
      alert( '登录成功' )
    } ).fail( function ( e: JQuery.jqXHR<any> )
    {
      window.alert( e.status );
    } )
  }
  cancel (): void
  {
    this.setState( { userName: '', password: '' } )
  }
  render (): JSX.Element
  {
    return (
      <div>
        <label>用户名</label>
        <input type='text' onChange={ ( e: ChangeEvent<HTMLInputElement> ) => this.userNameChange( e ) } value={ this.state.userName }></input>
        <br />
        <label>密码</label>
        <input type='password' onChange={ ( e: ChangeEvent<HTMLInputElement> ) => this.passwordChange( e ) } value={ this.state.password }></input>
        <br />
        <button onClick={ () => this.login() }>登录</button><button onClick={ () => this.cancel() }>取消</button>
      </div>
    )
  }
}
ReactDOM.render( <Demo />, document.getElementById( 'example' ) )