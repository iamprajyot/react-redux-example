import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';

const mapStateToProps = state => {
  return { selectedUser: state.users[state.selectedUserIndex] };
};


class UserDetailsComponent extends Component {
  render() {
    return (
      <div className="rightPanel">
        <Card>
          <Paper style={{overflow:'hidden',height: 100,width: 100,margin: 20,textAlign: 'center',display: 'inline-block',}} zDepth={5} circle={true} >
            <img src={this.props.selectedUser.picture} width="100%" alt="" />
          </Paper>
          <CardTitle 
            title={this.props.selectedUser.first_name + ' ' + this.props.selectedUser.last_name} 
            subtitle={this.props.selectedUser.location.street + ', ' + this.props.selectedUser.location.city + ', ' + this.props.selectedUser.location.state} />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserDetailsComponent);
