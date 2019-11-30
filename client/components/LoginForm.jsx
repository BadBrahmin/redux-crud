import React, { Component } from "react";
import { connect } from "react-redux";

class LoginForm extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const name = this.getName.value;
  //   const email = this.getEmail.value;
  //   const data = {
  //     id: new Date(),
  //     name,
  //     email
  //   };
  //   // console.log(data);

  //   this.props.dispatch({
  //     type: "ADD_USER",
  //     data
  //   });
  //   this.getName.value = "";
  //   this.getEmail.value = "";
  // };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            ref={input => (this.getName = input)}
          />
          <br />
          <br />
          <input
            required
            type="email"
            placeholder="Email"
            ref={input => (this.getEmail = input)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state
//   };
// };
// export default connect(mapStateToProps)(LoginForm);

export default LoginForm;
