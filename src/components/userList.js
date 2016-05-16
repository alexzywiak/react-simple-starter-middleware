import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../actions/index';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user){
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a href="#" className="btn btn-primary">Email</a>
      </div>
    );
  }

  render(){
    return (
      <div className="userList">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {users: state.users};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);