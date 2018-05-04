import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import { connect } from "react-redux";
import { selectUser } from "../js/actions/index";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  console.log('inside dispath');
  return {
    selectUser: userIndex => dispatch(selectUser(userIndex))
  };
};

// const UsersList = ({ users }) => (
//   <Paper className="leftNavBar">
//     <Subheader>Employee List</Subheader>
//     <List>
//       {users.map(user => (
//         <ListItem
//           key={user.email}
//           primaryText={user.first_name + ' ' + user.last_name}
//           leftAvatar={<Avatar src={user.picture} />}
//         />
//       ))}
//     </List>
//   </Paper>
// );

class UsersList extends Component {

  handleClick = (index) => {
    this.props.selectUser(index);
  }

  render() {
    return (
      <Paper className="leftNavBar">
          <Subheader>Employee List</Subheader>
          <List>
          {this.props.users.map((user, index) => (
            <ListItem
              className={this.props.selectedUserIndex === index ? "selected" : ""}
              key={user.email}
              onClick={() => this.handleClick(index)}
              primaryText={user.first_name + ' ' + user.last_name}
              leftAvatar={<Avatar src={user.picture} />}
            />
          ))}
        </List>
      </Paper>
    );
  }
}
const ListComponent = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default ListComponent;
