import React, { Component } from 'react';
import LoginPanelComponent from './LoginPanelComponent';
import DashboardComponent from './DashboardComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import React, { Component } from 'react';
// import MainPanelComponent from 'MainPanelComponent';
// import logo from './logo.svg';
import '../App.css';
class MainPanelComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      isUsernameError: false,
      isPasswordError: false,
      username: '',
      password: '',
      flashMessage: '',
      showLoginComponent: false
    }
  }

  onInputChange = (type, event) => {
    let stateData = {}
    if(type === 'username'){
      let userError = !!event.target.value ? false : true
      stateData = {
        username: event.target.value,
        isUsernameError: userError
      }
    }else{      
      let passwordError = !!event.target.value ? false : true
      stateData = {
        password: event.target.value,
        isPasswordError: passwordError
      }
    }
    this.setState(stateData);
  }

  onSubmit = () => {
    let usernameError = false;
    let passwordError = false;
    let notification = '';
    let showLoginComp = true;
    if(this.state.username === ''){
      usernameError = true
    }
    if(this.state.password === ''){
      passwordError = true
    }
    if(this.state.password === 'admin' && this.state.username === 'admin'){
      notification = 'Congrats !!!! Login Successful.';
      showLoginComp = false;
    }else{
      notification = 'Invalid Credentials, please try again.';
    }
    this.setState({
      isUsernameError: usernameError,
      isPasswordError: passwordError,
      flashMessage: notification,
      showLoginComponent: showLoginComp
    });
  }

  onReset = () => {
    this.setState({
      isUsernameError: false,
      isPasswordError: false,
      username: '',
      password: '',
      flashMessage: '',
      showLoginComponent: true
    });
  }

  // goBackSimon = () => {
  //   this.onReset();
  //   this.setState({showLoginComponent: true});
  // }

  render() {
    let showComponent = null;
    if(this.state.showLoginComponent)    {
      showComponent = <LoginPanelComponent 
          data = {this.state} 
          onReset={this.onReset} 
          onSubmit = {this.onSubmit} 
          onInputChange = {this.onInputChange}/>;
    }else{
      showComponent = <DashboardComponent onBackClick={this.onReset}/>;
    }
    return (
      <MuiThemeProvider>
        <div>
          {showComponent}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainPanelComponent;