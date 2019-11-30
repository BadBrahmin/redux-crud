import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <p>{this.props.user.email}</p>
        <button>Edit</button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "DELETE_USER", id: this.props.user.id })
          }
        >
          >Delete
        </button>
      </div>
    );
  }
}
export default User;
