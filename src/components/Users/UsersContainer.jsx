import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentCount,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import classes from "./Users.module.css";

import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {
  totalCount;

  componentDidMount() {
    {
      this.props.toggleIsFetching(true);
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentCount}&count=${this.props.pageSize}`
      )
      .then(response => {
        {
          this.props.toggleIsFetching(false);
        }
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    {
      this.props.toggleIsFetching(true);
    }

    this.props.setCurrentCount(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        {
          this.props.toggleIsFetching(false);
        }
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCounts={this.props.totalCounts}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentCount={this.props.currentCount}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCounts: state.usersPage.totalCounts,
    currentCount: state.usersPage.currentCount,
    isFetching: state.usersPage.isFetching
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(follow(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsers(users));
//     },
//     setCurrentCount: num => {
//       dispatch(setCurrentCount(num));
//     },
//     setTotalCount: totalCount => {
//       dispatch(setTotalCount(totalCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetching(isFetching));
//     }
//   };
// };

const UsersContainer = connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentCount,
    setTotalCount,
    toggleIsFetching
  }
)(UsersAPIComponent);
export default UsersContainer;
