import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import ListComponent from './ListComponent';
import UserDetailsComponent from './UserDetailsComponent';
class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <AppBar
          style={{position: "fixed", top: 0}}
          title={<span style={{float: 'left'}}>Dashboard</span>}
          iconElementRight={<FlatButton label="Logout" onClick={this.props.onBackClick}/>}
        />
        <div className="container">
          <ListComponent />
          <UserDetailsComponent />
        </div>
      </div>
    );
  }
}

export default DashboardComponent;