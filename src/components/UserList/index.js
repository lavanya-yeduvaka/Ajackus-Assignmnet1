import React, { Component } from "react";
import "./index.css"
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ users: storedUsers });
  }

  handleDelete = (id) => {
    const updatedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: updatedUsers });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  render() {
    const { users } = this.state;
    return (
        <div className="list-container">
      <div className="user-list">
        <h1>User List</h1>
        {users.length === 0 ? (
          <p>No users available.</p>
        ) : (
          <table className="user-table" border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td>
                    <button onClick={() => this.handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </div>
    );
  }
}

export default UserList;
