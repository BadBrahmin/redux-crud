import React, { Component } from "react";
import { connect } from "react-redux";

import User from "./User";

class AllUsers extends Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
        {/* {this.props.users.map(user => (
          <User key={user.id} user={user} />
        ))} */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state
//   };
// };

// export default connect(mapStateToProps)(AllUsers);

export default AllUsers;
