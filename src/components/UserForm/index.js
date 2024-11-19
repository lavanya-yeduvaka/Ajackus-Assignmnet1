import React, { Component } from "react";
import "./index.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      department: this.state.department,
    };

    // Fetch users from localStorage, add new user and update localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form fields
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });

    // Show success message
    alert("User added successfully!");

    // Optionally, you can redirect to the UserList page or another route after adding the user
    // this.props.history.push("/userlist");
  };

  render() {
    return (
      <div className="form-container">
        <h1 className="heading">Add User</h1>
        <div className="user-form">
          <form className="user-forms" onSubmit={this.handleSubmit}>
            <div className="input-data">
              <label className="label-data">First Name :</label>
              <input
                className="input-box"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-data">
              <label className="label-data">Last Name :</label>
              <input
                className="input-box"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-data">
              <label className="label-data">User Email :</label>
              <input
                className="input-box"
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-data">
              <label className="label-data">Department:</label>
              <input
                className="input-box"
                type="text"
                placeholder="Department"
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
                required
              />
            </div>
            <button className="button" type="submit">
              Add User
            </button>

                      </form>
        </div>
       

      </div>
    );
  }
}

export default UserForm;
