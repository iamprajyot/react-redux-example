import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import synerzipLogo from '../synerzip-logo-hi-res.gif';

class LoginPanelComponent extends Component {
  render() {
    return (
      <div>
        <div className="centerText loginPanel">
          <img className="synImg" src={synerzipLogo} alt=""/>
          <h1>Login</h1>
          <lable>{this.props.data.flashMessage}</lable>
          <div>
            <TextField 
              hintText="Username"
              floatingLabelText="Username"
              name="username" 
              onChange={(e) => this.props.onInputChange('username', e)}
              value={this.props.data.username}
              errorText={this.props.data.isUsernameError ? 'This field is required' : ''}
              errorStyle={{float: 'left'}}/>
          </div><br></br>
          <div>
            <TextField 
              type="password" 
              hintText="Password"
              floatingLabelText="Password"
              onChange={(e) => this.props.onInputChange('password', e)} 
              value={this.props.data.password}
              errorText={this.props.data.isPasswordError ? 'This field is required' : ''}
              errorStyle={{float: 'left'}}/>
          </div>
          <br></br>
          <RaisedButton  style={{marginRight: '20px'}} onClick={this.props.onReset} primary={true} >Reset</RaisedButton> 
          <RaisedButton onClick={this.props.onSubmit} secondary={true} >Submit</RaisedButton>
        </div>
      </div>
    );
  }
}

export default LoginPanelComponent;